let activeCategory = 'main__home'
let activeCVCategory = 'main__cv__objective'
let cvNavBarOpen = false

const showCategory = (category) => {
    document.getElementById(activeCategory).style.display = 'none';
    document.getElementById(category).style.display = 'block';
    document.getElementById('navbar__burger').checked = false;
    activeCategory = category;
    
    if (category == 'main__cv') {
        showCVCategory('main__cv__objective')
    }
    
    if (window.innerWidth < 800 && window.innerHeight < 800) {
        closeCVNavBar()
    }
    window.scrollTo(0,0); 
}

const showCVCategory = (category) => {
    document.getElementById(activeCVCategory).style.display = 'none';
    document.getElementById(category).style.display = 'block';
    if (window.innerWidth >= 800 && window.innerHeight >=800) {
        document.getElementById('main__cv__navbar').style.width = "20%";
        document.getElementById('main__cv__navbar').style.display ="inline-block";

        items = document.getElementsByClassName('main__cv__navbar__item')

        for (let eachItem of items) {
            eachItem.style.display = 'block'
        }

    } else {
        closeCVNavBar()
    }
    activeCVCategory = category;

    window.scrollTo(0,0); 
}

const showCVNavBar = () => {
    cvNavBarOpen ? closeCVNavBar(): openCVNavBar()
}

const closeCVNavBar = () => {
    cvNavBarOpen = !cvNavBarOpen
    document.getElementById('main__cv__navbar__arrow').style.borderLeft = '20px solid green'
    document.getElementById('main__cv__navbar__arrow').style.left = '5%'
    document.getElementById('main__cv__navbar__arrow').style.transform = 'rotate(0deg)'
    document.getElementById('main__cv__navbar').style.width = '5%'
    items = document.getElementsByClassName('main__cv__navbar__item')

    for (let eachItem of items) {
        eachItem.style.display = 'none'
    }
}

const openCVNavBar = () => {
    cvNavBarOpen = !cvNavBarOpen
    document.getElementById('main__cv__navbar__arrow').style.borderLeft = '20px solid red'
    document.getElementById('main__cv__navbar__arrow').style.left = '30%'
    document.getElementById('main__cv__navbar__arrow').style.transform = 'rotate(180deg)'
    document.getElementById('main__cv__navbar').style.width = '30%'
    items = document.getElementsByClassName('main__cv__navbar__item')

    for (let eachItem of items) {
        eachItem.style.display = 'block'
    }
}

const myFunction = () => {
    if (window.innerWidth < 800 || window.innerHeight < 800) {
        closeCVNavBar()
        cvNavBarOpen = false
        document.getElementById('navbar__burger').checked = false;
    } else if (window.innerWidth >= 800 && window.innerHeight >= 800)  {
        if (activeCategory == 'main__cv') {
            document.getElementById('main__cv__navbar').style.width = "20%";
            document.getElementById('main__cv__navbar').style.display ="inline-block";

            items = document.getElementsByClassName('main__cv__navbar__item')

            for (let eachItem of items) {
                eachItem.style.display = 'block'
            }
            items = document.getElementsByClassName('main__cv__navbar__item')

            for (let eachItem of items) {
                eachItem.style.display = 'block'
            }
        }
    }
}