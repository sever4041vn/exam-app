// ELC201 - Summer 2026 - Final Exam
// Nguồn: ELC201 - SU26 - FE.pdf (50 câu hỏi trắc nghiệm)
window.EXAMAPP_EXAMS = window.EXAMAPP_EXAMS || [];
window.EXAMAPP_EXAMS.push({
  id: "elc201-su26-fe",
  subjectId: "ELC201",
  title: "ELC201 - Summer 2026 - Final Exam",
  originalFile: "ELC201 - SU26 - FE.pdf",
  semester: "Summer 2026",
  semesterKey: "su26",
  type: "Final Exam",
  typeKey: "final",
  durationMinutes: 60,
  imagePath: "images/elc201/su26-fe/",
  questions: [
    {
      n: 1,
      text: "In an E-MOSFET feedback configuration, what is the relationship between V<sub>GS</sub> and V<sub>DS</sub>?",
      options: [
        "V<sub>GS</sub> = V<sub>DS</sub>",
        "V<sub>GS</sub> = V<sub>DS</sub> + I<sub>D</sub>R<sub>D</sub>",
        "V<sub>GS</sub> = V<sub>DD</sub>",
        "V<sub>GS</sub> = 0 V"
      ],
      answers: [0],
      explain: "Trong cấu hình phản hồi (drain-feedback bias) của E-MOSFET, cửa gắt (gate) được nối với drain qua R<sub>D</sub> nên dòng qua R<sub>D</sub> bằng I<sub>D</sub>. Theo KVL: V<sub>GS</sub> = V<sub>DD</sub> − I<sub>D</sub>R<sub>D</sub> và đồng thời V<sub>DS</sub> = V<sub>DD</sub> − I<sub>D</sub>R<sub>D</sub>. Suy ra V<sub>GS</sub> = V<sub>DS</sub> — đây là đặc trưng nổi bật của kiểu phân cực này."
    },
    {
      n: 2,
      text: "What is the main purpose of biasing in FET circuits?",
      options: [
        "Increase frequency.",
        "Eliminate distortion.",
        "Control impedance.",
        "Establish the Q-point."
      ],
      answers: [3],
      explain: "Phân cực (biasing) là việc cấp điện áp/dòng một chiều để thiết lập điểm làm việc tĩnh Q-point (I<sub>D</sub>, V<sub>DS</sub>) trên đường tải. Điểm Q đặt đúng vị trí giúp transistor khuếch đại tuyến tính, không bão hòa hay cắt cụt tín hiệu. Các đáp án khác không phải mục đích chính của phân cực."
    },
    {
      n: 3,
      text: "What is the approximate gate current for all FETs?",
      options: [
        "Equal to drain current",
        "Equal to source current",
        "Approximately 0 A",
        "Highly dependent on supply voltage"
      ],
      answers: [2],
      explain: "Ở JFET, junction gate luôn phân cực ngược nên chỉ có dòng rò rất nhỏ; ở MOSFET, lớp oxít SiO<sub>2</sub> cách điện hoàn toàn giữa gate và kênh. Vì vậy dòng gate của mọi loại FET xấp xỉ bằng 0 A, dẫn đến trở vào cực lớn (hàng trăm MΩ trở lên). Đây là điểm khác biệt cơ bản so với BJT vốn cần dòng base."
    },
    {
      n: 4,
      text: "What is a key difference in biasing between JFET and D-MOSFET?",
      options: [
        "D-MOSFET requires negative gate voltage.",
        "JFET has higher transconductance.",
        "D-MOSFET can operate with positive gate voltage.",
        "JFET does not require a source resistor."
      ],
      answers: [2],
      explain: "JFET bắt buộc junction gate luôn phân cực ngược (V<sub>GS</sub> ≤ 0 với kênh n) để không đưa junction vào phân cực thuận. D-MOSFET có kênh được chế tạo sẵn nên hoạt động được cả chế độ depletion (V<sub>GS</sub> < 0) lẫn enhancement (V<sub>GS</sub> > 0), tức là chấp nhận điện áp gate dương. Đây chính là khác biệt then chốt giữa hai loại."
    },
    {
      n: 5,
      text: "Which op-amp circuit subtracts one input voltage from another using a single op-amp?",
      options: [
        "Differential amplifier.",
        "Summing amplifier.",
        "Integrator.",
        "Single-stage subtractor."
      ],
      answers: [0],
      explain: "Mạch trừ hai tín hiệu bằng MỘT op-amp chính là khuếch đại vi phân (differential amplifier): tín hiệu vào cả hai đầu + và −, với các trở tỉ lệ phù hợp cho ra V<sub>o</sub> = (R<sub>2</sub>/R<sub>1</sub>)(V<sub>2</sub> − V<sub>1</sub>). Summing amplifier cộng các tín hiệu, integrator tích phân — đều không phải mạch trừ một tầng."
    },
    {
      n: 6,
      text: "Calculate the output voltage if \\(V_1 = V_2 = 700\\ \\text{mV}\\).",
      image: "q06.png",
      imageAlt: "Mạch trừ hai op-amp: tầng đảo 250k/500k rồi tầng cộng đảo 100k, 50k, phản hồi 500k",
      options: ["0 V", "−8 V", "12 V", "−12 V"],
      answers: [0],
      explain: "Tầng 1 là bộ đảo với hệ số −500k/250k = −2 nên V<sub>o1</sub> = −2V<sub>1</sub>. Tầng 2 là bộ cộng đảo: \\(V_o = -\\dfrac{500k}{100k}V_{o1} - \\dfrac{500k}{50k}V_2 = 10V_1 - 10V_2\\). Thay V<sub>1</sub> = V<sub>2</sub> = 0,7 V: V<sub>o</sub> = 7 − 7 = 0 V. Khi hai tín hiệu bằng nhau, mạch trừ cho ra 0 V."
    },
    {
      n: 7,
      text: "In a Voltage-Controlled Voltage Source (VCVS), how is the scaling factor k defined?",
      options: [
        "Temperature",
        "Capacitance",
        "k = Vout / Vcontrol",
        "Supply voltage"
      ],
      answers: [2],
      explain: "Nguồn điện áp điều khiển bằng điện áp (VCVS) có đặc tính V<sub>out</sub> = k·V<sub>control</sub>, trong đó hệ số tỉ lệ k được định nghĩa là tỷ số giữa điện áp ra và điện áp điều khiển: k = V<sub>out</sub>/V<sub>control</sub>. k là đại lượng vô hướng (không thứ nguyên), không liên quan đến nhiệt độ hay điện dung."
    },
    {
      n: 8,
      text: "Calculate the output voltage V<sub>o</sub> if \\(V_1 = -V_2 = 300\\ \\text{mV}\\).",
      image: "q08.png",
      imageAlt: "Mạch trừ hai op-amp: tầng đảo 250k/500k rồi tầng cộng đảo 100k, 50k, phản hồi 500k",
      options: ["0 V", "−6 V", "6 V", "−8 V"],
      answers: [2],
      explain: "Với mạch hai tầng như câu trước, V<sub>o</sub> = 10V<sub>1</sub> − 10V<sub>2</sub>. Ở đây V<sub>1</sub> = 0,3 V và V<sub>2</sub> = −0,3 V nên V<sub>o</sub> = 10(0,3) − 10(−0,3) = 3 + 3 = 6 V. Hai tín hiệu ngược dấu được khuếch đại cùng hướng nên cộng dồn thay vì triệt tiêu."
    },
    {
      n: 9,
      text: "What is the formula for the voltage gain (A) of an ideal noninverting constant-gain multiplier?",
      options: [
        "A = −Rf / R1.",
        "A = 1 + Rf / R1.",
        "A = Rf / R1.",
        "A = 1."
      ],
      answers: [1],
      explain: "Bộ khuếch đại không đảo (noninverting) có tín hiệu vào cực +, phản hồi qua R<sub>f</sub> về cực −. Nhờ virtual short, hệ số khuếch đại \\(A = 1 + \\dfrac{R_f}{R_1}\\), luôn dương và ≥ 1. Công thức −R<sub>f</sub>/R<sub>1</sub> thuộc về bộ khuếch đại đảo."
    },
    {
      n: 10,
      text: "How is the transconductance \\(g_m\\) of a JFET typically calculated at a given gate-source voltage \\(V_{GS}\\), assuming the maximum transconductance \\(g_{m0}\\) is known?",
      options: [
        "\\(g_m = g_{m0}\\left(1 - \\dfrac{V_{GS}}{V_P}\\right)\\)",
        "\\(g_m = \\dfrac{2I_{DSS}}{|V_P|}\\)",
        "\\(g_m = \\dfrac{\\Delta I_D}{\\Delta V_{GS}}\\)",
        "\\(g_m = \\dfrac{1}{r_d}\\)"
      ],
      answers: [0],
      explain: "Độ truyền dẫn (transconductance) tại một điểm phân cực bất kỳ được suy ra từ phương trình Shockley: \\(g_m = g_{m0}\\left(1 - \\dfrac{V_{GS}}{V_P}\\right)\\), với \\(g_{m0} = \\dfrac{2I_{DSS}}{|V_P|}\\) là giá trị lớn nhất khi V<sub>GS</sub> = 0. Đáp án B chỉ tính g<sub>m0</sub>; đáp án C là định nghĩa đại lượng (đạo hàm) chứ không phải công thức tính nhanh khi biết g<sub>m0</sub>."
    },
    {
      n: 11,
      text: "For a JFET self-bias amplifier with a bypassed source resistor, what is the approximate voltage gain \\(A_v\\)?",
      options: [
        "\\(A_v = -g_m R_D\\)",
        "\\(A_v = -g_m(R_D \\parallel r_d)\\)",
        "\\(A_v = g_m R_S\\)",
        "\\(A_v = 1\\)"
      ],
      answers: [0],
      explain: "Khi R<sub>S</sub> được bypass bằng tụ, về điểm tín hiệu nhỏ nguồn chỉ còn tải bằng R<sub>D</sub> nên \\(A_v = -g_m R_D\\). Dấu âm thể hiện đảo pha 180° giữa ra và vào. Công thức \\(-g_m(R_D \\parallel r_d)\\) chính xác hơn nhưng vì r<sub>d</sub> thường rất lớn so với R<sub>D</sub> nên xấp xỉ kinh điển là −g<sub>m</sub>R<sub>D</sub>."
    },
    {
      n: 12,
      text: "Which FET amplifier configuration is analogous to the BJT common-collector (emitter-follower)?",
      options: [
        "Common-Source.",
        "Common-Gate.",
        "Common-Drain (Source-Follower).",
        "Fixed-Bias."
      ],
      answers: [2],
      explain: "Cấu hình common-drain (source-follower) lấy tín hiệu ra ở source trong khi drain nối nguồn — tương ứng với common-collector (emitter-follower) của BJT. Cả hai đều có hệ số khuếch đại điện áp gần 1 (nhỏ hơn 1), trở vào cao, trở ra thấp, dùng làm tầng đệm (buffer)."
    },
    {
      n: 13,
      text: "Referring to the figure, determine the I<sub>D</sub> for V<sub>GS</sub> = −1 V at V<sub>DS</sub> = 5 V.",
      image: "q13.png",
      imageAlt: "Họ đường đặc tính drain của JFET với VGS = 0, -1, -2, -3 V",
      options: ["5.1 mA", "7.2 mA", "−5 mA", "1.1 mA"],
      answers: [0],
      explain: "Từ đồ thị đặc tuyến đầu ra, đường V<sub>GS</sub> = 0 V cho I<sub>DSS</sub> ≈ 8 mA. Đường ứng với V<sub>GS</sub> = −1 V đạt vùng bão hòa quanh I<sub>D</sub> ≈ 5,1–5,2 mA. Tại V<sub>DS</sub> = 5 V (vùng bão hòa, phía phải điểm pinch-off), giá trị I<sub>D</sub> đọc được ≈ 5,1 mA."
    },
    {
      n: 14,
      text: "The average DC output voltage of an ideal half-wave rectifier is:",
      options: ["0.707 V<sub>m</sub>", "0.5 V<sub>m</sub>", "0.318 V<sub>m</sub>", "V<sub>m</sub>"],
      answers: [2],
      explain: "Bộ chỉnh lưu nửa chu kỳ chỉ cho dòng qua tải trong nửa chu kỳ dương, nên giá trị trung bình \\(V_{DC} = \\dfrac{V_m}{\\pi} \\approx 0.318V_m\\). Giá trị 0,707V<sub>m</sub> là điện áp hiệu dụng (RMS) của sin; V<sub>m</sub> là biên độ đỉnh."
    },
    {
      n: 15,
      text: "What is the logic function of this circuit?",
      image: "q15.png",
      imageAlt: "Mạch logic diode: E1, E2 qua diode Si đến node Vo, R 1k kéo lên nguồn E = 10 V",
      options: [
        "Positive logic AND gate",
        "Positive logic OR gate",
        "Negative logic AND gate",
        "Negative logic OR gate"
      ],
      answers: [0],
      explain: "Cực dương (anode) của hai diode nối chung tại node V<sub>o</sub>, còn cực âm (cathode) nối về các ngõ vào E<sub>1</sub>, E<sub>2</sub>; R 1 kΩ kéo node lên nguồn E = 10 V. Nếu bất kỳ ngõ vào nào ở mức THẤP (0 V), diode đó dẫn và kéo V<sub>o</sub> ≈ 0,7 V (thấp). Chỉ khi cả hai ngõ vào CAO (10 V) thì hai diode đều khóa, không có dòng qua R và V<sub>o</sub> = 10 V (cao). Ra cao chỉ khi mọi vào cao → cổng AND của logic dương."
    },
    {
      n: 16,
      text: "The <b>DC resistance</b> of a diode at the <b>Q-point</b> is defined by:",
      options: [
        "\\(I_D / V_D\\)",
        "\\(V_D / I_D\\)",
        "\\(E / R\\)",
        "\\(R / E\\)"
      ],
      answers: [1],
      explain: "Điện trở một chiều (DC/static resistance) tại điểm Q được định nghĩa theo định luật Ohm: \\(R_D = \\dfrac{V_D}{I_D}\\) — tỷ số giữa điện áp trên diode và dòng qua diode tại điểm làm việc. Đáp án \\(I_D/V_D\\) là nghịch đảo của nó (điện dẫn)."
    },
    {
      n: 17,
      text: "In full-wave rectification, output is obtained:",
      options: [
        "During the positive half only",
        "During the negative half only",
        "During the full input cycle",
        "Only at peak voltages"
      ],
      answers: [2],
      explain: "Chỉnh lưu toàn chu kỳ (full-wave) tận dụng cả nửa chu kỳ dương lẫn nửa chu kỳ âm của nguồn: dòng luôn đi qua tải theo cùng một chiều trong toàn bộ chu kỳ. Nhờ vậy tần số gợn sóng ra gấp đôi (2f) và giá trị trung bình cao gấp đôi so với chỉnh lưu nửa chu kỳ."
    },
    {
      n: 18,
      text: "In a bridge rectifier, how many diodes conduct in each half cycle?",
      options: ["One", "Two", "Three", "Four"],
      answers: [1],
      explain: "Trong cầu diode (bridge) có 4 diode, nhưng mỗi nửa chu kỳ chỉ có 2 diode dẫn đồng thời (một cặp), cặp còn lại bị phân cực ngược. Ở nửa chu kỳ sau, cặp kia thay phiên dẫn. Vì vậy dòng qua tải luôn cùng chiều và hiệu điện thế mất trên 2 diode (~1,4 V với diode silicon)."
    },
    {
      n: 19,
      text: "What type of ICs contain both linear and digital characteristics?",
      options: [
        "Analog ICs.",
        "Digital ICs.",
        "Linear-Digital ICs.",
        "Microprocessor ICs."
      ],
      answers: [2],
      explain: "IC hỗn hợp tuyến tính – số (linear/digital) kết hợp đặc tính cả hai loại: phần vào/tiếp nhận là tín hiệu tương tự nhưng phần ra là mức số. Ví dụ điển hình: comparator (vào analog, ra số), bộ chuyển đổi ADC/DAC, timer 555, VCO với output xung."
    },
    {
      n: 20,
      text: "What is a key advantage of dedicated comparator ICs over op-amps used as comparators?",
      options: [
        "Slower switching speeds.",
        "Higher power consumption.",
        "Faster switching and built-in noise immunity.",
        "Lower input impedance."
      ],
      answers: [2],
      explain: "IC comparator chuyên dụng (như LM311, LM339) được tối ưu để làm việc ở chế độ bão hòa mở vòng: thời gian phản hồi rất ngắn (nhanh hơn op-amp tổng dụng nhiều), nhiều loại tích hợp hysteresis nội tại giúp tăng khả năng chống nhiễu, và output kiểu open-collector dễ giao tiếp với logic. Tốc độ chậm, tiêu thụ cao, trở vào thấp đều là nhược điểm chứ không phải ưu điểm."
    },
    {
      n: 21,
      text: "What does a Digital-to-Analog Converter (DAC) do?",
      options: [
        "Converts analog voltage to digital values.",
        "Compares two analog voltages.",
        "Converts digital input to proportional analog output voltage or current.",
        "Generates timing signals."
      ],
      answers: [2],
      explain: "DAC thực hiện công việc ngược với ADC: nhận mã số nhị phân ở ngõ vào và xuất ra điện áp hoặc dòng điện tương tự tỉ lệ thuận với giá trị mã đó. So sánh hai điện áp là chức năng của comparator; tạo tín hiệu định thì là của timer/oscillator."
    },
    {
      n: 22,
      text: "What will the output waveform V<sub>o</sub> look like?",
      image: "q22.png",
      imageAlt: "Op-amp 741 không phản hồi: đầu + nối đất, đầu - nhận tín hiệu sin, nguồn ±12 V",
      options: [
        "A sinusoidal waveform with a larger amplitude than the input",
        "A sinusoidal waveform with a smaller amplitude than the input",
        "A square waveform swinging between +12 V and −12 V, inverted with respect to the input",
        "A constant voltage of 0 V"
      ],
      answers: [2],
      explain: "Mạch không có phản hồi, tín hiệu sin đưa vào đầu − (đầu + nối đất) nên op-amp làm việc như comparator bắt qua zero (zero-crossing detector) với gain vòng hở rất lớn (~200.000). Dù biên độ vào rất nhỏ, output cũng bão hòa: V<sub>o</sub> = −12 V khi V<sub>in</sub> > 0 và +12 V khi V<sub>in</sub> < 0. Kết quả là sóng vuông ±12 V đảo pha so với ngõ vào."
    },
    {
      n: 23,
      text: "What is the typical range of current gain β for commonly used BJTs?",
      options: ["1-10", "50-200", "500-1000", ">2000"],
      answers: [1],
      explain: "Hệ số khuếch đại dòng β<sub>DC</sub> (h<sub>FE</sub>) của transistor lưỡng cực thông dụng thường nằm trong khoảng 50–200, tùy loại và dòng làm việc. Giá trị quá nhỏ (1–10) hoặc quá lớn (hàng nghìn) hiếm gặp ở BJT thường; transistor Darlington mới đạt β vài nghìn."
    },
    {
      n: 24,
      text: "In the r<sub>e</sub> model, what replaces the base-emitter junction in the AC equivalent circuit?",
      options: [
        "Current source",
        "Capacitor",
        "Equivalent resistance",
        "Inductor"
      ],
      answers: [2],
      explain: "Trong mô hình r<sub>e</sub> (Ebers-Moll đơn giản hóa cho tín hiệu nhỏ), junction base-emitter được thay bằng một điện trở tương đương \\(r_e = \\dfrac{26\\,\\text{mV}}{I_E}\\), còn collector–emitter được mô hình bằng nguồn dòng controlled βI<sub>b</sub> (hoặc αI<sub>e</sub>)."
    },
    {
      n: 25,
      text: "Which bias configuration for BJT includes a voltage divider and an emitter resistor?",
      options: [
        "Fixed-bias",
        "Collector-feedback",
        "Voltage-divider bias",
        "Darlington"
      ],
      answers: [2],
      explain: "Phân cực chia áp (voltage-divider bias) dùng hai điện trở R<sub>1</sub>, R<sub>2</sub> chia điện áp nguồn để xác định V<sub>B</sub>, kết hợp R<sub>E</sub> ở emitter tạo hồi tiếp âm ổn định dòng. Đây là cấu hình phổ biến nhất vì gần như độc lập với β. Fixed-bias chỉ có R<sub>B</sub>; collector-feedback lấy R<sub>B</sub> từ collector."
    },
    {
      n: 26,
      text: "The dc emitter current of a transistor is 8 mA. What is the value of r<sub>e</sub>?",
      options: ["320 Ω", "13.3 Ω", "3.25 Ω", "87.5 Ω"],
      answers: [2],
      explain: "Áp dụng công thức \\(r_e = \\dfrac{26\\,\\text{mV}}{I_E} = \\dfrac{26\\,\\text{mV}}{8\\,\\text{mA}} = 3.25\\ \\Omega\\). Giá trị này tăng tỷ lệ nghịch với dòng emitter: dòng càng lớn, r<sub>e</sub> càng nhỏ."
    },
    {
      n: 27,
      text: "This circuit is referred to as a(n) ______.",
      image: "q27.png",
      imageAlt: "Op-amp: Vin qua R1 vào đầu -, Rf phản hồi từ output về đầu -, đầu + nối đất",
      options: [
        "inverting amplifier",
        "noninverting amplifier",
        "unity follower",
        "integrator"
      ],
      answers: [0],
      explain: "Tín hiệu đưa vào đầu đảo (−) qua R<sub>1</sub>, phản hồi qua R<sub>f</sub> từ output về chính đầu đó, đầu + nối đất — đây là bố cục kinh điển của bộ khuếch đại đảo (inverting amplifier) với \\(A_v = -R_f/R_1\\). Unity follower thì output nối thẳng về đầu − mà không qua trở; integrator có tụ trong nhánh phản hồi."
    },
    {
      n: 28,
      text: "Refer to the given figure. The midrange voltage gain of this amplifier is ______.",
      image: "q28.png",
      imageAlt: "Op-amp voltage follower: output nối thẳng về đầu -, Vin vào đầu +",
      options: ["0.5", "1", "2", "−11"],
      answers: [1],
      explain: "Output nối trực tiếp (dây) về đầu −, tín hiệu vào đầu +: đây là bộ theo điện áp đơn vị (voltage follower / unity follower). Toàn bộ V<sub>o</sub> hồi tiếp về ngõ đảo nên \\(A_v = 1\\) — gain bằng đúng 1, trở vào rất cao và trở ra rất thấp, dùng làm tầng đệm."
    },
    {
      n: 29,
      text: "Refer to the given figure. This amplifier is known as ______.",
      image: "q29.png",
      imageAlt: "Op-amp: Rf 100k từ output về đầu -, Ri 5k từ đầu - xuống đất, Vin vào đầu +",
      options: [
        "an inverting amplifier.",
        "a non-inverting amplifier.",
        "a voltage-follower.",
        "a common-source amplifier."
      ],
      answers: [1],
      explain: "Tín hiệu vào cực không đảo (+), trong khi đầu đảo (−) nhận phân áp qua R<sub>i</sub> 5 kΩ xuống đất và phản hồi R<sub>f</sub> 100 kΩ từ output. Cấu trúc này là bộ khuếch đại không đảo (non-inverting amplifier), gain \\(A_v = 1 + R_f/R_i = 21\\), ra cùng pha với vào."
    },
    {
      n: 30,
      text: "This circuit is referred to as a(n) ______.",
      image: "q30.png",
      imageAlt: "Op-amp: Vi(t) qua tụ C vào đầu -, R phản hồi, đầu + nối đất",
      options: [
        "inverting amplifier",
        "noninverting amplifier",
        "differentiator",
        "integrator"
      ],
      answers: [2],
      explain: "Tụ C nằm ở ngõ vào và điện trở R ở nhánh phản hồi: trở kháng tụ tỉ lệ nghịch 1/jωC nên dòng nạp tụ tỉ lệ với đạo hàm điện áp vào. Output là \\(v_o = -RC\\,\\dfrac{dv_i}{dt}\\) — mạch vi phân (differentiator). Nếu tụ và trở đổi chỗ cho nhau (tụ phản hồi) thì thành mạch tích phân."
    },
    {
      n: 31,
      text: "What is the formula for the gain of an inverting amplifier?",
      options: [
        "A<sub>v</sub> = Rf / R1",
        "A<sub>v</sub> = 1 + Rf / R1",
        "A<sub>v</sub> = −Rf / R1",
        "A<sub>v</sub> = R1 / Rf"
      ],
      answers: [2],
      explain: "Bộ khuếch đại đảo dùng đầu − làm virtual ground: dòng qua R<sub>1</sub> bằng dòng qua R<sub>f</sub>, cho ra \\(A_v = -\\dfrac{R_f}{R_1}\\). Dấu âm thể hiện đảo pha 180°; công thức 1 + R<sub>f</sub>/R<sub>1</sub> là của bộ khuếch đại không đảo."
    },
    {
      n: 32,
      text: "In the common-emitter configuration, the output voltage is taken from:",
      options: ["Base", "Collector", "Emitter", "Ground"],
      answers: [1],
      explain: "Ở cấu hình chung emitter (common-emitter), emitter là cực chung giữa ngõ vào (base) và ngõ ra, nên tín hiệu ra được lấy ở collector qua điện trở R<sub>C</sub>. Đây là cấu hình duy nhất trong ba cấu hình cơ bản vừa khuếch đại điện áp vừa khuếch đại dòng, đồng thời đảo pha 180°."
    },
    {
      n: 33,
      text: "The common-base configuration provides:",
      options: [
        "High input impedance",
        "High current gain",
        "High voltage gain",
        "High power loss"
      ],
      answers: [2],
      explain: "Cấu hình chung base (common-base) có hệ số khuếch đại điện áp lớn (tương tự CE), nhưng gain dòng là α < 1 và trở vào rất thấp (vài chục Ω). Nó thường dùng ở tầng đầu của các bộ khuếch đại tần số cao (cascode) nhờ băng thông rộng và cách ly tốt."
    },
    {
      n: 34,
      text: "The leakage current of a transistor is called:",
      options: ["\\(I_{BE}\\)", "\\(I_C\\)", "\\(I_{CEO}\\)", "\\(I_{CO}\\)"],
      answers: [2],
      explain: "Dòng rò điển hình của transistor là \\(I_{CEO}\\) — dòng collector–emitter khi base hở mạch. Theo Floyd, dòng collector bao gồm phần khuếch đại \\(\\beta I_B\\) cộng với dòng rò \\(I_{CEO}\\), và \\(I_{CEO} = (\\beta + 1)I_{CBO}\\) nên nó tăng theo nhiệt độ rất nhanh. (Ký hiệu \\(I_{CO}\\) hay dùng cho dòng rò C–B của BJT trong một số tài liệu khác.)"
    },
    {
      n: 35,
      text: "The common-emitter amplifier typically has input and output impedance levels that are:",
      options: ["Low", "High", "Medium", "Zero"],
      answers: [2],
      explain: "Trong bảng so sánh ba cấu hình cơ bản, common-emitter có trở vào và trở ra ở mức trung bình (input vài kΩ, output vài chục kΩ): trở vào thấp hơn CC nhưng cao hơn CB; trở ra thấp hơn CB nhưng cao hơn CC. Nhờ vậy CE là cấu hình khuếch đại tổng quát được dùng nhiều nhất."
    },
    {
      n: 36,
      text: "Refer to this figure. Determine the minimum value of V<sub>IN</sub> from the following that will saturate this transistor.",
      image: "q36.png",
      imageAlt: "Transistor NPN: nguồn 10 V qua RC 4.7k, RB 1.2M từ Vin, beta DC = 200, emitter nối đất",
      options: ["13.2 V", "12.5 V", "0.7 V", "9.4 V"],
      answers: [0],
      explain: "Dòng collector bão hòa: \\(I_{C(sat)} = \\dfrac{10 - 0.2}{4.7k} \\approx 2.085\\ \\text{mA}\\). Cần dòng base tối thiểu \\(I_B = \\dfrac{2.085\\,\\text{mA}}{200} \\approx 10.4\\ \\mu A\\). Suy ra \\(V_{IN} = I_B R_B + V_{BE} = 10.4\\,\\mu A \\times 1.2M\\Omega + 0.7 \\approx 13.2\\ \\text{V}\\). Vậy 13,2 V là giá trị nhỏ nhất trong các phương án đủ để bão hòa transistor."
    },
    {
      n: 37,
      text: "What equation describes the drain current \\(I_D\\) in the saturation region of a JFET?",
      options: [
        "\\(I_D = I_{DSS} \\times \\left(1 - \\dfrac{V_P}{V_{GS}}\\right)\\)",
        "\\(I_D = I_{DSS} \\times \\left(1 - \\dfrac{V_{GS}}{V_P}\\right)^2\\)",
        "\\(I_D = k(V_{GS} - V_T)^2\\)",
        "\\(I_D = I_{DSS}\\)"
      ],
      answers: [1],
      explain: "Vùng bão hòa (active) của JFET tuân theo phương trình Shockley: \\(I_D = I_{DSS}\\left(1 - \\dfrac{V_{GS}}{V_P}\\right)^2\\) — quan hệ bình phương (parabolic). Khi V<sub>GS</sub> = 0 thì I<sub>D</sub> = I<sub>DSS</sub>; khi V<sub>GS</sub> = V<sub>P</sub> thì I<sub>D</sub> = 0. Công thức \\(k(V_{GS}-V_T)^2\\) là của E-MOSFET."
    },
    {
      n: 38,
      text: "Identify the n-channel D-MOSFET.",
      image: "q38.png",
      imageAlt: "Bốn ký hiệu MOSFET (a), (b), (c), (d) khác nhau về hướng mũi tên và tính liên tục của kênh",
      options: ["(a)", "(b)", "(c)", "(d)"],
      answers: [1],
      explain: "D-MOSFET có kênh được chế tạo sẵn nên đường kênh (đường thẳng đứng nối drain–source) là LIÊN TỤC — thuộc các ký hiệu (a), (b). Mũi tên trên gate chỉ hướng vào trong (về phía kênh) ứng với kênh n, hướng ra ngoài ứng với kênh p. Do đó ký hiệu (b) — kênh liên tục và mũi tên hướng vào — là n-channel D-MOSFET. (c) và (d) có kênh đứt quãng nên là E-MOSFET."
    },
    {
      n: 39,
      text: "What happens to the depletion region in an n-channel JFET as V_GS becomes more negative?",
      options: [
        "The depletion region decreases.",
        "The depletion region increases.",
        "The depletion region remains constant.",
        "The depletion region disappears."
      ],
      answers: [1],
      explain: "Khi V<sub>GS</sub> âm hơn, junction gate–kênh bị phân cực ngược mạnh hơn khiến vùng nghèo (depletion region) mở rộng xâm nhập vào kênh, thu hẹp đường dẫn dòng. Khi vùng nghèo chặn hoàn toàn kênh (V<sub>GS</sub> = V<sub>P</sub>) thì I<sub>D</sub> = 0 — trạng thái pinch-off/cutoff."
    },
    {
      n: 40,
      text: "What is the drain current \\(I_D\\) for a D-MOSFET when \\(V_{GS} = 0\\) V?",
      options: [
        "\\(I_D = 0\\) A",
        "\\(I_D = I_{DSS}\\)",
        "\\(I_D = k(V_T)^2\\)",
        "\\(I_D\\) is undefined"
      ],
      answers: [1],
      explain: "D-MOSFET có kênh vật liệu chế tạo sẵn: tại V<sub>GS</sub> = 0 V, kênh dẫn tối đa và \\(I_D = I_{DSS}\\) — điểm này là gốc của đường chuyển tiếp. Đây chính là điểm khác với E-MOSFET (khi V<sub>GS</sub> = 0 thì I<sub>D</sub> = 0 vì chưa có kênh)."
    },
    {
      n: 41,
      text: "How does a p-channel JFET differ from an n-channel JFET?",
      options: [
        "Voltage polarities and current directions are reversed.",
        "It has a higher input impedance.",
        "It operates only in enhancement mode.",
        "It has a physical channel at zero gate voltage."
      ],
      answers: [0],
      explain: "p-channel JFET về bản chất là bản gương của n-channel JFET: mọi điện áp phân cực đảo dấu (V<sub>GS</sub>, V<sub>DD</sub> dương thay vì âm) và dòng điện chảy ngược chiều; các đặc tính khuếch đại, trở vào thì giống hệt. Cả hai loại JFET đều có kênh vật lý sẵn ở V<sub>GS</sub> = 0 và đều hoạt động ở chế độ depletion."
    },
    {
      n: 42,
      text: "In an n-type semiconductor, the majority carriers are:",
      options: ["Holes", "Protons", "Electrons", "Neutrons"],
      answers: [2],
      explain: "N-type được pha tạp chất hóa trị V (P, As, Sb) thừa điện tử tự do, nên electron là hạt mang điện đa số (majority carriers), lỗ trống là thiểu số. Tên gọi n-type bắt nguồn từ điện tích âm (negative) của electron."
    },
    {
      n: 43,
      text: "In a P-Type material, what are the majority carriers?",
      options: ["Electrons", "Holes", "Ions", "Neutrons"],
      answers: [1],
      explain: "P-type pha tạp chất hóa trị III (B, Al, Ga, In) thiếu một electron, tạo nhiều lỗ trống. Do đó lỗ trống (hole) là hạt mang đa số, electron là thiểu số. P là viết tắt của positive — lỗ trống mang điện tích dương."
    },
    {
      n: 44,
      text: "What is the most used semiconductor material in electronics?",
      options: ["Germanium", "Gallium Arsenide", "Indium", "Silicon"],
      answers: [3],
      explain: "Silicon (Si) là vật liệu bán dẫn được dùng phổ biến nhất nhờ dải năng lượng 1,1 eV phù hợp, khả năng tạo lớp oxít SiO<sub>2</sub> chất lượng cao cho công nghệ MOS, chi phí thấp và dải nhiệt hoạt động rộng hơn germanium. Ge từng phổ biến ở thế hệ đầu; GaAs dùng cho tần số cao/tự quang."
    },
    {
      n: 45,
      text: "Calculate the load current (I<sub>L</sub>) and the Zener diode current (I<sub>Z</sub>), respectively.",
      image: "q45.png",
      imageAlt: "Mạch ổn áp Zener: Vi 16 V, R 1k, Zener VZ = 10 V (PZM = 30 mW), tải RL 5k",
      options: [
        "I<sub>L</sub> = 2 mA; I<sub>Z</sub> = 0 mA",
        "I<sub>L</sub> = 4 mA; I<sub>Z</sub> = 2 mA",
        "I<sub>L</sub> = 2 mA; I<sub>Z</sub> = 2 mA",
        "I<sub>L</sub> = 2 mA; I<sub>Z</sub> = 4 mA"
      ],
      answers: [3],
      explain: "Zener giữ V<sub>L</sub> = V<sub>Z</sub> = 10 V nên dòng tải \\(I_L = \\dfrac{10}{5k} = 2\\ \\text{mA}\\). Dòng qua R: \\(I_S = \\dfrac{16 - 10}{1k} = 6\\ \\text{mA}\\). Theo định luật Kirchhoff, \\(I_Z = I_S - I_L = 6 - 2 = 4\\ \\text{mA}\\)."
    },
    {
      n: 46,
      text: "Which methods are commonly used to analyze a voltage-divider bias configuration?",
      options: [
        "Only the approximate method",
        "Only the exact method",
        "Both the approximate method and the exact method using Thévenin's theorem.",
        "Load line analysis only"
      ],
      answers: [2],
      explain: "Phân cực chia áp có thể phân tích theo hai cách: phương pháp xấp xỉ (coi dòng qua divider lớn gấp nhiều lần I<sub>B</sub> nên có thể bỏ qua tải của base) và phương pháp chính xác dùng định lý Thévenin (thay divider bằng V<sub>Th</sub>, R<sub>Th</sub>). Hai cách này cho kết quả gần nhau khi điều kiện xấp xỉ thỏa mãn."
    },
    {
      n: 47,
      text: "Calculate \\(\\beta_{dc}\\) at \\(V_{CE} = 15\\) V and \\(I_B = 30\\ \\mu\\text{A}\\).",
      image: "q47.png",
      imageAlt: "Họ đường đặc tuyến collector của BJT với IB từ 10 đến 50 microampere",
      options: ["30", "50", "110", "200"],
      answers: [2],
      explain: "Từ đồ thị đặc tuyến output, tại đường I<sub>B</sub> = 30 μA và V<sub>CE</sub> = 15 V đọc được I<sub>C</sub> ≈ 3,3 mA. Suy ra \\(\\beta_{dc} = \\dfrac{I_C}{I_B} = \\dfrac{3.3\\,\\text{mA}}{30\\,\\mu A} = 110\\)."
    },
    {
      n: 48,
      text: "What is the benefit of using a collector-feedback bias?",
      options: [
        "Improved thermal stability",
        "High voltage gain",
        "High power efficiency",
        "Reduced R_E"
      ],
      answers: [0],
      explain: "Collector-feedback lấy R<sub>B</sub> nối trực tiếp từ collector về base tạo hồi tiếp âm: khi nhiệt độ tăng làm I<sub>C</sub> tăng, V<sub>CE</sub> giảm kéo V<sub>B</sub> giảm, qua đó hạ I<sub>C</sub> trở lại. Vòng hồi tiếp này giúp ổn định điểm Q trước biến động nhiệt độ và β tốt hơn fixed-bias nhiều."
    },
    {
      n: 49,
      text: "How is the load line for a transistor network determined?",
      options: [
        "By applying Ohm's Law to the input loop",
        "By finding the intersection of I_B and V_CE",
        "By applying Kirchhoff's Voltage Law to the output loop",
        "By calculating the power dissipation"
      ],
      answers: [2],
      explain: "Đường tải một chiều được suy ra từ phương trình KVL của vòng ngõ ra: \\(V_{CE} = V_{CC} - I_C(R_C + R_E)\\). Nó là đường thẳng nối hai điểm cực hạn: I<sub>C(sat)</sub> = V<sub>CC</sub>/(R<sub>C</sub>+R<sub>E</sub>) (trên trục dòng) và V<sub>CE(off)</sub> = V<sub>CC</sub> (trên trục điện áp). Điểm Q là giao của đường tải với đường đặc ứng với I<sub>B</sub> phân cực."
    },
    {
      n: 50,
      text: "For linear amplification with minimum distortion, where should the dc operating point ideally be located?",
      options: [
        "Near the saturation region",
        "Near the cutoff region",
        "Away from the saturation and cutoff regions and maximum ratings",
        "Exactly at the saturation level"
      ],
      answers: [2],
      explain: "Để khuếch đại tuyến tính không méo, điểm Q cần đặt giữa vùng khuếch đại (active) — càng xa các vùng bão hòa, cắt cụt và các giới hạn công suất/tiền định mức càng tốt, để cả nửa dương lẫn nửa âm của tín hiệu đều nằm trong vùng tuyến tính của transistor. Đặt Q gần bão hòa hoặc cắt cụt sẽ làm méo một nửa chu kỳ tín hiệu."
    }
  ]
});
