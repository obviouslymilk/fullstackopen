import StatisticLine from './StatisticLine'
const Statistics = ({good, neutral, bad}) => {

    const all = good + neutral + bad

    function calculateAverage() {
        return ((good + bad * -1) / all)
    }

    function calculatePositive() {
        return (good / all) * 100
    }

    if ((good || neutral || bad) === 0) {
        return <div>
            No feedback given
        </div>
    }

    return(
        <div>
            <table>
                <tbody>
                    <StatisticLine text="Good:" value={good} />
                    <StatisticLine text="Neutral:" value={neutral} />
                    <StatisticLine text="Bad:" value={bad} />
                    <StatisticLine text="All:" value={all} />
                    <StatisticLine text="Average:" value={Math.floor(calculateAverage() * 10) / 10} />
                    <StatisticLine text="Positive:" value={Math.floor(calculatePositive() * 10) / 10 + "%"} />
                </tbody>
            </table>
      </div>
    )
}

export default Statistics