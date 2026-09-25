import React from 'react'
import {useForm} from 'react-hook-form'

function Register() {
  const{
    register,
    handleSubmit,
    formState:{errors}
  }=useForm()

  const Submit=(data)=>{
    console.log(data);
    localStorage.setItem("user",JSON.stringify(data))
    alert("User Register Successfully")
  }



  return (
    <>
      <h3>Register page</h3>
      <form onSubmit={handleSubmit(Submit)}>
      <label>Username :  </label>
      <input type="text"{...register("name",{required:"username required"})}/>
      <p>{errors.name?.message}</p>

      <label>Email</label>
      <input type="email"{...register('email',{required:"Email Required",
       pattern:{
        value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message:"Invalid email format"
        }
      })}/>
      <p>{errors.email?.message}</p>

      <label>Password</label>
      <input type="password" {...register("password" ,{required:"password required",
      minlength:{
        value:9,
        message:"Password must be 8 character"
      }
      })}/>
      <p>{errors.password?.message}</p>

      <button>Register</button>
      </form>
    </>
  )
}

export default Register
