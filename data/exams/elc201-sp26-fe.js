// ELC201 - Spring 2026 - Final Exam
// Nguồn: ELC201 - SP26 - FE.pdf (50 câu hỏi trắc nghiệm, Multiple Choice)
window.EXAMAPP_EXAMS = window.EXAMAPP_EXAMS || [];
window.EXAMAPP_EXAMS.push({
  id: "elc201-sp26-fe",
  subjectId: "ELC201",
  title: "ELC201 - Spring 2026 - Final Exam",
  originalFile: "ELC201 - SP26 - FE.pdf",
  semester: "Spring 2026",
  semesterKey: "sp26",
  type: "Final Exam",
  typeKey: "final",
  durationMinutes: 60,
  imagePath: "images/elc201/sp26-fe/",
  questions: [
    {
      n: 1,
      text: "Determine the value of the load resistor.",
      image: "q01.png",
      imageAlt: "Mạch: nguồn 12 V nối tiếp diode Ge và diode Si với RL, dòng 2 mA",
      options: ["RL = 5 k", "RL = 5.5 k", "RL = 6 k", "None of the other"],
      answers: [1],
      explain: "Hai diode dẫn nối tiếp: Ge sụt 0.3 V, Si sụt 0.7 V → điện áp trên tải \\(V_{RL} = 12 - 1 = 11\\ \\text{V}\\). Với dòng 2 mA: \\(R_L = 11/2\\ \\text{mA} = 5.5\\ \\text{k}\\Omega\\). Đây là dạng bài kinh điển kết hợp V<sub>K</sub> của hai loại diode."
    },
    {
      n: 2,
      text: "What is the function of a Timer IC, such as the 555 timer?",
      options: ["Convert analog signals to digital.", "Compare two voltage levels.", "Provide linear and digital circuits for timing operations.", "Regulate voltage."],
      answers: [2],
      explain: "Timer IC (555) là IC linear-digital điển hình: bên trong có 2 comparator (phần tuyến tính) + flip-flop và mạch chia áp (phần số) kết hợp tạo ra các CHỨC NĂNG ĐỊNH THỜI — astable (xung vuông liên tục) và monostable (xung đơn 1.1RC). So sánh hai mức áp chỉ là bộ phận bên trong."
    },
    {
      n: 3,
      text: "In a 4-bit DAC with a ladder network and Vref = 16 V, what is the output voltage for input 0110?",
      options: ["4 V", "6 V", "8 V", "12 V"],
      answers: [1],
      explain: "Mã nhị phân 0110 (MSB→LSB) = 8×0 + 4×1 + 2×1 + 1×0 = 6. Mạng thang (R-2R ladder) 4 bit với V<sub>ref</sub> = 16 V cho \\(V_{out} = \\dfrac{6}{2^4} \\times 16 = 6\\ \\text{V}\\). Mỗi bước lượng tử = 16/16 = 1 V."
    },
    {
      n: 4,
      text: "This circuit is an example of a ________.",
      image: "q04.png",
      imageAlt: "Mạng R-2R ladder với các ngõ Vi1–Vi4 và ngõ ra Vo",
      options: ["comparator", "555 timer", "D to A converter", "ladder network"],
      answers: [3],
      explain: "Hình vẽ cấu trúc điển hình của MẠNG THANG (ladder network) R-2R: các trở nối tiếp R xen kẽ trở shunt 2R. Chính mạng thang này là lõi của DAC — nhưng với riêng sơ đồ trở thuần như hình, thuật ngữ chính xác là ladder network (Boylestad Ch. các IC số)."
    },
    {
      n: 5,
      text: "What is the formula for the VCO center frequency using a 566 IC?",
      options: ["\\(f_o = \\dfrac{1}{RC}\\)", "\\(f_o = \\dfrac{V_C}{RC}\\)", "\\(f_o = \\dfrac{2}{RC} \\cdot \\left(\\dfrac{V_+ - V_C}{V_+}\\right)\\)", "\\(f_o = \\dfrac{1.44}{RC}\\)"],
      answers: [2],
      explain: "VCO 566 (Boylestad): tần số trung tâm \\(f_o = \\dfrac{2}{RC}\\left(\\dfrac{V^+ - V_C}{V^+}\\right)\\) với V<sub>C</sub> là điện áp điều khiển tại chân 6. V<sub>C</sub> tiến gần V<sup>+</sup> thì f<sub>o</sub> giảm về 0; V<sub>C</sub> thấp thì f<sub>o</sub> tăng. 1.44/RC là công thức tần số của 555 astable, không phải 566."
    },
    {
      n: 6,
      text: "Which of the following should be done to obtain the ac equivalent of a network?",
      options: ["Set all dc sources to zero", "Replace all capacitors by a short-circuit equivalent.", "Remove all elements bypassed by the short-circuit equivalent.", "All of the other choices."],
      answers: [3],
      explain: "Quy trình xây mạch tương đương AC gồm CẢ BA bước: (1) đưa nguồn DC về 0 (thay nguồn áp bằng ngắn mạch); (2) thay tụ bằng ngắn mạch (tụ có trở kháng nhỏ ở tần số làm việc); (3) loại bỏ các phần tử bị tụ bypass nối song song. Kết quả là mạch nhỏ tín hiệu."
    },
    {
      n: 7,
      text: "What is the formula for \\(r_e\\) (input resistance in the small-signal model)?",
      options: ["\\(r_e = V_{CC}/I_B\\)", "\\(r_e = 26\\ \\text{mV}/I_E\\)", "\\(r_e = V_{BE}/I_C\\)", "\\(r_e = 1/h_{fe}\\)"],
      answers: [1],
      explain: "Trở emitter động: \\(r_e = \\dfrac{26\\ \\text{mV}}{I_E}\\) (nhiệt độ phòng) — xuất phát từ phương trình diode \\(r_e = \\eta V_T/I_E\\) với V<sub>T</sub> = 26 mV. I<sub>E</sub> càng lớn, r<sub>e</sub> càng nhỏ, độ lợi tầng CE càng cao."
    },
    {
      n: 8,
      text: "You have a need to apply an amplifier with a very high power gain. Which of the following would you choose?",
      options: ["common-collector", "common-base", "common-emitter", "emitter-follower"],
      answers: [2],
      explain: "Common-emitter là cấu hình duy nhất có CẢ độ lợi dòng (β) và độ lợi áp (−R<sub>C</sub>/r<sub>e</sub>) lớn → độ lợi CÔNG SUẤT \\(A_p = A_v \\times A_i\\) cao nhất trong ba cấu hình. Common-collector chỉ có độ lợi dòng; common-base chỉ có độ lợi áp."
    },
    {
      n: 9,
      text: "In AC equivalent circuit analysis, the circuit is obtained by:",
      options: ["Replacing capacitors with short circuits and removing DC sources", "Shorting all resistors", "Open-circuiting the transistor", "Removing emitter resistor"],
      answers: [0],
      explain: "Mạch tương đương AC: tụ → ngắn mạch (ở tần số trung), nguồn DC → 0 (nguồn áp thành nối đất). Trở thì GIỮ NGUYÊN (trở quyết định độ lợi); transistor thay bằng mô hình nhỏ tín hiệu chứ không bị bỏ hở; R<sub>E</sub> chỉ bị " + '"' + "loại bỏ" + '"' + " khi có tụ bypass song song."
    },
    {
      n: 10,
      text: "This circuit is referred to as a(n) ________.",
      image: "q10.png",
      imageAlt: "Op-amp: vi qua trở R vào cực −, tụ C trong mạch phản hồi",
      options: ["inverting amplifier", "noninverting amplifier", "differentiator", "integrator"],
      answers: [3],
      explain: "Tụ C nằm ở mạch PHẢN HỒI + trở R ở ngõ vào = mạch TÍCH PHÂN (integrator): \\(V_o = -\\dfrac{1}{RC}\\int v_i\\,dt\\). Ngược lại (C ở ngõ vào, R phản hồi) mới là differentiator. Tín hiệu vuông vào cho ra tín hiệu tam giác."
    },
    {
      n: 11,
      text: "How many input terminals does a basic op-amp symbol show?",
      options: ["One", "Two", "Three", "Four"],
      answers: [1],
      explain: "Ký hiệu op-amp cơ bản có 2 ngõ vào: cực ĐẢO (−) và cực KHÔNG ĐẢO (+), cùng 1 ngõ ra (nguồn ±V thường không vẽ trong ký hiệu đơn giản). Hai ngõ vào vi phân chính là bản chất của op-amp."
    },
    {
      n: 12,
      text: "What happens to the output signal polarity when the input is applied to the inverting input (noninverting input grounded)?",
      options: ["Same polarity as input.", "90 degrees out of phase.", "180 degrees out of phase.", "Zero output."],
      answers: [2],
      explain: "Cấp tín hiệu vào cực đảo (−): ngõ ra ĐẢO DẤU, tức lệch pha 180° (đỉnh dương thành đỉnh âm). Đây là tính chất nền của cấu hình inverting amplifier với \\(A_v = -R_f/R_1\\)."
    },
    {
      n: 13,
      text: "What does a high Common-Mode Rejection Ratio (CMRR) indicate?",
      options: ["Poor rejection of common-mode signals.", "Good rejection of common-mode signals.", "High differential gain.", "Low output impedance."],
      answers: [1],
      explain: "\\(CMRR = \\dfrac{A_d}{A_{cm}}\\) (thường tính bằng dB, 741 ≈ 90 dB). CMRR CAO nghĩa là mạch khuếch đại hiệu vi phân rất tốt trong khi LOẠI gần hoàn toàn tín hiệu chung (nhiễu, drift) xuất hiện đồng thời trên hai ngõ vào."
    },
    {
      n: 14,
      text: "What does a differential amplifier amplify?",
      options: ["Common signals.", "Noisy signals.", "Difference signals.", "All signals equally."],
      answers: [2],
      explain: "Khuếch đại vi phân chỉ khuếch đại HIỆU (difference) \\(V_o = A_d(V_1 - V_2)\\). Tín hiệu common-mode (giống nhau trên cả hai ngõ, như nhiễu đường truyền) bị triệt tiêu theo CMRR. Nhờ vậy mạch chống nhiễu rất tốt."
    },
    {
      n: 15,
      text: "The input characteristics of the Common-Base configuration show the relationship between:",
      options: ["I<sub>C</sub> and V<sub>CE</sub>", "I<sub>B</sub> and V<sub>BE</sub>", "I<sub>E</sub> and V<sub>BE</sub>", "I<sub>C</sub> and I<sub>B</sub>"],
      answers: [2],
      explain: "Ở common-base, ngõ vào là emitter nên đặc tuyến vào là \\(I_E = f(V_{BE})\\) — giống đặc tuyến diode. Common-emitter mới dùng \\(I_B = f(V_{BE})\\); I<sub>C</sub>-V<sub>CE</sub> là họ đặc tuyến ra."
    },
    {
      n: 16,
      text: "What are the three terminals of a BJT?",
      options: ["Gate, Drain, Source", "Emitter, Base, Collector", "Anode, Cathode, Gate", "Source, Base, Drain"],
      answers: [1],
      explain: "BJT có 3 cực: EMITTER (phát — pha tạp đậm nhất), BASE (cơ sở — mỏng nhất, ít pha tạp), COLLECTOR (thu — diện tích lớn nhất). Gate/Drain/Source thuộc FET; Anode/Cathode/Gate thuộc SCR/thyristor."
    },
    {
      n: 17,
      text: "Refer to this figure. The value of V<sub>CE</sub> is:",
      image: "q17.png",
      imageAlt: "Mạch fixed-bias: VBB = 5 V, RB = 5 kΩ, RC = 470 Ω, VCC = 20 V, βDC = 25",
      options: ["9.9 V", "9.2 V", "0.7 V", "19.3 V"],
      answers: [0],
      explain: "\\(I_B = (5 - 0.7)/5k = 0.86\\ \\text{mA}\\); \\(I_C = \\beta I_B = 21.5\\ \\text{mA}\\); \\(V_{CE} = V_{CC} - I_C R_C = 20 - 21.5m \\times 470 = 9.9\\ \\text{V}\\). Kiểm tra: 0.7 V < 9.9 V < 20 V → transistor đang ở vùng active, hợp lệ."
    },
    {
      n: 18,
      text: "In this circuit \\(\\beta_{DC} = 100\\) and \\(V_{IN} = 8\\ \\text{V}\\). The value of R<sub>B</sub> that will produce saturation is:",
      image: "q18.png",
      imageAlt: "Mạch: +20 V qua RC = 2.5 kΩ, VIN qua RB vào base, emitter nối đất",
      options: ["92 kΩ", "9.1 MΩ", "100 kΩ", "150 kΩ"],
      answers: [0],
      explain: "Dòng bão hòa: \\(I_{C(sat)} = \\dfrac{20 - 0.2}{2.5k} \\approx 7.92\\ \\text{mA}\\) → \\(I_{B(sat)} = 7.92m/100 = 79.2\\ \\mu\\text{A}\\). R<sub>B</sub> tối đa để đạt bão hòa: \\(R_B = \\dfrac{V_{IN} - 0.7}{I_{B(sat)}} = \\dfrac{7.3}{79.2\\mu} \\approx 92\\ \\text{k}\\Omega\\). R<sub>B</sub> nhỏ hơn 92 kΩ sẽ bảo đảm bão hòa sâu hơn."
    },
    {
      n: 19,
      text: "In which operating mode are both the emitter-base and collector-base junctions of a transistor reverse biased?",
      options: ["Active mode", "Saturation mode", "Cut-off mode", "Linear mode"],
      answers: [2],
      explain: "Cut-off: cả BE lẫn BC đều phân cực NGƯỢC → không có dòng (trừ rò rỉ ICEO rất nhỏ), transistor như công tắc mở. Active: BE thuận, BC ngược. Saturation: cả hai thuận."
    },
    {
      n: 20,
      text: "Which FET type is preferred for integrated circuits?",
      options: ["BJT", "MOSFET", "JFET", "MESFET"],
      answers: [1],
      explain: "MOSFET là lựa chọn số một cho IC vì: kích thước siêu nhỏ, gate cách điện tiêu thụ công suất gần 0 ở trạng thái tĩnh, dễ chế tạo hàng tỷ transistor (CMOS) trên một chip, và cách ly tự nhiên giữa các linh kiện."
    },
    {
      n: 21,
      text: "What is " + '"' + "pinch-off" + '"' + " in a JFET?",
      options: ["The point where the drain current starts to increase rapidly with V_DS.", "The point where the depletion regions meet, constricting the channel and limiting the drain current.", "The point where the gate current starts to flow.", "The point where the JFET enters the ohmic region."],
      answers: [1],
      explain: "Khi V<sub>DS</sub> tăng đến V<sub>P</sub>, các vùng nghèo chạm nhau gần drain, thu hẹp kênh → dòng I<sub>D</sub> bị GHIM (bão hòa) ở I<sub>DSS</sub> và gần như không tăng thêm. Đó là ranh giới giữa vùng ohmic và vùng bão hòa (active)."
    },
    {
      n: 22,
      text: "Which of the following is a type of Field-Effect Transistor?",
      options: ["Bipolar Junction Transistor (BJT).", "Silicon Controlled Rectifier (SCR).", "Metal-Oxide-Semiconductor Field-Effect Transistor (MOSFET).", "Diode for Alternating Current (Diac)."],
      answers: [2],
      explain: "MOSFET thuộc họ FET (điều khiển bằng điện trường, dòng gate ≈ 0). FET gồm JFET và MOSFET (D-MOS, E-MOS). BJT điều khiển bằng dòng, SCR/Diac là linh kiện thyristor công suất — không thuộc họ FET."
    },
    {
      n: 23,
      text: "For an n-channel E-MOSFET, what polarity of V_GS is required to create a channel?",
      options: ["Negative", "Zero", "Positive", "Either positive or negative"],
      answers: [2],
      explain: "E-MOSFET kênh n cần \\(V_{GS} > V_T > 0\\) (DƯƠNG): điện áp dương hút electron về bề mặt oxít, tạo lớp đảo (inversion layer) chính là kênh dẫn nối drain-source. V<sub>GS</sub> ≤ 0 → không có kênh → tắt."
    },
    {
      n: 24,
      text: "What does I_DSS represent in a JFET?",
      options: ["The drain current when V_GS equals the pinch-off voltage.", "The maximum drain current when V_GS = 0V and V_DS ≥ V_P.", "The gate-to-source voltage at pinch-off.", "The drain current in the ohmic region."],
      answers: [1],
      explain: "I<sub>DSS</sub> = dòng drain bão hòa khi gate NGẮN MẠCH source (V<sub>GS</sub> = 0) và V<sub>DS</sub> ≥ V<sub>P</sub> — giá trị lớn nhất kênh có thể dẫn, hai chữ SS nghĩa là gate-source shorted. Đây là tham số chuẩn trong phương trình Shockley."
    },
    {
      n: 25,
      text: "What type of bond holds atoms together in semiconductor crystals like Si or Ge?",
      options: ["Ionic Bond", "Covalent Bond", "Metallic Bond", "Hydrogen Bond"],
      answers: [1],
      explain: "Si/Ge có 4 electron hóa trị, mỗi nguyên tử CHIA SẺ 4 cặp electron với 4 láng giềng → LIÊN KẾT CỘNG HÓA TRỊ (covalent) tạo mạng tinh thể lập phương. Chính các liên kết này phải bị phá vỡ (nhiệt hoặc doping) để tạo carrier tự do."
    },
    {
      n: 26,
      text: "When a diode is reverse biased, the current is:",
      options: ["Zero", "High", "Negligible", "Infinite"],
      answers: [2],
      explain: "Phân cực ngược: vùng nghèo mở rộng, chỉ còn dòng rò do carrier thiểu số — rất NHỎ (µA/nA) nhưng KHÔNG ĐÚNG BẰNG 0. Vì vậy " + '"' + "negligible" + '"' + " (không đáng kể) mới là đáp án chính xác hơn " + '"' + "zero" + '"' + ". Đến ngưỡng đánh thủng thì dòng tăng đột biến."
    },
    {
      n: 27,
      text: "Which material has the highest electron mobility?",
      options: ["Silicon", "Germanium", "Gallium Arsenide", "Gallium Nitride"],
      answers: [2],
      explain: "GaAs có độ linh động electron (electron mobility) ≈ 8500 cm²/V·s, cao hơn Si (~1500) và Ge (~3900) nhiều lần → phản ứng nhanh hơn, tần số làm việc cao hơn. Vì vậy GaAs dùng trong RF/microwave và LED laser. GaN mạnh về công suất nhưng mobility thấp hơn GaAs."
    },
    {
      n: 28,
      text: "What is the approximate threshold voltage for a silicon diode?",
      options: ["0.3 V", "0.5 V", "0.7 V", "1.2 V"],
      answers: [2],
      explain: "Diode Si: V<sub>K</sub> ≈ 0.7 V — mức điện áp thuận mà từ đó dòng tăng theo hàm mũ. Ge ≈ 0.3 V; GaAs ≈ 1.2 V. Giá trị 0.7 V được dùng làm xấp xỉ chuẩn khi phân tích mạch diode silicon."
    },
    {
      n: 29,
      text: "Calculate I<sub>Csat</sub>.",
      image: "q29.png",
      imageAlt: "Mạch phân cực chia áp: 18 V, RC = 3.3 kΩ, R1 = 91 kΩ, R2 = 110 kΩ, RE = 510 Ω (bypass 50 µF), β = 75",
      options: ["1.86 mA", "4.72 mA", "5.45 mA", "35.29 mA"],
      answers: [1],
      explain: "Điểm bão hòa không phụ thuộc mạng phân cực: \\(I_{C(sat)} = \\dfrac{V_{CC}}{R_C + R_E} = \\dfrac{18}{3.3k + 0.51k} = \\dfrac{18}{3.81k} = 4.72\\ \\text{mA}\\). Mạng R1/R2/β chỉ quyết định transistor CÓ đạt bão hòa hay không, còn I<sub>C(sat)</sub> do mạch ngoài ấn định."
    },
    {
      n: 30,
      text: "What is the primary goal when setting a Q-point in a transistor amplifier?",
      options: ["Reach maximum I<sub>C</sub>", "Maximize noise", "Avoid distortion and ensure linear amplification", "Equal I<sub>B</sub> and I<sub>C</sub>"],
      answers: [2],
      explain: "Điểm Q đặt giữa đường tải (thường gần giữa vùng active) để tín hiệu AC dao động hai chiều quanh Q mà KHÔNG chạm vào bão hòa hay cut-off → khuếch đại tuyến tính, không méo. Đặt Q sai (quá cao/quá thấp) sẽ cắt cụt nửa dương hoặc nửa âm."
    },
    {
      n: 31,
      text: "Which condition describes cutoff operation?",
      options: ["Both junctions forward-biased", "Both junctions reverse-biased", "Base-emitter forward, base-collector reverse", "Collector shorted"],
      answers: [1],
      explain: "Cut-off = CẢ HAI junction ngược (BE ngược, BC ngược) → I<sub>C</sub> ≈ 0, V<sub>CE</sub> ≈ V<sub>CC</sub>. Phương án C (BE thuận, BC ngược) là vùng ACTIVE dùng để khuếch đại; A là saturation."
    },
    {
      n: 32,
      text: "Which parameter determines the slope of the load line?",
      options: ["V<sub>BE</sub>", "R<sub>C</sub>", "R<sub>B</sub>", "\\(\\beta\\)"],
      answers: [1],
      explain: "Đường tải: \\(V_{CE} = V_{CC} - I_C R_C\\) → hệ số góc = \\(-1/R_C\\). R<sub>C</sub> nhỏ → đường tải dựng đứng (dòng dao động lớn); R<sub>C</sub> lớn → đường tải nằm (dải áp lớn). V<sub>BE</sub>, R<sub>B</sub>, β chỉ quyết định điểm Q nằm TRÊN đường tải ở đâu."
    },
    {
      n: 33,
      text: "In which region does a BJT operate for amplification?",
      options: ["Cutoff", "Active", "Saturation", "Breakdown"],
      answers: [1],
      explain: "Vùng ACTIVE (BE thuận, BC ngược): I<sub>C</sub> = βI<sub>B</sub> tuyến tính, transistor khuếch đại đúng nghĩa. Cutoff và saturation là 2 trạng thái của công tắc; breakdown làm transistor hỏng nếu công suất quá lớn."
    },
    {
      n: 34,
      text: "What is required for an E-MOSFET to turn ON and conduct current?",
      options: ["V<sub>GS</sub> must be 0 V", "V<sub>GS</sub> must be less than threshold voltage (V<sub>T</sub>)", "|V<sub>GS</sub>| must be greater than threshold voltage (V<sub>T</sub>)", "I<sub>G</sub> must be positive"],
      answers: [2],
      explain: "E-MOSFET chỉ dẫn khi điện áp gate vượt ngưỡng: với kênh n cần V<sub>GS</sub> > V<sub>T</sub>, kênh p cần V<sub>GS</sub> < V<sub>T</sub> (âm hơn) — tóm lại |V<sub>GS</sub>| > |V<sub>T</sub>|. I<sub>G</sub> luôn ≈ 0 do gate cách điện, không có khái niệm " + '"' + "dòng gate dương" + '"' + "."
    },
    {
      n: 35,
      text: "How is the Q-point typically determined in FET circuits?",
      options: ["Intersection of two voltage sources.", "Intersection of load line and transistor characteristic curve.", "Intersection of two resistors.", "Intersection of base and emitter voltages."],
      answers: [1],
      explain: "Giống BJT: điểm Q của FET là GIAO ĐIỂM giữa đường tải DC (vẽ từ \\(V_{DS} = V_{DD}\\) đến \\(I_D = V_{DD}/(R_D + R_S)\\)) và đặc tuyến hoặc đường cong truyền đạt của FET ứng với điều kiện phân cực."
    },
    {
      n: 36,
      text: "Can a D-MOSFET be biased with \\(V_{GS} = 0\\ \\text{V}\\)?",
      options: ["No, negative V<sub>GS</sub> is required", "Yes, drain current will be I<sub>DSS</sub>", "Yes, but transistor is in cutoff", "Only for p-channel D-MOSFETs"],
      answers: [1],
      explain: "Được — D-MOSFET có kênh vật lý sẵn, tại V<sub>GS</sub> = 0 dòng drain đúng bằng \\(I_{DSS}\\). Đây là kiểu phân cực fixed-bias V<sub>GS</sub> = 0 kinh điển, đơn giản nhất cho D-MOSFET trong các mạch khuếch đại tín hiệu nhỏ."
    },
    {
      n: 37,
      text: "What is a key difference in DC analysis between BJT and FET configurations?",
      options: ["BJT analysis is always graphical, FET analysis is always mathematical.", "BJT relationships are generally linear, FET relationships are nonlinear.", "FET analysis requires knowing β, BJT requires V_P.", "BJT uses Kirchhoff's laws, FET uses Ohm's law exclusively."],
      answers: [1],
      explain: "BJT: \\(I_C = \\beta I_B\\) — quan hệ TUYẾN TÍNH (với β hằng). FET: phương trình Shockley \\(I_D = I_{DSS}(1 - V_{GS}/V_P)^2\\) — PHI TUYẾN (bình phương), nên bài toán FET thường phải giải phương trình bậc hai hoặc dựng đồ thị. Cả hai đều dùng KVL/Ohm."
    },
    {
      n: 38,
      text: "Calculate the input voltage if the final output is 10.08 V.",
      image: "q38.png",
      imageAlt: "Ba tầng op-amp: tầng 1 không đảo 5k/10k, tầng 2 đảo 5k/5k, tầng 3 đảo 5k/100k",
      options: ["−1.05 V", "0.168 V", "0.525 V", "4.2 V"],
      answers: [1],
      explain: "Độ lợi từng tầng: tầng 1 (không đảo) \\(1 + 10k/5k = 3\\); tầng 2 (đảo) \\(-5k/5k = -1\\); tầng 3 (đảo) \\(-100k/5k = -20\\). Tổng: \\(A = 3 \\times (-1) \\times (-20) = 60\\). \\(V_i = 10.08/60 = 0.168\\ \\text{V}\\). Hai dấu trừ nhân nhau thành dương."
    },
    {
      n: 39,
      text: "Calculate the output voltage if \\(V_1 = 300\\ \\text{mV}\\) and \\(V_2 = 700\\ \\text{mV}\\).",
      image: "q39.png",
      imageAlt: "Mạch trừ hai op-amp: tầng đảo 250k/500k rồi tầng cộng đảo 100k, 50k, phản hồi 500k",
      options: ["−4 V", "10 V", "−10 V", "0 V"],
      answers: [0],
      explain: "\\(V_o = 10V_1 - 10V_2 = 10(0.3) - 10(0.7) = 3 - 7 = -4\\ \\text{V}\\). Tầng 1 đảo V<sub>1</sub> thành −0.6 V, tầng 2 cộng đảo hai tín hiệu với hệ số 5 lần (500k/100k) và 10 lần (500k/50k) tương ứng."
    },
    {
      n: 40,
      text: "Calculate the output voltage if \\(V_1 = V_2 = 0.15\\ \\text{V}\\).",
      image: "q40.png",
      imageAlt: "Bộ cộng đảo: V1 qua 33 kΩ, V2 qua 10 kΩ, phản hồi 330 kΩ, nguồn ±9 V",
      options: ["0 V", "3 V", "−3 V", "−6.45 V"],
      answers: [3],
      explain: "Bộ cộng đảo: \\(V_o = -\\dfrac{330k}{33k}(0.15) - \\dfrac{330k}{10k}(0.15) = -10(0.15) - 33(0.15) = -1.5 - 4.95 = -6.45\\ \\text{V}\\). Vẫn trong giới hạn nguồn ±9 V nên không bão hòa."
    },
    {
      n: 41,
      text: "Calculate the output of the second stage op-amp if \\(V_1 = 25\\ \\text{mV}\\).",
      image: "q38.png",
      imageAlt: "Ba tầng op-amp: tầng 1 không đảo 5k/10k, tầng 2 đảo 5k/5k, tầng 3 đảo 5k/100k",
      options: ["−0.075 V", "0.525 V", "0.06 V", "4.2 V"],
      answers: [0],
      explain: "Tầng 1 (không đảo): \\(V_{o1} = 3 \\times 25\\ \\text{mV} = 75\\ \\text{mV}\\). Tầng 2 (đảo, 5k/5k): \\(V_{o2} = -1 \\times 75\\ \\text{mV} = -0.075\\ \\text{V}\\). Câu hỏi dừng ở tầng 2 nên không nhân thêm −20 của tầng 3."
    },
    {
      n: 42,
      text: "What is the ideal voltage gain of a voltage buffer?",
      options: ["A = −1.", "A = 0.", "A = 1.", "A = ∞."],
      answers: [2],
      explain: "Voltage buffer (voltage follower) = op-amp phản hồi nối trực tiếp ngõ ra về cực −: \\(A_v = 1\\) — ngõ ra bám theo ngõ vào. Mục đích không phải khuếch đại mà là KHỚP TRỞ: trở vào vô cùng lớn, trở ra ≈ 0."
    },
    {
      n: 43,
      text: "In a Common-Gate amplifier, which terminal is common to both input and output?",
      options: ["Gate", "Source", "Drain", "Substrate"],
      answers: [0],
      explain: "Common-GATE: cực gate nối AC đất, tín hiệu vào SOURCE, ra DRAIN — gate là cực chung. Ngược với common-source (source chung) và common-drain (drain chung). Substrate thường nối nguồn hoặc source về mặt DC."
    },
    {
      n: 44,
      text: "What is the primary advantage of JFET Voltage-Divider Bias compared to Fixed-Bias and Self-Bias?",
      options: ["Higher voltage gain.", "Better Q-point stability against device parameter variations.", "Lower output impedance.", "Simpler circuit design."],
      answers: [1],
      explain: "Chia áp cấp điện áp gate CỐ ĐỊNH độc lập với thông số transistor: điểm Q gần như không trôi khi I<sub>DSS</sub>/V<sub>P</sub> thay đổi giữa các linh kiện hay theo nhiệt độ. Self-bias chỉ ổn định nhờ R<sub>S</sub>; fixed-bias phụ thuộc hoàn toàn vào V<sub>GS</sub> cứng — kém ổn định nhất."
    },
    {
      n: 45,
      text: "Referring to the transfer characteristics shown below, calculate g<sub>m</sub> at V<sub>GSQ</sub> = −1 V.",
      image: "q45.png",
      imageAlt: "Đường truyền đạt: IDSS = 8 mA tại VGS = 0, VP = −4 V",
      options: ["2 mS", "3 mS", "4 mS", "5 mS"],
      answers: [1],
      explain: "\\(g_{m0} = \\dfrac{2 I_{DSS}}{|V_P|} = \\dfrac{2 \\times 8}{4} = 4\\ \\text{mS}\\). Tại điểm Q: \\(g_m = g_{m0}\\left(1 - \\dfrac{V_{GS}}{V_P}\\right) = 4(1 - 0.25) = 3\\ \\text{mS}\\). Đồ thị cho thấy độ dốc của đặc tuyến tại V<sub>GS</sub> = −1 V chính là 3 mS."
    },
    {
      n: 46,
      text: "In a JFET Self-Bias configuration, what is the role of the bypass capacitor (C_S) across the source resistor (R_S)?",
      options: ["Increases input impedance.", "Increases output impedance.", "Shorts R_S for AC signals, increasing voltage gain.", "Filters out DC signals."],
      answers: [2],
      explain: "C<sub>S</sub> nối song song R<sub>S</sub>: với DC giữ nguyên tác dụng phân cực (V<sub>GS</sub> = −I<sub>D</sub>R<sub>S</sub>), với AC trở kháng tụ rất nhỏ → NGẮN MẠCH R<sub>S</sub> → loại phản hồi âm → khôi phục độ lợi \\(A_v = -g_m R_D\\) (nếu không bypass: \\(A_v\\) bị chia bởi \\(1 + g_m R_S\\))."
    },
    {
      n: 47,
      text: "The main disadvantage of half-wave rectification is:",
      options: ["Too much current", "Diode failure", "Only half the waveform is used", "Reverse current is too high"],
      answers: [2],
      explain: "Half-wave chỉ cho qua MỘT nửa chu kỳ → tần số gợn sóng (ripple) bằng f nguồn, giá trị DC thấp (V<sub>dc</sub> = 0.318V<sub>m</sub>), hiệu suất thấp. Full-wave khắc phục bằng cách dùng cả hai nửa chu kỳ (V<sub>dc</sub> = 0.636V<sub>m</sub>, ripple gấp đôi tần số dễ lọc hơn)."
    },
    {
      n: 48,
      text: "The center-tapped full-wave rectifier requires:",
      options: ["Four diodes", "Two diodes and no transformer", "Two diodes and center-tap transformer", "A single diode"],
      answers: [2],
      explain: "Full-wave có ĐẦU NGOI (center-tap) dùng 2 diode: mỗi diode làm việc một nửa chu kỳ trên nửa thứ cấp tương ứng. Mạch cầu (bridge) dùng 4 diode nhưng không cần đầu ngoi. Nửa chu kỳ chỉ 1 diode. Đây là phân loại chuẩn ba kiểu chỉnh lưu."
    },
    {
      n: 49,
      text: "Determine the average value of the current through the load resistor.",
      image: "q49.png",
      imageAlt: "Mạch chỉnh lưu: vi 10 V, hai diode, ba trở 2 kΩ, Vo đo trên trở ngang 2 kΩ",
      options: ["2.5 mA", "0 mA", "1.37 mA", "1.479 mA"],
      answers: [3],
      explain: "Hai diode dẫn luân phiên hai nửa chu kỳ (chỉnh lưu full-wave một sụt áp diode mỗi nửa). Đỉnh dòng trong mạch: \\(I_m = \\dfrac{10 - 0.7}{2k + 2k} = 2.325\\ \\text{mA}\\). Giá trị trung bình full-wave: \\(I_{dc} = \\dfrac{2 I_m}{\\pi} = 0.6366 \\times 2.325 = 1.479\\ \\text{mA}\\)."
    },
    {
      n: 50,
      text: "The function of a diode in a rectifier is to:",
      options: ["Limit voltage", "Amplify signal", "Allow current in one direction", "Store energy"],
      answers: [2],
      explain: "Diode chỉ cho dòng đi MỘT CHIỀU (từ anode sang cathode khi phân cực thuận) — chính tính một chiều này biến AC thành DC trong mạch chỉnh lưu. Giới hạn áp là chức năng của clipper/zener, khuếch đại là transistor/op-amp, tích trữ năng lượng là tụ/cuộn cảm."
    }
  ]
});
