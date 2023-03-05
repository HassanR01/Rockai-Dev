document.addEventListener('mousemove' , function (e) {
    this.querySelectorAll('.layer').forEach(layer => {
        let speed = layer.dataset.speed
        let x = (window.innerWidth - e.pageX*speed)/100
        let y = (window.innerHeight - e.pageY*speed)/100

        layer.style.transform = `translate(${x}px , ${y}px)`

    })
})

document.addEventListener("scroll" , (e) => {
    document.querySelectorAll(".layer").forEach(layer => {
        let speed = layer.dataset.speed
        let moveing = (window.scrollY - speed)/5
        layer.style.transform = `translate(0,${moveing}px)`
    })
})