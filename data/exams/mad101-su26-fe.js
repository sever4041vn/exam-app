// MAD101 - Summer 2026 - Final Exam
// Nguồn: MAD101 - SU26 - FE.pdf (50 câu trắc nghiệm, Toán rời rạc)
window.EXAMAPP_EXAMS = window.EXAMAPP_EXAMS || [];
window.EXAMAPP_EXAMS.push({
  id: "mad101-su26-fe",
  subjectId: "MAD101",
  title: "MAD101 - Summer 2026 - Final Exam",
  originalFile: "MAD101 - SU26 - FE.pdf",
  semester: "Summer 2026",
  semesterKey: "su26",
  type: "Final Exam",
  typeKey: "final",
  durationMinutes: 60,
  imagePath: "images/mad101/su26-fe/",
  questions: [
    {
      n: 1,
      text: "Consider the argument with the hypotheses:<br>\" I will be happy if your project succeeds.<br>Your project can become successful only if you change the method. \"<br>and the conclusion:<br>\" Therefore, if you change the method, then I will be very happy. \"<br>Choose the right answer.",
      options: ["The argument is valid using hypothetical syllogism", "The argument is invalid", "The argument is valid using modus tollens", "The argument is valid using simplification", "The argument is valid using modus ponens"],
      answers: [1],
      explain: "Gọi p = \"dự án thành công\", q = \"tôi hạnh phúc\", r = \"bạn thay đổi phương pháp\". Tiền đề 1: p → q. Tiền đề 2 (dạng \"p only if r\"): p → r. Kết luận: r → q. Từ p→q và p→r không thể suy ra r→q: xét r = T, p = F, q = F thì cả hai tiền đề đều đúng nhưng kết luận sai. Vậy lập luận không hợp lệ (invalid)."
    },
    {
      n: 2,
      text: "Which set has the most number of elements?<br>(i) {x | x is an even integer and |x| < 11}<br>(ii) {x | x is an odd integer and |x| < 11}<br>(iii) {x | x is a prime number and x < 30}",
      options: ["(i)", "(ii)", "(iii)"],
      answers: [0],
      explain: "(i) số chẵn với |x| < 11: −10, −8, …, 10 → 11 phần tử. (ii) số lẻ: ±1, ±3, ±5, ±7, ±9 → 10 phần tử. (iii) số nguyên tố < 30: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 → 10 phần tử. Vậy (i) có nhiều phần tử nhất."
    },
    {
      n: 3,
      text: "Let A, B be sets such that |B| = |A| + 1. Assume that the set A × B has 90 elements. Find |A|.",
      options: ["9", "None of the other choices is correct", "8", "10", "12"],
      answers: [0],
      explain: "|A × B| = |A|·|B| = |A|(|A| + 1) = 90. Thử n = 9: 9 × 10 = 90 ✓. Vậy |A| = 9, |B| = 10."
    },
    {
      n: 4,
      text: "Find the sets A and B if A − B = {1, 4, 5, 8}, B − A = {2, 7, 10}, and A ∩ B = {3, 9}.",
      options: ["A = {1, 4, 5, 8}, B = {2, 7, 10}", "A = {2, 7, 10}, B = {1, 4, 5, 8}", "A = {1, 2, 4, 5, 7, 8, 10}, B = {2, 3, 7, 9, 10}", "A = {1, 3, 4, 5, 8, 9}, B = {2, 3, 7, 9, 10}", "None of the other choices is correct"],
      answers: [3],
      explain: "A = (A − B) ∪ (A ∩ B) = {1,4,5,8} ∪ {3,9} = {1,3,4,5,8,9}; B = (B − A) ∪ (A ∩ B) = {2,7,10} ∪ {3,9} = {2,3,7,9,10}. Cặp A, B này thỏa cả ba điều kiện đã cho."
    },
    {
      n: 5,
      text: "Let f: ℤ → ℕ be the function defined as follows: f(n) = −2n if n < 0; f(n) = 2n + 1 if n ≥ 0. Choose the correct answer.",
      options: ["f is one-to-one but not onto.", "f is onto but not one-to-one.", "f is both one-to-one and onto.", "f is neither one-to-one nor onto."],
      answers: [2],
      explain: "Với ℕ = {1, 2, 3, …}: nhánh n < 0 cho −2n = 2, 4, 6, … (số dương chẵn); nhánh n ≥ 0 cho 2n + 1 = 1, 3, 5, … (số dương lẻ). Hai nhánh không giao nhau (không có x khác nhau cùng cho một giá trị) và hợp lại phủ toàn bộ ℕ → f là song ánh (vừa đơn ánh vừa toàn ánh)."
    },
    {
      n: 6,
      text: "Let ℕ = {0, 1, 2, …}. Let f, g be two functions from ℕ to ℕ with f(x) = x<sup>2</sup> + 1 and g(x) = x + 1. Which functions are one-to-one?",
      options: ["None of the other choices is correct", "g", "f", "f and g"],
      answers: [3],
      explain: "Cả hai đều đơn ánh trên ℕ: nếu x₁ ≠ x₂ thì x₁² + 1 ≠ x₂² + 1 (vì x ↦ x² đơn ánh trên các số không âm), và x₁ + 1 ≠ x₂ + 1. Vậy f và g cùng là đơn ánh."
    },
    {
      n: 7,
      text: "Find \\(\\sum_{i=1}^{100} (-1)^i\\).",
      options: ["100", "5050", "50", "0"],
      answers: [3],
      explain: "\\(\\sum_{i=1}^{100} (-1)^i\\) gồm 50 số hạng −1 (i lẻ) và 50 số hạng +1 (i chẵn) xen kẽ → tổng = 0."
    },
    {
      n: 8,
      text: "What is the output of this finite algorithm?<br><pre class=\"algo\">procedure t(a<sub>1</sub>, …, a<sub>n</sub>: integers)<br>  d := 0<br>  For i := 1 to n do<br>    if a<sub>i</sub> &lt; 0 then d := d + 1<br>  Print(d)</pre>",
      options: ["The number of elements in a list of integers", "The sum of all negative elements in a list of integers", "The number of negative elements in a list of integers", "The sum of all elements in a list of integers", "None of the other choices is correct"],
      answers: [2],
      explain: "Biến d chỉ tăng lên 1 đơn vị mỗi khi gặp một phần tử âm; nó không cộng giá trị phần tử. Vậy thuật toán đếm số phần tử âm trong danh sách."
    },
    {
      n: 9,
      text: "Given the Insertion sort algorithm:<br><pre class=\"algo\">procedure InsertionSort(a<sub>1</sub>, …, a<sub>n</sub>: integers)<br>  for j := 2 to n<br>    i := 1<br>    while i &lt; j<br>      if a<sub>i</sub> &lt; a<sub>j</sub> then i := i + 1<br>      else<br>        temp := a<sub>j</sub><br>        for k := 0 to i − j − 1<br>          a<sub>j−k</sub> := a<sub>j−k−1</sub><br>        a<sub>i</sub> := temp</pre><br>If input = 7, 2, 4, 3, 1, 6, 5, after running the outer loop with i = 5, the order of the elements in the list is ________.",
      options: ["1, 2, 3, 4, 7, 6, 5", "2, 3, 4, 7, 1, 6, 5", "2, 4, 7, 3, 1, 6, 5", "1, 2, 3, 4, 5, 6, 7"],
      answers: [0],
      explain: "Chạy vòng ngoài j = 2 → 5: j=2: 2,7,4,3,1,6,5; j=3: 2,4,7,3,1,6,5; j=4: 2,3,4,7,1,6,5; j=5: chèn 1 lên đầu → 1,2,3,4,7,6,5. (Danh sách chỉ sắp hoàn toàn sau j = 7.)"
    },
    {
      n: 10,
      text: "Find the least integer n such that f(x) is O(x<sup>n</sup>).<br>\\(f(x) = \\dfrac{(x^3 + 7x^2 + 3)^2}{(2x + 1)^2}\\)",
      options: ["3", "4", "2", "1", "None of the other choices is correct"],
      answers: [1],
      explain: "Tử số (x³ + 7x² + 3)² có bậc 6; mẫu số (2x + 1)² có bậc 2 → f(x) ~ x⁶/x² = x⁴/4. Vậy bậc nhỏ nhất là n = 4."
    },
    {
      n: 11,
      text: "Given the algorithm<br><pre class=\"algo\">Procedure product(n: integer)<br>  p := 0<br>  for i := 1 to n do<br>    for j := 1 to (n + 1) do<br>      for k := 1 to (n + 2) do<br>        p := i * j * k<br>  Print(p)</pre><br>How many multiplications are used if n = 5?",
      options: ["420", "210", "125", "250"],
      answers: [0],
      explain: "Vòng lặp trong cùng thực hiện n(n+1)(n+2) = 5·6·7 = 210 lần; mỗi lần tính p := i*j*k dùng 2 phép nhân (i*j rồi (i*j)*k) → tổng 2 × 210 = 420 phép nhân."
    },
    {
      n: 12,
      text: "A pseudorandom number sequence is generated as follows:<br>\\(x_0 = 2,\\quad x_n = (3x_{n-1} + 2) \\bmod 11.\\)<br>Find x<sub>5</sub>.",
      options: ["5", "8", "3", "4", "None of the other choices is correct"],
      answers: [4],
      explain: "x₁ = (3·2+2) mod 11 = 8; x₂ = (3·8+2) mod 11 = 26 mod 11 = 4; x₃ = (3·4+2) mod 11 = 3; x₄ = (3·3+2) mod 11 = 0; x₅ = (3·0+2) mod 11 = 2. Vì 2 không nằm trong các lựa chọn → đáp án E."
    },
    {
      n: 13,
      text: "Let {x<sub>n</sub>} be a sequence of pseudorandom numbers such that<br>\\(x_{n+1} = 3x_n \\bmod 11 \\text{ for } n > 0\\)<br>Suppose x<sub>3</sub> = 7. Find x<sub>2</sub> and x<sub>4</sub>.",
      options: ["6 and 10", "6 and 21", "2 and 10", "3 and 10", "None of the other choices is correct"],
      answers: [0],
      explain: "x₄ = 3·7 mod 11 = 21 mod 11 = 10. Tìm x₂: 3x₂ ≡ 7 (mod 11) → x₂ ≡ 7·3⁻¹ (mod 11). Nghịch đảo 3⁻¹ mod 11 = 4 (vì 3·4 = 12 ≡ 1) → x₂ = 28 mod 11 = 6. Vậy x₂ = 6 và x₄ = 10."
    },
    {
      n: 14,
      text: "Let m = 7<sup>5</sup> 11<sup>12</sup> 13<sup>90</sup> and mn = 2<sup>4</sup> 7<sup>8</sup> 11<sup>26</sup> 13<sup>90</sup>. Find gcd(m, n).",
      options: ["(i) 11<sup>4</sup> 13<sup>90</sup>", "(ii) 2<sup>4</sup> 7<sup>90</sup>", "(iii) 11<sup>4</sup> 7<sup>5</sup>", "(iv) 7<sup>3</sup> 11<sup>12</sup>"],
      answers: [3],
      explain: "mn là tích m·n, nên n = mn / m = 2⁴·7³·11¹⁴ (13 bị triệt tiêu). gcd(m, n) = 7^min(5,3) · 11^min(12,14) = 7³·11¹² → (iv)."
    },
    {
      n: 15,
      text: "Let m = 29<sup>5</sup> 31<sup>12</sup> 37<sup>90</sup> and n = 29<sup>4</sup> 17<sup>3</sup> 37<sup>14</sup>. Choose the correct statements:<br>(i) gcd(m, n) = 29<sup>4</sup> 37<sup>14</sup><br>(ii) gcd(m, n) = 29<sup>5</sup> 37<sup>90</sup><br>(iii) lcm(m, n) = 29<sup>5</sup> 37<sup>90</sup> 31<sup>12</sup> 17<sup>3</sup>",
      options: ["(i), (ii)", "(ii), (iii)", "(iii), (i)", "(i)", "(iii)", "None of the other choices is correct"],
      answers: [2],
      explain: "gcd lấy lũy thừa nhỏ cho mỗi thừa số chung: 29⁴·37¹⁴ → (i) đúng, (ii) sai. lcm lấy lũy thừa lớn cho mọi thừa số: 29⁵·31¹²·37⁹⁰·17³ → (iii) đúng. Vậy các phát biểu đúng là (iii) và (i)."
    },
    {
      n: 16,
      text: "Find 11! mod 101.",
      options: ["57", "58", "59", "60", "None of the other choices is correct"],
      answers: [4],
      explain: "11! = 39 916 800. Chia cho 101: 101 × 395 215 = 39 916 715, số dư 39 916 800 − 39 916 715 = 85 → 11! ≡ 85 (mod 101). 85 không có trong các lựa chọn → E."
    },
    {
      n: 17,
      text: "Find the greatest common divisor of 667 and 1189.",
      options: ["41", "23", "29", "31", "None of the other choices is correct"],
      answers: [2],
      explain: "Thuật toán Euclid: 1189 = 1·667 + 522; 667 = 1·522 + 145; 522 = 3·145 + 87; 145 = 1·87 + 58; 87 = 1·58 + 29; 58 = 2·29 + 0 → gcd = 29."
    },
    {
      n: 18,
      text: "Find the correct order of the steps of the proof by induction of the following problem:<br>Problem: Prove that for all n ≥ 12 we have n = 4a + 5b with a, b non-negative integers.<br><b>Step 1.</b> Suppose for some k ≥ 16 we have n = 4x + 5y with x, y non-negative integers for all n ≤ k.<br><b>Step 2.</b> n = 12 we have 12 = 4×3 + 5×0; n = 13 we have 13 = 4×2 + 5×1; n = 14 we have 14 = 4×1 + 5×2; n = 15 we have 15 = 4×0 + 5×3. So for all n ≥ 12 we have n = 4a + 5b with a, b non-negative integers.<br><b>Step 3.</b> So for all n ≥ 12 we have n = 4a + 5b with a, b non-negative integers.<br><b>Step 4.</b> For n = k + 1 we have k + 1 = 1×4 + (k − 3). Since 12 ≤ k − 3 &lt; k, by induction hypothesis we have k − 3 = 4a + 5b for some non-negative integers a and b. Then k + 1 = 4(a+1) + 5b.",
      options: ["2, 1, 4, 3", "1, 2, 4, 3", "2, 1, 3, 4", "1, 2, 3, 4"],
      answers: [0],
      explain: "Trình tự chuẩn của quy nạp mạnh: (2) kiểm tra các trường hợp cơ sở 12–15 → (1) phát biểu giả thiết quy nạp → (4) bước quy nạp cho n = k + 1 → (3) kết luận. Vậy thứ tự đúng là 2, 1, 4, 3."
    },
    {
      n: 19,
      text: "Find a recursive relation for the sequence {a<sub>n</sub> = n<sup>2</sup> − n + 1}.<br>(i) a<sub>1</sub> = 1, a<sub>n+1</sub> = a<sub>n</sub> + 2n + 1, n ≥ 1<br>(ii) a<sub>1</sub> = 1, a<sub>n+1</sub> = a<sub>n</sub> + 2n, n ≥ 1<br>(iii) a<sub>1</sub> = 1, a<sub>n+1</sub> = a<sub>n</sub> + 2n − 1, n ≥ 1<br>(iv) a<sub>1</sub> = 1, a<sub>n+1</sub> = a<sub>n</sub> + 2n − 2, n ≥ 1",
      options: ["(ii)", "(iv)", "(i)", "(iii)", "None of the other choices is correct"],
      answers: [0],
      explain: "a_{n+1} − a_n = [(n+1)² − (n+1)] − [n² − n] = 2n. Với a₁ = 1 (khi n = 1: 1 − 1 + 1 = 1), ta có a_{n+1} = a_n + 2n → đúng (ii)."
    },
    {
      n: 20,
      text: "Give a recursive definition of the sequence<br>{a<sub>n</sub> = 5n}, n = 1, 2, 3, …<br>(i) a<sub>0</sub> = 0, a<sub>n</sub> = a<sub>n−1</sub> + 5 for n = 1, 2, 3, …<br>(ii) a<sub>1</sub> = 1, a<sub>n</sub> = a<sub>n−1</sub> + 5 for n = 2, 3, …<br>(iii) a<sub>1</sub> = 5, a<sub>n−1</sub> = a<sub>n</sub> + 5 for n = 2, 3, …<br>(iv) a<sub>1</sub> = 5, a<sub>n</sub> = a<sub>n−1</sub> + 5 for n = 2, 3, …",
      options: ["(i)", "(ii)", "(iii)", "(iv)", "None of the other choices"],
      answers: [3],
      explain: "Định nghĩa đệ quy đúng cần giá trị đầu a₁ = 5 và công thức truy hồi aₙ = a_{n−1} + 5 với n ≥ 2 → (iv). Lưu ý (iii) viết ngược chiều a_{n−1} = aₙ + 5 là sai; (ii) cho a₁ = 1 sai giá trị đầu."
    },
    {
      n: 21,
      text: "How many comparisons are needed to merge the two lists<br>1, 3, 5, 7, 9, 10 and 2, 4, 6, 8, 9?",
      options: ["6", "7", "8", "9", "10"],
      answers: [4],
      explain: "Trường hợp xấu nhất khi trộn hai danh sách dài m và n là m + n − 1 phép so sánh. Ở đây 6 + 5 − 1 = 10: so sánh 1v2, 3v2, 3v4, 5v4, 5v6, 7v6, 7v8, 9v8, 9v9, 10v9 — sau 10 phép so sánh danh sách thứ hai cạn."
    },
    {
      n: 22,
      text: "How many comparisons are needed to merge two ordered lists:<br>[2, 3, 5, 6] and [1, 4] to an increasingly ordered list?",
      options: ["4", "5", "3", "6"],
      answers: [0],
      explain: "So sánh 2v1 → lấy 1; 2v4 → lấy 2; 3v4 → lấy 3; 5v4 → lấy 4. Sau 4 phép so sánh, danh sách [1,4] đã cạn; phần còn lại (5, 6) được chép trực tiếp mà không cần so sánh. Tổng: 4."
    },
    {
      n: 23,
      text: "How many strings of three decimal digits have exactly two digits that are 4s?",
      options: ["27", "28", "29", "30"],
      answers: [0],
      explain: "Chọn 2 vị trí cho chữ số 4: C(3,2) = 3 cách; vị trí còn lại nhận một chữ số khác 4: 9 cách. Tổng: 3 × 9 = 27 xâu."
    },
    {
      n: 24,
      text: "In a wedding: How many ways to arrange 5 people in a row (including the bride and the groom), so that the bride stands somewhere on the right of the groom?",
      options: ["120", "60", "10", "100", "None of the other choices is correct"],
      answers: [1],
      explain: "Có 5! = 120 hoán vị. Với mỗi hoán vị có chú rể trước cô dâu, đổi chỗ hai người cho một hoán vị đối xứng ngược lại → đúng một nửa số hoán vị có cô dâu bên phải chú rể: 120 / 2 = 60."
    },
    {
      n: 25,
      text: "Let a<sub>n</sub> be the number of ways to score exactly n points in a game (for n ≥ 3) if a player can score 1, 2, or 3 points in a single move. Which of the following recurrence relations can be used to determine a<sub>n</sub>, given the appropriate initial conditions?<br>(i) a<sub>n</sub> = a<sub>n−1</sub> + a<sub>n−3</sub><br>(ii) a<sub>n</sub> = 2a<sub>n−1</sub> + a<sub>n−2</sub><br>(iii) a<sub>n</sub> = a<sub>n−1</sub> + 2a<sub>n−2</sub> + 3a<sub>n−3</sub><br>(iv) a<sub>n</sub> = a<sub>n−1</sub> + a<sub>n−2</sub> + a<sub>n−3</sub><br>(v) a<sub>n</sub> = a<sub>n−1</sub> + 2a<sub>n−2</sub> + a<sub>n−3</sub>",
      options: ["(i)", "(ii)", "(iii)", "(iv)", "(v)"],
      answers: [3],
      explain: "Nhìn vào lượt ghi điểm cuối cùng: nó là 1, 2 hoặc 3 điểm. Nếu cuối là 1 điểm thì n−1 điểm đầu có a_{n−1} cách; cuối là 2 điểm → a_{n−2} cách; cuối là 3 điểm → a_{n−3} cách. Vậy aₙ = a_{n−1} + a_{n−2} + a_{n−3} (dãy tribonacci) → (iv)."
    },
    {
      n: 26,
      text: "Find f(25) if f(1) = 3 and f(n) = f(n/5) + n<sup>2</sup>/3.",
      options: ["784/3", "659/3", "34/3", "3", "None of the other choices is correct"],
      answers: [1],
      explain: "f(5) = f(1) + 25/3 = 3 + 25/3 = 34/3; f(25) = f(5) + 625/3 = 34/3 + 625/3 = 659/3."
    },
    {
      n: 27,
      text: "Which of the following graphs is (are) bipartite?",
      options: ["H", "Both G and H.", "G", "Neither G nor H."],
      answers: [3],
      explain: "Một đồ thị phân đôi khi và chỉ khi không chứa chu trình độ dài lẻ. Đồ thị G chứa tam giác a–b–e (cạnh a–b, a–e và b–e) nên không phân đôi. Đồ thị H chứa tam giác a–b–f (cạnh a–b, a–f và b–f) nên cũng không phân đôi. Vậy cả hai đều không phải đồ thị phân đôi.",
      image: "q27.png"
    },
    {
      n: 28,
      text: "Fill in the blank: \"The graph … has … edges\":<br>(i) C<sub>n</sub>, 2n<br>(ii) K<sub>m,n</sub>, mn<br>(iii) W<sub>n</sub>, 2n + 1<br>(iv) K<sub>n</sub>, n<sup>2</sup>",
      options: ["(iv)", "None of the other choices is correct", "(ii)", "(i)", "(iii)"],
      answers: [2],
      explain: "C_n (chu trình n đỉnh) có n cạnh, không phải 2n → (i) sai. K_{m,n} có m·n cạnh ✓ → (ii) đúng. W_n (bánh xe trên n+1 đỉnh) có 2n cạnh, không phải 2n+1 → (iii) sai. K_n có n(n−1)/2 cạnh, không phải n² → (iv) sai."
    },
    {
      n: 29,
      text: "Are these two graphs isomorphic? If not, what is the reason?",
      options: ["Yes, they are isomorphic", "No, they are not isomorphic because they do not have the same number of edges", "No, they are not isomorphic because they do not have the same number of vertices of degree 4", "No, they are not isomorphic because they do not have the same number of simple circuits of length 3", "None of the other choices is correct"],
      answers: [0],
      explain: "Cả hai đồ thị đều có 5 đỉnh, 8 cạnh, cùng dãy bậc (4, 3, 3, 3, 3), cùng 4 chu trình tam giác, và đỉnh bậc 4 đều kề với tất cả đỉnh còn lại; bốn đỉnh còn lại tạo thành một chu trình 4 đỉnh ở cả hai đồ thị → đồng cấu. Có thể lập đẳng cấu ánh xạ đỉnh bậc 4 ↔ đỉnh giữa và giữ nguyên chu trình 4 đỉnh."
    },
    {
      n: 30,
      text: "Are these two graphs isomorphic? If not, what is the reason?",
      options: ["No, they are not isomorphic because they do not have the same number of connected components", "No, they are not isomorphic because they do not have the same number of vertices of degree 2", "No, they are not isomorphic because they do not have the same number of edges", "Yes, they are isomorphic", "None of the other choices is correct"],
      answers: [3],
      explain: "Cả hai đều là sao 7 cánh vẽ theo bước nhảy 2 ({7/2}) và bước nhảy 3 ({7/3}) trên 7 đỉnh — xét về cấu trúc mỗi đồ thị chỉ là một chu trình đơn C₇: 7 đỉnh bậc 2, 7 cạnh, liên thông. Hai chu trình cùng độ dài luôn đẳng cấu → hai đồ thị đồng cấu."
    },
    {
      n: 31,
      text: "Find the TOTAL number of cut-edges in the two graphs.",
      options: ["0", "1", "2", "3", "4", "None of the other choices is correct"],
      answers: [0],
      explain: "Đồ thị X là sao 5 cánh, bản chất là chu trình C₅ — mọi cạnh đều nằm trên chu trình nên không có cầu. Đồ thị Y gồm hai tam giác chung một đỉnh — mọi cạnh cũng nằm trên một tam giác nên không có cầu. Tổng số cầu = 0. (Cạnh là cầu khi nó không thuộc bất kỳ chu trình nào.)",
      image: "q31.png"
    },
    {
      n: 32,
      text: "How many paths of length 3 between two different vertices in the graph K<sub>4</sub>?",
      options: ["5", "9", "3", "7", "None of the other choices is correct"],
      answers: [3],
      explain: "Số đường đi (walk) độ dài k giữa hai đỉnh phân biệt trong K_n là ((n−1)^k − (−1)^k)/n. Với n = 4, k = 3: (3³ + 1)/4 = 28/4 = 7. Có thể đếm trực tiếp: u–x–y–v với (x,y) ≠ các cặp bị cấm cho đúng 7 đường."
    },
    {
      n: 33,
      text: "Which graphs have Euler paths?<br>(i) K<sub>1,2</sub>  (ii) K<sub>3</sub>  (iii) K<sub>2,3</sub>  (iv) Q<sub>3</sub>",
      options: ["(i), (ii) and (iii)", "Only (iii)", "Only (iv)", "(i) and (iv)"],
      answers: [0],
      explain: "Đồ thị liên thông có đường Euler ⟺ có 0 hoặc 2 đỉnh bậc lẻ. K₁,₂: bậc 2, 1, 1 → đúng 2 lẻ ✓. K₃: mọi đỉnh bậc 2 → có chu trình Euler (cũng là đường Euler) ✓. K₂,₃: hai đỉnh bậc 3, ba đỉnh bậc 2 → đúng 2 lẻ ✓. Q₃: 8 đỉnh cùng bậc 3 → 8 đỉnh lẻ ✗. Vậy (i), (ii), (iii) đều có."
    },
    {
      n: 34,
      text: "What is the length of a Hamilton circuit in the graph Q<sub>3</sub>?",
      options: ["8", "7", "12", "3"],
      answers: [0],
      explain: "Q₃ là đồ thị khối lập phương 3 chiều với 8 đỉnh. Chu trình Hamilton phải đi qua đúng mỗi đỉnh một lần rồi quay về → độ dài bằng số đỉnh = 8 cạnh. (Q₃ là đồ thị Hamilton.)"
    },
    {
      n: 35,
      text: "What is the shortest distance between A and G?",
      options: ["18", "19", "20", "21"],
      answers: [1],
      explain: "Dijkstra từ A: d(B) = 4 (A–B); d(C) = 8 (A–C); d(E) = min(4+5, 8+6) = 9; d(D) = min(4+9, 9+4) = 13; d(F) = min(9+3, 8+5, 13+6) = 12; d(G) = min(13+8, 12+7) = 19. Đường đi ngắn nhất: A–B–E–F–G = 4 + 5 + 3 + 7 = 19.",
      image: "q35.png"
    },
    {
      n: 36,
      text: "What is the maximum height of a full binary tree with 101 vertices?",
      options: ["50", "100", "6", "101", "None of the other choices is correct"],
      answers: [0],
      explain: "Cây nhị phân đầy đủ (mọi đỉnh trong có đúng 2 con) chiều cao h cần ít nhất 2h + 1 đỉnh: mỗi mức chỉ giữ một nhánh \"xương sống\", mỗi đỉnh xương sống kèm đúng một lá phụ. 2h + 1 ≤ 101 → h ≤ 50. Chiều cao tối đa = 50."
    },
    {
      n: 37,
      text: "How many non-isomorphic trees of 4 vertices?",
      options: ["4", "None of the other choices is correct", "3", "2", "1"],
      answers: [3],
      explain: "Cây 4 đỉnh có đúng 2 kiểu cấu trúc khác nhau: đường đi P₄ (bậc 2,2,1,1) và sao K₁,₃ (bậc 3,1,1,1). Mọi cây 4 đỉnh khác đều đẳng cấu với một trong hai kiểu này."
    },
    {
      n: 38,
      text: "Find the length of the bit string obtained by using Huffman coding to encode the message \"AILILI\".",
      options: ["6", "12", "9", "None of the other choices is correct", "15"],
      answers: [2],
      explain: "Tần suất: A: 1, L: 2, I: 3. Huffman: gộp A(1) + L(2) = 3, rồi gộp nút này với I(3) → gốc. Mã: I dài 1 bit, A và L dài 2 bit. \"AILILI\" = A(2) + I(1) + L(2) + I(1) + L(2) + I(1) = 9 bit."
    },
    {
      n: 39,
      text: "What is the height of the binary search tree of the following list?<br>(4, 11, 1, 5, 7, 9, 0, 2, 8, 13)",
      options: ["2", "3", "4", "5", "None of the other choices is correct"],
      answers: [3],
      explain: "Chèn lần lượt: gốc 4; 11 → phải 4; 1 → trái 4; 5 → trái 11; 7 → phải 5; 9 → phải 7; 0 → trái 1; 2 → phải 1; 8 → 4→11→5→7→9 rồi 8 &lt; 9 → trái 9 (mức 5); 13 → phải 11. Đỉnh 8 nằm ở mức 5 → chiều cao cây = 5."
    },
    {
      n: 40,
      text: "Compute the value of the postfix notation<br>5 6 7 − *",
      options: ["5", "−5", "37", "None of the other choices is correct", "−37"],
      answers: [1],
      explain: "Duyệt hậu tố bằng stack: gặp 5, 6, 7 → [5, 6, 7]; gặp − → 6 − 7 = −1 → [5, −1]; gặp * → 5 × (−1) = −5. Kết quả: −5."
    },
    {
      n: 41,
      text: "Find the prefix notation for the expression<br>a / b + (c − d) * e",
      options: ["/ab+cd−e*", "None of the other choices is correct", "+/ab*−cde", "ab/cd−e*+"],
      answers: [2],
      explain: "a/b → /ab; c − d → −cd; (c − d)*e → *−cde; tổng hai vế → + /ab *−cde, viết liền: \"+/ab*−cde\"."
    },
    {
      n: 42,
      text: "What is the height of the spanning tree obtained from the complete bipartite graph K<sub>4,3</sub> by <b>depth-first search</b>, starting at a vertex of degree 4?",
      options: ["4", "3", "1", "5", "None of the other choices", "2"],
      answers: [3],
      explain: "Đỉnh bậc 4 thuộc phần gồm 3 đỉnh của K₄,₃. DFS đi sâu tối đa: v → a₁ → b₂ → a₂ → b₃ → a₃ (độ sâu 5), sau đó quay lại b₃ để thăm a₄. Cây DFS có 7 đỉnh và chiều cao 5."
    },
    {
      n: 43,
      text: "What is the total weight of a minimal spanning tree of the graph?",
      options: ["14", "13", "15", "12", "None of the other choices is correct"],
      answers: [3],
      explain: "Thuật toán Kruskal với các cạnh: AB(2), BC(2), DZ(2), BD(3), BE(3), EZ(3), CE(4), DE(4), AC(6). Chọn AB, BC, DZ, BD, BE (EZ bị loại vì Z đã nối; CE, DE, AC tạo chu trình) — đủ 5 cạnh cho 6 đỉnh. Tổng trọng số = 2+2+2+3+3 = 12.",
      image: "q43.png"
    },
    {
      n: 44,
      text: "Choose a triple of values of p, q, r such that the proposition<br>\\((p \\to q) \\land r\\)<br>is True.",
      options: ["p=T, q=F, r=T", "p=q=r=F", "p=F, q=T, r=F", "p=F, q=F, r=T", "None of the mentioned"],
      answers: [3],
      explain: "(p → q) ∧ r = T cần r = T và p → q = T. Kiểm tra D: (F → F) ∧ T = T ∧ T = T ✓. A: (T → F) ∧ T = F ✗; B: (F → F) ∧ F = F ✗; C: r = F ✗."
    },
    {
      n: 45,
      text: "Given the propositions<br>p = \"Tom washed the car\" and<br>q = \"Tom went to mercantile\".<br>Express the following sentence into a logical expression:<br><i>\"Tom neither washed the car nor went to mercantile\"</i>.<br>(i) ¬(p ∨ q)&nbsp;&nbsp;&nbsp;(ii) ¬(p ∧ q)<br>(iii) ¬p ∨ q&nbsp;&nbsp;&nbsp;(iv) p ∨ ¬q",
      options: ["(i)", "(ii)", "(iii)", "(iv)"],
      answers: [0],
      explain: "\"Neither p nor q\" nghĩa là p sai và q sai: ¬p ∧ ¬q. Theo luật De Morgan, ¬p ∧ ¬q ≡ ¬(p ∨ q) → (i)."
    },
    {
      n: 46,
      text: "Which of the following is a tautology?<br>i. (p ∧ q) → (p → q)<br>ii. (p ∨ q) → (p → q)",
      options: ["Both (i) and (ii)", "None of the other choices is correct", "(i)", "(ii)"],
      answers: [2],
      explain: "(i) luôn đúng: nếu p ∧ q đúng thì q đúng, suy ra p → q đúng; nếu p ∧ q sai thì mệnh đề đúng vacuously. (ii) không phải tautology: tại p = T, q = F thì p ∨ q = T nhưng p → q = F. Vậy chỉ (i) là tautology."
    },
    {
      n: 47,
      text: "Let C(x) be the statement \"x is a student in your school\",<br>P(x) the statement \"x plays badminton\",<br>J(x) the statement \"x knows the computer language Java.\"<br>The domain for quantifiers consists of all people.<br>Express the sentence<br><i>\"Some students at your school either play badminton or know Java, or both.\"</i><br>in terms of C(x), P(x), J(x), quantifiers, and logical connectives:<br>(i) ∃x (C(x) ∧ (P(x) ∨ J(x)))<br>(ii) ∃x (C(x) → (P(x) ∨ J(x)))<br>(iii) ∃x (C(x) → (P(x) ⊕ J(x)))<br>(iv) ∃x (C(x) ∧ (P(x) ⊕ J(x)))",
      options: ["(i)", "(ii)", "(iii)", "(iv)"],
      answers: [0],
      explain: "\"Some students at your school\" → ∃x với điều kiện C(x) (dùng ∧, không phải →). \"Either play badminton or know Java, or both\" → hợp inclusive (hoặc bao trừ) → P(x) ∨ J(x). Vậy ∃x(C(x) ∧ (P(x) ∨ J(x))) → (i)."
    },
    {
      n: 48,
      text: "Which statements are <b>False</b> over the domain of positive integers?<br>(i) ∀x (x<sup>2</sup> &gt; x)<br>(ii) ∃x(x<sup>2</sup> ≥ x)<br>(iii) ∀x(|x| &gt; 0)",
      options: ["Only (i)", "Only (ii)", "Only (iii)", "None of the other choices is correct"],
      answers: [0],
      explain: "(i) False: tại x = 1, 1 &gt; 1 là sai. (ii) True: x = 1 thỏa 1 ≥ 1. (iii) True: với số nguyên dương, |x| = x &gt; 0. Vậy chỉ (i) là False."
    },
    {
      n: 49,
      text: "Let F(x, y) be the statement \"x can fool y\" where the domain consists of all people in the world.<br>Translate the sentence into a logical expression<br><i>\"There is exactly one person whom everybody can fool.\"</i><br>(i) ∃y∀xF(x, y)<br>(ii) ∀y∃xF(x, y)<br>(iii) ∃y(∀xF(x, y) ∧ ∀z(∀xF(x, z) → y = z))<br>(iv) ∃y(∀xF(x, y) ∧ ∃z(∀xF(x, z) → y = z))",
      options: ["(i)", "(ii)", "(iii)", "None of the other choices is correct", "(iv)"],
      answers: [2],
      explain: "\"Exactly one\" = tồn tại y mà mọi người lừa được, và bất kỳ người z nào cũng bị mọi người lừa thì z phải là y: ∃y(∀xF(x,y) ∧ ∀z(∀xF(x,z) → y = z)) → (iii). (i) chỉ nói có một người bị tất cả lừa, không loại trừ việc có thêm người khác cũng bị tất cả lừa."
    },
    {
      n: 50,
      text: "Let<br>P(x) = \"x is a student\"<br>Q(x, y) = \"x knows the programming language y\"<br>Translate the sentence into a logical expression<br><i>\"Every student knows some programming language\"</i><br>(i) ∀y∃x(P(x) → Q(x, y))<br>(ii) ∀x∃y(P(x) → Q(x, y))<br>(iii) ∀x∃y(P(x) ∧ Q(x, y))<br>(iv) ∀y∃x(P(x) ∧ Q(x, y))",
      options: ["(iii)", "(i)", "(ii)", "(iv)", "None of the other choices is correct"],
      answers: [2],
      explain: "\"Every student knows some programming language\" = ∀x(P(x) → ∃y Q(x, y)) ≡ ∀x∃y(P(x) → Q(x, y)) → (ii). Lưu ý (iii) ∀x∃y(P(x) ∧ Q(x,y)) sai vì nó yêu cầu mọi người x (kể cả không phải sinh viên) đều biết ngôn ngữ nào đó."
    }
  ]
});
