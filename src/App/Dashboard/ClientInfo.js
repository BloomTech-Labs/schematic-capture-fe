import React, { useState } from "react";
import { ModalCont, Mod, MH1, DetailsBtn } from "../Styles/Jobsheets"


const ClientInfo = (props) => {


    const [details, setDetails] = useState(false);
    const toggle = () => setDetails(!details);

    console.log(props, ' is props in ClientInfo')

    const clientInfo = props.info

    const formatToPhone = phone => {
        const zip = phone.substring(0, 3)
        const middle = phone.substring(3, 6)
        const last = phone.substring(6, 10)

        return `(${zip}) ${middle}-${last}`
    }

    let phone = formatToPhone(clientInfo.phone)


    if (details == true) {
        return (
            <>
            <DetailsBtn onClick={toggle}>Hide Details</DetailsBtn>
            <p>{phone}</p>
            <p>{clientInfo.street}</p>
            <p>{clientInfo.state}</p>
            <p>{clientInfo.zip}</p>
            </>
        )
    } else {
        return (
            <DetailsBtn onClick={toggle}>View Details</DetailsBtn>
        )
    }
};

export default ClientInfo;
