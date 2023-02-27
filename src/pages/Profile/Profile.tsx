import Fieldset from "../../components/Fieldset/Fieldset"
import { useEffect, useState } from "react"
import Container from "../../components/Container/Container"
import Title from "../../components/Title/Title"
import Form from "../../components/Form/Form"
import Button from "../../components/Button/Button"
import Navigation from "../../components/Navigation/Navigation"
import Password from "../../components/Password/Password"
import "./Profile.scss"

export default function Profile() {

    const [ formFields, setFormFields ] = useState<any>({})

    const [ loading, setLoading ] = useState<any>(false)

    const [ firstname, setFirstname] = useState<string>("")
    const [ lastname, setLastname] = useState<string>("")
    const [ email, setEmail] = useState<string>("")
    const [ passwords, setPasswords ] = useState<any>("")

 
    const fromPassword = (passwords: any) => {
        if(passwords) {
            setPasswords(passwords)
        }
    }

    useEffect(() => {
        setFormFields({
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: passwords.password,
            rePassword: passwords.rePassword
        })

    },[email, firstname, lastname])

    const submitForm = (event: any) => {
        
        event?.preventDefault()

        setLoading(true)

        if(!firstname || !lastname || !email) {
            return null
        }

       
        if(passwords.rePassword !== passwords.password){
            return null
        }

        console.log("odeslano")
    }

   
    return (
        <div className="profile">
            <Container>
                    <Title as="h1" alignCenter>Profil</Title>
                    <Form onSubmit={submitForm}>
                        <Fieldset 
                            as="input" 
                            type="text" 
                            id="firstname"
                            name="firstname"
                            label="Jméno"
                            placeholder="Zadejte Vaše jméno ..."
                            required={loading ? formFields.firstname : true}
                            onChange={(event: any) => setFirstname(event.target.value)}
                        />
                        <Fieldset 
                            as="input" 
                            type="text" 
                            id="lastname"
                            name="lastname"
                            label="Príjmení"
                            placeholder="Zadejte Vaše jméno ..."
                            required={loading ? formFields.lastname : true}
                            onChange={(event: any) => setLastname(event.target.value)}
                        />
                        <Fieldset 
                            as="input" 
                            type="email" 
                            id="email"
                            name="email"
                            label="Email"
                            placeholder="Zadejte Váš email ..."
                            required={loading ? formFields.email : true}
                            onChange={(event: any) => setEmail(event.target.value)}
                        />

                        <Password 
                            loading={loading}
                            fromPassword={fromPassword}
                        />
                        <Button type="submit">Uložit</Button>
                    </Form>
            </Container>
            <Navigation />
        </div> 
    )
}