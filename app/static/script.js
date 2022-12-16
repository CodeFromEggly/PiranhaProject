// DARK MODE
var htmlElement = document.querySelector('html');
var toggleButton = document.querySelector('#toggle-button');
var darkMode = localStorage.getItem('dark-mode');
var carousel = document.querySelector('#cardCarousel');

if (darkMode === 'true') {
  htmlElement.classList.add('dark-mode');
  toggleButton.innerHTML = 'Light Mode';
  if(carousel)
    {
      carousel.classList.remove("carousel-dark");
    }
}

toggleButton.addEventListener('click', function() {
  if (htmlElement.classList.contains('dark-mode')) {
    htmlElement.classList.remove('dark-mode');
    carousel.classList.add("carousel-dark");
    toggleButton.innerHTML = 'Dark Mode';
    localStorage.removeItem('dark-mode');
  } else {
    htmlElement.classList.add('dark-mode');
    carousel.classList.add("carousel-dark");
    toggleButton.innerHTML = 'Light Mode';
    localStorage.setItem('dark-mode', htmlElement.classList.contains('dark-mode'));
  }
});

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