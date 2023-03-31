import React from "react";
import Box from "./Box/Box";
import PersonInfo from "./PersonInfo/PersonInfo";
import Payments from "./Payments/Payments";

function Content() {
    return <div class="d-flex flex-row flex-wrap">
        <PersonInfo/>
        <Payments/>
        <Box/>
    </div>;
}

export default Content;
