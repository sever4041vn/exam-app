// NWC204 - Fall 2025 - Final Exam
// Nguồn: NWC204 - FA25 - FE.pdf (50 câu hỏi trắc nghiệm, format FUO, layout 2 cột)
window.EXAMAPP_EXAMS = window.EXAMAPP_EXAMS || [];
window.EXAMAPP_EXAMS.push({
  id: "nwc204-fa25-fe",
  subjectId: "NWC204",
  title: "NWC204 - Fall 2025 - Final Exam",
  originalFile: "NWC204 - FA25 - FE.pdf",
  semester: "Fall 2025",
  semesterKey: "fa25",
  type: "Final Exam",
  typeKey: "final",
  durationMinutes: 60,
  imagePath: "images/nwc204/fa25-fe/",
  questions: [
    {
      n: 1,
      text: "(Choose three answers) Which three application layer protocols use TCP?",
      options: ["SMTP", "FTP", "SNMP", "HTTP", "TFTP", "DHCP"],
      answers: [0, 1, 3],
      explain: "SMTP (gửi thư), FTP (truyền file) và HTTP (web) cần độ tin cậy của TCP. SNMP, TFTP và DHCP dùng UDP vì ưu tiên nhẹ nhàng, nhanh chóng cho các giao dịch nhỏ."
    },
    {
      n: 2,
      text: "(Choose 1 answer) Which scenario describes a function provided by the transport layer?",
      options: ["A student is using a classroom VoIP phone to call home. The unique identifier burned into the phone is a transport layer address used by another network device on the same network to identify whether the call should be forwarded.", "A student is playing a short web-based movie with sound. The movie and sound are encoded within the transport layer header.", "A student has two web browser windows open in order to access two web sites. The transport layer ensures the correct web page is delivered to the correct browser window.", "A corporate worker is accessing a web server located on a corporate network. The transport layer formats the screen so the web page appears properly no matter what device is being used to view the web site."],
      answers: [2],
      explain: "Transport layer theo dõi từng phiên hội thoại riêng biệt bằng số cổng: hai cửa sổ trình duyệt là hai phiên, dữ liệu được phân về đúng cửa sổ nhờ cổng nguồn/đích. Địa chỉ 'burned-in' là MAC (layer 2); mã hóa nội dung hiển thị là việc của tầng presentation, không phải transport."
    },
    {
      n: 3,
      text: "(Choose 1 answer) How are port numbers used in the TCP/IP encapsulation process?",
      options: ["Source port numbers and destination port numbers are not necessary when UDP is the transport layer protocol being used for the communication.", "Source port and destination port numbers are randomly generated.", "If multiple conversations occur that are using the same service, the source port number is used to track the separate conversations.", "Destination port numbers are assigned automatically and cannot be changed."],
      answers: [2],
      explain: "Khi nhiều phiên cùng dùng một dịch vụ (cùng cổng đích), mỗi phiên có cổng nguồn (ephemeral) riêng để server phân biệt và trả dữ liệu về đúng phiên. UDP vẫn cần số cổng; cổng đích là giá trị chuẩn của dịch vụ, hoàn toàn cấu hình được."
    },
    {
      n: 4,
      text: "(Choose 1 answer) Which port number range is designated for well-known ports?",
      options: ["0 to 1023", "1024 to 49151", "49152 to 65535", "65536 to 131071"],
      answers: [0],
      explain: "Well-known ports: 0–1023 (HTTP 80, DNS 53...). Registered ports: 1024–49151; dynamic/private/ephemeral: 49152–65535."
    },
    {
      n: 5,
      text: "(Choose 3 answers) Which three basic parts are common to all frame types supported by the data link layer?",
      options: ["header", "type field", "MTU size", "data", "trailer", "CRC value"],
      answers: [0, 3, 4],
      explain: "Mọi khung data link đều có 3 phần cơ bản: header (địa chỉ, điều khiển), data (payload) và trailer (kiểm lỗi). Type field chỉ có ở một số định dạng (Ethernet II), CRC nằm bên trong trailer chứ không phải phần riêng."
    },
    {
      n: 6,
      text: "(Choose 1 answer) What is contained in the trailer of a data-link frame?",
      options: ["logical address", "physical address", "data", "error-detection"],
      answers: [3],
      explain: "Trailer chứa thông tin phát hiện lỗi (FCS/CRC). Logical address (IP) và physical address (MAC) nằm ở header; data là phần payload giữa header và trailer."
    },
    {
      n: 7,
      text: "(Choose 1 answer) Which statement describes the half-duplex mode of data transmission?",
      options: ["Data that is transmitted over the network can only flow in one direction.", "Data that is transmitted over the network flows in both directions at the same time.", "Data that is transmitted over the network flows in one direction to many different destinations simultaneously.", "Data that is transmitted over the network flows in one direction at a time."],
      answers: [3],
      explain: "Half-duplex: truyền được cả hai hướng nhưng tại mỗi thời điểm chỉ một hướng (ví dụ hub, WLAN). Full-duplex mới truyền đồng thời hai chiều."
    },
    {
      n: 8,
      text: "(Choose 1 answer) Which of the following is not a key element of communication?",
      options: ["Network speed", "A source (sender)", "A destination (receiver)", "A transmission medium (channel)"],
      answers: [0],
      explain: "Ba yếu tố cốt lõi của giao tiếp: nguồn, đích và kênh truyền. Network speed là thông số hiệu năng, không phải thành phần cấu thành."
    },
    {
      n: 9,
      text: "(Choose 1 answer) Which name is assigned to the transport layer PDU?",
      options: ["bits", "data", "frame", "packet", "segment"],
      answers: [4],
      explain: "PDU của transport là segment (TCP) hay datagram (UDP — vẫn thường gọi chung segment). Packet thuộc network, frame thuộc data link, bits thuộc physical."
    },
    {
      n: 10,
      text: "(Choose 1 answer) UDP and TCP belong to which layer of the TCP/IP protocol?",
      options: ["Application", "Transport", "Internet", "Network access"],
      answers: [1],
      explain: "TCP/UDP là hai giao thức chính của tầng Transport trong mô hình TCP/IP, đảm nhận truyền dữ liệu giữa các ứng dụng thông qua số cổng."
    },
    {
      n: 11,
      text: "(Choose 1 answer) Match the description to the organization. (Not all options are used.)<table class=\"mini-table\"><tr><td>1. This organization is responsible for overseeing and managing IP address allocation, domain name management, and protocol identifiers</td><td>A. ISOC</td></tr><tr><td>2. This organization is the largest developer of international standards in the world for a wide variety of products and services. It is known for its Open Systems Interconnection (OSI) reference model.</td><td>B. ISO</td></tr><tr><td>3. This organization is responsible for the technical development, evolution, and use of the Internet throughout the world.</td><td>C. EIA</td></tr><tr><td></td><td>D. IANA</td></tr></table>",
      options: ["1D-2B-3A", "1D-2C-3A", "1D-2A-3B", "1D-2B-3C"],
      answers: [0],
      explain: "IANA quản lý phân bổ địa chỉ IP, tên miền và tham số giao thức (1→D). ISO là tổ chức tiêu chuẩn hóa lớn nhất, tác giả mô hình OSI (2→B). ISOC phụ trách phát triển kỹ thuật và hướng tới sử dụng Internet toàn cầu (3→A)."
    },
    {
      n: 12,
      text: "(Choose 1 answer) Which command is used to manually query a DNS server to resolve a specific host name?",
      options: ["ipconfig", "show ip hostnames", "tracert", "nslookup"],
      answers: [3],
      explain: "nslookup gửi truy vấn trực tiếp tới DNS server để phân giải một tên cụ thể. ipconfig xem cấu hình, tracert theo dõi đường đi, không phải công cụ truy vấn DNS."
    },
    {
      n: 13,
      text: "(Choose 1 answer) Match the IPv6 address with the IPv6 address type. (Not all options are used.)<table class=\"mini-table\"><tr><td>A. link-local</td><td>1. 2001:DB8::BAF:3F57:FE94</td></tr><tr><td>B. solicited node multicast</td><td>2. FF02::1</td></tr><tr><td>C. global unicast</td><td>3. ::1</td></tr><tr><td>D. all node multicast</td><td>4. FF02::1:FFAE:F85F</td></tr><tr><td>E. loopback</td><td></td></tr><tr><td>F. unique local</td><td></td></tr></table>",
      options: ["C1-D2-E3-B4", "C2-D1-E3-A4", "C1-F2-E4-B3", "C4-D2-E3-B1"],
      answers: [0],
      explain: "2001:DB8::... là global unicast (C1); FF02::1 là all-nodes multicast (D2); ::1 là loopback (E3); FF02::1:FFxx:xxxx là solicited-node multicast (B4). Chuỗi đúng: C1-D2-E3-B4."
    },
    {
      n: 14,
      text: "(Choose 1 answer) What process does a device use to verify that its IPv6 address is unique on the network?",
      options: ["DHCPv6", "SLAAC", "Neighbor Discovery Protocol (NDP)", "Duplicate Address Detection (DAD)"],
      answers: [3],
      explain: "DAD gửi Neighbor Solicitation tới solicited-node multicast của địa chỉ dự kiến; nếu nhận được Neighbor Advertisement nghĩa là địa chỉ bị trùng và không dùng được. NDP là bộ giao thức tổng, DAD là thủ tục kiểm tra trùng cụ thể."
    },
    {
      n: 15,
      text: "(Choose 2 answers) What are two types of IPv6 unicast addresses? (Choose two.)",
      options: ["multicast", "loopback", "link-local", "anycast", "broadcast"],
      answers: [1, 2],
      explain: "Loopback (::1) và link-local (fe80::/10) đều là địa chỉ unicast của IPv6. Multicast/anycast là các kiểu giao tiếp khác, IPv6 không có broadcast."
    },
    {
      n: 16,
      text: "(Choose 1 answer) Given IPv6 address prefix 2001:db8::/48, what will be the last subnet that is created if the subnet prefix is changed to /52?",
      options: ["2001:db8:0:f00::/52", "2001:db8:0:8000::/52", "2001:db8:0:f::/52", "2001:db8:0:f000::/52"],
      answers: [3],
      explain: "/48 → /52 mượn 4 bit subnet trong hextet 4: giá trị từ 0000 đến f000 (bước 0x1000). Subnet cuối là 2001:db8:0:f000::/52."
    },
    {
      n: 17,
      text: "(Choose 1 answer) Which field in an IPv6 GUA is used for subnetting?",
      options: ["Prefix", "Network", "Global routing prefix", "Subnet ID", "Interface ID"],
      answers: [3],
      explain: "Cấu trúc GUA: global routing prefix (do ISP cấp) + Subnet ID (phần tổ chức tự dùng để tạo subnet) + Interface ID (64 bit nhận diện host). Subnet ID chính là trường dùng để subnetting."
    },
    {
      n: 18,
      text: "(Choose 1 answer) Which statement describes the treatment of ARP requests on the local link?",
      options: ["They must be forwarded by all routers on the local network.", "They are received and processed by every device on the local network.", "They are dropped by all switches on the local network.", "They are received and processed only by the target device."],
      answers: [1],
      explain: "ARP request phát broadcast MAC nên mọi thiết bị cùng link đều nhận frame, xử lý và cập nhật cache ARP của máy gửi; chỉ host sở hữu IP được hỏi mới phản hồi. Router không chuyển tiếp ARP request qua mạng khác."
    },
    {
      n: 19,
      text: "(Choose 1 answer) What is the aim of an ARP spoofing attack?",
      options: ["to flood the network with ARP reply broadcasts", "to fill switch MAC address tables with bogus addresses", "to associate IP addresses to the wrong MAC address", "to overwhelm network hosts with ARP requests"],
      answers: [2],
      explain: "ARP spoofing gửi reply giả để gắn IP của nạn nhân (thường gateway) vào MAC của attacker — dẫn tới MITM. Đổ bảng MAC của switch là MAC flooding, kỹ thuật khác."
    },
    {
      n: 20,
      text: "(Choose 1 answer) What is the purpose of the IPv6 Neighbor Discovery Protocol (ND)?",
      options: ["To replace ARP in IPv6 networks", "To discover the best route between networks", "To allow IPv6 devices to communicate using NAT", "A and B"],
      answers: [0],
      explain: "ND đảm nhận phân giải địa chỉ trong IPv6 (thay ARP), ngoài ra còn tìm router, phát hiện trùng địa chỉ... 'Discover the best route' là việc của giao thức định tuyến (OSPF...), không phải ND."
    },
    {
      n: 21,
      text: "(Choose 2 answers) Which two types of IPv6 messages are used in place of ARP for address resolution?",
      options: ["Anycast", "Broadcast", "echo reply", "echo request", "neighbor solicitation", "neighbor advertisement"],
      answers: [4, 5],
      explain: "Neighbor Solicitation (hỏi) + Neighbor Advertisement (trả lời) của ICMPv6 ND thực hiện chức năng của ARP request/reply. IPv6 không có broadcast; echo request/reply là cơ chế ping."
    },
    {
      n: 22,
      text: "(Choose 1 answer) What term describes a type of network used by people who work from home or from a small remote office?",
      options: ["SOHO network", "BYOD", "quality of service", "converged network"],
      answers: [0],
      explain: "SOHO = Small Office / Home Office — mạng nhỏ cho làm việc tại nhà hoặc văn phòng mini. BYOD là chính sách mang thiết bị riêng, QoS là ưu tiên lưu lượng."
    },
    {
      n: 23,
      text: "(Choose 1 answer) Which device performs the function of determining the path that messages should take through internetworks?",
      options: ["a router", "a firewall", "a web server", "a DSL modem"],
      answers: [0],
      explain: "Router định tuyến — quyết định đường đi của packet giữa các mạng dựa trên bảng định tuyến. Firewall lọc, web server phục vụ nội dung, modem chỉ kết nối."
    },
    {
      n: 24,
      text: "(Choose 1 answer) Which statement describes the use of powerline networking technology?",
      options: ["New \"smart\" electrical cabling is used to extend an existing home LAN.", "A home LAN is installed without the use of physical cabling.", "A device connects to an existing home LAN using an adapter and an existing electrical outlet.", "Wireless access points use powerline adapters to distribute data through the home LAN."],
      answers: [2],
      explain: "Powerline: cắm adapter vào ổ điện sẵn có, thiết bị nối adapter là tham gia được LAN — tận dụng dây điện thay vì đi thêm cáp mạng."
    },
    {
      n: 25,
      text: "(Choose 1 answer) A Layer 2 switch is used to switch incoming frames from a 1000BASE-T port to a port connected to a 100Base-T network. Which method of memory buffering would work best for this task?",
      options: ["port-based buffering", "level 1 cache buffering", "shared memory buffering", "fixed configuration buffering"],
      answers: [2],
      explain: "Shared memory buffering dùng chung bộ đệm cho mọi cổng, phù hợp khi chuyển frame giữa cổng lệch tốc độ (1G → 100M): frame được lưu và phát dần ra cổng chậm mà không nghẽn bộ đệm cổng."
    },
    {
      n: 26,
      text: "(Choose 1 answer) What will a host on an Ethernet network do if it receives a frame with a unicast destination MAC address that does not match its own MAC address?",
      options: ["It will discard the frame.", "It will forward the frame to the next host.", "It will remove the frame from the media.", "It will strip off the data-link frame to check the destination IP address."],
      answers: [0],
      explain: "NIC chỉ chấp nhận frame có MAC đích trùng MAC của mình (hoặc broadcast/multicast đã đăng ký). Unicast không khớp → hủy frame, không đọc phần IP bên trong."
    },
    {
      n: 27,
      text: "(Choose 1 answer) What is the purpose of the FCS field in a frame?",
      options: ["to obtain the MAC address of the sending node", "to verify the logical address of the sending node", "to compute the CRC header for the data field", "to determine if errors occurred in the transmission and reception"],
      answers: [3],
      explain: "FCS chứa CRC để bên nhận kiểm tra frame có bị lỗi khi truyền/nhận hay không; nếu CRC không khớp, frame bị hủy. Địa chỉ MAC nằm trong header, không phải FCS."
    },
    {
      n: 28,
      text: "(Choose 1 answer) Which frame forwarding method receives the entire frame and performs a CRC check to detect errors before forwarding the frame?",
      options: ["cut-through switching", "store-and-forward switching", "fragment-free switching", "fast-forward switching"],
      answers: [1],
      explain: "Store-and-forward nhận trọn frame, kiểm tra CRC (FCS) rồi mới forward — loại bỏ frame lỗi. Fast-forward/fragment-free là cut-through: chuyển sớm khi mới đọc đủ địa chỉ đích."
    },
    {
      n: 29,
      text: "(Choose 1 answer) A user executes a traceroute over IPv6. At what point would a router in the path to the destination device drop the packet?",
      options: ["when the value of the Hop Limit field reaches 256", "when the value of the Hop Limit field reaches zero", "when the router receives an ICMP Time Exceeded message", "when the target host responds with an ICMP echo reply message"],
      answers: [1],
      explain: "IPv6 dùng Hop Limit thay cho TTL: mỗi router giảm 1; khi về 0, router hủy packet và gửi lại ICMP Time Exceeded — cơ chế mà traceroute dựa vào để đếm hop."
    },
    {
      n: 30,
      text: "(Choose 1 answer) Which ICMP message is used to test the reachability of a host on an IP network?",
      options: ["Destination Unreachable", "Echo Request", "Time Exceeded", "Redirect"],
      answers: [1],
      explain: "Ping gửi ICMP Echo Request; host đích sống sẽ trả Echo Request → Echo Reply, qua đó xác nhận khả năng truy cập. Destination Unreachable báo lỗi không tới được, Redirect gợi ý đường tốt hơn."
    },
    {
      n: 31,
      text: "(Choose 1 answer) Which protocol is used by the traceroute command to send and receive echo-requests and echo-replies?",
      options: ["SNMP", "ICMP", "Telnet", "TCP"],
      answers: [1],
      explain: "traceroute/tracert sử dụng ICMP Echo Request và chờ Echo Reply (trên Windows tracert) hoặc dựa vào ICMP Time Exceeded (mỗi hop) — tất cả đều là ICMP. SNMP quản trị, Telnet là remote terminal."
    },
    {
      n: 32,
      text: "(Choose 1 answer) Which of the following fiber optic cable types can help data travel approximately 500 meters?",
      options: ["Multimode", "Single-mode"],
      answers: [0],
      explain: "Multimode fiber (MMF) với nguồn LED/VCSEL hỗ trợ khoảng cách ~550 m cho Gigabit Ethernet (1000BASE-SX) — phù hợp liên kết trong tòa nhà. Single-mode đi hàng km, quá dư cho 500 m và dùng nguồn laser đắt hơn."
    },
    {
      n: 33,
      text: "(Choose 1 answer) What is the primary benefit of Shielded Twisted Pair (STP) over Unshielded Twisted Pair (UTP)?",
      options: ["It provides better protection against electromagnetic interference (EMI)", "It has a higher data transmission speed", "It is more flexible and easier to install", "It requires no termination standards"],
      answers: [0],
      explain: "Lớp shield của STP chống nhiễu điện từ (EMI/RFI) và giảm crosstalk tốt hơn UTP. Tốc độ phụ thuộc chuẩn (Cat) chứ không phải vỏ bọc; STP đắt và khó lắp hơn UTP."
    },
    {
      n: 34,
      text: "(Choose 2 answers) Which two statements describe the characteristics of fiber-optic cabling? (Choose two.)",
      options: ["Fiber-optic cabling does not conduct electricity.", "Fiber-optic cabling has high signal loss.", "Fiber-optic cabling is primarily used as backbone cabling.", "Multimode fiber-optic cabling carries signals from multiple sending devices.", "Fiber-optic cabling uses LEDs for single-mode cables and laser technology for multimode cables."],
      answers: [0, 2],
      explain: "Fiber bằng thủy tinh/không dẫn điện — an toàn khi đi qua vùng nhiễu điện và cách ly điện thế giữa các tòa nhà; và fiber chủ yếu dùng làm backbone vì băng thông/khoảng cách vượt trội. MMF là 'nhiều mode ánh sáng' chứ không phải tín hiệu từ nhiều thiết bị; LED dùng cho MMF, laser cho SMF."
    },
    {
      n: 35,
      text: "(Choose 1 answer) The global configuration command ip default-gateway 172.16.100.1 is applied to a switch. What is the effect of this command?",
      options: ["The switch will have a management interface with the address 172.16.100.1", "The switch can be remotely managed from a host on another network.", "The switch can communicate with other hosts on the 172.16.100.0 network.", "The switch is limited to sending and receiving frames to and from the gateway 172.16.100.1."],
      answers: [1],
      explain: "ip default-gateway khai báo cửa ngõ cho lưu lượng quản lý của switch (Telnet/SSH, ping...) khi đích ở mạng khác — cho phép quản trị switch từ xa. Địa chỉ IP quản lý phải gán trên SVI (interface vlan 1), lệnh này không tạo interface."
    },
    {
      n: 36,
      text: "(Choose 1 answer) What happens when the transport input ssh command is entered on the switch vty lines?",
      options: ["The SSH client on the switch is enabled.", "Communication between the switch and remote users is encrypted.", "The switch requires a username/password combination for remote access.", "The switch requires remote connections via a proprietary client software."],
      answers: [1],
      explain: "transport input ssh giới hạn các kết nối vty chỉ nhận SSH — toàn bộ phiên điều khiển giữa switch và người dùng từ xa được mã hóa. Nó không bật SSH client của switch hay tự sinh username/password (cần cấu hình thêm)."
    },
    {
      n: 37,
      text: "(Choose 2 answers) Which two functions are primary functions of a router? (Choose two.)",
      options: ["packet forwarding", "microsegmentation", "domain name resolution", "path selection", "flow control"],
      answers: [0, 3],
      explain: "Router: chọn đường đi tối ưu (path selection) và chuyển tiếp packet giữa các mạng. Microsegmentation là của switch; DNS là dịch vụ tầng ứng dụng."
    },
    {
      n: 38,
      text: "(Choose 1 answer) Match the command with the device mode at which the command is entered. (Not all options are used.)<table class=\"mini-table\"><tr><td>A. login</td><td>1. R1(config)#</td></tr><tr><td>B. service password-encryption</td><td>2. R1&gt;</td></tr><tr><td>C. ip address 192.168.4.4 255.255.255.0</td><td>3. R1(config-router)#</td></tr><tr><td>D. copy running-config startup-config</td><td>4. R1#</td></tr><tr><td>E. enable</td><td>5. R1(config-line)#</td></tr><tr><td></td><td>6. R1(config-if)#</td></tr></table>",
      options: ["A5-B1-C6-D4-E2", "A1-B5-C6-D4-E2", "A5-B1-C4-D6-E2", "A5-B1-C6-D2-E4"],
      answers: [0],
      explain: "login → config-line (A5); service password-encryption → global config (B1); ip address → interface config (C6); copy running-config startup-config → privileged EXEC R1# (D4); enable → từ user EXEC R1&gt; (E2). Kết quả: A5-B1-C6-D4-E2."
    },
    {
      n: 39,
      text: "(Choose 1 answer) How many bits must be borrowed from the host portion of an address to accommodate a router with five connected networks?",
      options: ["two", "three", "four", "five"],
      answers: [1],
      explain: "Cần 5 subnet: 2 bit cho 4 subnet (không đủ), 3 bit cho 2<sup>3</sup> = 8 subnet ≥ 5. Vậy phải mượn 3 bit."
    },
    {
      n: 40,
      text: "(Choose 1 answer) What is the prefix length notation for the subnet mask 255.255.255.224?",
      options: ["/25", "/27", "/26", "/28"],
      answers: [1],
      explain: "255.255.255.224: octet 4 = 224 = 11100000 → 24 + 3 = 27 bit mạng → /27. Cách khác: 2<sup>3</sup> = 8 subnet, bước nhảy 32 (.0, .32, ...)."
    },
    {
      n: 41,
      text: "(Choose 1 answer) Match the subnetwork to a host address that would be included within the subnetwork. (Not all options are used.)<table class=\"mini-table\"><tr><td>A. 192.168.1.32/27</td><td>1. 192.168.1.63</td></tr><tr><td>B. 192.168.1.64/27</td><td>2. 192.168.1.68</td></tr><tr><td>C. 192.168.1.96/27</td><td>3. 192.168.1.128</td></tr><tr><td></td><td>4. 192.168.1.48</td></tr><tr><td></td><td>5. 192.168.1.121</td></tr></table>",
      options: ["A4-B2-C5", "A3-B4-C5", "A3-B2-C4", "A2-B5-C1"],
      answers: [0],
      explain: "192.168.1.32/27 gồm .32–.63 → chứa .48 (4). 192.168.1.64/27 gồm .64–.95 → chứa .68 (2). 192.168.1.96/27 gồm .96–.127 → chứa .121 (5). Vậy A4-B2-C5."
    },
    {
      n: 42,
      text: "(Choose 2 answers) Which two parts are components of an IPv4 address? (Choose two.)",
      options: ["logical portion", "network portion", "physical portion", "broadcast portion", "host portion", "subnet portion"],
      answers: [1, 4],
      explain: "Địa chỉ IPv4 gồm network portion (định danh mạng) và host portion (định danh máy trong mạng), ranh giới do subnet mask quyết định. 'Physical portion' là khái niệm của MAC address."
    },
    {
      n: 43,
      text: "(Choose 1 answer) What is the correct sequence of commands to configure a console password on a switch?",
      options: ["line console 0 → password cisco → login", "enable password cisco → login → password cisco", "enable console → password cisco → encrypt password", "password cisco → enable password → encrypt password"],
      answers: [0],
      explain: "Trình tự: vào line console 0 → đặt mật khẩu (password cisco) → bật kiểm tra đăng nhập (login). Không có lệnh 'enable console' hay 'encrypt password' trong IOS."
    },
    {
      n: 44,
      text: "(Choose 1 answer) Which delivery method is used to transmit information to one or more end devices, but not all devices on the network?",
      options: ["Unicast", "Multicast", "Broadcast"],
      answers: [1],
      explain: "Multicast gửi đến một nhóm thiết bị đã tham gia nhóm (một-đến-nhiều), không phải toàn mạng như broadcast hay một thiết bị như unicast."
    },
    {
      n: 45,
      text: "(Choose 1 answer) What is the default SVI on a Cisco switch?",
      options: ["VLAN999", "VLAN1", "VLAN99", "VLAN0"],
      answers: [1],
      explain: "SVI mặc định của switch Cisco là interface VLAN 1 — tồn tại sẵn, dùng làm interface quản lý khi chưa cấu hình thêm. VLAN 0 không hợp lệ, VLAN 99/999 thường là VLAN native tùy chỉnh."
    },
    {
      n: 46,
      text: "(Choose 1 answer) How is SSH different from Telnet?",
      options: ["SSH makes connections over the network, whereas Telnet is for out-of-band access.", "SSH provides security to remote sessions by encrypting messages and using user authentication. Telnet is much older and provides no security.", "SSH requires the use of the PuTTY terminal emulation program. Tera Term must be used to connect to devices through the use of Telnet.", "SSH is used for remote access to devices with an active network connection, whereas Telnet is used to connect to a device from a console connection."],
      answers: [1],
      explain: "Khác biệt then chốt: SSH mã hóa phiên và xác thực người dùng (an toàn), Telnet gửi plaintext. Cả hai đều là truy cập in-band qua mạng TCP, không phụ thuộc phần mềm terminal cụ thể."
    },
    {
      n: 47,
      text: "(Choose 2 answers) What are two potential network problems that can result from ARP operation? (Choose two.)",
      options: ["Manually configuring static ARP associations could facilitate ARP poisoning or MAC addressing spoofing.", "On large networks with low bandwidth, multiple ARP broadcasts could cause data communication delays.", "Network attackers could manipulate MAC address and IP address mappings in ARP messages with the intent of intercepting network traffic.", "Large numbers of ARP request broadcasts could cause the host MAC address table to overflow and prevent the host from communicating on the network.", "Multiple ARP replies result in the switch MAC address table containing entries that match the MAC addresses of hosts that are connected to the relevant switch port."],
      answers: [1, 2],
      explain: "Hai vấn đề thực tế của ARP: (1) lượng ARP broadcast lớn trên mạng rộng/băng thông thấp gây chậm; (2) ARP spoofing — kẻ tấn công giả mạo ánh xạ IP↔MAC để đánh chặn traffic. MAC address table là của switch, không phải host; cấu hình static ARP là biện pháp phòng thủ chứ không tạo lỗ hổng."
    },
    {
      n: 48,
      text: "(Choose 1 answer) Refer to the exhibit. Match the packets with their destination IP address to the exiting interfaces on the router. (Not all targets are used.)<table class=\"mini-table\"><tr><td>A. 172.17.10.5</td><td>1. FastEthernet0/0</td></tr><tr><td>B. 172.17.12.10</td><td>2. FastEthernet0/1</td></tr><tr><td>C. 172.17.14.8</td><td>3. FastEthernet1/0</td></tr><tr><td>D. 172.17.8.20</td><td>4. FastEthernet1/1</td></tr><tr><td>E. 172.17.6.15</td><td>5. Serial0/0/0</td></tr><tr><td></td><td>6. The packet is dropped.</td></tr></table>",
      image: "q48.png",
      imageAlt: "Bảng định tuyến: 10.1.0.0/24 nối Serial0/0/0; các subnet 172.17.6.0, 172.17.10.0, 172.17.12.0 học qua OSPF; 172.17.14.0/24 nối FastEthernet0/1; các mạng 192.168.3.0, 192.168.4.0, 192.168.5.0/24 kết nối trực tiếp; default route ra Serial0/0/0",
      options: ["1E-2C-3B-4A-5D", "1E-2B-3C-4A-5D", "1E-2C-3A-4B-5D", "1E-2C-3B-4D-5A"],
      answers: [0],
      explain: "172.17.6.15 → FE0/0 (E→1); 172.17.14.8 → directly connected FE0/1 (C→2); 172.17.12.10 → FE1/0 (B→3); 172.17.10.5 → FE1/1 (A→4); 172.17.8.20 không khớp subnet 172.17 nào → default S* → Serial0/0/0 (D→5). Chuỗi: 1E-2C-3B-4A-5D."
    },
    {
      n: 49,
      text: "(Choose 1 answer) What destination MAC address would be included in a frame sent from a source device to a destination device on a remote local network?",
      options: ["A broadcast MAC address of FF-FF-FF-FF-FF-FF.", "The MAC address of the destination device.", "The MAC address of the local router interface."],
      answers: [2],
      explain: "Khi đích ở mạng khác, frame được gửi tới MAC của default gateway (interface router cục bộ); router sẽ dựng frame mới với MAC đích hop tiếp theo. MAC của thiết bị đích cuối chỉ xuất hiện ở segment cuối cùng."
    },
    {
      n: 50,
      text: "(Choose 1 answer) How does a host determine whether a destination IP address is local or remote?",
      options: ["By comparing the destination IP address with its own subnet mask", "By checking the packet's TTL value", "By using the MAC address of the destination", "By querying the DNS server"],
      answers: [0],
      explain: "Host AND địa chỉ đích với subnet mask của mình và so với địa chỉ mạng của mình: giống → local (gửi trực tiếp), khác → remote (gửi qua default gateway). Đây là quy trình ANDing tiêu chuẩn."
    }
  ]
});
