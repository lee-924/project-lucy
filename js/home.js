let backToIntro = document.querySelector('.backToIntro')

backToIntro.addEventListener('click', () => {
    window.location.href = 'index.html'
})

let b1 = document.querySelector('.b1')
b1.addEventListener('click', () => {
    window.location.href = 'everything.html'
})

let b2 = document.querySelector('.b2')
b2.addEventListener('click', () => {
    window.location.href = 'Surprises.html'
})

let b3 = document.querySelector('.b3')
b3.addEventListener('click', () => {
    window.location.href = 'us.html'
})

let timeDate = document.querySelector('.timeDate')
let timeTime = document.querySelector('.timeTime')

setInterval(() => {
    let d = new Date()
    let nowTime = d.toLocaleTimeString('en-US',{hour12: false})
    let nowDate = d.toLocaleDateString()
    
            timeTime.innerHTML = nowTime
            timeDate.innerHTML = nowDate
},1000)