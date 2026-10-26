// NWC204 - Fall 2025 - Retake Exam
// Nguồn: NWC204 - FA25 - RE.pdf (50 câu hỏi trắc nghiệm, format FUO, layout 2 cột)
window.EXAMAPP_EXAMS = window.EXAMAPP_EXAMS || [];
window.EXAMAPP_EXAMS.push({
  id: "nwc204-fa25-re",
  subjectId: "NWC204",
  title: "NWC204 - Fall 2025 - Retake Exam",
  originalFile: "NWC204 - FA25 - RE.pdf",
  semester: "Fall 2025",
  semesterKey: "fa25",
  type: "Retake Exam",
  typeKey: "retake",
  durationMinutes: 60,
  imagePath: "images/nwc204/fa25-re/",
  questions: [
    {
      n: 1,
      text: "(Choose 1 answer) What factor determines TCP window size?",
      options: ["the amount of data to be transmitted", "the number of services included in the TCP segment", "the amount of data the destination can process at one time", "the amount of data the source is capable of sending at one time"],
      answers: [2],
      explain: "Cửa sổ TCP do bên nhận quảng bá trong trường Window — phản ánh khả năng xử lý/bộ đệm của đích tại một thời điểm. Cơ chế này (flow control) giúp nguồn không gửi quá nhanh làm tràn bộ đệm bên nhận."
    },
    {
      n: 2,
      text: "(Choose 3 answers) Which three statements characterize UDP? (Select all that applied.)",
      options: ["UDP provides basic connectionless transport layer functions.", "UDP provides connection-oriented, fast transport of data at Layer 3.", "UDP relies on application layer protocols for error detection.", "UDP is a low overhead protocol that does not provide sequencing or flow control mechanisms.", "UDP relies on IP for error detection and recovery.", "UDP provides sophisticated flow control mechanisms."],
      answers: [0, 2, 3],
      explain: "UDP: connectionless, overhead thấp, không sequencing/flow control — ứng dụng tự lo phát hiện lỗi và khôi phục nếu cần. UDP hoạt động ở Layer 4 (không phải 3), không connection-oriented, không có flow control tinh vi, và IP cũng không phục hồi lỗi."
    },
    {
      n: 3,
      text: "(Choose 1 answer) What is a primary characteristic of the UDP protocol?",
      options: ["Connection-oriented communication", "Guaranteed delivery of data", "Minimal overhead with no error checking", "Flow control and congestion avoidance"],
      answers: [2],
      explain: "UDP nổi bật với overhead tối thiểu (header 8 byte), không thiết lập kết nối, không đảm bảo chuyển giao, không kiểm soát luồng/nghẽn — đổi lại tốc độ nhanh, độ trễ thấp."
    },
    {
      n: 4,
      text: "(Choose 1 answer) To which TCP port group does the port 414 belong?",
      options: ["Registered", "Well-known", "Private or dynamic", "Public"],
      answers: [1],
      explain: "Cổng 414 nằm trong dải 0–1023 — well-known ports, gán cho các dịch vụ chuẩn. Registered là 1024–49151, dynamic/private là 49152–65535."
    },
    {
      n: 5,
      text: "(Choose 1 answer) Which physical WAN topology connects multiple remote sites to a central location?",
      options: ["Hub-and-Spoke", "Point-to-Point", "Mesh", "Ring"],
      answers: [0],
      explain: "Hub-and-spoke: các site vệ tinh đều nối về một hub trung tâm — tiết kiệm chi phí, hub là điểm trung chuyển. Point-to-point chỉ nối hai điểm, mesh nối đầy đủ mọi cặp, ring nối vòng."
    },
    {
      n: 6,
      text: "(Choose 2 answers) The IEEE 802 LAN/MAN data link layer consists of which two sublayers? (Choose two.)",
      options: ["Network Control Protocol", "Logical Link Control", "Media Access Control", "Link Control Protocol"],
      answers: [1, 2],
      explain: "Data link IEEE 802 gồm LLC (Logical Link Control) giao tiếp tầng network và MAC (Media Access Control) phụ trách địa chỉ vật lý + truy cập media. NCP/LCP thuộc PPP."
    },
    {
      n: 7,
      text: "(Choose 2 answers) What are two services performed by the data link layer of the OSI model? (Choose two.)",
      options: ["It fragments data packets into the MTU size.", "It determines the path to forward packets.", "It accepts Layer 3 packets and encapsulates them into frames.", "It provides media access control and performs error detection.", "It monitors the Layer 2 communication by building a MAC address table."],
      answers: [2, 3],
      explain: "Data link: đóng gói packet tầng 3 thành frame và kiểm soát truy cập media + phát hiện lỗi (FCS). Định đường đi là tầng network; MAC address table là hoạt động của switch (thiết bị), fragmentation là của IP."
    },
    {
      n: 8,
      text: "(Choose 1 answer) A web client is receiving a response for a web page from a web server. From the perspective of the client, what is the correct order of the protocol stack that is used to decode the received transmission?",
      options: ["Ethernet, IP, TCP, HTTP", "HTTP, TCP, IP, Ethernet", "Ethernet, TCP, IP, HTTP", "HTTP, Ethernet, IP, TCP"],
      answers: [0],
      explain: "De-encapsulation từ dưới lên: Ethernet frame → IP packet → TCP segment → dữ liệu HTTP. Mỗi tầng bóc header của mình rồi chuyển PDU lên tầng kế tiếp."
    },
    {
      n: 9,
      text: "(Choose 1 answer) Which statement accurately describes a TCP/IP encapsulation process when a PC is sending data to the network?",
      options: ["Data is sent from the internet layer to the network access layer.", "Packets are sent from the network access layer to the transport layer.", "Segments are sent from the transport layer to the internet layer.", "Frames are sent from the network access layer to the internet layer."],
      answers: [2],
      explain: "Chiều gửi là từ trên xuống: transport tạo segment và chuyển xuống internet layer đóng thành packet — đúng mô tả ở phương án C. Các chiều ngược lại là de-encapsulation (nhận)."
    },
    {
      n: 10,
      text: "(Choose 1 answer) What is the process of dividing a large data stream into smaller pieces prior to transmission?",
      options: ["Sequencing", "Encoding", "Multiplexing", "Segmentation"],
      answers: [3],
      explain: "Segmentation là phân đoạn luồng dữ liệu lớn thành các segment nhỏ để truyền; sequencing đánh số thứ tự, encoding mã hóa bit thành tín hiệu, multiplexing trộn nhiều luồng trên một đường truyền."
    },
    {
      n: 11,
      text: "(Choose 1 answer) For the TCP/IP protocol suite, what is the correct order of events when a Telnet message is being prepared to be sent over the network?<table class=\"mini-table\"><tr><td>1. The IP header is added.</td><td>A. First</td></tr><tr><td>2. The TCP header is added.</td><td>B. Second</td></tr><tr><td>3. The Ethernet header is added.</td><td>C. Third</td></tr><tr><td>4. The Telnet-formatted data is provided to the next layer.</td><td>D. Fourth</td></tr></table>",
      options: ["1,2,3,4", "2,1,3,4", "3,2,1,4", "4,2,1,3"],
      answers: [3],
      explain: "Thứ tự encapsulation: (4) dữ liệu Telnet được chuyển xuống transport → (2) thêm TCP header → (1) thêm IP header → (3) thêm Ethernet header. Vậy 4,2,1,3."
    },
    {
      n: 12,
      text: "(Choose 1 answer) What is necessary to plan and use when implementing a network?",
      options: ["device names", "IP addressing scheme", "MAC addressing scheme", "DMZ location"],
      answers: [1],
      explain: "Khi triển khai mạng, sơ đồ địa chỉ IP (IP addressing scheme) bắt buộc phải được lập kế hoạch: phân bổ subnet, tránh trùng, dự phòng mở rộng. MAC do nhà sản xuất gán sẵn, device name/DMZ là chi tiết triển khai."
    },
    {
      n: 13,
      text: "(Choose 1 answer) Which method allows a device to obtain an IPv6 address dynamically without the need for a DHCP server?",
      options: ["Stateful DHCPv6", "Stateless Address Autoconfiguration (SLAAC)", "Manual Configuration", "NAT64"],
      answers: [1],
      explain: "SLAAC: thiết bị tự tạo địa chỉ từ prefix trong Router Advertisement + interface ID tự sinh, không cần DHCPv6 server. Stateful DHCPv6 vẫn cần server."
    },
    {
      n: 14,
      text: "(Choose 1 answer) Three methods allow IPv4 and IPv6 to co-exist. Match each method with its description. (Not all options are used.)<table class=\"mini-table\"><tr><td>A. The IPv4 packets and IPv6 packets coexist in the same network.</td><td>1. DHCP</td></tr><tr><td>B. The IPv6 packet is transported inside an IPv4 packet.</td><td>2. translation</td></tr><tr><td>C. IPv4 packets are converted into IPv6 packets, and vice versa.</td><td>3. tunneling</td></tr><tr><td></td><td>4. dual-stack</td></tr></table>",
      options: ["A4-B3-C2", "A3-B2-C1", "A4-B2-C1", "A1-B3-C4"],
      answers: [0],
      explain: "Dual-stack: hai họ giao thức chạy song song (A→4). Tunneling: bọc IPv6 trong IPv4 để vượt vùng IPv4 (B→3). Translation: chuyển đổi IPv6 ↔ IPv4 (C→2). Vậy A4-B3-C2."
    },
    {
      n: 15,
      text: "(Choose 1 answer) What is the recommended prefix length for most IPv6 subnets?",
      options: ["/32", "/48", "/64", "/128"],
      answers: [2],
      explain: "/64 là chiều dài chuẩn cho subnet LAN IPv6: 64 bit network + 64 bit interface ID, tương thích SLAAC/EUI-64 và mọi giao thức định tuyến. /32, /48 là prefix cấp cho ISP/tổ chức; /128 là địa chỉ đơn lẻ."
    },
    {
      n: 16,
      text: "(Choose 1 answer) Which IPv6 address type is used for communication within a single network segment and cannot be routed?",
      options: ["Global Unicast Address (GUA)", "Link-Local Address (LLA)", "Unique Local Address (ULA)", "Multicast Address"],
      answers: [1],
      explain: "LLA (fe80::/10) chỉ hợp lệ trên một link: dùng cho ND, giao thức định tuyến, next-hop; router không forward các gói có nguồn/đích link-local sang link khác."
    },
    {
      n: 17,
      text: "(Choose 1 answer) What type of address is automatically assigned to an interface when IPv6 is enabled on that interface?",
      options: ["Loopback", "Global unicast", "Link-local", "Unique local"],
      answers: [2],
      explain: "Ngay khi bật IPv6, interface tự sinh link-local (fe80::/10) từ interface ID — không cần cấu hình hay server. GUA phải được cấp (SLAAC/DHCPv6) hoặc cấu hình tay."
    },
    {
      n: 18,
      text: "(Choose 1 answer) Which destination address is used in an ARP request frame?",
      options: ["0.0.0.0", "255.255.255.255", "FFFF.FFFF.FFFF", "AAAA.AAAA.AAAA", "the physical address of the destination host"],
      answers: [2],
      explain: "ARP request phát broadcast tầng 2 với MAC đích FFFF.FFFF.FFFF để mọi host trong link nhận được. 255.255.255.255 là broadcast IP (trường trong packet, không phải frame ARP)."
    },
    {
      n: 19,
      text: "(Choose 1 answer) Which destination address is used in an ARP request frame?",
      options: ["01-00-5E-00-AA-23", "0.0.0.0", "FFFF.FFFF.FFFF", "255.255.255.255", "127.0.0.1"],
      answers: [2],
      explain: "MAC đích của ARP request luôn là broadcast FFFF.FFFF.FFFF. 01-00-5E-xx là dải multicast MAC; 0.0.0.0/127.0.0.1 là địa chỉ IPv4; 255.255.255.255 là broadcast IP."
    },
    {
      n: 20,
      text: "(Choose 1 answer) What property of ARP causes cached IP-to-MAC mappings to remain in memory longer?",
      options: ["Entries in an ARP table are time-stamped and are purged after the timeout expires.", "A static IP-to-MAC address entry can be entered manually into an ARP table.", "The type field 0x806 appears in the header of the Ethernet frame.", "The port-to-MAC address table on a switch has the same entries as the ARP table on the switch."],
      answers: [1],
      explain: "Entry ARP tĩnh (nhập tay) không bị xóa khi hết timeout nên tồn tại trong cache lâu hơn entry động. Trường 0x806 chỉ định danh giao thức ARP trong frame Ethernet."
    },
    {
      n: 21,
      text: "(Choose 1 answer) What is the aim of an ARP spoofing attack?",
      options: ["to flood the network with ARP reply broadcasts", "to fill switch MAC address tables with bogus addresses", "to associate IP addresses to the wrong MAC address", "to overwhelm network hosts with ARP requests"],
      answers: [2],
      explain: "ARP spoofing ghép IP của nạn nhân (thường là gateway) vào MAC của attacker để đánh chặn/đổi hướng traffic (MITM). MAC flooding mới là kỹ thuật làm tràn bảng MAC của switch."
    },
    {
      n: 22,
      text: "(Choose 1 answer) Match the requirements of a reliable network with the supporting network architecture. (Not all options are used.)<table class=\"mini-table\"><tr><td>A. fault tolerance</td><td>1. Protect the network from unauthorized access.</td></tr><tr><td>B. scalability</td><td>2. Provide redundant links and devices.</td></tr><tr><td>C. security</td><td>3. Match the type of communication with a specific priority.</td></tr><tr><td></td><td>4. Expand the network without degrading the service for existing users.</td></tr><tr><td></td><td>5. Ensure that streaming data is provided over high speed links.</td></tr></table>",
      options: ["A1-B4-C1", "A2-B4-C1", "A1-B5-C3", "A3-B2-C4"],
      answers: [1],
      explain: "Fault tolerance = dự phòng liên kết/thiết bị (A→2). Scalability = mở rộng không làm suy giảm dịch vụ hiện có (B→4). Security = chống truy cập trái phép (C→1). Vậy A2-B4-C1."
    },
    {
      n: 23,
      text: "(Choose 1 answer) Which type of network topology lets you see the actual location of intermediary devices and cable installation?",
      options: ["Physical topology", "Logical topology"],
      answers: [0],
      explain: "Physical topology thể hiện vị trí lắp đặt thực tế của thiết bị và đường cáp; logical topology chỉ mô tả luồng dữ liệu logic giữa các node."
    },
    {
      n: 24,
      text: "(Choose 2 answers) What two criteria are used to help select a network medium from various network media? (Choose two.)",
      options: ["the types of data that need to be prioritized", "the cost of the end devices utilized in the network", "the distance the selected medium can successfully carry a signal", "the number of intermediate devices installed in the network", "the environment where the selected medium is to be installed"],
      answers: [2, 4],
      explain: "Hai tiêu chí chọn medium: khoảng cách truyền tối đa của tín hiệu (UTP 100 m, fiber xa hơn nhiều) và môi trường lắp đặt (nhiễu EMI, nhiệt, ẩm...). Yếu tố end device hay số thiết bị trung gian không phải tiêu chí chọn medium."
    },
    {
      n: 25,
      text: "(Choose 1 answer) What happens when a switch receives a frame and the calculated CRC value is different than the value that is in the FCS field?",
      options: ["The switch places the new CRC value in the FCS field and forwards the frame.", "The switch notifies the source of the bad frame.", "The switch drops the frame.", "The switch floods the frame to all ports except the port through which the frame arrived to notify the hosts of the error."],
      answers: [2],
      explain: "CRC tính lại không khớp FCS ⇒ frame bị lỗi khi truyền ⇒ switch hủy frame (drop). Switch không sửa FCS, không báo về nguồn, cũng không flood frame lỗi."
    },
    {
      n: 26,
      text: "(Choose 1 answer) What is the special value assigned to the first 24 bits of a multicast MAC address transporting an IPv4 packet?",
      options: ["01-00-5E", "FF-00-5E", "01-5E-00", "FF-FF-FF"],
      answers: [0],
      explain: "Multicast IPv4 ánh xạ sang MAC với 24 bit đầu cố định 01-00-5E, 25th bit = 0, còn 23 bit cuối lấy từ phần thấp của địa chỉ multicast IP (224.0.0.0/4)."
    },
    {
      n: 27,
      text: "(Choose 1 answer) Refer to the exhibit. What is the destination MAC address of the Ethernet frame as it leaves the web server if the final destination is PC1?",
      image: "q27.png",
      imageAlt: "Sơ đồ: PC1 192.168.1.50 (MAC ...AA) — SW1 — R1 Fa0/0 192.168.1.1 (MAC ...BB); R2 Fa0/0 192.168.5.1 (MAC ...CC) — SW2 — Web Server 192.168.5.10 (MAC ...DD); hai router nối nhau",
      options: ["01-60-2F-34-37-AA", "00-60-2F-34-37-BB", "00-60-2F-34-37-CC", "00-60-2F-34-37-DD"],
      answers: [2],
      explain: "Web server (192.168.5.10) gửi tới PC1 (192.168.1.50) ở mạng khác → frame phải gửi tới default gateway: interface Fa0/0 của R2, MAC 00-60-2F-3A-07-CC. MAC của R2 sẽ được thay bằng MAC PC1 ở segment cuối."
    },
    {
      n: 28,
      text: "(Choose 1 answer) What is the auto-MDIX feature on a switch?",
      options: ["the automatic configuration of an interface for 10/100/1000 Mb/s operation", "the automatic configuration of an interface for a straight-through or a crossover Ethernet cable connection", "the automatic configuration of full-duplex operation over a single Ethernet copper or optical cable", "the ability to turn a switch interface on or off accordingly if an active connection is detected"],
      answers: [1],
      explain: "Auto-MDIX tự nhận biết kiểu cáp (straight-through hay crossover) và đổi kiểu TX/RX của port tương ứng — nối switch–switch bằng cáp thẳng vẫn chạy được. Tự chọn tốc độ là auto-negotiation, không phải auto-MDIX."
    },
    {
      n: 29,
      text: "(Choose 1 answer) What happens if an IPv6 device detects a duplicate address during startup?",
      options: ["It sends a Neighbor Advertisement (NA) to notify the sender", "It automatically requests a new IP from DHCPv6", "It assigns itself another random IPv6", "It ignores the conflict and continues using this address"],
      answers: [1],
      explain: "Khi DAD phát hiện địa chỉ trùng, thiết bị không dùng địa chỉ đó nữa mà xin địa chỉ khác (qua DHCPv6) để tránh xung đột. Gửi NA là phản ứng của chủ địa chỉ khi nhận NS, không phải hành động của thiết bị bị trùng."
    },
    {
      n: 30,
      text: "(Choose 1 answer) What does the \"Time Exceeded\" ICMP message indicate?",
      options: ["The destination host is down", "The packet's TTL has reached zero", "The source address is unreachable", "The network is congested"],
      answers: [1],
      explain: "ICMP Time Exceeded (type 11) báo rằng TTL/Hop Limit của packet đã về 0 tại router trung gian — packet bị hủy. Đây chính là cơ chế traceroute dùng để phát hiện từng hop."
    },
    {
      n: 31,
      text: "(Choose 1 answer) A user who is unable to connect to the file server contacts the help desk. The helpdesk technician asks the user to ping the IP address of the default gateway that is configured on the workstation. What is the purpose for this ping command?",
      options: ["to obtain a dynamic IP address from the server", "to request that gateway forward the connection request to the file server", "to test that the host has the capability to reach hosts on other networks", "to resolve the domain name of the file server to its IP address"],
      answers: [2],
      explain: "Ping gateway kiểm tra kết nối từ host tới cửa ngõ ra LAN — tức khả năng truy cập các mạng khác. Nếu gateway không ping được thì lỗi trong LAN; nếu ping được mà server không tới được thì lỗi ngoài LAN."
    },
    {
      n: 32,
      text: "(Choose 1 answer) Which of these is the name for the capacity of a medium to carry data?",
      options: ["Bandwidth", "Throughput", "Goodput"],
      answers: [0],
      explain: "Bandwidth là công suất lý thuyết của medium (bps). Throughput là tốc độ thực đo được; goodput là phần throughput mang dữ liệu hữu ích (đã trừ overhead)."
    },
    {
      n: 33,
      text: "(Choose 1 answer) What is a primary role of the Physical layer in transmitting data on the network?",
      options: ["create the signals that represent the bits in each frame on to the media", "provide physical addressing to the devices", "determine the path packets take through the network", "control data access to the media"],
      answers: [0],
      explain: "Physical layer mã hóa từng bit thành tín hiệu điện/ánh sáng/vô tuyến và đưa lên media. Địa chỉ vật lý và kiểm soát truy cập media thuộc data link; chọn đường đi thuộc network."
    },
    {
      n: 34,
      text: "(Choose 1 answer) What is a primary role of the Physical layer in transmitting data on the network?",
      options: ["create the signals that represent the bits in each frame on to the media", "provide physical addressing to the devices", "determine the path packets take through the network", "control data access to the media"],
      answers: [0],
      explain: "Câu lặp lại trong đề: nhiệm vụ chính của Physical layer là tạo tín hiệu biểu diễn các bit của frame và truyền lên media. Địa chỉ vật lý/truy cập media là của tầng 2, định tuyến là tầng 3."
    },
    {
      n: 35,
      text: "(Choose 1 answer) How can an administrator verify the current IP configuration of all router interfaces?",
      options: ["show ip interface brief", "display interfaces", "check interfaces", "list interfaces"],
      answers: [0],
      explain: "show ip interface brief hiển thị bảng tổng hợp: interface, IP-Address, OK?, Method, Status, Protocol — cách nhanh nhất để xem cấu hình IP của mọi interface. display interfaces là cú pháp Huawei."
    },
    {
      n: 36,
      text: "(Choose 1 answer) A technician is configuring a router to allow for all forms of management access. As part of each different type of access, the technician is trying to type the command login. Which configuration mode should be entered to do this task?",
      options: ["user executive mode", "global configuration mode", "any line configuration mode", "privileged EXEC mode"],
      answers: [2],
      explain: "Lệnh login cấu hình trong line configuration mode (console, vty, aux) để yêu cầu xác thực mật khẩu khi truy cập. Vậy chế độ cần vào là bất kỳ line configuration mode nào."
    },
    {
      n: 37,
      text: "(Choose 1 answer) What is the default gateway used for in a network?",
      options: ["To route traffic to local devices", "To assign IP addresses dynamically", "To route traffic to devices on another network", "To provide DNS services"],
      answers: [2],
      explain: "Default gateway là router mà host dùng để gửi traffic đến các mạng khác (khi đích không thuộc mạng cục bộ). Cấp IP động là DHCP, DNS là dịch vụ phân giải tên."
    },
    {
      n: 38,
      text: "(Choose 2 answers) Which two functions are primary functions of a router? (Choose two.)",
      options: ["packet forwarding", "microsegmentation", "domain name resolution", "path selection", "flow control"],
      answers: [0, 3],
      explain: "Router chọn đường (path selection) và chuyển tiếp packet (packet forwarding) giữa các mạng. Microsegmentation là switch; DNS và flow control không phải chức năng router."
    },
    {
      n: 39,
      text: "(Choose 1 answer) How many host addresses are available on the 192.168.10.128/26 network?",
      options: ["30", "32", "60", "62", "64"],
      answers: [3],
      explain: "/26 → 6 bit host → 64 địa chỉ, trừ network (192.168.10.128) và broadcast (192.168.10.191) còn 62 host."
    },
    {
      n: 40,
      text: "(Choose 1 answer) What is the broadcast address for the IP subnet 192.168.10.0/24?",
      options: ["192.168.10.0", "192.168.10.255", "192.168.10.1", "192.168.11.0"],
      answers: [1],
      explain: "Trong subnet 192.168.10.0/24, broadcast là địa chỉ có 8 bit host toàn 1: 192.168.10.255. .0 là network address, .1 thường là gateway."
    },
    {
      n: 41,
      text: "(Choose 1 answer) A message is sent to all hosts on a remote network. Which type of message is it?",
      options: ["limited broadcast", "multicast", "directed broadcast", "unicast"],
      answers: [2],
      explain: "Directed broadcast: gửi đến tất cả host của một mạng cụ thể bên ngoài (ví dụ 192.168.10.255 từ mạng khác). Limited broadcast (255.255.255.255) chỉ trong mạng cục bộ; multicast gửi cho nhóm đăng ký."
    },
    {
      n: 42,
      text: "(Choose 1 answer) How many host addresses are available on the network 172.16.128.0 with a subnet mask of 255.255.252.0?",
      options: ["510", "512", "1022", "1024", "2046", "2048"],
      answers: [2],
      explain: "255.255.252.0 = /22 → 10 bit host → 1024 địa chỉ; trừ network và broadcast còn 1022 host dùng được."
    },
    {
      n: 43,
      text: "(Choose 1 answer) What command will prevent all unencrypted passwords from displaying in plain text in a configuration file?",
      options: ["config# enable password secret", "config# enable secret Secret_password", "config-line password secret", "config# service password-encryption"],
      answers: [3],
      explain: "service password-encryption mã hóa (type 7) tất cả mật khẩu plaintext trong cấu hình — hiện lên dạng 7 0822... thay vì rõ ràng. enable secret chỉ hash một mật khẩu privileged EXEC."
    },
    {
      n: 44,
      text: "(Choose 3 answers) Passwords can be used to restrict access to all or parts of the Cisco IOS. Select the modes and interfaces that can be protected with passwords. (Choose three.)",
      options: ["VTY interface", "console interface", "Ethernet interface", "boot IOS mode", "privileged EXEC mode", "router configuration mode"],
      answers: [0, 1, 4],
      explain: "Có thể đặt mật khẩu cho: console (line console 0), VTY (Telnet/SSH) và privileged EXEC mode (enable secret/enable password). Interface Ethernet không đăng nhập, boot IOS mode và router configuration mode không phải nơi bảo vệ bằng password chuẩn."
    },
    {
      n: 45,
      text: "(Choose 1 answer) Which interface allows remote management of a Layer 2 switch?",
      options: ["the AUX interface", "the console port interface", "the switch virtual interface", "the first Ethernet port interface"],
      answers: [2],
      explain: "SVI (thường interface vlan 1) cung cấp địa chỉ IP cho switch lớp 2, cho phép Telnet/SSH quản trị từ xa. Console/AUX là truy cập cục bộ; port Ethernet của switch không mang IP quản lý."
    },
    {
      n: 46,
      text: "(Choose 1 answer) Which access method would be most appropriate if you were in the equipment room with a new switch that needs to be configured?",
      options: ["Console", "Telnet/SSH", "Aux"],
      answers: [0],
      explain: "Switch mới chưa có IP/cấu hình mạng nên Telnet/SSH không kết nối được; console là truy cập out-of-band trực tiếp — chuẩn mực để cấu hình ban đầu (initial configuration)."
    },
    {
      n: 47,
      text: "(Choose 2 answers) What are the two most commonly referenced fields in an IPv4 packet header that indicate where the packet is coming from and where it is going? (Choose two.)",
      options: ["Destination IP address", "Protocol", "Time to live", "Differentiated Service (DS)", "Source IP address"],
      answers: [0, 4],
      explain: "Source IP address và Destination IP address là hai trường chỉ điểm đi/đến của packet, dùng cho định tuyến và trả lời về đúng nguồn. TTL, Protocol, DS là các trường điều khiển khác."
    },
    {
      n: 48,
      text: "(Choose 1 answer) Within a production network, what is the purpose of configuring a switch with a default gateway address?",
      options: ["Hosts that are connected to the switch can use the switch default gateway address to forward packets to a remote destination.", "A switch must have a default gateway to be accessible by Telnet and SSH.", "The default gateway address is used to forward packets originating from the switch to remote networks.", "It provides a next-hop address for all traffic that flows through the switch."],
      answers: [2],
      explain: "Default gateway của switch chỉ phục vụ traffic do chính switch phát sinh (Telnet/SSH, ping, SNMP, syslog...) khi đích ở mạng khác. Traffic của host đi qua switch không dùng gateway của switch."
    },
    {
      n: 49,
      text: "(Choose 1 answer) Which statement describes a feature of the IP protocol?",
      options: ["IP encapsulation is modified based on network media.", "IP relies on Layer 2 protocols for transmission error control.", "MAC addresses are used during the IP packet encapsulation.", "IP relies on upper layer services to handle situations of missing or out-of-order packets."],
      answers: [3],
      explain: "IP best-effort: không đảm bảo chuyển giao, không sắp xếp lại gói — tầng trên (TCP) xử lý mất gói/sai thứ tự. IP độc lập media; MAC được chèn bởi data link khi đóng frame, không thuộc đóng gói IP."
    },
    {
      n: 50,
      text: "(Choose 1 answer) What is the effect of using the Router# copy running-config startup-config command on a router?",
      options: ["The contents of ROM will change.", "The contents of RAM will change.", "The contents of NVRAM will change.", "The contents of flash will change."],
      answers: [2],
      explain: "Lệnh sao chép running-config (RAM) vào startup-config (NVRAM) — nội dung NVRAM thay đổi, cấu hình được giữ sau reboot. ROM/flash chứa firmware/IOS, không bị ảnh hưởng."
    }
  ]
});
