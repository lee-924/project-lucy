let homeBtn = document.querySelector('.homeBtn')
homeBtn.addEventListener('click', () => {
    window.location.href = 'home.html'
})

let next = document.querySelector('.next')
let back = document.querySelector('.back')
let top3 = document.querySelector('.top3')



let top3Yap = ['3. The night when roman passed away lol, I think it was the first time ever you dared to stay awake and text with lenses on, but most importantly shared an emtional time with me, lol I dont think I was much helpful but it meant alot to me that time. ','2. The first time ever you shared back a note. This is my favourite because thats when I realised, "wait...they can give effort back too?", lol I was just surprised that you would do it back, again...means alotttt danke danke!!', '1. Haha.. obviously the moment we "revived" each other for the first time. I dont think I can even describe what I was feeling or thinking that time, Lets just say we had an amazing beginning, no confessions, no ilys, just straight up...ki-- hehe I feel shy to even type it.']
let count = 1
next.addEventListener('click', () => {
    count+=1
    if (count===1) {
        top3.innerHTML = top3Yap[0]
        next.style.display = 'block'
    }
    else if (count===2) {
        top3.innerHTML = top3Yap[1]
        next.style.display = 'block'
        back.style.display = 'block'}
    else if (count===3) {
        top3.innerHTML = top3Yap[2]
        next.style.display = 'none'
        
    }
})
back.style.display = 'none'

back.addEventListener('click', () => {
    count-=1
    if (count===1) {
        top3.innerHTML = top3Yap[0]
        back.style.display = 'none'
    }
    else if (count===2) {
        top3.innerHTML = 
        top3Yap[1]
    back.style.display = 'block'
    next.style.display = 'block'}
    else if (count===3) {
        top3.innerHTML = top3Yap[2]
        back.style.display = 'block'
    
    }
})


let imgLockInput = document.querySelector('.imgLockInput')
let imgLock = document.querySelector('.imgLock')
let imgLockBtn = document.querySelector('.imgLockBtn')

imgLockBtn.addEventListener('click', () => {
    if (imgLockInput.value==='liebe') {
        imgLock.style.display = 'none'
    }
    else {
        window.alert('wrong code')
        imgLockInput.value = ''
    }
})

let card1div = document.querySelector('.card1div')
let cancel = document.querySelector('.cancel')
let c1 = document.querySelector('.c1')

c1.addEventListener('click', () => {
    card1div.style.display = 'flex'

    cancel.addEventListener('click', () => {
        card1div.style.display = 'none'
    }
    )
})

let dTimer = document.querySelector('.dTimer')

let dateOfdate = new Date('2026-06-02 04:58:00').getTime()

setInterval(() => {
    let now = new Date().getTime()

    let c = now - dateOfdate
    let days = Math.floor(c/(1000*60*60*24))
     let hours = Math.floor(c % (1000*60*60*24)/ (1000*60*60))
    let minutes = Math.floor(
            (c % (1000*60*60))
            /(1000*60) )
    let secs = Math.floor(
            (c % (1000*60))
            /1000)

    
    dTimer.innerHTML = `${days}d ${hours}hr ${minutes}m ${secs}s`
},1000)

