// ====== Contact Form Validation (Email only) ======
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // يمنع الفورم من الإرسال الافتراضي

    const email = document.getElementById('email').value.trim();

    // التحقق من صحة الايميل
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address!');
        return;
    }

    alert('Thank you! Your email is valid.');
    this.reset();
});

// ====== Testimonial Carousel Pause on Hover ======
const carouselElement = document.querySelector('#testimonialCarousel');
const carouselInstance = new bootstrap.Carousel(carouselElement, {
    interval: 3000, // كل 3 ثواني يتحرك
    wrap: true,     // يرجع أول صورة بعد آخر واحدة
    pause: 'hover'  // لما المستخدم يحط الماوس، الكاروسيل يوقف
});