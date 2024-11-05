function guessFavNum() {
    let FavoriteNumber = 17;
    let guess = prompt("Guess the Favorite Number.");
    while (guess != FavoriteNumber) {
        if (guess < FavoriteNumber) {
            alert("Too Low")
         } else {
             alert("Too High")
         }
    enter = prompt("Guess the Favorite Number.");
    }
    alert("Correct");
}