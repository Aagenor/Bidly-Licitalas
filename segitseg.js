function toggleFaq(element) {
    let answer = element.querySelector('.faq-answer');
    let icon = element.querySelector('.faq-question span');
    
    if (element.classList.contains('open')) {
        element.classList.remove('open');
        icon.textContent = '▼';
    } else {
        element.classList.add('open');
        icon.textContent = '▲';
    }
}
