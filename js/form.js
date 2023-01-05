

const button = document.querySelector('.user-button')
const inputText = document.querySelector('.user')

button.addEventListener("click", ()=>{
    if (!inputText.value) return alert("debes ingresar un nombre")
    
    const name = inputText.value
    localStorage.setItem("name", name)
    window.location.href = "http://127.0.0.1:5500/questions.html"
})