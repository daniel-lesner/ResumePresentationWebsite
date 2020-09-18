let activeCategory = 'home'
let activeCVCategory = 'cv__objective'
let cvNavBarOpen = false

const showCategory = (category) => {
    document.getElementById(activeCategory).style.display = 'none';
    document.getElementById(category).style.display = 'block';
    document.getElementById('navbar__burger').checked = false;
    activeCategory = category;
    
    if (category == 'cv') {
        showCVCategory('cv__objective')
    }
    
    if (window.innerWidth < 800) {
        closeCVNavBar()
    }
}

const showCVCategory = (category) => {
    if (window.innerWidth < 800) {
        document.getElementById(activeCVCategory).style.display = 'none';
        document.getElementById(category).style.display = 'block';
        closeCVNavBar()
    } else {
        document.getElementById('cv__navbar').style.width = "20%";
        document.getElementById('cv__navbar').style.display ="inline-block";
        document.getElementById(activeCVCategory).style.display = 'none';
        document.getElementById(category).style.display = 'block';
    }
    activeCVCategory = category;

}

const showCVNavBar = () => {
    cvNavBarOpen ? closeCVNavBar(): openCVNavBar()
}

const closeCVNavBar = () => {
    cvNavBarOpen = !cvNavBarOpen
    document.getElementById('cv__navbar__arrow').style.borderLeft = '20px solid green'
    document.getElementById('cv__navbar__arrow').style.left = '5%'
    document.getElementById('cv__navbar__arrow').style.transform = 'rotate(0deg)'
    document.getElementById('cv__navbar').style.width = '5%'
    items = document.getElementsByClassName('cv__navbar__item')

    for (let eachItem of items) {
        eachItem.style.display = 'none'
    }
}

const openCVNavBar = () => {
    cvNavBarOpen = !cvNavBarOpen
    document.getElementById('cv__navbar__arrow').style.borderLeft = '20px solid red'
    document.getElementById('cv__navbar__arrow').style.left = '30%'
    document.getElementById('cv__navbar__arrow').style.transform = 'rotate(180deg)'
    document.getElementById('cv__navbar').style.width = '30%'
    items = document.getElementsByClassName('cv__navbar__item')

    for (let eachItem of items) {
        eachItem.style.display = 'block'
    }
}