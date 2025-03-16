// Обработка фиксированного хедера при скролле
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const body = document.body;
    
    if (window.scrollY > 0) { // Можете настроить значение, при котором хедер становится фиксированным
        header.classList.add('fixed');
        body.classList.add('header-fixed');
    } else {
        header.classList.remove('fixed');
        body.classList.remove('header-fixed');
    }
}); 