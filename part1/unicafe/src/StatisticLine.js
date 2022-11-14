const StatisticLine = ({ text, value }) => {
    return <tr>
        <td>{String(text)}</td>
        <td>{String(value)}</td>
    </tr>
}

export default StatisticLine