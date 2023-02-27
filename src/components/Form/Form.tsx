import './Form.scss'

type props = {
    children?: React.ReactNode
}

export default function Form(props: any) {

    return (
        <form className="form" onSubmit={props.onSubmit}>
            {props.children}
        </form> 
    )
}