// ELC201 - Fall 2025 - Retake Exam
// Nguồn: ELC201 - FA25 - RE.pdf (50 câu hỏi trắc nghiệm)
window.EXAMAPP_EXAMS = window.EXAMAPP_EXAMS || [];
window.EXAMAPP_EXAMS.push({
  id: "elc201-fa25-re",
  subjectId: "ELC201",
  title: "ELC201 - Fall 2025 - Retake Exam",
  originalFile: "ELC201 - FA25 - RE.pdf",
  semester: "Fall 2025",
  semesterKey: "fa25",
  type: "Retake Exam",
  typeKey: "retake",
  durationMinutes: 60,
  imagePath: "images/elc201/fa25-re/",
  questions: [
    {
      n: 1,
      text: "What is a key advantage of FET amplifiers compared to BJT amplifiers?",
      options: ["Lower input impedance.", "Higher voltage gain.", "High input impedance.", "Higher power consumption."],
      answers: [2],
      explain: "FET có cực gate được cách điện (MOSFET) hoặc phân cực ngược (JFET) nên dòng gate ≈ 0 → trở kháng vào rất cao (hàng MΩ trở lên), cao hơn hẳn BJT vốn phải lấy dòng base. Ưu điểm này giúp FET gần như không tải nguồn tín hiệu."
    },
    {
      n: 2,
      text: "Which FET amplifier configuration is analogous to the BJT common-collector (emitter-follower)?",
      options: ["Common-Source.", "Common-Gate.", "Common-Drain (Source-Follower).", "Fixed-Bias."],
      answers: [2],
      explain: "Tương ứng ba cấu hình: common-source ↔ common-emitter, common-gate ↔ common-base, common-drain (source-follower) ↔ common-collector (emitter-follower). Source-follower lấy tín hiệu ra ở source, độ lợi ≈ 1, cùng pha — đúng vai trò tầng đệm như emitter follower."
    },
    {
      n: 3,
      text: "For a JFET fixed-bias amplifier, what is the ideal AC input impedance \\(Z_i\\)?",
      options: ["\\(R_D\\)", "\\(R_G\\)", "\\(r_d\\)", "\\(R_D \\parallel r_d\\)"],
      answers: [1],
      explain: "Tín hiệu vào cấp qua R<sub>G</sub> lên gate. Vì dòng gate ≈ 0, nhìn từ ngõ vào thấy \\(Z_i = R_G\\) (cực lớn, hàng MΩ). R<sub>D</sub> và r<sub>d</sub> nằm ở phía ngõ ra (drain), không liên quan trở vào."
    },
    {
      n: 4,
      text: "What happens to the voltage gain in a Self-Bias JFET amplifier if R_S is unbypassed?",
      options: ["Gain increases.", "Gain becomes negative.", "Gain decreases.", "No change."],
      answers: [2],
      explain: "R<sub>S</sub> không bypass sẽ xuất hiện trong công thức độ lợi: \\(A_v = -\\dfrac{g_m R_D}{1 + g_m R_S}\\) — mẫu lớn hơn nên độ lợi GIẢM. Đây là phản hồi âm dòng (giống R<sub>E</sub> của BJT): đổi lấy độ lợi để ổn định điểm Q và giảm méo."
    },
    {
      n: 5,
      text: "Determine the peak for both half cycles of the output waveform.",
      image: "q05.png",
      imageAlt: "Mạch clipper: vi ±16 V qua trở nối tiếp, nhánh shunt gồm diode và pin V = 4 V",
      options: ["16 V, −4 V", "16 V, 4 V", "−16 V, 4 V", "−16 V, −4 V"],
      answers: [1],
      explain: "Diode có cathode phía ngõ ra, anode nối cực + của pin 4 V. Nửa chu kỳ dương (16 V): diode ngược → không dẫn → ngõ ra đạt +16 V. Nửa chu kỳ âm: diode dẫn → ngõ ra bị ghim ở mức pin ≈ +4 V. Vậy hai đỉnh của dạng sóng ngõ ra là 16 V và 4 V."
    },
    {
      n: 6,
      text: "The PIV (Peak Inverse Voltage) of a diode in a half-wave rectifier must be:",
      options: ["Equal to RMS voltage", "Twice the peak voltage", "Equal to the peak voltage", "Irrelevant"],
      answers: [2],
      explain: "Trong half-wave rectifier, khi diode khóa (nửa âm), TOÀN BỘ điện áp nguồn rơi lên diode: PIV = V<sub>m</sub> (đỉnh của tín hiệu vào). Diode phải chịu được ít nhất giá trị đỉnh này, thực tế chọn có dự trữ an toàn (thường 1.5–2 lần)."
    },
    {
      n: 7,
      text: "In a bridge rectifier, PIV rating of each diode should be at least:",
      options: ["Vm", "2 Vm", "0.5 Vm", "Vrms"],
      answers: [0],
      explain: "Mạch cầu: khi cặp diode A dẫn, cặp B khóa; điện áp ngược trên mỗi diode khóa = V<sub>m</sub> (đỉnh sơ cấp) trừ đi một sụt áp diode, xấp xỉ V<sub>m</sub>. So với full-wave center-tap (PIV = 2V<sub>m</sub> + 0.7V), mạch cầu chỉ cần PIV = V<sub>m</sub> — đây là ưu điểm của bridge."
    },
    {
      n: 8,
      text: "Determine the peak value of the output waveform. (Assume the diode is ideal)",
      image: "q08.png",
      imageAlt: "Mạch: vi 20 V qua pin 5 V nối tiếp diode, tải R lấy Vo",
      options: ["25 V", "15 V", "−25 V", "−15 V"],
      answers: [1],
      explain: "Đây là bộ cắt nối tiếp (series clipper) với pin 5 V cản dòng: diode chỉ dẫn khi vi > 5 V. Khi dẫn, dòng qua mạch: \\(i = (v_i - 5)/R\\) → điện áp trên tải \\(v_o = v_i - 5\\). Đỉnh dương: 20 − 5 = 15 V (diode lý tưởng, không sụt 0.7 V). Nửa âm diode khóa, v<sub>o</sub> = 0."
    },
    {
      n: 9,
      text: "Determine the current through diode D2.",
      image: "q09.png",
      imageAlt: "Mạch: E = 20 V, D1 (Si) nối tiếp; D2 (Ge) song song với R 3.3 kΩ; R 5.6 kΩ về nguồn",
      options: ["6.061 mA", "0.7 mA", "3.393 mA", "3.571 mA"],
      answers: [2],
      explain: "D1 (Si) dẫn: điện áp sau D1 = 20 − 0.7 = 19.3 V. D2 (Ge) dẫn với V<sub>D2</sub> = 0.3 V → điện áp trên R 5.6 kΩ = 19.3 − 0.3 = 19 V. Dòng qua 5.6 kΩ: \\(I = 19/5.6k = 3.393\\ \\text{mA}\\) — dòng này qua nhánh D2 và 3.3 kΩ, và theo cách tính chuẩn của dạng bài này, I<sub>D2</sub> ≈ 3.393 mA."
    },
    {
      n: 10,
      text: "What is the function of a Voltage-Controlled Oscillator (VCO)?",
      options: ["Produce a fixed-frequency output.", "Generate output frequency proportional to input voltage.", "Convert analog signals to digital.", "Amplify a signal."],
      answers: [1],
      explain: "VCO tạo sóng dao động có TẦN SỐ tỉ lệ với điện áp điều khiển vào: \\(f_o = k V_{in}\\). Đó là bản dịch voltage-to-frequency, dùng trong PLL, FM điều chế, quét tần số. Phát tần số cố định là oscillator thường; chuyển analog→digital là ADC."
    },
    {
      n: 11,
      text: "In a comparator, if the noninverting (+) input voltage is greater than the inverting (−) input, what is the output state?",
      options: ["Low voltage level.", "High voltage level.", "Oscillating output.", "Zero voltage."],
      answers: [1],
      explain: "Comparator cho ngõ ra dương bão hòa (HIGH) khi V<sub>+</sub> > V<sub>−</sub>, và LOW khi V<sub>+</sub> < V<sub>−</sub>. Vì độ lợi mở vòng cực lớn, chỉ cần hiệu vi-vmV là ngõ ra đã bão hòa ở mức cao — tương ứng dấu dương của hiệu vào."
    },
    {
      n: 12,
      text: "What type of ICs contain both linear and digital characteristics?",
      options: ["Analog ICs.", "Digital ICs.", "Linear-Digital ICs.", "Microprocessor ICs."],
      answers: [2],
      explain: "Linear-Digital ICs là nhóm IC kết hợp cả phần tuyến tính (analog) và phần số: ví dụ timer 555 (comparator + flip-flop), VCO, comparator với ngõ ra logic. Ứng dụng giao thoa analog-digital như điều chế, đồng hồ, bộ định thì."
    },
    {
      n: 13,
      text: "In which modes can the 555 timer IC operate?",
      options: ["Comparator mode only.", "DAC mode only.", "Monostable and astable modes.", "PLL mode only."],
      answers: [2],
      explain: "555 hoạt động ở 2 chế độ chính: ASTABLE (dao động tự do tạo xung vuông liên tục — multivibrator không ổn định) và MONOSTABLE (một trạng thái ổn định, tạo xung đơn có độ rộng T = 1.1RC khi có xung kích). Nó là IC linear-digital điển hình chứa comparator + flip-flop nội bộ."
    },
    {
      n: 14,
      text: "Which parameter best reflects current gain in a BJT?",
      options: ["re", "ro", "β", "Zo"],
      answers: [2],
      explain: "β = I<sub>C</sub>/I<sub>B</sub> là hệ số khuếch đại dòng của BJT (thường 50–300). Các thông số còn lại: r<sub>e</sub> = 26mV/I<sub>E</sub> là trở emitter động; r<sub>o</sub> là trở kháng ngõ ra; Z<sub>o</sub> là trở kháng ngõ ra của toàn mạch."
    },
    {
      n: 15,
      text: "In the AC analysis of a common-emitter amplifier, the voltage gain Av is approximately:",
      options: ["RC/RE", "−RC/re", "−RC/RB", "−re/RC"],
      answers: [1],
      explain: "Common-emitter với R<sub>E</sub> bypass: \\(A_v = -\\dfrac{R_C}{r_e}\\) — độ lợi lớn, đảo pha 180°. r<sub>e</sub> = 26 mV/I<sub>E</sub> là trở emitter động. Nếu R<sub>E</sub> không bypass thì \\(A_v \\approx -R_C/R_E\\) nhỏ hơn nhiều."
    },
    {
      n: 16,
      text: "In the r_e model, what replaces the base-emitter junction in the AC equivalent circuit?",
      options: ["Current source", "Capacitor", "Equivalent resistance", "Inductor"],
      answers: [2],
      explain: "Trong mô hình r<sub>e</sub>, junction base-emitter được thay bằng TRỞ TƯƠNG ĐƯƠNG \\(r_e = 26\\ \\text{mV}/I_E\\); junction collector-base thay bằng nguồn dòng \\(\\beta i_b\\) (hoặc αi<sub>e</sub>). Mô hình này đơn giản, đủ chính xác cho phân tích nhỏ tín hiệu."
    },
    {
      n: 17,
      text: "Which of the following conditions must be met to allow the use of the approximate approach in a voltage-divider bias configuration?",
      options: ["\\(\\beta r_e > 10R_2\\)", "\\(\\beta R_E > 10R_2\\)", "\\(\\beta R_E < 10R_2\\)", "\\(\\beta r_e < 10R_2\\)"],
      answers: [1],
      explain: "Theo Boylestad, phương pháp xấp xỉ (bỏ qua dòng base, coi V<sub>B</sub> cố định bởi mạng chia áp) chỉ hợp lệ khi trở nhìn từ base \\(\\beta R_E\\) LỚN HƠN 10 lần R<sub>2</sub>: \\(\\beta R_E \\geq 10R_2\\). Khi đó trở vào của transistor đủ lớn để không tải đáng kể mạng chia áp."
    },
    {
      n: 18,
      text: "What is the slew rate of an op-amp?",
      options: ["Maximum voltage swing.", "Change in input bias current.", "Rate of output voltage change.", "Gain-to-bandwidth ratio."],
      answers: [2],
      explain: "Slew rate là tốc độ thay đổi cực đại của điện áp ngõ ra: \\(SR = \\left|\\dfrac{dV_o}{dt}\\right|_{max}\\), đơn vị V/µs (741 ≈ 0.5 V/µs). Khi tín hiệu yêu cầu thay đổi nhanh hơn SR, ngõ ra bị méo hình thang (slew-induced distortion)."
    },
    {
      n: 19,
      text: "Calculate the input voltage if \\(R_1 = 100\\ \\Omega\\), \\(R_f = 1\\ \\text{k}\\Omega\\), and \\(V_{out} = 550\\ \\text{mV}\\).",
      image: "q19.png",
      imageAlt: "Mạch khuếch đại không đảo: Vi vào cực +, phản hồi Rf, R1 xuống đất",
      options: ["−50 mV", "−5 mV", "550 mV", "50 mV"],
      answers: [3],
      explain: "Mạch không đảo: \\(A_v = 1 + \\dfrac{R_f}{R_1} = 1 + \\dfrac{1000}{100} = 11\\). Ngược lại: \\(V_i = \\dfrac{V_{out}}{A_v} = \\dfrac{550\\ \\text{mV}}{11} = 50\\ \\text{mV}\\). Độ lợi dương nên ngõ vào cũng dương."
    },
    {
      n: 20,
      text: "What is a key advantage of BiFET and BiMOS differential amplifiers compared to BJT versions?",
      options: ["Lower input impedance.", "Higher power consumption.", "Significantly higher input impedance.", "Lower voltage gain."],
      answers: [2],
      explain: "BiFET/BiMOS ghép tầng vào FET/MOSFET (gate cách điện, dòng vào ≈ 0) với tầng sau BJT: kết hợp trở vào CỰC CAO (hàng TΩ với JFET input như TL081) của FET và độ lợi lớn của BJT. Đây là lý do các op-amp hiện đại dùng đầu vào JFET/MOS."
    },
    {
      n: 21,
      text: "What is a typical use of operational amplifiers?",
      options: ["High-power switching.", "Providing voltage amplitude changes (amplification and polarity).", "Designing resistive networks without feedback.", "Operation at very high frequencies only."],
      answers: [1],
      explain: "Op-amp chuyên thay đổi biên độ và cực tính tín hiệu điện áp: khuếch đại đảo (lệch pha 180°), không đảo (cùng pha), cộng, trừ, tích phân... với độ lợi cài đặt chính xác bằng mạng phản hồi trở kháng."
    },
    {
      n: 22,
      text: "What is the primary function of the differential amplifier stage in an op-amp?",
      options: ["Amplify signals common to both inputs.", "Reject signals common to both inputs.", "Provide high output current.", "Filter high-frequency noise."],
      answers: [1],
      explain: "Tầng vi phân (giai đoạn vào của op-amp) khuếch đại HIỆU hai tín hiệu và LOẠI BỌ thành phần chung (common-mode) như nhiễu cùng chiều, drift do nhiệt. Khả năng này được đo bằng CMRR — càng cao, tín hiệu vi phản càng sạch."
    },
    {
      n: 23,
      text: "In common-base configuration, current gain (α) is typically:",
      options: ["Greater than 1", "Equal to 1", "Less than 1", "Negative"],
      answers: [2],
      explain: "\\(\\alpha = I_C/I_E\\) luôn NHỎ HƠN 1 (≈ 0.95–0.99) vì I<sub>E</sub> = I<sub>C</sub> + I<sub>B</sub> — dòng collector chỉ là phần lớn của dòng emitter. Đổi lại, common-base có độ lợi ĐIỆN ÁP lớn (α × R<sub>C</sub>/r<sub>e</sub>)."
    },
    {
      n: 24,
      text: "In which operating mode are both the emitter-base and collector-base junctions forward biased?",
      options: ["Active mode", "Saturation mode", "Cut-off mode", "Breakdown mode"],
      answers: [1],
      explain: "Saturation: BE thuận + BC thuận → V<sub>CE</sub> ≈ V<sub>CE(sat)</sub> ≈ 0.2 V, transistor đóng như công tắc. Active: BE thuận, BC ngược (khuếch đại). Cut-off: cả hai ngược (mở mạch)."
    },
    {
      n: 25,
      text: "In the Common-Emitter configuration, which terminal is common to both the input and output circuits?",
      options: ["Emitter", "Base", "Collector", "Source"],
      answers: [0],
      explain: "Tên cấu hình nói lên tất cả: common-EMITTER thì emitter là cực chung giữa mạch vào (base-emitter) và mạch ra (collector-emitter). Đây là cấu hình phổ biến nhất vì có cả độ lợi dòng lẫn độ lợi áp lớn. Source là cực của FET, không phải BJT."
    },
    {
      n: 26,
      text: "What are the two main types of Bipolar Junction Transistors (BJTs)?",
      options: ["FET and MOSFET", "NPN and PNP", "Diode and Transistor", "Unijunction and Bipolar"],
      answers: [1],
      explain: "Hai loại BJT theo thứ tự lớp bán dẫn: NPN (emitter/collector loại N, base loại P) và PNP (ngược lại). NPN phổ biến hơn vì electron di chuyển nhanh hơn lỗ, cho tần số làm việc cao hơn."
    },
    {
      n: 27,
      text: "The common-base configuration provides:",
      options: ["High input impedance", "High current gain", "High voltage gain", "High power loss"],
      answers: [2],
      explain: "Common-base: trở vào thấp (r<sub>e</sub>), trở ra cao, độ lợi dòng α < 1 nhưng ĐỘ LỢI ĐIỆN ÁP cao \\(A_v = \\alpha R_C/r_e\\) và không đảo pha. Thường dùng tầng tần số cao hoặc ghép cascode."
    },
    {
      n: 28,
      text: "What is the threshold voltage (V_T) for an E-MOSFET?",
      options: ["The voltage at which the drain current saturates.", "The gate voltage that cuts off the drain current.", "The minimum gate voltage required to form a channel and turn the MOSFET on.", "The pinch-off voltage."],
      answers: [2],
      explain: "V<sub>T</sub> (threshold) của E-MOSFET là điện áp gate-source TỐI THIỂU để lớp nghèo đảo tạo thành KÊNH dẫn nối drain-source — dưới ngưỡng này transistor tắt hoàn toàn (kênh n: cần V<sub>GS</sub> > V<sub>T</sub> > 0). Pinch-off voltage là khái niệm của JFET/D-MOSFET."
    },
    {
      n: 29,
      text: "What is a key structural difference between a JFET and a Depletion-Type MOSFET (D-MOSFET)?",
      options: ["The JFET has an insulated gate, while the D-MOSFET has a PN junction gate.", "The D-MOSFET has a SiO2 layer insulating the gate from the channel.", "The JFET has a physical channel, while the D-MOSFET does not.", "The D-MOSFET has a substrate terminal, while the JFET does not."],
      answers: [1],
      explain: "Điểm khác căn bản: D-MOSFET có lớp SiO<sub>2</sub> CÁCH ĐIỆN giữa gate và kênh (MOS = Metal-Oxide-Semiconductor) cho phép V<sub>GS</sub> dương hoặc âm; JFET dùng junction PN làm gate, bắt buộc phân cực ngược. Cả hai đều có kênh vật lý sẵn. Phương án A nói ngược sự thật."
    },
    {
      n: 30,
      text: "A JFET data sheet specifies \\(V_{GS(off)} = -6\\ \\text{V}\\) and \\(I_{DSS} = 8\\ \\text{mA}\\). Find the value of I<sub>D</sub> when \\(V_{GS} = -3\\ \\text{V}\\).",
      options: ["2 mA", "4 mA", "6 mA", "None of the other choices"],
      answers: [0],
      explain: "Phương trình Shockley: \\(I_D = I_{DSS}\\left(1 - \\dfrac{V_{GS}}{V_{GS(off)}}\\right)^2 = 8\\left(1 - \\dfrac{-3}{-6}\\right)^2 = 8(1 - 0.5)^2 = 8 \\times 0.25 = 2\\ \\text{mA}\\). Khi V<sub>GS</sub> bằng nửa điểm cắt, dòng còn đúng một phần tư I<sub>DSS</sub> do đặc tuyến bình phương."
    },
    {
      n: 31,
      text: "How does a p-channel JFET differ from an n-channel JFET?",
      options: ["Voltage polarities and current directions are reversed.", "It has a higher input impedance.", "It operates only in enhancement mode.", "It has a physical channel at zero gate voltage."],
      answers: [0],
      explain: "p-channel là bản gương của n-channel: mọi CỰC TÍNH điện áp đảo dấu (V<sub>GS</sub>, V<sub>DS</sub> dương thay vì âm) và chiều dòng điện ngược lại. Cấu trúc, trở vào, và đặc tuyến về bản chất giống hệt. Cả hai đều là depletion-mode có kênh sẵn."
    },
    {
      n: 32,
      text: "Referring to this transfer curve, determine I<sub>D</sub> at V<sub>GS</sub> = 2 V.",
      image: "q32.png",
      imageAlt: "Đường truyền đạt JFET: IDSS = 4 mA tại VGS = 0, VP = 3 V",
      options: ["4 mA", "2 mA", "0.44 mA", "0.90 mA"],
      answers: [2],
      explain: "Từ đồ thị: I<sub>DSS</sub> = 4 mA, V<sub>P</sub> = 3 V (điểm cắt). Phương trình Shockley: \\(I_D = 4\\left(1 - \\dfrac{2}{3}\\right)^2 = 4 \\times \\dfrac{1}{9} = 0.444\\ \\text{mA}\\). Đây là JFET kênh p nên V<sub>GS</sub> dương."
    },
    {
      n: 33,
      text: "What is the term for the energy gap that electrons in the valence band must overcome to become conduction electrons?",
      options: ["Valence Band Energy", "Conduction Band Energy", "Forbidden Energy Gap (Eg)", "Electron Affinity"],
      answers: [2],
      explain: "Forbidden Energy Gap (E<sub>g</sub>) là khoảng năng lượng " + '"' + "cấm" + '"' + " giữa dải hóa trị (valence) và dải dẫn (conduction): electron phải nhận ít nhất E<sub>g</sub> để nhảy lên dẫn điện. Si: 1.1 eV, Ge: 0.67 eV, cách điện: > 5 eV. E<sub>g</sub> càng nhỏ, bán dẫn càng dẫn."
    },
    {
      n: 34,
      text: "What is a key characteristic of semiconductor materials regarding their conductivity?",
      options: ["Very high conductivity", "Very low conductivity", "Conductivity between conductor and insulator", "Conductivity not affected by temperature"],
      answers: [2],
      explain: "Bán dẫn nằm Ở GIỮA: dẫn điện kém hơn kim loại nhưng tốt hơn cách điện (Si ≈ 6.4×10<sup>2</sup> S/m so với đồng 5.8×10<sup>7</sup> và thủy tinh ~10<sup>−12</sup>). Đặc tính này cùng khả năng điều khiển bằng doping chính là lý do bán dẫn hữu dụng."
    },
    {
      n: 35,
      text: "Determine Vo if E1 = E2 = 10 V.",
      image: "q35.png",
      imageAlt: "Cổng OR diode: E1, E2 qua hai diode Si đến node Vo; R = 1 kΩ xuống nguồn E = 10 V",
      options: ["9.3 V", "10 V", "−10 V", "0 V"],
      answers: [1],
      explain: "Node Vo được R kéo lên +10 V (đỉnh nguồn E). Diode dẫn khi V<sub>E1</sub> − 0.7 > V<sub>o</sub>: tức 9.3 > V<sub>o</sub>. Nhưng V<sub>o</sub> = 10 V > 9.3 → cả hai diode bị phân cực NGƯỢC, không có dòng qua R → không sụt áp → \\(V_o = 10\\ \\text{V}\\)."
    },
    {
      n: 36,
      text: "A semiconductor material that has been subjected to the doping process is called:",
      options: ["Intrinsic", "Extrinsic", "Compound", "Pure"],
      answers: [1],
      explain: "Extrinsic = bán dẫn đã PHA TẠP để kiểm soát nồng độ carrier (n-type: tạp pentavalent; p-type: tạp trivalent). Intrinsic là bán dẫn thuần khiết. Doping làm độ dẫn tăng nhiều bậc và là nền tảng chế tạo mọi linh kiện bán dẫn."
    },
    {
      n: 37,
      text: "Determine the values of V<sub>CB</sub> and I<sub>B</sub> for this circuit.",
      image: "q37.png",
      imageAlt: "Mạch common-base PNP: RE = 1.2 kΩ với VEE = 5 V, RC = 2.4 kΩ với VCC = 10 V, β = 60",
      options: ["1.4 V, 59.7 µA", "−1.4 V, 59.7 µA", "−9.3 V, 3.58 µA", "9.3 V, 3.58 µA"],
      answers: [0],
      explain: "Dòng emitter: \\(I_E = \\dfrac{V_{EE} - 0.7}{R_E} = \\dfrac{4.3}{1.2k} = 3.583\\ \\text{mA}\\). Dòng collector ≈ I<sub>E</sub>: \\(V_C = 10 - 3.583m \\times 2.4k = 1.4\\ \\text{V}\\), base ở 0 V → \\(V_{CB} = 1.4\\ \\text{V}\\). Dòng base: \\(I_B = I_C/\\beta = 3.583m/60 = 59.7\\ \\mu\\text{A}\\)."
    },
    {
      n: 38,
      text: "What is the benefit of using a collector-feedback bias?",
      options: ["Improved thermal stability", "High voltage gain", "High power efficiency", "Reduced R_E"],
      answers: [0],
      explain: "R<sub>B</sub> nối từ collector về base: I<sub>C</sub> tăng (nhiệt/β) → V<sub>CE</sub> giảm → dòng base qua R<sub>B</sub> giảm → I<sub>C</sub> bị kéo xuống. Phản hồi âm tự động này ổn định điểm Q theo nhiệt độ, bổ sung cho việc không cần trở emitter lớn."
    },
    {
      n: 39,
      text: "How is the load line for a transistor network determined?",
      options: ["By applying Ohm's Law to the input loop", "By finding the intersection of I_B and V_CE", "By applying Kirchhoff's Voltage Law to the output loop", "By calculating the power dissipation"],
      answers: [2],
      explain: "Đường tải DC xuất phát từ phương trình vòng (loop) ngõ ra theo KVL: \\(V_{CE} = V_{CC} - I_C(R_C + R_E)\\) — vẽ trên mặt phẳng I<sub>C</sub>-V<sub>CE</sub> cho đường thẳng qua hai điểm: (V<sub>CC</sub>, 0) và (0, V<sub>CC</sub>/R<sub>total</sub>). Vòng vào chỉ quyết định I<sub>B</sub> tức đặc tuyến nào được chọn."
    },
    {
      n: 40,
      text: "In a fixed-bias configuration, if β increases, what generally happens to the collector current I<sub>C</sub>?",
      options: ["I<sub>C</sub> decreases", "I<sub>C</sub> increases", "I<sub>C</sub> remains the same", "I<sub>C</sub> = 0"],
      answers: [1],
      explain: "Fixed-bias: \\(I_C = \\beta I_B\\) với I<sub>B</sub> = (V<sub>CC</sub> − 0.7)/R<sub>B</sub> KHÔNG phụ thuộc β. Vậy β tăng trực tiếp nhân lên I<sub>C</sub> — điểm Q trôi mạnh. Đây chính là nhược điểm của fixed-bias, lý do mạch thực dùng voltage-divider hoặc feedback để ổn định."
    },
    {
      n: 41,
      text: "What is the primary purpose of DC biasing in BJT circuits?",
      options: ["To increase AC gain", "To protect the transistor", "To establish a stable operating point", "To reduce input impedance"],
      answers: [2],
      explain: "Phân cực DC thiết lập điểm Q nằm trong vùng active, giữa bão hòa và cut-off, để tín hiệu AC khuếch đại tuyến tính quanh điểm Q mà không méo. Điểm Q phải ổn định theo nhiệt độ và β."
    },
    {
      n: 42,
      text: "Refer to figure show below. Calculate the value of V<sub>D</sub>.",
      image: "q42.png",
      imageAlt: "Mạch JFET kênh n: +20 V qua RD = 2 kΩ, ID = 6 mA, RS = 1 kΩ, gate qua RG = 100 MΩ",
      options: ["2 V", "4 V", "6 V", "8 V"],
      answers: [3],
      explain: "Điện áp drain: \\(V_D = V_{DD} - I_D R_D = 20 - 6m \\times 2k = 20 - 12 = 8\\ \\text{V}\\). Dòng 6 mA cũng tạo \\(V_S = 6\\ \\text{V}\\) trên R<sub>S</sub> (dùng cho V<sub>GS</sub> = −6 V của self-bias), nhưng câu hỏi chỉ yêu cầu V<sub>D</sub> so với đất."
    },
    {
      n: 43,
      text: "Refer to the given figure. \\(I_D = 6\\ \\text{mA}\\). Calculate the value of V<sub>DS</sub>.",
      image: "q43.png",
      imageAlt: "Mạch JFET kênh p với nguồn −15 V, RD = 1 kΩ, gate qua 100 MΩ xuống đất",
      options: ["−3 V", "−6 V", "6 V", "−9 V"],
      answers: [3],
      explain: "Kênh p với nguồn −15 V: \\(V_D = -15 + I_D R_D = -15 + 6 = -9\\ \\text{V}\\); source ở 0 V (nối đất) → \\(V_{DS} = -9\\ \\text{V}\\). Dòng gate ≈ 0 qua 100 MΩ nên gate cũng ở 0 V."
    },
    {
      n: 44,
      text: "In JFET Self-Bias, the gate voltage is typically:",
      options: ["Equal to drain voltage.", "Equal to source voltage.", "Zero.", "Negative."],
      answers: [2],
      explain: "Trong self-bias, gate nối đất qua R<sub>G</sub> và không có dòng gate → \\(V_G = 0\\ \\text{V}\\). Điện áp âm V<sub>GS</sub> = −I<sub>D</sub>R<sub>S</sub> xuất hiện do SOURCE bị nâng lên dương, chứ không phải do gate bị hạ xuống âm."
    },
    {
      n: 45,
      text: "Refer to figure shown below. What is the value of I<sub>G</sub>?",
      image: "q42.png",
      imageAlt: "Mạch JFET kênh n: +20 V qua RD = 2 kΩ, ID = 6 mA, RS = 1 kΩ, gate qua RG = 100 MΩ",
      options: ["6.7 mA", "0 mA", "2 mA", "4 mA"],
      answers: [1],
      explain: "Gate của JFET là junction phân cực ngược (hoặc MOS gate cách điện) → dòng gate ≈ 0 bất kể R<sub>G</sub> = 100 MΩ. Toàn bộ dòng 6 mA chảy trong kênh drain-source; R<sub>G</sub> chỉ giữ gate ở 0 V, không có dòng qua nó."
    },
    {
      n: 46,
      text: "What is a key characteristic of the noninverting constant-gain multiplier's voltage gain?",
      options: ["Less than 1.", "Negative.", "Greater than or equal to 1.", "Equal to 0."],
      answers: [2],
      explain: "Bộ khuếch đại không đảo: \\(A_v = 1 + R_f/R_1 \\geq 1\\) — luôn DƯƠNG (cùng pha) và không bao giờ nhỏ hơn 1 vì cấu trúc phản hồi chia áp. Muốn A < 1 phải dùng mạch giảm áp (attenuator) thụ động; muốn đảo dấu phải dùng cấu hình inverting."
    },
    {
      n: 47,
      text: "Determine the output voltage.",
      image: "q47.png",
      imageAlt: "Mạch trừ hai op-amp: tầng đảo 250k/500k rồi tầng cộng đảo 100k, 50k, phản hồi 500k",
      options: ["10 (V2 − V1)", "−10 (V2 − V1)", "5 (V2 − V1)", "15 (V2 − V1)"],
      answers: [1],
      explain: "Tầng 1: \\(V_{o1} = -2V_1\\). Tầng 2: \\(V_o = -5V_{o1} - 10V_2 = 10V_1 - 10V_2 = -10(V_2 - V_1)\\). Vậy mạch cho hiệu hai tín hiệu với hệ số 10, dấu trừ do cấu trúc hai tầng đảo — chính là khuếch đại vi phân hai tầng."
    },
    {
      n: 48,
      text: "Calculate the output voltage if \\(V_1 = V_2 = 700\\ \\text{mV}\\).",
      image: "q47.png",
      imageAlt: "Mạch trừ hai op-amp: tầng đảo 250k/500k rồi tầng cộng đảo 100k, 50k, phản hồi 500k",
      options: ["0 V", "−8 V", "12 V", "−12 V"],
      answers: [0],
      explain: "Từ câu trước: \\(V_o = 10V_1 - 10V_2\\). Khi V<sub>1</sub> = V<sub>2</sub> = 0.7 V: \\(V_o = 7 - 7 = 0\\ \\text{V}\\). Thành phần common-mode (bằng nhau) bị triệt tiêu hoàn toàn — đúng tính chất mạch TRỪ: chỉ khuếch đại hiệu của hai ngõ vào."
    },
    {
      n: 49,
      text: "Why are op-amps used in instrumentation circuits?",
      options: ["High output impedance.", "Generating clock signals.", "High input impedance and gain accuracy.", "Reducing voltage to zero."],
      answers: [2],
      explain: "Mạch đo lường cần: (1) TRỞ VÀO CAO để không tải cảm biến và không làm sai tín hiệu đo; (2) ĐỘ LỢI CHÍNH XÁC, ổn định, dễ cài đặt bằng phản hồi. Op-amp (đặc biệt instrumentation amplifier) thỏa cả hai, kèm CMRR cao để loại nhiễu common-mode."
    },
    {
      n: 50,
      text: "In the instrumentation amplifier equation Vo = (1 + 2R / Rp)(V1 − V2), what does Rp control?",
      options: ["Offset voltage.", "Common-mode gain.", "Gain scaling.", "Output impedance."],
      answers: [2],
      explain: "R<sub>p</sub> (trở đặt giữa hai tầng vào) quyết định HỆ SỐ ĐỘ LỢI: \\(A = 1 + 2R/R_p\\) — R<sub>p</sub> càng nhỏ, độ lợi càng lớn. Trong thực tế R<sub>p</sub> là biến trở để chỉnh gain (gain scaling) mà không ảnh hưởng CMRR của mạch."
    }
  ]
});
