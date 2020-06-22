import React, { useState } from "react";
import { ModalCont, Mod, MH1, MBody, DetailsBtn, DetailsBtn2 } from "../Styles/Jobsheets"


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


    if (details === true) {
        return (
            <>
            <DetailsBtn2 onClick={toggle}>View Details</DetailsBtn2>
            <ModalCont>
                <Mod isOpen={details} toggle={toggle}> 
                <MH1 data-cy="assign-tech-header">{clientInfo.companyName}</MH1>
                <MBody>
                    <p>{phone}</p>
                    <br></br>
                    <p>{clientInfo.street}</p>
                    <p>{clientInfo.city}</p>
                    <p>{clientInfo.state}</p>
                    <p>{clientInfo.zip}</p>
                </MBody>
                </Mod>
            </ModalCont>
            </>
        )
    } else {
        return (
            <DetailsBtn onClick={toggle}>View Details</DetailsBtn>
        )
    }
};

export default ClientInfo;
