/* Logs */
function log(message){
    console.log(message);
}

/* Cards de instruções */

const cards = document.querySelectorAll('.card');
const dropzones = document.querySelectorAll('.dropzone');

cards.forEach(function(card){
    card.addEventListener('dragstart', dragstart);
    card.addEventListener('drag', drag);
    card.addEventListener('dragend', dragend);
});

 function dragstart(){
    dropzones.forEach(function(dropzone){
        dropzone.classList.add('highlight');
    });
    this.classList.add('dragging'); 

}

function drag(){
}

function dragend(){
    dropzones.forEach(function(dropzone){
        dropzone.classList.remove('highlight');
    });
    this.classList.remove('dragging'); 
} 

/* Dropzones */

dropzones.forEach(function(dropzone){
    dropzone.addEventListener('dragenter', dragenter);
    dropzone.addEventListener('dragover', dragover);
    dropzone.addEventListener('dragleave', dragleave);
    dropzone.addEventListener('dragleave', dragleave);
    dropzone.addEventListener('drop', drop);
});

function dragenter(){
}

function dragover(){
    this.classList.add('over');

    const cardBeingDragged = document.querySelector('.dragging');

    this.appendChild(cardBeingDragged)
}

function dragleave(){
    this.classList.remove('over')

}

function drop(){
    this.classList.remove('over')
}