
import React, { useEffect, useState } from "react"
import Fieldset from "../Fieldset/Fieldset"
import { passwordChecker } from "../../library/constans"
import './Password.scss'

export default function Password (props: any){

    //set strong of password
    const [ passwordStrong, setPasswordStrong ] = useState<any>()

    const [ password, setPassword ] = useState<any>("")
    const [ rePassword, setRePassword ] = useState<any>("")
 
    useEffect(() => {
        props.fromPassword({password, rePassword})
    }, [password, rePassword])

    const passwordSpecialChars = (str: any) => {
        const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        return specialChars.test(str);
    }
      
    const passwordCheck = (event: any) => {
        setPassword(event.target.value)

        const passwordLength = event.target.value 

        if(passwordLength.length === 0) {
            setPasswordStrong(null)
        } else if(passwordLength.length > 0 && passwordLength.length < 3) {
            setPasswordStrong(passwordChecker.week)
        } else if(passwordLength.length > 3 && passwordLength.length < 7){
            setPasswordStrong(passwordChecker.good)
        } else if(passwordLength.length > 7 && !passwordSpecialChars(event.target.value)){
            setPasswordStrong(passwordChecker.strong)
        } else if(passwordLength.length > 7 && passwordSpecialChars(event.target.value)){
            setPasswordStrong(passwordChecker.best)
        }
    }
  
    const passwordTranslate = (event: any) => {
        if (event === passwordChecker.week) {
            return "Slabé"
        } else if (event === passwordChecker.good) {
            return "Dobré"
        } else if (event === passwordChecker.strong) {
            return "Silné"
        } else if (event === passwordChecker.best) {
            return "Velmi silné"
        }
    }

    return (
        <React.Fragment>
            <Fieldset 
                as="input" 
                type="password" 
                id="password"
                name="password"
                label="Heslo"
                placeholder="Zadejte Váše heslo  ..."
                required={props.loading ? password : true}
                onChange={passwordCheck}
            />
            {password !== rePassword && <span className="fieldset-errorMsg">Hesla se neshodují</span>}
            <div className={`profile-passwordChecker profile-passwordChecker-${passwordStrong ? passwordStrong.toLowerCase() : "empty"}`}></div>
            <span className="profile-passwordChecker-text">
            {passwordStrong && `Síla hesla je: ${passwordTranslate(passwordStrong)}`}
            {!passwordStrong && `Zadejte prosím heslo`}
            </span>

            <Fieldset 
                as="input" 
                type="password" 
                id="repassword"
                name="repassword"
                label="Heslo pro ověření"
                placeholder="Zadejte Váše heslo heslo  ..."
                required={props.loading ? rePassword : true}
                onChange={(event: any) => setRePassword(event.target.value)}
            />
        </React.Fragment>
    )
}