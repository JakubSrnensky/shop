import './Title.scss'

type props = {
    as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    className?: string
    alignCenter?: boolean
    children: React.ReactNode
}

export default function Title(props: props) {
    return (
        <props.as className={`title title-${props.as} ${props.className} ${props.alignCenter && "title-center" }`}>
            {props.children}
        </props.as>
    )
}

Title.defaultProps = {
    className: "",
    alignCenter: "",
}