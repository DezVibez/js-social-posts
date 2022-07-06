/*# Milestone 1
Creiamo il nostro array di oggetti che rappresentano ciascun post.
Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
- id del post, numero progressivo da 1 a n
- nome autore,
- foto autore,
- data in formato americano (mm-gg-yyyy),
- testo del post,
- immagine (non tutti i post devono avere una immagine),
- numero di likes.
*Non è necessario creare date casuali, inventatele*
*Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=3)*
#Milestone 2
Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
#Milestone 3
Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo. */

console.log("js ok")
//array di oggetti
const data = [{postId: 1,
            nomeAutore: "Phil Mangione",
            fotoSrcAutore: "https://unsplash.it/300/300?image=3",
            dataPost: "07/06/2022",
            testoPost: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto.",
            fotoSrcPost: "https://unsplash.it/300/300?image=3",
            likes: 28}]

//Assegnazioni
const printPlace = document.getElementById("container")



//controllo nell'array, e stampo in pagina la struttura html data
for (let i = 0; i< data.length; i++) { 

    printPlace.innerHTML = `<div class="post">
    <div class="post__header">
      <div class="post-meta">
        <div class="post-meta__icon">
          <img class="profile-pic" src="${data[i].fotoSrcAutore}" alt="${data.nomeAutore}" />
        </div>
        <div class="post-meta__data">
          <div class="post-meta__author">${data[i].nomeAutore}</div>
          <div class="post-meta__time">${data[i].dataPost}</div>
        </div>
      </div>
    </div>
    <div class="post__text">
    ${data[i].testoPost}
    </div>
    <div class="post__image">
      <img src="${data[i].fotoSrcPost}" alt="" />
    </div>
    <div class="post__footer">
      <div class="likes js-likes">
        <div id="bottone"class="likes__cta">
          <a class="like-button js-like-button" href="#" data-postid="${data[i].postId}">
            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
            <span class="like-button__label">Mi Piace</span>
          </a>
        </div>
        <div class="likes__counter">Piace a <b id="like-counter-1" class="js-likes-counter">${data[i].likes}</b> persone</div>
      </div>
    </div>
  </div>`

const miPiace = document.getElementById("bottone")
const likesCounter = document.getElementById("like-counter-1")

  miPiace.addEventListener("click", function(){
    this.classList.add("text-bg-primary")
    likesCounter.innerText = data[i].likes + 1})
}

  








   

    
