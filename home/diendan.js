function toggleLike() {
  var heartIcon = document.getElementById("heart-icon");
  var likeButton = document.querySelector(".like-button");
  if (heartIcon.classList.contains("clicked")) {
    heartIcon.classList.remove("clicked");
    likeButton.classList.remove("clicked");
  } else {
    heartIcon.classList.add("clicked");
    likeButton.classList.add("clicked");
  }
}
