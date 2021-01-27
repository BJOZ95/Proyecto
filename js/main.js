const enlace= document.querySelector(".enlaces")
const desli= document.getElementsByClassName("deslizable")
const mdesli= document.getElementById("deslizable")

const quitarPonerMenu = () =>{
    enlace.classList.toggle('enlace2')
    enlace.style.transition = "transform 0.5s ease-in-out"
}
mdesli.addEventListener('click',()=>quitarPonerMenu())

