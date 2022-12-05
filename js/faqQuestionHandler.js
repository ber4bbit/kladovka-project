const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    item.addEventListener('click', () => {
        item.childNodes[3].classList.toggle('hidden')

        item.childNodes[3].style.opacity == '0'
            ? item.childNodes[3].style.opacity = '1'
            : item.childNodes[3].style.opacity == '1'
                ? item.childNodes[3].style.opacity = '0'
                : null


        item.childNodes[1].children[1].innerText == '+'
            ? item.childNodes[1].children[1].innerText = '-'
            : item.childNodes[1].children[1].innerText == '-'
                ? item.childNodes[1].children[1].innerText = '+'
                : null
    })
})