let homeBtn = document.querySelector('.homeBtn')
homeBtn.addEventListener('click', () => {
    window.location.href = 'home.html'
})

let t1 = document.querySelector('.t1')
let t2 = document.querySelector('.t2')
let t3 = document.querySelector('.t3')
let t4 = document.querySelector('.t4')

let c1 = document.querySelector('.c1')
let c2 = document.querySelector('.c2')




let first = new Date('2026-07-8 16:00:00').getTime()
let sec = new Date('2026-07-16 16:30:00').getTime()
let trd = new Date('2026-07-25 15:45:00').getTime()
let frth = new Date('2026-07-30 17:00:00').getTime()


function timer(t) {
    let now = new Date().getTime()
    let d = t - now

    let days = Math.floor(d/(1000*60*60*24))
    let hours = Math.floor(d % (1000*60*60*24)/ (1000*60*60))
    let minutes = Math.floor(
            (d % (1000*60*60))
            /(1000*60) )
    let secs = Math.floor(
            (d % (1000*60))
            /1000)
    return `${days}d ${hours}h ${minutes}m ${secs}s`}


setInterval(() => {
let f3 = timer(trd)
t3.innerHTML = f3
let f4 = timer(frth)
t4.innerHTML = f4


},1000)

let hiddenDiv = document.querySelector('.hiddenDiv')
let cancel = document.querySelector('.cancel')



c1.addEventListener('click', () => {
    hiddenDiv.style.display = 'flex'
    })

c2.addEventListener('click', () => {
    window.location.href = 'stars.html'
} )
    


cancel.addEventListener('click',() => {
    hiddenDiv.style.display = 'none'
})

let agreeBtn = document.querySelector('.agree')
agreeBtn.addEventListener('click', () => {
    window.location.href = 'poem.html'
})