import { initialPageLoad } from './initial-page-load';
import './style.css';

initialPageLoad();

// Tab Switcher Module 

let tabsSwitch = (function() {

    const inboxTab = document.querySelector(".inbox");
    inboxTab.addEventListener("click", initialPageLoad);
})();