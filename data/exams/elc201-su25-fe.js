// ELC201 - Summer 2025 - Final Exam
// Nguồn: ELC201_SU25_FE.pdf (50 câu hỏi trắc nghiệm, Kizspy format)
window.EXAMAPP_EXAMS = window.EXAMAPP_EXAMS || [];
window.EXAMAPP_EXAMS.push({
  id: "elc201-su25-fe",
  subjectId: "ELC201",
  title: "ELC201 - Summer 2025 - Final Exam",
  originalFile: "ELC201_SU25_FE.pdf",
  semester: "Summer 2025",
  semesterKey: "su25",
  type: "Final Exam",
  typeKey: "final",
  durationMinutes: 60,
  imagePath: "images/elc201/su25-fe/",
  questions: [
    {
      n: 1,
      text: "Referring to the following figure, calculate \\(g_m\\) for \\(V_{GS_Q} = -1.25\\ \\text{V}\\).",
      image: "q01.png",
      imageAlt: "Đồ thị gm theo VGS: gm cực đại 4 mS tại VGS = 0, triệt tiêu tại VGS(off) = −4 V",
      options: ["2 mS", "2.5 mS", "2.75 mS", "3.25 mS"],
      answers: [2],
      explain: "Từ đồ thị: \\(g_{m0} = 4\\ \\text{mS}\\) tại \\(V_{GS} = 0\\) và \\(V_{GS(off)} = -4\\ \\text{V}\\). Công thức: \\(g_m = g_{m0}\\left(1 - \\dfrac{V_{GS}}{V_{GS(off)}}\\right) = 4(1 - 1.25/4) = 4 \\times 0.6875 = 2.75\\ \\text{mS}\\). gm tỉ lệ nghịch với mức phân cực ngược của gate — càng gần điểm cắt, hệ số khuếch đại chuyển dẫn càng nhỏ."
    },
    {
      n: 2,
      text: "What is a key characteristic of the Common-Gate configuration's input impedance?",
      options: ["Very high input impedance.", "Medium input impedance.", "Very low input impedance.", "Infinite input impedance."],
      answers: [2],
      explain: "Mạch common-gate có tín hiệu vào cực source (qua trở tải của nguồn) nên trở vào rất thấp, xấp xỉ \\(Z_i \\approx 1/g_m\\) (vài trăm ohm). Đây là điểm khác biệt lớn so với common-source và common-drain vốn có trở vào rất cao nhờ dòng gate ≈ 0. Nhờ trở vào thấp, common-gate ít bị ảnh hưởng bởi điện dung Miller, phù hợp cho tầng tần số cao."
    },
    {
      n: 3,
      text: "In a Source-Follower (Common-Drain) configuration, the output is taken from:",
      options: ["Drain.", "Gate.", "Source.", "Load."],
      answers: [2],
      explain: "Source-follower (common-drain) lấy tín hiệu ra tại cực source, drain nối nguồn AC. Hệ số khuếch đại \\(A_v = \\dfrac{g_m R_S}{1 + g_m R_S} < 1\\) nhưng gần 1 và cùng pha — output " + '"' + "đi theo" + '"' + " input nên gọi là follower. Mạch dùng làm tầng đệm (buffer) nhờ trở vào cao, trở ra thấp."
    },
    {
      n: 4,
      text: "What parameter represents the ratio of change in drain current to change in gate-to-source voltage in a FET?",
      options: ["Output resistance.", "Voltage gain.", "Transconductance.", "Input impedance."],
      answers: [2],
      explain: "Transconductance (hỗ dẫn) định nghĩa: \\(g_m = \\dfrac{\\Delta I_D}{\\Delta V_{GS}}\\) — độ nhạy của dòng drain theo điện áp gate-source, đơn vị Siemens (mS). Đây là thông số quan trọng nhất của FET khi phân tích AC, quyết định độ lợi của tầng khuếch đại: \\(A_v = -g_m R_D\\)."
    },
    {
      n: 5,
      text: "Determine V<sub>2</sub>.",
      image: "q05.png",
      imageAlt: "Mạch: E1 = 10 V qua R1 = 4.7 kΩ, diode Si, rồi R2 = 2.2 kΩ xuống E2 = 5 V; V2 đo trên R2",
      options: ["3.201 V", "0 V", "4.3 V", "1.371 V"],
      answers: [3],
      explain: "Diode Si dẫn (E1 đủ lớn để phân cực thuận). Dòng mạch vòng: \\(I = \\dfrac{E_1 - V_D - E_2}{R_1 + R_2} = \\dfrac{10 - 0.7 - 5}{4.7k + 2.2k} = \\dfrac{4.3}{6.9k} = 0.6232\\ \\text{mA}\\). Điện áp trên R2: \\(V_2 = I \\times R_2 = 0.6232\\ \\text{mA} \\times 2.2\\ \\text{k}\\Omega = 1.371\\ \\text{V}\\)."
    },
    {
      n: 6,
      text: "Determine the value of the load resistor.",
      image: "q06.png",
      imageAlt: "Mạch: nguồn 12 V nối tiếp diode Ge và diode Si với RL, dòng 2 mA",
      options: ["RL = 5 k", "RL = 5.5 k", "RL = 6 k", "None of the other"],
      answers: [1],
      explain: "Hai diode nối tiếp phân cực thuận: Ge sụt 0.3 V, Si sụt 0.7 V. Điện áp còn lại trên RL: \\(V_{RL} = 12 - 0.3 - 0.7 = 11\\ \\text{V}\\). Với dòng 2 mA: \\(R_L = \\dfrac{11}{2\\ \\text{mA}} = 5.5\\ \\text{k}\\Omega\\)."
    },
    {
      n: 7,
      text: "Determine the peak for both half cycles of the output waveform.",
      image: "q07.png",
      imageAlt: "Mạch clipper: vi ±16 V qua trở nối tiếp, nhánh shunt gồm diode và pin V = 4 V",
      options: ["16 V, −4 V", "16 V, 4 V", "−16 V, 4 V", "−16 V, −4 V"],
      answers: [1],
      explain: "Đây là mạch clipper có pin 4 V: diode cathode phía ngõ ra, anode nối cực + của pin. Khi vi dương (16 V), diode phân cực ngược → không dẫn → ngõ ra theo vi: đỉnh +16 V. Khi vi âm, diode dẫn, ghim ngõ ra tại mức pin: V<sub>o</sub> ≈ 4 V (xấp xỉ lý tưởng). Vậy đỉnh hai nửa chu kỳ là 16 V và 4 V."
    },
    {
      n: 8,
      text: "In silicon diodes, the threshold voltage is approximately:",
      options: ["0.3 V", "0.5 V", "0.7 V", "1.2 V"],
      answers: [2],
      explain: "Điện áp ngưỡng (knee/barrier voltage) của diode silicon ≈ 0.7 V — mức mà dòng bắt đầu tăng mạnh khi phân cực thuận. Germanium ≈ 0.3 V, GaAs ≈ 1.2 V. Giá trị 0.7 V là xấp xỉ chuẩn dùng trong mọi bài toán phân tích mạch diode Si ở nhiệt độ phòng."
    },
    {
      n: 9,
      text: "Once the dc Q-point is determined using load-line analysis, the diode can be replaced by its ________ equivalent for those operating conditions.",
      options: ["AC resistance", "Dynamic resistance", "DC resistance", "Ideal model"],
      answers: [2],
      explain: "Tại điểm Q đã xác định, trở DC của diode: \\(R_D = \\dfrac{V_D}{I_D}\\Big|_{Q}\\) — tỉ số điện áp/dòng tại đúng điểm làm việc. Trở động học (dynamic/ac) \\(r_d = \\Delta V/\\Delta I\\) chỉ dùng khi xét biến thiên nhỏ quanh điểm Q, không phải " + '"' + "thay thế cho điều kiện làm việc đã cho" + '"' + "."
    },
    {
      n: 10,
      text: "What is a key advantage of dedicated comparator ICs over op-amps used as comparators?",
      options: ["Slower switching speeds.", "Higher power consumption.", "Faster switching and built-in noise immunity.", "Lower input impedance."],
      answers: [2],
      explain: "Comparator chuyên dụng (LM311, LM339...) được thiết kế để chạy mở vòng, chuyển trạng thái nhanh (response time vài trăm ns), ngõ ra tương thích logic và thường có hysteresis/khả năng ghim nhiễu. Op-amp thông thường có bù tần số nội bộ khiến tốc độ chuyển chậm (slew rate thấp) và không tối ưu cho ngõ ra logic."
    },
    {
      n: 11,
      text: "What is the purpose of the strobe input in a comparator?",
      options: ["Reset the output.", "Enable or disable output based on timing.", "Increase frequency.", "Reduce noise."],
      answers: [1],
      explain: "Ngõ strobe cho phép bật/tắt (enable/disable) ngõ ra của comparator theo tín hiệu điều khiển thời gian: khi strobe hoạt động, ngõ ra bị ép về mức xác định bất kể ngõ vào. Hữu ích khi cần đồng bộ hóa việc so sánh hoặc bỏ qua cửa sổ thời gian không quan tâm."
    },
    {
      n: 12,
      text: "Examples of applications for Linear-Digital ICs include:",
      options: ["Simple switches.", "Resistors and capacitors.", "Automotive equipment, aerospace equipment, and CD players.", "Basic wiring diagrams."],
      answers: [2],
      explain: "IC loại Linear-Digital (trộn cả hai đặc tính, ví dụ timer 555, VCO, comparator với ngõ ra logic) được dùng rộng rãi trong thiết bị ô tô, hàng không vũ trụ, đầu CD... Các phương án khác (công tắc, R và C, sơ đồ đi dây) không phải " + '"' + "ứng dụng của IC" + '"' + "."
    },
    {
      n: 13,
      text: "What does a zero-crossing detector do?",
      options: ["Detects peaks in analog signals.", "Detects when a signal crosses zero voltage.", "Compares voltage to a threshold.", "Detects frequency modulation."],
      answers: [1],
      explain: "Zero-crossing detector là comparator với ngõ đảo nối đất (V<sub>ref</sub> = 0): mỗi khi tín hiệu vào đi qua 0 V, ngõ ra đảo trạng thái ngay lập tức, tạo xung vuông từ tín hiệu sine. Ứng dụng: đo tần số, đồng bộ pha, chuyển đổi sine→square."
    },
    {
      n: 14,
      text: "In the AC analysis of a common-emitter amplifier, the voltage gain Av is approximately:",
      options: ["RC/RE", "−RC/re", "−RC/RB", "−re/RC"],
      answers: [1],
      explain: "Tầng common-emitter với R<sub>E</sub> được bypass: \\(A_v = -\\dfrac{R_C}{r_e}\\). Dấu âm thể hiện đảo pha 180° giữa ngõ vào base và ngõ ra collector. Nếu R<sub>E</sub> không bypass: \\(A_v \\approx -R_C/R_E\\) và độ lợi giảm nhiều do phản hồi âm."
    },
    {
      n: 15,
      text: "What is the approximate voltage gain of an emitter follower (common-collector BJT amplifier)?",
      options: ["0", "> 10", "< 0", "≈ 1"],
      answers: [3],
      explain: "Emitter follower (common-collector) có \\(A_v = \\dfrac{R_E}{R_E + r_e} \\approx 1\\): ngõ ra tại emitter đi theo ngõ vào, cùng pha, độ lợi hơi nhỏ hơn 1. Đổi lại, mạch có trở vào rất cao và trở ra rất thấp — lý tưởng làm tầng đệm khớp trở."
    },
    {
      n: 16,
      text: "Which parameter best reflects current gain in a BJT?",
      options: ["re", "ro", "β", "Zo"],
      answers: [2],
      explain: "β (beta, hay h<sub>FE</sub>) là hệ số khuếch đại dòng: \\(\\beta = I_C/I_B\\), thường 50–300. re là trở emitter động (điện trở), ro là trở ra của transistor, Zo là trở kháng ngõ ra của mạch — không phải thông số khuếch đại dòng."
    },
    {
      n: 17,
      text: "Which bias configuration for BJT includes a voltage divider and an emitter resistor?",
      options: ["Fixed-bias", "Collector-feedback", "Voltage-divider bias", "Darlington"],
      answers: [2],
      explain: "Voltage-divider bias dùng R1, R2 chia áp cấp V<sub>B</sub> cố định và R<sub>E</sub> ở emitter tạo phản hồi âm ổn định dòng. Đây là cấu hình ổn định nhất theo β: điểm Q gần như không phụ thuộc β transistor. Fixed-bias không có R<sub>E</sub>, collector-feedback lấy phản hồi từ collector, Darlington là ghép 2 transistor tăng β."
    },
    {
      n: 18,
      text: "Calculate the overall voltage gain of the circuit if \\(R_1 = 100\\ \\Omega\\) and \\(R_f = 1\\ \\text{k}\\Omega\\).",
      image: "q18.png",
      imageAlt: "Mạch khuếch đại không đảo: Vi vào cực +, phản hồi Rf, R1 xuống đất",
      options: ["−1", "−10", "11", "9"],
      answers: [2],
      explain: "Bộ khuếch đại KHÔNG đảo: \\(A_v = 1 + \\dfrac{R_f}{R_1} = 1 + \\dfrac{1000}{100} = 11\\). Độ lợi luôn dương (cùng pha) và ≥ 1 nhờ tín hiệu vào cực +. Phương án −10 là công thức của bộ đảo (−R<sub>f</sub>/R<sub>1</sub>) — sai vì đây là mạch noninverting."
    },
    {
      n: 19,
      text: "What is a typical use of operational amplifiers?",
      options: ["High-power switching.", "Providing voltage amplitude changes (amplification and polarity).", "Designing resistive networks without feedback.", "Operation at very high frequencies only."],
      answers: [1],
      explain: "Op-amp là khuếch đại điện áp hiệu năng cao: thay đổi biên độ và cả cực tính (đảo/không đảo) của tín hiệu theo độ lợi cài bởi mạng phản hồi. Op-amp không dùng cho công tắc công suất lớn, không hoạt động tốt ở tần số quá cao, và luôn cần phản hồi trong các ứng dụng khuếch đại tuyến tính."
    },
    {
      n: 20,
      text: "What is the ideal output voltage of a differential amplifier for a common-mode input signal?",
      options: ["Common-mode input voltage times differential gain.", "Common-mode input voltage times common-mode gain.", "Zero.", "Difference between input voltages."],
      answers: [2],
      explain: "Lý tưởng: khi hai ngõ vào giống hệt nhau (common-mode), ngõ ra = 0 vì khuếch đại chỉ khuếch đại HIỆU hai tín hiệu. Thực tế vẫn còn một chút qua độ lợi common-mode (A<sub>cm</sub>), được đo bằng CMRR = A<sub>d</sub>/A<sub>cm</sub>. Nhưng theo lý tưởng A<sub>cm</sub> = 0 → V<sub>o</sub> = 0."
    },
    {
      n: 21,
      text: "Refer to the given figure. The voltage gain of this amplifier is:",
      image: "q21.png",
      imageAlt: "Mạch khuếch đại không đảo: Rf = 100 kΩ phản hồi, Ri = 5 kΩ xuống đất",
      options: ["100", "5", "20", "21"],
      answers: [3],
      explain: "Mạch không đảo: \\(A_v = 1 + \\dfrac{R_f}{R_i} = 1 + \\dfrac{100\\,\\text{k}}{5\\,\\text{k}} = 1 + 20 = 21\\). Lưu ý cộng thêm 1 — lỗi phổ biến là chỉ tính 100/5 = 20. Độ lợi cùng pha với tín hiệu vào."
    },
    {
      n: 22,
      text: "In a CMOS differential amplifier, the input is applied to:",
      options: ["Emitters", "Drains", "Bases", "Gates"],
      answers: [3],
      explain: "CMOS dùng MOSFET: tín hiệu vào cấp lên cực GATE (được cách điện bởi SiO<sub>2</sub> nên trở vào cực cao). Emitters/bases là thuật ngữ của BJT; drains là cực ra của tầng khuếch đại MOSFET, không phải ngõ vào."
    },
    {
      n: 23,
      text: "When a transistor is in the saturation mode, it acts like a(n):",
      options: ["Open switch", "Amplifier", "Current source", "Closed switch"],
      answers: [3],
      explain: "Bão hòa: cả hai junction đều phân cực thuận, V<sub>CE</sub> ≈ 0.2 V rất nhỏ → transistor như công tắc ĐÓNG (on), dòng giới hạn bởi mạch ngoài. Cut-off thì ngược lại: như công tắc MỞ. Chế độ active (thuận-E, ngược-C) mới là chế độ khuếch đại."
    },
    {
      n: 24,
      text: "What are the two main types of Bipolar Junction Transistors (BJTs)?",
      options: ["FET and MOSFET", "NPN and PNP", "Diode and Transistor", "Unijunction and Bipolar"],
      answers: [1],
      explain: "BJT chia làm hai loại theo thứ tự lớp bán dẫn: NPN (2 lớp N bao lớp P) và PNP (2 lớp P bao lớp N). Cấu tạo đều gồm 3 vùng: emitter, base, collector; khác nhau ở chiều phân cực và chiều dòng điện chính."
    },
    {
      n: 25,
      text: "Refer to this figure. The value of V<sub>CE</sub> is:",
      image: "q25.png",
      imageAlt: "Mạch fixed-bias: VBB = 5 V, RB = 5 kΩ, RC = 470 Ω, VCC = 20 V, βDC = 25",
      options: ["9.9 V", "9.2 V", "0.7 V", "19.3 V"],
      answers: [0],
      explain: "Dòng base: \\(I_B = \\dfrac{5 - 0.7}{5k} = 0.86\\ \\text{mA}\\). Dòng collector: \\(I_C = \\beta I_B = 25 \\times 0.86m = 21.5\\ \\text{mA}\\). Điện áp: \\(V_{CE} = V_{CC} - I_C R_C = 20 - 21.5m \\times 470 = 20 - 10.1 = 9.9\\ \\text{V}\\)."
    },
    {
      n: 26,
      text: "The input characteristics of the Common-Base configuration show the relationship between:",
      options: ["I<sub>C</sub> and V<sub>CE</sub>", "I<sub>B</sub> and V<sub>BE</sub>", "I<sub>E</sub> and V<sub>BE</sub>", "I<sub>C</sub> and I<sub>B</sub>"],
      answers: [2],
      explain: "Đặc tuyến vào của common-base biểu diễn dòng EMITTER theo điện áp emitter-base \\(I_E = f(V_{BE})\\) với V<sub>CB</sub> làm tham số — vì trong CB, ngõ vào là emitter. Common-emitter thì đặc tuyến vào là I<sub>B</sub> theo V<sub>BE</sub>."
    },
    {
      n: 27,
      text: "In which operating mode are both the emitter-base and collector-base junctions forward biased?",
      options: ["Active mode", "Saturation mode", "Cut-off mode", "Breakdown mode"],
      answers: [1],
      explain: "Bão hòa (saturation): junction BE thuận VÀ junction BC cũng thuận → cả hai đều dẫn, V<sub>CE</sub> rất nhỏ (~0.2 V). Active: BE thuận, BC ngược. Cut-off: cả hai đều ngược. Đây là định nghĩa chuẩn của ba vùng làm việc."
    },
    {
      n: 28,
      text: "Identify the n-channel D-MOSFET.",
      image: "q28.png",
      imageAlt: "Bốn ký hiệu MOSFET (a), (b), (c), (d)",
      options: ["(a)", "(b)", "(c)", "(d)"],
      answers: [0],
      explain: "Phân biệt hai yếu tố: (1) Kênh D-MOSFET là đường LIỀN (kênh chế tạo sẵn), E-MOSFET là đường ĐỨT ba khúc; (2) mũi tên chỉ VÀO kênh = kênh n, chỉ RA (ra khỏi gate) = kênh p. Hình (a): kênh liền + mũi tên vào → n-channel D-MOSFET. (b) kênh liền mũi tên ra = p-ch D-MOS; (c) kênh đứt mũi tên vào = n-ch E-MOS; (d) kênh đứt mũi tên ra = p-ch E-MOS."
    },
    {
      n: 29,
      text: "Identify the p-channel E-MOSFET.",
      image: "q29.png",
      imageAlt: "Bốn ký hiệu MOSFET (a), (b), (c), (d)",
      options: ["(a)", "(b)", "(c)", "(d)"],
      answers: [3],
      explain: "E-MOSFET phải có kênh ĐỨT (không có kênh vật lý sẵn) và p-channel có mũi tên chỉ RA khỏi kênh. Kết hợp hai tiêu chí → hình (d). Hình (c) là n-channel E-MOSFET (mũi tên vào), (a) là n-channel D-MOSFET, (b) là p-channel D-MOSFET."
    },
    {
      n: 30,
      text: "Refer to this portion of a specification sheet. Determine the values of reverse-gate-source voltage and gate current if the FET was forced to accept it.",
      image: "q30.png",
      imageAlt: "Bảng MAXIMUM RATINGS: VDS = 25, VDG = 25, VGSR = −25, IG = 10 mA, PD = 310 mW...",
      options: ["25 Vdc, 310 mW", "−25 Vdc, 12.4 mAdc", "50 Vdc, 12.4 mAdc", "−25 Vdc, 10 mAdc"],
      answers: [3],
      explain: "Đọc trực tiếp từ bảng Maximum Ratings: Reverse Gate-Source Voltage V<sub>GSR</sub> = −25 V<sub>dc</sub> và Gate Current I<sub>G</sub> = 10 mA<sub>dc</sub>. Đây là các giá trị tối đa FET có thể chịu nếu bị ép — vượt các ngưỡng này transistor sẽ hỏng."
    },
    {
      n: 31,
      text: "What is " + '"' + "pinch-off" + '"' + " in a JFET?",
      options: ["The point where the drain current starts to increase rapidly with V_DS.", "The point where the depletion regions meet, constricting the channel and limiting the drain current.", "The point where the gate current starts to flow.", "The point where the JFET enters the ohmic region."],
      answers: [1],
      explain: "Pinch-off là điểm mà các vùng nghèo (depletion) mở rộng đủ để chạm nhau near drain, thu hẹp kênh và GHIM dòng drain ở mức bão hòa I<sub>DSS</sub> — dòng không tăng thêm dù V<sub>DS</sub> tăng. Dòng gate vẫn ≈ 0; vùng ohmic là vùng trước pinch-off (V<sub>DS</sub> nhỏ)."
    },
    {
      n: 32,
      text: "What distinguishes a Depletion-Type MOSFET from an Enhancement-Type MOSFET?",
      options: ["The D-MOSFET has a p-doped substrate, while the E-MOSFET has an n-doped substrate.", "The E-MOSFET has a physical channel at zero gate voltage, while the D-MOSFET does not.", "The D-MOSFET has a physical channel at zero gate voltage, while the E-MOSFET does not.", "The D-MOSFET operates only in depletion mode, while the E-MOSFET operates in both modes."],
      answers: [2],
      explain: "D-MOSFET có kênh vật lý chế tạo sẵn → tại V<sub>GS</sub> = 0 vẫn dẫn dòng I<sub>DSS</sub>, làm việc được cả depletion (V<sub>GS</sub> < 0) lẫn enhancement (V<sub>GS</sub> > 0). E-MOSFET KHÔNG có kênh sẵn — chỉ dẫn khi V<sub>GS</sub> vượt V<sub>T</sub> để tạo kênh bằng hiện tượng tăng cường (enhancement)."
    },
    {
      n: 33,
      text: "Semiconductor materials have a ________ temperature coefficient because their conductivity increases with heat.",
      options: ["Positive", "Zero", "Negative", "Infinite"],
      answers: [2],
      explain: "Nhiệt độ tăng → nhiều electron vượt band gap trở thành carrier tự do → dẫn điện TĂNG → trở kháng GIẢM. Hệ số nhiệt độ của trở kháng vì thế mang dấu ÂM (negative), trái với kim loại (dương: nóng lên trở lên). Đây là tính chất đặc trưng giúp phân biệt bán dẫn với dẫn điện kim loại."
    },
    {
      n: 34,
      text: "In an n-type semiconductor, the majority carriers are:",
      options: ["Holes", "Protons", "Electrons", "Neutrons"],
      answers: [2],
      explain: "Pha tạp pentavalent (P, As, Sb) vào Si/Ge tạo ra n-type: mỗi nguyên tử pha tạp nhả 1 electron tự do → electron là carrier ĐA SỐ, lỗ là carrier thiểu số. p-type thì ngược lại (pha tạp trivalent: B, In, Ga → lỗ đa số). Proton/neutron nằm trong hạt nhân, không tham gia dẫn điện."
    },
    {
      n: 35,
      text: "The depletion region in a diode:",
      options: ["Contains free carriers", "Is full of electrons", "Has immobile ions", "Is positively charged"],
      answers: [2],
      explain: "Vùng nghèo được hình thành khi electron tự do và lỗ khuếch tán về hai phía và RECOMBINE, để lại các ion hóa đồng nhất (ion dương phía N, ion âm phía P) KHÔNG THỂ di chuyển. Chính các ion bất động này tạo ra điện trường nội tại và điện thế ngưỡng V<sub>0</sub> chặn sự khuếch tán tiếp."
    },
    {
      n: 36,
      text: "A semiconductor material that has been subjected to the doping process is called:",
      options: ["Intrinsic", "Extrinsic", "Compound", "Pure"],
      answers: [1],
      explain: "Extrinsic = bán dẫn PHA TẠP: thêm tạp chất (pentavalent → n-type, trivalent → p-type) để kiểm soát nồng độ carrier. Intrinsic là bán dẫn THUẦN khiết chưa pha tạp. Doping làm tăng độ dẫn điện hàng nghìn lần và tạo ra được diode, transistor."
    },
    {
      n: 37,
      text: "In a load-line analysis, the Q-point (quiescent point) is found at:",
      options: ["IC = 0", "VCE = 0", "The intersection of the load line and the transistor characteristic curve", "The midpoint of RC"],
      answers: [2],
      explain: "Đường tải DC vẽ từ V<sub>CE</sub> = V<sub>CC</sub> (khi I<sub>C</sub> = 0) đến I<sub>C</sub> = V<sub>CC</sub>/R<sub>C</sub> (khi V<sub>CE</sub> = 0). Điểm Q là GIAO ĐIỂM giữa đường tải này và đặc tuyến ứng với I<sub>B</sub> do mạch phân cực quyết định — cho ra (V<sub>CEQ</sub>, I<sub>CQ</sub>) của mạch."
    },
    {
      n: 38,
      text: "What is the primary purpose of DC biasing in BJT circuits?",
      options: ["To increase AC gain", "To protect the transistor", "To establish a stable operating point", "To reduce input impedance"],
      answers: [2],
      explain: "Phân cực DC thiết lập điểm Q (I<sub>CQ</sub>, V<sub>CEQ</sub>) ổn định nằm giữa vùng bão hòa và cut-off, để tín hiệu AC dao động quanh điểm Q mà không bị méo (distortion). Không có phân cực đúng → tín hiệu bị cắt cụt hoặc bão hòa dù transistor vẫn tốt."
    },
    {
      n: 39,
      text: "What are the operating regions of a transistor when used as a switch (inverter)?",
      options: ["Cutoff and linear", "Cutoff and saturation", "Linear and breakdown", "Reverse and forward"],
      answers: [1],
      explain: "Transistor làm công tắc chỉ dùng 2 vùng: CUT-OFF (ngõ vào thấp → transistor tắt → ngõ ra cao) và SATURATION (ngõ vào cao → bão hòa → ngõ ra thấp ~0.2 V). Vùng linear/active chỉ dùng khi khuếch đại, không dùng khi chuyển mạch vì tốn công suất."
    },
    {
      n: 40,
      text: "What is the benefit of using a collector-feedback bias?",
      options: ["Improved thermal stability", "High voltage gain", "High power efficiency", "Reduced R_E"],
      answers: [0],
      explain: "Collector-feedback nối R<sub>B</sub> từ collector về base tạo phản hồi âm: nếu I<sub>C</sub> tăng (do nhiệt độ/β), V<sub>CE</sub> giảm → dòng base giảm → kéo I<sub>C</sub> trở lại. Cơ chế tự ổn định này cải thiện độ ổn định nhiệt của điểm Q mà không cần thêm R<sub>E</sub> lớn."
    },
    {
      n: 41,
      text: "What is the primary benefit of adding an emitter resistor (RE) to a BJT biasing configuration?",
      options: ["It increases the voltage gain", "It enhances stability with regards to temperature and β variations", "It reduces the base current", "It decreases the collector current"],
      answers: [1],
      explain: "R<sub>E</sub> tạo phản hồi âm dòng: I<sub>C</sub> tăng → V<sub>E</sub> tăng → V<sub>BE</sub> giảm → I<sub>B</sub> giảm → I<sub>C</sub> trở lại. Kết quả: điểm Q ổn định trước biến thiên nhiệt độ và β (mà β lại thay đổi mạnh theo nhiệt độ và giữa các linh kiện cùng loại)."
    },
    {
      n: 42,
      text: "How is the Self-Bias configuration for a JFET achieved?",
      options: ["Connecting gate to drain.", "Inserting a source resistor (Rs).", "Using a voltage divider at the gate", "Applying a fixed gate voltage."],
      answers: [1],
      explain: "Self-bias JFET: chèn R<sub>S</sub> ở source. Dòng drain qua R<sub>S</sub> nâng điện thế source lên \\(+I_D R_S\\), trong khi gate giữ 0 V qua R<sub>G</sub> → tự động tạo \\(V_{GS} = -I_D R_S\\) (kênh n) — mạch " + '"' + "tự phân cực" + '"' + " không cần nguồn gate riêng."
    },
    {
      n: 43,
      text: "When analyzing FET biasing graphically, which curves are plotted to find the Q-point?",
      options: ["IC vs. VCE and the load line", "ID vs. VDS and the load line", "ID vs. VGS (transfer characteristic) and the bias line/curve", "VGS vs. VDS"],
      answers: [2],
      explain: "Với FET, Q-point tìm trên đồ thị truyền đạt (transfer characteristics) I<sub>D</sub> theo V<sub>GS</sub> — giao của đường cong Shockley với đường/mặt phân cực do mạch quyết định (ví dụ đường thẳng \\(V_{GS} = -I_D R_S\\) của self-bias). I<sub>C</sub>/V<sub>CE</sub> là của BJT."
    },
    {
      n: 44,
      text: "Refer to the given figure. \\(I_D = 6\\ \\text{mA}\\). Calculate the value of V<sub>DS</sub>.",
      image: "q44.png",
      imageAlt: "Mạch JFET kênh p với nguồn −15 V, RD = 1 kΩ, gate qua 100 MΩ xuống đất",
      options: ["−3 V", "−6 V", "6 V", "−9 V"],
      answers: [3],
      explain: "JFET kênh p với nguồn −15 V: sụt áp trên R<sub>D</sub> = 6 mA × 1 kΩ = 6 V. \\(V_{DS} = -15 + I_D R_D = -15 + 6 = -9\\ \\text{V}\\) (dấu âm đặc trưng cho kênh p). Gate ở 0 V qua 100 MΩ, dòng gate ≈ 0 nên không ảnh hưởng."
    },
    {
      n: 45,
      text: "Can a D-MOSFET be biased with \\(V_{GS} = 0\\ \\text{V}\\)?",
      options: ["No, negative V<sub>GS</sub> is required", "Yes, drain current will be I<sub>DSS</sub>", "Yes, but transistor is in cutoff", "Only for p-channel D-MOSFETs"],
      answers: [1],
      explain: "Được! D-MOSFET có kênh vật lý sẵn nên tại \\(V_{GS} = 0\\) dòng drain đạt đúng giá trị \\(I_{DSS}\\) (dòng bão hòa khi gate ngắn mạch source). Đây chính là điểm Q của kiểu phân cực fixed-bias V<sub>GS</sub> = 0 rất phổ biến với D-MOSFET trong môi trường khuếch đại tín hiệu nhỏ."
    },
    {
      n: 46,
      text: "Calculate the output voltage V<sub>o</sub> if \\(V_1 = -V_2 = 300\\ \\text{mV}\\).",
      image: "q46.png",
      imageAlt: "Mạch trừ hai op-amp: tầng đảo 250k/500k rồi tầng cộng đảo 100k, 50k, phản hồi 500k",
      options: ["0 V", "−6 V", "6 V", "−8 V"],
      answers: [2],
      explain: "Tầng 1 đảo: \\(V_{o1} = -\\dfrac{500k}{250k}V_1 = -2V_1\\). Tầng 2 cộng đảo: \\(V_o = -\\dfrac{500k}{100k}V_{o1} - \\dfrac{500k}{50k}V_2 = 10V_1 - 10V_2\\). Với V<sub>1</sub> = 0.3 V, V<sub>2</sub> = −0.3 V: \\(V_o = 3 - (-3) = 6\\ \\text{V}\\). Hai tín hiệu ngược pha được cộng dồn thay vì triệt tiêu."
    },
    {
      n: 47,
      text: "What is the cutoff frequency for a first-order low-pass filter?",
      options: ["fc = 1 / RC", "fc = 1 / (2πRC)", "fc = 2πRC", "fc = RC"],
      answers: [1],
      explain: "Tần số cắt (−3 dB) của bộ lọc RC bậc một: \\(f_c = \\dfrac{1}{2\\pi RC}\\) — tần số mà công suất ngõ ra giảm còn một nửa (biên độ giảm 0.707 lần). Thiếu hệ số 2π là sai số đơn vị phổ biến: ω<sub>c</sub> = 1/RC (rad/s) còn f<sub>c</sub> tính bằng Hz phải chia 2π."
    },
    {
      n: 48,
      text: "Determine the output voltage when \\(V_1 = V_2 = 1\\ \\text{V}\\).",
      image: "q48.png",
      imageAlt: "Op-amp: V1 qua 100 kΩ vào cực −, phản hồi 100 kΩ; V2 qua 20 kΩ vào cực + với 20 kΩ xuống đất",
      options: ["0 V", "1 V", "2 V", "−2 V"],
      answers: [0],
      explain: "Phần đảo: \\(V_{o(1)} = -\\dfrac{100k}{100k}V_1 = -1\\ \\text{V}\\). Phần không đảo: V<sub>+</sub> = V<sub>2</sub>·20k/(20k+20k) = 0.5 V, được khuếch đại \\(1 + 100k/100k = 2\\) lần → \\(+1\\ \\text{V}\\). Tổng: \\(V_o = -1 + 1 = 0\\ \\text{V}\\). Hai đóng góp triệt tiêu nhau khi V<sub>1</sub> = V<sub>2</sub>."
    },
    {
      n: 49,
      text: "What is a key advantage of active filters over passive filters?",
      options: ["Can provide voltage gain.", "Typically larger and heavier.", "Limited to low frequencies.", "Require bulky inductors."],
      answers: [0],
      explain: "Bộ lọc active dùng op-amp có thể CẤP ĐỘ LỢI điện áp (>1) trong dải thông, đồng thời trở vào cao/trở ra thấp giúp ghép tầng dễ dàng, và không cần cuộn cảm cồng kềnh (chỉ R và C). Các phương án B, C, D đều là nhược điểm của lọc PASSIVE, không phải active."
    },
    {
      n: 50,
      text: "Calculate the output voltage if \\(V_1 = -0.2\\ \\text{V}\\) and \\(V_2 = 0\\ \\text{V}\\).",
      image: "q50.png",
      imageAlt: "Bộ cộng đảo: V1 qua 33 kΩ, V2 qua 10 kΩ, phản hồi 330 kΩ, nguồn ±9 V",
      options: ["0 V", "2 V", "−4 V", "−6.6 V"],
      answers: [1],
      explain: "Bộ cộng đảo: \\(V_o = -\\dfrac{330k}{33k}V_1 - \\dfrac{330k}{10k}V_2 = -10(-0.2) - 33(0) = +2\\ \\text{V}\\). Chỉ V<sub>1</sub> đóng góp (V<sub>2</sub> = 0). Dấu đảo làm ngõ ra thành dương. Nguồn ±9 V đủ cho 2 V ngõ ra không bị giới hạn."
    }
  ]
});
