const toggleNight = document.getElementById('toggleNight')
const toggleDay = document.getElementById('toggleDay')
const navBar = document.getElementById('navContain-blog')
const navBarCon = document.getElementById('navbar-blog')
const footer = document.getElementById('footer-blog')
const image = document.getElementById('Img-blog')
const image2 = document.getElementById('Imge-blog')

toggleNight.addEventListener('click', () => {
    navBarCon.style.backgroundColor = 'black';
    navBar.style.backgroundColor = "black";
    navBar.style.color = "white";
    footer.style.backgroundColor = "black";
    footer.style.color = "white";
    image.src = "images/LogoBl.png";
    image2.src = "images/LogoBl.png";
})

toggleDay.addEventListener('click', () => {
    navBarCon.style.backgroundColor = 'white';
    navBar.style.backgroundColor = "white";
    navBar.style.color = "black";
    footer.style.backgroundColor = "white";
    footer.style.color = "black";
    image.src = "images/JOCOM WEBSITE LOGO.png";
    image2.src = "images/JOCOM WEBSITE LOGO.png";
})

