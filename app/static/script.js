// MAIN SCRIPTS

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
                brightnessButton.setAttribute('class', 'bi bi-brightness-high-fill');
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
            location.assign(location.href);
        });


    // ACTIVE NAV SELECTOR

        // Get the current page path
        var activePage = window.location.pathname;

        // Remove the '/' character from the activePage string
        activePage = activePage.replace('/', '');

        // Set the active page in local storage
        if (activePage === '') {
            activePage = 'home';
        }

        localStorage.setItem('active-page', activePage);

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


    // WALLET CONNECT BUTTON

        document.getElementById("connect-button").addEventListener("click", function() {
            // Show the floating div
            document.getElementById("connect-div").style.display = "block";
        
            // Grey out the rest of the page
            document.getElementById("overlay").style.display = "block";

            var exitButton = document.getElementById("connect-exit");
            exitButton.addEventListener('click', function() {
                document.getElementById('connect-div').style.display = 'none'; document.getElementById('overlay').style.display = 'none';
            });
        });


// INDEX SCRIPTS

    if (activePage === 'home') {

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


    // SLIDERS

        const profitMarginMinInput = document.getElementById('profitMarginMin');
        const profitMarginMaxInput = document.getElementById('profitMarginMax');
        const profitMarginMinValue = document.getElementById('profitMarginMinValue');
        const profitMarginMaxValue = document.getElementById('profitMarginMaxValue');

        profitMarginMinInput.addEventListener('input', () => {
        profitMarginMaxInput.min = profitMarginMinInput.value;
        profitMarginMinValue.textContent = profitMarginMinInput.value;
        });

        profitMarginMaxInput.addEventListener('input', () => {
            profitMarginMinInput.max = profitMarginMaxInput.value;
            profitMarginMaxValue.textContent = profitMarginMaxInput.value;
        });

        profitMarginMinValue.textContent = profitMarginMinInput.value;
        profitMarginMaxValue.textContent = profitMarginMaxInput.value;

        const priceRangeMinInput = document.getElementById('priceRangeMin');
        const priceRangeMaxInput = document.getElementById('priceRangeMax');
        const priceRangeMinValue = document.getElementById('priceRangeMinValue');
        const priceRangeMaxValue = document.getElementById('priceRangeMaxValue');

        priceRangeMinInput.addEventListener('input', () => {
            priceRangeMaxInput.min = priceRangeMinInput.value;
            priceRangeMinValue.textContent = priceRangeMinInput.value;
        });
        
        priceRangeMaxInput.addEventListener('input', () => {
            priceRangeMinInput.max = priceRangeMaxInput.value;
            priceRangeMaxValue.textContent = priceRangeMaxInput.value;
        });

        priceRangeMinValue.textContent = priceRangeMinInput.value;
        priceRangeMaxValue.textContent = priceRangeMaxInput.value;
        
    }