import react from "react"
import "../Assets/style.css"
import Content from "./content.jsx"
function main(){
    return(
        <div id="main">
            <Content id="1" task="Complete Task 1"/>
            <Content id="2" task="Complete Task 2"/>
            <Content id="3" task="Complete Task 3"/>
        </div>
    )
}

export default main