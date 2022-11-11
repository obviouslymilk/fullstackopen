const Total = ({ exercies }) => {

    const sum = exercies.reduce((a, b) => a + b, 0);

    return <p>Number of exercises {sum}</p>
}

export default Total;