const checkbox = document.querySelectorAll('.todo__checkbox');

checkbox.forEach(item => {
    item.addEventListener('click', () => {
        item.parentElement.lastElementChild.value ? item.classList.toggle('complete') : alert('Uzupełnij to pole!');
    })
})