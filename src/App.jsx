import React from "react"
import Header from "./Views/header"
import Footer from "./Views/footer"
import Main from "./Views/body"
import "./Assets/style.css"

function App(){
    return (
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
        
    )
}

export default App;