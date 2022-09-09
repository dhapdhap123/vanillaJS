const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];

const imageIndex = Math.floor(Math.random() * images.length)
const chosenImage = images[imageIndex];

const backImg = document.querySelector("#background-img");

if (imageIndex === 0 || imageIndex === 3){
    document.body.style.color = "black";
} else {
    document.body.style.color = "white";
}

backImg.style.backgroundImage = `url(img/${chosenImage})`;