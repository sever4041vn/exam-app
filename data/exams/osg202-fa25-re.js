// OSG202 - Fall 2025 - Retake Exam
// Nguồn: OSG202 - FA25 - RE.pdf (50 câu hỏi trắc nghiệm, format FUO 2 cột)
window.EXAMAPP_EXAMS = window.EXAMAPP_EXAMS || [];
window.EXAMAPP_EXAMS.push({
  id: "osg202-fa25-re",
  subjectId: "OSG202",
  title: "OSG202 - Fall 2025 - Retake Exam",
  originalFile: "OSG202 - FA25 - RE.pdf",
  semester: "Fall 2025",
  semesterKey: "fa25",
  type: "Retake Exam",
  typeKey: "retake",
  durationMinutes: 60,
  imagePath: "images/osg202/fa25-re/",
  questions: [
    {
      n: 1,
      text: "Which of the following is not a function of an operating system?",
      options: ["Resource Management", "Process Management", "Memory Management", "Transistors Management"],
      answers: [3],
      explain: "Quản lý TRANSISTOR là việc của phần cứng/chip design, không phải chức năng OS. OS quản lý tài nguyên, tiến trình, bộ nhớ, file, I/O…"
    },
    {
      n: 2,
      text: "In what scenario would a microkernel-based operating system structure be advantageous compared to a monolithic structure?",
      options: ["When direct hardware access is necessary for user applications", "When isolation between user and kernel space is crucial", "When a layered approach complicates system performance", "When centralized system control is required"],
      answers: [1],
      explain: "Microkernel đẩy dịch vụ ra user space, chỉ giữ IPC/scheduling/memory cơ bản trong kernel → cô lập lỗi và phân tách user/kernel rõ ràng (QNX, MINIX). Khi một driver lỗi, chỉ dịch vụ đó sập chứ không sập cả hệ thống như monolithic."
    },
    {
      n: 3,
      text: "(Choose 3 answers) In Processors, the general registers used to hold variables and temporary results. What special registers that are visible to the programmer?",
      options: ["MAR(Memory address register)", "Program counter", "Stack pointer", "PSW (Program Status Word)"],
      answers: [1, 2, 3],
      explain: "Các thanh ghi đặc biệt hiện cho lập trình viên (Tanenbaum): PC (program counter), SP (stack pointer), PSW (program status word). MAR là thanh ghi nội bộ của CPU giao tiếp bus bộ nhớ — KHÔNG hiển thị cho lập trình viên."
    },
    {
      n: 4,
      text: "Which part of the operating system is responsible for deciding which process should run when and for how long?",
      options: ["CPU Scheduler", "Disk Scheduler", "Memory Manager", "File System", "Network Manager"],
      answers: [0],
      explain: "CPU Scheduler (bộ lập lịch CPU) chọn tiến trình tiếp theo chiếm CPU và quyết định thời gian thực thi — trung tâm của đa nhiệm. Disk scheduler chỉ xếp hàng yêu cầu đĩa."
    },
    {
      n: 5,
      text: "In I/O Devices, the software that talks to a controller, giving it commands and accepting responses, is called___",
      options: ["device driver", "DMA", "device interface", "interrupt"],
      answers: [0],
      explain: "DEVICE DRIVER là phần mềm phía controller: phát lệnh cấu hình/đọc/ghi cho controller và xử lý phản hồi/ngắt trả về — module \"biết riêng\" từng thiết bị."
    },
    {
      n: 6,
      text: "Which of the following is NOT a common type of system call?",
      options: ["Process Control", "File Management", "User Interface", "Communication"],
      answers: [2],
      explain: "Các nhóm system call chuẩn (Silberschatz): process control, file management, device management, information maintenance, communication, protection. \"User Interface\" không phải nhóm system call."
    },
    {
      n: 7,
      text: "Which statement is false about operating systems?",
      options: ["Operating System is a type of system software", "Operating System is a type of application", "The Operating System is an Extended Machine", "The Operating System as a Resource Manager"],
      answers: [1],
      explain: "OS là SYSTEM SOFTWARE (phần mềm hệ thống), KHÔNG phải application. Hai hình dung kinh điển của OS: máy mở rộng (extended machine) và người quản lý tài nguyên (resource manager)."
    },
    {
      n: 8,
      text: "If a system requires efficient process handling and termination-related operations, which group of system calls would be essential?",
      options: ["Process creation and termination", "File reading and writing", "Directory management", "Miscellaneous system calls"],
      answers: [0],
      explain: "Nhóm PROCESS CONTROL: fork/exec (tạo), exit (kết thúc), wait, kill… phục vụ trực tiếp việc tạo/quản lý/kết thúc tiến trình."
    },
    {
      n: 9,
      text: "Compare and contrast the implementations of threads in user space and in the kernel, highlighting their advantages and disadvantages?",
      options: ["Threads in user space offer faster context switching, whereas kernel threads have direct access to hardware resources.", "Kernel threads provide better synchronization mechanisms compared to user space threads.", "User space threads allow for better multitasking performance, while kernel threads are more prone to deadlocks.", "User space threads have limited access to system resources, whereas kernel threads can efficiently manage I/O operations."],
      answers: [0],
      explain: "User-space threads: chuyển ngữ cảnh nhanh (run-time system xử lý, không vào kernel) nhưng blocking call chặn cả tiến trình. Kernel threads: kernel lập lịch trực tiếp, truy cập I/O/phần cứng hiệu quả, đổi lại chuyển ngữ cảnh chậm hơn."
    },
    {
      n: 10,
      text: "Which of the following algorithms operates in preemptive scheme only in batch system?",
      options: ["First Come First Served", "Shortest Job First", "Round Robin", "Priority"],
      answers: [1],
      explain: "SJF là thuật toán của hệ batch; phiên bản preemptive của nó (SRTN — shortest remaining time next) cũng chỉ áp dụng trong môi trường batch. Round Robin/Priority là thuật toán hệ tương tác."
    },
    {
      n: 11,
      text: "What is interprocess communication?",
      options: ["allows processes to communicate and synchronize their actions when using the same address space", "allows processes to communicate and synchronize their actions", "allows the processes only to synchronize their actions without communication", "allows the processes only to communicate their actions without synchronizing"],
      answers: [1],
      explain: "IPC (interprocess communication) gồm HAI phần: truyền dữ liệu (communication) và đồng bộ hành động (synchronization) giữa các tiến trình — không giới hạn ở cùng address space (đó là shared memory, một dạng IPC)."
    },
    {
      n: 12,
      text: "Example of First-Come, First-Served (FCFS) Scheduling.<br>Suppose that the processes arrive in the order: P2, P3. Calculate Average waiting time for the processes, with the following burst time: Burst Time of P1 process: 24, Burst Time of P2 process: 3, Burst Time of P3 process: 3.",
      options: ["3", "30", "27", "9", "8", "2"],
      answers: [0],
      explain: "Ví dụ kinh điển (Silberschatz): P1=24, P2=3, P3=3. Nếu đến theo thứ tự P2, P3, P1: P2 chạy 0-3 (wait 0), P3 chạy 3-6 (wait 3), P1 chạy 6-30 (wait 6). Average waiting = (0+3+6)/3 = 3."
    },
    {
      n: 13,
      text: "What triggers a transition from the \"Blocked\" state to the \"Ready\" state?",
      options: ["Completion of an I/O operation", "User input request", "Process termination", "CPU scheduler selection"],
      answers: [0],
      explain: "Tiến trình Blocked chờ I/O; khi I/O HOÀN TẤT (ngắt xong), tiến trình được đánh thức trở về READY để chờ lập lịch. Scheduler chọn khi nó đã Ready (chuyển Ready→Running)."
    },
    {
      n: 14,
      text: "When threads are managed in user space, what does each process need to track the threads within that process?",
      options: ["User space table", "Kernel table", "Thread table", "Process table"],
      answers: [2],
      explain: "Với user-level threads, run-time system của mỗi tiến trình giữ một THREAD TABLE riêng (trong user space) để theo dõi các thread: PC, thanh ghi, trạng thái. Kernel chỉ thấy process table."
    },
    {
      n: 15,
      text: "Message passing system allows processes to ____",
      options: ["communicate with each other without sharing the same address space", "communicate with one another by resorting to shared data", "share data", "name the recipient or sender of the message"],
      answers: [0],
      explain: "Message passing (send/receive) cho phép các tiến trình giao tiếp mà KHÔNG cần không gian địa chỉ dùng chung — thay thế cho shared memory khi tiến trình nằm phân tán hoặc cách ly."
    },
    {
      n: 16,
      text: "Which scheduling algorithm allocates the CPU first to the process that requests the CPU first?",
      options: ["first-come, first-served scheduling", "shortest job scheduling", "priority scheduling", "multi-level queue"],
      answers: [0],
      explain: "FCFS: ai xin CPU trước được phục vụ trước — hàng đợi FIFO đơn giản, không preempt."
    },
    {
      n: 17,
      text: "Example of First-Come, First-Served (FCFS) Scheduling.<br>Suppose that the processes arrive in the order: P2, P3. Calculate Average waiting time for the processes, with the following burst time: Burst Time of P1 process: 24, Burst Time of P2 process: 3, Burst Time of P3 process: 3.",
      options: ["3", "30", "27", "9", "8", "2"],
      answers: [0],
      explain: "Giống câu 12: thứ tự đến P2, P3, P1 với burst 3, 3, 24 → waiting 0, 3, 6 → trung bình 3."
    },
    {
      n: 18,
      text: "Critically assess the role of interprocess communication primitives in solving synchronization problems, highlighting their impact on system stability and performance.",
      options: ["Interprocess communication primitives significantly improve system stability by eliminating all potential deadlock scenarios.", "While interprocess communication primitives address synchronization issues, they might introduce overhead and potential challenges, affecting system performance.", "These primitives have no impact on system stability but greatly enhance performance by reducing context switches.", "The usage of interprocess communication primitives enhances system stability without any performance trade-offs."],
      answers: [1],
      explain: "Các primitive đồng bộ (semaphore, mutex, message passing) giải quyết race condition nhưng KHÔNG miễn phí: IPC qua kernel tốn context switch, khóa sai có thể deadlock → đánh đổi giữa độ ổn định và chi phí hiệu năng. B là đánh giá cân bằng, đúng thực tế."
    },
    {
      n: 19,
      text: "(Choose 4 answers) In processes, what are the four main events that cause processes to be created? (Choose four correct answers)",
      options: ["System initialization.", "Execution of a process-creation system call by a running process.", "System that interacts with (human) users and perform work for them", "A user request to create a new process.", "Initiation of a batch job."],
      answers: [0, 1, 3, 4],
      explain: "Bốn sự kiện tạo tiến trình (Tanenbaum): 1) khởi động hệ thống (foreground/background daemon), 2) tiến trình đang chạy gọi system call tạo tiến trình (fork), 3) người dùng yêu cầu tạo tiến trình mới, 4) khởi chạy một batch job. Phương án C chỉ là mô tả \"tiến trình tương tác\", không phải sự kiện tạo."
    },
    {
      n: 20,
      text: "Analyze the relationship between the dining philosophers problem and the use of semaphores or mutexes in concurrent programming, outlining the potential for deadlock situations and solutions.",
      options: ["The dining philosophers problem exemplifies the need for thread priorities in deadlock resolution.", "Semaphores and mutexes help prevent deadlocks by allowing multiple processes to access critical sections simultaneously.", "The dining philosophers problem demonstrates how shared resources, managed by semaphores or mutexes, can lead to deadlock situations without proper synchronization.", "Semaphore and mutexes are ineffective in resolving the dining philosophers problem, as it primarily deals with scheduling issues."],
      answers: [2],
      explain: "Bài toán triết gia ăn mì cho thấy: 5 tiến trình tranh 5 tài nguyên (đũa) quản bằng semaphore/mutex — nếu giải pháp kém (cùng cầm đũa trái rồi chờ đũa phải) sẽ deadlock. Các giải pháp đúng: giới hạn số người cầm đũa, lấy đủ hai đũa nguyên tử, đánh số tài nguyên."
    },
    {
      n: 21,
      text: "Consider a swapping system in which memory consists of the following hole sizes in memory order: 16 MB, 4 MB, 12 MB, 28 MB, 9 MB, 22 MB, 12 MB, and 18 MB. Which hole is taken for successive segment requests of 12 MB for worst fit?",
      options: ["15 MB", "28 MB", "12 MB", "18 MB"],
      answers: [1],
      explain: "Worst-fit LUÔN chọn lỗ lớn nhất — trong danh sách là lỗ 28 MB. (Ví dụ Tanenbaum: first-fit lấy 16MB, best-fit lấy 12MB, worst-fit lấy 28MB.)"
    },
    {
      n: 22,
      text: "If a higher priority process arrives and wants service, the memory manager can swap out the lower priority process to execute the higher priority process. When the higher priority process finishes, the lower priority process is swapped back in and continues execution. This variant of swapping is sometimes called?",
      options: ["roll out, roll in", "priority swapping", "pull in, push out", "pull out, push in"],
      answers: [0],
      explain: "Swap tiến trình ưu tiên thấp ra đĩa (roll out) để nhường chỗ, rồi đưa trở lại (roll in) khi xong — gọi là ROLL OUT, ROLL IN. (Silberschatz)"
    },
    {
      n: 23,
      text: "What is the purpose of a segment table in a segmented memory system?",
      options: ["To store the contents of disk pages", "To map segment numbers to physical addresses", "To manage CPU cache memory", "To control input/output operations"],
      answers: [1],
      explain: "Bảng segment: mỗi mục chứa base (địa chỉ bắt đầu trong RAM) và limit (kích thước) của segment → dịch địa chỉ logic (segment, offset) thành địa chỉ vật lý = base + offset, đồng thời kiểm tra offset < limit."
    },
    {
      n: 24,
      text: "The percentage of times a page number is found in the TLB is known as ________",
      options: ["miss ratio", "miss percent", "hit ratio", "hit percent"],
      answers: [2],
      explain: "HIT RATIO của TLB = tỉ lệ tra cứu trúng TLB (thường > 99% nhờ tính cục bộ). Trượt TLB phải tra bảng trang trong RAM — chậm hơn nhiều."
    },
    {
      n: 25,
      text: "When there is a large logical address space, the best way of paging would be ________",
      options: ["not to page", "a two-level paging algorithm", "the page table itself", "a single-level paging algorithm"],
      answers: [1],
      explain: "Không gian địa chỉ lớn → bảng trang một cấp khổng lồ. Bảng trang HAI CẤP (multilevel) chỉ cấp phát bảng cấp dưới cho vùng địa chỉ thật dùng → tiết kiệm bộ nhớ, là cách làm tối ưu."
    },
    {
      n: 26,
      text: "____ searches the entire list, from beginning to end, and takes the smallest hole that is adequate.",
      options: ["Best fit", "Next fit", "Worst fit", "First fit"],
      answers: [0],
      explain: "BEST FIT quét toàn bộ danh sách lỗ trống và chọn lỗ NHỎ NHẤT còn đủ chứa yêu cầu → bỏ lại phần thừa nhỏ nhất nhưng tạo nhiều mảnh vụn li ti. First fit dừng ở lỗ đầu tiên đủ."
    },
    {
      n: 27,
      text: "The ______ swapes processes in and out of the memory.",
      options: ["CPU", "CPU manager", "Memory manager", "User"],
      answers: [2],
      explain: "MEMORY MANAGER (bộ quản lý bộ nhớ) chịu trách nhiệm swapping: đưa tiến trình xuống đĩa (swap out) và nạp trở lại RAM (swap in) khi có chỗ."
    },
    {
      n: 28,
      text: "What is the main advantage of using the Clock Algorithm over the Second Chance Algorithm in terms of page replacement efficiency?",
      options: ["The Clock algorithm eliminates the need to move pages around, reducing overhead.", "The Clock algorithm increases the complexity of implementation.", "The Clock algorithm guarantees fewer page faults compared to Second Chance algorithm.", "The Clock algorithm uses more memory to maintain the circular structure."],
      answers: [0],
      explain: "Second Chance di chuyển trang được tha thứ về cuối danh sách; Clock chỉ xoay con trỏ quét bit R trên danh sách vòng — KHÔNG phải dịch chuyển trang → overhead thấp hơn."
    },
    {
      n: 29,
      text: "Files are _____ units of information created by processes.",
      options: ["physical", "logical", "sequential", "conditional"],
      answers: [1],
      explain: "File là các đơn vị thông tin LOGICAL do tiến trình tạo ra (theo góc nhìn người dùng); cách sắp xếp vật lý trên đĩa là việc của OS/file system, không thuộc mô hình file."
    },
    {
      n: 30,
      text: "Which file is a sequence of bytes organized into blocks, understandable by the system's linker?",
      options: ["Text file", "Object file", "Source file", "Executable file"],
      answers: [1],
      explain: "OBJECT FILE (trung gian) chứa mã máy đã biên dịch theo khối cùng bảng symbol/relocation — chính là thứ linker đọc để liên kết thành executable. Source file là mã nguồn, executable đã liên kết xong."
    },
    {
      n: 31,
      text: "Suppose you need to design a file system that optimizes file retrieval by keeping related file blocks close together. Which file allocation strategy would you choose, considering performance improvements?",
      options: ["Linked lists", "Contiguous files", "File-allocation tables", "i-nodes"],
      answers: [1],
      explain: "CONTIGUOUS allocation đặt toàn bộ khối của file cạnh nhau → đọc tuần tự chỉ cần vài seek, hiệu năng truy xuất tốt nhất. Linked/i-node phân tán khối khắp đĩa, nhiều seek."
    },
    {
      n: 32,
      text: "How does a relative path differ from an absolute path?",
      options: ["Relative paths always start from the root directory", "Relative paths are shorter than absolute paths", "Relative paths depend on the current working directory", "Relative paths contain only file extensions"],
      answers: [2],
      explain: "Relative path tính từ THƯ MỤC HIỆN HÀNH (working directory), không bắt đầu bằng /. Absolute path luôn xuất phát từ root — đường dẫn tuyệt đối bất kể đang đứng ở đâu."
    },
    {
      n: 33,
      text: "Critically evaluate the effectiveness of caching and read-ahead techniques in file-system performance enhancement, highlighting their respective contributions and potential limitations.",
      options: ["Caching significantly speeds up file retrieval but may suffer from cache coherence issues, while read-ahead enhances performance by predicting file accesses but may cause unnecessary disk reads.", "Caching and read-ahead techniques have no impact on file-system performance, as their benefits are negligible compared to other optimization methods.", "Caching significantly slows down system performance by frequently accessed data but leads to increased latency, whereas read-ahead ensures faster file retrieval without any drawbacks.", "Caching and read-ahead both substantially improve file-system performance without any associated limitations or drawbacks."],
      answers: [0],
      explain: "Cache giúp đọc lại dữ liệu nóng tức thì nhưng phải lo đồng bộ (coherence) với đĩa; read-ahead đoán trước và nạp sẵn khối kế tiếp — tăng tốc đọc tuần tự nhưng đoán sai gây đọc lãng phí. A đánh giá đúng cả ưu lẫn hạn chế."
    },
    {
      n: 34,
      text: "Disk can be divided up into one or more partitions. The first block of every partition is called:",
      options: ["Boot block", "Free block", "Super block", "MBR"],
      answers: [0],
      explain: "Mỗi phân vùng bắt đầu bằng BOOT BLOCK (khối khởi động) — thường trống trừ phân vùng hệ điều hành, chứa code bootstrap. MBR là sector 0 của cả ĐĨA (trước các phân vùng)."
    },
    {
      n: 35,
      text: "Consider a 4-TB disk that uses 4-KB blocks and the free-list method. How many block addresses can be stored in one block?",
      options: ["1024 addresses", "256 addresses", "512 addresses", "2048 addresses", "128 addresses"],
      answers: [0],
      explain: "4TB/4KB = 2<sup>30</sup> khối → địa chỉ 4 byte. Một khối 4KB chứa 4096/4 = 1024 địa chỉ khối trong danh sách rỗi."
    },
    {
      n: 36,
      text: "Using a linked list of disk blocks, with a 1-KB block and a 32-bit disk block number, how many blocks were held on a free list management block?",
      options: ["256", "1024", "32", "128"],
      answers: [0],
      explain: "Khối 1KB = 1024 byte; mỗi số khối chiếm 32 bit = 4 byte → 1024/4 = 256 số khối lưu được trong một khối quản lý danh sách rỗi."
    },
    {
      n: 37,
      text: "The hardware mechanism that allows a device to notify the CPU is called ______",
      options: ["interrupt", "polling", "driver", "controlling"],
      answers: [0],
      explain: "INTERRUPT: tín hiệu phần cứng qua đường ngắt (interrupt controller) để thiết bị thông báo sự kiện cho CPU — thay thế polling."
    },
    {
      n: 38,
      text: "Which RAID level provides disk striping without fault tolerance?",
      options: ["RAID 0", "RAID 1", "RAID 2", "RAID 5", "RAID 6"],
      answers: [0],
      explain: "RAID 0: striping (dải dữ liệu trên nhiều đĩa) tăng tốc đọc/ghi nhưng KHÔNG có redundancy — một đĩa hỏng mất hết dữ liệu. RAID 1 mirror, 5/6 có parity."
    },
    {
      n: 39,
      text: "In Disk Arm Scheduling Algorithms: Consider the seek to cylinder 11 is in progress, new requests come in for cylinders 1, 36, 16, 34, 9, and 12. A seek takes 6 ms per cylinder. Calculate Seek time with Shortest Seek First (SSF) algorithm?",
      options: ["360ms", "366ms", "500ms", "568ms", "666ms"],
      answers: [1],
      explain: "SSF từ 11: 12 (1) → 9 (3) → 16 (7) → 1 (15) → 34 (33) → 36 (2) = 61 cylinder. Thời gian = 61 × 6 ms = 366 ms."
    },
    {
      n: 40,
      text: "What is the goal of uniform naming in the context of file and device management?",
      options: ["To make file names unique to each device", "To limit file names to a specific format", "To differentiate file names based on the device type", "To ensure the name of a file or device is a simple string or integer, independent of the device"],
      answers: [3],
      explain: "Tên thống nhất (uniform naming): file hay thiết bị đều được gọi bằng một chuỗi/số nguyên đơn giản, KHÔNG phụ thuộc thiết bị — cùng một tên hoạt động mọi nơi (một trong bốn mục tiêu của Tanenbaum cho file/device management)."
    },
    {
      n: 41,
      text: "While the seek for cylinder 11 is in progress, new requests appear for cylinders 1, 36, 16, 34, 9, and 12. Considering FCFS (First Come First Service) scheduling, what is the total number of head movements?",
      options: ["111", "61", "60", "100"],
      answers: [0],
      explain: "FCFS phục vụ theo thứ tự đến: 11→1 (10), 1→36 (35), 36→16 (20), 16→34 (18), 34→9 (25), 9→12 (3). Tổng = 111 cylinder."
    },
    {
      n: 42,
      text: "In DMA transfer cycle, what two modes can many buses operate in?",
      options: ["Word-at-a-time mode and byte mode.", "Word-at-a-time mode and block mode.", "Word-at-a-time mode and bit mode.", "Word-at-a-time mode and page mode."],
      answers: [1],
      explain: "Bus trong chu kỳ DMA vận hành 2 chế độ: word-at-a-time (mỗi lần một từ, nhường bus xen kẽ CPU) và block mode (DMA độc chiếm bus, truyền cả khối liên tục). (Tanenbaum)"
    },
    {
      n: 43,
      text: "For I/O operations, what is a common block size range is used in a file system or the storage medium?",
      options: ["512 to 8192 bytes", "512 to 16384 bytes", "512 to 32768 bytes", "512 to 65536 bytes"],
      answers: [2],
      explain: "Kích thước khối thiết bị khối thông thường từ 512 byte đến 32.768 byte (32KB) — dải mà các file system/ổ đĩa thường chọn. (Tanenbaum)"
    },
    {
      n: 44,
      text: "What addresses are typically used by most DMA controllers for transmission?",
      options: ["Logical memory", "Abstract memory", "Virtual memory", "Physical memory"],
      answers: [3],
      explain: "DMA controller thao tác trực tiếp trên bus với ĐỊA CHỈ VẬT LÝ (physical memory) — nó không hiểu bảng trang. Vì vậy khi buffer nằm trong bộ nhớ ảo, OS phải khóa các trang vật lý tương ứng."
    },
    {
      n: 45,
      text: "The number of resources requested by a process___",
      options: ["must always be less than the total number of resources available in the system", "must not exceed the total number of resources available in the system", "must always be equal to the total number of resources available in the system", "must exceed the total number of resources available in the system"],
      answers: [1],
      explain: "Tổng nhu cầu của tiến trình KHÔNG ĐƯỢC VƯỢT tổng tài nguyên hệ thống — điều kiện hiển nhiên: nếu yêu cầu nhiều hơn hệ thống có thì tiến trình đó không bao giờ chạy xong (deadlock chắc chắn). Có thể BẰNG tổng tài nguyên nên \"less than\" (A) quá chặt."
    },
    {
      n: 46,
      text: "What is a key advantage of using DMA for data transfer operations?",
      options: ["Increased CPU involvement in data transfers", "Faster data transfer speeds", "Limited device compatibility", "Decreased device control over memory"],
      answers: [1],
      explain: "DMA truyền cả khối dữ liệu trực tiếp vào RAM với tốc độ phần cứng, chỉ ngắt CPU một lần khi xong → TỐC ĐỘ TRUYỀN nhanh hơn và giải phóng CPU (so với chuyển từng byte)."
    },
    {
      n: 47,
      text: "Which of the following isn't a method to prevent deadlocks in operating systems?",
      options: ["Attacking the Mutual Exclusion Condition", "Use Banker's Algorithm", "Attacking the Hold and Wait Condition", "Attacking the No Preemption Condition", "Attacking the Circular Wait Condition"],
      answers: [1],
      explain: "Banker's Algorithm thuộc nhóm deadlock AVOIDANCE (tránh bằng kiểm tra trạng thái an toàn), không phải PREVENTION (phòng bằng phá các điều kiện Coffman: mutual exclusion, hold-and-wait, no preemption, circular wait)."
    },
    {
      n: 48,
      text: "A problem closely related to deadlock and livelock is ____",
      options: ["Starvation", "Communication", "Two-phase locking", "Prevention"],
      answers: [0],
      explain: "STARVATION (đói tài nguyên): tiến trình chờ vô hạn dù hệ thống không deadlock — cùng họ vấn đề \"tiến trình không được tiến triển\" với deadlock/livelock. (Tanenbaum nêu deadlock, livelock, starvation là các vấn đề liên quan của đồng bộ.)"
    },
    {
      n: 49,
      text: "In disk scheduling, which algorithm is considered the fairest but may lead to high seek times?",
      options: ["FCFS", "SSTF", "SCAN", "C-SCAN"],
      answers: [0],
      explain: "FCFS phục vụ đúng thứ tự yêu cầu → công bằng nhất (không ai bị vượt hàng), nhưng đầu đĩa chạy lạc què giữa các cylinder xa nhau → seek time cao."
    },
    {
      n: 50,
      text: "Evaluate the role of memory virtualization in optimizing resource allocation in a virtualized environment. How does this technique impact overall system performance?",
      options: ["It effectively isolates processes from one another, which can lead to a reduction in overall system performance due to the additional resources required for maintaining this isolation.", "It enhances resource allocation efficiency, improving system performance.", "It complicates memory management, decreasing performance.", "It only impacts I/O performance, not overall system performance."],
      answers: [1],
      explain: "Memory virtualization cấp phát/chia sẻ RAM linh hoạt giữa các VM (shadow page table, EPT/NPT, page sharing) → tận dụng bộ nhớ hiệu quả và CẢI THIỆN hiệu năng tổng thể của môi trường ảo hóa."
    }
  ]
});
