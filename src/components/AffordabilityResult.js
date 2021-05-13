import CalculateAffordability from "../containers/CalculateAffordability";

const AffordabilityResult = ({ personInfo }) => {
    const calculateAffordability = (personInfo) => {
        console.log("f1", personInfo);
        return <CalculateAffordability personInfo ={personInfo}/>;
    };

    return (
        <>
            <h1>Persona Details</h1>
            <p>person name: {personInfo.name}</p>
            <p>person salary: {personInfo.salary}</p>
            <p> {calculateAffordability(personInfo)}</p>
        </>
    );
};

export default AffordabilityResult;
