
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
            // Get the image src of the selected card
            var selectedCardImgSrc = $(this).find("img").attr("src");
            // Get the inner HTML of the .card-title element of the selected card
            var selectedCardTitle = $(this).find(".card-title").html();
            // Get the Opensea href of the selected card
            var selectedCardOsLink = $(this).find("a.osLink").attr("href");

            // update the src of the featured card
            $("#featuredCard").find("img").attr("src", selectedCardImgSrc);
            // Update the inner HTML of the #featuredCard element
            $("#featuredCard").find(".card-title").html(selectedCardTitle);
            // Update the Opensea Link of the #featuredCard element
            $("#featuredCard").find("a.osLink").attr("href", selectedCardOsLink);
            $("#emptyCard").css("display", "none");
            $("#featuredCard").css("display", "block");
        }
    });
}); 


/* Issue has arisen since adding Jinja loop, could have mistakenly removed something important, show-more not auto displaying or modifying container height*/


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
        miniCard.style.maxHeight = '100px';
        showMoreLink.style.display = 'block';
        showLessLink.style.display = 'none';
    });
});


