// NWC204 - Spring 2026 - Retake Exam
// Nguồn: NWC204 - SP26 - RE.pdf (50 câu hỏi trắc nghiệm, format FUO)
window.EXAMAPP_EXAMS = window.EXAMAPP_EXAMS || [];
window.EXAMAPP_EXAMS.push({
  id: "nwc204-sp26-re",
  subjectId: "NWC204",
  title: "NWC204 - Spring 2026 - Retake Exam",
  originalFile: "NWC204 - SP26 - RE.pdf",
  semester: "Spring 2026",
  semesterKey: "sp26",
  type: "Retake Exam",
  typeKey: "retake",
  durationMinutes: 60,
  imagePath: "images/nwc204/sp26-re/",
  questions: [
    {
      n: 1,
      text: "How many host addresses are available on the network 172.16.128.0 with a subnet mask of 255.255.252.0?",
      options: ["510", "512", "1022", "1024", "2046", "2048"],
      answers: [2],
      explain: "Mask 255.255.252.0 = /22 → còn 10 bit host → 2<sup>10</sup> = 1024 địa chỉ, trừ network và broadcast còn 1022 host dùng được."
    },
    {
      n: 2,
      text: "How many usable IP addresses are available on the 192.168.1.0/27 network?",
      options: ["254", "30", "256", "16", "62", "32"],
      answers: [1],
      explain: "/27 còn 5 bit host → 2<sup>5</sup> = 32 địa chỉ; trừ network (192.168.1.0) và broadcast (192.168.1.31) còn 30 địa chỉ dùng được."
    },
    {
      n: 3,
      text: "What type of address is 198.133.219.162?",
      options: ["Public", "link-local", "Loopback", "multicast"],
      answers: [0],
      explain: "198.133.219.162 không thuộc dải private (10/8, 172.16/12, 192.168/16), không phải loopback (127.x) hay multicast (224–239) → là địa chỉ public, có thể định tuyến trên Internet."
    },
    {
      n: 4,
      text: "(Choose 1 answer) Refer to the exhibit. Consider the IP address configuration shown from PC1. What is a description of the default gateway address?",
      image: "q04.png",
      imageAlt: "Kết quả ipconfig của PC1 (IP 192.168.1.101, gateway 192.168.1.254) và sơ đồ mạng với Router1, Router2, Switch1, Switch2, PC1, PC2",
      options: ["It is the IP address of the Router1 interface that connects the company to the Internet.", "It is the IP address of the Router1 interface that connects the PC1 LAN to Router1.", "It is the IP address of Switch1 that connects PC1 to other devices on the same LAN.", "It is the IP address of the ISP network device located in the cloud."],
      answers: [1],
      explain: "Default gateway phải cùng mạng với host và là interface của router kết nối trực tiếp LAN của PC1 — tức interface Router1 hướng về LAN (192.168.1.x). Interface nối Internet của Router1 thuộc dải ISP, switch thì không có địa chỉ IP làm gateway."
    },
    {
      n: 5,
      text: "A router's G0/0/0 interface is down even though configuration is correct. What could explain this?",
      options: ["The \"no shutdown\" command was not applied", "There is no device connected to the interface", "The IP address is not unique", "The password was not encrypted"],
      answers: [1],
      explain: "Nếu cấu hình đúng (đã no shutdown, IP hợp lệ) mà interface vẫn down thì nguyên nhân ở lớp vật lý: không có thiết bị/cáp nào cắm vào port (line protocol down). Mất IP duy nhất hay mật khẩu không liên quan trạng thái interface."
    },
    {
      n: 6,
      text: "Which two functions are primary functions of a router? (Choose two.)",
      options: ["packet forwarding", "Microsegmentation", "domain name resolution", "path selection", "flow control"],
      answers: [0, 3],
      explain: "Hai nhiệm vụ cốt lõi của router: chọn đường đi tốt nhất cho packet (path selection — chạy giao thức định tuyến) và chuyển tiếp packet (packet forwarding) giữa các mạng. Microsegmentation là việc của switch, DNS là dịch vụ tầng ứng dụng."
    },
    {
      n: 7,
      text: "What term refers to the amount of data that can be transmitted over a medium in a given time?",
      options: ["Bandwidth", "Latency", "Throughput", "Goodput"],
      answers: [0],
      explain: "Bandwidth là công suất lý thuyết của medium (bit/giây) — lượng dữ liệu tối đa truyền được trong một đơn vị thời gian. Throughput/goodput là các giá trị đo thực tế nhỏ hơn."
    },
    {
      n: 8,
      text: "What are two functions of NVRAM? (Choose two.)",
      options: ["to store the routing table", "to retain contents when power is removed", "to store the startup configuration file", "to contain the running configuration file", "to store the ARP table"],
      answers: [1, 2],
      explain: "NVRAM giữ dữ liệu khi mất điện và lưu startup-config. Routing table, running-config, ARP table đều nằm trong RAM."
    },
    {
      n: 9,
      text: "Which type of fiber-optic cabling is characterized by a very small core and is used for long-distance applications?",
      options: ["Multimode Fiber (MMF)", "Shielded Twisted-Pair (STP)", "Single-Mode Fiber (SMF)", "Coaxial Cable"],
      answers: [2],
      explain: "SMF có lõi rất nhỏ (~9 µm), truyền một tia sáng laser, cho khoảng cách hàng chục km — dùng cho long-haul. MMF lõi lớn (50/62.5 µm) dùng LED, chỉ đi vài trăm mét trong tòa nhà."
    },
    {
      n: 10,
      text: "What is a function of the tracert command that differs from the ping command when they are used on a workstation?",
      options: ["The tracert command reaches the destination faster.", "The tracert command shows the information of routers in the path.", "The tracert command sends one ICMP message to each hop in the path.", "The tracert command is used to test the connectivity between two devices."],
      answers: [1],
      explain: "Điểm khác biệt cốt lõi: tracert liệt kê từng router trên đường đi (thời gian từng hop), còn ping chỉ kiểm tra end-to-end. Traceroute còn chậm hơn ping vì phải gửi nhiều vòng TTL; cả hai đều dùng ICMP, và đo kết nối là chức năng chung."
    },
    {
      n: 11,
      text: "A network administrator is measuring the transfer of bits across the company backbone for a mission critical financial application. The administrator notices that the network throughput appears lower than the bandwidth expected. Which three factors could influence the differences in throughput? (Choose three.)",
      options: ["the amount of traffic that is currently crossing the network", "the sophistication of the encapsulation method applied to the data", "the type of traffic that is crossing the network", "the latency that is created by the number of network devices that the data is crossing", "the bandwidth of the WAN connection to the Internet", "the reliability of the gigabit Ethernet infrastructure of the backbone"],
      answers: [0, 2, 3],
      explain: "Theo Cisco, throughput bị ảnh hưởng bởi: lượng traffic đang chạy trên mạng, loại traffic (nhiều thiết bị chậm/lưu lượng lớn), và độ trễ sinh ra bởi số thiết bị trung gian mà dữ liệu phải đi qua. Encapsulation hay độ tin cậy hạ tầng không nằm trong 3 yếu tố này."
    },
    {
      n: 12,
      text: "What source IP address does a router use by default when the traceroute command is issued?",
      options: ["the highest configured IP address on the router", "a loopback IP address", "the IP address of the outbound interface", "the lowest configured IP address on the router"],
      answers: [2],
      explain: "Theo mặc định, packet traceroute/route dùng địa chỉ IP của interface đi ra (egress interface) làm nguồn. Có thể đổi bằng lệnh source, nhưng mặc định là outbound interface."
    },
    {
      n: 13,
      text: "Which ICMP message is used by the traceroute utility during the process of finding the path between two end hosts?",
      options: ["Destination unreachable", "Ping", "Redirect", "Time exceeded"],
      answers: [3],
      explain: "Traceroute tăng dần TTL; tại mỗi router TTL = 0 khiến router trả về ICMP Time Exceeded — chính là tín hiệu để ghi nhận hop. ICMP Destination Unreachable xuất hiện khi đích cuối không phản hồi kiểu hop (UDP port không mở)."
    },
    {
      n: 14,
      text: "Which sublayer handles Ethernet addressing?",
      options: ["Application", "MAC", "LLC", "Network"],
      answers: [1],
      explain: "Địa chỉ Ethernet (MAC 48-bit) do sublayer MAC (Media Access Control) quản lý — nằm trong data link. LLC lo giao tiếp với tầng trên, còn Application/Network không thuộc data link."
    },
    {
      n: 15,
      text: "A network administrator is connecting two modern switches using a straight-through cable. The switches are new and have never been configured. Which three statements are correct about the final result of the connection? (Choose three.)",
      options: ["The link between the switches will work at the fastest speed that is supported by both switches.", "The link between switches will work as full-duplex.", "If both switches support different speeds, they will each work at their own fastest speed.", "The auto-MDIX feature will configure the interfaces eliminating the need for a crossover cable.", "The connection will not be possible unless the administrator changes the cable to a crossover cable.", "The duplex capability has to be manually configured because it cannot be negotiated."],
      answers: [0, 1, 3],
      explain: "Switch hiện đại tự thương lượng tốc độ (chọn tốc độ cao nhất cả hai cùng hỗ trợ), tự thương lượng duplex (full-duplex) và có auto-MDIX nên cáp straight-through nối switch–switch vẫn chạy bình thường. Nếu tốc độ khác nhau, cả hai phải cùng chạy một tốc độ chung, không thể mỗi bên một tốc độ."
    },
    {
      n: 16,
      text: "(Choose 1 answer) Refer to the exhibit. What is wrong with the displayed termination?",
      image: "q16.png",
      imageAlt: "Ảnh đầu nối RJ-45 với phần dây xoắn chưa được xoắn lại, đoạn dây không xoắn quá dài",
      options: ["The woven copper braid should not have been removed.", "The wrong type of connector is being used.", "The untwisted length of each wire is too long.", "The wires are too thick for the connector that is used."],
      answers: [2],
      explain: "Trong ảnh, các cặp dây được bóc và để không xoắn quá dài trước khi vào RJ-45. Tiêu chuẩn cho phép phần không xoắn tối đa ~13 mm (0,5 inch); xoắn dài quá sẽ làm suy giảm chống nhiễu (crosstalk) và chất lượng tín hiệu."
    },
    {
      n: 17,
      text: "What are two actions performed by a Cisco switch? (Choose two.)",
      options: ["building a routing table that is based on the first IP address in the frame header", "using the source MAC addresses of frames to build and maintain a MAC address table", "forwarding frames with unknown destination IP addresses to the default gateway", "utilizing the MAC address table to forward frames via the destination MAC address", "examining the destination MAC address to add new entries to the MAC address table"],
      answers: [1, 3],
      explain: "Switch học MAC nguồn của frame để xây dựng/cập nhật bảng MAC, rồi dùng MAC đích tra bảng để forward. Switch hoạt động lớp 2 — không đọc IP để xây bảng định tuyến; bảng MAC được học từ MAC nguồn chứ không phải MAC đích."
    },
    {
      n: 18,
      text: "Which device performs the function of determining the path that messages should take through internetworks?",
      options: ["a router", "a firewall", "a web server", "a DSL modem"],
      answers: [0],
      explain: "Router chạy giao thức định tuyến và tra bảng định tuyến để chọn đường đi của packet giữa các mạng. Firewall lọc traffic, web server phục vụ nội dung, DSL modem chỉ kết nối thuê bao."
    },
    {
      n: 19,
      text: "Which of the four basic characteristics of a reliable network architecture refers to the ability to quickly and easily expand to support new users and applications?",
      options: ["Fault Tolerance", "Scalability", "Quality of Service (QoS)", "Security"],
      answers: [1],
      explain: "Scalability là khả năng mở rộng mạng (thêm người dùng, dịch vụ) mà không làm giảm hiệu năng dịch vụ hiện có. Fault tolerance là chống lỗi, QoS là ưu tiên lưu lượng, security là bảo mật."
    },
    {
      n: 20,
      text: "An employee at a branch office is creating a quote for a customer. In order to do this, the employee needs to access confidential pricing information from internal servers at the Head Office. What type of network would the employee access?",
      options: ["an intranet", "the Internet", "an extranet", "a local area network"],
      answers: [0],
      explain: "Nhân viên truy cập dữ liệu nội bộ của chính công ty mình → intranet. Extranet dành cho đối tác bên ngoài; Internet là mạng công cộng; LAN là phạm vi vật lý cục bộ chứ không mô tả loại dịch vụ truy cập."
    },
    {
      n: 21,
      text: "How can you view the ARP table on a Windows PC?",
      options: ["arp -a", "show arp", "netstat -r", "ipconfig /all"],
      answers: [0],
      explain: "arp -a liệt kê toàn bộ entry ARP cache của máy Windows. show arp dùng trên Cisco IOS; netstat -r in bảng định tuyến."
    },
    {
      n: 22,
      text: "Which statement describes the treatment of ARP requests on the local link?",
      options: ["They must be forwarded by all routers on the local network.", "They are received and processed by every device on the local network.", "They are dropped by all switches on the local network.", "They are received and processed only by the target device."],
      answers: [1],
      explain: "ARP request được gửi broadcast MAC (FFFF.FFFF.FFFF), nên mọi thiết bị trong cùng link đều nhận và xử lý frame (cập nhật cache ARP của máy gửi); chỉ thiết bị sở hữu IP được hỏi mới trả lời bằng reply unicast. Router không forward ARP request sang mạng khác."
    },
    {
      n: 23,
      text: "What protocol does IPv6 use for address resolution, replacing the function of ARP in IPv4?",
      options: ["DHCPv6", "ICMPv6 Neighbor Discovery (ND)", "Address Resolution Protocol version 6 (ARPv6)", "Router Solicitation (RS)"],
      answers: [1],
      explain: "IPv6 dùng ICMPv6 Neighbor Discovery: Neighbor Solicitation hỏi, Neighbor Advertisement trả lời — thay thế hoàn toàn ARP của IPv4. Không tồn tại 'ARPv6'; RS chỉ là thông điệp tìm router."
    },
    {
      n: 24,
      text: "Which two multicast addresses are commonly joined by IPv6 hosts and routers?",
      options: ["ff02::1", "ff02::2", "ff00::1", "ff01::1"],
      answers: [0, 1],
      explain: "ff02::1 là nhóm all-nodes (mọi IPv6 host trong link đều tham gia), ff02::2 là all-routers (mọi router tham gia). Cả hai thuộc scope link-local (ff02::). ff00::1/ff01::1 không phải nhóm mặc định mà thiết bị tự gia nhập."
    },
    {
      n: 25,
      text: "Which two types of IPv6 messages are used in place of ARP for address resolution?",
      options: ["Anycast", "Broadcast", "echo reply", "echo request", "neighbor solicitation", "neighbor advertisement"],
      answers: [4, 5],
      explain: "ND dùng Neighbor Solicitation (hỏi 'ai giữ địa chỉ này?') và Neighbor Advertisement (trả lời 'là tôi, đây MAC của tôi') thay cho ARP request/reply của IPv4. Echo request/reply là ICMP ping; IPv6 không có broadcast."
    },
    {
      n: 26,
      text: "Which method allows a device to obtain an IPv6 address dynamically without the need for a DHCP server?",
      options: ["Stateful DHCPv6", "Stateless Address Autoconfiguration (SLAAC)", "Manual Configuration", "NAT64"],
      answers: [1],
      explain: "SLAAC cho thiết bị tự cấu hình địa chỉ từ prefix trong Router Advertisement, không cần DHCPv6 server. Stateful DHCPv6 vẫn cần server cấp phát và theo dõi."
    },
    {
      n: 27,
      text: "Which IPv6 address type is used for communication within a single network segment and cannot be routed?",
      options: ["Global Unicast Address (GUA)", "Link-Local Address (LLA)", "Unique Local Address (ULA)", "Multicast Address"],
      answers: [1],
      explain: "LLA (fe80::/10) chỉ có hiệu lực trên một link, router không định tuyến các địa chỉ này sang link khác. GUA/ULA có thể định tuyến; multicast là giao tiếp một-đến-nhiều."
    },
    {
      n: 28,
      text: "Which statement about IPv6 addresses is true?",
      options: ["IPv6 addresses are expressed in decimal format.", "IPv6 addresses use 128 bits and are expressed in hexadecimal format.", "IPv6 addresses use 32 bits and are expressed in binary format.", "IPv6 addresses are composed of two parts: network and host."],
      answers: [1],
      explain: "IPv6 = 128 bit, biểu diễn thập lục phân gồm 8 nhóm. Dạng 32-bit thập phân là IPv4; cấu trúc IPv6 gồm nhiều phần (prefix, subnet ID, interface ID) chứ không chỉ network/host."
    },
    {
      n: 29,
      text: "This is a function of the OSI session layer.",
      options: ["compress and decompress data", "provide an interface between applications", "format data for the application layer", "exchange of information to initiate dialog between peers"],
      answers: [3],
      explain: "Tầng session khởi tạo, duy trì và kết thúc các phiên hội thoại (dialog) giữa các ứng dụng, kể cả checkpoint phục hồi. Nén dữ liệu và định dạng thuộc tầng presentation; giao diện ứng dụng thuộc tầng application."
    },
    {
      n: 30,
      text: "Which of these addresses is the shortest abbreviation for the IP address: 3FFE:1044:0000:0000:00AB:0000:0000:0057?",
      options: ["3FFE:1044::AB::57", "3FFE:1044::00AB::0057", "3FFE:1044:0:0:AB::57", "3FFE:1044:0:0:00AB::0057", "3FFE:1044:0000:0000:00AB::57", "3FFE:1044:0000:0000:00AB::0057"],
      answers: [2],
      explain: "Quy tắc rút gọn: bỏ số 0 ở đầu mỗi nhóm và dùng '::' duy nhất một lần cho chuỗi nhóm 0 dài nhất. 3FFE:1044:0:0:AB::57 là biểu diễn hợp lệ và ngắn nhất trong các lựa chọn (hai lựa chọn đầu sai vì dùng hai lần '::')."
    },
    {
      n: 31,
      text: "Which statement accurately describes a TCP/IP encapsulation process when a PC is sending data to the network?",
      options: ["Data is sent from the internet layer to the network access layer.", "Packets are sent from the network access layer to the transport layer.", "Segments are sent from the transport layer to the internet layer.", "Frames are sent from the network access layer to the internet layer."],
      answers: [2],
      explain: "Khi gửi, dữ liệu đi từ trên xuống: transport tạo segment rồi chuyển xuống internet layer để đóng gói thành packet — 'segments are sent from the transport layer to the internet layer' là mô tả đúng. Chiều ngược lại (frames/packets đi lên) sai với việc gửi dữ liệu."
    },
    {
      n: 32,
      text: "A web client is receiving a response for a web page from a web server. From the perspective of the client, what is the correct order of the protocol stack that is used to decode the received transmission?",
      options: ["Ethernet, IP, TCP, HTTP", "HTTP, TCP, IP, Ethernet", "Ethernet, TCP, IP, HTTP", "HTTP, Ethernet, IP, TCP"],
      answers: [0],
      explain: "De-encapsulation phía client: bóc Ethernet frame trước, rồi IP packet, rồi TCP segment, cuối cùng nhận dữ liệu HTTP — đúng thứ tự tầng 2 → 3 → 4 → 7."
    },
    {
      n: 33,
      text: "Which name is assigned to the transport layer PDU?",
      options: ["bits", "data", "frame", "packet", "segment"],
      answers: [4],
      explain: "PDU theo tầng: application = data, transport = segment, network = packet, data link = frame, physical = bits."
    },
    {
      n: 34,
      text: "Which statement describes the half-duplex mode of data transmission?",
      options: ["Data that is transmitted over the network can only flow in one direction.", "Data that is transmitted over the network flows in both directions at the same time.", "Data that is transmitted over the network flows in one direction to many different destinations simultaneously.", "Data that is transmitted over the network flows in one direction at a time."],
      answers: [3],
      explain: "Half-duplex cho phép truyền hai chiều nhưng tại một thời điểm chỉ đi một chiều (walkie-talkie). One-way bất kỳ là simplex; hai chiều đồng thời là full-duplex."
    },
    {
      n: 35,
      text: "UDP and TCP belong to which layer of the TCP/IP protocol?",
      options: ["Application", "Transport", "Internet", "Network access"],
      answers: [1],
      explain: "Cả TCP lẫn UDP là giao thức tầng Transport của TCP/IP, cung cấp truyền thông từ ứng dụng-đến-ứng dụng qua cơ chế số cổng."
    },
    {
      n: 36,
      text: "When 2 or more bits in a data unit has been changed during the transmission, the error is called :",
      options: ["random error", "burst error", "inverted error", "double error"],
      answers: [1],
      explain: "Burst error là lỗi làm hỏng nhiều bit liên tiếp (≥2 bit) trong một đơn vị dữ liệu, thường do nhiễu kéo dài một khoảng thời gian. Single-bit error chỉ hỏng 1 bit."
    },
    {
      n: 37,
      text: "A university's wireless network experiences frequent collisions due to multiple devices accessing the shared medium. The network administrator is analyzing contention-based access methods to improve performance. Which of the following are features of the CSMA/CA method used in the university's 802.11 WLAN?",
      options: ["Devices include a duration field to reserve the medium", "Devices transmit a frame only when the medium is idle", "Devices wait a random period after detecting a collision", "Devices operate in full-duplex mode to avoid collisions"],
      answers: [0, 1],
      explain: "CSMA/CA: thiết bị cảm nhận carrier và chỉ phát khi medium rỗi (carrier sense), đồng thời dùng trường Duration/NAV để 'đặt chỗ' medium cho phiên truyền. Không phát hiện va chạm như CSMA/CD (WLAN là half-duplex, không full-duplex), mà cố tránh va chạm trước."
    },
    {
      n: 38,
      text: "Which two fields are the same in a TCP and UDP header? (Choose two.)",
      options: ["Control bits", "Destination port number", "Sequence number", "Source port number", "Well-known port number"],
      answers: [1, 3],
      explain: "Header TCP và UDP đều có Source port và Destination port để nhận diện phiên ứng dụng. Sequence number và control bits (flags) chỉ có trong TCP; 'well-known port' là phân loại cổng, không phải trường trong header."
    },
    {
      n: 39,
      text: "What is the primary responsibility of the transport layer in the OSI model?",
      options: ["Routing data packets between networks", "Managing logical communications between applications on different hosts", "Defining physical media and connections", "Encrypting data before transmission"],
      answers: [1],
      explain: "Transport quản lý truyền thông logic (end-to-end, port-to-port) giữa các tiến trình ứng dụng trên các host khác nhau. Định tuyến là của network, media thuộc physical, mã hóa không phải chức năng chuẩn của transport."
    },
    {
      n: 40,
      text: "What is the primary responsibility of the transport layer?",
      options: ["Formatting, or presenting, data into a compatible format.", "Tracking individual conversations and segmenting data.", "Translating domain names to IP addresses.", "Securing the network from external threats."],
      answers: [1],
      explain: "Hai nhiệm vụ cốt lõi của transport: theo dõi từng phiên hội thoại riêng biệt (multiplexing bằng số cổng) và phân đoạn dữ liệu ứng dụng thành segment. Định dạng dữ liệu là của presentation, DNS là dịch vụ ứng dụng."
    },
    {
      n: 41,
      text: "What is the correct order of the TCP three-way handshake?",
      options: ["ACK, SYN, SYN-ACK", "SYN, SYN-ACK, ACK", "SYN-ACK, ACK, FIN", "FIN, ACK, SYN"],
      answers: [1],
      explain: "Client gửi SYN, server trả SYN-ACK, client xác nhận ACK — chuỗi SYN → SYN-ACK → ACK thiết lập kết nối TCP. FIN dùng để đóng kết nối, không thuộc handshake."
    },
    {
      n: 42,
      text: "Which statement describes a feature of the IP protocol?",
      options: ["IP encapsulation is modified based on network media.", "IP relies on Layer 2 protocols for transmission error control.", "MAC addresses are used during the IP packet encapsulation.", "IP relies on upper layer services to handle situations of missing or out-of-order packets."],
      answers: [3],
      explain: "IP là best-effort, không xử lý mất gói hay sai thứ tự — tầng trên (TCP) lo việc này. IP độc lập media nên không đổi encapsulation theo media; MAC do data link thêm vào khi đóng frame."
    },
    {
      n: 43,
      text: "(Choose 1 answer) Refer to the exhibit. Match the packets with their destination IP address to the exiting interfaces on the router. (Not all targets are used.)<table class=\"mini-table\"><tr><td>A. 172.17.10.5</td><td>1. FastEthernet0/0</td></tr><tr><td>B. 172.17.12.10</td><td>2. FastEthernet0/1</td></tr><tr><td>C. 172.17.14.8</td><td>3. FastEthernet1/0</td></tr><tr><td>D. 172.17.8.20</td><td>4. FastEthernet1/1</td></tr><tr><td>E. 172.17.6.15</td><td>5. Serial0/0/0</td></tr><tr><td></td><td>6. The packet is dropped.</td></tr></table>",
      image: "q43.png",
      imageAlt: "Bảng định tuyến: 10.1.0.0/24 nối Serial0/0/0; các subnet 172.17.6.0, 172.17.10.0, 172.17.12.0 học qua OSPF; 172.17.14.0/24 nối FastEthernet0/1; các mạng 192.168.3.0, 192.168.4.0, 192.168.5.0/24 kết nối trực tiếp; default route ra Serial0/0/0",
      options: ["1E-2C-3B-4A-5D", "1E-2B-3C-4A-5D", "1E-2C-3A-4B-5D", "1E-2C-3B-4D-5A"],
      answers: [0],
      explain: "Tra bảng: 172.17.6.15 → O 172.17.6.0 → FE0/0 (E→1); 172.17.14.8 → directly connected FE0/1 (C→2); 172.17.12.10 → O 172.17.12.0 → FE1/0 (B→3); 172.17.10.5 → O 172.17.10.0 → FE1/1 (A→4); 172.17.8.20 không khớp subnet nào → default route → Serial0/0/0 (D→5). Vậy 1E-2C-3B-4A-5D."
    },
    {
      n: 44,
      text: "What are the two most commonly referenced fields in an IPv4 packet header that indicate where the packet is coming from and where it is going? (Choose two.)",
      options: ["Destination IP address", "Protocol", "Time to live", "Differentiated Service (DS)", "Source IP address"],
      answers: [0, 4],
      explain: "Hai trường xác định điểm đi và điểm đến của packet là Source IP address và Destination IP address. TTL, Protocol, DS là các trường điều khiển khác trong header."
    },
    {
      n: 45,
      text: "Which OSI layer sends segments to be encapsulated in an IPv4 or IPv6 packet?",
      options: ["Data link layer", "Network layer", "Transport layer", "Session layer"],
      answers: [2],
      explain: "Transport layer sinh segment; segment này được tầng network đóng gói vào packet IPv4/IPv6. Data link nhận packet để đóng thành frame."
    },
    {
      n: 46,
      text: "Which Cisco IOS command mode allows access to all commands and features and is identified by a prompt ending in the # symbol?",
      options: ["User EXEC Mode", "Privileged EXEC Mode", "Global Configuration Mode", "Interface Configuration Mode"],
      answers: [1],
      explain: "Privileged EXEC mode (Router#) cho phép truy cập đầy đủ mọi lệnh: xem cấu hình, restart, lưu cấu hình và vào các mode cấu hình. User EXEC (Router&gt;) chỉ có lệnh xem cơ bản; mode cấu hình có prompt kèm (config)."
    },
    {
      n: 47,
      text: "Which access method would be most appropriate if you were in the equipment room with a new switch that needs to be configured?",
      options: ["Console", "Telnet/SSH", "Aux"],
      answers: [0],
      explain: "Switch mới chưa có địa chỉ IP nên Telnet/SSH không thể dùng; đứng ngay cạnh thiết bị thì console là lựa chọn nhanh nhất — truy cập out-of-band trực tiếp qua cáp console. Aux dùng qua modem, hiếm khi cần."
    },
    {
      n: 48,
      text: "Which access method would be the most appropriate in-band access to the IOS over a network connection?",
      options: ["Console", "Telnet/SSH", "Aux"],
      answers: [1],
      explain: "In-band nghĩa là truy cập qua chính mạng IP đang hoạt động — Telnet/SSH kết nối tới địa chỉ IP của thiết bị qua network. Console/Aux là truy cập out-of-band, không phụ thuộc mạng."
    },
    {
      n: 49,
      text: "Which of the following is a private IP address according to RFC 1918?(Select TWO answers)",
      options: ["10.0.0.25", "100.64.0.1", "172.31.200.10", "192.169.1.5"],
      answers: [0, 2],
      explain: "RFC 1918 định nghĩa 3 dải private: 10.0.0.0/8, 172.16.0.0/12 (gồm 172.31.x.x) và 192.168.0.0/16. 10.0.0.25 và 172.31.200.10 thuộc hai dải này. 100.64.0.1 là CGNAT (RFC 6598), còn 192.169.1.5 là địa chỉ public (dải private là 192.168, không phải 192.169)."
    },
    {
      n: 50,
      text: "Which command is used to secure privileged EXEC mode on a switch?",
      options: ["password", "enable secret", "login", "service password-encryption"],
      answers: [1],
      explain: "enable secret đặt mật khẩu (được hash MD5) để vào privileged EXEC mode — bảo vệ tầng quản trị cao nhất. password/login dùng cho line (console/vty); service password-encryption chỉ che mật khẩu trong file cấu hình."
    }
  ]
});
