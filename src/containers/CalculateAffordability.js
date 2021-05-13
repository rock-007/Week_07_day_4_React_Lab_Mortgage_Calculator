const CalculateAffordability = ({ personInfo }) => {
    const calculation = (personInfo) => {
        // yeaers + interst
        const years = personInfo.lengthOfMortgage;

        const affordability =
            personInfo.potentailAffordibility - personInfo.montlyOutgings * 12;
        const interestRates = personInfo.interestRate / 100;
        console.log(personInfo.interestRate);

        const potentailMontlyPayment =
            (affordability / (12 * years)) * interestRates;

        return {
            affordability: affordability,
            potentailMontlyPayment: potentailMontlyPayment,
        };
    };

    return (
        <>
            <p>Total Affodability: {calculation(personInfo).affordability}</p>
            <p>
                Monthly Repayments:{" "}
                {calculation(personInfo).potentailMontlyPayment}
            </p>
        </>
    );
};

export default CalculateAffordability;
