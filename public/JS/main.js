let cursor = document.getElementById('cursor')
setTimeout(() => {
    document.addEventListener('mousemove', (e) => {
        let x = e.clientX
        let y = e.clientY
        cursor.style.left = x + 'px'
        cursor.style.top = y + 'px'
    })
}, 100);

let header = document.querySelector('#header')
header.classList.add('open')

// nav Menu on phone

let brgIcon = document.querySelector('header nav .brgIcon')
let menu = document.querySelector('header nav ul')

brgIcon.addEventListener('mouseover', () => {
    menu.classList.toggle('active')
})
brgIcon.addEventListener('mouseout', () => {
    menu.classList.remove('active')
})