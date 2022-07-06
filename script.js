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
            fotoSrcAutore: "https://picsum.photos/200",
            dataPost: "07/06/2022",
            testoPost: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto.",
            fotoSrcPost: "https://picsum.photos/200",
            likes: 28}]

const printPlace = document.getElementById("container")


//creo una funzione stampa carte 

function getPost(){


    printPlace.innerHTML = `<div class="post">
    <div class="post__header">
      <div class="post-meta">
        <div class="post-meta__icon">
          <img class="profile-pic" src=${data.fotoSrcAutore} alt="${data.nomeAutore}" />
        </div>
        <div class="post-meta__data">
          <div class="post-meta__author">${data.postId}</div>
          <div class="post-meta__time">${data.dataPost}</div>
        </div>
      </div>
    </div>
    <div class="post__text">
    ${data.testoPost}
    </div>
    <div class="post__image">
      <img src=${data.fotoSrcPost} alt="" />
    </div>
    <div class="post__footer">
      <div class="likes js-likes">
        <div class="likes__cta">
          <a class="like-button js-like-button" href="#" data-postid="${data.postId}">
            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
            <span class="like-button__label">Mi Piace</span>
          </a>
        </div>
        <div class="likes__counter">Piace a <b id="like-counter-1" class="js-likes-counter">${data.likes}</b> persone</div>
      </div>
    </div>
  </div>`

  return 

}

getPost()



console.log(data)



   

    
