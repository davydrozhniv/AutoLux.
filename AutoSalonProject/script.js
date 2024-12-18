const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const indicators = document.querySelectorAll('.indicator');

let currentIndex = 0;

// Оновити положення слайдів
function updateSlider() {
    slides.style.transform = `translateX(-${currentIndex * 100}vw)`;
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
}

// Наступний слайд
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slide.length;
    updateSlider();
});

// Попередній слайд
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slide.length) % slide.length;
    updateSlider();
});

// Індикатори
indicators.forEach((indicator) => {
    indicator.addEventListener('click', (e) => {
        currentIndex = parseInt(e.target.getAttribute('data-slide'));
        updateSlider();
    });
});

// Автоматична зміна слайдів
setInterval(() => {
    currentIndex = (currentIndex + 1) % slide.length;
    updateSlider();
}, 5000);

function showDetails(element) {
    const popup = document.getElementById('details-popup');
    const title = element.querySelector('h3').innerText;
    const price = element.querySelector('.car-price span').innerText;
    const description = 'Детальна інформація про авто: передній привід, автоматична трансмісія, електро або бензин.'; 

    document.getElementById('popup-title').innerText = title;
    document.getElementById('popup-description').innerText = description;
    document.getElementById('popup-price').innerText = `Ціна: ${price}`;

    popup.classList.add('active');
}

function hideDetails() {
    const popup = document.getElementById('details-popup');
    popup.classList.remove('active');
}

function showDetails(element) {
    const popup = document.getElementById('details-popup');
    const title = element.querySelector('h3').innerText;
    const price = element.querySelector('.car-price span').innerText;
    const description = 'Детальна інформація про авто: передній привід, автоматична трансмісія, електро або бензин.'; 

    document.getElementById('popup-title').innerText = title;
    document.getElementById('popup-description').innerText = description;
    document.getElementById('popup-price').innerText = `Ціна: ${price}`;

    popup.classList.add('active');
}

function hideDetails() {
    const popup = document.getElementById('details-popup');
    popup.classList.remove('active');
}
function showDetails(element) {
    const popup = document.getElementById('details-popup');
    const title = element.querySelector('h3').innerText;
    const price = element.querySelector('.car-price span').innerText;
    const description = 'Детальна інформація про авто: передній привід, автоматична трансмісія, електро або бензин.'; 

    document.getElementById('popup-title').innerText = title;
    document.getElementById('popup-description').innerText = description;
    document.getElementById('popup-price').innerText = `Ціна: ${price}`;

    popup.classList.add('active');
}

function hideDetails() {
    const popup = document.getElementById('details-popup');
    popup.classList.remove('active');
}
// Функція для додавання в обрані
function toggleFavorite(element) {
    const isUserLoggedIn = false; // Імітуємо, що користувач не авторизований

    if (!isUserLoggedIn) {
        openPopup(); // Відкриваємо спливаюче вікно
        return;
    }

    element.classList.toggle('active'); // Додаємо або видаляємо клас активного сердечка
}

// Відкрити спливаюче вікно
function openPopup() {
    const popup = document.getElementById('auth-popup');
    popup.style.display = 'block';
}

// Закрити спливаюче вікно
function closePopup() {
    const popup = document.getElementById('auth-popup');
    popup.style.display = 'none';
}

// Перехід до сторінки авторизації
function redirectToLogin() {
    window.location.href = 'login.html'; // Перехід на сторінку авторизації
}
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!username || !email || !password) {
        alert('Будь ласка, заповніть усі поля.');
        return;
    }

    // Імітація успішної реєстрації
    showSuccessMessage();
});

function showSuccessMessage() {
    const successMessage = document.getElementById('success-message');
    successMessage.style.display = 'block';
}

function closeSuccessMessage() {
    const successMessage = document.getElementById('success-message');
    successMessage.style.display = 'none';
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const emailOrPhone = document.getElementById('emailOrPhone').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!emailOrPhone || !password) {
        alert('Будь ласка, заповніть усі поля.');
        return;
    }

    // Імітуємо успішний вхід
    alert('Ви успішно увійшли до системи!');
    window.location.href = 'index.html'; // Перекидаємо користувача на головну сторінку
});

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!username || !email || !password) {
        alert('Будь ласка, заповніть усі поля.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Будь ласка, введіть правильну електронну пошту.');
        return;
    }

    showSuccessMessage();
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showSuccessMessage() {
    const successMessage = document.getElementById('success-message');
    successMessage.style.display = 'block';
}

function closeSuccessMessage() {
    const successMessage = document.getElementById('success-message');
    successMessage.style.display = 'none';
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show'); 
        } 
    });
});

const elements = document.querySelectorAll('.offer-item');
elements.forEach(element => observer.observe(element));

// Відкриваємо модальне вікно
function openModal() {
    document.getElementById('modal').style.display = 'block';
}

// Закриваємо модальне вікно
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Закриття модального вікна при натисканні за межами вікна
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}



