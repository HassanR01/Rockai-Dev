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