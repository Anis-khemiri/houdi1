    // check if there is local storage Color Option
    let mainColors = localStorage.getItem("color_option");



    // If There's Color Item In Local Storage

    if (mainColors !== null) {
      // console.log('Local Storage Is Not Empty You Can Set It On Root Now');
      // console.log(localStorage.getItem("color_option"));
      document.documentElement.style.setProperty('--main-color', localStorage.getItem("color_option"));

    // Remove Active Class From All colors list Item
    document.querySelectorAll(".colors-list li").forEach(element => {
      element.classList.remove("active");
      // Add Active Class On Element With Data-Color === Local Storage item
      if (element.dataset.color === mainColors) {
        // Add Active Class
        element.classList.add("active");
      }

    });


    }




// Random Background Option
let backgroundOption = true;

// Variable To Control background The Interval
let backgroundInterval;
// check if there is Local Storage Random background Item 
let backgroundLocalItem = localStorage.getItem("background_option");
// check if Random Background Local Storage Is Not Empty
if (backgroundLocalItem !== null) {
// Remove Active Class From All Spans
document.querySelectorAll(".random-backgrounds span").forEach(element => {

  element.classList.remove("active");

});

if (backgroundLocalItem === 'true') {
  backgroundOption = true;
  document.querySelector(".random-backgrounds .yes").classList.add("active");
} else {
  backgroundOption = false;
  document.querySelector(".random-backgrounds .no").classList.add("active");
}
// Remove Active Class From All Spans
document.querySelectorAll(".random-backgrounds span").forEach(element => {
  element.classList.remove("active");

});
// if (backgroundLocalItem === 'true') {
//   document.querySelector(".random-backgrounds .yes").classList.add("active");
// } else {
//   document.querySelector(".random-backgrounds .no").classList.add("active");
// }

}




// start animation text

  var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
} else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
}

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
var elements = document.getElementsByClassName('txt-rotate');
for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
}
  // INJECT CSS
var css = document.createElement("style");
css.type = "text/css";
css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
document.body.appendChild(css);
};
// end animation text










// start change background with js

// select Landing page Element
let landingPage = document.querySelector(".landing-page");

// Get Array of Imgs

let imgsArray = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];


// function to randomize imgs
function randomizeImgs() {

if (backgroundOption === true) {
  backgroundInterval = setInterval(() => {
    // Get Random Number
    let randomNumber = Math.floor(Math.random() * imgsArray.length);
    // change background image URL
    landingPage.style.backgroundImage = 'url("image/' + imgsArray[randomNumber] +  '")';
    
},1000);
}



}
randomizeImgs();


// end change background with js




// toggle Spin Class on icon
document.querySelector(".toggle-settings .fa-cog").onclick = function () {
  
  // toggle class fa-spin for rotation on self
  this.classList.toggle("fa-spin");
// toggle class open main Settings Box
document.querySelector(".settings-box").classList.toggle("open");

};



// switch Color
const colorsLi = document.querySelectorAll(".colors-list li");
// loop on All list Items
colorsLi.forEach(li => {
    // click on EveryList items
    li.addEventListener("click",(e) => {
    // Set Color On Root
    document.documentElement.style.setProperty('--main-color', e.target.dataset.color);
    // set color On Local Storage
    localStorage.setItem("color_option", e.target.dataset.color);
    // // Remove Active Class From All childrens
    // e.target.parentElement.querySelectorAll(".active").forEach(element => {
    //   element.classList.remove("active");

    // });
    // // Add Active Class On self
    // e.target.classList.add("active");

    handeleActive(e);




  });
});





// switch Random Background Option
const randmBackEl = document.querySelectorAll(".random-backgrounds span");
// loop on All list Items
randmBackEl.forEach(span => {
    // click on EveryList items
    span.addEventListener("click", (e) => {
    
      handeleActive(e);


     if (e.target.dataset.background === 'yes') {
       backgroundOption = true;
       randomizeImgs();
       localStorage.setItem("background_option", true);

     } else {
       backgroundOption = false;
       clearInterval(backgroundInterval);
       localStorage.setItem("background_option", false);
     }

  });
});
 

// Select Skills Selector 
let ourSkills = document.querySelector(".skills");
window.onscroll = function () {
  // skills offset top
  let skillsoffsetTop = ourSkills.offsetTop;
  // skills outer height
  let skillsOuterheight = ourSkills.offsetHeight;
  // window height
  let windowHeight = this.innerHeight;
  // window scrollTop
  let windowScrollTop = this.pageYOffset;
  
  if (windowScrollTop > (skillsoffsetTop + skillsOuterheight - windowHeight)) {

   let allSkills = document.querySelectorAll(".skill-box .skill-progress span");
   allSkills.forEach(skill => {
     skill.style.width = skill.dataset.progress;

   });



  };
  
  
  
  
};

// Creat Popup With The Image
let ourGallery = document.querySelectorAll(".gallery img");
ourGallery.forEach(img => {
  img.addEventListener('click', (e) => {
    // Creat Overlay Element
   let Overlay = document.createElement("div");
  //  add Class To overlay
  Overlay.className = 'popup-overlay';
  // Append Overlay to The Body
  document.body.appendChild(Overlay);
  //  Create The Popup box
  let popupBox = document.createElement("div");
  // Add Class to the Popup popupBox
  popupBox.className = 'popup-box';

  if (img.alt !== null) {
    // Create heading 
    let imgHeading = document.createElement("h3");
    // Create text For Heading
    let imgText = document.createTextNode(img.alt);
    // Append the text to the heading
    imgHeading.appendChild(imgText);
    // Append the Heading to the PopUp Box
    popupBox.appendChild(imgHeading);
  }

  // Create The Image
  let popupImage = document.createElement("img");
  
  // Set Image Source
  popupImage.src = img.src;
  // Add Image To Popup Box
  popupBox.appendChild(popupImage);
  // Append The Popup Box To Body
  document.body.appendChild(popupBox);
  // create the close Span
  let closeButton = document.createElement("span");
  // Create the close Button Text
  let closeButtonText = document.createTextNode("X");
  // Append Text to Close Button
  closeButton.appendChild(closeButtonText);
  // Add class To Close Button
  closeButton.className = 'close-button';
  // Add Close Button To The Popup Box
  popupBox.appendChild(closeButton);






  });
});

// Close Popup

document.addEventListener("click", function (e) {

 if (e.target.className == 'close-button') {
  //  Remove The Current Popup
  e.target.parentNode.remove();
  // remove Overlay 
  document .querySelector(".popup-overlay").remove(); 

 }

});
// select All Bullets

const allBullets = document.querySelectorAll(".nav-bullets .bullet");
// allBullets.forEach(bullet => {
//   bullet.addEventListener("click", (e) => {
    
//     document.querySelector(e.target.dataset.section).scrollIntoView({
//       behavior: 'smooth'
//     });
//   });
// });





// select All links

const allLinks = document.querySelectorAll(".links a");
// allLinks.forEach(link => {
//   link.addEventListener("click", (e) => {
//     e.preventDefault();
//     document.querySelector(e.target.dataset.section).scrollIntoView({
//       behavior: 'smooth'
//     });
//   });
// });

// scrollToSomewhere


function scrollToSomewhere(elements) {
  elements.forEach(ele => {
    ele.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });


}

scrollToSomewhere(allBullets);
scrollToSomewhere(allLinks);


// handele Active State

function handeleActive(ev) {
// Remove Active Class From All childrens
ev.target.parentElement.querySelectorAll(".active").forEach(element => {
  element.classList.remove("active");

});
// Add Active Class On self
ev.target.classList.add("active");


}


let bulletsSpan = document.querySelectorAll(".bullets-option span");
let bulletsContainer = document.querySelector(".nav-bullets");
let bulletLocalItem = localStorage.getItem("bullets-option");
 if (bulletLocalItem !== null) {
   bulletsSpan.forEach(span => {
     span.classList.remove("active");

   });
   if (bulletLocalItem === 'block') {
     bulletsContainer.style.display = 'block';
     document.querySelector(".bullets-option .yes").classList.add("active");


   } else {
    bulletsContainer.style.display = 'none';
    document.querySelector(".bullets-option .no").classList.add("active");
   }

 }


bulletsSpan.forEach (span => {
  span.addEventListener("click", (e) => {
    if (span.dataset.display === 'show') {
      bulletsContainer.style.display = 'block';
      localStorage.setItem("bullets_option", 'block');

    } else {
      bulletsContainer.style.display = 'none';
      localStorage.setItem("bullets_option", 'none');
    }
    handeleActive(e);
  })
})

// Reset Button
document.querySelector(".reset-options").onclick = function () {


// localStorage.clear();

localStorage.removeItem("color_option");
localStorage.removeItem("background_option");
localStorage.removeItem("bullets_option");

// window reload


window.location.reload();

};


// Toggle Menu 
let toggleBtn = document.querySelector(".toggle-menu");
let tLinks = document.querySelector(".links");

toggleBtn.onclick = function (e) {

  // Stop Propagation
  e.stopPropagation();

  // Toggle Class "menu-active" On Button
  this.classList.toggle("menu-active");

  // Toggle Class "open" On Links
  tLinks.classList.toggle("open");

};

// Click Anywhere Outside Menu And Toggle Button
document.addEventListener("click", (e) => {

  if (e.target !== toggleBtn && e.target !== tLinks) {

    // Check If Menu Is Open
    if (tLinks.classList.contains("open")) {

      // Toggle Class "menu-active" On Button
      toggleBtn.classList.toggle("menu-active");

      // Toggle Class "open" On Links
      tLinks.classList.toggle("open");

    }

  }

});

// Stop Propagation On Menu 
tLinks.onclick = function (e) {
  e.stopPropagation();
}