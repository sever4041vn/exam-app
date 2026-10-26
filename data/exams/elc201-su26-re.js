// ELC201 - Summer 2026 - Retake Exam
// Nguồn: ELC201 - SU26 - RE.pdf (50 câu hỏi trắc nghiệm)
window.EXAMAPP_EXAMS = window.EXAMAPP_EXAMS || [];
window.EXAMAPP_EXAMS.push({
  id: "elc201-su26-re",
  subjectId: "ELC201",
  title: "ELC201 - Summer 2026 - Retake Exam",
  originalFile: "ELC201 - SU26 - RE.pdf",
  semester: "Summer 2026",
  semesterKey: "su26",
  type: "Retake Exam",
  typeKey: "retake",
  durationMinutes: 60,
  imagePath: "images/elc201/su26-re/",
  questions: [
    {
      n: 1,
      text: "Determine the peak value of the current through the load resistor.",
      image: "q01.png",
      imageAlt: "Mạch chỉnh lưu hai diode với vi = 10 V, ba điện trở 2k, vo đo trên điện trở giữa",
      options: ["2.325 mA", "5 mA", "1.25 mA", "0 mA"],
      answers: [0],
      explain: "Nửa chu kỳ dương: diode bên phải dẫn, điện áp đỉnh tại node trên của tải là 10 − 0,7 = 9,3 V. Điện trở tải 2 kΩ (nơi đo v<sub>o</sub>) phân áp với điện trở 2 kΩ bên trái nên điện áp đỉnh trên tải \\(V_{o(peak)} = 9.3 \\times \\dfrac{2k}{2k+2k} = 4.65\\ \\text{V}\\). Dòng đỉnh qua tải: \\(I = \\dfrac{4.65}{2k} = 2.325\\ \\text{mA}\\). Nửa chu kỳ âm, diode bên trái dẫn theo chiều ngược, dòng qua tải vẫn giữ nguyên chiều — mạch hoạt động như chỉnh lưu toàn chu kỳ kiểu cầu."
    },
    {
      n: 2,
      text: "Load-line analysis is used to find the current and voltage levels that satisfy the characteristics of which two components simultaneously?",
      options: [
        "Resistor and Capacitor",
        "Diode and Resistor",
        "Inductor and Diode",
        "Capacitor and Inductor"
      ],
      answers: [1],
      explain: "Phân tích đường tải (load-line) tìm giao điểm giữa đường đặc tính phi tuyến của diode và đường tải thẳng của mạch trở (theo KVL: I<sub>D</sub> = (E − V<sub>D</sub>)/R). Giao điểm ấy chính là điểm Q, thỏa mãn đồng thời đặc tính của cả diode lẫn điện trở."
    },
    {
      n: 3,
      text: "The Q-point in a diode circuit is:",
      options: [
        "The power rating point",
        "The intersection of thermal and noise curves",
        "The operating point for a given DC input",
        "The point of maximum resistance"
      ],
      answers: [2],
      explain: "Q-point (quiescent point / điểm làm việc tĩnh) là giao điểm giữa đặc tuyến V–I của diode và đường tải DC, xác định dòng và điện áp thực tế của mạch khi chỉ có nguồn một chiều. Nó không liên quan đến định mức công suất hay đường thân nhiệt/nhiễu."
    },
    {
      n: 4,
      text: "What is the purpose of a PLL in frequency demodulation?",
      options: [
        "Amplify audio.",
        "Remove noise.",
        "Track and convert frequency to voltage.",
        "Transmit digital data."
      ]
      ,
      answers: [2],
      explain: "Vòng khóa pha (PLL) gồm bộ so pha, VCO và bộ lọc loop; nó tự bám theo tần số/thay đổi pha của tín hiệu vào. Trong giải điều chế FM, điện áp điều khiển VCO (đầu ra bộ lọc) tỉ lệ với độ lệch tần số của tín hiệu vào — tức PLL chuyển đổi biến thiên tần số thành điện áp, tái tạo lại tín hiệu thông tin."
    },
    {
      n: 5,
      text: "In a comparator, if the noninverting (+) input voltage is greater than the inverting (−) input, what is the output state?",
      options: [
        "Low voltage level.",
        "High voltage level.",
        "Oscillating output.",
        "Zero voltage."
      ],
      answers: [1],
      explain: "Comparator khuếch đại chênh lệch \\(V_+ - V_-\\) với gain mở vòng rất lớn. Khi V<sub>+</sub> > V<sub>−</sub>, hiệu dương nên output bão hòa ở mức CAO (+V<sub>sat</sub>); ngược lại output xuống mức thấp. Output chỉ dao động nếu đầu vào đảo liên quanh ngưỡng kèm nhiễu."
    },
    {
      n: 6,
      text: "This circuit is an example of a ______.",
      image: "q06.png",
      imageAlt: "Op-amp không phản hồi: Vi vào đầu -, đầu + lấy điện áp tham chiếu từ R1-R2 chia áp nguồn +V/-V",
      options: ["comparator", "555 timer", "D to A converter", "ladder network"],
      answers: [0],
      explain: "Op-amp làm việc mở vòng (không có nhánh phản hồi): đầu đảo nhận tín hiệu V<sub>i</sub>, đầu không đảo nhận điện áp tham chiếu lấy từ cầu chia R<sub>1</sub>–R<sub>2</sub>. Output bật giữa hai mức bão hòa tùy V<sub>i</sub> so với ngưỡng tham chiếu — đây chính là comparator (mạch so sánh) với ngưỡng đặt bởi divider."
    },
    {
      n: 7,
      text: "In which modes can the 555 timer IC operate?",
      options: [
        "Comparator mode only.",
        "DAC mode only.",
        "Monostable and astable modes.",
        "PLL mode only."
      ],
      answers: [2],
      explain: "IC 555 có hai chế độ làm việc cơ bản: monostable (một ổn định — tạo xung đơn có độ rộng xác định) và astable (không ổn định — dao động đa hài tự do tạo sóng vuông liên tục với tần số/độ rỗng chỉnh bằng R, C). Bên trong 555 gồm 2 comparator, flip-flop và tầng discharge, nhưng các chế độ khi gọi tên luôn là monostable/astable (và bistable khi ghép thêm)."
    },
    {
      n: 8,
      text: "In AC analysis, capacitors are considered as:",
      options: [
        "Open circuits",
        "Short circuits",
        "Resistors",
        "Voltage sources"
      ],
      answers: [1],
      explain: "Trong phân tích tín hiệu nhỏ (AC), các tụ nối dòng/bypass có trở kháng 1/jωC rất nhỏ ở dải tần làm việc nên được coi như ngắn mạch. Ngược lại, khi phân tích DC thì tụ được coi là hở mạch. Quy ước này giúp vẽ mạch tương đương AC nhanh gọn."
    },
    {
      n: 9,
      text: "What determines whether small-signal or large-signal techniques should be applied in AC analysis?",
      options: [
        "The operating frequency",
        "The magnitude of the input signal",
        "The type of transistor used",
        "The DC supply voltag"
      ],
      answers: [1],
      explain: "Tiêu chuẩn quyết định là BIÊN ĐỘ tín hiệu vào: nếu biên độ nhỏ so với vùng tuyến tính quanh điểm Q (vài chục mV với BJT) thì dùng mô hình tín hiệu nhỏ (r<sub>e</sub>, h-parameter, g<sub>m</sub>). Nếu biên độ lớn làm transistor đi qua các vùng phi tuyến/bão hòa/cắt cụt thì phải phân tích large-signal bằng đồ thị đường tải."
    },
    {
      n: 10,
      text: "Which parameter best reflects current gain in a BJT?",
      options: ["r<sub>e</sub>", "r<sub>o</sub>", "β", "Z<sub>o</sub>"],
      answers: [2],
      explain: "β (beta, h<sub>fe</sub>) là hệ số khuếch đại dòng của BJT: \\(\\beta = I_C / I_B\\). Trong khi r<sub>e</sub> là điện trở vào của emitter, r<sub>o</sub> là trở ra của nguồn dòng collector, Z<sub>o</sub> là trở kháng ra của mạch — chúng là các trở kháng chứ không phải gain dòng."
    },
    {
      n: 11,
      text: "What is the typical value of the current gain of a common-base configuration?",
      options: [
        "Less than 1",
        "Between 1 and 50",
        "Between 100 and 20",
        "Undefined"
      ],
      answers: [0],
      explain: "Ở cấu hình chung base, gain dòng là hệ số α = I<sub>C</sub>/I<sub>E</sub>, luôn nhỏ hơn 1 (thường 0,9–0,99) vì phần dòng emitter bị rót ra base. CB khuếch đại điện áp nhưng KHÔNG khuếch đại dòng."
    },
    {
      n: 12,
      text: "What is the primary function of the differential amplifier stage in an op-amp?",
      options: [
        "Amplify signals common to both inputs.",
        "Reject signals common to both inputs.",
        "Provide high output current.",
        "Filter high-frequency noise."
      ],
      answers: [1],
      explain: "Tầng khuếch đại vi phân là tầng đầu tiên (tầng vào) của op-amp, được thiết kế để khuếch đại CHÊNH LỆCH giữa hai ngõ vào và KHỦ bỏ thành phần chung (common-mode) xuất hiện đồng thời trên cả hai ngõ — đặc trưng bởi CMRR rất cao. Nhờ đó nhiễu cùng chế độ bị loại bỏ ngay từ tầng đầu."
    },
    {
      n: 13,
      text: "Calculate the overall voltage gain of the circuit if \\(R_1 = 100\\ \\Omega\\) and \\(R_f = 1\\ \\text{k}\\Omega\\).",
      image: "q13.png",
      imageAlt: "Op-amp không đảo: Vi vào đầu +, R1 từ đầu - xuống đất, Rf phản hồi từ output về đầu -",
      options: ["−1", "−10", "11", "9"],
      answers: [2],
      explain: "Mạch là bộ khuếch đại không đảo (Vin vào cực +, R<sub>1</sub> xuống đất, R<sub>f</sub> phản hồi). Hệ số khuếch đại \\(A_v = 1 + \\dfrac{R_f}{R_1} = 1 + \\dfrac{1000}{100} = 11\\), ngõ ra cùng pha với ngõ vào."
    },
    {
      n: 14,
      text: "What is the ideal output voltage of a differential amplifier for a common-mode input signal?",
      options: [
        "Common-mode input voltage times differential gain.",
        "Common-mode input voltage times common-mode gain.",
        "Zero.",
        "Difference between input voltages."
      ],
      answers: [2],
      explain: "Với input cùng chế độ (common-mode: V<sub>1</sub> = V<sub>2</sub>), bộ khuếch đại vi phân lý tưởng cho output bằng 0 vì nó chỉ khuếch đại hiệu \\(V_1 - V_2\\) = 0. Trong thực tế output còn lại rất nhỏ nhờ CMRR hữu hạn, nhưng lý tưởng thì CMRR = ∞ → V<sub>o</sub> = 0."
    },
    {
      n: 15,
      text: "Refer to the given figure. The voltage gain of this amplifier is ______.",
      image: "q15.png",
      imageAlt: "Op-amp không đảo: Vin vào đầu +, Ri 5k từ đầu - xuống đất, Rf 100k phản hồi",
      options: ["100", "5", "20", "21"],
      answers: [3],
      explain: "Bộ khuếch đại không đảo với \\(R_f = 100\\ \\text{k}\\Omega\\), \\(R_i = 5\\ \\text{k}\\Omega\\): \\(A_v = 1 + \\dfrac{R_f}{R_i} = 1 + \\dfrac{100}{5} = 21\\). Lưu ý cộng 1 ở đầu — đây là chỗ hay bị lỗi khi chỉ lấy tỉ số 100/5 = 20."
    },
    {
      n: 16,
      text: "Refer to the given figure. Find the midrange gain of this amplifier.",
      image: "q16.png",
      imageAlt: "Op-amp đảo: Vin qua 3k vào đầu -, Rf 80k phản hồi, đầu + nối đất",
      options: ["26.7", "−26.7", "83", "77"],
      answers: [1],
      explain: "Bộ khuếch đại đảo với \\(A_v = -\\dfrac{R_f}{R_1} = -\\dfrac{80\\,\\text{k}}{3\\,\\text{k}} \\approx -26.7\\). Dấu âm cho biết ngõ ra đảo pha 180° so với ngõ vào. Ở dải tần giữa (midrange), gain này là hằng số không phụ thuộc tần số."
    },
    {
      n: 17,
      text: "In common-base configuration, current gain (α) is typically:",
      options: [
        "Greater than 1",
        "Equal to 1",
        "Less than 1",
        "Negative"
      ],
      answers: [2],
      explain: "Hệ số dòng của cấu hình chung base là \\(\\alpha = \\dfrac{I_C}{I_E}\\). Vì \\(I_E = I_C + I_B\\) nên α luôn nhỏ hơn 1 (khoảng 0,95–0,995). α liên hệ với β qua \\(\\alpha = \\dfrac{\\beta}{\\beta + 1}\\)."
    },
    {
      n: 18,
      text: "In which region is the BJT used for amplification?",
      options: ["Cutoff", "Saturation", "Breakdown", "Active"],
      answers: [3],
      explain: "Vùng hoạt động tích cực (active/forward-active) là vùng transistor khuếch đại tuyến tính: junction B–E phân cực thuận (~0,7 V), junction B–C phân cực ngược, khi đó \\(I_C = \\beta I_B\\). Cutoff và saturation dùng cho công tắc số; breakdown là vùng phá hỏng cần tránh."
    },
    {
      n: 19,
      text: "Which region of operation is best suited for digital switching applications?",
      options: [
        "Active",
        "Cutoff and saturation",
        "Breakdown",
        "Midpoint bias"
      ],
      answers: [1],
      explain: "Transistor số làm việc như công tắc: trạng thái OFF ứng với vùng cutoff (I<sub>C</sub> ≈ 0, V<sub>CE</sub> ≈ V<sub>CC</sub>) và trạng thái ON ứng với vùng saturation (V<sub>CE</sub> ≈ 0,2 V). Hai trạng thái này phân biệt rõ ràng, tiêu thụ công suất thấp — lý tưởng cho logic/switching, khác hẳn vùng active dùng cho khuếch đại."
    },
    {
      n: 20,
      text: "Refer to this figure. If V<sub>CE</sub> = 0.2 V, I<sub>C(sat)</sub> is:",
      image: "q20.png",
      imageAlt: "Transistor NPN: nguồn 10 V qua RC 4.7k, RB 1.2M từ Vin, beta DC = 200, emitter nối đất",
      options: ["0.05 mA", "2.09 mA", "1.07 mA", "7.4 mA"],
      answers: [1],
      explain: "Khi bão hòa, V<sub>CE</sub> ≈ 0,2 V nên \\(I_{C(sat)} = \\dfrac{V_{CC} - V_{CE(sat)}}{R_C} = \\dfrac{10 - 0.2}{4.7\\,\\text{k}\\Omega} \\approx 2.09\\ \\text{mA}\\). Giá trị này chỉ phụ thuộc nguồn và R<sub>C</sub>, không phụ thuộc β."
    },
    {
      n: 21,
      text: "In the common-emitter configuration, the current gain (\\(\\beta\\)) is defined as:",
      options: [
        "\\(\\beta = \\dfrac{I_E}{I_B}\\)",
        "\\(\\beta = \\dfrac{I_C}{I_B}\\)",
        "\\(\\beta = \\dfrac{I_E}{I_C}\\)",
        "\\(\\beta = \\dfrac{I_B}{I_C}\\)"
      ],
      answers: [1],
      explain: "Ở cấu hình chung emitter, gain dòng được định nghĩa \\(\\beta = \\dfrac{I_C}{I_B}\\) (hệ số khuếch đại dòng từ base sang collector). Tỉ số \\(I_E/I_B = \\beta + 1\\), còn \\(I_C/I_E = \\alpha\\)."
    },
    {
      n: 22,
      text: "What is the primary difference between a BJT and a FET?",
      options: [
        "BJT is voltage-controlled, FET is current-controlled.",
        "BJT has high input impedance, FET has low input impedance.",
        "BJT is current-controlled, FET is voltage-controlled.",
        "BJT is a three-terminal device, FET is a two-terminal device."
      ],
      answers: [2],
      explain: "BJT là thiết bị điều khiển bằng DÒNG: dòng collector phụ thuộc dòng base (I<sub>C</sub> = βI<sub>B</sub>), trở vào thấp. FET là thiết bị điều khiển bằng ĐIỆN ÁP: dòng drain phụ thuộc V<sub>GS</sub> qua hiệu ứng điện trường, dòng gate ≈ 0 nên trở vào rất cao. Cả hai đều là thiết bị 3 cực."
    },
    {
      n: 23,
      text: "What are the three terminals of a JFET?",
      options: [
        "Base, Collector, Emitter.",
        "Gate, Drain, Source.",
        "Anode, Cathode, Gate.",
        "Emitter, Base, Gate."
      ],
      answers: [1],
      explain: "JFET có ba cực: Gate (cửa gắt — điều khiển), Drain (rán — nhận dòng) và Source (nguồn — phát dòng). Base/Collector/Emitter là của BJT; Anode/Cathode là của diode. Tương ứng về vai trò: G↔B, D↔C, S↔E."
    },
    {
      n: 24,
      text: "How can a JFET be used as a voltage-controlled resistor?",
      options: [
        "By operating in the saturation region.",
        "By operating in the cutoff region.",
        "By utilizing its sensitivity of drain-to-source impedance to V_GS in the ohmic region.",
        "By applying a constant current to the gate."
      ],
      answers: [2],
      explain: "Ở vùng ohmic (gần gốc toạ độ, trước pinch-off), đường đặc V–I gần như thẳng và độ dốc của nó thay đổi theo V<sub>GS</sub>: tức là trở kháng drain–source R<sub>DS</sub> điều khiển được bằng điện áp gate. Khai thác tính này, JFET trở thành điện trở điều khiển bằng điện áp (VCR) trong mixer, atténuate tự động, filter điều khiển áp."
    },
    {
      n: 25,
      text: "What is the relationship between I_D and V_GS in a JFET's saturation region?",
      options: ["Linear", "Exponential", "Parabolic", "Logarithmic"],
      answers: [2],
      explain: "Theo phương trình Shockley \\(I_D = I_{DSS}(1 - V_{GS}/V_P)^2\\), I<sub>D</sub> tỉ lệ với BÌNH PHƯNG của (1 − V<sub>GS</sub>/V<sub>P</sub>) — quan hệ parabolic (square-law). Đường chuyển tiếp V<sub>GS</sub>–I<sub>D</sub> của JFET là đường parabol, khác với diode/BJT có đặc tính exponential."
    },
    {
      n: 26,
      text: "What is the region to the left of the pinch-off point on a JFET's output characteristics called?",
      options: [
        "Saturation region.",
        "Cutoff region.",
        "Breakdown region.",
        "Ohmic region."
      ],
      answers: [3],
      explain: "Trên đặc tuyến đầu ra của FET, phần bên trái điểm pinch-off (V<sub>DS</sub> nhỏ) là vùng ohmic (vùng trở kháng/linear region) — I<sub>D</sub> tỉ lệ gần như tuyến tính với V<sub>DS</sub> và FET hành xử như một điện trở điều khiển bằng V<sub>GS</sub>. Phía phải pinch-off là vùng bão hòa (active)."
    },
    {
      n: 27,
      text: "Doping with trivalent impurities creates which type of semiconductor material?",
      options: ["N-Type", "Extrinsic", "Intrinsic", "P-Type"],
      answers: [3],
      explain: "Tạp chất hóa trị III (Boron, Aluminum, Gallium, Indium) chỉ có 3 electron hóa trị: khi thay thế nguyên tử Si sẽ thiếu 1 liên kết, tạo ra lỗ trống. Vật liệu pha tạp hóa trị III gọi là P-type (đa số là lỗ trống). Tạp hóa trị V (P, As, Sb) mới tạo N-type. Lưu ý cả N lẫn P đều là extrinsic — nhưng đáp án cụ thể cho tạp hóa trị III là P-Type."
    },
    {
      n: 28,
      text: "What is the unit for measuring the energy band gap?",
      options: ["Volt", "Ampere", "Ohm", "Electron Volt"],
      answers: [3],
      explain: "Khe năng lượng (energy band gap) E<sub>G</sub> là năng lượng nên đo bằng electron volt (eV): 1 eV = 1,6×10<sup>−19</sup> J. Ví dụ E<sub>G</sub> của Si ≈ 1,1 eV, Ge ≈ 0,67 eV, GaAs ≈ 1,43 eV. Volt/Ampere/Ohm là đơn vị của điện áp, dòng và điện trở."
    },
    {
      n: 29,
      text: "Determine V<sub>o</sub> if E1 = E2 = 10 V.",
      image: "q29.png",
      imageAlt: "Mạch logic diode: E1, E2 qua diode Si đến node Vo, R 1k kéo lên nguồn E = 10 V",
      options: ["9.3 V", "10 V", "−10 V", "0 V"],
      answers: [1],
      explain: "Cực âm (cathode) của diode nối với ngõ vào, anode nối node V<sub>o</sub> được R 1 kΩ kéo lên nguồn E = 10 V. Khi E<sub>1</sub> = E<sub>2</sub> = 10 V, hai diode có điện áp hai đầu bằng 0 (không phân cực thuận) nên KHÔNG dẫn, không có dòng qua R → không sụt áp trên R → \\(V_o = E = 10\\ \\text{V}\\). (Nếu một ngõ vào là 0 V thì diode đó dẫn và kéo V<sub>o</sub> xuống ≈ 0,7 V.)"
    },
    {
      n: 30,
      text: "Determine the DC resistance levels for the diode in the figure when the current through the diode is 20 mA.",
      image: "q30.png",
      imageAlt: "Đường đặc tuyến V-I của diode silicon: tại ID = 20 mA ứng với VD = 0.8 V",
      options: ["0 Ω", "0.8 Ω", "40 Ω", "250 Ω"],
      answers: [2],
      explain: "Từ đường đặc tuyến, tại I<sub>D</sub> = 20 mA điện áp trên diode là V<sub>D</sub> = 0,8 V. Điện trở một chiều tại điểm làm việc: \\(R_D = \\dfrac{V_D}{I_D} = \\dfrac{0.8\\,\\text{V}}{20\\,\\text{mA}} = 40\\ \\Omega\\)."
    },
    {
      n: 31,
      text: "In a fixed-bias configuration, if \\(\\beta\\) increases, what generally happens to the collector current \\(I_C\\)?",
      options: [
        "\\(I_C\\) decreases",
        "\\(I_C\\) increases",
        "\\(I_C\\) remains the same",
        "\\(I_C = 0\\)"
      ],
      answers: [1],
      explain: "Phân cực cố định (fixed-bias) có \\(I_B = \\dfrac{V_{CC} - V_{BE}}{R_B}\\) gần như không đổi, còn \\(I_C = \\beta I_B\\). Do đó khi β tăng (ví dụ do nhiệt độ), I<sub>C</sub> tăng theo tuyến tính — đây chính là nhược điểm ổn định của fixed-bias mà voltage-divider bias khắc phục được."
    },
    {
      n: 32,
      text: "What is the formula for the collector current \\(I_C\\) in a fixed-bias configuration?",
      options: [
        "\\(I_C = \\dfrac{V_{CC}}{R_C}\\)",
        "\\(I_C = \\beta I_B\\)",
        "\\(I_C = V_{BE} \\cdot R_B\\)",
        "\\(I_C = I_E + I_B\\)"
      ],
      answers: [1],
      explain: "Với fixed-bias, dòng base được xác định từ vòng vào \\(I_B = (V_{CC} - V_{BE})/R_B\\), sau đó \\(I_C = \\beta I_B\\). Tỉ số V<sub>CC</sub>/R<sub>C</sub> là dòng bão hòa I<sub>C(sat)</sub>, không phải dòng làm việc. Quan hệ đúng luôn là \\(I_E = I_C + I_B\\)."
    },
    {
      n: 33,
      text: "What is the saturation collector current in a fixed-bias configuration?",
      options: [
        "\\(\\dfrac{V_{BE}}{R_C}\\)",
        "\\(\\dfrac{V_{CC}}{R_C}\\)",
        "\\(\\dfrac{V_{CE}}{R_C + R_E}\\)",
        "\\(I_C(\\max)\\)"
      ],
      answers: [1],
      explain: "Khi transistor bão hòa, V<sub>CE</sub> ≈ 0 nên toàn bộ V<sub>CC</sub> rơi lên R<sub>C</sub>: \\(I_{C(sat)} = \\dfrac{V_{CC}}{R_C}\\). Đây là giới hạn trên của dòng collector trên đường tải; dòng thực tế không thể vượt qua giá trị này dù β lớn đến đâu."
    },
    {
      n: 34,
      text: "What are the operating regions of a transistor when used as a switch (inverter)?",
      options: [
        "Cutoff and linear",
        "Cutoff and saturation",
        "Linear and breakdown",
        "Reverse and forward"
      ],
      answers: [1],
      explain: "Transistor dùng làm khóa (inverter số) chỉ ở hai trạng thái: cutoff — ngắt (ra mức CAO) và saturation — đóng bão hòa (ra mức THẤP ≈ V<sub>CE(sat)</sub>). Vùng linear chỉ đi qua thoáng chốc khi chuyển đổi, không phải trạng thái làm việc của khóa."
    },
    {
      n: 35,
      text: "Refer to the given figure. The most probable cause of trouble, if any, from these voltage measurements would be ______.",
      image: "q35.png",
      imageAlt: "Mạch chia áp: nguồn 12 V, R1 10k, R2 1k, RC 1k, RE 100, beta 180, ba đồng hồ đo 1.1 V, 0.4 V và 12 V",
      options: [
        "the base-emitter junction is open.",
        "R<sub>E</sub> is open.",
        "a short from collector to emitter.",
        "no problems."
      ],
      answers: [1],
      explain: "V<sub>B</sub> = 1,1 V đúng bằng giá trị chia áp không tải (12 × 1k/11k ≈ 1,09 V) → base không hút dòng. V<sub>E</sub> = 0,4 V = V<sub>B</sub> − 0,7 V: emitter được kéo lên qua junction B–E nhưng KHÔNG có dòng chảy. V<sub>C</sub> = 12 V = V<sub>CC</sub> → không có dòng qua R<sub>C</sub>. Cả ba tín hiệu khớp hoàn toàn với trường hợp R<sub>E</sub> bị hở (mạch hở tại emitter nên mọi dòng bằng 0)."
    },
    {
      n: 36,
      text: "Refer to the given figure. I<sub>D</sub> = 6 mA. Calculate the value of V<sub>DS</sub>.",
      image: "q36.png",
      imageAlt: "JFET kênh p: nguồn -15 V qua 1k vào drain, gate qua 100M xuống đất, source nối đất",
      options: ["−3 V", "−6 V", "6 V", "−9 V"],
      answers: [3],
      explain: "Gate nối đất qua 100 MΩ nên V<sub>GS</sub> ≈ 0 (dòng gate bằng 0, không sụt áp trên R<sub>G</sub>). Với JFET kênh p làm việc ở V<sub>GS</sub> = 0, điện áp drain: \\(V_D = -15 + I_D R_D = -15 + 6\\,\\text{mA} \\times 1\\,\\text{k}\\Omega = -9\\ \\text{V}\\). Source ở 0 V nên \\(V_{DS} = V_D - V_S = -9\\ \\text{V}\\) — âm đúng như tính chất của kênh p."
    },
    {
      n: 37,
      text: "In a JFET fixed-bias configuration, what is the relationship between \\(V_{GS}\\) and \\(V_{GG}\\)?",
      options: [
        "\\(V_{GS} = V_{GG}\\)",
        "\\(V_{GS} = V_{DD}\\)",
        "\\(V_{GS} = 0\\)",
        "\\(V_{GS} = -V_{GG}\\)"
      ],
      answers: [3],
      explain: "Trong cấu hình fixed-bias của JFET (Floyd), nguồn V<sub>GG</sub> cấp cực âm vào gate qua R<sub>G</sub> trong khi source nối đất. Vì dòng gate = 0 nên \\(V_{GS} = -V_{GG}\\) — dấu âm bảo đảm junction gate luôn phân cực ngược cho kênh n."
    },
    {
      n: 38,
      text: "Refer to figure shown below. Determine the value of V<sub>S</sub>.",
      image: "q38.png",
      imageAlt: "JFET kênh n tự phân cực: nguồn +20 V qua RD 2k, ID = 6 mA, RS 1k, RG 100M",
      options: ["2 V", "6 V", "8 V", "20 V"],
      answers: [1],
      explain: "Dòng drain chảy qua điện trở source: \\(V_S = I_D \\times R_S = 6\\,\\text{mA} \\times 1\\,\\text{k}\\Omega = 6\\ \\text{V}\\). Dòng gate bằng 0 nên không có sụt áp trên R<sub>G</sub>, và chính V<sub>S</sub> này tạo ra \\(V_{GS} = -V_S\\) cho chế độ tự phân cực."
    },
    {
      n: 39,
      text: "Refer to figure show below. Calculate the value of V<sub>D</sub>?",
      image: "q39.png",
      imageAlt: "JFET kênh n tự phân cực: nguồn +20 V qua RD 2k, ID = 6 mA, RS 1k, RG 100M",
      options: ["2 V", "4 V", "6 V", "8 V"],
      answers: [3],
      explain: "Điện áp drain được tính theo KVL từ nguồn: \\(V_D = V_{DD} - I_D R_D = 20 - 6\\,\\text{mA} \\times 2\\,\\text{k}\\Omega = 20 - 12 = 8\\ \\text{V}\\). Từ đó cũng suy ra \\(V_{DS} = V_D - V_S = 8 - 6 = 2\\ \\text{V}\\)."
    },
    {
      n: 40,
      text: "What is a key advantage of active filters over passive filters?",
      options: [
        "Can provide voltage gain.",
        "Typically larger and heavier.",
        "Limited to low frequencies.",
        "Require bulky inductors."
      ],
      answers: [0],
      explain: "Bộ lọc tích cực dùng op-amp nên có thể cho khuếch đại điện áp (> 1) bên cạnh chức năng lọc, đồng thời không cần cuộn cảm to nặng, trở kháng vào/ra dễ cách ly các tầng. Các đáp án B, C, D là nhược điểm của bộ lọc THỤ ĐỘNG (passive), không phải của bộ lọc tích cực."
    },
    {
      n: 41,
      text: "Calculate I<sub>L</sub> for this circuit.",
      image: "q41.png",
      imageAlt: "Bộ chuyển đổi điện áp sang dòng: 10 V qua 2k vào đầu -, tải 4k trong nhánh phản hồi, đầu + qua 2k xuống đất",
      options: ["2.5 mA", "5 mA", "−2.5 mA", "−5 mA"],
      answers: [1],
      explain: "Đầu − là đất ảo nên toàn bộ dòng qua điện trở vào \\(I_{in} = \\dfrac{10\\,\\text{V}}{2\\,\\text{k}\\Omega} = 5\\ \\text{mA}\\) phải chảy tiếp qua tải 4 kΩ nằm trong nhánh phản hồi. Dòng tải \\(I_L = I_{in} = 5\\ \\text{mA}\\) — không phụ thuộc giá trị tải (đặc trưng của bộ chuyển đổi điện áp → dòng, V-to-I converter)."
    },
    {
      n: 42,
      text: "In a voltage summing amplifier, multiple input resistors are connected to which terminal?",
      options: [
        "Noninverting (+) terminal.",
        "Inverting (−) terminal.",
        "Output terminal.",
        "Ground."
      ],
      answers: [1],
      explain: "Bộ cộng điện áp (summing amplifier) ghép nhiều điện trở nhập vào chung một điểm — chính là đầu đảo (−), tức nút đất ảo. Nhờ đất ảo, các dòng nhập không ảnh hưởng lẫn nhau và output bằng tổng có trọng số \\(v_o = -(R_f/R_1 v_1 + R_f/R_2 v_2 + ...)\\)."
    },
    {
      n: 43,
      text: "In a noninverting constant-gain multiplier, the input signal is applied to which terminal?",
      options: [
        "Inverting (−) terminal.",
        "Noninverting (+) terminal.",
        "Output terminal.",
        "Ground."
      ],
      answers: [1],
      explain: "Tên gọi noninverting đã nói lên bản chất: tín hiệu vào được cấp lên cực KHÔNG ĐẢO (+), còn cực đảo (−) nhận mạng phân áp phản hồi R<sub>f</sub>/R<sub>1</sub>. Output do đó cùng pha với input và có gain \\(1 + R_f/R_1\\)."
    },
    {
      n: 44,
      text: "In an inverting constant-gain multiplier, the output voltage is:",
      options: [
        "In phase with the input voltage.",
        "180 degrees out of phase with the input voltage.",
        "Independent of the input voltage.",
        "Equal to the input voltage."
      ],
      answers: [1],
      explain: "Bộ khuếch đại đảo có \\(v_o = -(R_f/R_1)v_i\\): dấu âm nghĩa là output ngược pha 180° so với input — khi input dương thì output âm và ngược lại. Biên độ được nhân với hệ số R<sub>f</sub>/R<sub>1</sub> (constant-gain multiplier)."
    },
    {
      n: 45,
      text: "When two or more amplifier stages are connected in series, the arrangement is called a:",
      options: [
        "Feedback amplifier.",
        "Differential amplifier.",
        "Cascaded amplifier.",
        "Power amplifier."
      ],
      answers: [2],
      explain: "Ghép nối tiếp nhiều tầng khuếch đại (ra tầng trước vào tầng sau) gọi là khuếch đại nhiều tầng liên tiếp (cascaded amplifier). Gain tổng bằng tích các gain từng tầng (\\(A_v = A_{v1} \\times A_{v2} \\times ...\\)); băng thông tổng bị thu hẹp so với từng tầng."
    },
    {
      n: 46,
      text: "What is the approximate voltage gain of a common-gate amplifier?",
      options: [
        "\\(-g_m R_D\\)",
        "\\(g_m R_D\\)",
        "0",
        "1"
      ],
      answers: [1],
      explain: "Cấu hình chung gate (common-gate) không đảo pha: tín hiệu vào source, ra drain nên \\(A_v \\approx +g_m R_D\\) — cùng pha, trị số xấp xỉ bằng CE nhưng trở vào rất thấp. Công thức −g<sub>m</sub>R<sub>D</sub> là của common-source."
    },
    {
      n: 47,
      text: "What parameter represents the ratio of change in drain current to change in gate-to-source voltage in a FET?",
      options: [
        "Output resistance.",
        "Voltage gain.",
        "Transconductance.",
        "Input impedance."
      ],
      answers: [2],
      explain: "Độ truyền dẫn (transconductance) định nghĩa \\(g_m = \\dfrac{\\Delta I_D}{\\Delta V_{GS}}\\) — mức độ dòng drain thay đổi khi điện áp gate–source thay đổi, đơn vị Siemens (mS). Nó là tham số then chốt xác định gain của bộ khuếch đại FET: \\(A_v = -g_m R_D\\)."
    },
    {
      n: 48,
      text: "What is the typical voltage gain (Av) of a Source-Follower (Common-Drain) configuration?",
      options: [
        "Much greater than 1.",
        "Less than 1 but positive.",
        "Negative.",
        "Infinite."
      ],
      answers: [1],
      explain: "Source-follower có output lấy tại source đi theo (follow) gate: \\(A_v = \\dfrac{g_m R_S}{1 + g_m R_S}\\) — luôn nhỏ hơn 1 nhưng rất gần 1 và DƯƠNG (cùng pha). Điểm mạnh là trở vào rất cao, trở ra rất thấp nên dùng làm tầng đệm (impedance matching)."
    },
    {
      n: 49,
      text: "In a half-wave rectifier, when the diode is reverse biased, what is the output voltage?",
      options: ["Maximum", "Zero", "Equal to input", "Negative"],
      answers: [1],
      explain: "Khi diode bị phân cực ngược (nửa chu kỳ âm), nó khóa hoàn toàn, không có dòng qua tải R → sụt áp trên R bằng 0 → điện áp ra V<sub>o</sub> = 0 trong toàn bộ nửa chu kỳ đó. Toàn bộ điện áp nguồn lúc này rơi lên diode (PIV)."
    },
    {
      n: 50,
      text: "Combining DC and AC analysis involves:",
      options: [
        "Subtracting both signals",
        "Adding their effects linearly",
        "Ignoring one of them",
        "Using a transformer"
      ],
      answers: [1],
      explain: "Theo nguyên lý chồng chất (superposition) của mạch tuyến tính: phân tích DC để tìm điểm Q, phân tích AC (trên mạch tương đương nhỏ) để tìm dao động quanh điểm Q, rồi TỔNG HỢP tuyến tính hai kết quả: \\(i_C = I_{CQ} + i_c\\), \\(v_{CE} = V_{CEQ} + v_{ce}\\)."
    }
  ]
});