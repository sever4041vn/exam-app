// OSG202 - Fall 2025 - Final Exam
// Nguồn: OSG202 - FA25 - FE.pdf (50 câu hỏi trắc nghiệm, format FUO 2 cột)
window.EXAMAPP_EXAMS = window.EXAMAPP_EXAMS || [];
window.EXAMAPP_EXAMS.push({
  id: "osg202-fa25-fe",
  subjectId: "OSG202",
  title: "OSG202 - Fall 2025 - Final Exam",
  originalFile: "OSG202 - FA25 - FE.pdf",
  semester: "Fall 2025",
  semesterKey: "fa25",
  type: "Final Exam",
  typeKey: "final",
  durationMinutes: 60,
  imagePath: "images/osg202/fa25-fe/",
  questions: [
    {
      n: 1,
      text: "____ is programmed at the factory and cannot be changed afterward.",
      options: ["RAM", "ROM", "EEPROM", "CMOS"],
      answers: [1],
      explain: "ROM (Read-Only Memory) được nạp nội dung ngay tại nhà máy và không thể ghi lại sau đó. EEPROM có thể xóa/ghi lại bằng điện; RAMvolatile và ghi được tự do; CMOS là công nghệ chip lưu cấu hình BIOS."
    },
    {
      n: 2,
      text: "What is the purpose of the TRAP instruction in the execution of a system call?",
      options: ["To switch from user mode to kernel mode.", "To call a function from the library.", "To determine a specific address in memory for the kernel to handle the request.", "To check the input parameters before execution."],
      answers: [0],
      explain: "Lệnh TRAP (hoặc syscall) làm CPU chuyển từ user mode sang kernel mode, nhảy tới điểm vào xử lý system call của kernel — đây là cổng bắt buộc để tiến trình người dùng nhờ OS làm việc đặc quyền."
    },
    {
      n: 3,
      text: "Processes in UNIX have their memory divided up into three segments: the Data segment, the Stack segment and the ___",
      options: ["Text segment", "Heap segment", "Program segment", "None of these above"],
      answers: [0],
      explain: "Mô hình bộ nhớ tiến trình UNIX: Text segment (code — đọc nhẹ, chia sẻ được), Data segment (biến toàn cục/tĩnh) và Stack segment (ngăn xếp hàm). Heap chỉ là vùng cấp phát động nằm trong data."
    },
    {
      n: 4,
      text: "If a process fails, most operating systems write the error information to a ______",
      options: ["new file", "old file", "another running process", "log file"],
      answers: [3],
      explain: "Khi tiến trình lỗi, OS ghi thông tin lỗi vào LOG FILE (nhật ký hệ thống — ví dụ /var/log, Event Viewer) để quản trị viên truy vết nguyên nhân sau này."
    },
    {
      n: 5,
      text: "Which system supports multiple processes and helps manage various activities on a user PC?",
      options: ["Multiprocessing system", "Multitasking system", "Single tasking system", "Distributed system"],
      answers: [1],
      explain: "Multitasking (đa nhiệm) là hệ điều hành cho phép nhiều tiến trình chia sẻ một CPU trên máy cá nhân — chạy trình duyệt, nghe nhạc, soạn thảo cùng lúc. Multiprocessing thường chỉ hệ nhiều CPU vật lý."
    },
    {
      n: 6,
      text: "What is the purpose of a pipeline in a CPU?",
      options: ["To increase speed by executing multiple stages of instructions simultaneously.", "To reduce the number of instructions in the program, optimizing performance.", "To combine all instructions into one operation, simplifying execution.", "To execute instructions randomly, potentially improving performance."],
      answers: [0],
      explain: "Pipeline chia lệnh thành các giai đoạn (fetch, decode, execute…) để nhiều lệnh ở các giai đoạn khác nhau thực thi TRÙNG LÚC → tăng thông lượng, không giảm số lệnh."
    },
    {
      n: 7,
      text: "How do threads enable efficient resource sharing?",
      options: ["By allowing threads to share resources within the same address space", "By isolating resources for each thread", "By restricting access to shared resources", "By creating separate address spaces for each thread"],
      answers: [0],
      explain: "Các thread cùng tiến trình DÙNG CHUNG không gian địa chỉ (code, data, heap, file mở) → chia sẻ dữ liệu không cần IPC tốn kém, chuyển ngữ cảnh nhẹ nhàng."
    },
    {
      n: 8,
      text: "Compare and contrast monolithic and client-server operating system structures.",
      options: ["Monolithic systems integrate all functionalities into a single layer, whereas client-server systems distribute functionalities across multiple components.", "Monolithic systems promote scalability better than client-server systems.", "Client-server systems offer more efficient communication between components compared to monolithic systems.", "Monolithic systems have a modular architecture that simplifies maintenance, whereas client-server systems have a more complex architecture."],
      answers: [0],
      explain: "Monolithic: mọi dịch vụ trong một kernel lớn một khối. Client-server (microkernel): các dịch vụ chạy thành tiến trình người dùng riêng, giao tiếp qua IPC với kernel nhỏ. A mô tả đúng bản chất so sánh."
    },
    {
      n: 9,
      text: "______ is a non-preemptive scheduling algorithm. With this algorithm, processes are assigned the CPU in the order they request it.",
      options: ["Round-robin scheduling", "First-come, first-served", "Shortest job first", "Priority Scheduling"],
      answers: [1],
      explain: "FCFS: không preempt, phục vụ đúng thứ tự yêu cầu CPU — hàng đợi đơn giản kiểu FIFO. Round-robin là preemptive (hết quantum bị ngắt)."
    },
    {
      n: 10,
      text: "In Unix, which system call creates the new process?",
      options: ["create", "fork", "new", "exec"],
      answers: [1],
      explain: "fork() tạo tiến trình mới trong UNIX bằng cách nhân bản tiến trình gọi nó; tiến trình con có bản sao bộ nhớ riêng, PID khác. exec chỉ nạp chương trình mới."
    },
    {
      n: 11,
      text: "Which of the following is not a goal of a scheduling algorithm?",
      options: ["CPU utilization - keep the CPU least busy all the time", "Fairness - giving each process a fair share of the CPU", "Policy enforcement - seeing that stated policy is carried out", "Balance - keeping all parts of the system busy"],
      answers: [0],
      explain: "Mục tiêu lập lịch (Tanenbaum) gồm: công bằng, thực thi chính sách, giữ mọi bộ phận hệ thống bận (balance), throughput… CPU utilization nghĩa là giữ CPU BẬN tối đa — không phải \"least busy\" như A viết."
    },
    {
      n: 12,
      text: "The interval from the time of submission of a process to the time of completion is termed as ________",
      options: ["waiting time", "turnaround time", "response time", "throughput"],
      answers: [1],
      explain: "Turnaround time = khoảng từ khi nộp tiến trình đến khi hoàn thành (gồm chờ + chạy). Waiting time chỉ là thời gian chờ trong ready queue."
    },
    {
      n: 13,
      text: "A preemptive version of shortest job first (SJF) is____",
      options: ["Shortest Process Next", "First-Come, First-Served", "Shortest remaining time next", "Shortest used time"],
      answers: [2],
      explain: "SJF preemptive = Shortest Remaining Time Next (SRTN): nếu tiến trình mới có burst còn lại ngắn hơn tiến trình đang chạy thì preempt. Shortest Process Next là tên gọi của SJF NON-preemptive."
    },
    {
      n: 14,
      text: "When several equally important jobs are sitting in the input queue waiting to be started, the scheduler picks the ____",
      options: ["Round-robin scheduling", "First-come, first-served", "Shortest job first", "Guaranteed Scheduling", "Priority Scheduling"],
      answers: [2],
      explain: "Khi các công việc quan trọng ngang nhau cùng chờ, scheduler chọn CÔNG VIỆC NGẮN NHẤT TRƯỚC (shortest job first) để tối ưu thời gian chờ trung bình. (Tanenbaum)"
    },
    {
      n: 15,
      text: "What is the main difference between a process and a thread?",
      options: ["Threads share the same memory space, while processes do not", "Processes are faster than threads", "Processes can only execute one task, while threads execute multiple tasks", "Threads are independent of processes"],
      answers: [0],
      explain: "Khác biệt cốt lõi: các thread trong cùng tiến trình DÙNG CHUNG bộ nhớ (address space); mỗi tiến trình có không gian địa chỉ RIÊNG biệt. Threads là đơn vị thực thi nhỏ hơn, nhanh hơn nhưng không độc lập với tiến trình."
    },
    {
      n: 16,
      text: "Suppose processes P1, P2, P3, P4, P5 (picture below) all enter the system at a time 0. What is the average waiting time when scheduling the shortest job first?<table class=\"mini-table\"><tr><td>Process</td><td>Burst time</td></tr><tr><td>P1</td><td>10</td></tr><tr><td>P2</td><td>1</td></tr><tr><td>P3</td><td>2</td></tr><tr><td>P4</td><td>4</td></tr><tr><td>P5</td><td>5</td></tr></table>",
      options: ["4.6", "6.2", "5.2", "4.2"],
      answers: [0],
      explain: "SJF: P2(1) → P3(2) → P4(4) → P5(5) → P1(10). Waiting: P2 = 0, P3 = 1, P4 = 3, P5 = 7, P1 = 12. Trung bình = (0+1+3+7+12)/5 = 23/5 = 4.6."
    },
    {
      n: 17,
      text: "In the context of virtual memory, what does \"thrashing\" refer to?",
      options: ["When a process is spending more time paging than executing", "When a process is terminated unexpectedly", "When a process is using more memory than allocated", "When a process is waiting for I/O operations"],
      answers: [0],
      explain: "Thrashing: tiến trình thiếu trang liên tục — dành nhiều thời gian hơn cho swap/page fault hơn là thực thi thật, làm CPU utilization sụp đổ. Nguyên nhân thường là quá nhiều tiến trình cùng tranh RAM."
    },
    {
      n: 18,
      text: "With ______, only one process can execute at a time; meanwhile all other processes are waiting for the processor. With ____, more than one process can be running simultaneously each on a different processor.",
      options: ["Multiprocessing, Multiprogramming", "Multiprogramming, Uniprocessing", "Multiprogramming, Multiprocessing", "Uniprogramming, Multiprocessing"],
      answers: [3],
      explain: "Uniprogramming: một thời điểm chỉ một tiến trình chạy, còn lại chờ CPU. Multiprocessing: nhiều tiến trình chạy ĐỒNG THỜI trên các CPU khác nhau. (Multiprogramming là giữ nhiều tiến trình trong RAM để xen kẽ.)"
    },
    {
      n: 19,
      text: "What is the primary goal of a page replacement algorithm?",
      options: ["To increase the speed of the CPU", "To minimize disk I/O operations", "To increase the number of processes in memory", "To simplify memory management"],
      answers: [1],
      explain: "Mục tiêu của thuật toán thay trang là giảm SỐ PAGE FAULT — mỗi fault là một lần đọc/ghi đĩa chậm → tối thiểu hóa các thao tác I/O đĩa. CPU speed không liên quan trực tiếp."
    },
    {
      n: 20,
      text: "A multilevel page table is preferred in comparison to a single level page table for translating virtual address to physical address because ____",
      options: ["it helps to reduce the number of page faults in page replacement algorithms", "it is required by the translation lookaside buffer", "it helps to reduce the size of page table needed to implement the virtual address space of a process", "it reduces the memory access time to read or write a memory location"],
      answers: [2],
      explain: "Bảng trang đa cấp chỉ cấp phát bảng cấp 2 cho những vùng địa chỉ thật được dùng → bảng trang không phải liệt kê toàn bộ không gian ảo khổng lồ → TIẾT KIỆM bộ nhớ chứa bảng trang."
    },
    {
      n: 21,
      text: "What is the benefit of using paging in virtual memory systems?",
      options: ["Enhanced CPU performance", "Improved disk storage management", "Efficient memory utilization", "Faster network communication"],
      answers: [2],
      explain: "Paging nạp trang rời rạc, không cần vùng liên tục → không phân mảnh ngoài, tận dụng RAM hiệu quả; hỗ trợ bộ nhớ ảo cho tiến trình lớn hơn RAM vật lý."
    },
    {
      n: 22,
      text: "In a paging system, what is the term for the data stored in secondary storage that is not currently in main memory?",
      options: ["Cache", "Page table", "Disk image", "Swap space"],
      answers: [3],
      explain: "SWAP SPACE là vùng trên đĩa chứa các trang hiện không nằm trong RAM. Khi cần, trang được nạp ngược vào bộ nhớ chính (page-in)."
    },
    {
      n: 23,
      text: "In virtual memory, a solution adopted in the 1980s was to split programs into little pieces called____",
      options: ["overlays", "pages", "page table", "page fault"],
      answers: [0],
      explain: "OVERLAY: chương trình chia thành các mảnh nhỏ, mảnh nào cần thì nạp đè lên mảnh cũ trong cùng vùng nhớ — kỹ thuật thời kỳ trước paging (Tanenbaum mô tả cho máy 28-bit/file). Pages là giải pháp VM hiện đại hơn."
    },
    {
      n: 24,
      text: "What is another name for the Modified Bit that reflects the page's state?",
      options: ["Reference Bit", "Access Bit", "Dirty Bit", "Clear Bit"],
      answers: [2],
      explain: "Modified bit = DIRTY BIT: được bật khi trang bị ghi; khi thay trang này phải ghi ngược về đĩa. Reference bit (bit R) chỉ đánh dấu trang được đọc/tham chiếu."
    },
    {
      n: 25,
      text: "What is paging in virtual memory in operating systems?",
      options: ["A technique for managing disk storage", "A method for managing memory by dividing it into fixed-size blocks", "A process for controlling CPU scheduling", "A mechanism for handling network communicatio"],
      answers: [1],
      explain: "Paging: chia bộ nhớ thành các khối CỐ ĐỊNH (trang/page — frame) và ánh xạ trang logic sang frame vật lý qua bảng trang — kỹ thuật quản lý bộ nhớ cốt lõi của VM."
    },
    {
      n: 26,
      text: "Which statement best describes the function of virtual memory in the Windows operating system?",
      options: ["Virtual memory is used to store temporary files created by applications to free up physical RAM.", "Virtual memory allows a larger address space than the physical memory available, by using a combination of RAM and hard disk space.", "Virtual memory is a reserved area on the hard disk used exclusively for storing system files.", "Virtual memory enables the operating system to manage the computer's display settings for multiple monitors."],
      answers: [1],
      explain: "Virtual memory (pagefile.sys trong Windows) kết hợp RAM + đĩa để cho mỗi tiến trình một không gian địa chỉ LỚN HƠN RAM vật lý. Nó không phải nơi chứa file tạm hay file hệ thống."
    },
    {
      n: 27,
      text: "Most virtual memory systems use a technique called_____ ?",
      options: ["Page Fault", "Page Frames", "Page Table", "Paging"],
      answers: [3],
      explain: "Hầu hết hệ VM dùng PAGING: chia không gian ảo thành trang cố định, ánh xạ qua bảng trang sang frame vật lý. Page fault/page table chỉ là các thành phần phục vụ paging."
    },
    {
      n: 28,
      text: "In a Unix-like operating system, what does the tilde (~) character represent in a path?",
      options: ["The home directory of the current user", "The parent directory", "The current directory", "The root directory"],
      answers: [0],
      explain: "~ là thư mục HOME của người dùng hiện hành (ví dụ /home/john). \"..\" là thư mục cha, \".\" là thư mục hiện hành, \"/\" là gốc."
    },
    {
      n: 29,
      text: "Which of the following file extensions is used for compressed archives?",
      options: [".mp3", ".bak", ".zip", ".gif"],
      answers: [2],
      explain: ".zip là định dạng kho lưu trữ nén (archive). .mp3 là audio, .bak là backup, .gif là ảnh động."
    },
    {
      n: 30,
      text: "Analyze the significance of log-structured file systems in enhancing file-system performance, discussing their mechanisms and impact on write operations and disk usage.",
      options: ["Log-structured file systems optimize disk usage but may suffer from higher write latencies due to their write-large-unit approach.", "Log-structured file systems minimize write latencies by writing data in large units and improve disk usage through better block allocation.", "Log-structured file systems have no impact on write latencies and disk usage, as they primarily focus on file backups.", "Log-structured file systems slow down disk usage by writing data in small units and hinder write operations due to excessive disk fragmentation."],
      answers: [1],
      explain: "Log-structured FS (Tanenbaum) gom mọi thao tác ghi thành các đoạn lớn ghi TUẦN TỰ lên đĩa → giảm write latency, tận dụng tốt cơ khí đĩa và cấp phát khối hợp lý (thu gom segment để dọn rác)."
    },
    {
      n: 31,
      text: "Consider a 4-TB disk that uses 4-KB blocks and the free-list method. How many block addresses can be stored in one block?",
      options: ["1024 addresses", "256 addresses", "512 addresses", "2048 addresses", "128 addresses"],
      answers: [0],
      explain: "Đĩa 4TB / khối 4KB = 2<sup>30</sup> khối → cần địa chỉ 4 byte (32 bit). Mỗi khối danh sách 4KB = 4096 byte chứa 4096/4 = 1024 địa chỉ khối."
    },
    {
      n: 32,
      text: "Which file attribute specifies who can access the file and in what way?",
      options: ["Protection", "Password", "Creator", "Owner"],
      answers: [0],
      explain: "Thuộc tính PROTECTION (quyền truy cập — rwx theo owner/group/other) quy định ai được làm gì với file. Owner/creator chỉ định danh người, password là phương thức bảo vệ phụ."
    },
    {
      n: 33,
      text: "What is an absolute path in operating systems?",
      options: ["A path that starts from the root directory", "A path that is relative to the current working directory", "A path that includes only the file name", "A path that is used for network communication"],
      answers: [0],
      explain: "Absolute path xuất phát từ THƯ MỤC GỐC (ví dụ /usr/local/bin, C:\\Windows). Relative path tính từ working directory hiện hành."
    },
    {
      n: 34,
      text: "In UNIX, which type of file is used to model disks?",
      options: ["Regular files.", "Character special files.", "Block special files.", "Directories"],
      answers: [2],
      explain: "Disks là thiết bị khối → mô hình bằng BLOCK SPECIAL FILES (/dev/sda…), cho đọc/ghi theo khối có địa chỉ. Character special files cho thiết bị dòng như terminal."
    },
    {
      n: 35,
      text: "What kind of file access did early operating system provide?",
      options: ["Linear access", "Unsequential access", "Random access", "Sequential access"],
      answers: [3],
      explain: "Hệ điều hành thời kỳ đầu (máy IBM thế hệ 1 với thẻ đục lỗ, băng từ) chỉ hỗ trợ SEQUENTIAL ACCESS — đọc/ghi tuần tự từ đầu đến cuối, không nhảy tới vị trí tùy ý."
    },
    {
      n: 36,
      text: "Consider a disk queue with requests for I/O to blocks on cylinders: 98, 37, 14, 65, 67. In the SSF (Shortest Seek First) scheduling algorithm, what is the disk arm motion if the disk head is initially at 53?",
      options: ["53, 65, 67, 37, 14, 98", "53, 37, 14, 65, 67, 98", "53, 14, 27, 65, 67, 98", "53, 98, 67, 65, 37, 14"],
      answers: [0],
      explain: "SSF chọn yêu cầu gần nhất: từ 53 → 65 (12) → 67 (2) → 37 (30) → 14 (23) → 98 (84). Trình tự: 53, 65, 67, 37, 14, 98 — ví dụ kinh điển của Tanenbaum."
    },
    {
      n: 37,
      text: "Consider a disk queue with requests for I/O to blocks on cylinders: 98, 37, 14, 65, 67. The disk arm motion, if the disk head is initially at 53, is 53, 98, 37, 14, 65, 67. Which the disk arm scheduling algorithm is used?",
      options: ["FCFS", "SSF", "SJF", "Elevator"],
      answers: [0],
      explain: "Đầu đĩa đi qua các yêu cầu ĐÚNG THỨ TỰ chúng xuất hiện trong hàng đợi (98, 37, 14, 65, 67) — đó chính là FCFS (First-Come, First-Served). SSF/elevator sẽ chọn theo khoảng cách."
    },
    {
      n: 38,
      text: "Which I/O mode is most suitable for transferring data between memory and I/O devices without the CPU being bothered?",
      options: ["Direct Memory Access", "Programmed I/O", "Interrupt-driven I/O", "Polling"],
      answers: [0],
      explain: "DMA controller tự chuyển cả khối dữ liệu giữa thiết bị và RAM; CPU chỉ khởi tạo và nhận một ngắt khi hoàn tất → không bị làm phiền chuyển từng byte như programmed/interrupt I/O."
    },
    {
      n: 39,
      text: "In UNIX, how are devices like USB sticks integrated into the file-system hierarchy?",
      options: ["Devices are not integrated and require separate access commands", "Devices are assigned unique identifiers that must be used to access files", "Devices can be mounted on directories within the file-system hierarchy, allowing files to be copied to them via path names", "Devices require special software to be accessed through the file system"],
      answers: [2],
      explain: "UNIX gắn hệ file của thiết bị (USB) vào cây thư mục bằng MOUNT: sau khi mount vào /media/usb…, thao tác với đường dẫn đó là thao tác trực tiếp với thiết bị — nguyên tắc \"mọi thứ là file\"."
    },
    {
      n: 40,
      text: "What is the function of the user application layer in the I/O system?",
      options: ["To make system calls and handle I/O", "To manage device drivers", "To communicate with the hardware", "To perform actual I/O operations"],
      answers: [0],
      explain: "Tầng user application: ứng dụng thực hiện các SYSTEM CALL (open, read, write…) để yêu cầu I/O; các tầng dưới (drivers, interrupt handlers) mới trực tiếp thao tác phần cứng."
    },
    {
      n: 41,
      text: "While the seek for cylinder 11 is in progress, new requests appear for cylinders 1, 36, 16, 34, 9, and 12. Considering SSF (Shortest Seek First) scheduling, what is the total number of head movements?",
      options: ["61", "111", "60", "100"],
      answers: [0],
      explain: "SSF từ 11: 12 (1) → 9 (3) → 16 (7) → 1 (15) → 34 (33) → 36 (2). Tổng = 61 cylinder di chuyển. (Ví dụ Tanenbaum.)"
    },
    {
      n: 42,
      text: "Which operation in stable storage involves writing and verifying a block on both drives until it is successfully written and verified?",
      options: ["Stable read.", "Crash recovery.", "Stable write.", "Data synchronization."],
      answers: [2],
      explain: "Stable WRITE: ghi khối vào đĩa thứ nhất, đọc kiểm tra; nếu lỗi → thử lại, rồi đĩa thứ hai; lặp cho đến khi ghi và xác minh thành công. Stable read/crash recovery là các thao tác khác của stable storage."
    },
    {
      n: 43,
      text: "The first general-purpose electronic computer, the ENIAC, had 18,000 vacuum tubes and consumed ____ watts of power.",
      options: ["1400,000", "140,000", "14,000", "1,400"],
      answers: [1],
      explain: "ENIAC (1946) gồm 18.000 đèn chân không, tiêu thụ khoảng 140.000 watt (140 kW) và chiếm cả phòng lớn — gợi nhớ vì độ tiêu thụ điện khổng lồ của thế hệ máy đầu tiên."
    },
    {
      n: 44,
      text: "What is the primary objective of Deadlock Avoidance techniques?",
      options: ["To resolve deadlocks after they occur", "To preemptively avoid potential deadlocks", "To require processes to request resources in advance", "To identify deadlocks and take corrective action", "To ignore the occurrence of deadlocks"],
      answers: [1],
      explain: "Avoidance (Banker's) kiểm tra TRƯỚC mỗi lần cấp phát: chỉ cấp nếu trạng thái sau đó vẫn an toàn → chủ động TRÁNH deadlock khỏi xảy ra. Resolve/identify-after là deadlock detection; bỏ qua là ostrich."
    },
    {
      n: 45,
      text: "Which recovery method can lead to data inconsistency when re-executed in the case of a deadlock?",
      options: ["Recovery through rollback", "Killing processes", "Preemption", "Checkpointing", "None of the others"],
      answers: [0],
      explain: "Rollback: đưa tiến trình về checkpoint và CHẠY LẠI — nhưng nếu giữa chừng tiến trình đã làm thao tác ngoài (in tài liệu, gửi tín hiệu…), các thao tác này không thể thu hồi → tái thực thi gây không nhất quán. (Tanenbaum)"
    },
    {
      n: 46,
      text: "Every time a request for allocation cannot be granted immediately, the detection algorithm is invoked. This will help identify",
      options: ["the set of processes that have been deadlocked", "the set of processes in the deadlock queue", "the specific process that caused the deadlock", "the set of processes that caused the deadlock"],
      answers: [0],
      explain: "Thuật toán phát hiện deadlock (đồ thị wait-for / matrix) chạy khi yêu cầu cấp phát bị từ chối; nó chỉ ra TẬP HỢP các tiến trình đã bị DEADLOCK để OS quyết định khôi phục."
    },
    {
      n: 47,
      text: "Which of the following best describes a \"race condition\"?",
      options: ["Multiple processes access and manipulate shared data concurrently", "A process is stuck in an infinite loop", "A process waits indefinitely for an event", "A process exceeds its allocated memory"],
      answers: [0],
      explain: "Race condition: hai hay nhiều tiến trình/thread truy cập dữ liệu dùng chung ĐỒNG THỜI và kết quả phụ thuộc thứ tự thực thi → cần loại trừ tương hỗ để loại bỏ."
    },
    {
      n: 48,
      text: "Analyze the significance of the hold-and-wait condition in resource deadlock, explaining its impact on deadlock prevention strategies in an operating system.",
      options: ["The hold-and-wait condition allows processes to request resources without considering safety, impacting the implementation of strategies like the banker's algorithm to ensure safe states.", "The hold-and-wait condition dictates that processes must wait for all resources to be available before execution, affecting resource allocation strategies and potentially leading to deadlocks.", "The hold-and-wait condition requires processes to release held resources before requesting new ones, influencing deadlock prevention strategies by reducing the likelihood of resource shortages.", "The hold-and-wait condition mandates that resources must be released once a process completes its execution, impacting deadlock detection algorithms and their ability to identify potential deadlocks."],
      answers: [0],
      explain: "Hold-and-wait cho phép tiến trình vừa giữ tài nguyên vừa xin thêm mà không kiểm tra an toàn — làm các chiến lược như banker's algorithm phải quản lý chặt để đảm bảo trạng thái an toàn. A phản ánh đúng vai trò của điều kiện này trong thiết kế phòng tránh deadlock."
    },
    {
      n: 49,
      text: "Assuming there is an entry in /etc/passwd file (file stores essential information, which is required during login) as follows:<br>john:x:1002:1000:John Henry:/bin/bash<br>Choose the best correct statement.",
      options: ["Username = john and userid = 1002", "Username = John Henry and userid = 1002", "Username = john and userid = 1000", "Username = John Henry and userid = 1000"],
      answers: [0],
      explain: "Định dạng /etc/passwd: name:x:UID:GID:GECOS:shell → username = john, UID = 1002, GID = 1000, tên đầy đủ = John Henry."
    },
    {
      n: 50,
      text: "Differentiate between Type 1 and Type 2 hypervisors in terms of their implementation and performance. Which type is generally more efficient for enterprise environments, and why?",
      options: ["Type 1 hypervisors, as they run directly on hardware", "Type 2 hypervisors, as they offer more flexibility.", "Type 1 hypervisors, for simpler management than Type 2", "Both types are equally efficient in enterprises"],
      answers: [0],
      explain: "Type 1 (bare-metal: ESXi, Hyper-V, Xen) chạy trực tiếp trên phần cứng → ít overhead, hiệu năng và bảo mật cao, phù hợp data center. Type 2 (VirtualBox, VMware Workstation) chạy như ứng dụng trên OS chủ, thêm một lớp gián tiếp."
    }
  ]
});
