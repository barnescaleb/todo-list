import { clearForm } from './dom-manip';
import { saveToDoToLocal } from './local-storage.js'
import { compareAsc, format, parseISO, startOfToday } from 'date-fns';

// creates array for ToDo
let todoArray = [];

// factory function 
export const createTodo = () => {

    let Title = document.getElementById("Title").value;

    // checks if fields is empty
    if (Title === "" ) {
        alert("Please try again!");
        return;
    }

    // Todo 
    todoArray.push({ Title });
    console.log(todoArray);

    // pushes object to local storage
    saveToDoToLocal( { Title });

    // resets the form after submission 
    clearForm();

    return { Title };

}