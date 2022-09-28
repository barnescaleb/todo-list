import { initialPageLoad } from './initial-page-load.js';
import { displayDefaultProject, displayTheForm, clearForm,  } from './dom-manip.js';
import { createTodo} from './create-todo.js';


import { today } from  './today.js';
import './style.css';



// first page user sees 
initialPageLoad();



// todo event for TODO and project creation 
let clickEventsModule = (function() {

    const addNewTodo = document.querySelector(".add-project");
    addNewTodo.addEventListener("click", displayTheForm);

    const cancelBtn = document.querySelector(".cancel-btn");
    cancelBtn.addEventListener("click", clearForm);

})();

// create todo module 
const myTodo = createTodo("Grocerys");
console.log("show me properties on myTodo", myTodo);

// Tab Switcher Module 

let tabsSwitch = (function() {

    const inboxTab = document.querySelector(".inbox");
    inboxTab.addEventListener("click", initialPageLoad);

    const todayTab = document.querySelector(".today");
    todayTab.addEventListener("click", today);

})();