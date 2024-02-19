let partIcons = document.querySelectorAll('.partIcons .partIcon')
let partations = document.querySelectorAll(".partations .partation")
partIcons.forEach(particon => {
    particon.addEventListener('click', () => {
        partIcons.forEach(particon => {
            particon.classList.remove('selected')
        })
        partations.forEach(partation => {
            partation.classList.remove('active')
        })
        document.getElementById(particon.dataset.partation).classList.add('active')
        particon.classList.add('selected')
    })
})