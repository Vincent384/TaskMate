import React, { useState } from 'react'
import { Input } from './input'

const CreatePage = () => {

  const [form, setForm] = useState({
    title:'',
  })


  function onChangeHandler(e){
    const {name,value} = e.target
    
    setForm((prev) => {
      return {
        ...prev,
        [name]:value
      }
    })
  }

  return (
    <div className='flex justify-center items-center'>
      <div className='bg-amber-50 p-10 my-10'>

      <form className=''>
        <Input
         placeholderText={'Min titel...'} 
         labelText={'Titel'} 
         inputType={'text'}
         valueInput={form.title}
         onChangeHandler={onChangeHandler}
         nameInput={'title'}  />
      </form>
        </div>
    </div>
  )
}

export default CreatePage