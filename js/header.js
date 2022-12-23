const iconoMenuMini = document.getElementById('iconoMenu');
const divIconoCerrarMini = document.querySelector('.divIconoCerrarModal');


const crearModal = (e) =>{
    e.preventDefault();
    const div = document.getElementById("modalID");
    console.log(screen.width);
    if(div.style.display === "" || div.style.display === "none"){
        div.style.display = "flex";
    }else{      
        div.style.display = "none";
    }
}

const cerrarModal = (e) =>{
    e.preventDefault();
    const div = document.getElementById("modalID");
    div.style.display = "none";
}

window.addEventListener("resize", function(){
    console.log(window.innerWidth);
    if(screen.width > 375){
        const div = document.getElementById("modalID");
        div.style.display = "none";
    }
});

iconoMenuMini.addEventListener('click',crearModal);
divIconoCerrarMini.addEventListener('click',cerrarModal);



