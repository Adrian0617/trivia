

export const componentFinish = ()=>{
    const info = document.querySelector(".info")
    const title = document.createElement('h3')
    const image = document.createElement('img')

    image.setAttribute('alt', "celebration")
    image.src = "../assets/celebration.jpeg"
    
    title.textContent = "felicitaciones has completado el cuestionario"
    
    info.appendChild(title)
    info.appendChild(image)

    return info
}