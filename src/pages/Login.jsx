import React from 'react'
import { useForm } from 'react-hook-form'

function Login() {
  const{
    register,
    handleSubmit,
    formState:{errors}
  }=useForm()
  const Submit=(data)=>{
    console.log(data);
    const storedUser =localStorage.getItem("user");
    if(!storedUser){
      alert("User is Not registser!")
      return
    }
    const user=JSON.parse(storedUser)
    if(data.email===user.email && data.password===user.password){
      localStorage.setItem('isLoggedin',true)
    }
    else{
      alert("Invalid credentials")
    }


  }

  return (
    <div>
      
      <h2>Login Page</h2>

      <form on  bmit={handleSubmit(Submit)}>

      <label>Email: </label>
      <input type="email" {...register('email')}/>
      <p>{errors.email?.message}</p>

      <label>Password:</label>
      <input type="password" {...register("password")} />
      <p>{errors.password?.message}</p>

<button>Login</button>

</form>
    </div>
  )
}


export default Login
