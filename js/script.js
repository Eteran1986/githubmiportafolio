const enlace = document.querySelector(".enlaces")
const hambur = document.getElementsByClassName("hamburguesa")
const mhambur = document.getElementsById("hamburguesa")

const quitarponermenu = () =>{
    enlace.classList.toggle('enlaces2')
    enlace.style.transition ="transform 0.5s ease-in-out"
}
mhambur.addEventListener('click',()=>quitarponermenu())