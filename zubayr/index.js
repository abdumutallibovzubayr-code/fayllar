// 1. Mobil menyuni ochish va yopish
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Mobil menyudagi havolani bosganda menyuni yopish
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// 2. Lead Form (Ro'yxatdan o'tish) yuborilgandagi holatni boshqarish
const leadForm = document.getElementById('lead-form');
const successMessage = document.getElementById('success-message');

leadForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Sahifa yangilanishining oldini olish

    // Ma'lumotlarni olish (kerak bo'lsa API ga yuborish mumkin)
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const course = document.getElementById('course').value;

    console.YangiAriza = { name, phone, course };

    // Formani tozalash
    leadForm.reset();

    // Muvaffaqiyatli xabarni ko'rsatish
    successMessage.classList.remove('hidden');

    // 4 sekunddan so'ng xabarni yashirish
    setTimeout(() => {
        successMessage.classList.add('hidden');
    }, 4000);
});