import { initialPageLoad } from './initial-page-load';
import { today } from  './today.js';
import './style.css';

initialPageLoad();

// Tab Switcher Module 

let tabsSwitch = (function() {

    const inboxTab = document.querySelector(".inbox");
    inboxTab.addEventListener("click", initialPageLoad);

    const todayTab = document.querySelector(".today");
    todayTab.addEventListener("click", today);
    
})();