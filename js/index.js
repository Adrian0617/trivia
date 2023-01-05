import { questions } from "../helper/questions.js"
import { componentFinish } from "./finish.js"

document.addEventListener('DOMContentLoaded', () => {

    printCuestion()

})

const form = document.querySelector('.form')
const nameUser = document.querySelector('.user-name')

const nombre = localStorage.getItem('name')

nameUser.textContent = `Bienvenid@ ${nombre}`

let indice = 0;

function printCuestion() {
    
    const title = document.querySelector('.title')

    const q = questions[indice]
    const getAnswers = q.answers

    title.textContent = q.question

    const containerAnswers = document.createElement('article');

    containerAnswers.setAttribute('class', "answer")
    
    indice++

    const printAnswers = getAnswers.map(item => {

        const input = document.createElement('input');
 
        input.setAttribute("type", "button")
        input.setAttribute("name", q.correct)
        input.setAttribute("value", item)
        input.setAttribute("class", "option")

        input.addEventListener('click', ({ target }) => validate(target.value, q.correct, input))

        containerAnswers.append(input)

        form.appendChild(containerAnswers)

    })

}

function validate(answer, correct, input) {
    
    if (answer !== correct) {

        input.setAttribute("class", "incorrect")

        setTimeout(()=>{
            input.setAttribute("class", "option")
        }, 400)

        return         
    }

    clean()

    if (indice === questions.length) {
        
        const title = document.querySelector('.title')
        title.setAttribute("class", "finish")
        
        componentFinish()
        
        setTimeout(()=>{
            window.location.href = "http://127.0.0.1:5500/"
        },3000)
        
        return
    }

    printCuestion()
}

function clean() {
    const cleantInputs = document.querySelector('.answer')
    return cleantInputs.remove()
}

