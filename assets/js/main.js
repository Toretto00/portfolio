// NAVIGATION BAR FUNCTION
function myMenuFunction() {
    var menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){
        menuBtn.className += " responsive"
    } else {
        menuBtn.className = "nav-menu";
    }
}

//ADD SHAWDOW ON NAVIGATION BAR WHILE SCROLLING
window.onscroll = function(){headerShadow()};

function headerShadow(){
    const navHeader = document.getElementById("header");

    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";
    } else {
        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";
    }
}

// TYPPING EFFECT
var typingEffect = new Typed(".typedText", {
    strings: ["Developer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000
})

// SCROLL REVEAL ANIMATION
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

// HOME
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})

// PROJECT BOX
sr.reveal('.project-box',{interval: 200})

// HEADING
sr.reveal('.top-header',{})

// SCROLL REVEAL LEFT RIGHT
const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

// SCROLL REVEAL RIGHT LEFT
const srRight = ScrollReveal({
origin: 'right',
distance: '80px',
duration: 2000,
reset: true
})

srRight.reveal('.skill-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})

// ACTIVE LINK
const section = document.querySelectorAll("section[id]");

function scrollActive() {
    const scrollY = window.scrollY;

    section.forEach(current => {
        const sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 50,
                sectionId = current.getAttribute('id');
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    })
}

window.addEventListener('scroll', scrollActive)

// DOWNLOAD CV
function linkClick (url, fileName, target) {
    let element = document.createElement('a');

    element.setAttribute('href', url);
    
    if(fileName !== "")
        element.setAttribute('download', fileName);
    else
        element.removeAttribute('download');

    if(target !== "")
        element.setAttribute('target', target);
    else 
        element.removeAttribute('target');

    document.body.appendChild(element);
    element.click();

    document.body.removeChild(element);
} 

var elements = document.getElementsByClassName('download-cv');

var arrBtn = [...elements]

arrBtn.forEach(item => {
    item.addEventListener('click', () => {
        const url = "./assets/documents/PhanChiBao_CV.pdf";
        const fileName = "PhanChiBao_CV.pdf";

        linkClick(url, fileName, "");
    })
})

// SOCIAL LINKS
var socialIconElements = document.getElementsByClassName('icon');

var arrSocialIcons = [...socialIconElements];

const github = "https://github.com/Toretto00?tab=repositories";
const linkedin = "https://www.linkedin.com/in/bao-phan-3b4925144";
const facebook = "https://www.facebook.com/bao.phan.3323457";
const instagram = "https://www.instagram.com/bao.phan0207";

arrSocialIcons.forEach((item, index) => {
    item.addEventListener('click', () => {
        let socialType = () => {
            if(item.children[0].className.includes('github'))
                return 1;
            else if(item.children[0].className.includes('linkedin'))
                return 2;
            else if(item.children[0].className.includes('facebook'))
                return 3;
            else if(item.children[0].className.includes('instagram'))
                return 4;
        };

        let url = '';

        console.log(socialType());

        switch(socialType()){
            case 1:
                url = github;
                break;
            case 2:
                url = linkedin;
                break;
            case 3:
                url = facebook;
                break;
            case 4:
                url = instagram;
                break;
            default:
                url = github;
        }
        
        const target = "_blank";

        linkClick(url, "", target)
    })
})

// PROJECT DEMO
const vissan = "https://vissan.vercel.app"
function demo(item) {
    linkClick(item.demoLink, "", '_blank');
} 

// PROJECT INFO
function showProjectInfo(item){
    const element = document.getElementsByClassName('project-info');

    var arr = [...element];

    addContent(item)

    arr[0].classList.remove('display-none');
    arr[0].classList.add('display-flex');
}

function closeProjectInfo(){
    const element = document.getElementsByClassName('project-info');

    var arr = [...element];

    removeContent();

    arr[0].classList.remove('display-flex');
    arr[0].classList.add('display-none');
}

const projectInfoContent = [
    {
        title: 'VISSAN',
        subTitle: 'Retail store management system',
        content: "Developed a NextJS application management system for VISSAN's retail stores to streamline inventory reporting, order processing, and goods transfer between stores.</br> Constructed a user-friendly website using Typescript and NextJS to enable users to manage inventories and orders.</br> Constructed a backend using C#, ASP.NET Core Web API to establish connections between frontend and database, ensuring smooth data flow and real-times updates for users.</br> Utilized SQLServer to create a database for users for seamless data management and retrieval.</br> Applying docker for deployment (Firstly, deploy frontend by vercel and azure for backend).",
        demoLink: 'https://vissan.vercel.app'
    },
    {
        title: 'Homelisti',
        subTitle: 'Real-estate website',
        content: "Developed a user-friendly real estate website to enable users to view property listings and contact property owners using Typescript, NextJS and MUI.</br> The project provides a platform where users can browse real estate listings, view detailed information and images of properties, and directly contact the property owners for inquiries.</br> Constructed a backend using C#, ASP.NET Core Web API to establish connections between frontend and database, ensuring smooth data flow and real-times updates for users.",
        demoLink: ""
    }
]

function addContent(item){
    const element = document.getElementsByClassName('project-info-content');

    element[0].innerHTML = `<h3>${item.title}</h3>
    <p>${item.content}</p>`
}

function removeContent(){
    const element = document.getElementsByClassName('project-info-content');

    element.innerHTML = '';
}

var projectElement = document.getElementsByClassName('project-container');

let projectContent = '';

projectInfoContent.map(item => {
    projectContent += `<div class="project-box">
                        <i class="uil uil-shop"></i>
                        <h3>${item.title}</h3>
                        <label>${item.subTitle}</label>
                        <div class="project-action">
                            <button class="btn ${item.title}-info">More info</button>
                            <button class="btn ${item.title}-demo">Demo</button>
                        </div>
                    </div>`
})

projectElement[0].innerHTML = projectContent;

projectInfoContent.map(item => {
    var info = [...document.getElementsByClassName(`btn ${item.title}-info`)];

    info[0].addEventListener('click', () => showProjectInfo(item))

    var demoBtn = [...document.getElementsByClassName(`btn ${item.title}-demo`)];

    demoBtn[0].addEventListener('click', () => demo(item))
})

// SEND EMAIL
function sendEmail(){
    var params = {
        toname: 'Toretto',
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
    }
    const seviceID = 'service_fwsweqp';
    const templateID = 'template_366e8dj';
    
    emailjs.send(seviceID, templateID, params).then(res => {
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
        console.log(res);
        alert('Your mail sent successfully');
    }).catch(err => console.log(err));
}
