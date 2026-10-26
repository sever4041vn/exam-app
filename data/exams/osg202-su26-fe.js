// OSG202 - Summer 2026 - Final Exam
// Nguồn: OSG202 - SU26 - FE.pdf (50 câu hỏi trắc nghiệm, format FUO)
window.EXAMAPP_EXAMS = window.EXAMAPP_EXAMS || [];
window.EXAMAPP_EXAMS.push({
  id: "osg202-su26-fe",
  subjectId: "OSG202",
  title: "OSG202 - Summer 2026 - Final Exam",
  originalFile: "OSG202 - SU26 - FE.pdf",
  semester: "Summer 2026",
  semesterKey: "su26",
  type: "Final Exam",
  typeKey: "final",
  durationMinutes: 60,
  imagePath: "images/osg202/su26-fe/",
  questions: [
    {
      n: 1,
      text: "Which of the following best describes the relationship between threads within a single process?",
      options: ["Threads are completely independent and do not share any resources.", "Threads share the same memory space but have their own registers.", "Threads are separate and isolated from one another.", "Threads are tightly integrated, and they all have their own separate memory space."],
      answers: [1],
      explain: "Các thread trong cùng một tiến trình dùng chung không gian địa chỉ (code, data, heap, file mở) nhưng mỗi thread có thanh ghi, stack và program counter riêng để thực thi độc lập. Chính sự chia sẻ bộ nhớ này giúp thread giao tiếp nhanh, nhưng cũng đòi hỏi đồng bộ hóa."
    },
    {
      n: 2,
      text: "What defines a critical section in the context of the Windows operating system?",
      options: ["It is a section of code where the processor gives priority to execute multiple threads simultaneously.", "It is a section of code where hardware interrupts are disabled to ensure uninterrupted execution.", "It is a segment of code that only one thread can execute at a time to avoid data inconsistency or conflicts.", "It is a part of the kernel where system-level processes are given higher priority over user-level processes."],
      answers: [2],
      explain: "Critical section (miền găng) là đoạn mã truy cập tài nguyên dùng chung, trong đó tại một thời điểm chỉ được phép một thread thực thi để tránh xung đột dữ liệu. Trong Windows, đối tượng CRITICAL_SECTION cung cấp cơ chế loại trừ tương hỗ cho các thread trong cùng tiến trình."
    },
    {
      n: 3,
      text: "Consider the following processes with their arrival and burst times:<table class=\"mini-table\"><tr><td>Process</td><td>Arrival Time</td><td>Burst Time</td></tr><tr><td>A</td><td>0</td><td>5</td></tr><tr><td>B</td><td>1</td><td>3</td></tr><tr><td>C</td><td>3</td><td>2</td></tr></table><br>What is the completion order of these processes when scheduled using First-Come, First-Served (FCFS)?",
      options: ["A, B, C", "A, C, B", "B, C, A", "C, B, A"],
      answers: [0],
      explain: "FCFS xếp theo thứ tự đến: A đến lúc 0 chạy trước, B đến lúc 1, C đến lúc 3. CPU không preempt nên hoàn thành đúng thứ tự A → B → C (A xong lúc 5, B xong lúc 8, C xong lúc 10)."
    },
    {
      n: 4,
      text: "In the Classical IPC Problems, specifically the Readers-Writers problem, what condition may lead to writer starvation?",
      options: ["A continuous stream of incoming readers", "A reader exits too early", "The mutex semaphore remains locked", "Too many writers writing at the same time"],
      answers: [0],
      explain: "Trong lời giải ưu tiên reader, nếu reader liên tục đến thì biến đếm rc không bao giờ về 0, writer bị chặn vô thời hạn → starvation của writer. Đây là nhược điểm kinh điển của giải pháp cho phép nhiều reader đồng thời."
    },
    {
      n: 5,
      text: "In a paging system, what is the term for the data stored in secondary storage that is not currently in main memory?",
      options: ["Cache", "Page table", "Disk image", "Swap space"],
      answers: [3],
      explain: "Swap space (vùng tráo đổi) là vùng trên đĩa chứa các trang/đoạn hiện không có trong RAM. Khi xảy ra page fault, trang cần thiết được nạp từ swap space về bộ nhớ chính."
    },
    {
      n: 6,
      text: "Given a memory system using Base and Limit Registers, where three programs P1, P2, and P3 are loaded with sizes 8KB, 4KB, and 16KB, respectively, what are the values of the Base and Limit Registers for program P3?",
      options: ["Base: 8KB, Limit: 24KB", "Base: 8KB, Limit: 28KB", "Base: 12KB, Limit: 16KB", "Base: 12KB, Limit: 28KB"],
      answers: [2],
      explain: "Các chương trình nạp liên tiếp: P1 chiếm 0-8KB, P2 chiếm 8-12KB, P3 bắt đầu tại 12KB. Thanh ghi Base = 12KB (địa chỉ bắt đầu), Limit = kích thước chương trình = 16KB; mọi địa chỉ của P3 phải thỏa Base ≤ addr < Base + Limit."
    },
    {
      n: 7,
      text: "In a system with page size = 4KB and logical address = 16 bits, how many pages are in the logical address space?",
      options: ["2<sup>10</sup>", "2<sup>12</sup>", "2<sup>8</sup>", "2<sup>4</sup>", "2<sup>16</sup>"],
      answers: [3],
      explain: "Trang 4KB = 2<sup>12</sup> byte dùng làm phần offset. Số bit cho số trang = 16 − 12 = 4 bit → không gian địa chỉ logic có 2<sup>4</sup> = 16 trang."
    },
    {
      n: 8,
      text: "In Optimal page replacement algorithms, consider the page reference string as 3, 1, 2, 1, 6, 5, 1, 3 with 3-page frames. Let's try to find the number of page faults:",
      options: ["3", "4", "5", "6"],
      answers: [2],
      explain: "Optimal thay trang sẽ không dùng lâu nhất trong tương lai: 3F, 1F, 2F (3 frame đầy), 1 hit, 6F (thay 2 vì 2 không dùng lại), 5F (thay 6 vì 6 không dùng lại), 1 hit, 3 hit. Tổng: 5 page faults."
    },
    {
      n: 9,
      text: "Suppose the free memory area has the following sizes in the following order: 10KB, 4KB, 15KB, 18KB, 7KB, 9KB, 12KB, and 20KB. A process that needs 12 KB of memory has been placed into a 20 KB block. Which of the following Memory Management algorithms is applied to the selection process?",
      options: ["Worst-fit", "First-fit", "Best-fit", "Next-fit"],
      answers: [0],
      explain: "Worst-fit luôn chọn lỗ trống LỚN NHẤT để cấp phát — ở đây là khối 20KB. (First-fit/Next-fit chọn 15KB đầu tiên thỏa, Best-fit chọn 15KB nhỏ nhất đủ chứa.)"
    },
    {
      n: 10,
      text: "A computer with a 32-bit virtual address uses a two-level page table. Virtual addresses are split into a 10-bit top-level page table field (PT1), a 10-bit second-level page table field (PT2), and 12-bit offset. How many PT1, PT2, and offsets are there with the virtual address 0x00403008 or 0000 0000 0100 0000 0011 0000 0000 1000?",
      options: ["PT1=1, PT2=3, offset=8", "PT1=1, PT2=1, offset=8", "PT1=4, PT2=3, offset=8", "PT1=4, PT2=1, offset=8"],
      answers: [0],
      explain: "Tách 32 bit: PT1 = 10 bit đầu = 0000000001 = 1; PT2 = 10 bit giữa = 0000000011 = 3; offset = 12 bit cuối = 000000001000 = 8. Vậy PT1=1, PT2=3, offset=8."
    },
    {
      n: 11,
      text: "Which of the following is a commonly used page replacement algorithm in operating systems?",
      options: ["Deep Neural Priority Scheduling", "Block Size Memory Filter Strategy", "Least Recently Used algorithm", "Fastest Immediate Processing Queue"],
      answers: [2],
      explain: "LRU (Least Recently Used) là thuật toán thay trang kinh điển: thay trang lâu nhất không được sử dụng. Các tên còn lại là bịa đặt, không tồn tại trong hệ điều hành thực tế."
    },
    {
      n: 12,
      text: "When a new process is created in a paging system, which of the following is appropriate to determine program size and create page table?",
      options: ["process creation time.", "process execution time.", "page fault time.", "process termination time."],
      answers: [0],
      explain: "Tại thời điểm tạo tiến trình (process creation time), OS biết kích thước chương trình (từ executable) và cấp phát bảng trang tương ứng. Page fault time chỉ xử lý nạp trang, không tạo bảng trang mới."
    },
    {
      n: 13,
      text: "What happens when the required page is being loaded from disk after a page fault?",
      options: ["Another user process may be scheduled to run", "The CPU enters halt mode", "The faulting process is permanently blocked", "The system waits in a loop for disk I/O to complete"],
      answers: [0],
      explain: "Việc nạp trang từ đĩa rất chậm (vài ms), nên bộ lập lịch chuyển CPU sang chạy tiến trình khác trong lúc chờ I/O. Tiến trình gặp page fault ở trạng thái blocked tạm thời và sẽ sẵn sàng lại khi trang được nạp xong."
    },
    {
      n: 14,
      text: "Which file extension is used for backup files?",
      options: [".bak", ".zip", ".txt", ".o"],
      answers: [0],
      explain: "Phần mở rộng .bak dùng cho file sao lưu (backup). .zip là file nén, .txt là file văn bản, .o là file đối tượng (object file) sau khi biên dịch."
    },
    {
      n: 15,
      text: "Which symbol is commonly used to represent the current directory in a path?",
      options: ["~", ".", "^", "/", "?"],
      answers: [1],
      explain: "Trong đường dẫn, dấu chấm (.) đại diện cho thư mục hiện hành, còn .. là thư mục cha. Dấu ~ là thư mục home của người dùng (UNIX), / là thư mục gốc."
    },
    {
      n: 16,
      text: "In file access system, random access files are essential for many applications, for example database systems. What two methods are used to specify where to start reading?",
      options: ["Write and Read", "Write and Seek", "Read and Seek", "Read and Write"],
      answers: [2],
      explain: "Truy cập ngẫu nhiên dùng hai phép toán: Seek (di chuyển con trỏ vị trí đến điểm cần đọc) và Read (đọc dữ liệu tại vị trí hiện hành). Kết hợp Seek + Read cho phép đọc tại bất kỳ offset nào trong file."
    },
    {
      n: 17,
      text: "In a memory system consisting of the following hole sizes: 10MB, 18MB, 9MB, and 14MB, suppose the Best Fit algorithm is used. Which holes are allocated in order for consecutive segment requests of 11MB, 2MB, 9MB, and 8MB?",
      options: ["14MB, 3MB, 10MB, 9MB", "18MB, 7MB, 10MB, 9MB", "14MB, 3MB, 9MB, 10MB", "18MB, 7MB, 9MB, 10MB"],
      answers: [2],
      explain: "Best-fit chọn lỗ nhỏ nhất đủ chứa: yêu cầu 11MB → chọn 14MB (còn 3MB); 2MB → chọn lỗ 3MB (còn 1MB); 9MB → chọn lỗ 9MB (còn 0); 8MB → chọn 10MB (nhỏ hơn 18MB). Thứ tự lỗ được cấp: 14, 3, 9, 10."
    },
    {
      n: 18,
      text: "Sector 0 of the disk is called the ___ and is used to boot the computer.",
      options: ["DMA", "MBR", "FAT", "NTFS"],
      answers: [1],
      explain: "Sector 0 của đĩa là MBR (Master Boot Record), chứa chương trình bootstrap và bảng phân vùng, được firmware đọc khi khởi động máy để nạp hệ điều hành."
    },
    {
      n: 19,
      text: "Why is journaling used in modern file systems such as ext4?",
      options: ["To prevent fragmentation", "To improve file read speed", "To recover from crashes and ensure metadata consistency", "To enable compression techniques that reduce file sizes during background maintenance operations"],
      answers: [2],
      explain: "Journal (nhật ký) ghi trước các thay đổi metadata vào log; nếu hệ thống gặp sự cố giữa chừng, khi khởi động lại OS chỉ cần phát lại/hoàn tác log để đưa file system về trạng thái nhất quán, tránh hỏng cấu trúc."
    },
    {
      n: 20,
      text: "Which Rock Ridge extension field is used to store POSIX file attributes?",
      options: ["NM", "PX", "TF", "PN"],
      answers: [1],
      explain: "Trong extension Rock Ridge của ISO 9660: PX lưu thuộc tính POSIX (quyền, UID/GID, số liên kết), NM lưu tên file dài, TF lưu dấu thời gian, PN lưu số thiết bị."
    },
    {
      n: 21,
      text: "In bitmap image processing, what does each bit typically represent?",
      options: ["A single pixel's color", "A sequence of characters", "A data packet in network transmission", "A unit of storage capacity"],
      answers: [0],
      explain: "Trong ảnh bitmap (đơn sắc), mỗi bit tương ứng một điểm ảnh (pixel) — bit 0/1 quyết định màu/trạng thái của pixel đó. Với ảnh màu, mỗi pixel dùng nhiều bit (mức xám hoặc RGB)."
    },
    {
      n: 22,
      text: "What is a key difference between interrupts and polling in I/O management?",
      options: ["Polling is initiated by hardware, while interrupts are initiated by software.", "Interrupts are asynchronous, while polling requires the CPU to actively check the device status.", "Interrupts are less efficient than polling.", "Interrupts are less efficient than polling. Polling allows the CPU to remain idle until an I/O device is ready."],
      answers: [1],
      explain: "Với interrupt, thiết bị chủ động báo CPU khi sẵn sàng (bất đồng bộ, CPU làm việc khác được). Với polling, CPU phải liên tục kiểm tra trạng thái thiết bị — tốn chu kỳ CPU ngay cả khi thiết bị chưa sẵn sàng."
    },
    {
      n: 23,
      text: "What is the purpose of the spindle in a hard disk drive?",
      options: ["To store data temporarily", "To read and write data to the platters", "To control the movement of the read/write head", "To provide power to the disk", "To cool the disk during operation"],
      answers: [3],
      explain: "Spindle (trục quay) là trục giữa ổ đĩa, gắn chặt các đĩa từ (platter) và quay chúng với tốc độ không đổi (5400/7200 RPM) nhờ motor — tức cung cấp năng lượng quay cho đĩa. Việc đọc/ghi do đầu từ (B), điều khiển đầu từ do cánh tay (actuator) đảm nhiệm (C)."
    },
    {
      n: 24,
      text: "For I/O operations, what is a common block size range is used in a file system or the storage medium?",
      options: ["512 to 8192 bytes", "512 to 16384 bytes", "512 to 32768 bytes", "512 to 65536 bytes"],
      answers: [2],
      explain: "Theo giáo trình (Tanenbaum), kích thước khối (block) của thiết bị khối thường dao động từ 512 byte đến 32.768 byte (32KB). Đây là dải phổ biến cho các file system và ổ đĩa."
    },
    {
      n: 25,
      text: "Choose correct answers.<br>What are the three basic different ways that I/O operations in computer system can be performed?",
      options: ["Programmed I/O", "Memory-mapped I/O", "Interrupt-driven I/O", "I/O using DMA"],
      answers: [0, 2, 3],
      explain: "Ba phương thức I/O cơ bản là: Programmed I/O (CPU chủ động chờ và chuyển dữ liệu), Interrupt-driven I/O (thiết bị báo ngắt khi xong) và DMA (bộ điều khiển truyền trực tiếp với bộ nhớ, không bận CPU). Memory-mapped I/O chỉ là cách ánh xạ địa chỉ thanh ghi thiết bị vào không gian bộ nhớ, không phải phương thức truyền dữ liệu."
    },
    {
      n: 26,
      text: "What is the role of the file system in disk management?",
      options: ["To allocate memory for disk operations.", "To manage the disk's hardware components.", "To organize and track files and data on the disk.", "To design disk controllers."],
      answers: [2],
      explain: "File system chịu trách nhiệm tổ chức, lưu trữ, đặt tên và theo dõi file/thư mục trên đĩa (cấp phát khối, quản lý thư mục, metadata). Phần cứng đĩa do controller quản lý, còn bộ nhớ chính là việc của memory manager."
    },
    {
      n: 27,
      text: "RAID level ___ works worst with operating systems that habitually ask for data one sector at a time.",
      options: ["0", "1", "2", "3"],
      answers: [3],
      explain: "RAID 3 chia dữ liệu theo byte trên các đĩa dữ liệu và dùng đĩa parity riêng — mọi thao tác đều phải truy cập song song toàn bộ đĩa. Với các OS yêu cầu từng sector rời rạc, RAID 3 phải xử lý tuần tự các yêu cầu → hiệu năng tệ nhất. (Tanenbaum)"
    },
    {
      n: 28,
      text: "Time to move the arm to the proper cylinder is called?",
      options: ["Seek time", "Rotational delay", "Actual data transfer time", "Access time"],
      answers: [0],
      explain: "Seek time là thời gian cánh tay ổ đĩa di chuyển đầu đọc/ghi đến rãnh (cylinder) đúng. Rotational delay là thời gian chờ đĩa quay đến sector, transfer time là thời gian truyền dữ liệu."
    },
    {
      n: 29,
      text: "What is one method to attack the the circular wait condition in deadlock management?",
      options: ["Establish a global numbering system for resources.", "Assign resources randomly to processes.", "Allow processes to request resources in any order.", "Prevent any process from requesting more than one resource."],
      answers: [0],
      explain: "Đánh số toàn cục tài nguyên và quy định tiến trình chỉ được yêu cầu tài nguyên theo thứ tự số tăng dần → không thể tồn tại chu trình chờ → phá vỡ điều kiện circular wait (Tanenbaum)."
    },
    {
      n: 30,
      text: "The resource allocation graph does not apply to a resource allocation system ______",
      options: ["with multiple instances of each resource type", "with a single instance of each resource type", "single & multiple instances of each resource type", "none of the mentioned"],
      answers: [0],
      explain: "Với tài nguyên đơn bản (single instance), chu trình trong đồ thị phân bổ tài nguyên là điều kiện cần và đủ của deadlock. Khi có nhiều bản sao (multiple instances), chu trình không còn đủ để kết luận deadlock nên đồ thị phân bổ (dưới dạng công cụ phát hiện đơn giản) không áp dụng được."
    },
    {
      n: 31,
      text: "Which resource allocation strategy is most likely to prevent deadlock while still allowing high resource utilization?",
      options: ["Granting requests based on the order they arrive", "Preempting resources whenever a higher-priority process arrives", "Allowing processes to hold resources indefinitely until they complete", "Allocating resources based on a resource hierarchy"],
      answers: [3],
      explain: "Phân cấp tài nguyên (resource hierarchy — đánh số thứ tự và yêu cầu theo thứ tự tăng dần) phá vỡ circular wait mà gần như không hạn chế việc sử dụng tài nguyên, nên vẫn giữ được utilization cao. FCFS không đảm bảo an toàn, preempt liên tục gây tốn kém."
    },
    {
      n: 32,
      text: "What does \"no preemption\" imply in the context of deadlocks?",
      options: ["Resources can be preempted from one process to another.", "Resources cannot be preempted once allocated.", "Processes can be terminated to free up resources.", "Resources are allocated in a circular manner."],
      answers: [1],
      explain: "Điều kiện no preemption: tài nguyên đã cấp cho tiến trình không thể bị thu hồi cưỡng bức, chỉ có tiến trình đang giữ nó chủ động giải phóng sau khi dùng xong. Đây là một trong bốn điều kiện Coffman của deadlock."
    },
    {
      n: 33,
      text: "Differentiate between Type 1 and Type 2 hypervisors in terms of their implementation and performance. Which type is generally more efficient for enterprise environments, and why?",
      options: ["Type 1 hypervisors, as they run directly on hardware", "Type 2 hypervisors, as they offer more flexibility.", "Type 1 hypervisors, for simpler management than Type 2", "Both types are equally efficient in enterprises"],
      answers: [0],
      explain: "Type 1 (bare-metal) chạy trực tiếp trên phần cứng, không qua hệ điều hành chủ nên chi phí thấp, hiệu năng cao, bảo mật tốt — phù hợp môi trường doanh nghiệp (VMware ESXi, Hyper-V). Type 2 chạy như một ứng dụng trên OS chủ nên có thêm một lớp overhead."
    },
    {
      n: 34,
      text: "A VMM (Virtual Machine Monitor) creates the illusion of multiple (virtual) machines on the same physical hardware. What is VMM also known?",
      options: ["Hypervisor", "hypervisor", "shell", "console"],
      answers: [0],
      explain: "VMM còn được gọi là Hypervisor — phần mềm tạo và quản lý các máy ảo trên cùng phần cứng vật lý. Shell là trình thông dịch lệnh, console là giao diện dòng lệnh, không liên quan đến ảo hóa."
    },
    {
      n: 35,
      text: "Paravirtualization takes a different approach by modifying the source code of the guest operating system instead rather that performing sensitive instructions. In this context, which of the following is true?",
      options: ["the paravirtualized guest executes system calls", "the paravirtualized guest executes virtual calls", "the paravirtualized guest executes hyper calls", "the paravirtualized guest executes Hyper commands"],
      answers: [2],
      explain: "Trong paravirtualization, guest OS được sửa mã nguồn để gọi trực tiếp hypervisor qua hypercall thay vì thực thi các lệnh nhạy cảm cần nhị phân dịch. KVM/Xen dùng cơ chế hypercall này để giao tiếp guest ↔ hypervisor."
    },
    {
      n: 36,
      text: "Which of the following is NOT a core function of an operating system?",
      options: ["Process management", "Memory management", "File management", "Internet browsing", "I/O management"],
      answers: [3],
      explain: "Duyệt web là chức năng của ứng dụng (trình duyệt), không phải của hệ điều hành. Các chức năng cốt lõi của OS gồm quản lý tiến trình, bộ nhớ, file, I/O, bảo mật…"
    },
    {
      n: 37,
      text: "Which hardware unit inside the computer is managed by the OS?",
      options: ["Scanner", "USB", "Memory", "Browser"],
      answers: [2],
      explain: "Bộ nhớ (RAM) là phần cứng bên trong máy mà OS trực tiếp quản lý: cấp phát/thu hồi frame, ánh xạ địa chỉ, bộ nhớ ảo. Scanner/USB là thiết bị ngoại vi, browser là phần mềm ứng dụng."
    },
    {
      n: 38,
      text: "Which of the following UNIX system calls is equivalent to the Win32 CreateProcess function?",
      options: ["fork", "waitpid", "execve", "Combination of fork and execve"],
      answers: [3],
      explain: "Win32 CreateProcess tạo tiến trình mới với chương trình chỉ định ngay trong một lệnh. UNIX tách làm hai bước: fork() (nhân bản tiến trình hiện tại) rồi execve() (thay thế ảnh chương trình bằng file mới) — tổ hợp fork + execve tương đương CreateProcess. (Tanenbaum)"
    },
    {
      n: 39,
      text: "Which of the following best describes a monolithic operating system structure?",
      options: ["A system where all functionalities are divided into separate processes", "A system where only file management is in the kernel", "A system where all components run in supervisor mode", "A system where drivers are executed in user space"],
      answers: [2],
      explain: "Hệ thống nguyên khối (monolithic): toàn bộ OS — lập lịch, bộ nhớ, file system, driver — được biên dịch thành một chương trình lớn chạy hoàn toàn ở chế độ kernel (supervisor mode). Ưu điểm hiệu năng cao, nhược điểm một lỗi nào đó cũng làm sập cả hệ thống."
    },
    {
      n: 40,
      text: "Given the segment table below:<table class=\"mini-table\"><tr><td>Segment</td><td>Limit</td><td>Base</td></tr><tr><td>0</td><td>600</td><td>219</td></tr><tr><td>1</td><td>14</td><td>2300</td></tr><tr><td>2</td><td>100</td><td>90</td></tr><tr><td>3</td><td>580</td><td>1327</td></tr><tr><td>4</td><td>96</td><td>1952</td></tr></table><br>What is the physical address for the logical address (2, 50)?",
      options: ["140", "130", "150", "Invalid address"],
      answers: [0],
      explain: "Segment 2 có Base = 90, Limit = 100. Offset 50 < 100 nên địa chỉ hợp lệ. Địa chỉ vật lý = Base + offset = 90 + 50 = 140."
    },
    {
      n: 41,
      text: "Which deadlock recovery technique is least likely to impact system performance but may lead to potential inconsistencies?",
      options: ["Killing one or more processes involved in the deadlock", "Preempting resources from deadlocked processes", "Increasing system resources dynamically", "Restarting the entire system"],
      answers: [0],
      explain: "Giết tiến trình trong deadlock nhanh và ít tốn kém về hiệu năng, nhưng tiến trình bị hủy đột ngột có thể đang giữa chừng cập nhật dữ liệu/file → gây không nhất quán. Preempt tài nguyên phải rollback nên tốn kém hơn, restart cả hệ thống thì ảnh hưởng toàn bộ."
    },
    {
      n: 42,
      text: "A system has 10 units of a single resource. There are three processes: P1, P2, and P3. At a certain moment, their maximum needs and allocated units are:<table class=\"mini-table\"><tr><td>Process</td><td>Maximum Needed</td><td>Allocated</td></tr><tr><td>P1</td><td>6</td><td>3</td></tr><tr><td>P2</td><td>5</td><td>3</td></tr><tr><td>P3</td><td>7</td><td>3</td></tr></table><br>What is the state of the system?",
      options: ["Unsafe.", "Safe.", "The system is in a deadlock.", "The system experiences starvation."],
      answers: [0],
      explain: "Đã cấp 9/10, còn rảnh 1. Nhu cầu còn lại: P1 = 3, P2 = 2, P3 = 4 — không tiến trình nào chạy hoàn thành với 1 đơn vị trống → không tồn tại chuỗi an toàn → trạng thái UNSAFE (có nguy cơ deadlock, chưa chắc đã deadlock)."
    },
    {
      n: 43,
      text: "Which of the following techniques attacks the \"No Preemption\" condition for preventing deadlocks?",
      options: ["Requiring processes to request all resources at once.", "Allowing only one process to use a resource at a time.", "Spooling printer output to disk to allow the printer daemon exclusive access.", "Ordering resources numerically and requiring processes to request them in increasing order."],
      answers: [1],
      explain: "Bốn phương án ứng với bốn điều kiện Coffman: spooling máy in (C) phá mutual exclusion, yêu cầu cấp phát một lần (A) phá hold-and-wait, đánh số tài nguyên (D) phá circular wait. Phương án còn lại (B) tương ứng phá điều kiện no preemption — cho phép thu hồi tài nguyên giữa chừng khi tiến trình không nhận được tài nguyên mới."
    },
    {
      n: 44,
      text: "In UNIX systems, what is the primary purpose of system calls like fork() and exec()?",
      options: ["To control peripheral devices", "To load device drivers into memory.", "To create and execute new processes.", "To switch between user and kernel mode."],
      answers: [2],
      explain: "fork() tạo tiến trình con (bản sao của cha), exec() nạp chương trình mới vào tiến trình. Cặp lệnh này là cơ chế chuẩn của UNIX để tạo và thực thi tiến trình mới; việc chuyển user/kernel mode là tác dụng phụ của system call, không phải mục đích."
    },
    {
      n: 45,
      text: "What is the primary purpose of an operating system?",
      options: ["To execute application programs", "To provide a user-friendly interface.", "To manage hardware resources and provide services to software.", "To create computer games."],
      answers: [2],
      explain: "Mục đích chính của OS: quản lý tài nguyên phần cứng (CPU, bộ nhớ, I/O) và cung cấp dịch vụ/giao diện cho phần mềm ứng dụng. Giao diện thân thiện hay chạy ứng dụng chỉ là hệ quả của vai trò này."
    },
    {
      n: 46,
      text: "Which technological advancement in the second generation of computers (1955-1965) led to the development of batch processing systems?",
      options: ["Vacuum tubes", "Punch cards", "Transistors", "Integrated Circuits"],
      answers: [2],
      explain: "Thế hệ 2 (1955-1965) dùng transistor thay tube → máy nhỏ hơn, tin cậy hơn, giá thành thấp hơn; cùng thiết bị input/output offline (đọc băng từ) tạo điều kiện ra đời hệ xử lý theo lô (batch system). Thế hệ 1 dùng tube, thế hệ 3 dùng IC."
    },
    {
      n: 47,
      text: "In Unix, which system call creates the new process?",
      options: ["create", "fork", "new", "exec"],
      answers: [1],
      explain: "fork() là system call của UNIX tạo tiến trình mới bằng cách nhân bản tiến trình gọi nó (tiến trình cha), tiến trình con nhận bản sao không gian địa chỉ riêng. exec chỉ nạp chương trình mới, không tạo tiến trình."
    },
    {
      n: 48,
      text: "Compare and contrast the implementations of threads in user space and in the kernel, highlighting their advantages and disadvantages?",
      options: ["Threads in user space offer faster context switching, whereas kernel threads have direct access to hardware resources.", "Kernel threads provide better synchronization mechanisms compared to user space threads.", "User space threads allow for better multitasking performance, while kernel threads are more prone to deadlocks.", "User space threads have limited access to system resources, whereas kernel threads can efficiently manage I/O operations."],
      answers: [0],
      explain: "User-level threads được quản lý bằng run-time system trong không gian người dùng: chuyển ngữ cảnh rất nhanh (không cần vào kernel) nhưng một thread gọi blocking syscall sẽ chặn cả tiến trình. Kernel threads được kernel lập lịch trực tiếp, truy cập tài nguyên phần cứng/I/O hiệu quả nhưng chuyển ngữ cảnh chậm hơn. Đáp án A mô tả đúng đánh đổi này."
    },
    {
      n: 49,
      text: "Assume jobs A-D arrive in quick succession in the READY queue. Using Shortest Job First scheduling, the average waiting time for each process is ___. Arrival time: 2 3 1 0. Job: A B C D. CPU cycle: 7 5 8 6",
      options: ["7.25", "8.75", "7.75", "8.25"],
      answers: [0],
      explain: "SJF không preempt: t=0 chỉ D có mặt → D chạy 0-6. t=6: B (cycle 5) ngắn nhất → 6-11. t=11: A (7) < C (8) → A: 11-18. Cuối cùng C: 18-26. Wait: A = 11−2 = 9, B = 6−3 = 3, C = 18−1 = 17, D = 0 → trung bình (9+3+17+0)/4 = 7.25."
    },
    {
      n: 50,
      text: "Which of the following best describes a process in the \"Running\" state?",
      options: ["A process that is actively using the CPU at that moment", "A process that is waiting for an external event to occur", "A process that is temporarily stopped to let another process run", "A process that has completed execution"],
      answers: [0],
      explain: "Trạng thái Running: tiến trình đang chiếm CPU và thực thi tại thời điểm đó. Đang chờ sự kiện ngoài là Blocked, tạm nhường CPU là Ready, đã kết thúc là Terminated."
    }
  ]
});
