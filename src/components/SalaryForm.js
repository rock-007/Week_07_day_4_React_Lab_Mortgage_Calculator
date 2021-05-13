import React from "react";

const SalaryForm = ({ infoSubmited }) => {
    const handlePersonInfo = function (event) {
        event.preventDefault();
        console.log(event.target.personName.value);
        const name = event.target.personName.value;
        const salary = event.target.personSalary.value;
        const deposit = event.target.personDeposit.value;
        const montlyOutgings = event.target.montlyOutgings.value;
        const lengthOfMortgage = event.target.lengthOfMortgage.value;
        const interestRate = event.target.interestRate.value;
        infoSubmited(
            name,
            salary,
            deposit,
            montlyOutgings,
            lengthOfMortgage,
            interestRate
        );
        event.target.reset();
    };
    return (
        <>
            <form onSubmit={handlePersonInfo}>
                <input
                    type="text"
                    id="personName"
                    name="personName"
                    placeholder="Please enter name"
                />
                <input
                    type="text"
                    id="personSalary"
                    name="personSalary"
                    placeholder="Please enter salary"
                />
                <input
                    type="text"
                    id="personDeposit"
                    name="personDeposit"
                    placeholder="Please enter your Deposit amount"
                />
                <input
                    type="text"
                    id="montlyOutgings"
                    name="montlyOutgings"
                    placeholder="Please enter your Montly Outgings"
                />
                <input
                    type="text"
                    id="lengthOfMortgage"
                    name="lengthOfMortgage"
                    placeholder="Please enter no of years Mortgage required"
                />
                <input
                    type="text"
                    id="interestRate"
                    name="interestRate"
                    placeholder="Please enter the Interest Rates"
                />
                <input type="submit" value="submit" />
            </form>
        </>
    );
};

export default SalaryForm;
