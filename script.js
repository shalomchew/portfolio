// For videos
document.addEventListener('DOMContentLoaded', function () {
    var videos = document.getElementsByTagName('video');
    console.log(videos.length);

    if (window.innerWidth < 800) {
        for (var i = 0; i < videos.length; i++) {
            videos[i].setAttribute('controls', '');
        }
    }

    window.onresize = function () {
        if (window.innerWidth < 800) {
            for (var i = 0; i < videos.length; i++) {
                videos[i].setAttribute('controls', '');
            }
        } else {
            for (var i = 0; i < videos.length; i++) {
                videos[i].removeAttribute('controls');
            }
        }
    }
});


let menu = document.querySelector('.hamicon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('active');

}

var prevScrollpos = window.scrollY;
window.onscroll = function () {
    var currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("header").style.top = "0";
    } else {
        document.getElementById("header").style.top = "-120px";
    }
    prevScrollpos = currentScrollPos;
}



// LIGHTBOX

window.onload = () => {
    let all = document.getElementsByClassName("zoom"),
        lightbox = document.getElementById("lightbox");

    if (all.length > 0) {
        for (let i of all) {
            i.onclick = () => {
                let clone = i.cloneNode();
                clone.className = "";
                lightbox.innerHTML = "";
                lightbox.appendChild(clone);
                lightbox.className = "show";
            };
        }
    }

    lightbox.onclick = () => {
        lightbox.className = "";
    };
};

// FANCYBOX
Fancybox.bind('[data-fancybox]', {
    // Custom options for all galleries
    Thumbs: {
        showOnStart: false,
    },

    Carousel: {
        transition: false,
    },

    Toolbar: {
        display: {
            left: [],
            middle: [],
            right: ["close"],
        },
    },

    Html: {
        videoTpl: `<video class="fancybox__html5video" autoplay loop playsinline nocontrols controlsList="nodownload" poster="{{poster}}">
        <source src="{{src}}" type="{{format}}" />Sorry, your browser doesn't support embedded videos.</video>`,
        autoSize: true,
    }




});


