const grayHeart = document.querySelector('.gray-heart');
const redHeart = document.querySelector('.red-heart');

grayHeart.addEventListener('click', () =>{
    redHeart.classList.add('animation');
    grayHeart.classList.add('fill-color');
})
redHeart.addEventListener('click', () =>{
    redHeart.classList.remove('animation');
    grayHeart.classList.remove('fill-color');
})

const typedTextSpan = document.querySelector('.typed-text');
const cursor = document.querySelector('.cursor');

let words = ["Awesome", "Best", "Cool", "Life", "Famous", "Confidencial"];
const typingDelay = 200;
const erasingDelay = 200;
const newLetterDelay = 2000;
let index = 0;
let charIndex = 0;

document.addEventListener('DOMContentLoaded', ()=> {
    if(words.length){
        setTimeout(type, newLetterDelay)
    }
})

function type(){
    if (charIndex < words [index].length){
        typedTextSpan.textContent += words[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay );
    }else{
        setTimeout(erase, newLetterDelay );
    }
}

function erase(){
    if (charIndex > 0){
        typedTextSpan.textContent = words[index].substring(0, charIndex -1)
        charIndex--;
        setTimeout(erase, erasingDelay)
    }else{
        index++;
        if(index >= words.length){
            index = 0;
        }
        setTimeout(type, typingDelay + 1100);

    }
}
const imageContainerEl = document.querySelector(".image-container");

const prevEl = document.getElementById("prev");
const nextEl = document.getElementById("next");
let x = 0;
prevEl.addEventListener("click", ()=>{
    x = x + 45;
    updateGallery()
});
nextEl.addEventListener("click", ()=>{
    x = x - 45;
    updateGallery()
});

function updateGallery(){
    imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
    setTimeout(()=>{
        x = x -45
        updateGallery()
    }, 3000)
}

updateGallery() 
const slides = document.querySelectorAll(".slide");
var counter = 0;

slides.forEach(
    (slide,index) => {
        slide.style.left = `${index * 100}%`
    }
)
const goPrev = () => {
    counter--
    slideImage()
}


const goNext = () => {
    counter++
    slideImage()
}


const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`
        }
    )
}
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let box11 = document.querySelector('.box11');
let degree = 0;

prev.addEventListener('click', function(){
    degree += 90;
    box11.style = `transform: perspective(1000px) rotateY(${degree}deg)`;
})
next.addEventListener('click', function(){
    degree -= 90;
    box11.style = `transform: perspective(1000px) rotateY(${degree}deg)`;
})
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const particleCount = 800;

for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
}

function Particle() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.radius = Math.random() * 4 + 3;
    this.color = 'rgba(255, 21, 21)';
    this.velocity = {
        x: Math.random() * 8 - 1,
        y: Math.random() * 8 - 1
    };
}

Particle.prototype.draw = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
};

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];

        particle.draw();

        particle.x += particle.velocity.x;
        particle.y += particle.velocity.y;

        if (particle.x + particle.radius > canvas.width || particle.x - particle.radius < 0) {
            particle.velocity.x = -particle.velocity.x;
        }

        if (particle.y + particle.radius > canvas.height || particle.y - particle.radius < 0) {
            particle.velocity.y = -particle.velocity.y;
        }
    }

    requestAnimationFrame(animate);
}

animate();