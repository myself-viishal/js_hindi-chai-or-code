const imageContainer = document.getElementsByClassName("main");
const slides = document.querySelectorAll("img");
const nextBtn = document.querySelector("#nextBtn");
const prevBtn = document.querySelector("#prevBtn");
let counter = 0;
slides.forEach((img, index) => {
    console.log(img);
    img.style.left = `${index * 100}%`;
});

const slideImg = () => {
    slides.forEach((img) => {
        console.log((img.style.transform = `translasteX(-${counter * 100}%)`));
        img.style.transform = `translateX(-${counter * 100}%)`;
    });
};
const goNext = () => {
    counter++;
    slideImg();
};
const goPrev = () => {
    counter--;
    slideImg();
};

nextBtn.addEventListener("click", () => {
    //* Type 1
    if (counter < slides.length - 1) {
        goNext();
    } else {
        counter -= counter - 1;
        goPrev();
    }
});
prevBtn.addEventListener("click", () => {
    if (counter > 0) {
        goPrev();
    } else {
        counter += 3;
        goNext();
    }
});

prevBtn.addEventListener("mousedown", () => {
    prevBtn.classList.add("btn-active");
});

prevBtn.addEventListener("mouseup", () => {
    setTimeout(() => {
        prevBtn.classList.remove("btn-active");
    }, 200);
});

nextBtn.addEventListener("mousedown", () => {
    nextBtn.classList.add("btn-active");
});

nextBtn.addEventListener("mouseup", () => {
    setTimeout(() => {
        nextBtn.classList.remove("btn-active");
    }, 200);
});
