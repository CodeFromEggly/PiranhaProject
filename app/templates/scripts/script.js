
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
            $("#emptyCard").css("display", "none");
            $("#featuredCard").css("display", "block");
        }
    });
    $(document).on('change', function() {
        if($("#deck .selectedCard").length > 0) {
            $("#emptyCard").css("display", "none");
            $("#featuredCard").css("display", "block");
        } else {
            $("#emptyCard").css("display", "block");
            $("#featuredCard").css("display", "none");
        }
    });
}); 

/* Issue has arisen since adding Jinja loop, could have mistakenly removed something important, show-more not auto displaying or modifying container height


const showMoreLinks = document.querySelectorAll('#show-more');
const showLessLinks = document.querySelectorAll('#show-less');
const cardTextContainers = document.querySelectorAll('.card-text-container');

cardTextContainers.forEach((container) => {
    const showMoreLink = container.previousElementSibling;
    const showLessLink = container.nextElementSibling;

    if (container.scrollHeight > container.clientHeight) {
        showMoreLink.style.display = 'block';
    }

    showMoreLink.addEventListener('click', (e) => {
        e.stopPropagation();
        container.style.maxHeight = 'none';
        showMoreLink.style.display = 'none';
        showLessLink.style.display = 'block';
    });

    showLessLink.addEventListener('click', (e) => {
        e.stopPropagation();
        container.style.maxHeight = '200px';
        showMoreLink.style.display = 'block';
        showLessLink.style.display = 'none';
});
});

*/ 