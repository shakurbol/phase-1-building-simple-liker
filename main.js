// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const emptyHearts = document.querySelectorAll(".like-glyph");
emptyHearts.forEach((heart) => {
  heart.addEventListener("click", handleLike);
});


function handleLike(event) {
  const heart = event.target;

  
  mimicServerCall()
    .then(() => {
      
      likePost(heart);
    })
    .catch(() => {
      
      displayError();
    });
}


function likePost(heart) {
  heart.classList.add("activated-heart"); 
  heart.classList.remove("empty-heart"); 
}


function displayError() {
  const errorModal = document.querySelector("#modal");
  const errorMessage = document.querySelector("#modal-message");

  
  errorModal.classList.remove("hidden");

  errorMessage.textContent = "There was an error processing your request.";

  
  setTimeout(() => {
    errorModal.classList.add("hidden");
  }, 3000);
}




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
