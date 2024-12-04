const img1=document.querySelector(".img1")
img1.addEventListener('click', () => {
    if (img1.style.border){
        img1.style.border=""
    }else{
        img1.style.border="5px solid red"
    }

})


const c1=document.querySelector(".c1")
const c2=document.querySelector(".c2")
const c3=document.querySelector(".c3")
const b1=document.querySelector(".b1")
let total=document.querySelector(".total")
let suma

b1.addEventListener('click', () => {
    suma=Number(c1.value)+Number(c2.value)+Number(c3.value)
    if (suma>10){
        total.innerHTML="El total es: "+suma+"<br>El valor es mayor a 10 <br> Vuelva a ingresar los datos"  
        c1.value=""
        c2.value=""
        c3.value=""
    }else{
        total.innerHTML="El total es: "+suma+ " ¡Muy bien!"
        total.style.color="rgb(0, 128, 0)"
        }
})

const p1=document.querySelector("#p1")
const p2=document.querySelector("#p2")
const p3=document.querySelector("#p3")
const b2=document.querySelector(".b2")
const password=document.querySelector(".password")

b2.addEventListener('click', () => {
    const p=p1.value+p2.value+p3.value
    if  (p=="911" || p=="714"){
        password.innerHTML="Password Correcto"
        password.style.color="rgb(0, 128, 0)"
    }else{
        password.innerHTML="Password Incorrecto"
        password.style.color="red"
    }
})

