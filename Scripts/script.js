const toggleNight = document.getElementById('toggleNight')
const toggleDay = document.getElementById('toggleDay')
const navBar = document.getElementById('navContain')
const toggleBar = document.getElementsByClassName('btn-span')
const navBarCon = document.getElementById('navbar')
const Process = document.getElementById('process')
const Process2 = document.getElementById('process-2')
const service = document.getElementById('product')
const footer = document.getElementById('footer')
const image = document.getElementById('Img')
const image2 = document.getElementById('Imge')
const Link = document.getElementsByTagName('a')

toggleNight.addEventListener('click', () => {
    navBarCon.style.backgroundColor = 'black';
    navBar.style.backgroundColor = "black";
    navBar.style.color = "white";
    Process.style.backgroundColor = "black";
    Process.style.color = "white";
    Process2.style.backgroundColor = "black";
    Process2.style.color = "white";
    service.style.backgroundColor = "black"
    service.style.color = "white";
    footer.style.backgroundColor = "black";
    footer.style.color = "white";
    image.src = "images/LogoBl.png";
    image2.src = "images/LogoBl.png";
    footer.style.backgroundColor = "black";
    footer.style.color = "white";
    image.src = "images/LogoBl.png";
    image2.src = "images/LogoBl.png";
    Link.style.color = "white";
})

toggleDay.addEventListener('click', () => {
    navBarCon.style.backgroundColor = 'white';
    navBar.style.backgroundColor = "white";
    navBar.style.color = "black";
    Process.style.backgroundColor = "white";
    Process.style.color = "black";
    Process2.style.backgroundColor = "white";
    Process2.style.color = "black";
    service.style.backgroundColor = "white"
    service.style.color = "black";
    footer.style.backgroundColor = "white";
    footer.style.color = "black";
    image.src = "images/JOCOM WEBSITE LOGO.png";
    image2.src = "images/JOCOM WEBSITE LOGO.png";
})

