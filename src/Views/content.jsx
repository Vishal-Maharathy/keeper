import react from "react"
import "../Assets/content.css"
function content(props){
    return (
        <div id="content-box">
            <div className="title">This is Title {props.id}</div>
            <div className="task-name">{props.task}</div>
        </div>
    )
}

export default content