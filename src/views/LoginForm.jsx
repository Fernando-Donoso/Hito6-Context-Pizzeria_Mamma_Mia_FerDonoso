import { useState } from "react"



function LoginForm (){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleChangeEmail = (evento)=>{
        setEmail(evento)

    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        
        if(password.length < 6){
            alert("La contraseña debe tener al menos 6 caracteres")
            return
        }
        console.log("Estoy enviando el form")
        alert("Sesión iniciada!")
        setEmail("")
        setPassword("")
    }

    return(
        <form className="loginForm" action="" onSubmit={(e)=>{ handleSubmit(e) }}>
            <h1>Login</h1>


            <label htmlFor="Email">Email</label>
            <br />
            <input type="email" placeholder="Enter your email" value={email} required onChange={(evento) =>{ handleChangeEmail(evento.target.value) }}/>
            <br />
            <label htmlFor="Password">Password</label>
            <br />
            <input value={password} required onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="********"/>
            <br />
            <button type="submit">Login</button>
        </form>
    )
}

export default LoginForm
