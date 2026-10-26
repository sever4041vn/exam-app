// NWC204 - Summer 2026 - Final Exam
// Nguồn: NWC204 - SU26 - FE.pdf (50 câu hỏi trắc nghiệm, format FUO)
window.EXAMAPP_EXAMS = window.EXAMAPP_EXAMS || [];
window.EXAMAPP_EXAMS.push({
  id: "nwc204-su26-fe",
  subjectId: "NWC204",
  title: "NWC204 - Summer 2026 - Final Exam",
  originalFile: "NWC204 - SU26 - FE.pdf",
  semester: "Summer 2026",
  semesterKey: "su26",
  type: "Final Exam",
  typeKey: "final",
  durationMinutes: 60,
  imagePath: "images/nwc204/su26-fe/",
  questions: [
    {
      n: 1,
      text: "Which layer of the OSI model is responsible for describing the methods for exchanging data frames over a common media?",
      options: ["Network", "Transport", "Data Link", "Physical"],
      answers: [2],
      explain: "Tầng Data Link (OSI layer 2) mô tả các phương pháp đóng gói frame và trao đổi dữ liệu qua phương tiện truyền dùng chung, bao gồm định địa chỉ vật lý (MAC) và kiểm soát truy nhập media. Tầng Physical chỉ truyền bit, còn Network lo định tuyến gói tin giữa các mạng."
    },
    {
      n: 2,
      text: "Which of the following is not a key element of communication?",
      options: ["Network speed", "A source (sender)", "A destination (receiver)", "A transmission medium (channel)"],
      answers: [0],
      explain: "Ba thành phần cốt lõi của mọi hệ thống truyền thông là nguồn phát (source), đích nhận (destination) và kênh truyền (transmission medium). Tốc độ mạng chỉ là thông số hiệu năng, không phải thành phần cấu thành giao tiếp."
    },
    {
      n: 3,
      text: "What kind of threat is described when a threat actor impersonates another person to obtain credit information about that person?",
      options: ["data loss or manipulation", "disruption of service", "identify theft", "information theft"],
      answers: [2],
      explain: "Giả mạo danh tính người khác để lấy thông tin tín dụng chính là đánh cắp danh tính (identity theft). Khác với information theft (đánh cắp thông tin nói chung), identity theft nhấn mạnh việc chiếm dụng danh tính cá nhân để mạo danh."
    },
    {
      n: 4,
      text: "What process does a device use to verify that its IPv6 address is unique on the network?",
      options: ["DHCPv6", "SLAAC", "Neighbor Discovery Protocol (NDP)", "Duplicate Address Detection (DAD)"],
      answers: [3],
      explain: "DAD (Duplicate Address Detection) là bước trong IPv6 ND: thiết bị gửi Neighbor Solicitation đến địa chỉ proposed (solicited-node multicast) trước khi sử dụng; nếu có thiết bị nào trả lời Neighbor Advertisement thì địa chỉ bị trùng. DHCPv6/SLAAC là phương thức cấp địa chỉ, không phải cơ chế kiểm tra trùng."
    },
    {
      n: 5,
      text: "What is the length of an IPv6 address?",
      options: ["32 bits", "64 bits", "128 bits", "256 bits"],
      answers: [2],
      explain: "Địa chỉ IPv6 dài 128 bit, được chia thành 8 nhóm 16 bit viết dưới dạng thập lục phân, phân cách bằng dấu hai chấm. IPv4 chỉ có 32 bit nên không gian địa chỉ của IPv6 lớn hơn 2<sup>96</sup> lần."
    },
    {
      n: 6,
      text: "(Choose 1 answer) Match the IPv6 address with the IPv6 address type. (Not all options are used.)<table class=\"mini-table\"><tr><td>A. link-local</td><td>1. 2001:DB8::BAF:3F57:FE94</td></tr><tr><td>B. solicited node multicast</td><td>2. FF02::1</td></tr><tr><td>C. global unicast</td><td>3. ::1</td></tr><tr><td>D. all node multicast</td><td>4. FF02::1:FFAE:F85F</td></tr><tr><td>E. loopback</td><td></td></tr><tr><td>F. unique local</td><td></td></tr></table>",
      options: ["C1-D2-E3-B4", "C2-D1-E3-A4", "C1-F2-E4-B3", "C4-D2-E3-B1"],
      answers: [0],
      explain: "2001:DB8::... thuộc dải global unicast (C1); FF02::1 là all-nodes multicast (D2); ::1 là loopback (E3); FF02::1:FFAE:F85F có tiền tố FF02:0:0:0:0:1:FFxx:xxxx là solicited-node multicast (B4). Vậy ghép đúng là C1-D2-E3-B4."
    },
    {
      n: 7,
      text: "Which of the following techniques use native IPv6 connectivity?",
      options: ["Dual stack", "Tunneling", "Translation", "All of the above"],
      answers: [0],
      explain: "Dual stack cho phép thiết bị chạy song song IPv4 và IPv6, trong đó IPv6 được kết nối nguyên bản (native) qua mạng. Tunneling chỉ bọc IPv6 bên trong IPv4, còn translation (NAT64) chuyển đổi giữa hai giao thức — cả hai đều không phải kết nối native."
    },
    {
      n: 8,
      text: "What type of IPv6 address begins with fe80?",
      options: ["GUA", "LLA", "Multicast address", "None. An IPv6 address must begin with 2001."],
      answers: [1],
      explain: "Dải fe80::/10 là Link-Local Address (LLA) — địa chỉ tự cấu hình trên mọi interface IPv6, chỉ dùng để liên lạc trong một link/link-local và không được định tuyến. GUA bắt đầu bằng 2000::/3, multicast bắt đầu bằng ff00::/8."
    },
    {
      n: 9,
      text: "Which destination address is used in an ARP request frame?",
      options: ["0.0.0.0", "255.255.255.255", "FFFF.FFFF.FFFF", "AAAA.AAAA.AAAA", "the physical address of the destination host"],
      answers: [2],
      explain: "ARP request được phát broadcast ở tầng liên kết dữ liệu với địa chỉ MAC đích FFFF.FFFF.FFFF để mọi thiết bị trong cùng segment nhận được; chỉ thiết bị sở hữu IP được hỏi mới trả lời bằng ARP reply (unicast)."
    },
    {
      n: 10,
      text: "Under which two circumstances will a switch flood a frame out of every port except the port that the frame was received on? (Choose two.)",
      options: ["The frame has the broadcast address as the destination address.", "The destination address is unknown to the switch.", "The source address in the frame header is the broadcast address.", "The source address in the frame is a multicast address.", "The destination address in the frame is a known unicast address."],
      answers: [0, 1],
      explain: "Switch flood frame khi: (1) MAC đích là broadcast — gửi cho mọi host trong domain; (2) MAC đích là unicast nhưng chưa có trong bảng MAC (unknown unicast). Nếu đích là known unicast, switch forward ra đúng cổng; source address không bao giờ là broadcast/multicast trong frame hợp lệ."
    },
    {
      n: 11,
      text: "What is the aim of an ARP spoofing attack?",
      options: ["to flood the network with ARP reply broadcasts", "to fill switch MAC address tables with bogus addresses", "to associate IP addresses to the wrong MAC address", "to overwhelm network hosts with ARP requests"],
      answers: [2],
      explain: "ARP spoofing (ARP poisoning) gửi ARP reply giả để ghép IP (thường là gateway) vào MAC của kẻ tấn công, khiến lưu lượng của nạn nhân đi qua attacker — phục vụ MITM hoặc đánh chặn. Flooding MAC table là MAC flooding attack, khác với ARP spoofing."
    },
    {
      n: 12,
      text: "What does ARP resolve?",
      options: ["MAC address to IP", "IP address to hostname", "IP address to MAC address", "Hostname to MAC address"],
      answers: [2],
      explain: "ARP (Address Resolution Protocol) phân giải địa chỉ IPv4 đã biết sang địa chỉ MAC tương ứng trong cùng link: host phát ARP request chứa IP đích, thiết bị sở hữu IP đó trả về ARP reply chứa MAC. DNS mới là cơ chế phân giải hostname sang IP."
    },
    {
      n: 13,
      text: "What two criteria are used to help select a network medium from various network media? (Choose two.)",
      options: ["the types of data that need to be prioritized", "the cost of the end devices utilized in the network", "the distance the selected medium can successfully carry a signal", "the number of intermediate devices installed in the network", "the environment where the selected medium is to be installed"],
      answers: [2, 4],
      explain: "Khi chọn môi trường truyền cần xét khoảng cách tối đa mà medium vẫn đảm bảo tín hiệu (ví dụ UTP 100 m, fiber hàng km) và môi trường lắp đặt (nhiễu EMI, ẩm, nhiệt...). Các yếu tố về end device hay số thiết bị trung gian không quyết định việc chọn medium."
    },
    {
      n: 14,
      text: "Which type of network design allows devices to act as both clients and servers?",
      options: ["Client-server network", "LAN", "WAN", "Peer-to-peer network"],
      answers: [3],
      explain: "Trong mô hình peer-to-peer, mỗi máy vừa có thể cung cấp dịch vụ (file, máy in...) vừa tiêu thụ dịch vụ của máy khác — không có server chuyên dụng. Client-server thì vai trò client và server tách biệt rõ ràng."
    },
    {
      n: 15,
      text: "Which statement describes the use of powerline networking technology?",
      options: ["New \"smart\" electrical cabling is used to extend an existing home LAN.", "A home LAN is installed without the use of physical cabling.", "A device connects to an existing home LAN using an adapter and an existing electrical outlet.", "Wireless access points use powerline adapters to distribute data through the home LAN."],
      answers: [2],
      explain: "Powerline (HomePlug) tận dụng đường điện sẵn có: cắm adapter vào ổ điện, thiết bị nối với adapter để tham gia LAN — không cần đi thêm cáp mạng. Nó vẫn dùng dây (dây điện) nên không phải LAN không dây, cũng không yêu cầu đi dây điện 'thông minh' mới."
    },
    {
      n: 16,
      text: "What happens if an Ethernet frame is less than 64 bytes?",
      options: ["It is fragmented", "It is considered valid", "It is dropped", "It is routed"],
      answers: [2],
      explain: "Kích thước tối thiểu của khung Ethernet là 64 byte; frame ngắn hơn (runt frame) bị nhận là lỗi — thường do collision — và bị hủy bỏ (dropped). Giới hạn này gắn với cơ chế phát hiện va chạm CSMA/CD của Ethernet truyền thống."
    },
    {
      n: 17,
      text: "What happens when a switch receives a frame and the calculated CRC value is different than the value that is in the FCS field?",
      options: ["The switch places the new CRC value in the FCS field and forwards the frame.", "The switch notifies the source of the bad frame.", "The switch drops the frame.", "The switch floods the frame to all ports except the port through which the frame arrived to notify the hosts of the error."],
      answers: [2],
      explain: "FCS chứa CRC để kiểm tra lỗi: nếu giá trị CRC tính lại không khớp, frame bị hỏng trên đường truyền và switch hủy frame ngay (drop), không forward hay gửi thông báo về nguồn."
    },
    {
      n: 18,
      text: "A Layer 2 switch is used to switch incoming frames from a 1000BASE-T port to a port connected to a 100Base-T network. Which method of memory buffering would work best for this task?",
      options: ["port-based buffering", "level 1 cache buffering", "shared memory buffering", "fixed configuration buffering"],
      answers: [2],
      explain: "Shared memory buffering dùng một vùng nhớ chung, cho phép frame nhận ở cổng 1 Gbps được lưu rồi phát dần ra cổng 100 Mbps — linh hoạt giữa các cổng có tốc độ khác nhau. Port-based buffering gắn bộ đệm vào từng cổng, dễ nghẽn khi lệch tốc độ."
    },
    {
      n: 19,
      text: "Which frame forwarding method receives the entire frame and performs a CRC check to detect errors before forwarding the frame?",
      options: ["cut-through switching", "store-and-forward switching", "fragment-free switching", "fast-forward switching"],
      answers: [1],
      explain: "Store-and-forward nhận trọn vẹn frame, tính CRC/FCS để kiểm tra lỗi trước khi chuyển tiếp — đảm bảo không lan truyền frame hỏng nhưng có độ trễ cao hơn. Fast-forward và fragment-free là kiểu cut-through, chỉ đọc phần đầu frame rồi forward sớm."
    },
    {
      n: 20,
      text: "Which tool uses the ICMP \"Time Exceeded\" message to trace the path between two hosts?",
      options: ["ping", "netstat", "traceroute", "ipconfig"],
      answers: [2],
      explain: "Traceroute gửi các packet với TTL tăng dần (1, 2, 3...); mỗi router khi TTL về 0 trả lại ICMP Time Exceeded, nhờ đó công cụ liệt kê từng hop trên đường đi. Ping dùng Echo Request/Reply, netstat xem kết nối, ipconfig xem cấu hình."
    },
    {
      n: 21,
      text: "A user pings 127.0.0.1 and receives a response. What does this confirm?",
      options: ["The IP protocol stack is operational", "The DNS service is operational", "The NIC is functioning correctly", "The router is reachable"],
      answers: [0],
      explain: "127.0.0.1 là địa chỉ loopback — packet không ra khỏi host. Ping thành công chỉ chứng tỏ TCP/IP stack trên máy cài đặt và hoạt động đúng; nó không kiểm tra NIC, dây mạng, gateway hay DNS."
    },
    {
      n: 22,
      text: "What is the purpose of ICMP messages?",
      options: ["to inform routers about network topology changes", "to ensure the delivery of an IP packet", "to provide feedback of IP packet transmissions", "to monitor the process of a domain name to IP address resolution"],
      answers: [2],
      explain: "ICMP là giao thức báo cáo điều khiển/lỗi cho IP: thông báo đích không tới được, TTL hết, redirect... và hỗ trợ ping/traceroute. ICMP không đảm bảo chuyển giao packet (IP là best-effort) và không liên quan DNS."
    },
    {
      n: 23,
      text: "Which encoding technique is used to convert digital data into digital signals?",
      options: ["Manchester encoding", "Modulation", "Signal interference", "Frequency hopping"],
      answers: [0],
      explain: "Manchester encoding mã hóa dữ liệu số thành tín hiệu số: mỗi bit có một bước chuyển giữa mức cao/thấp ở giữa chu kỳ bit, giúp đồng bộ xung nhịp. Modulation là chuyển dữ liệu số/analog sang tín hiệu analog (sóng mang), không phải digital-to-digital."
    },
    {
      n: 24,
      text: "What is the main role of the physical layer?",
      options: ["Error checking", "Transporting bits across the medium", "Routing packets", "Formatting messages"],
      answers: [1],
      explain: "Tầng Physical chịu trách nhiệm mã hóa bit thành tín hiệu (điện, ánh sáng, sóng vô tuyến) và truyền các bit đó qua môi trường vật lý. Kiểm lỗi thuộc Data Link, định tuyến thuộc Network."
    },
    {
      n: 25,
      text: "(Choose 1 answer) Refer to the graphic. What type of cabling is shown?",
      image: "q25.png",
      imageAlt: "Ảnh cáp quang với đầu nối ST kim loại",
      options: ["STP", "UTP", "coax", "fiber"],
      answers: [3],
      explain: "Đầu nối tròn kim loại có khóa xoay kiểu bayonet trong ảnh là đầu ST (Straight Tip) — dùng cho cáp quang (fiber optic). STP/UTP dùng đầu RJ-45 vuông, coax dùng đầu BNC/F."
    },
    {
      n: 26,
      text: "How can an administrator verify the current IP configuration of all router interfaces?",
      options: ["show ip interface brief", "display interfaces", "check interfaces", "list interfaces"],
      answers: [0],
      explain: "Lệnh show ip interface brief liệt kê mọi interface với địa chỉ IP, trạng thái OK/Method và up/down — nhanh gọn để xem tổng quan. display interfaces là cú pháp của Huawei, không tồn tại trên Cisco IOS."
    },
    {
      n: 27,
      text: "(Choose 1 answer) Match the command with the device mode at which the command is entered. (Not all options are used.)<table class=\"mini-table\"><tr><td>A. login</td><td>1. R1(config)#</td></tr><tr><td>B. service password-encryption</td><td>2. R1&gt;</td></tr><tr><td>C. ip address 192.168.4.4 255.255.255.0</td><td>3. R1(config-router)#</td></tr><tr><td>D. copy running-config startup-config</td><td>4. R1#</td></tr><tr><td>E. enable</td><td>5. R1(config-line)#</td></tr><tr><td></td><td>6. R1(config-if)#</td></tr></table>",
      options: ["A5-B1-C6-D4-E2", "A1-B5-C6-D4-E2", "A5-B1-C4-D6-E2", "A5-B1-C6-D2-E4"],
      answers: [0],
      explain: "login gõ trong line configuration (A5); service password-encryption trong global config (B1); ip address trong interface config (C6); copy running-config startup-config ở privileged EXEC (D4); enable chuyển từ user EXEC R1&gt; (E2). Vậy chuỗi đúng là A5-B1-C6-D4-E2."
    },
    {
      n: 28,
      text: "Which command displays a summary of all interfaces on the router including their IP addresses and status?",
      options: ["show interfaces", "show ip route", "show ip interface brief", "show running-config"],
      answers: [2],
      explain: "show ip interface brief đưa ra bảng tóm tắt: interface, địa chỉ IP, OK?/Method, trạng thái protocol — phù hợp xem nhanh toàn bộ. show interfaces cho chi tiết dài từng interface, show ip route hiển thị bảng định tuyến."
    },
    {
      n: 29,
      text: "A technician is configuring a router to allow for all forms of management access. As part of each different type of access, the technician is trying to type the command login. Which configuration mode should be entered to do this task?",
      options: ["user executive mode", "global configuration mode", "any line configuration mode", "privileged EXEC mode"],
      answers: [2],
      explain: "Lệnh login (yêu cầu nhập mật khẩu khi truy cập) được cấu hình trong line configuration mode — áp dụng cho console (line console 0), vty (line vty 0 4) hay aux. Tức là bất kỳ line configuration mode nào."
    },
    {
      n: 30,
      text: "An administrator wants to create four subnetworks from the network address 192.168.1.0/24. What is the network address and subnet mask of the second useable subnet?",
      options: ["subnetwork 192.168.1.64<br>subnet mask 255.255.255.192", "subnetwork 192.168.1.32<br>subnet mask 255.255.255.240", "subnetwork 192.168.1.64<br>subnet mask 255.255.255.240", "subnetwork 192.168.1.128<br>subnet mask 255.255.255.192", "subnetwork 192.168.1.8<br>subnet mask 255.255.255.224"],
      answers: [0],
      explain: "Cần 4 subnet → mượn 2 bit → mask /26 = 255.255.255.192, bước nhảy 64. Các subnet: .0, .64, .128, .192 — subnet thứ hai (bắt đầu từ .0) là 192.168.1.64/26."
    },
    {
      n: 31,
      text: "What is the broadcast address for the IP subnet 192.168.10.0/24?",
      options: ["192.168.10.0", "192.168.10.255", "192.168.10.1", "192.168.11.0"],
      answers: [1],
      explain: "Với subnet 192.168.10.0/24, toàn bộ 8 bit cuối là phần host; broadcast là địa chỉ với phần host toàn bit 1: 192.168.10.255. Địa chỉ .0 là network, .1 thường là gateway."
    },
    {
      n: 32,
      text: "(Choose 1 answer) Refer to the exhibit. Considering the addresses already used and having to remain within the 10.16.10.0/24 network range, which subnet address could be assigned to the network containing 25 hosts?",
      image: "q32.png",
      imageAlt: "Sơ đồ: R1 nối 3 switch với các host 10.16.10.0/26, 10.16.10.192/26 và mạng cần 25 hosts",
      options: ["10.16.10.160/26", "10.16.10.128/28", "10.16.10.64/27", "10.16.10.224/26", "10.16.10.240/27", "10.16.10.240/28"],
      answers: [2],
      explain: "25 host cần 5 bit host → /27 (30 host dùng được). Đã dùng 10.16.10.0/26 (0–63) và 10.16.10.192/26 (192–255), còn dải 64–127 và 128–191. 10.16.10.64/27 nằm trong dải trống, đúng biên /27 và đủ chỗ cho 25 host. Các đáp án khác sai biên subnet (/26 không hợp lệ tại .160/.224, .128 đã dùng, /28 chỉ chứa 14 host)."
    },
    {
      n: 33,
      text: "How many host addresses are available on the 192.168.10.128/26 network?",
      options: ["30", "32", "60", "62", "64"],
      answers: [3],
      explain: "/26 còn 32 bit − 26 = 6 bit host → 2<sup>6</sup> = 64 địa chỉ, trừ network (192.168.10.128) và broadcast (192.168.10.191) còn 62 host dùng được."
    },
    {
      n: 34,
      text: "A network administrator enters the service password-encryption command into the configuration mode of a router. What does this command accomplish?",
      options: ["This command encrypts passwords as they are transmitted across serial WAN links.", "This command prevents someone from viewing the running configuration passwords.", "This command enables a strong encryption algorithm for the enable secret password command.", "This command automatically encrypts passwords in configuration files that are currently stored in NVRAM.", "This command provides an exclusive encrypted password for external service personnel who are required to do router maintenance."],
      answers: [1],
      explain: "service password-encryption mã hóa (type 7, yếu) mọi mật khẩu plaintext trong file cấu hình để người nhìn running-config không đọc được mật khẩu gốc. Nó không mã hóa khi truyền trên đường WAN và không ảnh hưởng enable secret vốn đã được hash."
    },
    {
      n: 35,
      text: "What is the purpose of the no shutdown command?",
      options: ["To reset the switch", "To enable an interface", "To configure IP addresses", "To shut down an interface"],
      answers: [1],
      explain: "Interface router mặc định administratively down; lệnh no shutdown bật interface lên (up/up khi có kết nối vật lý). Ngược lại, shutdown tắt interface về trạng thái admin down."
    },
    {
      n: 36,
      text: "Which interface allows remote management of a Layer 2 switch?",
      options: ["the AUX interface", "the console port interface", "the switch virtual interface", "the first Ethernet port interface"],
      answers: [2],
      explain: "Switch lớp 2 không định tuyến và không có địa chỉ IP trên port vật lý; để quản trị từ xa (Telnet/SSH) phải tạo SVI — thường là interface vlan 1 — gán IP làm điểm quản lý. Console và AUX là truy cập cục bộ/qua modem."
    },
    {
      n: 37,
      text: "A network administrator enters the service password-encryption command into the configuration mode of a router. What does this command accomplish?",
      options: ["This command encrypts passwords as they are transmitted across serial WAN links.", "This command prevents someone from viewing the running configuration passwords.", "This command enables a strong encryption algorithm for the enable secret password command.", "This command automatically encrypts passwords in configuration files that are currently stored in NVRAM.", "This command provides an exclusive encrypted password for external service personnel who are required to do router maintenance."],
      answers: [1],
      explain: "Giống câu trước: service password-encryption che mật khẩu plaintext trong cấu hình (mã hóa type 7) để người xem file cấu hình không thấy mật khẩu gốc; nó không mã hóa dữ liệu truyền trên WAN cũng như không tác động đến enable secret."
    },
    {
      n: 38,
      text: "Which two characteristics describe the IP protocol at Layer 3? (Choose two.)",
      options: ["Connectionless and best-effort", "Independent of the underlying media", "Guarantees delivery of packets", "Relies on TCP for segmentation"],
      answers: [0, 1],
      explain: "IP là giao thức connectionless (không thiết lập kết nối), best-effort (không đảm bảo chuyển giao) và độc lập với media bên dưới — cùng một gói IP chạy được trên Ethernet, Wi-Fi, serial... IP không đảm bảo delivery (TCP lo độ tin cậy) và tự segment từ PDU tầng trên."
    },
    {
      n: 39,
      text: "What are two services provided by the OSI network layer? (Choose two.)",
      options: ["performing error detection", "routing packets toward the destination", "encapsulating PDUs from the transport layer", "placement of frames on the media", "collision detection"],
      answers: [1, 2],
      explain: "Tầng network: định tuyến gói tin tới đích và đóng gói segment (PDU tầng transport) vào packet với header IP. Đặt frame lên media và phát hiện va chạm thuộc Data Link/Physical, phát hiện lỗi cũng là nhiệm vụ tầng 2."
    },
    {
      n: 40,
      text: "What is the effect of using the Router# copy running-config startup-config command on a router?",
      options: ["The contents of ROM will change.", "The contents of RAM will change.", "The contents of NVRAM will change.", "The contents of flash will change."],
      answers: [2],
      explain: "copy running-config startup-config sao chép cấu hình đang chạy (trong RAM) vào file cấu hình khởi động trong NVRAM — nhờ vậy cấu hình được giữ lại sau khi khởi động lại. ROM và flash chứa IOS, không bị lệnh này tác động."
    },
    {
      n: 41,
      text: "Within a production network, what is the purpose of configuring a switch with a default gateway address?",
      options: ["Hosts that are connected to the switch can use the switch default gateway address to forward packets to a remote destination.", "A switch must have a default gateway to be accessible by Telnet and SSH.", "The default gateway address is used to forward packets originating from the switch to remote networks.", "It provides a next-hop address for all traffic that flows through the switch."],
      answers: [2],
      explain: "Default gateway trên switch chỉ phục vụ lưu lượng do chính switch sinh ra (Telnet/SSH quản trị, ping, syslog...) khi đích nằm ngoài mạng cục bộ. Traffic của các host đi qua switch không dùng gateway của switch — host tự có gateway riêng."
    },
    {
      n: 42,
      text: "What does the OSI model help with in networking?",
      options: ["Encryption", "Address resolution", "Troubleshooting and standardization", "Server hosting"],
      answers: [2],
      explain: "Mô hình OSI chia chức năng mạng thành 7 tầng giúp chuẩn hóa giao tiếp giữa các hãng và hỗ trợ chẩn đoán lỗi theo từng tầng một cách hệ thống. Nó là mô hình tham chiếu, không phải công cụ mã hóa hay phân giải địa chỉ."
    },
    {
      n: 43,
      text: "Which two models are used to describe network protocols and operations? (Select two answers)",
      options: ["TCP/IP", "OSI", "ISO", "HTTP"],
      answers: [0, 1],
      explain: "Hai mô hình tham chiếu chuẩn để mô tả giao thức mạng là TCP/IP (4 tầng, thực dụng) và OSI (7 tầng, mang tính học thuật/tham chiếu). ISO là tổ chức tiêu chuẩn, HTTP là một giao thức ứng dụng."
    },
    {
      n: 44,
      text: "What is the purpose of the TCP three-way handshake?",
      options: ["To establish connection state and sequence tracking", "To check the integrity of data sent", "To open multiple sockets between client and server", "To notify the server of a new port number"],
      answers: [0],
      explain: "Bắt tay 3 bước SYN → SYN-ACK → ACK giúp hai bên đồng bộ số thứ tự (sequence numbers) và xác lập trạng thái kết nối trước khi truyền dữ liệu. Kiểm tra toàn vẹn dữ liệu là việc của checksum trong quá trình truyền, không phải mục đích của handshake."
    },
    {
      n: 45,
      text: "Which Windows command would display the protocols in use, the local address and port numbers, the foreign address and port numbers, and the connection state?",
      options: ["ipconfig /all", "ping", "netstat", "traceroute"],
      answers: [2],
      explain: "netstat hiển thị các kết nối TCP/UDP đang có: giao thức, địa chỉ:cổng cục bộ, địa chỉ:cổng đối tác và trạng thái kết nối (LISTENING, ESTABLISHED...). ipconfig chỉ xem cấu hình IP, ping/traceroute kiểm tra kết nối."
    },
    {
      n: 46,
      text: "What is the purpose of port numbers in TCP and UDP communication?",
      options: ["To identify specific applications running on a device", "To define the size of a packet", "To assign MAC addresses", "To establish a physical connection"],
      answers: [0],
      explain: "Số cổng giúp tầng transport chuyển dữ liệu đến đúng tiến trình/ứng dụng trên host: cổng đích xác định dịch vụ (80 = HTTP, 53 = DNS...), cổng nguồn để trả lời về đúng phiên. Kích thước packet do MTU quyết định, MAC là địa chỉ lớp 2."
    },
    {
      n: 47,
      text: "Assume a host with IP address 10.1.1.10 wants to request web services from a server at 10.1.1.254. Which of the following would display the correct socket pair?",
      options: ["1099:10.1.1.10, 80:10.1.1.254", "10.1.1.10:80, 10.1.1.254:1099", "10.1.1.10:1099, 10.1.1.254:80", "80:10.1.1.10, 1099:10.1.1.254"],
      answers: [2],
      explain: "Socket = IP:cổng. Client dùng cổng động (ephemeral, ví dụ 1099) làm nguồn và gửi tới cổng well-known 80 (HTTP) của server. Vậy cặp socket: 10.1.1.10:1099 (client) và 10.1.1.254:80 (server)."
    },
    {
      n: 48,
      text: "What does a router do when it receives a Layer 2 frame over the network medium?",
      options: ["determines the best path", "de-encapsulates the frame", "re-encapsulates the packet into a new frame", "forwards the new frame appropriate to the medium of that segment of the physical network"],
      answers: [1],
      explain: "Khi nhận frame, router đầu tiên phải de-encapsulate — bóc phần dữ liệu liên kết dữ liệu để lấy packet IP bên trong — rồi mới tra bảng định tuyến. Re-encapsulate và forward là các bước tiếp theo khi gửi ra interface khác."
    },
    {
      n: 49,
      text: "Which statement is correct about network protocols?",
      options: ["Network protocols define the type of hardware that is used and how it is mounted in racks.", "They define how messages are exchanged between the source and the destination.", "They all function in the network access layer of TCP/IP.", "They are only required for exchange of messages between devices on remote networks."],
      answers: [1],
      explain: "Giao thức mạng quy định định dạng, thứ tự và cách trao đổi thông điệp giữa nguồn và đích. Giao thức hoạt động ở mọi tầng (không chỉ network access) và cần thiết kể cả khi hai thiết bị nằm cùng mạng."
    },
    {
      n: 50,
      text: "What is the primary function of the Transport layer in the OSI and TCP/IP models?",
      options: ["To provide reliable data transport between applications", "To define physical media connections", "To translate data for human readability", "To assign IP addresses to devices"],
      answers: [0],
      explain: "Tầng transport thiết lập phiên truyền giữa các ứng dụng (dùng số cổng), phân đoạn dữ liệu và với TCP đảm bảo chuyển giao tin cậy, đúng thứ tự. Địa chỉ IP là việc tầng network, media thuộc tầng physical."
    }
  ]
});
