const buttons = document.querySelectorAll("#size-buttons button");
const itemList = document.querySelector("#item-list");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    // remove the active class from all buttons
    buttons.forEach(button => button.classList.remove("active"));
    // add the active class to the clicked button
    button.classList.add("active");
    // remove all size classes from the item list
    itemList.className = "";
    // add the class corresponding to the clicked button to the item list
    const className = button.dataset.class;
    itemList.classList.add(className);
    // add the mx-auto class back to the item list
    itemList.classList.add("mx-auto");

   /* 
    Cannot pull 'all' as a list of dictionaries, need a JSON conversion
        // check if the clicked button is .small-card or .large-card
    if (className === "small-card" || className === "large-card") {
      // clear the item list
      itemList.innerHTML = "";
      // insert the card template for each item
      all.forEach(item => {
        const cardHTML = `
          <div class="card" style="width: 18rem;">
            <img src="${item.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${item.name}</h5>
              <p class="card-text">${item.slug}</p>
            </div>
          </div>
        `;
        itemList.innerHTML += cardHTML;
      });
    }*/
  });
});

