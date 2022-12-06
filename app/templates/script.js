const showMore = document.getElementById('show-more');
const showLess = document.getElementById('show-less');
const cardTextContainer = document.getElementById('card-text-container');

if (cardTextContainer.scrollHeight > cardTextContainer.clientHeight) {
    showMore.style.display = 'block';
}

showMore.addEventListener('click', () => {
    cardTextContainer.style.maxHeight = 'none';
    showMore.style.display = 'none';
    showLess.style.display = 'block';
});

showLess.addEventListener('click', () => {
    cardTextContainer.style.maxHeight = '10rem';
    showMore.style.display = 'block';
    showLess.style.display = 'none';
});

$(document).ready(function(){
    $(".miniCard").click(function(){
        if($(this).hasClass("featured-card")) {
            $(this).removeClass("featured-card");
        } else {
            $(".featured-card").removeClass("featured-card");
            $(this).addClass("featured-card");
        }
    });
});

$(document).ready(function(){
    $("#featuredCard").css("display", "none");
    if($(".featured-card").length > 0) {
        $("#featuredCard").css("display", "block");
    }
});