import React from "react"
import { HelpButton, Footer } from "../../../App/Styles/Dashboard/index.js"
import HelpModal from "../Components/HelpModal"


const Help = props => {
    console.log(props, ' is props in Help')

    // let imgURL = "";

    // const findRelevantHelp = () => {
    //     if (props.linkTo === "ClientsListHelp") {
    //         console.log("You would like help with the Clients List")
    //         return (
    //          <p> HELP ON CLIENTS</p>
    //         );

    //     } if (props.linkTo === "ProjectListHelp") {
    //         console.log("You would like help with the Projects List")
    //         return (
    //             <p> HELP ON PROJECTS</p>
    //         )
    //     }
    // }


    return (
        <HelpModal imgURL={props.linkTo}/>
    )
}


export default Help;