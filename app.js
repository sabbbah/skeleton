const allCards = document.querySelector(".allCards");

const numbersOfCards = 4;
const cardsTitles = ["One", "Two", "Three", "Four"];
const cardsImageSources = [
  "https://images.unsplash.com/photo-1675960829430-9736e38b8ec6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDcwfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1675794495985-6b24a2ce8bb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDgzfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1675556297135-42388b3404b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwMHw2c01WalRMU2tlUXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1666532129770-3e973a680d25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
];

function card() {
  for (let index = 0; index < numbersOfCards; index++) {
    let title = cardsTitles[index];
    let imageSource = cardsImageSources[index];

    const card = `
      <div class="col mb-4">
      <div class="card " style="width: 18rem">
        <img class="skeleton skeletonImage" src="${imageSource}" class="card-img-top" alt="..." />
        <div class="card-body text-dark">
          <h5 class="card-title skeleton">${title}</h5>
          <p class="card-text skeleton skeletonText">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary skeleton">Explore now</a>
        </div>
      </div>
  </div>`;

    allCards.innerHTML += card;
  }
}

card();

let skeleton = document.querySelectorAll(".skeleton");

window.addEventListener("load", () => {
  skeleton.forEach((skeleton) => {
    skeleton.classList.remove("skeleton");
  });
});
