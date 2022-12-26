// DARK MODE
var htmlElement = document.querySelector('html');
var brightnessButton = document.querySelector('#brightness-button');
var darkMode = localStorage.getItem('dark-mode');
var carousel = document.querySelector('.carousel');

if (darkMode === 'true') {
    htmlElement.classList.add('dark-mode');
    brightnessButton.setAttribute('class', 'bi bi-moon-fill');
    if(carousel) {
        carousel.classList.remove("carousel-dark");
    }
}

brightnessButton.addEventListener('click', function() {
    if (htmlElement.classList.contains('dark-mode')) {
        htmlElement.classList.remove('dark-mode');
        if(carousel)
        {
            carousel.classList.add("carousel-dark");
        }
        brightnessButton.setAttribute('class', 'bi bi-brightness-high');
        localStorage.removeItem('dark-mode');
    } else {
        htmlElement.classList.add('dark-mode');
        brightnessButton.setAttribute('class', 'bi bi-moon-fill');
        localStorage.setItem('dark-mode', htmlElement.classList.contains('dark-mode'));
        if(carousel)
        {
            carousel.classList.remove("carousel-dark");
        }
    }
});

// ACTIVE NAV SELECTOR
var activePage = localStorage.getItem('active-page');

if (activePage === null) {
    localStorage.setItem('active-page', 'Home');
}

const list = document.querySelectorAll('.pNavItem');
function activeItem() {
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
    localStorage.setItem('active-page', this.firstElementChild.id);
}

document.getElementById(activePage).classList.add('active');
list.forEach((item) =>
item.addEventListener('click', activeItem));


// FEATURED CARD DISPLAY
$(document).ready(function(){
    $("#featuredCard").css("display", "none");
    $(".miniCard").click(function(){
        if($(this).hasClass("selectedCard")) {
            $(this).removeClass("selectedCard");
            $("#featuredCard").css("display", "none");
            $("#emptyCard").css("display", "block");
        } else {
            $(".selectedCard").removeClass("selectedCard");
            $(this).addClass("selectedCard");
            var selectedCardImgSrc = $(this).find("img").attr("src");
            var selectedCardTitle = $(this).find(".card-title").html();
            var selectedCardOsLink = $(this).find("a.osLink").attr("href");

            $("#featuredCard").find("img").attr("src", selectedCardImgSrc);
            $("#featuredCard").find(".card-title").html(selectedCardTitle);
            $("#featuredCard").find("a.osLink").attr("href", selectedCardOsLink);
            $("#emptyCard").css("display", "none");
            $("#featuredCard").css("display", "block");
        }
    });
    
    // Add event.stopPropagation() method call here
    $(".button-group").click(function(event) {
        event.stopPropagation();
    });
}); 

// SHOW MORE/LESS   -- Not applying to inactive slides, possibly the cardTextContainers select statement, indexing and then 'if' statement which only checks once
// Disabled until useful 

/*
const showMoreLinks = document.querySelectorAll('#show-more');
const showLessLinks = document.querySelectorAll('#show-less');
const cardTextContainers = document.querySelectorAll('.card-text-container');

cardTextContainers.forEach((container, index) => {

    const miniCard = container.closest('.miniCard');

    const showMoreLink = showMoreLinks[index];
    const showLessLink = showLessLinks[index];

    if (container.scrollHeight > container.clientHeight) {
        showMoreLink.style.display = 'block';
    }

    showMoreLink.addEventListener('click', (e) => {
        e.stopPropagation();
        container.style.maxHeight = container.scrollHeight + 'px';
        miniCard.style.maxHeight = miniCard.scrollHeight + 'px';
        showMoreLink.style.display = 'none';
        showLessLink.style.display = 'block';
    });

    showLessLink.addEventListener('click', (e) => {
        e.stopPropagation();
        container.style.maxHeight = '100px';
        miniCard.style.maxHeight = '90%';
        showMoreLink.style.display = 'block';
        showLessLink.style.display = 'none';
    });

});

Container max height must match showLessLink
HTML NEEDED:

<a id="show-more" style="display: none;">Show More</a>
<a id="show-less" style="display: none;">Show Less</a>
*/