
const loader = document.querySelector('.loader')
const heading = document.querySelector('.heading')
const btnGen = document.querySelector('.btn--gen')
const box = document.querySelector('.quote-box')
const aName = document.getElementById('name')
const character = document.getElementById('character')
const quote = document.getElementById('quote')
const overlay = document.getElementById('overlay')


function renderQuote() {
    fetch('https://animechan.vercel.app/api/random')
    .then(response => response.json())
    .then(data =>{
        console.log(data);
    aName.innerHTML = data.anime
    character.innerHTML = data.character
    quote.innerHTML = data.quote
    })
}
    






btnGen.addEventListener('click', function () {
    heading.classList.add('gen')
    btnGen.classList.add('gen')
    box.classList.add('show-box')
    renderQuote()
    btnGen.innerText = 'try again'
})

    window.addEventListener('load', function() {
     loader.classList.add('hidden')
})
