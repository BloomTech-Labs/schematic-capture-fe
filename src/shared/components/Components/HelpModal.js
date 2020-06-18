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
                    <p>This is how you use the Clients Page....</p>
                )
            case "ProjectListHelp":
                return (
                    <p>This is how you use the Projects Page...</p>
                )
            case "ProjectHelp":
                return (
                    <p>This is how you use the Project Page...</p>
                )
            case "JobsheetsHelp":
                    return (
                        <p>This is how you use the Jobsheets Page...</p>
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
                <MH1 data-cy="assign-tech-header" >Help</MH1>
                <MBody>{helpType(props.imgURL)}</MBody>
                </Mod>
            </Footer>
        </ModalCont>
    )
 
  
}

export default HelpModal