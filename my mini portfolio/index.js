function favorite() {
    const heartRed = document.querySelector(".heart > i.red");
    //found "red", remove red
    if(heartRed) {
        heartRed.classList.remove("red");
    } else{
        const heart = document.querySelector(".heart > i");
        heart.classList.add("red");
    }
}

function activeCard() {
    const profileCardActive = document.querySelector(".profile-card.active");
    if(profileCardActive) {
        profileCardActive.classList.remove("active");
    } else{
        const profileCard = document.getElementsByClassName('profile-card');
        profileCard[0].classList.add("active");
    }
}