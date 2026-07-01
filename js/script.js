let title = document.querySelector('.title')
let inputCode = document.querySelector('.inputCode')
let confirmCode = document.querySelector('.confirmCode')
let header = document.querySelector('.head')

confirmCode.addEventListener('click', () => {
    let code = inputCode.value
    if (code==='leeLovesLucy4Ever') {
        title.innerHTML = 'Люсія'
        title.style.animationPlayState = 'running'
        header.style.animationPlayState = 'running'

        setTimeout(() => {
            window.location.href = 'home.html'
        },7000)

    }
    else {
        window.alert('wrong code, try again')
    }
    inputCode.value = ''

})

let yapping = document.querySelector('.yapping')
let hiddenDiv = document.querySelector('.hiddenDiv')
let cancelBtn = document.querySelector('.cancel')
yapping.addEventListener('click', () => {
    hiddenDiv.style.display = 'block'
    cancelBtn.addEventListener('click', () => {
        hiddenDiv.style.display = 'none'
    })

})
