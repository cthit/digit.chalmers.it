import React from "react";
import { DigitDesign } from "@cthit/react-digit-components";

/*export const Repo = ({ title, noReq, repos }) => (
    <DigitDesign.Card width="600px" height="200px">
        <DigitDesign.CardBody
            style={{ cursor: "pointer" }}
            onClick={console.log("You clicked the card. Good job")}
        >
            <DigitLayout.Row>
                <DigitText.Title text={title} />
                <DigitText.Subtitle2
                    text={"Number of pull requests: " + noReq}
                />
            </DigitLayout.Row>
        </DigitDesign.CardBody>
    </DigitDesign.Card>
);*/

export const Repo = ({ title }) => (
    <div style={{margin: "30px"}}>
        <DigitDesign.Card width="600px">
            <DigitDesign.CardBody>
                <h3>{title}</h3>
            </DigitDesign.CardBody>
        </DigitDesign.Card>
    </div>
);
