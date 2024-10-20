
      document.addEventListener("DOMContentLoaded", (event) => {
  gsap.from("#heading", {
    scale: 2,
    duration: 1,
    ease: "bounce.out",
  });

  gsap.to("#heading", {
    scale: 1,
    duration: 1,
    ease: "bounce.out",
  });
});


function handle_submit(){
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject =document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  const templateParams = {
    from_name : name,
    from_email : email,
    from_subject : subject,
    from_message : message
  }
  emailjs.send('service_9tckxf4','template_53bc3u8',templateParams)
  .then(function(response) {
    console.log('SUCCESS!', response.status, response.text);
    alert('Email sent successfully!');
    window.location.reload();
}, function(error) {
    console.log('FAILED...', error);
    alert('Failed to send email.');
});
return false; 
}
