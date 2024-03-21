function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;
    // ... thêm các trường cần kiểm tra
  
    if (name && email && address) {
      // Nếu tất cả các trường đã được nhập
      window.location.href = 'confirmation_page.html'; // Chuyển hướng đến trang xác nhận
    } else {
      alert('Please enter complete information before payment!');
    }
  }
  
  
document.getElementById('paymentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Xác thực các trường thông tin
    // Xử lý thanh toán
    alert('payment has been made!');
});
