import React from "react";
import PersonInfo from "./PersonInfo/PersonInfo";
import Payments from "./Payments/Payments";
import Profit from "./Profit/Profit";
import Transactions from "./Transactions/Transactions";

function Content() {
    return (
        <div class="d-flex flex-row flex-wrap justify-content-between align-items-baseline gap-4">
            <PersonInfo />
            <Profit/>
            <Payments />
            <Transactions/>
        </div>
    );
}

export default Content;
