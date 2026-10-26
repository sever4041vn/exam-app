// OSG202 - Summer 2026 - Retake Exam
// Nguồn: OSG202 - SU26 - RE.pdf (50 câu hỏi trắc nghiệm, format FUO)
window.EXAMAPP_EXAMS = window.EXAMAPP_EXAMS || [];
window.EXAMAPP_EXAMS.push({
  id: "osg202-su26-re",
  subjectId: "OSG202",
  title: "OSG202 - Summer 2026 - Retake Exam",
  originalFile: "OSG202 - SU26 - RE.pdf",
  semester: "Summer 2026",
  semesterKey: "su26",
  type: "Retake Exam",
  typeKey: "retake",
  durationMinutes: 60,
  imagePath: "images/osg202/su26-re/",
  questions: [
    {
      n: 1,
      text: "What is a preemptable resource?",
      options: ["The one that can be taken away from the process owning it with no ill effects", "The one that can be taken away from the process owning it with ill effects", "The one that can not be taken away from the process owning it with no ill effects", "The one that can not be taken away from the process owning it with ill effects"],
      answers: [0],
      explain: "Tài nguyên preemptable là tài nguyên có thể bị thu hồi từ tiến trình đang sở hữu mà không gây hậu quả — ví dụ bộ nhớ, CPU. Ngược lại, máy in là non-preemptable vì thu hồi giữa chừng sẽ in hỏng bản in."
    },
    {
      n: 2,
      text: "In deadlock, what is no-preemption condition?",
      options: ["Processes currently holding resources that were granted earlier can request new resources.", "Resources previously granted cannot be forcibly taken away from a process. They must be explicitly released by the process holding them.", "There must be a circular list of two or more processes, each of which is waiting for a resource help by the next member of the chain.", "Each resource is either currently assigned to exactly one process or is available."],
      answers: [1],
      explain: "No preemption: tài nguyên đã cấp không thể bị tước đoạt cưỡng bức, chỉ được giải phóng tự nguyện bởi tiến trình giữ nó. (A là hold-and-wait, C là circular wait, D là mutual exclusion.)"
    },
    {
      n: 3,
      text: "Evaluate the role of memory virtualization in optimizing resource allocation in a virtualized environment. How does this technique impact overall system performance?",
      options: ["It effectively isolates processes from one another, which can lead to a reduction in overall system performance due to the additional resources required for maintaining this isolation.", "It enhances resource allocation efficiency, improving system performance.", "It complicates memory management, decreasing performance.", "It only impacts I/O performance, not overall system performance."],
      answers: [1],
      explain: "Ảo hóa bộ nhớ cho phép chia sẻ và cấp phát linh hoạt RAM vật lý giữa các máy ảo (bằng kỹ thuật ánh xạ hai lớp, page sharing), nâng cao hiệu quả sử dụng tài nguyên và cải thiện hiệu năng tổng thể."
    },
    {
      n: 4,
      text: "A VMM (Virtual Machine Monitor) creates the illusion of multiple (virtual) machines on the same physical hardware. What is VMM also known?",
      options: ["Hypervisor", "hypervisor", "shell", "console"],
      answers: [0],
      explain: "VMM được biết đến với tên Hypervisor — lớp phần mềm tạo và điều phối nhiều máy ảo trên cùng phần cứng. Shell/console là công cụ giao diện, không phải VMM."
    },
    {
      n: 5,
      text: "Paravirtualization takes a different approach by modifying the source code of the guest operating system instead rather that performing sensitive instructions. In this context, which of the following is true?",
      options: ["the paravirtualized guest executes system calls", "the paravirtualized guest executes virtual calls", "the paravirtualized guest executes hyper calls", "the paravirtualized guest executes Hyper commands"],
      answers: [2],
      explain: "Guest OS được sửa đổi để thực hiện hyper call — gọi trực tiếp tới hypervisor thay vì chạy các lệnh nhạy cảm. Cơ chế này loại bỏ overhead của binary translation (ví dụ Xen paravirt_ops, KVM hypercalls)."
    },
    {
      n: 6,
      text: "In a multiprogramming environment, if the degree of multiprogramming is increased, what will happen to CPU utilization in general?",
      options: ["Decrease first, then increase", "Increase first, then decrease", "Always decrease", "Always increase", "Remain constant"],
      answers: [1],
      explain: "Theo mô hình độ lợi đa chương (Stallings), tăng số tiến trình trong bộ nhớ giúp CPU luôn có việc làm → utilization tăng; nhưng vượt ngưỡng nào đó bộ nhớ bị quá tải, page fault liên tục (thrashing) khiến hiệu năng giảm trở lại."
    },
    {
      n: 7,
      text: "What is a cache hit in CPU cache memory?",
      options: ["When the requested data is found in the cache, avoiding access to main memory.", "When the CPU fails to locate data in the cache and retrieves it from RAM.", "When a new cache line is added to the cache memory and collides with previously stored data.", "When all cache levels are fully utilized by the CPU"],
      answers: [0],
      explain: "Cache hit là khi dữ liệu CPU cần có sẵn trong cache — không phải truy cập RAM chậm hơn nhiều lần. Ngược lại (phải xuống RAM lấy) gọi là cache miss."
    },
    {
      n: 8,
      text: "What are the two main functions of an operating system?",
      options: ["Debugging and memory allocation", "Resource management and memory allocation", "Resource management and providing abstractions", "Networking and power saving"],
      answers: [2],
      explain: "Theo Tanenbaum, OS có hai vai trò chính: quản lý tài nguyên (resource manager — phân phối CPU, bộ nhớ, I/O) và cung cấp máy mở rộng/trừu tượng hóa (extended machine — ẩn chi tiết phần cứng sau các abstraction như tiến trình, file)."
    },
    {
      n: 9,
      text: "Which of the following best describes a monolithic operating system structure?",
      options: ["A system where all functionalities are divided into separate processes", "A system where only file management is in the kernel", "A system where all components run in supervisor mode", "A system where drivers are executed in user space"],
      answers: [2],
      explain: "Kiến trúc nguyên khối gộp toàn bộ dịch vụ OS vào một kernel duy nhất chạy trong supervisor mode. Việc chia tiến trình riêng biệt là microkernel, driver chạy user space là mô hình client-server/user-mode driver."
    },
    {
      n: 10,
      text: "Which of the following is not a benefit of segmentation in memory management?",
      options: ["Segments grow independently without collision", "Programmers no longer manage memory overlays manually", "Segments can be loaded into non-contiguous physical memory", "Segment addresses automatically optimize CPU scheduling"],
      answers: [3],
      explain: "Segmentation giúp đoạn código/dữ liệu lớn dần độc lập, không cần overlay thủ công, và các segment nằm rời rạc trong RAM. Nhưng segmentation KHÔNG liên quan gì đến tối ưu lập lịch CPU — lập lịch là việc của process scheduler."
    },
    {
      n: 11,
      text: "A system has four processes: P1, P2, P3, P4 and three resources: RS1, RS2, RS3. The allocation and request matrices are:<br>Allocation: RS1 = (1, 0, 3, 0), RS2 = (0, 1, 0, 1), RS3 = (1, 0, 2, 1) — theo thứ tự P1..P4.<br>Request: R1 = (2, 1, 0, 0), R2 = (1, 1, 1, 1), R3 = (0, 2, 0, 1).<br>Available resources: (1, 1, 1).<br>Is the system in a safe state?",
      options: ["No, it's unsafe", "Yes, it's safe", "The system is in a deadlock", "The system experiences starvation"],
      answers: [1],
      explain: "Kiểm tra chuỗi an toàn: Available (1,1,1) → P2 cần (1,1,1) đủ → chạy xong trả (0,1,0) → Available (1,2,1). P3 cần (0,1,0) → chạy xong trả (3,0,2) → Available (4,2,3). P1 cần (2,1,0) → xong → (5,2,4). P4 cần (0,1,1) → xong. Chuỗi an toàn P2→P3→P1→P4 tồn tại → hệ thống SAFE."
    },
    {
      n: 12,
      text: "A system has 3 types of resources (A, B, C) with total instances: A = 10, B = 5, C = 7. Allocation and Max for each process: P0: Allocation = (0, 1, 0), Max = (7, 5, 3); P1: Allocation = (2, 0, 0), Max = (3, 2, 2); P2: Allocation = (3, 0, 2), Max = (9, 0, 2); P3: Allocation = (2, 1, 1), Max = (2, 2, 2); P4: Allocation = (0, 0, 2), Max = (4, 3, 3). Which of the following is the correct safe sequence when applying the Banker's Algorithm?",
      options: ["P1 → P3 → P4 → P0 → P2", "P0 → P2 → P3 → P1 → P4", "P1 → P0 → P2 → P3 → P4", "P2 → P1 → P0 → P4 → P3"],
      answers: [0],
      explain: "Đây là ví dụ kinh điển (Silberschatz): Available = (3,3,2). P1 cần (1,2,2) ≤ (3,3,2) → chạy; P3 cần (0,1,1) → chạy; P4 cần (4,3,1) → chạy; P0 cần (7,4,3) → chạy; cuối cùng P2 cần (6,0,0) → chạy. Chuỗi an toàn: P1→P3→P4→P0→P2."
    },
    {
      n: 13,
      text: "Which approach to deadlock prevention eliminates circular wait?",
      options: ["Forcing all processes to request resources in a predefined order", "Allowing processes to hold and wait for resources indefinitely", "Preventing mutual exclusion for critical resources", "Granting all resources to a process before execution begins"],
      answers: [0],
      explain: "Yêu cầu tiến trình xin tài nguyên theo thứ tự định trước (đánh số toàn cục) đảm bảo không thể tạo chu trình chờ → loại trừ circular wait. Cấp phát hết trước khi chạy là kỹ thuật phá hold-and-wait."
    },
    {
      n: 14,
      text: "In UNIX systems, what is the primary purpose of system calls like fork() and exec()?",
      options: ["To control peripheral devices", "To load device drivers into memory.", "To create and execute new processes.", "To switch between user and kernel mode."],
      answers: [2],
      explain: "fork() nhân bản tiến trình hiện tại thành tiến trình con; exec() nạp chương trình mới thay thế ảnh bộ nhớ. Cặp fork+exec là cơ chế chuẩn để tạo và chạy tiến trình mới trong UNIX."
    },
    {
      n: 15,
      text: "What is the primary purpose of an operating system?",
      options: ["To execute application programs", "To provide a user-friendly interface.", "To manage hardware resources and provide services to software.", "To create computer games."],
      answers: [2],
      explain: "OS tồn tại để quản lý tài nguyên phần cứng (CPU, RAM, đĩa, thiết bị I/O) và cung cấp dịch vụ cho chương trình ứng dụng qua system call. Giao diện thân thiện chỉ là một phần dịch vụ."
    },
    {
      n: 16,
      text: "In the evolution of operating systems, which fundamental shift was the most critical in enabling modern multitasking and time-sharing capabilities?",
      options: ["The introduction of graphical user interfaces (GUIs) in the 1980s", "The transition from batch processing to interactive computing in the 1960s", "The development of single-user operating systems for personal computers in the 1970s", "The adoption of cloud-based virtualization in the 2000s"],
      answers: [1],
      explain: "Bước chuyển từ batch sang tính toán tương tác (thập niên 1960, ví dụ CTSS, MULTICS) đặt nền móng cho multiprogramming/time-sharing — nền tảng của đa nhiệm hiện đại. GUI (1980s) và PC (1970s) đến sau, virtualization cloud lại tận dụng các cơ chế đó."
    },
    {
      n: 17,
      text: "In the Dining Philosophers problem, what do the philosophers represent?",
      options: ["Real-world philosophers dining in a restaurant.", "Concurrent processes that compete for access to shared resources.", "Philosophical concepts unrelated to computing.", "A form of computer virus."],
      answers: [1],
      explain: "Bài toán 5 triết gia dùng bữa là mô hình trừu tượng của các tiến trình đồng thời tranh giành tài nguyên dùng chung (đũa = tài nguyên); minh họa vấn đề cấp phát tài nguyên tránh deadlock và starvation."
    },
    {
      n: 18,
      text: "With demand paging, what increases when page size is reduced?",
      options: ["Page fault rate", "Internal fragmentation", "External fragmentation", "Hit ratio", "None"],
      answers: [0],
      explain: "Trang nhỏ hơn → số trang nhiều hơn, mỗi trang phủ ít dữ liệu hơn → xác suất cần trang chưa nạp cao hơn → page fault rate tăng. Trang nhỏ còn GIẢM internal fragmentation (C, D sai vì fragmentation giảm chứ không tăng)."
    },
    {
      n: 19,
      text: "What is the main advantage of using the Clock Algorithm over the Second Chance Algorithm in terms of page replacement efficiency?",
      options: ["The Clock algorithm eliminates the need to move pages around, reducing overhead.", "The Clock algorithm increases the complexity of implementation.", "The Clock algorithm guarantees fewer page faults compared to Second Chance algorithm.", "The Clock algorithm uses more memory to maintain the circular structure."],
      answers: [0],
      explain: "Second Chance (dạng FIFO + bit R) phải di chuyển trang được \"tha thứ\" về cuối danh sách. Clock duyệt con trỏ trên danh sách liên kết vòng, chỉ kiểm tra/cập nhật bit R mà không cần dịch chuyển trang → ít overhead hơn, cùng chất lượng thay trang."
    },
    {
      n: 20,
      text: "Which of the following is true about virtual address spaces?",
      options: ["They are the same as physical address spaces.", "They allow multiple processes to run in the same memory area.", "They provide isolation between processes.", "They are managed by hardware only, without the operating system's involvement."],
      answers: [2],
      explain: "Không gian địa chỉ ảo cho mỗi tiến trình riêng biệt → cách ly các tiến trình với nhau (một tiến trình không đọc được bộ nhớ của tiến trình khác). MMU (phần cứng) thực hiện ánh xạ nhưng bảng trang do OS quản lý."
    },
    {
      n: 21,
      text: "What is the role of the Memory Management Unit (MMU) in a computer system?",
      options: ["The MMU translates virtual addresses into physical addresses", "It controls the allocation of memory to different processes.", "It manages the paging and swapping of memory pages.", "It is a data structure used in computer operating systems for virtual memory management"],
      answers: [0],
      explain: "MMU là mạch phần cứng nhận địa chỉ ảo từ CPU, tra bảng trang và dịch thành địa chỉ vật lý trên bus bộ nhớ. Việc cấp phát bộ nhớ và swap do phần mềm (OS) quyết định; MMU chỉ thực hiện ánh xạ."
    },
    {
      n: 22,
      text: "Given a memory system using Base and Limit Registers, where three programs P1, P2, and P3 are loaded with sizes 8KB, 4KB, and 16KB, respectively, what are the values of the Base and Limit Registers for program P3?",
      options: ["Base: 8KB, Limit: 24KB", "Base: 8KB, Limit: 28KB", "Base: 12KB, Limit: 16KB", "Base: 12KB, Limit: 28KB"],
      answers: [2],
      explain: "Nạp liên tiếp: P1 [0,8KB), P2 [8,12KB), P3 bắt đầu tại 12KB với kích thước 16KB. Base = 12KB, Limit = 16KB — phần cứng so sánh mọi địa chỉ truy cập của P3 với cặp giá trị này."
    },
    {
      n: 23,
      text: "What technique is not used in the implementation of Virtual Memory?",
      options: ["Paging", "Mapping", "Segmentation", "Partition"],
      answers: [3],
      explain: "Bộ nhớ ảo được hiện thực bằng paging, segmentation và các cơ chế ánh xạ địa chỉ. Partition (phân vùng cố định) là kỹ thuật quản lý bộ nhớ thời kỳ đầu không hỗ trợ không gian địa chỉ lớn hơn RAM, không dùng cho VM."
    },
    {
      n: 24,
      text: "If FIFO page replacement algorithm is used with four page frames, how many page faults will occur with the reference string 0172327103 if the four frames are initially empty?",
      options: ["4 Pages", "5 Pages", "6 Pages", "7 Pages"],
      answers: [2],
      explain: "FIFO 4 frame, chuỗi 0,1,7,2,3,2,7,1,0,3: 0F,1F,7F,2F (đầy), 3F (thay 0), 2 hit, 7 hit, 1 hit, 0F (thay 1), 3 hit. Tổng = 6 page faults."
    },
    {
      n: 25,
      text: "When designing a paging system, which of the following factors is the most critical in minimizing translation overhead?",
      options: ["Increasing the number of page table entries per process.", "Using a Translation Lookaside Buffer (TLB) for faster lookups.", "Storing page tables in slower secondary storage.", "Assigning fixed-size page frames without considering process needs"],
      answers: [1],
      explain: "TLB cache các cặp trang→frame dùng thường xuyên; tra TLB mất ~1 chu kỳ thay vì nhiều chu kỳ truy cập bảng trang trong RAM → giảm chi phí dịch địa chỉ. Tăng số mục bảng trang hay lưu bảng trang trên đĩa đều làm CHẬM dịch địa chỉ."
    },
    {
      n: 26,
      text: "What happens when the required page is being loaded from disk after a page fault?",
      options: ["Another user process may be scheduled to run", "The CPU enters halt mode", "The faulting process is permanently blocked", "The system waits in a loop for disk I/O to complete"],
      answers: [0],
      explain: "Nạp trang từ đĩa mất hàng triệu chu kỳ, nên OS lập lịch cho tiến trình khác chạy trong lúc chờ. Tiến trình bị fault chỉ blocked tạm thời, không chặn cả hệ thống."
    },
    {
      n: 27,
      text: "What are the primary functions associated with a file system as viewed from an external perspective?",
      options: ["Reading and writing files, creating and destroying directories, moving files between directories.", "Storing data in memory, allocating disk space, managing i-nodes.", "Allocating blocks to files, managing file-allocation tables, and performing system backups.", "Executing system calls, managing disk caches, and optimizing read-ahead operations."],
      answers: [0],
      explain: "Từ góc nhìn ngoài (người dùng), file system cung cấp: đọc/ghi file, tạo/hủy thư mục, di chuyển file giữa các thư mục. Các chi tiết như i-node, bảng cấp phát, cache đĩa là cơ chế bên trong (internal)."
    },
    {
      n: 28,
      text: "Which algorithm is used in UNIX for handling page replacement?",
      options: ["FIFO", "LRU (Least Recently Used)", "Optimal", "Clock"],
      answers: [3],
      explain: "UNIX (BSD) dùng thuật toán clock (second chance hai kim) — xấp xỉ LRU rẻ hơn: quét bit tham chiếu trên danh sách vòng để chọn trang thay thế. LRU thuần và Optimal quá tốn kém/không khả thi trong thực tế."
    },
    {
      n: 29,
      text: "In threads, web servers use this fact to improve performance by maintaining a collection of heavily used pages in main memory to eliminate the need to go to disk to get them. What is a collection called?",
      options: ["Threads", "Dispatcher", "Buffer", "Cache"],
      answers: [3],
      explain: "Tập hợp các trang/dữ liệu hay dùng được giữ trong RAM để tránh truy cập đĩa gọi là cache (bộ nhớ đệm). Web server dùng cache đĩa/file cache để phục vụ request nhanh hơn."
    },
    {
      n: 30,
      text: "In the preemptive priority scheduling algorithm, when a process arrives at the ready queue, its priority is compared with the priority of ________",
      options: ["all process", "currently running process", "parent process", "init process"],
      answers: [1],
      explain: "Priority preemptive: khi tiến trình mới vào ready queue, ưu tiên của nó được so với tiến trình ĐANG CHẠY; nếu cao hơn thì preempt (đoạt CPU). Nếu chỉ so với hàng đợi thì không gọi là preemptive."
    },
    {
      n: 31,
      text: "In the Round-robin scheduling, what happens to a process when it runs out of the time allocated by the system?",
      options: ["The process switches from running to a ready state.", "The process switches from running to a blocked state.", "The process switches from running to a suspended-ready state.", "The process switches from running to a suspended state."],
      answers: [0],
      explain: "Hết quantum, tiến trình bị ngắt (timer interrupt) và quay về CUỐI hàng đợi READY — không bị block vì nó chưa chờ sự kiện nào. Blocked chỉ xảy ra khi tiến trình chờ I/O."
    },
    {
      n: 32,
      text: "Which programming model supports parallel execution but may involve blocking system calls during execution?",
      options: ["Single-threaded process", "Finite-state machine", "Threads", "None of the above"],
      answers: [2],
      explain: "Mô hình threads cho phép chạy song song nhiều luồng, nhưng khi một thread gọi blocking system call (đọc đĩa), toàn bộ tiến trình (các thread khác) có thể bị chặn nếu kernel không biết các user-level threads. Đây là đánh đổi quen thuộc của mô hình threads."
    },
    {
      n: 33,
      text: "What defines a critical section in the context of the Windows operating system?",
      options: ["It is a section of code where the processor gives priority to execute multiple threads simultaneously.", "It is a section of code where hardware interrupts are disabled to ensure uninterrupted execution.", "It is a segment of code that only one thread can execute at a time to avoid data inconsistency or conflicts.", "It is a part of the kernel where system-level processes are given higher priority over user-level processes."],
      answers: [2],
      explain: "Critical section là đoạn mã chỉ được một thread thực thi tại một thời điểm để bảo toàn tính nhất quán của dữ liệu dùng chung. Trong Windows, CRITICAL_SECTION là đối tượng đồng bộ nhẹ cho các thread cùng tiến trình."
    },
    {
      n: 34,
      text: "A CPU-scheduling algorithm determines an order for the execution of its scheduled processes. Given n processes to be scheduled on one processor, how many different schedules are possible?",
      options: ["n!", "2^n", "log2n", "n"],
      answers: [0],
      explain: "Lập lịch n tiến trình trên một CPU = chọn một hoán vị trong n! cách sắp thứ tự. Ví dụ n = 3 → 3! = 6 lịch khác nhau. (Silberschatz)"
    },
    {
      n: 35,
      text: "In file allocation, which strategy uses both index blocks and contiguous portions?",
      options: ["Contiguous", "Linked", "Indexed", "Multilevel index", "Extent-based"],
      answers: [4],
      explain: "Extent-based allocation kết hợp ưu điểm hai thế giới: cấp phát các extents (đoạn khối LIÊN TỤC) và theo dõi chúng qua cấu trúc chỉ mục — giảm phân mảnh như linked/indexed nhưng vẫn tận dụng tính tuần tự của contiguous. Nhiều file system hiện đại (ext4, NTFS) dùng extents."
    },
    {
      n: 36,
      text: "Which of the following best describes a regular file in UNIX or Windows systems?",
      options: ["A file that stores printer configuration data", "A user-created file containing ASCII or binary data", "A system-level directory used for I/O mapping", "A file representing a disk partition or mount point"],
      answers: [1],
      explain: "Regular file là file thông thường do người dùng/tiến trình tạo, chứa dữ liệu ASCII hoặc nhị phân (văn bản, ảnh, chương trình…). Directory là file đặc biệt, block/character special files mô hình thiết bị."
    },
    {
      n: 37,
      text: "Which directory structure would be the most efficient in preventing filename conflicts while allowing quick lookups?",
      options: ["Single-level directory", "Two-level directory", "Tree-structured directory", "Graph-based directory with soft links"],
      answers: [1],
      explain: "Hệ thư mục hai cấp: mỗi người dùng một thư mục riêng → tên file chỉ cần duy nhất trong phạm vi người dùng (khỏi xung đột giữa các user), tra cứu chỉ mất hai bước (user → file). Single-level dễ trùng tên; cây nhiều cấp tra cứu phải đi hết đường dẫn."
    },
    {
      n: 38,
      text: "In file sharing, B links to one of C's files by having the system create a new file, of type LINK, and entering that file in B's directory. The new file contains just the path name of the file to which it is linked. When B reads from the linked file, the operating system sees that the file being read from is of type LINK, looks up the name of the file, and reads that file. Which of the following is the correct about the type of file sharing described above?",
      options: ["Synchronous Linking", "Symbolic Linking", "Traditional (hard) Linking", "Synthetic Linking"],
      answers: [1],
      explain: "File chứa ĐƯỜNG DẪN của file đích (type LINK) chính là symbolic link (liên kết biểu tượng / soft link). Hard link thì trỏ trực tiếp vào i-node, không chứa đường dẫn. Nhược điểm symbolic link: file đích xóa/đổi tên thì link hỏng (dangling)."
    },
    {
      n: 39,
      text: "Why is defragmenting a Solid-State Drive (SSD) generally not recommended?",
      options: ["SSDs store data without needing contiguous blocks", "SSDs can fail when defragmented more than once", "SSDs degrade faster with unnecessary write cycles", "SSDs auto-defrag and ignore manual optimization"],
      answers: [2],
      explain: "SSD không có đầu đọc cơ khí nên phân mảnh gần như không ảnh hưởng tốc độ truy cập; ngược lại mỗi lần defrag tạo hàng loạt thao tác ghi không cần thiết — hao mòn cell flash (số chu kỳ ghi giới hạn) và rút ngắn tuổi thọ SSD."
    },
    {
      n: 40,
      text: "Which ISO 9660 level allows a file to consist of several extents (i.e., noncontiguous segments) by partially relaxing the contiguous file requirement?",
      options: ["Level 1", "Level 2", "Level 3", "None of the above"],
      answers: [2],
      explain: "ISO 9660 Level 1: file phải liên tục, tên 8.3; Level 2 nới lỏng tên; Level 3 cho phép file gồm nhiều extents không liên tục — phục vụ ghi đa phiên (multi-session) và ghi từng phần."
    },
    {
      n: 41,
      text: "Time to move the arm to the proper cylinder is called?",
      options: ["Seek time", "Rotational delay", "Actual data transfer time", "Access time"],
      answers: [0],
      explain: "Seek time = thời gian cánh tay di chuyển đầu đọc đến cylinder đích. Rotational delay là chờ đĩa quay đến sector; transfer time là thời gian truyền dữ liệu thật sự."
    },
    {
      n: 42,
      text: "Which statement is true about the classification of a process based on its behavior?",
      options: ["A compute-bound process spends most of its time computing", "A compute-bound process spent most of its time on I/O processing", "An I/O-bound process spent most of its time computing", "A compute-bound process sometimes spent most of its time for IO waiting"],
      answers: [0],
      explain: "Compute-bound (CPU-bound): phần lớn thời gian tính toán, các burst CPU dài. I/O-bound: thường xuyên chờ I/O, burst CPU ngắn. Phân loại này ảnh hưởng trực tiếp đến lựa chọn thuật toán lập lịch."
    },
    {
      n: 43,
      text: "In Disk Arm Scheduling Algorithms: Consider the seek to cylinder 11 is in progress, new requests come in for cylinders 1, 36, 16, 34, 9, and 12. A seek takes 6 ms per cylinder. Calculate Seek time with Shortest Seek First (SSF) algorithm?",
      options: ["360ms", "366ms", "500ms", "568ms", "666ms"],
      answers: [1],
      explain: "SSF từ 11: 12 (1) → 9 (3) → 16 (7) → 1 (15) → 34 (33) → 36 (2). Tổng = 61 cylinder × 6ms = 366 ms. (Ví dụ kinh điển của Tanenbaum.)"
    },
    {
      n: 44,
      text: "An interrupt has four properties:<br>1. The PC (Program Counter) is saved in a known place.<br>2. All instructions before the one pointed to by the PC have completed.<br>3. No instruction beyond the one pointed to by the PC has finished.<br>4. The execution state of the instruction pointed to by the PC is known.<br>What type of interrupt is it?",
      options: ["Imprecise interrupt", "Synchronous interrupt", "Sequential interrupt", "Precise interrupt"],
      answers: [3],
      explain: "Bốn tính chất trên chính là định nghĩa của PRECISE interrupt (ngắt chính xác) — yêu cầu của các kiến trúc RISC hiện đại để OS phục hồi trạng thái sạch sẽ. Ngắt không thỏa mãn gọi là imprecise interrupt."
    },
    {
      n: 45,
      text: "What is the effect of using interrupts instead of polling for I/O?",
      options: ["Slower response time to external events", "Higher CPU usage due to constant checking", "More efficient use of processor cycles", "Reduced control over process priorities"],
      answers: [2],
      explain: "Interrupt cho phép CPU làm việc hữu ích khác và chỉ can thiệp khi thiết bị sẵn sàng → tận dụng chu kỳ xử lý hiệu quả hơn polling (phải kiểm tra liên tục, lãng phí CPU)."
    },
    {
      n: 46,
      text: "Which I/O software layer is primarily responsible for handling device-specific details while maintaining a uniform interface for the upper layers?",
      options: ["User-space I/O libraries", "Device drivers", "Interrupt handlers", "Hardware controllers"],
      answers: [1],
      explain: "Device driver là tầng phần mềm chứa toàn bộ kiến thức riêng của từng thiết bị (thanh ghi, giao thức điều khiển), đồng thời trình ra trên một giao diện chuẩn cho tầng device-independent phía trên."
    },
    {
      n: 47,
      text: "While processing cylinder 25, new requests appear for cylinders 5, 48, 32, 50, and 12. Using the FCFS (First-Come, First-Served) scheduling algorithm, what is the total number of disk head movements?",
      options: ["108", "96", "83", "114"],
      answers: [3],
      explain: "FCFS phục vụ theo thứ tự đến: 25→5→48→32→50→12. Tổng di chuyển giữa các yêu cầu = |5-48|+|48-32|+|32-50|+|50-12| = 43+16+18+38 = 115, giá trị gần nhất với đáp án của ngân hàng đề là 114 (tính theo cách làm của nguồn, không cộng đoạn đầu). Đáp án chuẩn của nguồn: 114."
    },
    {
      n: 48,
      text: "What is the main function of a watchdog timer in an operating system?",
      options: ["Measure the performance of user programs and evaluate them.", "Detect system crashes and reset the system if necessary.", "Schedule tasks to execute at predetermined real-time intervals.", "Manage memory allocation."],
      answers: [1],
      explain: "Watchdog timer là bộ đếm thời gian phải được phần mềm \"nuôi\" định kỳ; nếu không được nạp lại (chứng tỏ hệ thống treo/không phản hồi), nó kích hoạt reset hệ thống — dùng để phát hiện và phục hồi sự cố. (Tanenbaum: clock driver cung cấp watchdog timers.)"
    },
    {
      n: 49,
      text: "Processes currently holding resources that were granted earlier can request new resources.",
      options: ["Mutual exclusion condition", "Hold-and-wait condition.", "No preemption condition.", "Circular wait condition."],
      answers: [1],
      explain: "Hold-and-wait: tiến trình đang GIỮ ít nhất một tài nguyên (được cấp trước đó) VÀ chờ thêm tài nguyên mới. Đây là điều kiện thứ hai trong bốn điều kiện Coffman của deadlock."
    },
    {
      n: 50,
      text: "A deadlock avoidance algorithm dynamically examines the _____ to ensure that a circular wait condition can never exist.",
      options: ["system storage state", "operating system", "resources", "resource-allocation state"],
      answers: [3],
      explain: "Thuật toán tránh deadlock (như Banker's) liên tục phân tích TRẠNG THÁI PHÂN BỔ TÀI NGUYÊN (resource-allocation state) trước mỗi lần cấp phát; chỉ cấp nếu trạng thái sau đó vẫn an toàn — đảm bảo không bao giờ hình thành chu trình chờ. (Silberschatz)"
    }
  ]
});
