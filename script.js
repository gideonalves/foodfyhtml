// GRUPO DE SELECÃO
const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card')
const modalInfo = document.querySelector('.modal_info');

// CRIA AS TAGS
const creatH2 = document.createElement('h2')
const creatH3 = document.createElement('h3')
const createP = document.createElement('p')

// GRUPO DE REPETIÇÃO
for (let card of cards) {
    // evento de click
    card.addEventListener("click", function () {
       //pegar os id cos cards
        const imageId = card.getAttribute("id"); // o getAttribute seleciona o ( Id do .card )

       // seleciona o h2 e o .textContent pega o texto que ta dentro do h2
        const cardInfoH2 = card.querySelector("h2").textContent;
        const cardInfoH3 = card.querySelector("p").textContent;
        const cardInfoP = card.querySelector("p").textContent; 
        
       modalOverlay.classList.add('active')
       modalOverlay.querySelector("img").src = `./assets/${imageId}.png`;
    
       creatH2.innerHTML =  cardInfoH2;
       creatH3.innerHTML =  cardInfoH3;
       createP.innerHTML = "Fechar modal";
       
       
       modalInfo.appendChild(creatH2)
       modalInfo.appendChild(creatH3)
       modalInfo.appendChild(createP)
    })
 
}
// FECHA O MODAL
createP.addEventListener("click", function () {
    modalOverlay.classList.remove("active")
})


