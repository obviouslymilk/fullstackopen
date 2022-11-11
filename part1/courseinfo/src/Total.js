const Total = ({ parts }) => {

    let sum = 0;

    for (const part of parts) {
        sum += part.exercises;
    }
    
    return <p>Number of exercises {sum}</p>
}

export default Total;