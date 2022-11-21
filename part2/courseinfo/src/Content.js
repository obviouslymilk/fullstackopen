import Part from './Part';

const Content = ({ parts }) => {
    const children = parts.map((part, index) => {
        return <Part part={part.name} exercises={part.exercises} key={index} />
    })

    return <>
        {children}
    </>
}

export default Content;