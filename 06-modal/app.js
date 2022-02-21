// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const modalBtn = document.querySelector('.modal-btn')
const modalShow = document.querySelector('.modal-overlay')
const closeBtn = document.querySelector('.close-btn')

// modalBtn.addEventListener('click', function(){
//     // console.log(modalShow.classList.contains('open-modal'));
//     modalShow.classList.toggle('open-modal')
//     console.log(modalShow);

//     if(modalShow.classList.contains('modal-overlay')){
//         modalShow.classList.add('open-modal')
//     }
//     else{
//         modalShow.classList.add('modal-overlay')
//     }
    
// })

// closeBtn.addEventListener('click', function(){
//     // console.log(modalShow.classList.contains('open-modal'));
//     // closeBtn.classList.toggle('modal-overlay')
//     modalShow.classList.remove('modal-overlay')
// })


// closeBtn.addEventListener('click', function(){
//     // console.log(modalShow.classList.contains('open-modal'));
//     // closeBtn.classList.toggle('modal-overlay')
//     closeBtn.classList.remove('modal-overlay')
// })

modalBtn.addEventListener('click', function(){
    // console.log(modalShow.classList.contains('open-modal'));
  
        modalShow.classList.add('open-modal')
    }
)

closeBtn.addEventListener('click', function(){
    // console.log(modalShow.classList.contains('open-modal'));
    // closeBtn.classList.toggle('modal-overlay')
    modalShow.classList.remove('open-modal')
})
