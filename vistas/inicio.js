window.addEventListener('load', () => {

    let boton=document.getElementById('boton') ;
    boton.addEventListener ('click!' , () => {

        alert('hiciste click en el boton')
    })

let enviar = document.querySelector('#btn');
enviar.onclick=() => {
    alert('Ya estas registrad@')
}

let titulo= document.querySelector ('h1');
titulo.onmouseover= () => {
    console.log('pasaste el mouse por encima ')
    titulo.classList.add ('colorTitulo')
}
titulo.addEventListener('mouseout', () => {
console.log('sacaste el mouse')
titulo.classList.remove('colorTitulo')

})


})
