import React from "react"
import ReactDom from "react-dom"


function HelloWorld(){

    return <h2>Hello World</h2>
}

ReactDom.render(<HelloWorld/>,document.getElementById("root"));