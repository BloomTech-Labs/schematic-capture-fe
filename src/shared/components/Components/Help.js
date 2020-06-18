import React from "react"
import { HelpButton, Footer } from "../../../App/Styles/Dashboard/index.js"
import TechModal from "../../../App/Project/ProjectBoard/TechPopup"


const Help = props => {
    console.log(props, ' is props in Help')

    let imgURL = "";

    const findRelevantHelp = () => {
        if (props.linkTo === "ClientsListHelp") {
            console.log("You would like help with the Clients List")
            return (
                <TechModal />
            );

        } if (props.linkTo === "ProjectListHelp") {
            console.log("You would like help with the Projects List")
            return (
                <p>HELP ON THE PROJECTS LIST</p>
            )
        }
    }


    return (
        <>
        <Footer>
            <HelpButton to={findRelevantHelp}> ?</HelpButton>
        </Footer>
        </>
    )
}


export default Help;