const buttons = document.querySelectorAll("#size-buttons button");
const itemList = document.querySelector("#item-list");
// parse the 'all' string into an object
const allData = JSON.parse(all);

// get the stored size from local storage
const storedSize = localStorage.getItem('size');

// apply the stored size to the item list
if (storedSize) {
    const selectedButton = document.querySelector(`button[data-class="${storedSize}"]`);
    // add the selected class to the selected button
    selectedButton.classList.add("selected");
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

buttons.forEach(button => {
    button.addEventListener("click", () => {
        // remove the selected class from all buttons
        buttons.forEach(button => button.classList.remove("selected"));
        // add the selected class to the clicked button
        button.classList.add("selected");
        // remove all size classes from the item list
        itemList.className = "";
        // add the class corresponding to the clicked button to the item list
        const className = button.dataset.class;
        itemList.classList.add(className);
        // add the mx-auto class back to the item list
        itemList.classList.add("mx-auto");

        // store the size in local storage
        localStorage.setItem('size', className);

        // check if the clicked button is .small-card or .large-card
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
      
