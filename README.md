# Piranha
#### Video Demo:  <URL HERE>
#### Description:

The above video and following description describe the purpose and creation of CodeWithEggly and sgsmi's CS50 final project, the Piranha.
Piranha will be a script that will notify us, via email or otherwise, of new listings on OpenSea. It will do this by utilisting OpenSea's Stream API. 
There will be options for narrowing the script's alerts to specific collections and to within a specific price range.

### app.py and templates
app.py renders a front-page, '/' route, which displays featured listings. The page displays a graphical timeline of NFT 'detections' - OpenSea listings which fell within the filters specified by saved conditions.

#### mainstream.js
mainstream.js will interact with stream-api and filter listings based upon the conditions passed to it. 
Currently this file serves no pupose as we were unable to aqcuire an API key for the OpenSea marketplace.

#### piranha.db
Three tables exist in the database: collections, containing information about NFT collections; keyData, containing data unique to each NFT which needs to be quickly accessed; moreData, containing information which doesn't need to be so readily available. All three tables are linked, using keyData's key and collections' (contract) address. The decision to split NFT information into two tables was so that smaller queries can be made in app.py, and more-succinct Jinja code can be used in buildinh website features such as graph.js.
Data on SQL implementation is available in /SQL/.

#### ROUTES
TODO: Why different routes are followed in app.py
        Talk about /ping

##### Index()
TODO: The '/' route

##### Conditions()
Its '/conditions' route allows selecting of the script's search terms which are saved in a json file. Currently the conditions form allows selection of:
  - Collection
  - Trading Volume
  - Minimum and Maximum ETH price
  - Margin between listing and WETH offers
  - Number of WETH offers
  - Availability of Sudoswap pool for listing's contract.
These conditions, or search filters, are saved as search_conditons.JSON so as to be accessed by other files (such as mainstream.js) and be saved for use next time the app is run.

##### Activity()
TODO: '/activity'


#### TEMPLATES

##### layout.html
Site template which calls all appropriate stylesheets and javascript files, implemented using JINJA block tags.
Contains <head> and <body> tags, as well as the [Nav](https://github.com/CodeFromEggly/PiranhaProject#nav).

##### index.html

###### CAROUSEL
Bootstrap carousel which is fed 'all' dict from the ['/' route](https://github.com/CodeFromEggly/PiranhaProject#index)'. This dict is used to populate the carousel with bootstrap cards, separating the data into segements of 4 for each slide.

TODO: featured/empty cards

##### activity.html
TODO: 
- activityStyles.css
- activityScript.css
- card-size local storage variable & activity table

### UI

#### STYLING

The PIRANHA UI is styled almost entirely through .css files. Much of the displayed data is taken from an ever expanding database, so scalability of styling is important.

Whilst Bootstrap has been very useful in the design of this UI, most of its components have been heavily modified using CSS.

##### COLOUR SCHEME

For consistency in the UI, the colour scheme is implemented with custom CSS variables defining brand colours and greys of different hues:

--grey-00:         #344336;
--grey-10:         #59725c;
--grey-20:         #759079;
--grey-30:         #90a593;
--grey-40:         #a7b7a9;
--grey-50:         #bac7bc;
--grey-60:         #ccd5cd;
--grey-70:         #dce2dd;
--grey-80:         #ebeeeb;
--grey-90:         #f8faf9;

--brand-main:      #c47365;
--brand-bright:    #39b389;
--brand-light:     #f4fbf9;
--brand-med:       #a9decc;
--brand-dark:      #164736;

The following free resources were useful for achieving this:

https://palx.jxnblk.com/ - 'Automatic UI Colour Palette Generator' with a base colour of #36B24A 
https://color.adobe.com/create/color-wheel - Adobe's colour wheel, used for selecting complimentary brand colours
https://toolness.github.io/accessible-color-matrix/ - 'Accessible Colour Palette Builder' for ensuring text readability

This method of adding a colour scheme allows for easy modifications to the website design, as well as simple implementation of [light/dark](https://github.com/CodeFromEggly/PiranhaProject#lightdark-mode) mode using javascript.

##### LIGHT/DARK MODE

The default colour scheme is 'Light Mode' held in :root{} in styles.css, 'Dark Mode' is held as a .dark-mode{} class.

When the page loads - 'Dark Mode', a boolean variable is added to Local Storage and set to false.

When #brightness-button is clicked to [activate / deactivate] Dark Mode, the following occurs:
- .dark-mode is [added to / removed from] the 'HTML' element, 
- 'Dark Mode' is set to [true / false] in local storage
- The class of #brightness-button is swapped between .bi bi-brightness-high and .bi bi-moon-fill
- If it is present in the DOM .carousel-dark is [added to / removed from] #cardCarousel
- The page is reloaded

#### NAV

The initial design featured a bootstrap navbar however this was too bulky and did not fit with the overall theme. Instead, the nav components have been designed without a framework to match the minimalism throughout the site.

Several :hover CSS functions have been added to the navigational icons improve the overall UX, including colour, pointer and positional changes.

##### ACTIVE NAV (JavaScript)

Each time a page is loaded, the JavaScript for this function does the following:

- Gets the current page path and stores it in the activePage variable.
- Removes the '/' character from the activePage string, if it exists.
- If the resulting string is empty, it sets the activePage variable to 'Home' instead.
- Sets the value of the active-page item in local storage to the activePage variable.
- Removes the active class from all nav items.
- Adds the active class to the nav item with the id attribute matching the activePage variable.

