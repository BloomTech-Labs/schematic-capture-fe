import React, { useState } from "react";
import { SpaceBetween, Container, Mod, MH1, MBody, DetailsBtn, DetailsBtn2, BorderedDiv, MDiv, MButton } from "../Styles/Jobsheets";
import { faMapMarkerAlt, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const ClientInfo = (props) => {


    const [details, setDetails] = useState(false);
    const toggle = () => setDetails(!details);

    const clientInfo = props.info

    const formatToPhone = phone => {
        const zip = phone.substring(0, 3)
        const middle = phone.substring(3, 6)
        const last = phone.substring(6, 10)

        if (phone.length !== 10) {
            return phone;
        }

        return `(${zip}) ${middle}-${last}`
    }

    let phone = formatToPhone(clientInfo.phone)


    if (details === true) {
        return (
            <>
            <DetailsBtn2 onClick={toggle}>View Details</DetailsBtn2>
            <Container>
                <Mod isOpen={details} toggle={toggle}> 
                <MH1 data-cy="assign-tech-header">{clientInfo.companyName}</MH1>
                <hr></hr>
                <MBody>
                    <SpaceBetween>
                        <div>
                            <BorderedDiv>
                                <FontAwesomeIcon icon={faPhone} />
                                <MDiv>
                                    <p>{phone}</p>
                                </MDiv>
                            </BorderedDiv>
                            <BorderedDiv>
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                                <MDiv>
                                    <p>{clientInfo.street}</p>
                                    <p>{clientInfo.city}</p>
                                    <p>{clientInfo.state}</p>
                                    <p>{clientInfo.zip}</p>
                                </MDiv>
                            </BorderedDiv>
                            <BorderedDiv>
                            <FontAwesomeIcon icon={faUser} />
                                <MDiv>
                                    {/* @TODO: Pull this info from props */}
                                    <p>{clientInfo.contactName}</p>
                                    <p>{clientInfo.contactEmail}</p>
                                </MDiv>
                            </BorderedDiv>
                        </div>
                    </SpaceBetween>
                    <MButton onClick={toggle}>Done</MButton>
                </MBody>
                </Mod>
            </Container>
            </>
        )
    } else {
        return (
            <DetailsBtn onClick={toggle}>View Details</DetailsBtn>
        )
    }
};

export default ClientInfo;
