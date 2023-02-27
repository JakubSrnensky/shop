import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import './Fieldset.scss'

type props = {
    as: 'input'
    type: 'text'
    name?: string
    id?: string
    label?: string
    placeholder?: string
    className?: 'search' | string
}

export default function Fieldset(props: any) {

    const [ email, setEmail ] = useState<boolean>(false)


    useEffect(() => {

        if(props?.required !== true) {
            if( props.name === "email" && !props?.required?.includes("@") ){
                setEmail(true)
            } else {
                setEmail(false)
            }
        }

    }, [props?.required])

    const [ isChecked, setIsChecked ] = useState<boolean>(true)


    return (
        <fieldset className="fieldset">

            <label className={`fieldset-label  ${props.className === "checkbox" ? "fieldset-checkboxWrap" : ""}`}>

            {props.label && 
                <span className="fieldset-title">
                    
                    {props.label}
                    {props.required !== undefined && <sup>*</sup>}
                
                </span>
            }

            {props.type === "checkbox" &&
                <React.Fragment>
                    <span className={`fieldset-checkboxFrame ${isChecked ? "fieldset-checkboxFrame-isActive" : ""}`}>
                        <FontAwesomeIcon icon={faCheck} />
                    </span>
                
                    <props.as 
                        type={props.type} 
                        name={props.name}
                        id={props.id} 
                        className={`fieldset-${props.as}  ${props.className ? `fieldset-${props.className}` : ''}`}
                        onChange={() => setIsChecked((prev: boolean) => !prev)}
                        onClick={props.onClick}
                        defaultChecked
                    />
                </React.Fragment>
            }

            {props.type !== "checkbox" &&
                <props.as 
                    type={props.type} 
                    name={props.name}
                    id={props.id}
                    placeholder={props.placeholder} 
                    className={`fieldset-${props.as}  ${props.className ? `fieldset-${props.className}` : ''}`}
                    onChange={props.onChange}
                    onClick={props.onClick}
                />
            }

            </label>

            {!props.required && props.required !==undefined && <span className="fieldset-errorMsg">Toto pole je povinné</span>}<br />
            
            {email && <span className="fieldset-errorMsg">E-mail je ve špatném formátu</span>}
        
        </fieldset>
    )
}