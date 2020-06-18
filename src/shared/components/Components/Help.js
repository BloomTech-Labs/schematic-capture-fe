import React from "react"
import { HelpButton, Footer } from "../../../App/Styles/Dashboard/index.js"

const Help = props => {
    console.log(props, ' is props in Help')

    // let relevantHelp = "";

    // if (props.linkTo === "ClientsListHelp") {
    //     let relevantHelp = "?"
    //     console.log("You would like help with the Clients List")
    //     return relevantHelp;
    // } if (props.linkTo === "ProjectListHelp") {
    //     let relevantHelp = "??"
    //     console.log("You would like help with the Projects List")
    //     return relevantHelp
    // }

    return (
        <>
        <Footer>
            <HelpButton> ?</HelpButton>
        </Footer>
        </>
    )
}


export default Help;