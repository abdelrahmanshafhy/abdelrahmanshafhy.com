let toggleBtn = document.getElementById("modeBtn");
let darkmodeBtn = document.getElementById("darkmodeBtn");
let lightmodeBtn = document.getElementById("lightmodeBtn");
let ModeLink = document.querySelector('link[href="mine.css"]');
toggleBtn.appendChild(lightmodeBtn);

const userMode = localStorage.getItem("Mode");
const ModeBtn = localStorage.getItem("toggleMode");
if (userMode) {
    ModeLink.href = userMode;
}

if (ModeBtn) {
    toggleBtn.innerHTML = ModeBtn;
}

toggleBtn.addEventListener('click', function () {
    if (ModeLink.href.includes('mine.css')) {
        ModeLink.href = 'mine-light.css';
        toggleBtn.innerHTML = "";
        toggleBtn.appendChild(darkmodeBtn);
        darkmodeBtn.style.display = "block";
        lightmodeBtn.style.display = "none";
    } else {
        ModeLink.href = 'mine.css';
        toggleBtn.innerHTML = "";
        toggleBtn.appendChild(lightmodeBtn);
        lightmodeBtn.style.display = "block";
    }
    localStorage.setItem("Mode", ModeLink.href);
    localStorage.setItem("toggleMode", toggleBtn.innerHTML);
});

window.onscroll = function () { myFunction() };

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let slideIndex = 0;

prevBtn.addEventListener('click', () => {
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = slider.children.length - 1;
    }
    updateSlider();
});

nextBtn.addEventListener('click', () => {
    slideIndex++;
    if (slideIndex >= slider.children.length) {
        slideIndex = 0;
    }
    updateSlider();
});

function updateSlider() {
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}