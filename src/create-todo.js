
let todoArray = [];

// factory function 
export const createTodo = (Title) => {
    console.log("calling createTodo module");
    console.log({Title});
    console.log("pushing object to todoarray");

    todoArray.push({ Title} );
    console.log(todoArray);
    return { Title};
}