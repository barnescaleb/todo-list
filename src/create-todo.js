import { clearForm } from './dom-manip';
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

    // checks to verify correct date was entered 
    // if (parseISO(DueDate) < startOfToday) {

    // }

    // Todo 
    todoArray.push({ Title });
    console.log(todoArray);

    // resets the form after submission 
    clearForm();

    return { Title };

}