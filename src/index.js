import generateJoke from './generateJoke'
import './styles/main.scss'
import snapshot from './assets/snapshot.png'

const arrangement = document.getElementById('arrangeImg')
arrangement.src = snapshot

const jokeBtn = document.getElementById('jokeBtn')
jokeBtn.addEventListener('click', generateJoke)

generateJoke()