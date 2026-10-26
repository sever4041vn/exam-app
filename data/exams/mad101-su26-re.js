// MAD101 - Summer 2026 - Retake Exam
// Nguồn: MAD101 - SU26 - RE.pdf (50 câu trắc nghiệm, Toán rời rạc; file gốc có 1 trang tài liệu tham khảo chèn giữa đề)
window.EXAMAPP_EXAMS = window.EXAMAPP_EXAMS || [];
window.EXAMAPP_EXAMS.push({
  id: "mad101-su26-re",
  subjectId: "MAD101",
  title: "MAD101 - Summer 2026 - Retake Exam",
  originalFile: "MAD101 - SU26 - RE.pdf",
  semester: "Summer 2026",
  semesterKey: "su26",
  type: "Retake Exam",
  typeKey: "retake",
  durationMinutes: 60,
  imagePath: "images/mad101/su26-re/",
  questions: [
    {
      n: 1,
      text: "Let A = {1, 2, 3}; B = {1, 2}. What is A × B?<br>(i) {(1,1), (1,2), (2,1), (2,2), (3,1), (3,2)}<br>(ii) {(1,1), (3,2), (2,1), (2,2), (3,1), (3,2)}<br>(iii) {(1,1), (1,3), (2,1), (2,2), (3,1), (3,2)}<br>(iv) {(1,1), (3,2), (2,1), (2,2), (3,1), (1,3)}",
      options: ["(i)", "(ii)", "(iii)", "(iv)"],
      answers: [0],
      explain: "A × B gồm mọi cặp có thứ tự (a, b) với a ∈ {1,2,3}, b ∈ {1,2}: (1,1), (1,2), (2,1), (2,2), (3,1), (3,2) — đúng như (i). (ii) thiếu (1,2) và lặp (3,2); (iii) chứa (1,3) với 3 ∉ B; (iv) chứa (1,3) và thiếu (1,2)."
    },
    {
      n: 2,
      text: "Let U = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}, A and B subsets of U. The bit string representation of A is 1010101010, and the bit string representation of B is 0101010101. Find the set A − B.",
      options: ["{2, 4, 6, 8}", "{0, 2, 4, 6, 8}", "{1, 3, 5, 7, 9}", "the empty set", "None of the other choices is correct"],
      answers: [1],
      explain: "Chuỗi bit đọc theo vị trí 0→9: A = {0, 2, 4, 6, 8}, B = {1, 3, 5, 7, 9}. A và B không có phần tử chung nên A − B = A = {0, 2, 4, 6, 8}."
    },
    {
      n: 3,
      text: "Which statement is true for all sets A and B?<br>(i) A \\ (A ∩ B) = A \\ B<br>(ii) A \\ (A ∪ B) = A \\ B",
      options: ["Only (i)", "Only (ii)", "Both (i) and (ii)", "None of the other choices is correct"],
      answers: [0],
      explain: "(i): A \\ (A ∩ B) = A ∩ (A ∩ B)ᶜ = A ∩ (Aᶜ ∪ Bᶜ) = (A ∩ Bᶜ) ∪ (A ∩ Aᶜ) = A ∩ Bᶜ = A \\ B ✓. (ii): A \\ (A ∪ B) = A ∩ (Aᶜ ∩ Bᶜ) = ∅ ≠ A \\ B (trừ trường hợp đặc biệt) ✗."
    },
    {
      n: 4,
      text: "Which rules are functions?<br>(i) f: ℤ → ℝ, f(n) = 1/(n² − 5)<br>(ii) f: ℤ → ℤ, f(n) = 1/(n² − 5)<br>(iii) f: ℤ → ℤ, f(n) = 1/(n² − 4)<br>(iv) f: ℤ → ℝ, f(n) = 1/(n² − 4)",
      options: ["(ii)", "(iv)", "(i)", "(iii)"],
      answers: [2],
      explain: "(i): n² − 5 = 0 không có nghiệm nguyên nên mẫu khác 0 với mọi n ∈ ℤ, và giá trị thuộc ℝ → hàm hợp lệ ✓. (ii): giá trị 1/(n² − 5) không nguyên (vd n = 0 → −1/5) ✗. (iii) và (iv): n = ±2 làm mẫu số bằng 0 ✗. Chỉ (i) là hàm."
    },
    {
      n: 5,
      text: "Which of the following rules is a function from ℕ to ℕ?<br>(i) f(n) = n − 1<br>(ii) f(n) = (n² − 1)/(n − 1)<br>(iii) f(n) = 2n + 1<br>(iv) f(n) = ±n",
      options: ["(iii)", "(i)", "(ii)", "(iv)"],
      answers: [0],
      explain: "(iii): 2n + 1 ∈ ℕ với mọi n ∈ ℕ ✓. (i): f(0) = −1 ∉ ℕ ✗. (ii): tại n = 1 mẫu số bằng 0 → không xác định ✗. (iv): mỗi n cho hai giá trị khác nhau → không xác định duy nhất ✗."
    },
    {
      n: 6,
      text: "Find the sum<br>\\(\\sum_{i=0}^{3}\\sum_{j=1}^{3}(2i + j)\\)",
      options: ["40", "32", "24", "36", "None of the other choices is correct"],
      answers: [4],
      explain: "Tổng trong: \\(\\sum_{j=1}^{3}(2i+j) = 6i + 6\\). Tổng ngoài: \\(\\sum_{i=0}^{3}(6i+6) = 6(0+1+2+3) + 6·4 = 36 + 24 = 60\\). 60 không có trong các lựa chọn → E."
    },
    {
      n: 7,
      text: "Given the algorithm<br><pre class=\"algo\">Procedure tt(a<sub>1</sub>, a<sub>2</sub>, …, a<sub>n</sub>: integers)<br>  i := 1<br>  while (i ≤ n) and (a<sub>i</sub> ≠ a<sub>i+1</sub>) do<br>    i := i + 1<br>  if i &gt; n then print(0)<br>  else print(i)</pre><br>If the input is the list<br>{1, 3, 5, 5, 4, 4, 4, 6, 9}<br>what is the output?",
      options: ["3", "5", "4", "1", "0", "None of the other choices is correct"],
      answers: [0],
      explain: "Duyệt: i = 1: a₁ = 1 ≠ a₂ = 3 → i = 2; a₂ = 3 ≠ a₃ = 5 → i = 3; a₃ = 5 = a₄ = 5 → dừng vòng lặp. i = 3 ≤ n → in ra 3."
    },
    {
      n: 8,
      text: "Given the Binary search algorithm:<br><pre class=\"algo\">Procedure Binary-search(a₁ ≤ a₂ ≤ … ≤ aₙ: integers)<br>  i := 1<br>  j := n<br>  while i &lt; j<br>    m := ⌊(i + j) / 2⌋<br>    if x &gt; a<sub>m</sub> then i := m + 1<br>    else j := m<br>  if x = a<sub>i</sub> then location := i<br>  else location := 0</pre><br>If input = 2, 4, 5, 7, 8, 9, 10, 13 and x = 8, after the second time of dividing into sublists, the sublist to be considered is ________.",
      options: ["8, 9", "8, 9, 10", "5, 7, 8", "7, 8"],
      answers: [0],
      explain: "Lần chia thứ nhất: m = ⌊(1+8)/2⌋ = 4, a₄ = 7 &lt; 8 → xét nửa phải: 8, 9, 10, 13. Lần chia thứ hai: m = ⌊(5+8)/2⌋ = 6, a₆ = 9 &gt; 8 → chọn nửa trái của danh sách đang xét: 8, 9."
    },
    {
      n: 9,
      text: "Suppose that f(n) is O(log n), g(n) is O(1) and h(n) is O(n). Find the best big-O estimate of<br>\\(f(n)^{g(n)} + \\dfrac{h(n)}{g(n)}\\)<br>(i) O(log n)&nbsp;&nbsp;(ii) O(n)&nbsp;&nbsp;(iii) O(n log n)&nbsp;&nbsp;(iv) O(n<sup>2</sup>)&nbsp;&nbsp;(v) O(n<sup>2</sup> log n)",
      options: ["(i)", "(ii)", "(iii)", "(iv)", "(v)"],
      answers: [1],
      explain: "h(n)/g(n) = O(n)/O(1) = O(n). Còn f(n)^{g(n)} = (log n)^{O(1)} là đa thức theo log n, tăng chậm hơn mọi bậc của n. Tổng bị chi phối bởi O(n) → ước lượng tốt nhất là O(n) → (ii)."
    },
    {
      n: 10,
      text: "What is the time complexity of the following algorithm segment, given that the running times of Instructions A, B and C are O(n), O(log n) and O(n log n), respectively?<br><pre class=\"algo\">Instruction A<br>if n &lt; 10 then<br>  Instruction B<br>else<br>  Instruction C<br>end</pre><br>(i) O(log n)&nbsp;&nbsp;(ii) O(n)&nbsp;&nbsp;(iii) O(n log n)&nbsp;&nbsp;(iv) O(n<sup>2</sup>)",
      options: ["(i)", "(ii)", "(iii)", "(iv)"],
      answers: [2],
      explain: "Instruction A luôn chạy: O(n). Sau đó chỉ MỘT trong B hoặc C chạy (if–else): nhánh tệ nhất là C với O(n log n). Tổng trường hợp xấu nhất: O(n) + O(n log n) = O(n log n) → (iii)."
    },
    {
      n: 11,
      text: "Find the quotient q and remainder r when −88 is divided by 5.",
      options: ["q = −20, r = 2", "q = −18, r = −3", "q = −20, r = −2", "q = −18, r = 3", "None of the other choices is correct"],
      answers: [4],
      explain: "Theo định nghĩa phép chia có dư (0 ≤ r &lt; 5): −88 = 5 × (−18) + 2 → q = −18, r = 2. Cặp (−18, 2) không nằm trong các lựa chọn → E."
    },
    {
      n: 12,
      text: "Consider an encryption scheme using the function<br>f(p) = 7p + 3 mod 26.<br>Encrypt the message \"LN\".",
      options: ["AX", "ZW", "CX", "CQ", "ZG"],
      answers: [3],
      explain: "Đánh số A = 0: L = 11, N = 13. f(11) = 80 mod 26 = 2 → 'C'; f(13) = 94 mod 26 = 16 → 'Q'. Bản mã: \"CQ\"."
    },
    {
      n: 13,
      text: "Find the exponent of 2 in the prime factorization of 20!.",
      options: ["18", "20", "16", "17", "22"],
      answers: [0],
      explain: "Công thức Legendre: số mũ của 2 trong 20! = ⌊20/2⌋ + ⌊20/4⌋ + ⌊20/8⌋ + ⌊20/16⌋ = 10 + 5 + 2 + 1 = 18."
    },
    {
      n: 14,
      text: "For two positive integers a and b, we say that a is relatively prime to b if GCD(a, b) = 1. How many positive integers that are less than 15 and relatively prime to 15?",
      options: ["6", "8", "12", "10", "None of the other choices is correct"],
      answers: [1],
      explain: "Số nguyên cùng nhau nguyên vị với 15 = 3·5 và nhỏ hơn 15 chính là φ(15) = 15(1 − 1/3)(1 − 1/5) = 8. Cụ thể: 1, 2, 4, 7, 8, 11, 13, 14."
    },
    {
      n: 15,
      text: "To compute 3<sup>14</sup> mod 21 using the modular exponentiation algorithm, the remainders CHOSEN for the last calculation are ________.",
      options: ["9, 18", "9, 18, 9", "9, 18, 9, 18", "18, 9, 18", "None of the other choices is correct"],
      answers: [1],
      explain: "14 = 1110₂ → dùng các bình phương 3², 3⁴, 3⁸: 3² = 9; 3⁴ = 9² mod 21 = 81 mod 21 = 18; 3⁸ = 18² mod 21 = 324 mod 21 = 9. Ba remainders được nhân lần cuối: 9, 18, 9 (kết quả 9·18·9 mod 21 = 9)."
    },
    {
      n: 16,
      text: "Convert 11101 in binary representation to base 16 representation.",
      options: ["1D", "E1", "1E", "D1"],
      answers: [0],
      explain: "Nhóm 11101₂ thành 4 bit: 0001 1101 → 1 và 13 → 1D (1·16 + 13 = 29)."
    },
    {
      n: 17,
      text: "Let P(n) be the statement that<br>\\(1^2 + 3^2 + 5^2 + \\cdots + (2n+1)^2 = \\dfrac{(n+1)(2n+1)(2n+3)}{3}\\)<br>for the nonnegative integer n.<br>For a proof by mathematical induction, assume that P(k) is true for some integer k ≥ 0. What do you need to prove in the inductive step?<br>(i) \\(1^2 + 3^2 + \\cdots + (2k+1)^2 = \\dfrac{(k+1)(2k+1)(2k+3)}{3}\\)<br>(ii) \\(1^2 + 3^2 + \\cdots + (2k-1)^2 = \\dfrac{(k-1)(2k+1)(2k+3)}{3}\\)<br>(iii) \\(1^2 + 3^2 + \\cdots + (2k+3)^2 = \\dfrac{(k+2)(2k+3)(2k+5)}{3}\\)",
      options: ["(i)", "(ii)", "(iii)", "None of the other choices is correct"],
      answers: [2],
      explain: "Bước quy nạp: giả sử P(k) đúng (chính là phát biểu (i)) và phải chứng minh P(k+1), tức thay n = k + 1 vào công thức: 1² + 3² + ⋯ + (2k + 3)² = (k+2)(2k+3)(2k+5)/3 → (iii)."
    },
    {
      n: 18,
      text: "Find a recursive definition for the sequence<br>{a<sub>n</sub> = 1 + (−1)<sup>n</sup>}, n = 0, 1, 2, …<br>(i) a<sub>0</sub> = 0, a<sub>1</sub> = 2, a<sub>n</sub> = a<sub>n−2</sub> for n &gt; 1<br>(ii) a<sub>0</sub> = 2, a<sub>1</sub> = 0, a<sub>n</sub> = a<sub>n−2</sub> for n &gt; 1<br>(iii) a<sub>0</sub> = 2, a<sub>n</sub> = a<sub>n−1</sub> − 2 for n &gt; 0",
      options: ["(iii)", "(i)", "(ii)", "None of the other choices is correct"],
      answers: [2],
      explain: "Dãy: a₀ = 2, a₁ = 0, a₂ = 2, a₃ = 0, … tuần hoàn theo tính chẵn lẻ của n → aₙ = a_{n−2} với a₀ = 2, a₁ = 0 → đúng (ii). (i) hoán đổi hai giá trị đầu; (iii) cho dãy 2, 0, −2, −4, … sai."
    },
    {
      n: 19,
      text: "Given the function f defined recursively as follows:<br>f(n) = 1 + f(n−1)·f(n−2) − 2f(n−1), n = 3, 4, …<br>with f(1) = 1, f(2) = −1. Find f(5).",
      options: ["2", "1", "−1", "None of the other choices is correct", "5"],
      answers: [1],
      explain: "f(3) = 1 + f(2)·f(1) − 2f(2) = 1 + (−1)(1) + 2 = 2; f(4) = 1 + f(3)·f(2) − 2f(3) = 1 − 2 − 4 = −5; f(5) = 1 + f(4)·f(3) − 2f(4) = 1 − 10 + 10 = 1."
    },
    {
      n: 20,
      text: "When applying the recursive algorithm for computing gcd(4, 14), how many times is the function gcd called?<br><pre class=\"algo\">procedure gcd(a, b: nonnegative integers with a &lt; b)<br>  if a = 0 then gcd := b<br>  else gcd := gcd(b mod a, a)</pre>",
      options: ["3", "2", "4", "None of the other choices is correct"],
      answers: [0],
      explain: "gcd(4, 14) → gọi gcd(14 mod 4, 4) = gcd(2, 4) → gọi gcd(4 mod 2, 2) = gcd(0, 2) → a = 0, trả về 2. Tổng cộng 3 lần gọi hàm."
    },
    {
      n: 21,
      text: "Find the output of the recursive algorithm if input n = 5.<br><pre class=\"algo\">procedure TT(n: integer);<br>  if n = 1 then f(1) := −1<br>  else f(n) := f(n−1) * n;</pre>",
      options: ["−120", "−240", "0", "120", "240"],
      answers: [0],
      explain: "f(1) = −1; f(2) = −1·2 = −2; f(3) = −2·3 = −6; f(4) = −6·4 = −24; f(5) = −24·5 = −120."
    },
    {
      n: 22,
      text: "Consider the functions<br>\\(f: \\{1, 2, 3, 4\\} \\to \\{1, 2, 3, 4, 5, 6, 7, 8\\}\\).<br>How many one-to-one functions that are <b>increasing</b>?",
      options: ["70", "85", "60", "90", "None of the other choices is correct"],
      answers: [0],
      explain: "Một hàm tăng ngặt và đơn ánh hoàn toàn được xác định bởi bộ 4 giá trị phân biệt được chọn từ 8 giá trị (sắp tự động theo thứ tự tăng) → số hàm = C(8,4) = 70."
    },
    {
      n: 23,
      text: "Find the number of positive integers that do not exceed 2016 and are divisible by 7 or 8.",
      options: ["512", "288", "224", "504", "None of the other choices is correct"],
      answers: [3],
      explain: "Bao hàm – loại trừ: ⌊2016/7⌋ = 288; ⌊2016/8⌋ = 252; ⌊2016/56⌋ = 36 (số chia hết cho cả 7 và 8, vì BCNN(7,8) = 56). Kết quả: 288 + 252 − 36 = 504."
    },
    {
      n: 24,
      text: "A young pair of rabbits (one of each sex) is placed on an island. A pair of rabbits does not breed until they are 2 months old. After they are 2 months old they will produce 2 pairs of rabbits each month. Find the number of pairs of rabbits after 5 months.",
      options: ["11", "13", "21", "20"],
      answers: [0],
      explain: "Hệ thức truy hồi fₙ = f_{n−1} + 2f_{n−2}, f₁ = f₂ = 1 (mô hình Rosen): f₃ = 1 + 2·1 = 3; f₄ = 3 + 2·1 = 5; f₅ = 5 + 2·3 = 11. Tháng thứ 5: 5 cặp cũ + 6 cặp mới (2 cặp trưởng thành × 2) = 11 cặp."
    },
    {
      n: 25,
      text: "Find f(2) if f(8) = 14 and f(n) = 3f(n/2) − n − 2.",
      options: ["8", "14", "14/3", "22/9", "None of the other choices is correct"],
      answers: [2],
      explain: "Lần lượt: f(2) = 3f(1) − 4; f(4) = 3f(2) − 6; f(8) = 3f(4) − 10 = 9f(2) − 18 − 10 = 9f(2) − 28. Với f(8) = 14: 9f(2) = 42 → f(2) = 42/9 = 14/3."
    },
    {
      n: 26,
      text: "Let n &gt; 2. Which of the following graphs has the most number of edges?",
      options: ["K<sub>n,n</sub>", "C<sub>n</sub>", "K<sub>n</sub>", "Q<sub>n</sub>", "W<sub>n</sub>", "None of the other choices is correct"],
      answers: [3],
      explain: "Số cạnh: K_{n,n}: n²; Cₙ: n; Kₙ: n(n−1)/2; Qₙ: n·2<sup>n−1</sup>; Wₙ: 2n. Với n &gt; 2 ta có 2^{n−1} &gt; n nên n·2^{n−1} &gt; n² → Qₙ (khối n chiều) nhiều cạnh nhất. Ví dụ n = 3: Q₃ có 12 cạnh &gt; K₃,₃ có 9 cạnh."
    },
    {
      n: 27,
      text: "Let G be a graph with 12 vertices such that two of the vertices are of degrees 3 and the remaining vertices are of degree 4. How many edges does G have?",
      options: ["20", "21", "22", "23", "None of the other choices"],
      answers: [3],
      explain: "Định lý bắt tay: tổng bậc = 2·|E|. Ở đây 2·3 + 10·4 = 46 = 2|E| → |E| = 23."
    },
    {
      n: 28,
      text: "Are these two graphs isomorphic? (See picture)",
      options: ["They are not isomorphic", "They are isomorphic because they have the same number of edges", "They are isomorphic because they have the same number of vertices of degree 3", "They are isomorphic because they have the same number of circuits of length 3"],
      answers: [0],
      explain: "Cả hai có 7 đỉnh, 10 cạnh và cùng dãy bậc (4, 3, 3, 3, 3, 2, 2), nhưng không đồng cấu: tam giác chứa đỉnh bậc 4 khác nhau — đồ thị trái có 3 chu trình tam giác (L–TL–M, L–B–M, B–BR–M), đồ thị phải chỉ có 2 (L–TL–M, M–R–BR). Số chu trình độ dài 3 là bất biến đẳng cấu → không đồng cấu, các lý do B, C, D đều sai.",
      image: "q28.png"
    },
    {
      n: 29,
      text: "Let G be an undirected graph and A be the adjacency matrix of G. Choose the correct statement among the following:",
      options: ["The entries on the main diagonal of A are all equal to 0.", "The entries of the matrix A can only take the values 0 or 1.", "If A has a non-zero entry on the main diagonal, then G has at least one multiple edge.", "If G has no loops, then the entries on the main diagonal of A are all equal to 0."],
      answers: [3],
      explain: "Với đa đồ thị/khuyên: đường chéo chính của A ghi số khuyên tại mỗi đỉnh. Nếu G không có khuyên thì các phần tử đường chéo đều bằng 0 → D luôn đúng. A sai (đồ thị có khuyên thì đường chéo khác 0); B sai (đa cạnh cho giá trị ≥ 2); C sai vì đường chéo khác 0 nghĩa là có khuyên (loop), không phải đa cạnh."
    },
    {
      n: 30,
      text: "Let u, v be two vertices on one side of the bipartite graph K<sub>2,3</sub>. How many paths of length 4 from u to v?",
      options: ["8", "2", "0", "4", "None of the other choices is correct"],
      answers: [4],
      explain: "Đường đi độ dài 4 từ u đến v (cùng thuộc phần 2 đỉnh): u – b₁ – a₂ – b₃ – v, với b₁, b₃ ∈ phần 3 đỉnh (3 cách mỗi bước), a₂ là đỉnh còn lại của phần u (1 cách) → 3 · 1 · 3 = 9 đường. 9 không có trong các lựa chọn → E."
    },
    {
      n: 31,
      text: "How many cut vertices does this graph have?",
      options: ["1", "2", "3", "4"],
      answers: [2],
      explain: "Đỉnh c (tâm): bỏ c thì {a, b} tách khỏi {d, e, f, g} → cắt. Đỉnh f: bỏ f thì g cô lập → cắt. Đỉnh d: bỏ d thì e cô lập → cắt. a, b không phải đỉnh cắt. Tổng: 3 đỉnh cắt.",
      image: "q31.png"
    },
    {
      n: 32,
      text: "Let S be the set of all graphs with degree sequence<br>(2, 2, 2, 1, 1, 0).<br>Which statement is TRUE:<br>(i) ∃G ∈ S: G has an Euler circuit<br>(ii) ∃G ∈ S: G has a Hamilton path<br>(iii) ∀G ∈ S: G has no Euler paths",
      options: ["(i)", "(ii)", "(iii)", "None of the other choices"],
      answers: [3],
      explain: "(i) sai: mọi G có đúng hai đỉnh bậc 1 (lẻ) nên không thể có chu trình Euler. (ii) sai: mọi G đều chứa một đỉnh cô lập (bậc 0) nên không có đường Hamilton đi qua tất cả đỉnh. (iii) sai: tồn tại G mà thành phần liên thông là đường đi 5 đỉnh (bậc 1,2,2,2,1) — có đúng 2 đỉnh lẻ → có đường Euler. Cả ba đều sai → D."
    },
    {
      n: 33,
      text: "Does the given graph have an Euler path, and if so, what can be said about its starting and ending vertices?",
      options: ["The graph has an Euler path starting at vertex c and ending at vertex f, or vice versa.", "The graph has no Euler path.", "The graph has an Euler path starting at vertex a and ending at vertex b.", "The graph has an Euler path starting at vertex f and ending at vertex d."],
      answers: [0],
      explain: "Bậc các đỉnh: a = 4 (f, b, d, e-cung); b = 4 (a, f, d, c); d = 4 (a, b, e, c); e = 4 (cung tới a, f, d, c); còn c = 3 (b, d, e) và f = 3 (a, b, e). Đồ thị liên thông và có đúng hai đỉnh bậc lẻ là c và f → có đường Euler bắt đầu ở một trong hai đỉnh này và kết thúc ở đỉnh kia.",
      image: "q33.png"
    },
    {
      n: 34,
      text: "Find the length of the shortest path from G to M.",
      options: ["6", "8", "7", "9", "5"],
      answers: [4],
      explain: "Dijkstra từ G: d(H) = 1 (G–H); d(K) = min(1+1, 4) = 2 (H–K); d(J) = min(1+1, 2+5, 4+2) = 2 (H–J); d(I) = 2+2 = 4; d(L) = min(2+3, 2+6) = 5; d(M) = min(2+3, 4+3, 5+2) = 5. Đường ngắn nhất: G–H–J–M = 1 + 1 + 3 = 5.",
      image: "q34.png"
    },
    {
      n: 35,
      text: "How many leaves in this tree?",
      options: ["9", "8", "10", "13", "None of the other choices is correct"],
      answers: [0],
      explain: "Cấu trúc cây: gốc a có con b, d, c; b có con e, h, g; e có con i, n, k; c có con f, l, m. Các lá (đỉnh không có con): d, h, g, i, n, k, f, l, m → tổng 9 lá.",
      image: "q35.png"
    },
    {
      n: 36,
      text: "Find the maximum number of internal vertices of a full 3-ary tree of height 3.",
      options: ["13", "17", "19", "21"],
      answers: [0],
      explain: "Cây 3-phân đầy đủ (mỗi đỉnh trong có đúng 3 con). Để tối đa số đỉnh trong với chiều cao 3: mọi đỉnh ở mức 0, 1, 2 đều là đỉnh trong: 1 + 3 + 9 = 13 (mức 3 chỉ gồm lá)."
    },
    {
      n: 37,
      text: "Use Huffman coding to encode these symbols with given frequencies:<br>A: 0.3, B: 0.15, C: 0.25, D: 0.2, E: 0.1.<br>What is the average number of bits required to encode a character?",
      options: ["2.25", "2.05", "2.75", "3.15"],
      answers: [0],
      explain: "Huffman: gộp E(0.1) + B(0.15) = 0.25; gộp D(0.2) + C(0.25) = 0.45; gộp EB(0.25) + A(0.3) = 0.55; gộp 0.45 + 0.55 = 1. Độ sâu: A, D, C: 2 bit; E, B: 3 bit. Trung bình = 0.3·2 + 0.2·2 + 0.25·2 + 0.1·3 + 0.15·3 = 0.6 + 0.4 + 0.5 + 0.3 + 0.45 = 2.25 bit/ký tự."
    },
    {
      n: 38,
      text: "Given the message \"weekend\". Find the length of the bit string when encoding this message by a Huffman code.",
      options: ["15", "16", "14", "13", "12"],
      answers: [0],
      explain: "Tần suất: e: 3, w: 1, k: 1, n: 1, d: 1. Huffman: gộp w+k = 2; gộp n+d = 2; gộp (wk)+(nd) = 4; gộp e(3) + 4. Mã: e dài 1 bit; w, k, n, d dài 3 bit. \"weekend\" = e(1)+e(1)+e(1) + w(3)+k(3)+n(3)+d(3) = 3 + 12 = 15 bit."
    },
    {
      n: 39,
      text: "Find the postfix notation of the expression<br>x + ((x*y + x)/y)",
      options: ["x x y * x + y / +", "x x y * + x y / +", "None of the other choices is correct", "+ + x * x y / x y"],
      answers: [0],
      explain: "Dịch từ trong ra: x*y → x y *; (x*y) + x → x y * x +; chia cho y → x y * x + y /; cộng với x ban đầu → x x y * x + y / +. Kiểm tra bằng stack xác nhận đúng → A."
    },
    {
      n: 40,
      text: "What is the position of the letter f when using the <b>inorder</b> traversal?",
      options: ["10", "9", "11", "7", "8", "None of the other choices is correct"],
      answers: [0],
      explain: "Inorder (cây con trái – gốc – cây con phải): cây trái của a cho d, b, i, e, m, j, n, o; rồi a; cây phải bắt đầu bằng f. Trình tự: d, b, i, e, m, j, n, o, a, f, … → f đứng vị trí thứ 10.",
      image: "q40.png"
    },
    {
      n: 41,
      text: "How many different spanning trees does the graph K<sub>3,3</sub> have?",
      options: ["2", "3", "8", "4", "None of the other choices is correct"],
      answers: [4],
      explain: "Số cây khung của đồ thị hai phần đầy đủ K_{m,n} = m<sup>n−1</sup> · n<sup>m−1</sup>. Với K₃,₃: 3² · 3² = 81 → không có trong các lựa chọn → E."
    },
    {
      n: 42,
      text: "Using Kruskal's algorithm to find a minimal spanning tree.<br>What is the list of edges chosen? (See picture)",
      options: ["CE, BC, AB, BD, DZ", "CE, DZ, AB, BC, BD", "CE, BC, AB, DZ, BD", "CE, DZ, AB, BC, BE", "None of the other choices is correct"],
      answers: [1],
      explain: "Các cạnh theo trọng số tăng dần: CE(1), DZ(1), AB(2), BC(2), BD(3), BE(3), DE(4), EZ(4), AC(6). Kruskal chọn CE, DZ, AB, BC, BD — sau 5 cạnh, 6 đỉnh đã liên thông (BE, DE, EZ, AC bị loại vì tạo chu trình). Tổng trọng số = 1+1+2+2+3 = 9.",
      image: "q42.png"
    },
    {
      n: 43,
      text: "How many rows appear in a truth table for the compound proposition<br>\\((p \\land q \\land \\neg r) \\lor (\\neg p \\leftrightarrow s) \\lor (s \\to q)\\) ?",
      options: ["4", "8", "16", "32", "64"],
      answers: [2],
      explain: "Mệnh đề ghép có 4 biến mệnh đề phân biệt: p, q, r, s → bảng chân trị có 2⁴ = 16 hàng."
    },
    {
      n: 44,
      text: "Find a proposition with the given truth table:<br><table class=\"mini-table\"><tr><td>p</td><td>q</td><td>?</td></tr><tr><td>T</td><td>T</td><td>T</td></tr><tr><td>T</td><td>F</td><td>T</td></tr><tr><td>F</td><td>T</td><td>T</td></tr><tr><td>F</td><td>F</td><td>F</td></tr></table><br>(i) p → q&nbsp;&nbsp;&nbsp;(ii) q → p<br>(iii) p → ¬q&nbsp;&nbsp;&nbsp;(iv) ¬p → q",
      options: ["(i)", "(ii)", "(iii)", "(iv)"],
      answers: [3],
      explain: "Cột ? có giá trị T, T, T, F — chỉ sai tại (p, q) = (F, F). ¬p → q chỉ sai khi ¬p đúng và q sai, tức p = F và q = F ✓ → (iv). Kiểm tra: (i) sai tại (T,F); (ii) sai tại (F,T); (iii) sai tại (T,T)."
    },
    {
      n: 45,
      text: "Find the negation of the following proposition<br>\"Messi both scored and assisted yesterday.\"",
      options: ["Messi did not score or Messi did not assist yesterday.", "Messi assisted but did not score yesterday.", "Messi scored but did not assist yesterday.", "Messi did not score and also did not assist yesterday."],
      answers: [0],
      explain: "Phủ định của p ∧ q là ¬p ∨ ¬q (luật De Morgan): \"Messi KHÔNG ghi bàn HOẶC Messi KHÔNG kiến tạo\" → A. Lưu ý D (¬p ∧ ¬q) là phủ định mạnh hơn, chỉ đúng khi Messi không làm cả hai."
    },
    {
      n: 46,
      text: "Assume that the domain of x consists of all integer numbers.<br>Which proposition is true?<br>(i) ∀x(x &gt; 2x)<br>(ii) ∀x(x &gt; −x)<br>(iii) ∀x(x<sup>2</sup> ≥ x)<br>(iv) ∀x(x<sup>2</sup> ≥ 2x)",
      options: ["(i)", "(ii)", "(iii)", "(iv)"],
      answers: [2],
      explain: "(iii) đúng với mọi số nguyên: nếu x ≤ 0 thì x² ≥ 0 ≥ x; nếu x ≥ 1 thì x² ≥ x. (i) sai tại x = 1 (1 &gt; 2 sai); (ii) sai với mọi x &lt; 0; (iv) sai tại x = 1 (1 ≥ 2 sai)."
    },
    {
      n: 47,
      text: "Let P(x) be the statement \"x passed Discrete Mathematics\",<br>Q(x) be the statement \"x passed Calculus\".<br>Translate the sentence into a logical expression<br><i>\"Some student has not passed Discrete Mathematics and Calculus\"</i>.<br>(i) ∃x(¬P(x) ∧ ¬Q(x))<br>(ii) ∃x(¬P(x) ∨ ¬Q(x))<br>(iii) ∀x(¬P(x) ∧ ¬Q(x))<br>(iv) ∀x(¬P(x) ∨ ¬Q(x))",
      options: ["(i)", "(ii)", "(iii)", "(iv)", "None of the other choices is correct"],
      answers: [0],
      explain: "\"Some student\" → ∃x. \"has not passed Discrete Mathematics and Calculus\" = trượt cả hai môn: ¬P(x) ∧ ¬Q(x). Vậy ∃x(¬P(x) ∧ ¬Q(x)) → (i). (ii) chỉ nghĩa là trượt ít nhất một trong hai môn."
    },
    {
      n: 48,
      text: "Let L(x, y) = \"student x is good at subject y\"<br>F(x, y) = \"x and y are friends\".<br>What is logical expression of the sentence<br><i>\"No student has a friend who is good at every subject\"</i>?<br>(i) ¬∀x∃y(F(x, y) ∧ ∀zL(y, z))<br>(ii) ¬∃x∃y(F(x, y) ∧ ∀zL(y, z))<br>(iii) ¬∃x∀y(F(x, y) ∧ ∀zL(y, z))",
      options: ["(i)", "(ii)", "(iii)", "None of the other choices is correct"],
      answers: [1],
      explain: "\"student x has a friend y who is good at every subject\" = ∃x∃y(F(x, y) ∧ ∀z L(y, z)). \"No student...\" là phủ định của nó: ¬∃x∃y(F(x, y) ∧ ∀z L(y, z)) → (ii). (i) là phủ định của \"mọi sinh viên đều có bạn giỏi mọi môn\" — khác nghĩa."
    },
    {
      n: 49,
      text: "Find the negation of<br>\\(\\exists x \\forall y (P(x, y) \\leftrightarrow \\neg Q(x, y))\\)<br>(i) ∀x∃y(P(x, y) ↔ ¬Q(x, y))<br>(ii) ∃x∀y(P(x, y) ⊕ ¬Q(x, y))<br>(iii) ∀x∃y(P(x, y) ⊕ ¬Q(x, y))<br>(iv) ∃x∀y(P(x, y) ↔ Q(x, y))",
      options: ["(iii)", "(i)", "(ii)", "(iv)", "None of the other choices is correct"],
      answers: [0],
      explain: "Phủ định: ¬∃x∀y(...) = ∀x∃y ¬(P ↔ ¬Q). Vì ¬(P ↔ ¬Q) ≡ P ↔ Q ≡ P ⊕ ¬Q (P khác giá trị ¬Q tức P cùng giá trị Q), nên kết quả là ∀x∃y(P(x, y) ⊕ ¬Q(x, y)) → (iii)."
    },
    {
      n: 50,
      text: "Which statement(s) in the following is NOT a rule of inference?<br>(i) If you know P and P → Q, you may write down Q.<br>(ii) If you know ¬Q and P → Q, you may write down P.<br>(iii) If you know (P ∨ Q) and ¬P, you may write down Q.<br>(iv) If you know P and Q, you may write down P ∧ Q.",
      options: ["(i)", "(ii)", "(iii)", "(iv)", "None of the other choices is correct"],
      answers: [1],
      explain: "(i) là modus ponens ✓; (iii) là suy luận rời rạc (disjunctive syllogism) ✓; (iv) là luật hợp kết (conjunction) ✓. (ii) SAI: từ ¬Q và P → Q, modus tollens cho ta ¬P chứ không phải P → phát biểu (ii) không phải luật suy diễn."
    }
  ]
});