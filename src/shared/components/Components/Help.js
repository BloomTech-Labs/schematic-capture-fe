import React from "react"
import HelpModal from "../Components/HelpModal"


const Help = props => {
    console.log(props, ' is props in Help')

    return (
        <HelpModal imgURL={props.linkTo}/>
    )
}


export default Help;