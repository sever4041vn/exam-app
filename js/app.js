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

  /* ---------- shuffle helpers (đảo câu hỏi / đáp án) ---------- */
  function identityMap(n) { var a = [], i; for (i = 0; i < n; i++) a.push(i); return a; }
  function numSort(a, b) { return a - b; }
  function shuffleArr(arr) {
    var a = arr.slice(), i, j, t;
    for (i = a.length - 1; i > 0; i--) { j = Math.floor(Math.random() * (i + 1)); t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }
  function shuffleSettings() {
    return { q: !!store.get("qb.shuffleQ", false), a: !!store.get("qb.shuffleA", false) };
  }

  /* ---------- bộ đề tự tạo (chỉ lưu localStorage) ---------- */
  var CKEY = "qb.customExams";
  function getCustoms() { return store.get(CKEY, []); }
  function saveCustoms(list) { store.set(CKEY, list); }
  function findQuestion(examId, n) {
    for (var i = 0; i < EXAMS.length; i++) {
      if (EXAMS[i].id !== examId) continue;
      for (var j = 0; j < EXAMS[i].questions.length; j++) {
        if (EXAMS[i].questions[j].n === n) return { exam: EXAMS[i], q: EXAMS[i].questions[j] };
      }
    }
    return null;
  }
  function customToExam(c) {
    var qs = [];
    (c.refs || []).forEach(function (r) {
      var hit = findQuestion(r.e, r.n);
      if (!hit) return;
      var q = { n: qs.length + 1, text: hit.q.text, options: hit.q.options, answers: hit.q.answers, explain: hit.q.explain };
      if (hit.q.image) { q.image = hit.exam.imagePath + hit.q.image; if (hit.q.imageAlt) q.imageAlt = hit.q.imageAlt; }
      qs.push(q);
    });
    return {
      id: c.id, subjectId: c.subjectId, title: c.name,
      originalFile: "Bộ đề tự tạo — ghép từ các đề có sẵn",
      semester: "Tạo ngày " + String(c.createdAt || "").slice(0, 10),
      semesterKey: "custom", type: "Bộ đề tự tạo", typeKey: "custom",
      durationMinutes: 0, imagePath: "", questions: qs
    };
  }
  function findExamAny(id) {
    for (var i = 0; i < EXAMS.length; i++) if (EXAMS[i].id === id) return EXAMS[i];
    var cs = getCustoms(), k;
    for (k = 0; k < cs.length; k++) if (cs[k].id === id) return customToExam(cs[k]);
    return null;
  }
  function stripTags(s) { var d = document.createElement("div"); d.innerHTML = s; return d.textContent || ""; }

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
      var exam = findExamAny(m[1]);
      if (exam) { openExam(exam); return; }
    }
    if (h === "#/create" || h === "#/create/") { renderBuilder(); return; }
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
            '<span class="badge ' + (exam.typeKey === "final" ? "final" : exam.typeKey === "custom" ? "custom" : "retake") + '">' + esc(exam.type) + "</span>" +
            bestHtml +
          "</div>" +
          "<h3>" + esc(exam.title) + "</h3>" +
          '<div class="meta">' +
            '<span class="chip">🗓 ' + esc(exam.semester) + "</span>" +
            '<span class="chip">📋 ' + exam.questions.length + " câu</span>" +
            '<span class="chip">' + (exam.durationMinutes > 0 ? "⏱ " + exam.durationMinutes + " phút" : "♾ Không giới hạn giờ") + "</span>" +
          "</div>" +
          (answered > 0 && !finished
            ? '<div class="progress-track-mini"><div style="width:' + (answered / exam.questions.length * 100).toFixed(1) + '%"></div></div>'
            : "") +
          '<div class="foot">' +
            '<a class="btn primary" href="#/exam/' + esc(exam.id) + '">' + startLabel + " →</a>" +
            (answered > 0
              ? '<button class="btn ghost danger" data-reset="' + esc(exam.id) + '" title="Xóa tiến độ đã lưu">Xóa tiến độ</button>'
              : "") +
            (exam.typeKey === "custom"
              ? '<button class="btn ghost danger" data-delcustom="' + esc(exam.id) + '" title="Xóa bộ đề tự tạo này">🗑 Xóa</button>'
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
    var shSet = shuffleSettings();
    var customs = getCustoms();
    var customSection = "";
    if (customs.length) {
      var visCustoms = customs.map(customToExam).filter(match);
      if (visCustoms.length) {
        customSection = '<section class="subject-section">' +
          '<div class="section-head"><span class="emoji">🧩</span>' +
          "<div><h2>Bộ đề tự tạo của tôi</h2>" +
          '<div class="sub">Chỉ lưu trên máy bạn (localStorage) — không ảnh hưởng ngân hàng đề gốc, xóa bất cứ lúc nào bằng nút 🗑.</div></div>' +
          '<a class="btn primary" style="margin-left:auto" href="#/create">➕ Tạo bộ đề mới</a></div>' +
          '<div class="exam-grid">' + visCustoms.map(card).join("") + "</div></section>";
      }
    }
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
          "<p style='font-weight: bold; color: red'>Đề tham khảo không chắc chắn ra thi, làm để trải nghiệm (Không làm được bài thi đừng hỏi tôi).</p>" +
          '<div class="search-wrap"><span class="icon">🔎</span>' +
          '<input id="searchBox" type="search" placeholder="Tìm kiếm bộ đề: tên môn, kỳ thi, loại… (VD: ELC201 final)" value="' + esc(homeFilter.q) + '" aria-label="Tìm kiếm bộ đề"></div>' +
          '<div class="stat-row">' +
            '<span class="stat-pill">📚 <b>' + SUBJECTS.length + "</b>&nbsp;môn học</span>" +
            '<span class="stat-pill">📝 <b>' + EXAMS.length + "</b>&nbsp;bộ đề</span>" +
            '<span class="stat-pill">❓ <b>' + totalQ + "</b>&nbsp;câu hỏi</span>" +
            (customs.length ? '<span class="stat-pill">🧩 <b>' + customs.length + "</b>&nbsp;bộ tự tạo</span>" : "") +
          "</div>" +
          '<div class="subject-strip">' + chips.join("") + "</div>" +
          '<div class="tool-row">' +
            '<label class="switch-item" title="Áp dụng khi vào thi / làm lại"><input type="checkbox" id="shufQ"' + (shSet.q ? " checked" : "") + '><span class="sw"></span><span class="lbl">🔀 Đảo thứ tự câu hỏi</span></label>' +
            '<label class="switch-item" title="Áp dụng khi vào thi / làm lại"><input type="checkbox" id="shufA"' + (shSet.a ? " checked" : "") + '><span class="sw"></span><span class="lbl">🔀 Đảo thứ tự đáp án</span></label>' +
            '<a class="btn primary" href="#/create">🧩 Tạo bộ đề riêng</a>' +
          "</div>" +
        "</div>" +
        customSection +
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
    var sq = $("#shufQ"), sa = $("#shufA");
    if (sq) sq.addEventListener("change", function () {
      store.set("qb.shuffleQ", sq.checked);
      toast(sq.checked ? "🔀 Đã BẬT đảo thứ tự câu hỏi — áp dụng cho lần vào thi / làm lại mới." : "Đã TẮT đảo thứ tự câu hỏi.");
    });
    if (sa) sa.addEventListener("change", function () {
      store.set("qb.shuffleA", sa.checked);
      toast(sa.checked ? "🔀 Đã BẬT đảo thứ tự đáp án — áp dụng cho lần vào thi / làm lại mới." : "Đã TẮT đảo thứ tự đáp án.");
    });
    $$("[data-delcustom]", app).forEach(function (b) {
      b.addEventListener("click", function () {
        var id = b.getAttribute("data-delcustom");
        if (!confirm("Xóa bộ đề tự tạo này? Tiến độ và điểm tốt nhất của nó cũng bị xóa theo.")) return;
        saveCustoms(getCustoms().filter(function (c) { return c.id !== id; }));
        store.del(pKey(id)); store.del(bKey(id));
        toast("Đã xóa bộ đề tự tạo.");
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
      answers: {},      // vị trí hiển thị -> [chỉ số phương án theo HIỂN THỊ]
      revealed: {},     // vị trí hiển thị -> true
      current: 0,
      elapsed: 0,
      finished: false,
      order: identityMap(exam.questions.length),                                            // vị trí hiển thị -> câu gốc
      optOrder: exam.questions.map(function (q) { return identityMap(q.options.length); }), // hiển thị -> phương án gốc
      shuffledQ: false,
      shuffledA: false
    };
  }

  function applyShuffle(vs, exam) {
    var s = shuffleSettings();
    if (s.q && exam.questions.length > 1) {
      // optOrder phải đi theo CÙNG hoán vị với order để mapping đúng câu
      var perm = shuffleArr(vs.order);
      vs.order = perm;
      vs.optOrder = perm.map(function (origIdx) { return shuffleArr(vs.optOrder[origIdx]); });
      vs.shuffledQ = true;
    }
    if (s.a) { vs.optOrder = vs.optOrder.map(shuffleArr); vs.shuffledA = true; }
  }
  function migrateState(vs, exam) {
    // tiến độ cũ (trước khi có tính năng đảo) dùng thứ tự gốc
    if (!vs.order || vs.order.length !== exam.questions.length) vs.order = identityMap(exam.questions.length);
    if (!vs.optOrder || vs.optOrder.length !== exam.questions.length) vs.optOrder = exam.questions.map(function (q) { return identityMap(q.options.length); });
    if (typeof vs.shuffledQ !== "boolean") vs.shuffledQ = false;
    if (typeof vs.shuffledA !== "boolean") vs.shuffledA = false;
  }

  function openExam(exam) {
    stopTimer();
    currentExam = exam;
    var saved = progressOf(exam.id);
    if (saved && !saved.finished && Object.keys(saved.answers || {}).length > 0) {
      view = saved;
      migrateState(view, exam); // giữ nguyên thứ tự của lần làm trước
    } else if (saved && saved.finished) {
      view = freshState(exam); // start clean, keep best score
      applyShuffle(view, exam);
    } else {
      view = freshState(exam);
      applyShuffle(view, exam);
    }
    renderExamShell();
    if (saved && !saved.finished && Object.keys(saved.answers || {}).length > 0) {
      toast("Đã khôi phục tiến độ: " + Object.keys(saved.answers).length + "/" + exam.questions.length + " câu đã làm.");
    }
    startTimer();
  }

  function startTimer() {
    stopTimer();
    var total = (currentExam.durationMinutes || 0) * 60; // 0 = không giới hạn (bộ đề tự tạo)
    timerInt = setInterval(function () {
      if (!view || view.finished) return stopTimer();
      view.elapsed++;
      store.set(pKey(currentExam.id), view);
      var tEl = $("#statTime");
      if (!tEl) return;
      if (total > 0) {
        var remain = total - view.elapsed;
        tEl.textContent = fmtClock(Math.max(0, remain));
        if (remain <= 300) tEl.parentElement.classList.add("warn");
        if (remain <= 0) {
          toast("⏰ Hết giờ! Tự động nộp bài.");
          finishExam();
        }
      } else {
        tEl.textContent = fmtClock(view.elapsed);
      }
    }, 1000);
    var tEl = $("#statTime");
    if (tEl) tEl.textContent = total > 0 ? fmtClock(Math.max(0, total - view.elapsed)) : fmtClock(view.elapsed);
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
              (exam.typeKey === "custom"
                ? "<div>🧩 Bộ đề tự tạo · ghép " + exam.questions.length + " câu từ các đề " + esc(exam.subjectId) + "</div>" +
                  "<div>♾ Không giới hạn thời gian</div>"
                : "<div>" + esc(exam.type) + " · " + esc(exam.semester) + "</div>" +
                  "<div>📄 " + esc(exam.originalFile) + "</div>") +
            "</div>" +
            '<button class="btn primary" id="finishBtn" style="width:100%;margin-top:12px">🏁 Nộp bài</button>' +
            '<button class="btn ghost" id="homeBtn2" style="width:100%;margin-top:8px">← Về trang chủ</button>' +
          "</div>" +
        "</aside>" +
        '<section>' +
          '<div class="card exam-head">' +
            '<div class="titles">' +
              '<div class="t1">' + esc(exam.title) +
                (view.shuffledQ ? ' <span class="chip shuf">🔀 Đảo câu hỏi</span>' : "") +
                (view.shuffledA ? ' <span class="chip shuf">🔀 Đảo đáp án</span>' : "") +
              "</div>" +
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
  function qAt(i) { return currentExam.questions[view.order[i]]; }
  function correctDisp(i) {
    // các chỉ số phương án ĐÚNG theo thứ tự hiển thị (đã đảo)
    var q = qAt(i), map = view.optOrder[i];
    return q.answers.map(function (a) { return map.indexOf(a); }).sort(numSort);
  }
  function isCorrect(i) {
    var q = qAt(i);
    var sel = (view.answers[i] || []).map(function (j) { return view.optOrder[i][j]; }).slice().sort(numSort).join(",");
    var ans = q.answers.slice().sort(numSort).join(",");
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
    var q = qAt(i);
    var area = $("#questionArea");
    var revealed = !!view.revealed[i];
    var sel = view.answers[i] || [];
    var isMulti = q.answers.length > 1;
    var dispAns = revealed ? correctDisp(i) : [];

    var optMap = view.optOrder[i]; // vị trí hiển thị j -> chỉ số phương án gốc
    var optsHtml = optMap.map(function (origOi, j) {
      var opt = q.options[origOi];
      var cls = "option";
      var mark = "";
      if (revealed) {
        var isAns = dispAns.indexOf(j) !== -1;
        var isSel = sel.indexOf(j) !== -1;
        if (isAns && isSel) { cls += " correct"; mark = "✓"; }
        else if (isAns && !isSel) { cls += " reveal"; mark = "✓"; }
        else if (!isAns && isSel) { cls += " wrong"; mark = "✕"; }
      } else if (sel.indexOf(j) !== -1) {
        cls += " selected";
      }
      return '<button class="' + cls + '" data-oi="' + j + '"' + (revealed ? " disabled" : "") + '>' +
        '<span class="letter">' + LETTERS[j] + "</span>" +
        '<span class="content">' + opt + "</span>" +
        '<span class="mark">' + mark + "</span></button>";
    }).join("");

    var ansLetters = dispAns.map(function (a) { return LETTERS[a]; }).join(", ");
    var stateBadge = "";
    if (revealed) stateBadge = isCorrect(i)
      ? '<span class="q-state ok">✓ Chính xác</span>'
      : '<span class="q-state bad">✕ Sai — đáp án: ' + ansLetters + "</span>";

    var checkBtn = (isMulti && !revealed)
      ? '<button class="btn primary" id="checkMulti" ' + (sel.length ? "" : "disabled") + ">Kiểm tra</button>"
      : "";

    area.innerHTML =
      '<article class="card q-card" id="qcard">' +
        '<div class="q-top">' +
          '<span class="q-num">Câu ' + (i + 1) + " / " + exam.questions.length + "</span>" +
          (view.shuffledQ ? '<span class="chip">Đề gốc: câu ' + q.n + "</span>" : "") +
          (isMulti ? '<span class="chip">Chọn nhiều đáp án</span>' : "") +
          stateBadge +
        "</div>" +
        '<div class="q-text">' + q.text + "</div>" +
        (q.image
          ? '<div class="q-image-wrap"><img class="q-image" src="' + exam.imagePath + q.image + '" alt="' + esc(q.imageAlt || "Hình minh họa câu hỏi") + '" loading="lazy"></div>'
          : "") +
        (isMulti && !revealed ? '<div class="multi-note">ℹ️ Câu hỏi có <b>nhiều đáp án đúng</b> — chọn tất cả các phương án bạn cho là đúng rồi bấm “Kiểm tra”.</div>' : "") +
        '<div class="options" id="optList">' + optsHtml + "</div>" +
        (revealed ? explainHtml(i, ansLetters) : "") +
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

  function explainHtml(i, ansText) {
    var good = isCorrect(i);
    return '<div class="explain">' +
      (good
        ? '<div class="verdict ok">🎉 Chính xác! Bạn đã chọn đúng đáp án ' + ansText + ".</div>"
        : '<div class="verdict bad">❌ Chưa đúng. Đáp án đúng là <u>' + ansText + "</u>.</div>") +
      '<div class="label">💡 Giải thích</div>' +
      '<div class="body">' + qAt(i).explain + "</div>" +
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

  /* ============================================================
     BUILDER — tự tạo bộ đề riêng (chỉ lưu localStorage)
     ============================================================ */
  var builder = { subject: null, q: "", sel: {} }; // sel: "examId::n" -> true
  var builderShown = {}; // examId -> [qkey đang hiển thị theo bộ lọc]

  function renderBuilderKeepFocus() {
    var el = $("#builderSearch");
    var pos = el ? el.selectionStart : null;
    renderBuilder();
    var el2 = $("#builderSearch");
    if (el2 && pos !== null) { el2.focus(); try { el2.setSelectionRange(pos, pos); } catch (e) {} }
  }

  function renderBuilder() {
    stopTimer();
    currentExam = null;
    view = null;
    var app = $("#view");
    var html =
      '<div class="container builder">' +
        '<div class="builder-head">' +
          '<a class="btn ghost" href="#/">← Trang chủ</a>' +
          "<h1>🧩 Tạo bộ đề riêng</h1>" +
          '<p>Chọn môn → tích những câu muốn luyện từ các đề có sẵn → đặt tên rồi bấm <b>“Tạo &amp; làm ngay”</b>. ' +
          "Bộ đề chỉ lưu trên trình duyệt của bạn (localStorage), không đụng đến ngân hàng đề gốc và có thể xóa bất cứ lúc nào.</p>" +
        "</div>" +
        '<div class="subject-strip">' +
          SUBJECTS.map(function (s) {
            return '<button class="subject-chip' + (builder.subject === s.id ? " active" : "") + '" data-bsid="' + esc(s.id) + '"><span class="emoji">' + s.icon + "</span>" + esc(s.name) + ' <span class="count">' + examsOfSubject(s.id).length + " đề</span></button>";
          }).join("") +
        "</div>";

    if (!builder.subject) {
      html += '<div class="card empty-note">👆 Chọn một môn học ở trên để bắt đầu ghép câu hỏi.</div>';
    } else {
      html += '<div class="search-wrap builder-search"><span class="icon">🔎</span>' +
        '<input id="builderSearch" type="search" placeholder="Lọc câu hỏi theo từ khóa (nội dung tiếng Anh)…" value="' + esc(builder.q) + '" aria-label="Lọc câu hỏi"></div>';

      var words = builder.q.toLowerCase().split(/\s+/).filter(Boolean);
      var totalShown = 0;
      builderShown = {};
      examsOfSubject(builder.subject).forEach(function (e) {
        var rows = "", keys = [];
        e.questions.forEach(function (q) {
          var key = e.id + "::" + q.n;
          var plain = stripTags(q.text).toLowerCase();
          if (words.length && !words.every(function (w) { return plain.indexOf(w) !== -1; })) return;
          keys.push(key);
          rows += '<label class="qb-item' + (builder.sel[key] ? " selected" : "") + '">' +
            '<input type="checkbox" data-qkey="' + esc(key) + '"' + (builder.sel[key] ? " checked" : "") + ">" +
            '<span class="q-no">#' + q.n + "</span>" +
            '<span class="q-preview">' + q.text + "</span></label>";
        });
        if (!rows) return;
        builderShown[e.id] = keys;
        totalShown += keys.length;
        html += '<section class="card qb-group">' +
          '<div class="qb-group-head">' +
            "<div><b>" + esc(e.title) + '</b> <span class="chip">' + e.questions.length + " câu</span></div>" +
            '<button class="btn ghost" data-selall="' + esc(e.id) + '">☑️ Chọn cả đề</button>' +
          "</div>" +
          '<div class="qb-list">' + rows + "</div>" +
        "</section>";
      });

      if (!totalShown) html += '<div class="card empty-note">🔎 Không có câu nào khớp từ khóa trong môn này.</div>';

      html += '<div class="builder-bar">' +
        '<div class="sel-count">Đã chọn <b id="selCount">' + Object.keys(builder.sel).length + "</b> câu</div>" +
        '<button class="btn ghost" id="randBtn" title="Chọn ngẫu nhiên 50 câu đang hiển thị">🎲 Ngẫu nhiên 50</button>' +
        '<button class="btn ghost danger" id="clearBtn">Bỏ chọn hết</button>' +
        '<input id="customName" type="text" maxlength="80" placeholder="Tên bộ đề (VD: Ôn ELC201 — diode &amp; BJT)…">' +
        '<button class="btn primary" id="createBtn">Tạo &amp; làm ngay →</button>' +
      "</div>";
    }
    html += "</div>";
    app.innerHTML = html;

    /* events */
    $$("[data-bsid]", app).forEach(function (c) {
      c.addEventListener("click", function () {
        builder.subject = c.getAttribute("data-bsid");
        builder.q = "";
        builder.sel = {}; // đổi môn -> bỏ lựa chọn cũ của môn khác
        renderBuilder();
      });
    });
    var bs = $("#builderSearch");
    if (bs) bs.addEventListener("input", function () { builder.q = this.value; renderBuilderKeepFocus(); });
    $$(".qb-item input", app).forEach(function (cb) {
      cb.addEventListener("change", function () {
        var k = cb.getAttribute("data-qkey");
        if (cb.checked) builder.sel[k] = true; else delete builder.sel[k];
        var item = cb.closest(".qb-item");
        if (item) item.classList.toggle("selected", cb.checked);
        var cnt = $("#selCount");
        if (cnt) cnt.textContent = Object.keys(builder.sel).length;
      });
    });
    $$("[data-selall]", app).forEach(function (b) {
      b.addEventListener("click", function () {
        var keys = builderShown[b.getAttribute("data-selall")] || [];
        if (!keys.length) return;
        var allOn = keys.every(function (k) { return builder.sel[k]; });
        keys.forEach(function (k) { if (allOn) delete builder.sel[k]; else builder.sel[k] = true; });
        renderBuilder();
      });
    });
    var rb = $("#randBtn");
    if (rb) rb.addEventListener("click", function () {
      var keys = [];
      Object.keys(builderShown).forEach(function (eid) { keys = keys.concat(builderShown[eid]); });
      if (!keys.length) return;
      var picked = shuffleArr(keys).slice(0, 50);
      var added = 0;
      picked.forEach(function (k) { if (!builder.sel[k]) { builder.sel[k] = true; added++; } });
      toast("🎲 Đã chọn thêm " + added + " câu ngẫu nhiên (tổng " + Object.keys(builder.sel).length + " câu).");
      renderBuilder();
    });
    var cb2 = $("#clearBtn");
    if (cb2) cb2.addEventListener("click", function () { builder.sel = {}; renderBuilder(); });
    var cr = $("#createBtn");
    if (cr) cr.addEventListener("click", function () {
      var refs = Object.keys(builder.sel).map(function (k) {
        var p = k.split("::");
        return { e: p[0], n: parseInt(p[1], 10) };
      });
      if (!refs.length) { toast("Hãy chọn ít nhất 1 câu để tạo bộ đề!"); return; }
      var nameEl = $("#customName");
      var name = nameEl ? nameEl.value.trim() : "";
      if (!name) { toast("Hãy đặt tên cho bộ đề trước khi tạo!"); if (nameEl) nameEl.focus(); return; }
      var c = {
        id: "custom-" + Date.now().toString(36) + "-" + Math.floor(Math.random() * 46656).toString(36),
        name: name,
        subjectId: builder.subject,
        refs: refs,
        createdAt: new Date().toISOString()
      };
      var list = getCustoms();
      list.push(c);
      saveCustoms(list);
      builder = { subject: null, q: "", sel: {} };
      toast("✅ Đã tạo “" + name + "” (" + refs.length + " câu) — chúc ôn tốt!");
      location.hash = "#/exam/" + c.id;
    });

    typeset(app);
  }

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
