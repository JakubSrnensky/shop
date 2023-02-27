import { useEffect, useState } from "react"
import './Amount.scss'

export default function Amount(props: any) {

    const [ amount, setAmount ] = useState<any>(0)

    const decrease = (event: any) => {
        setAmount(() => {
            return amount === 0 ? amount : amount + event
        })
    }

    const increase = (event: any) => {
        setAmount(() => {
            return amount + event
        })
    }

    useEffect(() => {
        props.amount(amount)
    },[amount, props])

    return (
        <div className={`amount ${props.className}`}>
            <button type="button" onClick={() => decrease(-1)} className="amount-button">
                -
            </button>
            <span className="amount-number">
                {amount} 
            </span>
            <button type="button" onClick={() => increase(+1)} className="amount-button">
                +
            </button>
        </div>
    )
}

Amount.defaultProps = {
    className: ""
}