import Part from './Part';

const Content = ({ parts, exercises }) => {
    const children = parts.map((part, index) => {
        return <Part part={part} exercises={exercises[index]} key={index} />
    })

    return <>
        {children}
    </>
}

export default Content;