import { setupMain } from "./mainPage";
import { setupMenu } from "./menu";
import { setupContact } from "./contact";
import './style.css';
import "./index.html";

const content = document.querySelector('#content');
const tabHome = document.querySelector('#tabHome');
const tabMenu = document.querySelector('#tabMenu');
const tabContact = document.querySelector('#tabContact');



function removeChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function clickTab(tabFunction) {
    if (content.firstChild){
        removeChildNodes(content);
    }
    tabFunction();
    // Event.target.setAttribute('class', 'tabSelected');
}

clickTab(setupMain);

tabHome.addEventListener('click', function() {
    clickTab(setupMain)
});
tabMenu.addEventListener('click', function() {
    clickTab(setupMenu)
});
tabContact.addEventListener('click', function() {
    clickTab(setupContact)
});