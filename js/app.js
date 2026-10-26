/* ============================================================
   QuizBank — app.js
   Ứng dụng thi thử trắc nghiệm tĩnh (HTML/CSS/JS + data JS)
   ============================================================ */
(function () {
  "use strict";

  var EXAMS = window.EXAMAPP_EXAMS || [];
  var SUBJECTS = window.EXAMAPP_SUBJECTS || [];

  /* ---------- tiny helpers ---------- */
  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };
  var esc = function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };
  var LETTERS = ["A", "B", "C", "D", "E", "F"];
  var store = {
    get: function (k, d) {
      try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; }
    },
    set: function (k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} },
    del: function (k) { try { localStorage.removeItem(k); } catch (e) {} }
  };
  var pKey = function (id) { return "qb.progress." + id; };
  var bKey = function (id) { return "qb.best." + id; };

  function typeset(el) {
    if (window.MathJax && window.MathJax.typesetPromise) {
      window.MathJax.typesetPromise(el ? [el] : undefined).catch(function () {});
    }
  }

  var toastTimer = null;
  function toast(msg) {
    var t = $("#toast");
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove("show"); }, 2600);
  }

  /* ---------- theme ---------- */
  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    store.set("qb.theme", theme);
    var btn = $("#themeBtn");
    if (btn) btn.textContent = theme === "dark" ? "☀️" : "🌙";
  }
  applyTheme(store.get("qb.theme", "light"));

  /* ---------- derived data ---------- */
  function subjectOf(exam) {
    for (var i = 0; i < SUBJECTS.length; i++) if (SUBJECTS[i].id === exam.subjectId) return SUBJECTS[i];
    return { id: exam.subjectId, name: exam.subjectId, nameVi: "", icon: "📘", color: "#0f766e", description: "" };
  }
  function examsOfSubject(sid) {
    return EXAMS.filter(function (e) { return e.subjectId === sid; });
  }
  function bestOf(examId) { return store.get(bKey(examId), null); }
  function progressOf(examId) { return store.get(pKey(examId), null); }

  /* ============================================================
     ROUTER
     ============================================================ */
  var currentExam = null;
  var view = null; // exam runtime state

  function route() {
    var h = location.hash || "#/";
    var m = h.match(/^#\/exam\/([\w-]+)/);
    closeLightbox();
    if (m) {
      var exam = null;
      for (var i = 0; i < EXAMS.length; i++) if (EXAMS[i].id === m[1]) exam = EXAMS[i];
      if (exam) { openExam(exam); return; }
    }
    currentExam = null;
    view = null;
    renderHome();
  }
  window.addEventListener("hashchange", route);

  /* ============================================================
     HOME
     ============================================================ */
  var homeFilter = { subject: "all", q: "" };

  function renderHome() {
    stopTimer();
    var totalQ = EXAMS.reduce(function (s, e) { return s + e.questions.length; }, 0);
    var app = $("#view");
    var chips = ['<button class="subject-chip' + (homeFilter.subject === "all" ? " active" : "") + '" data-sid="all"><span class="emoji">🗂️</span>Tất cả môn <span class="count">' + EXAMS.length + '</span></button>'];
    SUBJECTS.forEach(function (s) {
      chips.push('<button class="subject-chip' + (homeFilter.subject === s.id ? " active" : "") + '" data-sid="' + esc(s.id) + '"><span class="emoji">' + s.icon + "</span>" + esc(s.name) + ' <span class="count">' + examsOfSubject(s.id).length + "</span></button>");
    });

    var sections = "";
    function card(exam) {
      var sub = subjectOf(exam);
      var best = bestOf(exam.id);
      var prog = progressOf(exam.id);
      var answered = 0, finished = false;
      if (prog) {
        answered = Object.keys(prog.answers || {}).length;
        finished = !!prog.finished;
      }
      var bestHtml = best ? '<span class="best-score">🏅 ' + best.percent + "%</span>" : "";
      var startLabel = answered > 0 && !finished ? "Làm tiếp (" + answered + "/" + exam.questions.length + ")" : finished ? "Làm lại" : "Vào thi";
      return '' +
        '<article class="card exam-card">' +
          '<div class="top">' +
            '<span class="badge subject">' + sub.icon + " " + esc(exam.subjectId) + "</span>" +
            '<span class="badge ' + (exam.typeKey === "final" ? "final" : "retake") + '">' + esc(exam.type) + "</span>" +
            bestHtml +
          "</div>" +
          "<h3>" + esc(exam.title) + "</h3>" +
          '<div class="meta">' +
            '<span class="chip">🗓 ' + esc(exam.semester) + "</span>" +
            '<span class="chip">📋 ' + exam.questions.length + " câu</span>" +
            '<span class="chip">⏱ ' + exam.durationMinutes + " phút</span>" +
          "</div>" +
          (answered > 0 && !finished
            ? '<div class="progress-track-mini"><div style="width:' + (answered / exam.questions.length * 100).toFixed(1) + '%"></div></div>'
            : "") +
          '<div class="foot">' +
            '<a class="btn primary" href="#/exam/' + esc(exam.id) + '">' + startLabel + " →</a>" +
            (answered > 0
              ? '<button class="btn ghost danger" data-reset="' + esc(exam.id) + '" title="Xóa tiến độ đã lưu">Xóa tiến độ</button>'
              : "") +
          "</div>" +
        "</article>";
    }

    function match(exam) {
      if (homeFilter.subject !== "all" && exam.subjectId !== homeFilter.subject) return false;
      if (!homeFilter.q) return true;
      var sub = subjectOf(exam);
      var hay = (exam.title + " " + exam.type + " " + exam.semester + " " + exam.originalFile + " " + sub.name + " " + (sub.nameVi || "") + " " + sub.id).toLowerCase();
      return homeFilter.q.split(/\s+/).every(function (w) { return hay.indexOf(w.toLowerCase()) !== -1; });
    }

    var filtered = EXAMS.filter(match);
    if (homeFilter.subject === "all" && !homeFilter.q) {
      SUBJECTS.forEach(function (s) {
        var list = examsOfSubject(s.id);
        if (!list.length) return;
        sections += '<section class="subject-section">' +
          '<div class="section-head"><span class="emoji">' + s.icon + "</span>" +
          "<div><h2>" + esc(s.name) + (s.nameVi ? ' <span style="color:var(--muted);font-weight:600;font-size:14px">· ' + esc(s.nameVi) + "</span>" : "") + "</h2>" +
          '<div class="sub">' + esc(s.description || "") + "</div></div></div>" +
          '<div class="exam-grid">' + list.map(card).join("") + "</div></section>";
      });
    } else {
      sections = filtered.length
        ? '<section class="subject-section"><div class="exam-grid">' + filtered.map(card).join("") + "</div></section>"
        : '<div class="card empty-note">🔎 Không tìm thấy đề thi phù hợp.<br>Hãy thử từ khóa khác (ví dụ: <i>ELC201</i>, <i>final</i>, <i>retake</i>, <i>2026</i>).</div>';
    }

    app.innerHTML =
      '<div class="container">' +
        '<div class="hero">' +
          '<h1>Ôn thi <span class="accent">trắc nghiệm</span> — luyện ngay, chấm ngay</h1>' +
          "<p>Chọn bộ đề, trả lời từng câu và nhận phản hồi tức thì: đáp án đúng/sai, giải thích chi tiết bằng tiếng Việt và thống kê tỉ lệ đúng–sai sau mỗi lượt chọn.</p>" +
          '<div class="search-wrap"><span class="icon">🔎</span>' +
          '<input id="searchBox" type="search" placeholder="Tìm kiếm bộ đề: tên môn, kỳ thi, loại… (VD: ELC201 final)" value="' + esc(homeFilter.q) + '" aria-label="Tìm kiếm bộ đề"></div>' +
          '<div class="stat-row">' +
            '<span class="stat-pill">📚 <b>' + SUBJECTS.length + "</b>&nbsp;môn học</span>" +
            '<span class="stat-pill">📝 <b>' + EXAMS.length + "</b>&nbsp;bộ đề</span>" +
            '<span class="stat-pill">❓ <b>' + totalQ + "</b>&nbsp;câu hỏi</span>" +
          "</div>" +
          '<div class="subject-strip">' + chips.join("") + "</div>" +
        "</div>" +
        sections +
      "</div>";

    $("#searchBox").addEventListener("input", function () {
      homeFilter.q = this.value;
      renderHomeKeepFocus();
    });
    $$(".subject-chip", app).forEach(function (c) {
      c.addEventListener("click", function () {
        homeFilter.subject = c.getAttribute("data-sid");
        renderHome();
      });
    });
    $$("[data-reset]", app).forEach(function (b) {
      b.addEventListener("click", function () {
        store.del(pKey(b.getAttribute("data-reset")));
        toast("Đã xóa tiến độ của bộ đề.");
        renderHome();
      });
    });
    typeset();
  }

  function renderHomeKeepFocus() {
    var pos = $("#searchBox") ? $("#searchBox").selectionStart : null;
    renderHome();
    var box = $("#searchBox");
    if (box && pos !== null) { box.focus(); try { box.setSelectionRange(pos, pos); } catch (e) {} }
  }

  /* ============================================================
     EXAM VIEW
     ============================================================ */
  var timerInt = null;

  function stopTimer() { if (timerInt) { clearInterval(timerInt); timerInt = null; } }

  function freshState(exam) {
    return {
      examId: exam.id,
      answers: {},      // qIndex -> [selected]
      revealed: {},     // qIndex -> true
      current: 0,
      elapsed: 0,
      finished: false
    };
  }

  function openExam(exam) {
    stopTimer();
    currentExam = exam;
    var saved = progressOf(exam.id);
    if (saved && !saved.finished && Object.keys(saved.answers || {}).length > 0) {
      view = saved;
    } else if (saved && saved.finished) {
      view = freshState(exam); // start clean, keep best score
    } else {
      view = freshState(exam);
    }
    renderExamShell();
    if (saved && !saved.finished && Object.keys(saved.answers || {}).length > 0) {
      toast("Đã khôi phục tiến độ: " + Object.keys(saved.answers).length + "/" + exam.questions.length + " câu đã làm.");
    }
    startTimer();
  }

  function startTimer() {
    stopTimer();
    timerInt = setInterval(function () {
      if (!view || view.finished) return stopTimer();
      view.elapsed++;
      store.set(pKey(currentExam.id), view);
      var remain = currentExam.durationMinutes * 60 - view.elapsed;
      var tEl = $("#statTime");
      if (tEl) {
        tEl.textContent = fmtClock(Math.max(0, remain));
        if (remain <= 300) tEl.parentElement.classList.add("warn");
      }
      if (remain <= 0) {
        toast("⏰ Hết giờ! Tự động nộp bài.");
        finishExam();
      }
    }, 1000);
    var tEl = $("#statTime");
    if (tEl) tEl.textContent = fmtClock(Math.max(0, currentExam.durationMinutes * 60 - view.elapsed));
  }
  function fmtClock(sec) {
    var m = Math.floor(sec / 60), s = sec % 60;
    return (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
  }

  function renderExamShell() {
    var exam = currentExam, sub = subjectOf(exam);
    var app = $("#view");
    app.innerHTML =
      '<div class="exam-layout">' +
        '<aside class="exam-side">' +
          '<div class="card side-card">' +
            '<h4>Bảng câu hỏi</h4>' +
            '<div class="navigator" id="navigator"></div>' +
            '<div class="navigator-legend">' +
              '<span><i class="dot"></i>Chưa làm</span>' +
              '<span><i class="dot ok"></i>Đúng</span>' +
              '<span><i class="dot bad"></i>Sai</span>' +
              '<span><i class="dot cur"></i>Đang xem</span>' +
            "</div>" +
          "</div>" +
          '<div class="card side-card">' +
            "<h4>Đề thi</h4>" +
            '<div style="font-size:13.5px;color:var(--muted);line-height:1.7">' +
              '<div>' + sub.icon + " <b style='color:var(--text)'>" + esc(exam.subjectId) + "</b> — " + esc(sub.name) + "</div>" +
              "<div>" + esc(exam.type) + " · " + esc(exam.semester) + "</div>" +
              "<div>📄 " + esc(exam.originalFile) + "</div>" +
            "</div>" +
            '<button class="btn primary" id="finishBtn" style="width:100%;margin-top:12px">🏁 Nộp bài</button>' +
            '<button class="btn ghost" id="homeBtn2" style="width:100%;margin-top:8px">← Về trang chủ</button>' +
          "</div>" +
        "</aside>" +
        '<section>' +
          '<div class="card exam-head">' +
            '<div class="titles">' +
              '<div class="t1">' + esc(exam.title) + "</div>" +
              '<div class="t2">Chọn đáp án để kiểm tra ngay — giải thích hiện ra sau mỗi lượt chọn</div>' +
            "</div>" +
            '<div class="live-stats">' +
              '<div class="live-stat time"><span class="v" id="statTime">--:--</span><span class="k">Thời gian</span></div>' +
              '<div class="live-stat"><span class="v" id="statDone">0</span><span class="k">Đã làm</span></div>' +
              '<div class="live-stat ok"><span class="v" id="statOk">—</span><span class="k">Đúng</span></div>' +
              '<div class="live-stat bad"><span class="v" id="statBad">—</span><span class="k">Sai</span></div>' +
            "</div>" +
          "</div>" +
          '<div class="overall-progress" id="overallProgress"></div>' +
          '<div id="questionArea"></div>' +
        "</section>" +
      "</div>";

    $("#finishBtn").addEventListener("click", finishExam);
    $("#homeBtn2").addEventListener("click", function () { location.hash = "#/"; });
    renderNavigator();
    renderQuestion();
    updateStats();
  }

  function counts() {
    var ok = 0, bad = 0, done = 0;
    currentExam.questions.forEach(function (q, i) {
      if (view.revealed[i]) {
        done++;
        if (isCorrect(i)) ok++; else bad++;
      }
    });
    return { ok: ok, bad: bad, done: done };
  }
  function isCorrect(i) {
    var q = currentExam.questions[i];
    var sel = (view.answers[i] || []).slice().sort().join(",");
    var ans = q.answers.slice().sort().join(",");
    return sel === ans;
  }

  function updateStats() {
    var c = counts();
    var doneEl = $("#statDone"), okEl = $("#statOk"), badEl = $("#statBad");
    if (!doneEl) return;
    doneEl.textContent = c.done + "/" + currentExam.questions.length;
    if (c.done > 0) {
      okEl.textContent = Math.round(c.ok / c.done * 100) + "%";
      badEl.textContent = Math.round(c.bad / c.done * 100) + "%";
    } else { okEl.textContent = "—"; badEl.textContent = "—"; }
    var total = currentExam.questions.length;
    var track = $("#overallProgress");
    if (track) {
      track.innerHTML =
        '<div class="seg ok" style="width:' + (c.ok / total * 100) + '%"></div>' +
        '<div class="seg bad" style="width:' + (c.bad / total * 100) + '%"></div>';
    }
    renderNavigator();
  }

  function renderNavigator() {
    var nav = $("#navigator");
    if (!nav) return;
    var html = "";
    currentExam.questions.forEach(function (q, i) {
      var cls = "nav-q";
      if (view.revealed[i]) cls += isCorrect(i) ? " ok" : " bad";
      if (i === view.current) cls += " current";
      html += '<button class="' + cls + '" data-i="' + i + '" title="Câu ' + (i + 1) + '">' + (i + 1) + "</button>";
    });
    nav.innerHTML = html;
    $$("button", nav).forEach(function (b) {
      b.addEventListener("click", function () {
        view.current = parseInt(b.getAttribute("data-i"), 10);
        store.set(pKey(currentExam.id), view);
        renderQuestion();
        renderNavigator();
      });
    });
  }

  function renderQuestion() {
    var exam = currentExam;
    var i = Math.max(0, Math.min(view.current, exam.questions.length - 1));
    var q = exam.questions[i];
    var area = $("#questionArea");
    var revealed = !!view.revealed[i];
    var sel = view.answers[i] || [];
    var isMulti = q.answers.length > 1;

    var optsHtml = q.options.map(function (opt, oi) {
      var cls = "option";
      var mark = "";
      if (revealed) {
        var isAns = q.answers.indexOf(oi) !== -1;
        var isSel = sel.indexOf(oi) !== -1;
        if (isAns && isSel) { cls += " correct"; mark = "✓"; }
        else if (isAns && !isSel) { cls += " reveal"; mark = "✓"; }
        else if (!isAns && isSel) { cls += " wrong"; mark = "✕"; }
      } else if (sel.indexOf(oi) !== -1) {
        cls += " selected";
      }
      return '<button class="' + cls + '" data-oi="' + oi + '"' + (revealed ? " disabled" : "") + '>' +
        '<span class="letter">' + LETTERS[oi] + "</span>" +
        '<span class="content">' + opt + "</span>" +
        '<span class="mark">' + mark + "</span></button>";
    }).join("");

    var stateBadge = "";
    if (revealed) stateBadge = isCorrect(i)
      ? '<span class="q-state ok">✓ Chính xác</span>'
      : '<span class="q-state bad">✕ Sai — đáp án: ' + q.answers.map(function (a) { return LETTERS[a]; }).join(", ") + "</span>";

    var checkBtn = (isMulti && !revealed)
      ? '<button class="btn primary" id="checkMulti" ' + (sel.length ? "" : "disabled") + ">Kiểm tra</button>"
      : "";

    area.innerHTML =
      '<article class="card q-card" id="qcard">' +
        '<div class="q-top">' +
          '<span class="q-num">Câu ' + (i + 1) + " / " + exam.questions.length + "</span>" +
          (isMulti ? '<span class="chip">Chọn nhiều đáp án</span>' : "") +
          stateBadge +
        "</div>" +
        '<div class="q-text">' + q.text + "</div>" +
        (q.image
          ? '<div class="q-image-wrap"><img class="q-image" src="' + exam.imagePath + q.image + '" alt="' + esc(q.imageAlt || "Hình minh họa câu hỏi") + '" loading="lazy"></div>'
          : "") +
        (isMulti && !revealed ? '<div class="multi-note">ℹ️ Câu hỏi có <b>nhiều đáp án đúng</b> — chọn tất cả các phương án bạn cho là đúng rồi bấm “Kiểm tra”.</div>' : "") +
        '<div class="options" id="optList">' + optsHtml + "</div>" +
        (revealed ? explainHtml(q, i) : "") +
        '<div class="q-actions">' +
          '<button class="btn ghost" id="prevBtn" ' + (i === 0 ? "disabled" : "") + ">← Câu trước</button>" +
          '<div class="right">' + checkBtn +
          '<button class="btn ' + (i === exam.questions.length - 1 ? "" : "primary") + '" id="nextBtn" ' + (i === exam.questions.length - 1 ? "disabled" : "") + ">Câu sau →</button></div>" +
        "</div>" +
      "</article>";

    // events
    $("#prevBtn").addEventListener("click", function () { if (view.current > 0) { view.current--; persist(); renderQuestion(); renderNavigator(); } });
    var nb = $("#nextBtn");
    if (nb) nb.addEventListener("click", function () { if (view.current < exam.questions.length - 1) { view.current++; persist(); renderQuestion(); renderNavigator(); } });
    var cm = $("#checkMulti");
    if (cm) cm.addEventListener("click", function () { reveal(i); });

    if (!revealed) {
      $$("#optList .option", area).forEach(function (btn) {
        btn.addEventListener("click", function () {
          var oi = parseInt(btn.getAttribute("data-oi"), 10);
          if (isMulti) {
            var s = view.answers[i] || [];
            var pos = s.indexOf(oi);
            if (pos === -1) s.push(oi); else s.splice(pos, 1);
            view.answers[i] = s;
            persist();
            renderQuestion();
          } else {
            view.answers[i] = [oi];
            reveal(i);
          }
        });
      });
    }

    var img = $(".q-image", area);
    if (img) img.addEventListener("click", function () { openLightbox(img.src, img.alt); });

    updateStats();
    persist();
    typeset(area);
    var card = $("#qcard");
    if (card) card.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  function explainHtml(q, i) {
    var good = isCorrect(i);
    var ansText = q.answers.map(function (a) { return LETTERS[a]; }).join(", ");
    return '<div class="explain">' +
      (good
        ? '<div class="verdict ok">🎉 Chính xác! Bạn đã chọn đúng đáp án ' + ansText + ".</div>"
        : '<div class="verdict bad">❌ Chưa đúng. Đáp án đúng là <u>' + ansText + "</u>.</div>") +
      '<div class="label">💡 Giải thích</div>' +
      '<div class="body">' + q.explain + "</div>" +
      "</div>";
  }

  function reveal(i) {
    if (view.revealed[i]) return;
    view.revealed[i] = true;
    persist();
    renderQuestion();
    var c = counts();
    toast(c.ok + " đúng · " + c.bad + " sai — tỉ lệ đúng " + Math.round(c.ok / Math.max(1, c.done) * 100) + "%");
  }

  function persist() { store.set(pKey(currentExam.id), view); }

  /* ---------- finish ---------- */
  function finishExam() {
    if (!view || view.finished) return;
    var c = counts();
    if (c.done < currentExam.questions.length) {
      if (!confirm("Bạn mới làm " + c.done + "/" + currentExam.questions.length + " câu. Nộp bài và xem kết quả?")) return;
    }
    view.finished = true;
    persist();
    stopTimer();
    var percent = Math.round(c.ok / currentExam.questions.length * 100);
    var best = bestOf(currentExam.id);
    if (!best || percent > best.percent) {
      store.set(bKey(currentExam.id), { correct: c.ok, total: currentExam.questions.length, percent: percent, date: new Date().toISOString().slice(0, 10) });
    }
    var wrongIdx = [];
    currentExam.questions.forEach(function (q, i) { if (view.revealed[i] && !isCorrect(i)) wrongIdx.push(i); });
    var wrongBtns = wrongIdx.length
      ? '<div style="margin-top:6px;font-size:13px;font-weight:700;color:var(--muted)">Câu cần ôn lại:</div><ul class="wrong-list">' +
        wrongIdx.map(function (i) { return '<li style="display:contents"><button data-review="' + i + '">Câu ' + (i + 1) + "</button></li>"; }).join("") + "</ul>"
      : (c.done > 0
        ? '<div style="margin-top:10px;color:var(--green);font-weight:700">🌟 Tuyệt vời — không có câu nào sai!</div>'
        : '<div style="margin-top:10px;color:var(--muted);font-weight:700">Bạn chưa trả lời câu nào — hãy thử lại nhé!</div>');

    var ring = ringSvg(percent);
    var overlay = document.createElement("div");
    overlay.className = "overlay";
    overlay.innerHTML =
      '<div class="card modal">' +
        "<h3>📋 Kết quả " + esc(currentExam.title) + "</h3>" +
        '<div class="sub">Nộp bài lúc ' + new Date().toLocaleTimeString("vi-VN") + " · " + esc(currentExam.type) + "</div>" +
        '<div class="score-ring" style="position:relative">' + ring +
          '<div class="val"><b style="color:' + (percent >= 40 ? (percent >= 80 ? "var(--green)" : "var(--gold)") : "var(--red)") + '">' + percent + "%</b><span>" + c.ok + "/" + currentExam.questions.length + " câu đúng</span></div>" +
        "</div>" +
        '<div class="sum-grid">' +
          '<div class="sum-box ok"><div class="v">' + c.ok + '</div><div class="k">Câu đúng</div></div>' +
          '<div class="sum-box bad"><div class="v">' + c.bad + '</div><div class="k">Câu sai</div></div>' +
          '<div class="sum-box time"><div class="v">' + fmtClock(view.elapsed) + '</div><div class="k">Thời gian</div></div>' +
        "</div>" +
        wrongBtns +
        '<div class="actions" style="margin-top:18px">' +
          '<button class="btn primary" id="againBtn">🔄 Làm lại từ đầu</button>' +
          '<button class="btn" id="reviewBtn">Xem lại đề</button>' +
          '<button class="btn ghost" id="homeBtn3">🏠 Trang chủ</button>' +
        "</div>" +
      "</div>";
    document.body.appendChild(overlay);
    overlay.addEventListener("click", function (e) { if (e.target === overlay) overlay.remove(); });
    $("#againBtn", overlay).addEventListener("click", function () { overlay.remove(); store.del(pKey(currentExam.id)); openExam(currentExam); });
    $("#homeBtn3", overlay).addEventListener("click", function () { overlay.remove(); location.hash = "#/"; });
    $("#reviewBtn", overlay).addEventListener("click", function () {
      overlay.remove();
      var first = wrongIdx.length ? wrongIdx[0] : 0;
      view.current = first;
      renderQuestion(); renderNavigator();
    });
    $$("[data-review]", overlay).forEach(function (b) {
      b.addEventListener("click", function () {
        overlay.remove();
        view.current = parseInt(b.getAttribute("data-review"), 10);
        renderQuestion(); renderNavigator();
      });
    });
    updateStats();
  }

  function ringSvg(percent) {
    var r = 62, circ = 2 * Math.PI * r;
    var off = circ * (1 - percent / 100);
    var col = percent >= 80 ? "var(--green)" : percent >= 40 ? "var(--gold)" : "var(--red)";
    return '<svg width="150" height="150" viewBox="0 0 150 150">' +
      '<circle cx="75" cy="75" r="' + r + '" fill="none" stroke="var(--surface-2)" stroke-width="12"/>' +
      '<circle cx="75" cy="75" r="' + r + '" fill="none" stroke="' + col + '" stroke-width="12" stroke-linecap="round" ' +
      'stroke-dasharray="' + circ.toFixed(1) + '" stroke-dashoffset="' + off.toFixed(1) + '" transform="rotate(-90 75 75)"/></svg>';
  }

  /* ---------- lightbox ---------- */
  function openLightbox(src, alt) {
    var lb = document.createElement("div");
    lb.className = "lightbox";
    lb.innerHTML = '<img src="' + src + '" alt="' + esc(alt || "") + '">';
    document.body.appendChild(lb);
    lb.addEventListener("click", function () { lb.remove(); });
  }
  function closeLightbox() { $$(".lightbox").forEach(function (l) { l.remove(); }); }

  /* ---------- keyboard ---------- */
  document.addEventListener("keydown", function (e) {
    if (!currentExam || $("#searchBox")) {
      if ($("#searchBox") === document.activeElement) return;
    }
    if (!currentExam) return;
    if (e.target && /input|textarea/i.test(e.target.tagName)) return;
    if (e.key === "ArrowRight") { var nb = $("#nextBtn"); if (nb && !nb.disabled) nb.click(); }
    else if (e.key === "ArrowLeft") { var pb = $("#prevBtn"); if (pb && !pb.disabled) pb.click(); }
    else if (/^[1-4]$/.test(e.key)) {
      var opts = $$("#optList .option");
      var idx = parseInt(e.key, 10) - 1;
      if (opts[idx] && !opts[idx].disabled) opts[idx].click();
    }
  });

  /* ---------- boot ---------- */
  var themeBtn = $("#themeBtn");
  if (themeBtn) themeBtn.addEventListener("click", function () {
    applyTheme(document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark");
  });
  var homeBtn = $("#homeBtn");
  if (homeBtn) homeBtn.addEventListener("click", function () { location.hash = "#/"; });

  window.addEventListener("beforeunload", function () { if (currentExam && view && !view.finished) persist(); });

  route();
  // re-typeset when MathJax finishes loading (async CDN)
  var mjWait = setInterval(function () {
    if (window.MathJax && window.MathJax.typesetPromise) { clearInterval(mjWait); typeset(); }
  }, 400);
  setTimeout(function () { clearInterval(mjWait); }, 15000);
})();
