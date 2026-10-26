// OSG202 - Spring 2026 - Final Exam
// Nguồn: OSG202 - SP26 - FE.pdf (50 câu hỏi trắc nghiệm, format FUO)
window.EXAMAPP_EXAMS = window.EXAMAPP_EXAMS || [];
window.EXAMAPP_EXAMS.push({
  id: "osg202-sp26-fe",
  subjectId: "OSG202",
  title: "OSG202 - Spring 2026 - Final Exam",
  originalFile: "OSG202 - SP26 - FE.pdf",
  semester: "Spring 2026",
  semesterKey: "sp26",
  type: "Final Exam",
  typeKey: "final",
  durationMinutes: 60,
  imagePath: "images/osg202/sp26-fe/",
  questions: [
    {
      n: 1,
      text: "A system has 10 units of a single resource. There are three processes: P1, P2, and P3. At a certain moment, their maximum needs and allocated units are:<table class=\"mini-table\"><tr><td>Process</td><td>Maximum Needed</td><td>Allocated</td></tr><tr><td>P1</td><td>6</td><td>3</td></tr><tr><td>P2</td><td>5</td><td>3</td></tr><tr><td>P3</td><td>7</td><td>3</td></tr></table><br>What is the state of the system?",
      options: ["Unsafe.", "Safe.", "The system is in a deadlock.", "The system experiences starvation."],
      answers: [0],
      explain: "Đã cấp 9/10 → còn 1 đơn vị trống. Nhu cầu bổ sung: P1 = 3, P2 = 2, P3 = 4; không ai chạy xong với 1 đơn vị → không có chuỗi an toàn → UNSAFE (deadlock có thể xảy ra)."
    },
    {
      n: 2,
      text: "Which of the following is not a benefit of segmentation in memory management?",
      options: ["Segments grow independently without collision", "Programmers no longer manage memory overlays manually", "Segments can be loaded into non-contiguous physical memory", "Segment addresses automatically optimize CPU scheduling"],
      answers: [3],
      explain: "Segmentation giúp segment lớn dần độc lập, loại bỏ overlay thủ công và cho phép nạp rời rạc trong RAM. Nó KHÔNG can thiệp vào CPU scheduling — lập lịch là việc của scheduler, không liên quan địa chỉ segment."
    },
    {
      n: 3,
      text: "What are the two main functions of an operating system?",
      options: ["Debugging and memory allocation", "Resource management and memory allocation", "Resource management and providing abstractions", "Networking and power saving"],
      answers: [2],
      explain: "Hai vai trò cốt lõi của OS (Tanenbaum): (1) quản lý tài nguyên — phân phối CPU/bộ nhớ/thiết bị; (2) cung cấp trừu tượng hóa — mở rộng máy ảo với các khái niệm tiến trình, file, socket…"
    },
    {
      n: 4,
      text: "Which layer in the Layered Operating System Model is responsible for managing memory and drum storage?",
      options: ["Layer 0", "Layer 1", "Layer 3", "Layer 2"],
      answers: [1],
      explain: "Trong hệ THE của Dijkstra: Layer 0 quản lý bộ xử lý và đa chương; LAYER 1 quản lý bộ nhớ và trống từ (drum) — cấp phát không gian cho các khối trong bộ nhớ chính và bộ nhớ trống; Layer 2 giao tiếp console vận hành; Layer 3 quản lý I/O."
    },
    {
      n: 5,
      text: "Which hardware unit inside the computer is managed by the OS?",
      options: ["Scanner", "USB", "Memory", "Browser"],
      answers: [2],
      explain: "Bộ nhớ trong (RAM) là phần cứng nằm trong máy mà OS quản lý trực tiếp (cấp phát, ánh xạ, bộ nhớ ảo). Scanner/USB là thiết bị ngoài; browser là ứng dụng."
    },
    {
      n: 6,
      text: "Paravirtualization takes a different approach by modifying the source code of the guest operating system instead rather that performing sensitive instructions. In this context, which of the following is true?",
      options: ["the paravirtualized guest executes system calls", "the paravirtualized guest executes virtual calls", "the paravirtualized guest executes hyper calls", "the paravirtualized guest executes Hyper commands"],
      answers: [2],
      explain: "Guest OS được sửa mã để thay lệnh nhạy cảm bằng HYPER CALLS — lời gọi API trực tiếp tới hypervisor (Xen, KVM). Cách này loại bỏ cần binary translation, hiệu năng cao hơn."
    },
    {
      n: 7,
      text: "Which component of the OS acts as an interface between user programs and hardware?",
      options: ["Compiler", "Assembler", "Kernel", "Loader", "Linker"],
      answers: [2],
      explain: "Kernel là phần lõi của OS, trung gian giữa chương trình người dùng và phần cứng: chương trình gọi system call, kernel thực thi trên phần cứng. Compiler/assembler/linker/loader là công cụ của hệ thống biên dịch, không phải OS."
    },
    {
      n: 8,
      text: "A VMM (Virtual Machine Monitor) creates the illusion of multiple (virtual) machines on the same physical hardware. What is VMM also known?",
      options: ["Hypervisor", "hypervisor", "shell", "console"],
      answers: [0],
      explain: "VMM = Hypervisor — phần mềm tạo ảo giác nhiều máy trên một phần cứng vật lý. Shell là trình thông dịch lệnh; console là bảng điều khiển."
    },
    {
      n: 9,
      text: "Which condition is both necessary and sufficient for a system to experience deadlock?",
      options: ["Mutual exclusion of resources", "Circular wait among processes", "Hold and wait for resources", "No resource preemption"],
      answers: [1],
      explain: "Trong hệ tài nguyên đơn bản, CIRCULAR WAIT vừa cần vừa đủ cho deadlock: có chu trình ⇒ chắc chắn deadlock, deadlock ⇒ có chu trình. Ba điều kiện còn lại chỉ cần (necessary), chưa đủ."
    },
    {
      n: 10,
      text: "In disk scheduling, which algorithm is considered the fairest but may lead to high seek times?",
      options: ["FCFS", "SSTF", "SCAN", "C-SCAN"],
      answers: [0],
      explain: "FCFS phục vụ đúng thứ tự yêu cầu đến → công bằng nhất, không có yêu cầu nào bị chen ngang; đổi lại đầu đĩa lắt nhắt qua lại giữa các cylinder xa nhau → seek time cao. SSTF/SCAN tối ưu seek nhưng có thể gây starvation."
    },
    {
      n: 11,
      text: "System with 5 processes, 3 resources. Available (3,3,2), Allocation [(0,1,0),(2,0,0),(3,0,2),(2,1,1),(0,0,2)], Max [(7,5,3),(3,2,2),(9,0,2),(2,2,2),(4,3,3)]. Is safe?",
      options: ["Yes", "No", "Only if P1 first", "Only if P3 first", "Insufficient data"],
      answers: [0],
      explain: "Ví dụ kinh điển Silberschatz: Available = (3,3,2), Need = P0(7,4,3), P1(1,2,2), P2(6,0,0), P3(0,1,1), P4(4,3,1). Chuỗi an toàn P1→P3→P4→P0→P2 tồn tại → hệ thống ở trạng thái SAFE (yes)."
    },
    {
      n: 12,
      text: "What is a preemptable resource?",
      options: ["The one that can be taken away from the process owning it with no ill effects", "The one that can be taken away from the process owning it with ill effects", "The one that can not be taken away from the process owning it with no ill effects", "The one that can not be taken away from the process owning it with ill effects"],
      answers: [0],
      explain: "Preemptable resource: có thể thu hồi mà không gây hậu quả — CPU, bộ nhớ. Đối lập là máy in (non-preemptable): tước giữa chừng làm hỏng bản in."
    },
    {
      n: 13,
      text: "Which strategy prevents deadlock by requiring all resources at once?",
      options: ["Resource ordering", "Wait-die", "Wound-wait", "One-shot allocation", "Preemption"],
      answers: [3],
      explain: "One-shot allocation (cấp phát một lần): tiến trình phải xin TẤT CẢ tài nguyên cần trước khi chạy; không có gì để giữ-đồng-thời-chờ thêm → phá điều kiện hold-and-wait. Resource ordering phá circular wait; wait-die/wound-wait là kỹ thuật deadlock ở hệ CSDL."
    },
    {
      n: 14,
      text: "What are the weaknesses of RAID 0?",
      options: ["Requires the highest number of disks in RAID modes", "There is no data recovery mechanism", "The unit of data transmitted is at the BIT level", "Does not improve read and write speeds"],
      answers: [1],
      explain: "RAID 0 chỉ striping (dải dữ liệu) KHÔNG có redundancy/parity → một đĩa hỏng là mất toàn bộ dữ liệu, không có cơ chế khôi phục. Ưu điểm của nó là nhanh và tiết kiệm đĩa."
    },
    {
      n: 15,
      text: "Which of the following is NOT one of the usual duties of Clock Software?",
      options: ["Maintaining the time of day.", "Helping processes in running longer than they are allowed to.", "Accounting for CPU usage.", "Handling the alarm system call made by user processes.", "Doing profiling, monitoring, and statistics gathering."],
      answers: [1],
      explain: "Nhiệm vụ của phần mềm đồng hồ (Tanenbaum): giữ time-of-day, NGĂN tiến trình chạy quá thời hạn cho phép, thống kê CPU usage, xử lý alarm() của tiến trình, profiling/monitoring. B nói \"giúp tiến trình chạy lâu hơn mức cho phép\" — ngược hoàn thành chức năng thật."
    },
    {
      n: 16,
      text: "Which I/O software layer is primarily responsible for handling device-specific details while maintaining a uniform interface for the upper layers?",
      options: ["User-space I/O libraries", "Device drivers", "Interrupt handlers", "Hardware controllers"],
      answers: [1],
      explain: "Device driver gói toàn bộ chi tiết riêng của từng thiết bị và trình ra giao diện thống nhất cho tầng device-independent phía trên — đúng nguyên tắc thiết kế tầng của phần mềm I/O."
    },
    {
      n: 17,
      text: "In DMA transfer cycle, what two modes can many buses operate in?",
      options: ["Word-at-a-time mode and byte mode.", "Word-at-a-time mode and block mode.", "Word-at-a-time mode and bit mode.", "Word-at-a-time mode and page mode."],
      answers: [1],
      explain: "Bus trong chu kỳ DMA thường vận hành hai chế độ: word-at-a-time (truyền từng từ, nhường bus xen kẽ với CPU) và block mode (DMA chiếm bus truyền cả khối một lần — burst mode). (Tanenbaum)"
    },
    {
      n: 18,
      text: "Choose correct answers.<br>What are the three basic different ways that I/O operations in computer system can be performed?",
      options: ["Programmed I/O", "Memory-mapped I/O", "Interrupt-driven I/O", "I/O using DMA"],
      answers: [0, 2, 3],
      explain: "Ba phương thức I/O cơ bản: programmed I/O (busy-waiting), interrupt-driven I/O và DMA. Memory-mapped I/O chỉ là kỹ thuật ánh xạ thanh ghi thiết bị vào không gian địa chỉ bộ nhớ — không phải một phương thức truyền dữ liệu."
    },
    {
      n: 19,
      text: "Which layer of the I/O software system is closest to the hardware?",
      options: ["Interrupt handlers", "Device drivers", "Device-independent operating system software", "User-level I/O software"],
      answers: [0],
      explain: "Trong 4 tầng phần mềm I/O, interrupt handlers nằm sát phần cứng nhất (xử lý ngắt do controller phát), sau đó đến device drivers → device-independent software → user-level I/O software."
    },
    {
      n: 20,
      text: "In C-SCAN scheduling, what happens when arm reaches end?",
      options: ["Stops", "Jumps back", "Reverses", "Skips requests", "Ignores"],
      answers: [1],
      explain: "C-SCAN (Circular SCAN): đầu đĩa quét một chiều đến cuối đĩa rồi NHAY LẠI ĐẦU (jump back) và tiếp tục quét cùng chiều — biến các yêu cầu thành vòng tròn, đợi tối đa một vòng quét."
    },
    {
      n: 21,
      text: "What is the role of a file descriptor in Unix-based systems?",
      options: ["To keep track of file sizes", "To store the file contents", "To keep track of open files and their I/O operations", "To store the file's metadata"],
      answers: [2],
      explain: "File descriptor là số nguyên hệ thống trả về khi mở file, dùng để theo dõi file đang mở và vị trí đọc/ghi trong các thao tác read/write/lseek. Metadata của file nằm trong i-node, không phải descriptor."
    },
    {
      n: 22,
      text: "Why is defragmenting a Solid-State Drive (SSD) generally not recommended?",
      options: ["SSDs store data without needing contiguous blocks", "SSDs can fail when defragmented more than once", "SSDs degrade faster with unnecessary write cycles", "SSDs auto-defrag and ignore manual optimization"],
      answers: [2],
      explain: "SSD truy cập ngẫu nhiên như nhau mọi khối (không có seek cơ khí), còn flash chỉ chịu số chu kỳ ghi hữu hạn — defrag tạo ghi hàng loạt không cần thiết khiến SSD mau xuống cấp."
    },
    {
      n: 23,
      text: "In Windows 95, which is the maximum partition size, if the FAT type is FAT-16 and the block size is 4 KB?",
      options: ["128MB", "256MB", "512MB", "1024MB"],
      answers: [1],
      explain: "FAT-16 đánh số khối bằng 16 bit → tối đa 2<sup>16</sup> = 65.536 khối. Với khối 4KB: 65.536 × 4KB = 256 MB — đúng giới hạn phân vùng FAT-16 lớn nhất."
    },
    {
      n: 24,
      text: "Which file allocation method uses pointers in each file block to the next block?",
      options: ["Contiguous allocation", "Indexed allocation", "Linked allocation", "Hash-based allocation"],
      answers: [2],
      explain: "Linked allocation: mỗi khối chứa con trỏ tới khối kế tiếp, file có thể nằm rải rác trên đĩa. Ưu điểm không phân mảnh ngoài, nhược điểm truy cập ngẫu nhiên chậm (phải đi theo chuỗi)."
    },
    {
      n: 25,
      text: "Which system call repositions the file pointer so that data can be read from or written to a specific location in the file?",
      options: ["Seek", "Append", "Rename", "Write"],
      answers: [0],
      explain: "Lseek/Seek di chuyển con trỏ vị trí (file pointer) đến offset mong muốn — nền tảng của truy cập ngẫu nhiên (random access). Append ghi thêm cuối file, rename đổi tên."
    },
    {
      n: 26,
      text: "In a memory system consisting of the following hole sizes: 10MB, 18MB, 9MB, and 14MB, suppose the Best Fit algorithm is used. Which holes are allocated in order for consecutive segment requests of 11MB, 2MB, 9MB, and 8MB?",
      options: ["14MB, 3MB, 10MB, 9MB", "18MB, 7MB, 10MB, 9MB", "14MB, 3MB, 9MB, 10MB", "18MB, 7MB, 9MB, 10MB"],
      answers: [2],
      explain: "Best-fit chọn lỗ nhỏ nhất đủ chứa: 11MB → 14MB (dư 3MB); 2MB → lỗ 3MB (dư 1MB); 9MB → lỗ 9MB (vừa khít); 8MB → lỗ 10MB. Thứ tự lỗ được dùng: 14, 3, 9, 10."
    },
    {
      n: 27,
      text: "Indexed Allocation in file systems uses:",
      options: ["A table of pointers for each file", "Contiguous blocks of disk space", "Linked lists to connect files", "Hierarchical file structures"],
      answers: [0],
      explain: "Indexed allocation: mỗi file có một khối chỉ mục (index block) chứa danh sách con trỏ tới các khối dữ liệu của file — truy cập ngẫu nhiên O(1). UNIX i-node là dạng hiện thực nổi tiếng của ý tưởng này."
    },
    {
      n: 28,
      text: "After the page fault trap, which of the following is responsible for saving general-purpose registers and volatile state?",
      options: ["Disk controller", "Operating system scheduler", "Assembly-language routine", "Page replacement algorithm"],
      answers: [2],
      explain: "Ngay sau trap của page fault, một routine hợp ngữ (do phần cứng/kernel cung cấp) lưu các thanh ghi đa dụng và trạng thái dễ mất trước khi chuyển sang code C của OS để xử lý nạp trang. (Tanenbaum: xử lý page fault.)"
    },
    {
      n: 29,
      text: "Which scheduling algorithm could potentially lead to starvation?",
      options: ["FCFS", "SJF", "Round Robin", "Priority Scheduling"],
      answers: [3],
      explain: "Priority scheduling: tiến trình ưu tiên thấp có thể chờ vô hạn nếu luôn có tiến trình ưu tiên cao đến (starvation). Giải pháp phổ biến là aging — tăng dần ưu tiên theo thời gian chờ. (SJF thuần cũng có hiện tượng này nhưng đáp án kinh điển của câu hỏi là Priority.)"
    },
    {
      n: 30,
      text: "When designing a paging system, which of the following factors is the most critical in minimizing translation overhead?",
      options: ["Increasing the number of page table entries per process.", "Using a Translation Lookaside Buffer (TLB) for faster lookups.", "Storing page tables in slower secondary storage.", "Assigning fixed-size page frames without considering process needs."],
      answers: [1],
      explain: "TLB giữ các ánh xạ trang→frame dùng gần đây trong phần cứng siêu nhanh; đa số truy cập địa chỉ trúng TLB nên không phải tra bảng trang trong RAM → giảm mạnh translation overhead."
    },
    {
      n: 31,
      text: "A computer with a 32-bit virtual address uses a two-level page table. Virtual addresses are split into a 10-bit top-level page table field, a 12-bit second-level page table field, and an offset. What is the size of the pages?",
      options: ["512B page", "1 KB page", "2 KB page", "4 KB page"],
      answers: [1],
      explain: "Tổng bit = 10 (PT1) + 12 (PT2) + offset = 32 → offset = 10 bit. Kích thước trang = 2<sup>offset</sup> = 2<sup>10</sup> = 1 KB."
    },
    {
      n: 32,
      text: "If FIFO page replacement algorithm is used with four page frames, how many page faults will occur with the reference string 0172327103 if the four frames are initially empty?",
      options: ["4 Pages", "5 Pages", "6 Pages", "7 Pages"],
      answers: [2],
      explain: "Chuỗi 0,1,7,2,3,2,7,1,0,3 với 4 frame FIFO: 0F,1F,7F,2F; 3F (thay 0); 2,7,1 hit; 0F (thay 1); 3 hit → tổng 6 page faults."
    },
    {
      n: 33,
      text: "How does memory abstraction through address spaces benefit a computer system?",
      options: ["It allows each process to access the entire physical memory directly.", "It isolates processes from one another, preventing unauthorized access.", "It eliminates the need for virtual memory.", "It reduces CPU processing speed."],
      answers: [1],
      explain: "Trừu tượng hóa bộ nhớ qua không gian địa chỉ riêng cho mỗi tiến trình tạo ra sự cách ly: tiến trình này không thể đọc/ghi vùng nhớ của tiến trình khác → bảo vệ và tăng độ tin cậy."
    },
    {
      n: 34,
      text: "In paged memory systems, if the page size is increased, then the internal fragmentation generally ____",
      options: ["becomes less", "becomes more", "remains constant", "none of mentioned"],
      answers: [1],
      explain: "Internal fragmentation là phần thừa trong trang cuối cùng của mỗi tiến trình. Trang càng lớn, phần thừa trung bình (≈ nửa trang) càng lớn → internal fragmentation tăng."
    },
    {
      n: 35,
      text: "Which memory management technique involves dividing memory into fixed-sized partitions to accommodate varying process sizes?",
      options: ["Paging Management", "Contiguous Allocation", "Segmentation", "Virtual Memory Management"],
      answers: [1],
      explain: "Contiguous allocation (multiprogramming with fixed partitions): bộ nhớ chia thành các phân vùng CỐ ĐỊNH, mỗi tiến trình nằm trọn trong một phân vùng. Paging chia bộ nhớ thành frame nhưng tiến trình nằm rải rác, không phải contiguous."
    },
    {
      n: 36,
      text: "Evaluate the impact of the absence of real segmentation support in the 64-bit version of the x86 architecture on modern operating systems, considering memory management efficiency and design choices.",
      options: ["The absence of real segmentation results in more efficient memory utilization but limits the diversity of memory management techniques in modern systems.", "Real segmentation support significantly improves memory management performance, especially in handling dynamic data structures.", "The lack of real segmentation simplifies memory management but limits the flexibility to handle changing memory requirements in modern operating systems.", "The absence of real segmentation has no impact on modern operating systems as they rely solely on paging techniques for memory management."],
      answers: [2],
      explain: "x86-64 thực chất bỏ segmentation (chế độ flat model), mọi thứ dựa vào paging. Điều này ĐƠN GIẢN hóa quản lý bộ nhớ (một cơ chế duy nhất), nhưng mất khả năng bảo vệ/chi sẻ theo từng đoạn logic và kém linh hoạt với cấu trúc dữ liệu thay đổi kích thước như segmentation từng hỗ trợ."
    },
    {
      n: 37,
      text: "Which of the following methods is used to track memory?",
      options: ["Linked Lists", "Best fit", "Paging", "Segmentation"],
      answers: [0],
      explain: "Theo Tanenbaum, hai cách theo dõi tình trạng bộ nhớ là bitmap và DANH SÁCH LIÊN KẾT (linked lists) gồm các node mô tả vùng đang dùng/còn trống (P, H). Best fit/paging/segmentation là chiến lược cấp phát, không phải cấu trúc theo dõi."
    },
    {
      n: 38,
      text: "In the Classical IPC Problems, specifically in the deadlock-avoidance solution to the Dining Philosophers problem, when can a philosopher eat?",
      options: ["Both neighbors are not eating", "Both neighbors are thinking or hungry", "The philosopher hasn't eaten yet", "Mutex is unlocked"],
      answers: [0],
      explain: "Trong giải pháp tránh deadlock của Tanenbaum: một triết gia chỉ được chuyển sang EATING khi cả hai người láng giềng KHÔNG ĐANG ĂN (state[LEFT] != EATING && state[RIGHT] != EATING). Điều kiện này bảo đảm không hai triết gia kề nhau ăn cùng lúc → không deadlock."
    },
    {
      n: 39,
      text: "When a process is running in a contention zone, no other processes are running in the same zone. What is this condition called?",
      options: ["Mutual exclusion.", "Bounded-waiting.", "Progress.", "Critical exclusion."],
      answers: [0],
      explain: "Mutual exclusion (loại trừ tương hỗ): tại một thời điểm chỉ một tiến trình được nằm trong vùng tranh chấp/vùng găng — không hai tiến trình nào cùng chạy trong miền đó."
    },
    {
      n: 40,
      text: "A computer has 8 GB of memory. The operating system occupies 2 GB, and each user program requires 3 GB. The average I/O wait time for each user program is 60%. What is the CPU utilization?",
      options: ["64%", "60%", "66%", "70%"],
      answers: [0],
      explain: "Bộ nhớ cho tiến trình người dùng: 8 − 2 = 6 GB → chứa được 6/3 = 2 tiến trình. Theo mô hình độ lợi đa chương: U = 1 − p<sup>n</sup> với p = 0.6 (tỉ lệ chờ I/O), n = 2 → U = 1 − 0.36 = 0.64 = 64%."
    },
    {
      n: 41,
      text: "Which programming model supports parallel execution but may involve blocking system calls during execution?",
      options: ["Single-threaded process", "Finite-state machine", "Threads", "None of the above"],
      answers: [2],
      explain: "Threads hỗ trợ chạy song song nhiều luồng trong một tiến trình; tuy nhiên với user-level threads, một blocking system call của một thread có thể chặn toàn bộ tiến trình — hạn chế nổi tiếng của mô hình này."
    },
    {
      n: 42,
      text: "In threads, web servers use this fact to improve performance by maintaining a collection of heavily used pages in main memory to eliminate the need to go to disk to get them. What is a collection called?",
      options: ["Threads", "Dispatcher", "Buffer", "Cache"],
      answers: [3],
      explain: "Tập hợp trang/dữ liệu hay dùng được giữ sẵn trong bộ nhớ chính gọi là CACHE — giúp web server trả lời mà không phải xuống đĩa. Buffer là vùng đệm truyền dẫn đơn lẻ, dispatcher là phần lập lịch."
    },
    {
      n: 43,
      text: "In the Round-robin scheduling, what happens to a process when it runs out of the time allocated by the system?",
      options: ["The process switches from running to a ready state.", "The process switches from running to a blocked state.", "The process switches from running to a suspended-ready state.", "The process switches from running to a suspended state."],
      answers: [0],
      explain: "Hết quantum trong Round-robin, tiến trình bị ngắt và quay về hàng đợi READY (cuối hàng). Nó không blocked vì không chờ sự kiện gì — chỉ hết lượt dùng CPU."
    },
    {
      n: 44,
      text: "Which type of memory is typically very fast, expensive, and volatile in a memory hierarchy?",
      options: ["Main memory", "Virtual memory", "Cache memory", "Secondary memory"],
      answers: [2],
      explain: "Cấu trúc phân tầng bộ nhớ: cache (SRAM) nhanh nhất, đắt nhất, biến mất khi mất điện — đứng ngay trên CPU. Main memory (DRAM) chậm hơn và rẻ hơn; virtual memory nằm trên đĩa."
    },
    {
      n: 45,
      text: "What does the term \"multiprogramming\" mean?",
      options: ["Running multiple lines of the same program", "Writing code in many languages", "Running multiple programs at once", "Debugging with multiple users"],
      answers: [2],
      explain: "Multiprogramming: nhiều chương trình cùng nằm trong bộ nhớ, CPU chuyển giữa chúng để tận dụng thời gian chờ I/O — tức chạy nhiều chương trình \"cùng lúc\" trên một máy."
    },
    {
      n: 46,
      text: "Which statement is true about implementing Threads in Kernel?",
      options: ["The kernel has a thread table", "The threads run on top of a runtime system", "Suitable for OS that does not support threads", "Thread switching and scheduling are faster"],
      answers: [0],
      explain: "Với kernel-level threads: kernel duy trì BẢNG THREAD riêng (thread table) bên cạnh process table, tự lập lịch từng thread. Còn runtime system trên user space là đặc trưng của user-level threads; chuyển ngữ cảnh kernel threads chậm hơn chứ không nhanh."
    },
    {
      n: 47,
      text: "What is NOT an operating system mode?",
      options: ["System mode", "User mode", "Kernel mode", "Supervisor mode"],
      answers: [0],
      explain: "Theo giáo trình, các chế độ vận hành được nhắc tới là user mode, kernel mode (còn gọi supervisor mode trên nhiều kiến trúc). \"System mode\" không phải tên chế độ chuẩn trong mô hình này."
    },
    {
      n: 48,
      text: "In UNIX systems, what is the primary purpose of system calls like fork() and exec()?",
      options: ["To control peripheral devices", "To load device drivers into memory.", "To create and execute new processes.", "To switch between user and kernel mode."],
      answers: [2],
      explain: "fork() tạo tiến trình con; exec() nạp chương trình mới vào tiến trình đó — tổ hợp này là cách UNIX tạo và thực thi tiến trình mới (shell gọi lệnh nào cũng dùng fork + exec)."
    },
    {
      n: 49,
      text: "Which approach to deadlock prevention eliminates circular wait?",
      options: ["Forcing all processes to request resources in a predefined order", "Allowing processes to hold and wait for resources indefinitely", "Preventing mutual exclusion for critical resources", "Granting all resources to a process before execution begins"],
      answers: [0],
      explain: "Yêu cầu xin tài nguyên theo THỨ TỰ ĐỊNH TRƯỚC (đánh số toàn cục, chỉ xin số cao hơn số đang giữ) khiến chu trình chờ không thể tồn tại → loại trừ circular wait. Cấp phát toàn bộ trước khi chạy phá hold-and-wait."
    },
    {
      n: 50,
      text: "Which deadlock recovery technique is least likely to impact system performance but may lead to potential inconsistencies?",
      options: ["Killing one or more processes involved in the deadlock", "Preempting resources from deadlocked processes", "Increasing system resources dynamically", "Restarting the entire system"],
      answers: [0],
      explain: "KILL tiến trình bị deadlock là cách phục hồi nhanh, ít ảnh hưởng hiệu năng hệ thống; nhưng tiến trình bị hủy đột ngột giữa chừng cập nhật có thể để lại dữ liệu không nhất quán. Preempt phải rollback, restart toàn hệ thống tốn kém hơn nhiều."
    }
  ]
});
