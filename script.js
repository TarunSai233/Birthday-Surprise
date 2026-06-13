// ======================================
// Premium Birthday Website Script
// ======================================

// -------------------------------
// Loader
// -------------------------------

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader").style.display = "none";

    }, 2500);

});

// -------------------------------
// Typewriter Effect
// -------------------------------

const text = `Dear Sister ❤️

Today is your special day.

Thank you for always caring for me,
supporting me,
guiding me,
and believing in me.

I wish you endless happiness,
good health,
success,
and lots of smiles.

May all your dreams come true.

🎂 Happy Birthday!

❤️ Love You Forever

— Your Brother Tarunsai`;

let index = 0;

function typeWriter() {

    if (index < text.length) {

        document.getElementById("typing").innerHTML += text.charAt(index);

        index++;

        setTimeout(typeWriter, 40);

    }

}

typeWriter();


// -------------------------------
// Music

// ======================================
// MUSIC SECTION
// ======================================

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

let playing = false;

// Initial volume
music.volume = 0;

// Smooth Fade In
function fadeInMusic(){

    let volume = 0;

    const fade = setInterval(() => {

        if(volume < 1){

            volume += 0.02;
            music.volume = volume;

        }else{

            clearInterval(fade);

        }

    },100);

}

// Play Music
function playMusic(){

    music.play()

    .then(()=>{

        playing = true;

        musicBtn.innerHTML = "⏸ Pause Music";

        fadeInMusic();

    })

    .catch(()=>{

        console.log("Autoplay blocked");

    });

}

// Try autoplay
window.addEventListener("load",()=>{

    playMusic();

});

// If autoplay is blocked,
// play after first click

document.addEventListener("click",()=>{

    if(!playing){

        playMusic();

    }

},{once:true});

// Music Button

musicBtn.addEventListener("click",()=>{

    if(playing){

        music.pause();

        playing = false;

        musicBtn.innerHTML="🎵 Play Music";

    }

    else{

        music.play();

        playing = true;

        musicBtn.innerHTML="⏸ Pause Music";

    }

});

// -------------------------------
// Gift Button
// -------------------------------

document.getElementById("giftBtn").onclick = () => {

    document.getElementById("message").style.display = "block";

    document.getElementById("message").scrollIntoView({

        behavior: "smooth"

    });

    confetti({

        particleCount: 300,

        spread: 180,

        origin: {

            y: 0.6

        }

    });

};


// -------------------------------
// Fireworks
// -------------------------------

window.addEventListener("load", () => {

    const container = document.body;

    const fireworks = new Fireworks.default(container, {

        rocketsPoint: {

            min: 20,

            max: 80

        },

        hue: {

            min: 0,

            max: 360

        },

        delay: {

            min: 15,

            max: 30

        },

        speed: 4,

        acceleration: 1.05,

        friction: 0.95,

        gravity: 1.5,

        particles: 80,

        traceLength: 3,

        explosion: 8,

        autoresize: true

    });

    fireworks.start();

    confetti({

        particleCount: 250,

        spread: 180,

        origin: {

            y: 0.6

        }

    });

    setTimeout(() => {

        fireworks.stop();

    }, 15000);

});


// -------------------------------
// Resize
// -------------------------------

window.addEventListener("resize", () => {

    if (window.confetti) {

        confetti.reset();

    }

});


// -------------------------------
// Floating Hearts
// -------------------------------

setInterval(() => {

    const heart = document.createElement("div");

    heart.innerHTML = "💖";

    heart.style.position = "fixed";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.bottom = "-30px";

    heart.style.fontSize = (20 + Math.random() * 25) + "px";

    heart.style.pointerEvents = "none";

    heart.style.zIndex = "999";

    document.body.appendChild(heart);

    let pos = 0;

    const fly = setInterval(() => {

        pos += 2;

        heart.style.bottom = pos + "px";

        heart.style.opacity = 1 - pos / 700;

        if (pos > 700) {

            clearInterval(fly);

            heart.remove();

        }

    }, 20);

}, 900);


// -------------------------------
// Welcome Popup
// -------------------------------

setTimeout(() => {

    alert("🎉 Happy Birthday! ❤️ Enjoy Your Surprise 🎂");

}, 3000);