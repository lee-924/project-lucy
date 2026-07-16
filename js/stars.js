let homeBtn = document.querySelector('.homeBtn')
homeBtn.addEventListener('click', () => {
    window.location.href = 'home.html'
})

let count = 0
let list = ['you are beautiful','you are kind','you are patient','you are gorgeous','you are god gifted','you are pretty', 'you are delightful', 'you deserve happiness','you are my lucky charm','your my honey','your my sweetheart','you are hawt','your my dawling','your my heart','your my life','your my home','meaow','quack quack','your my peace','your magnificent','your an angel','your my pear juice','your my queen','your my dream girl','your my love','your very lovely','you are very sweet','you have a pure soul','you deserve the world','you are wonderful','you are fantastic','you are funny','your my rApenzel','your my princess','your my wife','your my everything','💚💚💚💚💚💚💚','mwaah','lucylee✨💚','your the sweetest','testing','I love you so much','your the loveliest','I adore you','Please never leave me','star forever','🦆🦆','😼😼','mwahhmwahh','hope you have a great life','jcnslvbff hehe']
console.log(list.length)

let starDiv = document.querySelector('.starDiv')
function generateStars() {

    const inter = setInterval(() => {
        count++
        if(count===50) {
            clearInterval(inter)
        }

        let ranLeft = String(Math.floor(Math.random() * (95 - 5 +1))+5)+'%'
        let ranTop = Math.floor(Math.random() * (95 - 5 +1))+5

        let ranHeight = String(Math.floor(Math.random() * (3 - 0.5 +1))+0.5)+'px'
        let ranWidth = String(Math.floor(Math.random() * (3 - 0.5 +1))+0.5)+'px'
        
        let twinkleDur = String(Math.random() * 3+2)+'s'
        let twinkleDelay = String(Math.random() * 5)+'s'

        let staryDiv = document.createElement('div')
        let starDiv = document.createElement('div')
    staryDiv.className = 'star'
    staryDiv.style.height = ranHeight
    staryDiv.style.width = ranWidth
    staryDiv.style.top = String(ranTop)+'%'
    staryDiv.style.left = ranLeft
    staryDiv.style.animationDuration = twinkleDur
    staryDiv.style.animationDelay = twinkleDelay

    let starDivTop = ranTop-3+'%'

    starDiv.className = 'starDiv'
    starDiv.style.top = starDivTop
    starDiv.style.left = ranLeft
    starDiv.innerHTML = list[count]



    document.body.appendChild(staryDiv)
    document.body.appendChild(starDiv)

    },100)


}

generateStars()

let s1 = document.querySelector('.s1')
let s2 = document.querySelector('.s2')
let s3 = document.querySelector('.s3')
let s4 = document.querySelector('.s4')
let s5 = document.querySelector('.s5')
let s6 = document.querySelector('.s6')
let s7 = document.querySelector('.s7')
let s = document.querySelectorAll('.s')
let push = []

let l1 = document.querySelector('.l1')
let l2 = document.querySelector('.l2')
let l3 = document.querySelector('.l3')
let l4 = document.querySelector('.l4')
let l5 = document.querySelector('.l5')
let l6 = document.querySelector('.l6')
let l7 = document.querySelector('.l7')





function constellation() {
    s.forEach(ind => {
        let lol = ind.getBoundingClientRect()
        push.push(lol)}
)

let cnt = 0

let lolt = setInterval(() => {

   


    if (cnt===6) {

        const x1 = push[cnt].left + push[cnt].width / 2
        const y1 = push[cnt].top + push[cnt].height / 2

        const x2 = push[3].left + push[3].width / 2
        const y2 = push[3].top + push[3].height / 2

        const dx = x2 - x1
        const dy = y2-y1

        const distance = Math.sqrt(dx * dx + dy * dy);
        const angle = Math.atan2(dy,dx)
        const degrees = angle*(180/Math.PI)

        l7.style.left = x1+'px'
        l7.style.top = y1+'px'
        l7.style.width = distance+'px'
        l7.style.transform = `rotate(${degrees}deg)`

        cnt = 0
        clearInterval(lolt)
    }
    else{

         const x1 = push[cnt].left + push[cnt].width / 2
    const y1 = push[cnt].top + push[cnt].height / 2

    const x2 = push[cnt+1].left + push[cnt+1].width / 2
    const y2 = push[cnt+1].top + push[cnt+1].height / 2

        const dx = x2 - x1
    const dy = y2-y1

    const distance = Math.sqrt(dx * dx + dy * dy);
    const angle = Math.atan2(dy,dx)
    const degrees = angle*(180/Math.PI)

    
    if (cnt===0) {
    l1.style.left = x1+'px'
    l1.style.top = y1+'px'
    l1.style.width = distance+'px'
    l1.style.transform = `rotate(${degrees}deg)` }
    else  if (cnt===1) {
    l2.style.left = x1+'px'
    l2.style.top = y1+'px'
    l2.style.width = distance+'px'
    l2.style.transform = `rotate(${degrees}deg)` }
    else  if (cnt===2) {
    l3.style.left = x1+'px'
    l3.style.top = y1+'px'
    l3.style.width = distance+'px'
    l3.style.transform = `rotate(${degrees}deg)` }
    else  if (cnt===3) {
    l4.style.left = x1+'px'
    l4.style.top = y1+'px'
    l4.style.width = distance+'px'
    l4.style.transform = `rotate(${degrees}deg)` }
    else  if (cnt===4) {
    l5.style.left = x1+'px'
    l5.style.top = y1+'px'
    l5.style.width = distance+'px'
    l5.style.transform = `rotate(${degrees}deg)` }
    else  if (cnt===5) {
    l6.style.left = x1+'px'
    l6.style.top = y1+'px'
    l6.style.width = distance+'px'
    l6.style.transform = `rotate(${degrees}deg)` }
    else  if (cnt===6) {
     }
    }

cnt++
},1000)

   



}


let starBtn = document.querySelector('.consBtn')
starBtn.addEventListener('click', () => {
    constellation()
})




