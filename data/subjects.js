// Danh sách môn học — để thêm môn mới, bổ sung một object vào mảng này
// và tạo file đề thi trong data/exams/ rồi include nó trong index.html.
window.EXAMAPP_SUBJECTS = [
  {
    id: "ELC201",
    name: "Electronic Devices",
    nameVi: "Thiết bị điện tử",
    icon: "🔌",
    description: "Bán dẫn, diode, chỉnh lưu, BJT, JFET, MOSFET, phân cực, op-amp, comparator, bộ lọc, PLL, 555 timer."
  },
  {
    id: "NWC204",
    name: "Network Communication",
    nameVi: "Truyền thông mạng",
    icon: "🌐",
    description: "Mô hình OSI/TCP-IP, địa chỉ IPv4/IPv6, subnetting, ARP, Ethernet, switch/router IOS, media truyền dẫn, TCP/UDP, ICMP, NAT, soạn thảo mạng đáng tin cậy."
  },
  {
    id: "OSG202",
    name: "Operating Systems",
    nameVi: "Hệ điều hành",
    icon: "💻",
    description: "Tiến trình/thread, lập lịch CPU, deadlock, quản lý bộ nhớ (paging, segmentation, bộ nhớ ảo), file system, RAID, đĩa, I/O, virtualization/hypervisor."
  }
];
