import React from 'react'
import { Form, useForm } from 'react-hook-form'

const Login = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit1(data) {
    console.log(data);
    alert("Form submitted ");
  }


  return (
    <form onSubmit={handleSubmit(onSubmit1)}>
<div>
  <label>Name:</label>
<input {...register("name", { required: "Name is required" })}/>
</div>
{
  errors.name && (
    <p>{errors.name.message}</p>
  )
}

<div>
  <label>Email:</label>
<input {...register("email", { required: "Email is required",
 pattern:{value:/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,message:"Enter a valid mail"}
 })}/>
</div>
{
  errors.email && (
    <p>{errors.email.message}</p>
  )
}
<div>
  <label>Password:</label>
<input type='password' {...register("password", { required: "Password is required",
pattern:{value:/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/,message:"password must contain at least 6 characters, including uppercase, lowercase, and a number"}
})}/>
</div>
{
  errors.password && (
    <p>{errors.password.message}</p>
  )
}
<input type="submit"/>
</form>
  )
}

export default Login





















