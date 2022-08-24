const toggleNight = document.getElementById('toggleNight')
const toggleDay = document.getElementById('toggleDay')
const navBar = document.getElementById('navContain-about')
const toggleBar = document.getElementsByClassName('btn-span')
const navBarCon = document.getElementById('navbar-about')
const Process = document.getElementById('process-about')
const footer = document.getElementById('footer-about')
const image = document.getElementById('Img-about')
const image2 = document.getElementById('Imge-about')
const Link = document.getElementsByTagName('a')

toggleNight.addEventListener('click', () => {
    navBarCon.style.backgroundColor = 'black';
    navBar.style.backgroundColor = "black";
    navBar.style.color = "white";
    Process.style.backgroundColor = "black";
    Process.style.color = "white";
    footer.style.backgroundColor = "black";
    footer.style.color = "white";
    image.src = "images/LogoBl.png";
    image2.src = "images/LogoBl.png";
})

toggleDay.addEventListener('click', () => {
    navBarCon.style.backgroundColor = 'white';
    navBar.style.backgroundColor = "white";
    navBar.style.color = "black";
    Process.style.backgroundColor = "white";
    Process.style.color = "black";
    footer.style.backgroundColor = "white";
    footer.style.color = "black";
    image.src = "images/JOCOM WEBSITE LOGO.png";
    image2.src = "images/JOCOM WEBSITE LOGO.png";
})

