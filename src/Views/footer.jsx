import react from "react"
import "../Assets/footer.css"

let date = new Date().getFullYear()

function Footer(){
    return(
        <div id="footer">Vishal M. ©️ {date}</div>
    )
}

export default Footer