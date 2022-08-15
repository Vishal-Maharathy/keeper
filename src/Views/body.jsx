import react from "react"
import "../Assets/style.css"
import Content from "./content.jsx"

// could recieve this array from backend after making a request through controllers
let taskList = [
{id: "1", task:"Complete Task 1"},
{id: "2", task:"Complete Task 2"},
{id: "3", task:"Complete Task 3"},
{id: "4", task:"Complete Task 4"},
{id: "5", task:"Complete Task 5"},
{id: "6", task:"Complete Task 6"},
{id: "7", task:"Complete Task 7"},
{id: "8", task:"Complete Task 8"},
{id: "9", task:"Complete Task 9"},
]

// below is passed data(single element from the above array) to the function using Array.map function
function loadTaskList(data){
    return <Content 
    // below is key which is important else react will give warning. This is used to identify each block differently
        key = {data.id}
        id = {data.id}
        task = {data.task}
    />
}

function main(){
    return(
        <div id="main">
            {/* basically a for loop that will pass each element of the array to the function */}
            {taskList.map(loadTaskList)}
        </div>
    )
}

export default main