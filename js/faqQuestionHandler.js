const faqBtns = document.querySelectorAll('.faq-btn');

faqBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.parentElement.parentElement.childNodes[3].classList.toggle('hidden');
        btn.classList.toggle('px-2')
        btn.classList.toggle('px-3')

        btn.innerText == '+'
            ? btn.innerText = '-'
            : btn.innerText == '-'
                ? btn.innerText = '+'
                : null
    })
})