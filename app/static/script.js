// GLOBAL SCRIPTS

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
            // Prevent propogation when clicking buttons on .miniCard(s)
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

// ACTIVITY SCRIPTS

    if (activePage === 'activity') {

        // CARD RESIZING

        const icons = document.querySelectorAll('[data-class]');
        const itemList = document.querySelector("#item-list");

        // parse the 'all' string into an object
        const allData = JSON.parse(all);
        
        if(localStorage.getItem('size') === null) {
            localStorage.setItem('size', 'small-card')
        }
        
        // get the stored size from local storage
        const storedSize = localStorage.getItem('size');
        
        // apply the stored size to the item list
        if (storedSize) {
            const selectedIcon = document.querySelector(`i[data-class="${storedSize}"]`);
            // add the selected class to the selected icon
            selectedIcon.classList.add("selected");
            itemList.classList.add(storedSize);
            if (storedSize === "small-card" || storedSize === "large-card") {
                // clear the item list
                itemList.innerHTML = "";
        
                // get the card template element
                const cardTemplate = document.querySelector("#card-template");
        
                // create a fragment to hold the cloned elements
                const fragment = document.createDocumentFragment();
        
                // insert the card template for each item
                allData.forEach(item => {
                    // clone the card template element
                    const cardElement = cardTemplate.content.cloneNode(true);
        
                    // update the template with the item data
                    cardElement.querySelector(".card-img-top").src = item.image;
                    cardElement.querySelector(".card-title").textContent = item.name;
                    cardElement.querySelector(".card-text").textContent = item.slug;
                
                    // add the cloned element to the fragment
                    fragment.appendChild(cardElement);
                });
        
                // append the fragment to the item list
                itemList.appendChild(fragment);
            }
        }
        
        icons.forEach(icon => {
            icon.addEventListener("click", () => {
                // remove the selected class from all icons
                icons.forEach(icon => icon.classList.remove("selected"));
                // add the selected class to the clicked icon
                icon.classList.add("selected");
                // remove all size classes from the item list
                itemList.className = "";
                // add the class corresponding to the clicked icon to the item list
                const className = icon.dataset.class;
                itemList.classList.add(className);
                // add the mx-auto class back to the item list
                itemList.classList.add("mx-auto");
        
                // store the size in local storage
                localStorage.setItem('size', className);
        
                // check if the clicked icon is .small-card or .large-card
                if (className === "small-card" || className === "large-card") {
                    // clear the item list
                    itemList.innerHTML = "";
        
                    // get the card template element
                    const cardTemplate = document.querySelector("#card-template");
        
                    // create a fragment to hold the cloned elements
                    const fragment = document.createDocumentFragment();
        
                    // insert the card template for each item
                    allData.forEach(item => {
                    // clone the card template element
                    const cardElement = cardTemplate.content.cloneNode(true);
                
                    // update the template with the item data
                    cardElement.querySelector(".card-img-top").src = item.image;
                    cardElement.querySelector(".card-title").textContent = item.name;
                    cardElement.querySelector(".card-text").textContent = item.slug;
                    
                    // add the cloned element to the fragment
                    fragment.appendChild(cardElement);
                    });
                
                    // append the fragment to the item list
                    itemList.appendChild(fragment);
                }
                
                if (className === "small-list" || className === "large-list") {
                    // clear the item list
                    itemList.innerHTML = "";
            
                    // insert the item template for each item
                    allData.forEach(item => {
                        const itemHTML = `
                            <div class="item">
                                <img src="${item.image}" alt="item image">
                                <h6>${item.name}</h6>
                            </div>
                        `;
                        itemList.innerHTML += itemHTML;
                    });
                }
            });
        });
    }

    // TRACKER SCRIPTS:

    if(activePage === 'tracker'){
        const addWalletCheckbox = document.querySelector('#add-wallet');
        const removeWalletCheckbox = document.querySelector('#remove-wallet');
        const walletInput = document.querySelector('#wallet');
        const textInputTemplate = document.querySelector('#add-wallet-template').content;
        const selectInputTemplate = document.querySelector('#remove-wallet-template').content;

        addWalletCheckbox.checked = true;
        walletInput.innerHTML = '';
        walletInput.appendChild(textInputTemplate.cloneNode(true));

        addWalletCheckbox.addEventListener('change', () => {
            if (addWalletCheckbox.checked) {
                removeWalletCheckbox.checked = false;
                walletInput.innerHTML = '';
                walletInput.appendChild(textInputTemplate.cloneNode(true));
            } else {
                walletInput.innerHTML = '';
                walletInput.appendChild(selectInputTemplate.cloneNode(true));
            }
        });
          
        removeWalletCheckbox.addEventListener('change', () => {
            if (removeWalletCheckbox.checked) {
                addWalletCheckbox.checked = false;
                walletInput.innerHTML = '';
                walletInput.appendChild(selectInputTemplate.cloneNode(true));
            } else {
                walletInput.innerHTML = '';
                walletInput.appendChild(textInputTemplate.cloneNode(true));
            }
        });
    }