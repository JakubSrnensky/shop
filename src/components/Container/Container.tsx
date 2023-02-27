import './Container.scss'

type props = {
    children: React.ReactNode
}

export default function Container(props: props) {
    return (
        <div className="container">
            {props.children}
        </div>
    )
}