let cardYap = document.querySelector('.cardYap')
let next = document.querySelector('.next')
let previous = document.querySelector('.previous')

let count = 1

next.addEventListener('click', () => {
    count +=1
    if (count>5) {
        count = 5
    }
    else if (count<1) {
        count = 1}
    setTimeout(() => {moving(count)},1300)
    nextAnimate()
})

previous.addEventListener('click', () => {
    count -= 1
    if (count>5) {
        count = 5
    }
    else if (count<1) {
        count = 1 }
    setTimeout(() => {moving(count)},1300)
    nextAnimate()
})

function moving(count)  {
    if (count===1) { 
let e =  `<pre>
Hello everyone,
Meet my pretty, beautiful, cute lil girlfriend

-- Lucy --

or rather...

-- Natalucia -- 

(shh dont call her that tho, she doesnt like it when ppl online calls her that)

An ukranian girl who was born on 7th may 2011. She moved to Germany
at the age of 9-ish, tsk tsk should have moved to saudi...anyways..

She lives with her parents and a lovely older brother who knows ball about life
lmao, and lastly she is 15 years closer to death-- okay that was dark lol


1/4 </pre>`
        cardYap.innerHTML = e

    }
    else if (count===2) {

let e = `<pre>
She is a very cutie patootie girl who has an amazing dream to be a musician...
but also thinks its dumb becuase of how difficult it is to survive in a field like this.

well lowkey I cant comment on that coz I heard her music like once only... heh..bet you
thought I was gonna support your dream, nah-uh leme hear it first then I can decide the
potential lmaoo... 

jk guys, I believe her more than myself that she can make it if she
truly goes all out. Yall hear me out, tailor swift who? Beyounce who? 
Lisa who? Beethoven who? eminem who? I only know one artist and that is...
nata-- ehem I mean LUCYYYYYY 


2/4`
        cardYap.innerHTML = e

    }
    else if (count===3) {
let e = `<pre> 
Here are some list of favourite things that she likes so far: 

fav guys: me ofcour-- sigh nope, its Chuuya, Himmel, Asmodius, Levi...tsk tsk anyone but me fr

fav fruit: cherries (also mangoes, sweet corn, watermelons, apples...)

fav Juice: peach juice

fav constellation: Мала ведмедиця (ursa major) 

fav anime: bsd and deathnote

fav insects: beetles

fav clothes: comfy or classy (hell yeah--)

fav music: yeah... we dont know, she send over 50 songs lowkey 💔

3/4`
cardYap.innerHTML = e

    }
    else if (count===4) {
let e = `<pre>
Further she is veryyyyyy kind and I MEAN VERY KIND towards others, Always wants to help others
but cant help herself 😭😭

she always puts others needs above her for some reason, yes thats very
sweet of her but things also get salty sometimes lol, its okay to ask what you need
sometimes as well!! dont let people walk over you like that ! 😶 

Amazing PEAKK personality, she knows how to care, how to love, how to stay,
how to support, how to-- everything else.  

well yes, thats ma-lady for ya, I can talk about her for a few more hours
but ehem.. I need to finish the other pages too lol.

Thank you everyone for listening... 
but most importantly Thank you Lucy for being a part of my life.

4/4`

cardYap.innerHTML = e

    }

}

let hiddenDiv = document.querySelector('.hiddenDiv')
function nextAnimate() {
    hiddenDiv.style.animationName = 'open'
    hiddenDiv.style.animationPlayState = 'running'
    setTimeout(() => {
        hiddenDiv.style.animationName = 'close'
    },2000)

}

let homeBtn = document.querySelector('.homeBtn')
homeBtn.addEventListener('click', () => {
    window.location.href = 'home.html'
})