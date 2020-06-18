import React, { useState } from "react"
const { ModalCont, Mod, MH1, MBody } = require("../../../App/Styles/Jobsheets");
const { HelpButton, Footer } = require("../../../App/Styles/Dashboard");

const HelpModal = (props) => {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const helpType = (type) => {
        switch (type) {
            case "ClientsListHelp":
                return (
                    <>
                    <h2>This is the Clients Page.</h2>
                    <hr></hr>
                    <p> Here you can view your clients and if you are an admin, you have the option to add a new client using the button in the top right.</p>
                    <hr></hr>
                    <p>Select your name in the top right to log out.</p>
                    </>
                )
            case "ProjectListHelp":
                return (
                    <>
                    <h2>This is the Projects List Page.</h2>
                    <hr></hr>
                    <p> Here you can view the list of projects associated with the client you chose on the previous page.</p>
                    <hr></hr>
                    <p>If you are an admin, you have the option to "Assign Techs." This will prompt you to choose a technician, project, and date. The technician will recieve an email notifying them of their new assignment.</p>
                    <hr></hr>
                    <p>Select your name in the top right to log out.</p>
                    </>
                )
            case "ProjectHelp":
                return (
                    <>
                    <h2>This is the Project Details Page.</h2>
                    <hr></hr>
                    <p> Here you can view the list of jobsheets associated with the project you chose on the previous page.</p>
                    <hr></hr>
                    <p>If you are an admin, you have the option to "Invite User." This will prompt you to create a name, email, and role for someone new to the app. The new user will recieve an email with instructions on completing registration.</p>
                    <hr></hr>
                    <p>Select your name in the top right to log out.</p>
                    </>
                )
            case "JobsheetsHelp":
                    return (
                        <>
                        <h2>This is the Jobsheet Details Page.</h2>
                        <hr></hr>
                        <p> Here you can view the list of components associated with the jobsheet you chose on the previous page.</p>
                        <hr></hr>
                        <p>Here you can download CSV's, update part numbers, and view images.</p>
                        <hr></hr>
                        <p>Select your name in the top right to log out.</p>
                        </>
                    )
            default:
                break;
        }
    }

    return (
        <ModalCont>
            <Footer>
                <HelpButton onClick={toggle}>?</HelpButton>
                <Mod isOpen={modal} toggle={toggle}> 
                <MH1 data-cy="assign-tech-header" >Need some help?</MH1>
                <MBody>{helpType(props.imgURL)}</MBody>
                </Mod>
            </Footer>
        </ModalCont>
    )
 
  
}

export default HelpModal