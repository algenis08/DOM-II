

//  1
const busImage = document.querySelector('.intro img');


busImage.addEventListener('mouseenter', () => {
  busImage.style.transform = "scale(1.2)"
  busImage.style.transition = "all 0.3s"
});

busImage.addEventListener('mouseleave', () => {
    busImage.style.transform = "scale(1)";
  });
//  2 
  window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
  });
//   3
  const header = document.querySelector("header");
header.addEventListener("click" , event=> {
    header.style.backgroundColor = "lightblue";
});
// 4
header.addEventListener("wheel", event=> {
    header.style.backgroundColor = "blue";
});
// 5
const body = document.querySelector('body');
body.addEventListener('click', () => {
  body.style.backgroundColor = 'lightblue';
  
});
// 6
const hideImg = document.querySelectorAll('img');
hideImg.forEach(image => {
    image.addEventListener('mouseover', () => {
        image.style.transform = 'scale(1.2)';
        image.style.transition = 'all 0.4s';
    })
})
hideImg.forEach(image => {
    image.addEventListener('mouseleave', () => {
        image.style.transform = 'scale(1)';
        image.style.transition = 'all 0.4s';
    })
});
// 7
const mainLogo = document.querySelector(".logo-heading")
mainLogo.addEventListener("dblclick", () => {
  mainLogo.style.color = "white";
  mainLogo.style.backgroundColor = "lightblue";
})



// 8
const navBar = document.querySelector('nav');
 window.addEventListener('scroll', () => {
     navBar.style.backgroundColor = 'teal';
    });
    const signUp = document.querySelectorAll(".btn").forEach(stuff => {
        stuff.addEventListener("mousedown", () => {
        stuff.style.backgroundColor = "teal"
        })

    })


const stop = document.querySelectorAll(".nav a");
stop.forEach(event => {
  event.addEventListener("click", event => {
    event.preventDefault();
  });
});