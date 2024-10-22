
function handle_submit(event){
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const linkedin = document.getElementById('linkedin').value;
    const portfolio = document.getElementById('portfolio').value;
    const phone = document.getElementById('subject').value;
    const techstack = document.getElementById('techstack').value;
    const resume_file = document.getElementById('resume').value;
    const experience = document.getElementById('experience').value;

const templateParams = {
    from_name: name,
    from_email: email,
    from_phone: phone,
    from_linkedin: linkedin,
    from_portfolio: portfolio,
    techstack: techstack,
    from_resume: resume_file,
    from_experience: experience
};

 emailjs.send('service_p4wg4vn', 'template_600vabu', templateParams)
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

