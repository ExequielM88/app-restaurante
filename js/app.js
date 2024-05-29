const menu = document.querySelector(".hamburguer");
const navigate = document.querySelector(".nav");
const images = document.querySelectorAll('img');
const btnAll = document.querySelector('.all');
const btnPizza = document.querySelector('.pizza');
const btnPasta = document.querySelector('.pasta');
const btnDessert = document.querySelector('.dessert');
const btnSalad = document.querySelector('.salad');
const containerSaucer = document.querySelector('.sauceres')

document.addEventListener("DOMContentLoaded", ()=>{
  startt();
  saucer()    
});

const startt = () => {
  menu.addEventListener("click", openMenu)
};

const openMenu = () => {
  navigate.classList.remove("out")
  closeBtn()
};

// creamos y empujamos boton x para cerrar menu y el overlay

const closeBtn = () => {
  const btnClose = document.createElement("p");
  const overlay = document.createElement('div');
  overlay.classList.add('over-lay')
  const body = document.querySelector('body');
  body.appendChild(overlay)
  //si arreglo que devuelve overlay es mayor a cero ya o se esjecuta el codigo del la lina 27a30
  if (document.querySelectorAll('.overlay').length > 0) return;
  btnClose.textContent = "X";
  btnClose.classList.add("btn-Close");
  // se remueve el botonclose remove buttonClose 
  /*while (navigate.children[5]) {
    navigate.removeChild(navigate.children[5])
  }*/
  //console.log(navigate.children)
  navigate.appendChild(btnClose);
  closeMenu(btnClose, overlay);
};

// cargar las imagenes de la web a medida que se necesitan 
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if ( entry.isIntersecting ) {
      const image = entry.target;
      image.src = image.dataset.src;
      observer.unobserve(image)
    }
  })
});

// le pasamos la imagen al html para que se muestre 
images.forEach(image => {
  observer.observe(image)
});

// close Menu

const closeMenu = (button, overlay) => {
  button.addEventListener("click", () => {
    navigate.classList.add('out');
    overlay.remove()
    // se remueve el botonclose remove buttonClose cuando se hace click en boton cerrar
    button.remove()
  });
// quitar el overlay cuando se hace click por fuera del div que contiene nav 
  overlay.onclick = function() {
    overlay.remove();
    navigate.classList.add('out')
    // se remueve el botonclose remove buttonClose se hace click en el overlay o pantalla 
    button.remove()
  }
};

// filtro por platillos
  
const saucer = () => {
  let saucerArr = [];
  const sauceres = document.querySelectorAll('.saucer');
  
  //hacemos una copia del arreglo 
  sauceres.forEach(saucer => saucerArr = [...saucerArr, saucer]);
 
 
  const salad = saucerArr.filter(salad => salad.getAttribute('data-platillo') === 'salad');
  const pizza = saucerArr.filter(pizza => pizza.getAttribute('data-platillo') === 'pizza');
  const pasta = saucerArr.filter(pasta => pasta.getAttribute('data-platillo') === 'pasta');
  const dessert = saucerArr.filter(dessert => dessert.getAttribute('data-platillo') === 'dessert');

  viewSaucer(salad, pizza, pasta, dessert, saucerArr)
  
}

// mostrar platillos en html agreegar funcionalidad a los botones 

const viewSaucer = (salad, pizza, pasta, dessert, all) => {
  btnSalad.addEventListener('click', ()=>{
    // limpiar antes de mostar
    cleanHtml(containerSaucer)
    salad.forEach(salad => containerSaucer.appendChild(salad))
  })
  btnDessert.addEventListener('click', ()=>{
    // limpiar antes de mostar
    cleanHtml(containerSaucer)
    dessert.forEach(dessert => containerSaucer.appendChild(dessert))
  })
  btnPizza.addEventListener('click', ()=>{
    // limpiar antes de mostar
    cleanHtml(containerSaucer)
    pizza.forEach(pizza => containerSaucer.appendChild(pizza))
  })
  btnPasta.addEventListener('click', ()=>{
    // limpiar antes de mostar
    cleanHtml(containerSaucer)
    pasta.forEach(pasta => containerSaucer.appendChild(pasta))
  })
  btnAll.addEventListener('click', () => {
    cleanHtml(containerSaucer)
    all.forEach(all => containerSaucer.appendChild(all))
  })
}


//limpiar htmal 

const cleanHtml = (container) => {
  while (container.firstChild) {
    container.removeChild(container.firstChild)
  }
};

 
