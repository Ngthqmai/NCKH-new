function toggleLike(postId) {
    var heartIcon = document.getElementById("heart-icon-" + postId);
    var likeButton = document.querySelector("#like-button-" + postId);
    if (heartIcon.classList.contains("clicked")) {
      heartIcon.classList.remove("clicked");
      likeButton.classList.remove("clicked");
    } else {
      heartIcon.classList.add("clicked");
      likeButton.classList.add("clicked");
    }
}
