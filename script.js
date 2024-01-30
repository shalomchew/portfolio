let menu = document.querySelector('.hamicon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('active');

}

var prevScrollpos = window.scrollY;
window.onscroll = function () {
    var currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navcontainer").style.top = "0";
    } else {
        document.getElementById("navcontainer").style.top = "-120px";
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






// Fancybox.bind('[data-fancybox="gallery-a"]' {
//     // Custom options for the first gallery
//     Thumbs: {
//         showOnStart: false,
//     },

//     Toolbar: {
//         display: {
//             left: [],
//             middle: [],
//             right: ["close"],
//         },
//     },
// });

// Fancybox.bind('[data-fancybox="gallery-b"]', {
//     // Custom options for the second gallery
//     // Thumbs: {
//     //     showOnStart: false,
//     // },
// });

