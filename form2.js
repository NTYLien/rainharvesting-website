// document.querySelector('.submit-button').addEventListener('click', function(event) {
//     var firstName = document.querySelector('.first-name').value;
//     var lastName = document.querySelector('.last-name').value;
//     var email = document.querySelector('.email').value;
//     var message = document.querySelector('.message').value;
  
//     if (!firstName || !lastName || !email || !message) {
//       alert('Vui lòng điền vào tất cả các trường bắt buộc.');
//       event.preventDefault(); // Ngăn không cho form được gửi đi
//     }
//   });
document.querySelectorAll('.input-field').forEach(function(field) {
    field.addEventListener('input', function() {
      if (!this.value.trim()) {
        this.style.borderColor = 'red';
      } else {
        this.style.borderColor = 'initial';
      }
    });
  });
  