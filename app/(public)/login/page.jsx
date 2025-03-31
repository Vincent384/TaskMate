'use client'
import { Input } from '@/app/components/input'
import Link from 'next/link'
import React, { useState } from 'react'

const Login = () => {

  const [form, setForm] = useState({
    email:'',
    password:''
  })

  function onChangeHandler(e){

    const {name, value} = e.target

    setForm((prev) => {
      return {
        ...prev,
        [name]:value
      }
    })
  }

  async function onSubmitHandler(e){
    e.preventDefault()
    console.log(form)
  }

  return (
    <div>
      <form onSubmit={onSubmitHandler} className='p-10 bg-white border-2 rounded-lg' action="">
        <h1 className='text-center text-2xl mb-2'>Task Mate</h1>
        <Input labelText={'Email'} inputType={'text'} 
        valueInput={form.email}
        onChangeHandler={onChangeHandler}
        placeholderText={'jamesblund@gmail.com'}
        nameInput={'email'}
         />
         <Input labelText={'Lösenord'} inputType={'password'} 
        valueInput={form.password}
        onChangeHandler={onChangeHandler}
        placeholderText={'1234...'}
        nameInput={'password'}
         />
         <button className='mt-5 rounded-lg px-4 py-2 bg-green-700
          text-white font-semibold border border-black w-full cursor-pointer transition-all hover:bg-green-800'>Login</button>
          <Link href={'/register'}><p className='mt-5 text-lg text-blue-600 cursor-pointer transition-all
           hover:text-blue-400'>Har du inte registrerat dig?</p></Link>
      </form>
    </div>
  )
}

export default Login