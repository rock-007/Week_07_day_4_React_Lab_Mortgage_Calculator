import React from "react";

const TotalEarnings = ({ personInfo, updateInfo }) => {
    if (personInfo.name !== null) {
        console.log("yy", personInfo);
        const handleCalculation = (personInfo) => {
            console.log("zz", personInfo.deposit);
            const potentailAffordibility =
                Number(personInfo.salary * 3) + Number(personInfo.deposit);
            const updatedPersonInfo = {
                ...personInfo,
                potentailAffordibility: potentailAffordibility,
            };
            updateInfo(updatedPersonInfo);
        };
        handleCalculation(personInfo);
    }

    return (
        <>
            <h1>Hi there!</h1>
        </>
    );
};

export default TotalEarnings;
