let likeButton = document.getElementById("like-button");
let likeCount = document.getElementById("like-count");

let numberOfLikes = 0

likeButton.addEventListener("click", function() {
  numberOfLikes++;
  likeCount.innerText = numberOfLikes;
});