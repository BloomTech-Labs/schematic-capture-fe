import React, { Fragment } from "react";

import { StyledButton, Text } from "./Styles";

const Button = props => {
    const { variant, buttonText, iconColor, iconSize, icon, ...rest } = props;

    switch (variant) {
        case "secondary":
            rest.className = `${rest.className} ${secondaryStyle}`;
            break;
        default:
            rest.className = `${rest.className} ${primaryStyle}`;
    }

    return (
        <Fragment>
            <StyledButton {...rest}>
                <Text text={buttonText} withPadding={!!icon} />
            </StyledButton>
        </Fragment>
    );
};

export default Button;
