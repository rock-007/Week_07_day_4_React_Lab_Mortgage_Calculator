import React, { useState, useEffect } from "react";
import TotalEarnings from "../containers/TotalEarnings";
import SalaryForm from "../components/SalaryForm";
import AffordabilityResult from "../components/AffordabilityResult";
const CalculatorContainer = () => {
    const [personInfo, setPersoninfo] = useState({
        name: null,
        salary: null,
        potentailAffordibility: null,
        monthlyOutgoings: null,
        lengthOfMortgage: null,
        interestRate: null,
    });

    useEffect(() => {}, [personInfo]);

    const infoSubmited = (
        name,
        salary,
        deposit,
        montlyOutgings,
        lengthOfMortgage,
        interestRate
    ) => {
        console.log(name, salary);
        setPersoninfo({
            name: name,
            salary: salary,
            potentailAffordibility: null,
            deposit: deposit,
            montlyOutgings: montlyOutgings,
            lengthOfMortgage: lengthOfMortgage,
            interestRate: interestRate,
        });
    };
    const updateInfo = (update) => {
        console.log("xx", update);
        setPersoninfo(update);
    };

    return (
        <>
            <SalaryForm infoSubmited={infoSubmited} />
            {personInfo.potentailAffordibility !== null ? null : (
                <TotalEarnings
                    personInfo={personInfo}
                    updateInfo={updateInfo}
                />
            )}
            {personInfo.potentailAffordibility !== null ? (
                <AffordabilityResult personInfo={personInfo} />
            ) : null}
        </>
    );
};

export default CalculatorContainer;
