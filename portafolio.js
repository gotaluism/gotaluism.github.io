let botonServices=document.getElementById('boton-services')
let botonProyects=document.getElementById('boton-proyects')
let botonExperience=document.getElementById('boton-experience')

let logo1=document.getElementById('logo1')
let home=document.getElementById('home')
let services=document.getElementById('services')
let proyects=document.getElementById('proyects')
let experience=document.getElementById('experience')

logo1.addEventListener("click", reiniciar)
botonServices.addEventListener("click",funServices)
botonProyects.addEventListener("click",funProyects)
botonExperience.addEventListener("click",funExperience)



function iniciar(){
    services.style.display="none"
    proyects.style.display="none"   
    experience.style.display="none"
}

function funServices(){
    services.style.display="flex"
    proyects.style.display="none"
    experience.style.display="none"
    home.style.display="none"
    
}

function funProyects(){
    services.style.display="none"
    proyects.style.display="flex"
    experience.style.display="none"
    home.style.display="none"
}

function funExperience(){
    services.style.display="none"
    proyects.style.display="none"
    experience.style.display="flex"
    home.style.display="none"
}

function reiniciar(){
    location.reload()
}

window.addEventListener("load",iniciar)