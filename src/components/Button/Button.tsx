import "./Button.scss"

type props = {
    type?: 'submit' | 'button'
    children: React.ReactNode
    onClick?: any
    className?: string
}

export default function button(props: props) {
    return (
        <button 
            type={props.type} 
            onClick={props.onClick}
            className={`button ${props.className}`}
        >
            {props.children}
        </button>
    )
}