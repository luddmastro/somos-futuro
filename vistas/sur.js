window.addEventListener('load', () => {

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