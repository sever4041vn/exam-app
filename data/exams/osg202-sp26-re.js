// OSG202 - Spring 2026 - Retake Exam
// Nguồn: OSG202 - SP26 - RE.pdf (50 câu hỏi trắc nghiệm, format FUO)
window.EXAMAPP_EXAMS = window.EXAMAPP_EXAMS || [];
window.EXAMAPP_EXAMS.push({
  id: "osg202-sp26-re",
  subjectId: "OSG202",
  title: "OSG202 - Spring 2026 - Retake Exam",
  originalFile: "OSG202 - SP26 - RE.pdf",
  semester: "Spring 2026",
  semesterKey: "sp26",
  type: "Retake Exam",
  typeKey: "retake",
  durationMinutes: 60,
  imagePath: "images/osg202/sp26-re/",
  questions: [
    {
      n: 1,
      text: "A system has 15 memory blocks and three processes: P1, P2, P3. Their memory requirements and allocations are given below:<table class=\"mini-table\"><tr><td>Process</td><td>Maximum Needed</td><td>Allocated</td></tr><tr><td>P1</td><td>8</td><td>3</td></tr><tr><td>P2</td><td>6</td><td>4</td></tr><tr><td>P3</td><td>5</td><td>3</td></tr></table><br>If the number of available memory blocks in the system at this moment is 5, what is the state of the system?",
      options: ["Safe", "Unsafe", "Deadlock", "Starvation"],
      answers: [0],
      explain: "Nhu cầu còn lại: P1 = 5, P2 = 2, P3 = 2. Available = 5 → P2 (cần 2) chạy xong trả 4 → Available 9 → P3 (cần 2) xong trả 3 → 12 → P1 (cần 5) xong. Chuỗi an toàn P2→P3→P1 tồn tại → SAFE."
    },
    {
      n: 2,
      text: "A system has three processes: P1, P2, P3 and four resources: RS1, RS2, RS3, RS4. The following allocation and request matrices are given:<br>Allocation: C1 = (1,0,0,1), C2 = (0,1,1,1), C3 = (0,1,2,0) — theo RS1..RS4.<br>Requested: R1 = (2,0,0,1), R2 = (0,1,1,0), R3 = (1,1,0,0).<br>Available resources: (2,1,0,1).<br>What is the correct execution order of processes?",
      options: ["P3 → P2 → P1", "P2 → P1 → P3", "P1 → P2 → P3", "P2 → P3 → P1"],
      answers: [0],
      explain: "Available (2,1,0,1): P2 cần (0,1,1,0) thiếu RS3 → không chạy được; P3 cần (1,1,0,0) đủ → chạy xong trả (0,1,2,0) → Available (2,2,2,1); sau đó P2 cần (0,1,1,0) đủ → chạy; cuối cùng P1 (2,0,0,1) đủ. Thứ tự hợp lệ duy nhất trong các lựa chọn: P3 → P2 → P1."
    },
    {
      n: 3,
      text: "Why is deadlock prevention often favored in embedded or real-time systems over avoidance?",
      options: ["Guarantees fixed timing without complex runtime checks", "Allows resource sharing in dynamic threads", "Uses fewer memory segments during paging", "Facilitate integration with authentication systems across process layers"],
      answers: [0],
      explain: "Prevention (thiết kế chặt chẽ: thứ tự tài nguyên, cấp phát một lần…) kiểm tra tĩnh khi thiết kế, không cần chạy thuật toán an toàn (như Banker's) mỗi lần cấp phát → thời điểm phản hồi xác định, phù hợp hệ real-time/embedded cần timing đảm bảo."
    },
    {
      n: 4,
      text: "Which of the following best describes a monolithic operating system structure?",
      options: ["A system where all functionalities are divided into separate processes", "A system where only file management is in the kernel", "A system where all components run in supervisor mode", "A system where drivers are executed in user space"],
      answers: [2],
      explain: "Monolithic: toàn bộ dịch vụ OS (scheduler, memory, file, driver) nằm trong một kernel duy nhất chạy trong supervisor mode. Chia tiến trình riêng = microkernel; driver user space = mô hình module người dùng."
    },
    {
      n: 5,
      text: "Given the segment table below:<table class=\"mini-table\"><tr><td>Segment</td><td>Limit</td><td>Base</td></tr><tr><td>0</td><td>600</td><td>219</td></tr><tr><td>1</td><td>14</td><td>2300</td></tr><tr><td>2</td><td>100</td><td>90</td></tr><tr><td>3</td><td>580</td><td>1327</td></tr><tr><td>4</td><td>96</td><td>1952</td></tr></table><br>What is the physical address for the logical address (2, 50)?",
      options: ["140", "130", "150", "Invalid address"],
      answers: [0],
      explain: "Segment 2: Base = 90, Limit = 100. Offset 50 < 100 → hợp lệ. Địa chỉ vật lý = 90 + 50 = 140."
    },
    {
      n: 6,
      text: "Which of the following file system operations is NOT supported in Win32 but exists in UNIX?",
      options: ["rename", "mkdir", "link", "rmdir"],
      answers: [2],
      explain: "Win32 không có lệnh link (tạo hard link giữa hai tên cùng trỏ một file) như UNIX. Rename/mkdir/rmdir đều có trong cả hai hệ. (Bảng so sánh system call Win32 vs UNIX của Tanenbaum.)"
    },
    {
      n: 7,
      text: "Which of the following is NOT a core function of an operating system?",
      options: ["Process management", "Memory management", "File management", "Internet browsing", "I/O management"],
      answers: [3],
      explain: "Internet browsing là ứng dụng người dùng, không phải chức năng lõi của OS. Quản lý tiến trình/bộ nhớ/file/I/O đều là nhiệm vụ cốt lõi."
    },
    {
      n: 8,
      text: "What is a cache hit in CPU cache memory?",
      options: ["When the requested data is found in the cache, avoiding access to main memory.", "When the CPU fails to locate data in the cache and retrieves it from RAM.", "When a new cache line is added to the cache memory and collides with previously stored data.", "When all cache levels are fully utilized by the CPU"],
      answers: [0],
      explain: "Cache hit: dữ liệu cần có sẵn trong cache → không phải truy cập RAM chậm. Không tìm thấy gọi là cache miss; va chạm dòng cache là cache conflict (một dạng miss)."
    },
    {
      n: 9,
      text: "Assuming there is an entry in /etc/passwd file (file stores essential information, which is required during login) as follows:<br>john:x:1002:1000:John Henry:/bin/bash<br>Choose the best correct statement.",
      options: ["Username = john and userid = 1002", "Username = John Henry and userid = 1002", "Username = john and userid = 1000", "Username = John Henry and userid = 1000"],
      answers: [0],
      explain: "Định dạng /etc/passwd: name:passwd:UID:GID:GECOS:home:shell → username = john, UID = 1002, GID = 1000, tên đầy đủ (GECOS) = John Henry. Vậy câu đúng: Username = john, userid = 1002."
    },
    {
      n: 10,
      text: "Which resource allocation strategy is most likely to prevent deadlock while still allowing high resource utilization?",
      options: ["Granting requests based on the order they arrive", "Preempting resources whenever a higher-priority process arrives", "Allowing processes to hold resources indefinitely until they complete", "Allocating resources based on a resource hierarchy"],
      answers: [3],
      explain: "Resource hierarchy (phân cấp/đánh số tài nguyên, chỉ xin theo thứ tự tăng) phá circular wait mà gần như không giới hạn sử dụng tài nguyên → vừa tránh deadlock vừa giữ utilization cao."
    },
    {
      n: 11,
      text: "Which condition must be present for deadlock to occur?",
      options: ["Preemption of processes during execution", "Circular wait among resource holders", "Dynamic allocation of memory blocks", "Termination of all low-priority threads"],
      answers: [1],
      explain: "Trong bốn điều kiện Coffman, circular wait (chuỗi tiến trình chờ vòng tròn lẫn nhau) là điều kiện bắt buộc phải có — không có chu trình thì không deadlock. Preemption ngược lại làm GIẢM nguy cơ deadlock."
    },
    {
      n: 12,
      text: "To ensure that the hold and wait condition never occurs in the system, it must be ensured that ________",
      options: ["whenever a resource is requested by a process, it is not holding any other resources", "each process must request and be allocated at least one of its resources before it begins its execution", "each process must request and be allocated all its resources before it begins its execution", "a process can request resources only when it has none"],
      answers: [2],
      explain: "Phá hold-and-wait bằng chính sách: tiến trình phải xin và được cấp TOÀN BỘ tài nguyên cần trước khi bắt đầu thực thi (hoặc không được giữ gì khi đang chờ). Đây là câu hỏi kinh điển của Silberschatz — đáp án chuẩn là C."
    },
    {
      n: 13,
      text: "Time to move the arm to the proper cylinder is called?",
      options: ["Seek time", "Rotational delay", "Actual data transfer time", "Access time"],
      answers: [0],
      explain: "Seek time là thời gian di chuyển đầu đọc/ghi đến cylinder cần thiết. Rotational delay là chờ đĩa quay tới sector; transfer time là thời gian truyền dữ liệu."
    },
    {
      n: 14,
      text: "What does the Banker's Algorithm check before granting a resource request?",
      options: ["If granting the request will lead to a safe state.", "If the request is within the current needs of the process.", "If there are enough resources available.", "If the requesting process has priority."],
      answers: [0],
      explain: "Banker's tạm giả định cấp phát theo yêu cầu rồi chạy kiểm tra trạng thái: CHỈ cấp nếu kết quả là trạng thái an toàn (tồn tại chuỗi hoàn thành). Điều kiện \"còn đủ tài nguyên\" chỉ là bước sơ bộ."
    },
    {
      n: 15,
      text: "RAID level ____ works worst with operating systems that habitually ask for data one sector at a time.",
      options: ["0", "1", "2", "3"],
      answers: [3],
      explain: "RAID 3 phân tách dữ liệu theo byte trên các đĩa + parity riêng; mọi yêu cầu đều phải kích hoạt toàn bộ đĩa song song → với OS xin từng sector rời, RAID 3 xử lý tuần tự, hiệu năng tệ nhất. (Tanenbaum)"
    },
    {
      n: 16,
      text: "What is the effect of using interrupts instead of polling for I/O?",
      options: ["Slower response time to external events", "Higher CPU usage due to constant checking", "More efficient use of processor cycles", "Reduced control over process priorities"],
      answers: [2],
      explain: "Interrupt-based I/O: CPU chỉ bị ngắt khi thiết bị thật sự sẵn sàng, giữa chừng làm việc khác → sử dụng chu kỳ processor hiệu quả hơn polling (lãng phí CPU vào việc hỏi vòng)."
    },
    {
      n: 17,
      text: "What is the role of the file system in disk management?",
      options: ["To allocate memory for disk operations.", "To manage the disk's hardware components.", "To organize and track files and data on the disk.", "To design disk controllers."],
      answers: [2],
      explain: "File system tổ chức và theo dõi file/dữ liệu trên đĩa: quản lý thư mục, cấp phát khối, metadata. Phần cứng đĩa/controller nằm ngoài phạm vi file system."
    },
    {
      n: 18,
      text: "What is the time takes to move the arm to the proper cylinder is called?",
      options: ["Seek time", "Position time", "Rotational delay", "Transfer time"],
      answers: [0],
      explain: "Seek time — thời gian cánh tay đưa đầu đọc đến đúng cylinder. Rotational delay chờ quay tới sector, transfer time là thời gian đọc/ghi dữ liệu."
    },
    {
      n: 19,
      text: "In data communication and I/O (Input/Output) operations, besides converting the serial bit stream into a block of bytes, what else does the controller's job do?",
      options: ["Perform any error correction necessary", "Perform convert the sequence bit stream into a block of bytes", "Perform connecting I/O devices", "Perform read and write serial bit stream into a block of bytes"],
      answers: [0],
      explain: "Nhiệm vụ controller (Tanenbaum): chuyển luồng bit nối tiếp thành khối byte, sửa lỗi (error correction) khi cần — CRC/ECC, ngoài ra còn phản hồi cho hệ điều hành."
    },
    {
      n: 20,
      text: "What is the purpose of the spindle in a hard disk drive?",
      options: ["To store data temporarily", "To read and write data to the platters", "To control the movement of the read/write head", "To provide power to the disk", "To cool the disk during operation"],
      answers: [3],
      explain: "Spindle là trục quay gắn các platter, quay chúng đều đặn nhờ motor (5400/7200 RPM) — tức cung cấp năng lượng quay cho đĩa. Đọc/ghi dữ liệu do đầu từ; điều khiển đầu từ do actuator."
    },
    {
      n: 21,
      text: "What happens when a USB stick is mounted on the directory /usr/ast/backup in UNIX?",
      options: ["The USB stick becomes inaccessible through the regular file system", "Files copied to /usr/ast/backupmonday are stored directly on the USB stick", "Files on the USB stick are deleted", "The directory /usr/ast/backup is overwritten by the contents of the USB stick"],
      answers: [1],
      explain: "Mount gắn hệ file của USB vào cây thư mục tại điểm mount: mọi thao tác ghi vào /usr/ast/backup (ví dụ tạo /usr/ast/backupmonday) sẽ lưu TRỰC TIẾP lên USB. Thư mục gốc không bị xóa, chỉ bị che khuất tạm thời."
    },
    {
      n: 22,
      text: "The hardware mechanism that allows a device to notify the CPU is called ........",
      options: ["interrupt", "polling", "driver", "controlling"],
      answers: [0],
      explain: "Interrupt (ngắt) là tín hiệu phần cứng cho phép thiết bị báo cho CPU biết sự kiện/xong việc, thay cho việc CPU phải hỏi vòng (polling)."
    },
    {
      n: 23,
      text: "Which extension field provides an alternative name for a file or directory?",
      options: ["Alternate Name", "Relocated Directory", "Time Stamp", "Parent Link"],
      answers: [0],
      explain: "Trong các trường mở rộng của ISO 9660/Rock Ridge, Alternate Name (NM) cung cấp tên thay thế dài hơn/tên POSIX cho file hay thư mục (thay cho tên 8.3 gốc). Relocated Directory xử lý thư mục sâu, Time Stamp lưu dấu thời gian."
    },
    {
      n: 24,
      text: "In file systems, what is sector 0 of the disk called?",
      options: ["Boot block", "Superblock", "MBR(Master Boot Record)", "Free space mgmt"],
      answers: [2],
      explain: "Sector 0 của ĐĨA là MBR (Master Boot Record) — chứa bootstrap code và bảng phân vùng, được BIOS/UEFI đọc đầu tiên khi boot. (Boot block là sector đầu của mỗi phân vùng.)"
    },
    {
      n: 25,
      text: "Which file access method is often used to optimize access to large files in a file system?",
      options: ["Sequential access", "Direct access", "Indexed access", "Linked access"],
      answers: [2],
      explain: "Indexed access dùng bảng chỉ mục để truy cập trực tiếp bất kỳ khối nào của file — tối ưu cho file lớn (UNIX i-node, multilevel index). Linked access phải đi theo chuỗi con trỏ, rất chậm với file lớn."
    },
    {
      n: 26,
      text: "The simplest form of directory system is having one directory containing all the files. It is called the ____",
      options: ["Root directory", "User directory", "Parent directory", "Current directory"],
      answers: [0],
      explain: "Hệ thư mục một cấp (single-level): một thư mục duy nhất chứa mọi file — thư mục này là ROOT DIRECTORY (thư mục gốc). Nhược điểm: dễ trùng tên và khó nhóm file theo người dùng/chủ đề."
    },
    {
      n: 27,
      text: "What is the purpose of Direct Memory Access (DMA) in an operating system?",
      options: ["To allocate memory to processes", "To allow devices to transfer data to and from memory without CPU intervention", "To provide direct access to the CPU", "To prevent access to system memory", "To manage virtual memory"],
      answers: [1],
      explain: "DMA controller tự truyền dữ liệu giữa thiết bị và RAM theo khối, CPU chỉ khởi đầu và nhận ngắt khi xong — giải phóng CPU khỏi việc chuyển từng byte (so với programmed/interrupt I/O)."
    },
    {
      n: 28,
      text: "In UNIX, which type of file is used to model disks?",
      options: ["Regular files.", "Character special files.", "Block special files.", "Directories"],
      answers: [2],
      explain: "Block special files mô hình các THIẾT BỊ KHỐI (đĩa cứng, USB) — đọc/ghi theo khối có địa chỉ. Character special files cho thiết bị luồng (terminal, printer). Regular files chứa dữ liệu người dùng."
    },
    {
      n: 29,
      text: "Which of the following best describes the difference between a process and a thread in the context of the Windows operating system?",
      options: ["A process contains multiple threads and shares resources, while a thread is an independent execution unit within a process.", "A process is a program in execution, while a thread is a sequence of instructions that can execute independently.", "A process and a thread are essentially the same in Windows OS, with no significant difference between them.", "A process represents system resources, while a thread is responsible for user interface interactions in Windows OS."],
      answers: [0],
      explain: "Trong Windows: tiến trình là container nắm tài nguyên (không gian địa chỉ, handle, heap) chứa nhiều thread; thread là đơn vị thực thi/scheduling độc lập trong tiến trình, chia sẻ tài nguyên của tiến trình đó."
    },
    {
      n: 30,
      text: "What is Contiguous Allocation in file systems?",
      options: ["Files are stored in non-contiguous blocks on disk", "Each file is allocated a contiguous block of disk space", "Files are linked together to form a chain", "Files are allocated using an index structure"],
      answers: [1],
      explain: "Contiguous allocation: mỗi file chiếm một dãy khối LIÊN TỤC trên đĩa. Ưu điểm đọc tuần tự cực nhanh; nhược điểm gây phân mảnh ngoài và khó mở rộng file."
    },
    {
      n: 31,
      text: "What is the primary goal of the \"working set model\" in page replacement algorithms?",
      options: ["To minimize internal fragmentation by using small page sizes.", "To ensure that processes always run with a fixed number of pages in memory.", "To prepage all pages a process might ever need into memory before execution.", "To greatly reduce the page fault rate by keeping a process's active pages in memory."],
      answers: [3],
      explain: "Working set = tập trang tiến trình dùng gần đây (trong cửa sổ thời gian Δ). Giữ working set của mỗi tiến trình trong RAM khiến page fault rate giảm mạnh và tránh thrashing."
    },
    {
      n: 32,
      text: "Most virtual memory systems use a technique called_____ ?",
      options: ["Page Fault", "Page Frames", "Page Table", "Paging"],
      answers: [3],
      explain: "Hầu hết hệ bộ nhớ ảo hiện đại hiện thực bằng PAGING — chia không gian địa chỉ thành các trang cố định và ánh xạ sang frame vật lý. Page fault/page table chỉ là thành phần của cơ chế paging."
    },
    {
      n: 33,
      text: "What is the main advantage of using the Clock Algorithm over the Second Chance Algorithm in terms of page replacement efficiency?",
      options: ["The Clock algorithm eliminates the need to move pages around, reducing overhead.", "The Clock algorithm increases the complexity of implementation.", "The Clock algorithm guarantees fewer page faults compared to Second Chance algorithm.", "The Clock algorithm uses more memory to maintain the circular structure."],
      answers: [0],
      explain: "Second Chance phải di chuyển trang được tha thứ xuống cuối danh sách FIFO; Clock chỉ xoay con trỏ trên danh sách vòng và kiểm tra bit R — không phải dịch chuyển trang → ít overhead hơn với chất lượng tương đương."
    },
    {
      n: 34,
      text: "In 1965, Dijkstra posed and then solved a synchronization problem he called ____",
      options: ["the dining philosophers problem", "the ostrich algorithm", "the banker's algorithm", "the allocation algorithm"],
      answers: [0],
      explain: "Năm 1965, Dijkstra đặt ra và giải quyết bài toán Dining Philosophers (5 triết gia ăn mì, 5 cái đũa) — minh họa kinh điển cho đồng bộ hóa và deadlock trong truy cập tài nguyên dùng chung."
    },
    {
      n: 35,
      text: "Suppose a system aims to handle data structures that can dynamically change in size and simplify sharing. Which memory management technique would best suit this scenario?",
      options: ["Segmentation with paging", "Swapping with page tables", "Virtual memory with aging algorithms", "Monolithic memory allocation"],
      answers: [0],
      explain: "Segmentation cho phép đoạn (code/data/stack) lớn dần độc lập và dễ chia sẻ giữa các tiến trình (chia sẻ segment); kết hợp paging (MULTICS) để nạp rời rạc và bỏ phân mảnh ngoài → phù hợp cấu trúc dữ liệu thay đổi kích thước."
    },
    {
      n: 36,
      text: "What is the role of the Memory Management Unit (MMU) in a computer system?",
      options: ["The MMU translates virtual addresses into physical addresses", "It controls the allocation of memory to different processes.", "It manages the paging and swapping of memory pages.", "It is a data structure used in computer operating systems for virtual memory management"],
      answers: [0],
      explain: "MMU là đơn giản phần cứng dịch địa chỉ ảo → vật lý qua bảng trang (có hỗ trợ TLB). Việc cấp phát/swap là trách nhiệm của phần mềm OS."
    },
    {
      n: 37,
      text: "If a higher priority process arrives and wants service, the memory manager can swap out the lower priority process to execute the higher priority process. When the higher priority process finishes, the lower priority process is swapped back in and continues execution. This variant of swapping is sometimes called?",
      options: ["roll out, roll in", "priority swapping", "pull in, push out", "pull out, push in"],
      answers: [0],
      explain: "Kỹ thuật swap tiến trình ưu tiên thấp ra đĩa để nhường bộ nhớ cho tiến trình ưu tiên cao, rồi swap trở lại gọi là ROLL OUT, ROLL IN. (Silberschatz)"
    },
    {
      n: 38,
      text: "In the Classical IPC Problems, specifically the Readers-Writers problem, what condition may lead to writer starvation?",
      options: ["A continuous stream of incoming readers", "A reader exits too early", "The mutex semaphore remains locked", "Too many writers writing at the same time"],
      answers: [0],
      explain: "Lời giải ưu tiên reader: chừng nào còn reader (rc > 0) thì writer bị chặn — dòng reader liên tục khiến writer đói vô hạn (writer starvation)."
    },
    {
      n: 39,
      text: "What is the benefit of using paging in virtual memory systems?",
      options: ["Enhanced CPU performance", "Improved disk storage management", "Efficient memory utilization", "Faster network communication"],
      answers: [2],
      explain: "Paging chia bộ nhớ thành trang/frame cố định, nạp rời rạc, không phân mảnh ngoài → tận dụng RAM hiệu quả; kết hợp bộ nhớ ảo cho phép chạy tiến trình lớn hơn RAM vật lý."
    },
    {
      n: 40,
      text: "Which of the following actions does the operating system take to execute a new process?",
      options: ["Provide immediate CPU for process.", "Delivery the resources must be process.", "Create immediate PCB blocks for process.", "Provide immediate Register for process."],
      answers: [2],
      explain: "Khi tạo tiến trình, OS đầu tiên tạo khối điều khiển tiến trình (PCB — Process Control Block) lưu PID, trạng thái, thanh ghi, bảng trang… PCB là \"hộ chiếu\" để kernel quản lý và lập lịch tiến trình."
    },
    {
      n: 41,
      text: "In a real-time scheduling system, which type of process is given the highest priority?",
      options: ["Shortest processes", "Processes with the highest computation time", "Processes with the earliest deadlines", "Background processes"],
      answers: [2],
      explain: "Real-time scheduling (EDF — Earliest Deadline First): tiến trình có deadline gần nhất được ưu tiên cao nhất vì phải hoàn thành đúng hạn, trễ là thất bại nghiêm trọng."
    },
    {
      n: 42,
      text: "Which of the following is shared among threads of the same process?",
      options: ["Stack memory and program counter for each thread", "File descriptors, heap, and global variables", "CPU registers and instruction pointer", "Cache and clock speed of the CPU"],
      answers: [1],
      explain: "Các thread cùng tiến trình chia sẻ: không gian địa chỉ, heap, biến toàn cục, file mở. Mỗi thread RIÊNG có stack, thanh ghi, program counter — không chia sẻ."
    },
    {
      n: 43,
      text: "The interval from the time of submission of a process to the time of completion is termed as ________",
      options: ["waiting time", "turnaround time", "response time", "throughput"],
      answers: [1],
      explain: "Turnaround time = thời gian từ khi nộp tiến trình đến khi hoàn thành (= waiting + burst). Waiting time chỉ tính thời gian chờ trong ready queue; response time là khoảng đến phản hồi đầu tiên."
    },
    {
      n: 44,
      text: "A process that creates another process is called the:",
      options: ["Child process", "Root process", "Parent process", "Init process"],
      answers: [2],
      explain: "Tiến trình tạo ra tiến trình khác là PARENT (cha); tiến trình được tạo là child (con). Trong UNIX, cha tạo con bằng fork(); init là tổ tiên của mọi tiến trình nhưng không phải định nghĩa này."
    },
    {
      n: 45,
      text: "The Process Control Block (PCB) does NOT store which of the following?",
      options: ["Process state", "CPU registers", "I/O status", "Scheduling information", "Source code"],
      answers: [4],
      explain: "PCB lưu: trạng thái, thanh ghi CPU, thông tin lập lịch, bộ nhớ, I/O, accounting… MÃ NGUỒN chương trình nằm trong executable file trên đĩa, không nằm trong PCB."
    },
    {
      n: 46,
      text: "In the evolution of operating systems, which fundamental shift was the most critical in enabling modern multitasking and time-sharing capabilities?",
      options: ["The introduction of graphical user interfaces (GUIs) in the 1980s", "The transition from batch processing to interactive computing in the 1960s", "The development of single-user operating systems for personal computers in the 1970s", "The adoption of cloud-based virtualization in the 2000s"],
      answers: [1],
      explain: "Chuyển từ batch sang tính toán tương tác (1960s) đã đòi hỏi multiprogramming và time-sharing — nền tảng của đa nhiệm hiện đại. GUI/cloud chỉ là các lớp phát triển sau trên nền tảng đó."
    },
    {
      n: 47,
      text: "A computer is reading a file using single-threaded file server. It takes 12ms to get a request for work, dispatch and do the rest of the necessary processing. If disk operation is additionally required 75ms which is one-third of the total time. How many requests per second can the server can handle?",
      options: ["30", "37", "35", "28"],
      answers: [3],
      explain: "Theo bài tập kinh điển (threads tutorial): chỉ 1/3 số request cần thao tác đĩa 75ms. Thời gian phục vụ trung bình = 12 + (1/3)×75 = 37 ms → xấp xỉ 1000/37 ≈ 27 request/s, giá trị gần nhất trong các lựa chọn là 28."
    },
    {
      n: 48,
      text: "Select the correct statement from the following options.",
      options: ["Mouse is unique tool to interface between user and computer", "Windows operating system does not provide a work in network environment.", "The Windows operating system is viewed as an object that performs tasks.", "The Windows operating system has a graphical interface."],
      answers: [3],
      explain: "Windows nổi tiếng với giao diện đồ họa (GUI) — cửa sổ, biểu tượng, menu. Chuột không phải công cụ giao tiếp duy nhất (còn bàn phím, cảm ứng); Windows hỗ trợ mạng đầy đủ."
    },
    {
      n: 49,
      text: "In a system with limited resources, which deadlock handling strategy is most appropriate for safety-critical applications?",
      options: ["Ostrich algorithm", "Deadlock detection and recovery", "Deadlock avoidance using Banker's algorithm", "Terminating all active tasks and reinitializing the system to recover from potential deadlock"],
      answers: [2],
      explain: "Ứng dụng an toàn quan trọng (safety-critical: y tế, hàng không…) KHÔNG được phép rơi vào deadlock → dùng avoidance (Banker's) để kiểm tra mọi cấp phát trước khi cho phép, đảm bảo hệ thống luôn ở trạng thái an toàn."
    },
    {
      n: 50,
      text: "Which of the following techniques attacks the \"No Preemption\" condition for preventing deadlocks?",
      options: ["Requiring processes to request all resources at once.", "Allowing only one process to use a resource at a time.", "Spooling printer output to disk to allow the printer daemon exclusive access.", "Ordering resources numerically and requiring processes to request them in increasing order."],
      answers: [1],
      explain: "Bốn lựa chọn tương ứng bốn điều kiện Coffman: spooling (C) phá mutual exclusion; xin một lần (A) phá hold-and-wait; đánh số thứ tự (D) phá circular wait. Phương án còn lại (B) ứng với việc phá no preemption — cho phép thu hồi tài nguyên giữa chừng."
    }
  ]
});
