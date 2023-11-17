import dogHoseImg from './images/dog-hose.jpg';
import dogLakeImg from './images/dog-lake.jpg';
import kibbleImg from './images/kibble.jpg';
import wetFoodImg from './images/wet-dog-food.jpg';
import homemadeDogFoodImg from './images/homemade-dog-food.jpg';

function setupMenuItem(parentDiv, itemName, itemPrice, itemImg, itemDesc) {
    const itemDiv = document.createElement('div');
    itemDiv.setAttribute('class', 'menuItem');
    parentDiv.appendChild(itemDiv);
    const itemTitleDiv = document.createElement('div');
    itemTitleDiv.setAttribute('class', 'menuItemTitleDiv');
    itemDiv.appendChild(itemTitleDiv);
    const menuItemName = document.createElement('h4');
    menuItemName.textContent = itemName;
    menuItemName.setAttribute('class', 'menuItemName');
    itemTitleDiv.appendChild(menuItemName);
    const menuItemPrice = document.createElement('h4');
    menuItemPrice.textContent = itemPrice;
    menuItemPrice.setAttribute('class', 'menuItemPrice');
    itemTitleDiv.appendChild(menuItemPrice);
    const menuItemImg = document.createElement('img');
    menuItemImg.src = itemImg;
    menuItemImg.setAttribute('class', 'menuItemImg');
    itemDiv.appendChild(menuItemImg);
    const menuItemDesc = document.createElement('p');
    menuItemDesc.setAttribute('class', 'menuItemDescription');
    menuItemDesc.textContent = itemDesc;
    itemDiv.appendChild(menuItemDesc);
}

function setupMenu() {
    const content = document.querySelector('#content');
    //Setup title
    const h2 = document.createElement('h2');
    h2.textContent = "The Dogstaurant Menu";
    content.appendChild(h2);
    //Setup menu
    const menuDiv = document.createElement('div');
    menuDiv.setAttribute('id', 'menuDiv')
    content.appendChild(menuDiv);
    //Setup beverages
    const beveragesDiv = document.createElement('div');
    beveragesDiv.setAttribute('class', 'menuSection');
    menuDiv.appendChild(beveragesDiv);
    const beveragesTitle = document.createElement('h3');
    beveragesTitle.textContent = "Beverages";
    beveragesDiv.appendChild(beveragesTitle);
    setupMenuItem(beveragesDiv, "Hose Water", "Free", dogHoseImg, "Our complimentary classic hose water is a mixture of fun and hydration; a perfect harmony of sustainable entertainment.");
    setupMenuItem(beveragesDiv, "Lake Water", "$5.00", dogLakeImg, "Our lake water is organic and parasite-free, filtered through five layers of algae. It is local delicacy only found here by The Dogstaurant.");
    //Setup main courses
    const mainCourseDiv = document.createElement('div');
    mainCourseDiv.setAttribute('class', 'menuSection');
    menuDiv.appendChild(mainCourseDiv);
    const mainCourseTitle = document.createElement('h3');
    mainCourseTitle.textContent = "Main Courses";
    mainCourseDiv.appendChild(mainCourseTitle);
    setupMenuItem(mainCourseDiv, "Kibble", "$10.00", kibbleImg, "Kibble is a classic for a reason. Our perfected formula delivers the crunch and nutrition your pup needs to live happy and healthy.");
    setupMenuItem(mainCourseDiv, "Wet Food", "$15.00", wetFoodImg, "Wet food is a chance for you to give your dog more love. Ask about our seasonal flavor selections - hand crafted to perfection.");
    setupMenuItem(mainCourseDiv, "The Fancy Feast", "$25.00", homemadeDogFoodImg, "For those who love their dog the most, we offer the highest quality meal. This combination of nutrition and love will keep even the most sensitive stomach happy.");
};

export { setupMenu };