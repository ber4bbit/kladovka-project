const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    item.addEventListener('click', () => {
        // item.childNodes[3].classList.toggle('invisible')

        item.childNodes[3].style.opacity == '0'
            ? item.childNodes[3].style.opacity = '1'
            : item.childNodes[3].style.opacity == '1'
                ? item.childNodes[3].style.opacity = '0'
                : null

        item.childNodes[3].style.height == '0px'
            ? item.childNodes[3].style.height = '10rem'
            : item.childNodes[3].style.height == '10rem'
                ? item.childNodes[3].style.height = '0px'
                : null

        item.childNodes[1].children[1].innerText == '+'
            ? item.childNodes[1].children[1].innerText = '-'
            : item.childNodes[1].children[1].innerText == '-'
                ? item.childNodes[1].children[1].innerText = '+'
                : null
    })
})