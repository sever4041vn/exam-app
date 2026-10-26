// NWC204 - Summer 2026 - Retake Exam
// Nguồn: NWC204 - SU26 - RE.pdf (50 câu hỏi trắc nghiệm, format FUO)
window.EXAMAPP_EXAMS = window.EXAMAPP_EXAMS || [];
window.EXAMAPP_EXAMS.push({
  id: "nwc204-su26-re",
  subjectId: "NWC204",
  title: "NWC204 - Summer 2026 - Retake Exam",
  originalFile: "NWC204 - SU26 - RE.pdf",
  semester: "Summer 2026",
  semesterKey: "su26",
  type: "Retake Exam",
  typeKey: "retake",
  durationMinutes: 60,
  imagePath: "images/nwc204/su26-re/",
  questions: [
    {
      n: 1,
      text: "What is the size of an IPv6 address?",
      options: ["32 bits", "64 bits", "128 bits", "256 bits"],
      answers: [2],
      explain: "IPv6 dùng địa chỉ 128 bit, viết thành 8 nhóm hex 16 bit phân cách bằng dấu ':'. Kích thước này cho không gian địa chỉ ~3,4×10<sup>38</sup> địa chỉ, gấp 2<sup>96</sup> lần IPv4."
    },
    {
      n: 2,
      text: "Given IPv6 address prefix 2001:db8::/48, what will be the last subnet that is created if the subnet prefix is changed to /52?",
      options: ["2001:db8:0:f000::/52", "2001:db8:0:8000::/52", "2001:db8:0:f::/52", "2001:db8:0:f00::/52"],
      answers: [0],
      explain: "Từ /48 mở rộng lên /52 là mượn 4 bit → 2<sup>4</sup> = 16 subnet trong hextet thứ 4: 0000, 1000, 2000, ..., f000. Subnet cuối cùng là 2001:db8:0:f000::/52."
    },
    {
      n: 3,
      text: "Which statement about IPv6 addresses is true?",
      options: ["IPv6 addresses are expressed in decimal format.", "IPv6 addresses use 128 bits and are expressed in hexadecimal format.", "IPv6 addresses use 32 bits and are expressed in binary format.", "IPv6 addresses are composed of two parts: network and host."],
      answers: [1],
      explain: "Địa chỉ IPv6 dài 128 bit và biểu diễn bằng hệ thập lục phân (8 nhóm, phân cách ':'). Dạng 32-bit thập phân là IPv4. IPv6 không đơn thuần chia network/host như IPv4 mà có cấu trúc prefix + subnet ID + interface ID."
    },
    {
      n: 4,
      text: "Which method allows a device to obtain an IPv6 address dynamically without the need for a DHCP server?",
      options: ["Stateful DHCPv6", "Stateless Address Autoconfiguration (SLAAC)", "Manual Configuration", "NAT64"],
      answers: [1],
      explain: "SLAAC cho phép thiết bị tự sinh địa chỉ IPv6 dựa trên prefix quảng bá bởi router (RA) và interface ID tự sinh (EUI-64 hoặc random) — không cần máy chủ DHCP. Stateful DHCPv6 thì ngược lại, cần server cấp phát."
    },
    {
      n: 5,
      text: "How can you view the ARP table on a Windows PC?",
      options: ["arp -a", "show arp", "netstat -r", "ipconfig /all"],
      answers: [0],
      explain: "Trên Windows, lệnh arp -a hiển thị bảng ARP hiện tại (các ánh xạ IP → MAC đã cache). show arp là cú pháp Cisco IOS, netstat -r hiển thị bảng định tuyến."
    },
    {
      n: 6,
      text: "What protocol does IPv6 use for address resolution, replacing the function of ARP in IPv4?",
      options: ["DHCPv6", "ICMPv6 Neighbor Discovery (ND)", "Address Resolution Protocol version 6 (ARPv6)", "Router Solicitation (RS)"],
      answers: [1],
      explain: "IPv6 không có ARP; chức năng phân giải địa chỉ được đảm nhiệm bởi ICMPv6 Neighbor Discovery (ND/NDP) qua các thông điệp Neighbor Solicitation/Neighbor Advertisement. RS/RS chỉ là một phần của ND dùng để tìm router."
    },
    {
      n: 7,
      text: "What property of ARP causes cached IP-to-MAC mappings to remain in memory longer?",
      options: ["Entries in an ARP table are time-stamped and are purged after the timeout expires.", "A static IP-to-MAC address entry can be entered manually into an ARP table.", "The type field 0x806 appears in the header of the Ethernet frame.", "The port-to-MAC address table on a switch has the same entries as the ARP table on the switch."],
      answers: [1],
      explain: "Entry ARP động bị xóa khi hết timeout; nhưng entry tĩnh nhập tay (arp -s) không bao giờ hết hạn, khiến ánh xạ nằm trong bộ nhớ lâu hơn. Trường 0x806 chỉ nhận diện gói ARP, không liên quan thời gian cache."
    },
    {
      n: 8,
      text: "What is the purpose of the ARP cache?",
      options: ["Prevents looping", "Stores MAC to IP mappings", "Tracks port usage", "Converts binary to text"],
      answers: [1],
      explain: "ARP cache là bảng lưu tạm các ánh xạ địa chỉ để tránh phải phát ARP request mỗi lần truyền. Trong các phương án, phương án về lưu ánh xạ địa chỉ là đúng ý — nhờ cache, thiết bị tra nhanh MAC tương ứng với IP đích trong cùng link."
    },
    {
      n: 9,
      text: "Which network infrastructure might an organization use to provide secure and safe access to individuals who work for a different organization but require access to the organization's data?",
      options: ["Extranet", "Intranet", "LAN", "WAN"],
      answers: [0],
      explain: "Extranet cho phép truy cập có kiểm soát vào dữ liệu nội bộ cho đối tác, nhà cung cấp, khách hàng — những người ngoài tổ chức. Intranet chỉ dành cho nhân viên nội bộ."
    },
    {
      n: 10,
      text: "Which of the following is the name for all computers connected to a network that participate in sending and receiving data directly in network communication?",
      options: ["Servers", "Intermediary devices", "Hosts", "Media"],
      answers: [2],
      explain: "Host (end device) là các máy tính tham gia trực tiếp gửi/nhận dữ liệu truyền thông qua mạng — bao gồm cả client lẫn server. Intermediary devices (switch, router) chỉ chuyển tiếp, media là đường truyền."
    },
    {
      n: 11,
      text: "Which type of network topology lets you see the actual location of intermediary devices and cable installation?",
      options: ["Physical topology", "Logical topology"],
      answers: [0],
      explain: "Physical topology mô tả vị trí vật lý thật của thiết bị và cách đi dây trong thực tế. Logical topology chỉ thể hiện luồng dữ liệu/địa chỉ IP logic, không phản ánh vị trí lắp đặt."
    },
    {
      n: 12,
      text: "Cut-through switching reduces latency but increases the risk of forwarding corrupted frames.",
      options: ["True", "False"],
      answers: [0],
      explain: "Đúng. Cut-through đọc địa chỉ đích ngay ở đầu frame rồi forward ngay, không kiểm tra FCS — độ trễ thấp nhưng có thể chuyển tiếp cả frame lỗi, hỏng."
    },
    {
      n: 13,
      text: "What is the purpose of the frame check sequence (FCS) in an Ethernet frame?",
      options: ["To detect errors in transmitted frames", "To encrypt the frame for security", "To assign an IP address to the frame", "To prioritize network traffic"],
      answers: [0],
      explain: "FCS nằm ở trailer khung Ethernet chứa giá trị CRC: bên nhận tính lại CRC và so khớp để phát hiện frame bị lỗi khi truyền. FCS không mã hóa hay ưu tiên lưu lượng."
    },
    {
      n: 14,
      text: "What will a host on an Ethernet network do if it receives a frame with a unicast destination MAC address that does not match its own MAC address?",
      options: ["It will discard the frame.", "It will forward the frame to the next host.", "It will remove the frame from the media.", "It will strip off the data-link frame to check the destination IP address."],
      answers: [0],
      explain: "NIC so sánh MAC đích với MAC của mình; nếu là unicast và không khớp (cũng không phải broadcast/multicast mình tham gia), host hủy frame ngay mà không xử lý tiếp các tầng trên."
    },
    {
      n: 15,
      text: "What action does a switch take when it receives a frame with a destination MAC address that is not in its MAC address table?",
      options: ["It discards the frame immediately.", "It sends the frame back to the source device.", "It forwards the frame out all ports except the incoming port.", "It sends an ARP request to find the destination device."],
      answers: [2],
      explain: "Khi MAC đích không có trong bảng (unknown unicast), switch flood — phát frame ra mọi cổng trừ cổng nhận — để tìm thiết bị đích. ARP là cơ chế tầng 3 của host, switch không dùng ARP để tìm MAC đích."
    },
    {
      n: 16,
      text: "A network administrator is testing network connectivity by issuing the ping command on a router. Which symbol will be displayed to indicate that a time expired during the wait for an ICMP echo reply message?",
      options: ["$", "!", ".", "U"],
      answers: [2],
      explain: "Trong output ping của Cisco IOS: '!' = nhận echo reply thành công, '.' = hết thời gian chờ (timeout) không nhận reply, 'U' = destination unreachable."
    },
    {
      n: 17,
      text: "A user who is unable to connect to the file server contacts the help desk. The helpdesk technician asks the user to ping the IP address of the default gateway that is configured on the workstation. What is the purpose for this ping command?",
      options: ["to obtain a dynamic IP address from the server", "to request that gateway forward the connection request to the file server", "to test that the host has the capability to reach hosts on other networks", "to resolve the domain name of the file server to its IP address"],
      answers: [2],
      explain: "Ping default gateway kiểm tra xem host còn truy cập được cửa ngõ ra ngoài mạng cục bộ không — tức khả năng reach các mạng khác. Nếu gateway ping được mà server không tới được thì lỗi nằm ngoài LAN."
    },
    {
      n: 18,
      text: "What is the loopback address for IPv6?",
      options: ["127.0.0.1", "0.0.0.0", "::", "::1"],
      answers: [3],
      explain: "IPv6 loopback là ::1 (128 bit 0 trừ bit cuối bằng 1), tương đương 127.0.0.1 của IPv4. '::' là địa chỉ không xác định (unspecified), không được gán cho interface."
    },
    {
      n: 19,
      text: "What term refers to the amount of data that can be transmitted over a medium in a given time?",
      options: ["Bandwidth", "Latency", "Throughput", "Goodput"],
      answers: [0],
      explain: "Bandwidth là dung lượng lý thuyết tối đa của medium trong một đơn vị thời gian (bps). Throughput là tốc độ đo được thực tế, goodput là throughput trừ overhead (chỉ tính dữ liệu hữu ích)."
    },
    {
      n: 20,
      text: "What is a primary role of the Physical layer in transmitting data on the network?",
      options: ["create the signals that represent the bits in each frame on to the media", "provide physical addressing to the devices", "determine the path packets take through the network", "control data access to the media"],
      answers: [0],
      explain: "Tầng Physical tạo ra các tín hiệu (điện/ánh sáng/vô tuyến) biểu diễn từng bit của frame và đưa chúng lên media. Địa chỉ vật lý và truy cập media thuộc Data Link; chọn đường đi thuộc Network."
    },
    {
      n: 21,
      text: "(Choose 1 answer) Match the situation with the appropriate use of network media.<table class=\"mini-table\"><tr><td>1. backbone cabling in an enterprise</td><td>A. Copper Cables</td></tr><tr><td>2. guest access in a coffee shop</td><td>B. Fiber Optic</td></tr><tr><td>3. horizontal cabling structure</td><td>C. Wireless</td></tr><tr><td>4. waiting rooms in a hospital</td><td></td></tr><tr><td>5. desktop PCs in an enterprise office</td><td></td></tr><tr><td>6. long-haul networks</td><td></td></tr></table>",
      options: ["3A-5A-1B-6B-2C-4C", "3A-5A-2B-4B-1C-6C", "1A-6A-3B-5B-2C-4C", "1A-6A-2B-4B-3C-5C"],
      answers: [0],
      explain: "Horizontal cabling và desktop PC trong văn phòng dùng cáp đồng (UTP) → 3A, 5A. Backbone doanh nghiệp và long-haul dùng fiber → 1B, 6B. Guest coffee shop và phòng chờ bệnh viện dùng wireless → 2C, 4C. Chuỗi đúng: 3A-5A-1B-6B-2C-4C."
    },
    {
      n: 22,
      text: "What are two functions of NVRAM? (Choose two.)",
      options: ["to store the routing table", "to retain contents when power is removed", "to store the startup configuration file", "to contain the running configuration file", "to store the ARP table"],
      answers: [1, 2],
      explain: "NVRAM là bộ nhớ không mất dữ liệu khi mất điện, dùng để lưu startup-config. Routing table, running-config và ARP table đều nằm trong RAM, mất khi reboot."
    },
    {
      n: 23,
      text: "Which three commands are used to set up secure access to a router through a connection to the console interface? (Choose three.)",
      options: ["interface fastethernet 0/0", "line vty 0 4", "line console 0", "enable secret cisco", "login", "password cisco"],
      answers: [2, 4, 5],
      explain: "Trình tự bảo vệ console: line console 0 → password cisco → login (yêu cầu kiểm tra mật khẩu khi đăng nhập). line vty dùng cho Telnet/SSH, interface fastethernet không liên quan console, enable secret bảo vệ privileged EXEC."
    },
    {
      n: 24,
      text: "(Choose 1 answer) Match the commands to the correct actions. (Not all options are used.)<table class=\"mini-table\"><tr><td>A. provides security on the console</td><td>1. Router(config)# hostname CL1</td></tr><tr><td>B. displays a message when the router is accessed</td><td>2. Router(config)# enable password Cisco</td></tr><tr><td>C. configures a name on the router</td><td>3. Router(config-line)# password class</td></tr><tr><td></td><td>4. Router(config)# password Cisco</td></tr><tr><td></td><td>5. Router(config)# banner motd #</td></tr></table>",
      options: ["A3-B5-C1", "A2-B3-C4", "A1-B2-C3", "A4-B1-C5"],
      answers: [0],
      explain: "Bảo vệ console: password class trong config-line (A3). Thông điệp khi truy cập: banner motd # (B5). Đặt tên thiết bị: hostname CL1 (C1). Chuỗi đúng A3-B5-C1."
    },
    {
      n: 25,
      text: "A router is configured as follows:<br>R1(config)# interface g0/0/0<br>R1(config-if)# ip address 10.0.0.1 255.255.255.252<br>R1(config-if)# no shutdown<br>How many (usable host) IP addresses are available on this subnet?",
      options: ["2", "4", "8", "16"],
      answers: [0],
      explain: "Mask 255.255.255.252 = /30, còn 2 bit host → 4 địa chỉ, trừ network và broadcast còn 2 host dùng được. /30 thường dùng cho liên kết point-to-point."
    },
    {
      n: 26,
      text: "What is the purpose of subnetting a network?",
      options: ["To increase the number of available host addresses in a network.", "To create a single, large broadcast domain.", "To reduce the size of the network into smaller broadcast domains.", "To simplify the IP addressing scheme."],
      answers: [2],
      explain: "Subnetting chia một mạng lớn thành nhiều mạng con nhỏ hơn, mỗi mạng con là một broadcast domain riêng — giảm lưu lượng broadcast, tăng bảo mật và quản trị. Tổng số host không tăng mà còn giảm bớt do mất địa chỉ network/broadcast của từng subnet."
    },
    {
      n: 27,
      text: "(Choose 1 answer) Refer to the exhibit. An administrator must send a message to everyone on the router A network. What is the broadcast address for network 172.16.16.0/22?",
      image: "q27.png",
      imageAlt: "Sơ đồ hai router A và B, mạng 172.16.16.0/22",
      options: ["172.16.16.255", "172.16.20.255", "172.16.19.255", "172.16.23.255", "172.16.255.255"],
      answers: [2],
      explain: "/22 → phần host 10 bit, block 4 trong octet 3: mạng 172.16.16.0/22 trải từ 172.16.16.0 đến 172.16.19.255. Broadcast là địa chỉ cuối: 172.16.19.255."
    },
    {
      n: 28,
      text: "What is the decimal equivalent of the /26 subnet mask?",
      options: ["255.255.255.192", "255.255.255.0", "255.255.255.224", "255.255.255.128"],
      answers: [0],
      explain: "/26 = 26 bit 1 → 3 octet đầu đầy (255.255.255) cộng thêm 2 bit trong octet 4 (128+64=192) → 255.255.255.192. 224 là /27, 128 là /25."
    },
    {
      n: 29,
      text: "What is the ANDing process used for?",
      options: ["To securely encrypt communication between multiple network endpoints", "To find host addresses", "To determine the network address", "To convert decimal to binary"],
      answers: [2],
      explain: "Thiết bị AND địa chỉ IP với subnet mask để xác định địa chỉ mạng — nhờ đó biết đích nằm trong mạng cục bộ hay mạng khác để quyết định gửi trực tiếp hay qua gateway."
    },
    {
      n: 30,
      text: "(Choose 1 answer) Refer to the exhibit. An administrator is trying to configure the switch but receives the error message that is displayed in the exhibit. What is the problem?",
      image: "q30.png",
      imageAlt: "Terminal hiển thị: Switch1# config t và lỗi % Invalid input detected at '^' marker",
      options: ["The entire command, configure terminal , must be used.", "The administrator is already in global configuration mode.", "The administrator must first enter privileged EXEC mode before issuing the command.", "The administrator must connect via the console port to access global configuration mode."],
      answers: [2],
      explain: "Prompt 'Switch1#' cho thấy đang ở privileged EXEC, vậy không phải vấn đề mode. Lỗi Invalid input xảy ra vì 'config t' là dạng viết tắt không được chấp nhận trên switch này — phải gõ đủ lệnh configure terminal."
    },
    {
      n: 31,
      text: "What is the purpose of the no shutdown command on a switch interface?",
      options: ["It brings the interface out of administratively down state.", "It sets the interface to dynamic mode.", "It disables the interface permanently.", "It resets the configuration to default."],
      answers: [0],
      explain: "no shutdown đưa interface thoát trạng thái administratively down (do lệnh shutdown gây ra) trở lại hoạt động. Port switch mặc định đã enabled, nhưng khi bị tắt thì cần lệnh này để bật lại."
    },
    {
      n: 32,
      text: "Which command is used to save the active configuration file (running-config) to the file that is used upon startup or reboot (startup-config)?",
      options: ["show running-config", "erase startup-config", "copy running-config startup-config", "reload"],
      answers: [2],
      explain: "copy running-config startup-config lưu cấu hình đang chạy từ RAM vào NVRAM để giữ nguyên sau khi khởi động lại. erase startup-config xóa cấu hình khởi động, reload khởi động lại thiết bị."
    },
    {
      n: 33,
      text: "What is the correct sequence of commands to configure a console password on a switch?",
      options: ["line console 0 → password cisco → login", "enable password cisco → login → password cisco", "enable console → password cisco → encrypt password", "password cisco → enable password → encrypt password"],
      answers: [0],
      explain: "Trình tự chuẩn: vào line console 0, đặt mật khẩu bằng password cisco, rồi bật cơ chế kiểm tra bằng login. Thiếu lệnh login thì mật khẩu console sẽ không được yêu cầu khi đăng nhập."
    },
    {
      n: 34,
      text: "What are the four basic operations of the network layer?",
      options: ["Addressing, Routing, Filtering, Framing", "Addressing, Encryption, Decryption, Routing", "Addressing, Encapsulation, Routing, De-encapsulation", "Encoding, Framing, Filtering, Switching"],
      answers: [2],
      explain: "Tầng network thực hiện: định địa chỉ end-to-end (IP), đóng gói segment thành packet, định tuyến packet qua các mạng, và de-encapsulation tại đích. Framing/filtering thuộc data link, encryption không phải chức năng tầng network."
    },
    {
      n: 35,
      text: "Why is NAT not needed in IPv6?",
      options: ["Because IPv6 has integrated security, there is no need to hide the IPv6 addresses of internal networks.", "Any host or user can get a public IPv6 network address because the number of available IPv6 addresses is extremely large.", "The problems that are induced by NAT applications are solved because the IPv6 header improves packet handling by intermediate routers.", "The end-to-end connectivity problems that are caused by NAT are solved because the number of routes increases with the number of nodes that are connected to the Internet."],
      answers: [1],
      explain: "IPv6 có không gian địa chỉ khổng lồ nên mọi thiết bị đều có thể nhận địa chỉ public — không cần NAT để chia sẻ địa chỉ như IPv4. IPsec là tùy chọn tích hợp nhưng không phải lý do loại bỏ NAT; NAT thực chất gây khó cho kết nối end-to-end."
    },
    {
      n: 36,
      text: "Which statement describes a feature of the IP protocol?",
      options: ["IP encapsulation is modified based on network media.", "IP relies on Layer 2 protocols for transmission error control.", "MAC addresses are used during the IP packet encapsulation.", "IP relies on upper layer services to handle situations of missing or out-of-order packets."],
      answers: [3],
      explain: "IP là best-effort: không khôi phục packet mất, không sắp xếp lại thứ tự — việc này do tầng trên (TCP) đảm nhiệm. IP độc lập media nên encapsulation không đổi theo media; MAC được chèn ở tầng data link, không nằm trong đóng gói IP."
    },
    {
      n: 37,
      text: "What will happen if the default gateway address is incorrectly configured on a host?",
      options: ["The host cannot communicate with other hosts in the local network.", "The switch will not forward packets initiated by the host.", "The host will have to use ARP to determine the correct address of the default gateway.", "The host cannot communicate with hosts in other networks.", "A ping from the host to 127.0.0.1 would not be successful."],
      answers: [3],
      explain: "Gateway sai → host không gửi được packet ra ngoài mạng cục bộ (không định tuyến được đến các mạng khác). Giao tiếp trong LAN vẫn bình thường vì không cần gateway; ping loopback vẫn chạy vì không ra khỏi host."
    },
    {
      n: 38,
      text: "What is the purpose of the three-way handshake in TCP communication?",
      options: ["To establish that the destination device is present and accepting requests", "To encrypt the data before transmission", "To determine the best path for data transmission", "To synchronize the clocks between devices"],
      answers: [0],
      explain: "Handshake SYN → SYN-ACK → ACK xác nhận hai bên online, sẵn sàng nhận kết nối và đồng bộ số thứ tự. TCP không mã hóa dữ liệu và không chọn đường truyền (việc của tầng network)."
    },
    {
      n: 39,
      text: "A PC is downloading a large file from a server. The TCP window is 1000 bytes. The server is sending the file using 100-byte segments. How many segments will the server send before it requires an acknowledgment from the PC?",
      options: ["1 segment", "10 segments", "100 segments", "1000 segments"],
      answers: [1],
      explain: "Cửa sổ TCP 1000 byte cho phép server truyền tối đa 1000 byte chưa xác nhận. Với segment 100 byte: 1000 ÷ 100 = 10 segment rồi server phải chờ ACK từ PC."
    },
    {
      n: 40,
      text: "Why is UDP desirable for protocols that make a simple request and reply transactions?",
      options: ["Flow control", "Low overhead", "Reliability", "Same-order delivery"],
      answers: [1],
      explain: "UDP không thiết lập kết nối, không ACK, không quản lý trạng thái — header chỉ 8 byte, overhead thấp, phù hợp giao dịch hỏi–đáp ngắn (DNS, DHCP...). Flow control, reliability và đúng thứ tự là đặc điểm của TCP."
    },
    {
      n: 41,
      text: "Which of the following applications typically use UDP?",
      options: ["File transfers", "Live video streaming", "Secure login", "Email"],
      answers: [1],
      explain: "Streaming trực tiếp ưu tiên độ trễ thấp: mất vài packet chấp nhận được, không nên chờ retransmit — UDP là lựa chọn phù hợp. Truyền file, đăng nhập an toàn (SSH) và email cần độ tin cậy nên dùng TCP."
    },
    {
      n: 42,
      text: "Which two statements describe the services provided by the data link layer? (Choose two.)",
      options: ["It defines the end-to-end delivery addressing scheme.", "It maintains the path between the source and destination devices during the data transmission.", "It manages the access of frames to the network media.", "It provides reliable delivery through link establishment and flow control.", "It ensures that application data will be transmitted according to the prioritization.", "It packages various Layer 3 PDUs into a frame format that is compatible with the network interface."],
      answers: [2, 5],
      explain: "Data link chịu trách nhiệm media access control (CSMA/CD, CSMA/CA...) và đóng gói PDU tầng 3 thành frame tương thích interface mạng. Địa chỉ end-to-end và duy trì đường truyền là của tầng network; độ tin cậy/prioritization không phải dịch vụ chuẩn của data link."
    },
    {
      n: 43,
      text: "What are the three basic parts of a data link frame?",
      options: ["Header, Data, and Trailer", "Source, Destination, and Data", "Start, Control, and Stop", "Addressing, Type, and Error Detection"],
      answers: [0],
      explain: "Khung dữ liệu gồm 3 phần: header (địa chỉ, kiểm soát), data (payload), trailer (FCS kiểm lỗi). Các phương án khác chỉ là trường bên trong header/trailer chứ không phải cấu trúc tổng thể."
    },
    {
      n: 44,
      text: "The IEEE 802 LAN/MAN data link layer consists of which two sublayers? (Choose two.)",
      options: ["Network Control Protocol", "Logical Link Control", "Media Access Control", "Link Control Protocol"],
      answers: [1, 2],
      explain: "Data link IEEE 802 tách thành LLC (Logical Link Control — giao tiếp với tầng network) và MAC (Media Access Control — đánh địa chỉ vật lý và truy cập media). NCP và LCP là thành phần của PPP, không phải sublayer 802."
    },
    {
      n: 45,
      text: "A web client is receiving a response for a web page from a web server. From the perspective of the client, what is the correct order of the protocol stack that is used to decode the received transmission?",
      options: ["Ethernet, IP, TCP, HTTP", "HTTP, TCP, IP, Ethernet", "Ethernet, TCP, IP, HTTP", "HTTP, Ethernet, IP, TCP"],
      answers: [0],
      explain: "De-encapsulation đi từ dưới lên: khung Ethernet được bóc trước (lấy packet IP), rồi IP (lấy segment TCP), rồi TCP (lấy dữ liệu HTTP) — thứ tự Ethernet → IP → TCP → HTTP."
    },
    {
      n: 46,
      text: "Which two benefits result from using a layered model in networking? (Select two answers)",
      options: ["Facilitates troubleshooting", "Promotes interoperability", "Increases application processing time", "Restricts vendor flexibility"],
      answers: [0, 1],
      explain: "Mô hình phân tầng giúp cô lập lỗi theo từng tầng (dễ troubleshooting) và chuẩn hóa giao tiếp giữa các nhà sản xuất (tăng tính tương thích). Nó không làm chậm ứng dụng hay hạn chế linh hoạt của hãng."
    },
    {
      n: 47,
      text: "UDP and TCP belong to which layer of the TCP/IP protocol?",
      options: ["Application", "Transport", "Internet", "Network access"],
      answers: [1],
      explain: "TCP và UDP là hai giao thức của tầng Transport trong mô hình TCP/IP, chịu trách nhiệm truyền dữ liệu giữa các ứng dụng bằng cơ chế số cổng."
    },
    {
      n: 48,
      text: "What does the OSI model help with in networking?",
      options: ["Encryption", "Address resolution", "Troubleshooting and standardization", "Server hosting"],
      answers: [2],
      explain: "OSI là mô hình tham chiếu 7 tầng giúp chuẩn hóa thiết kế giao thức và là khung chẩn đoán lỗi theo tầng. Nó không trực tiếp mã hóa, phân giải địa chỉ hay lưu trữ server."
    },
    {
      n: 49,
      text: "Which benefit does SSH offer over Telnet for remotely managing a router?",
      options: ["Encryption", "TCP usage", "Authorization", "connections via multiple VTY lines"],
      answers: [0],
      explain: "SSH mã hóa toàn bộ phiên (dữ liệu, xác thực), trong khi Telnet gửi plaintext — ai bắt gói tin cũng đọc được mật khẩu. Cả hai đều dùng TCP và VTY, authorization là cơ chế riêng không do SSH/Telnet quyết định."
    },
    {
      n: 50,
      text: "A technician configures a router interface with \"ipv6 address fe80::1:1 link-local\". What is the purpose of this address?",
      options: ["It enables communication on the local link", "It routes packets to other networks", "It acts as a default gateway for global IPv6 traffic", "It is a multicast address"],
      answers: [0],
      explain: "fe80::/10 là link-local: chỉ dùng để liên lạc trong cùng một link (neighbor discovery, routing protocol hello, làm next-hop...), không định tuyến được ra ngoài. Nó là unicast, không phải multicast, và không làm gateway cho traffic toàn cầu."
    }
  ]
});
