const comment = document.getElementById("comment-contant")
const addComment = document.getElementById("add-comment")
const commentSection = document.getElementById("comment-section")
addComment.addEventListener('click',handleComment)
function greeting() {
    const name = prompt("What is your name?");
    alert(`Welcome ${name}`);
}
greeting();
function handleComment(){
    let user = "user12341"
    const card = document.createElement("div")
    card.classList.add("card");
    card.classList.add("mb-3")
    const commentText = comment.value
    card.innerHTML = `
        <div class="card-body bg-red">
          <p>${commentText}</p>
          <div class="d-flex justify-content-between">
            <div class="d-flex flex-row align-items-center">
              <p class="small mb-0 ms-2 color-blue">${user}</p>
            </div>
          </div>
        </div>`
        const firstCard = commentSection.querySelector(".card")
    commentSection.insertBefore(card, firstCard)
      
}
function handleDonation(){
    const buttons = document.querySelectorAll(".donBottuns");
    const message = document.getElementById("message")
    const input = document.getElementById("custum-donate")
    let amount = 0
    input.addEventListener("input",()=>{
        const value = Number(input.value)
        amount = value;
        updateAmount()
    });
    buttons.forEach(button => {
        button.addEventListener("click", ( ) => {
            const value = Number(button.getAttribute('value'))
            amount += value
            updateAmount()
        });
    });
function updateAmount(){
    message.innerHTML = `<p>You have donated  ${amount} $  Thank you</p> `
}
}
handleDonation()