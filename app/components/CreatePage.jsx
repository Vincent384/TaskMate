import React, { useState } from 'react'
import { Input } from './input'

const CreatePage = () => {

  const [form, setForm] = useState({
    title:'',
    work:''
  })

  const [formArray, setFormArray] = useState([])

  function onChangeHandler(e){
    const {name,value} = e.target
    
    setForm((prev) => {
      return {
        ...prev,
        [name]:value
      }
    })
  }

  console.log(formArray)

  function onSubmitHandler(e){
    e.preventDefault()

    setFormArray((prev) => {
      return [
        ...prev,
        {
          work:form.work
        }
      ]
    })

    setForm((prev) => {
      return {
        ...prev,
        work:''
      }
    })
  }

  return (
    <div className='flex justify-center items-center'>
      <div className='bg-amber-50 p-10 my-10 rounded-lg'>

      <form onSubmit={e => onSubmitHandler(e)} className=''>
        <Input
         placeholderText={'Min titel...'} 
         labelText={'Titel'} 
         inputType={'text'}
         valueInput={form.title}
         onChangeHandler={onChangeHandler}
         nameInput={'title'} 
         textArea={false} />
        <Input
         placeholderText={'Min uppgift är...'} 
         labelText={'Din Uppgift'} 
         inputType={'text'}
         valueInput={form.work}
         onChangeHandler={onChangeHandler}
         nameInput={'work'} 
         textArea={true} />
         <button className='w-full py-2 bg-emerald-600 cursor-pointer text-white font-semibold mt-5 rounded-lg
        transision-all hover:bg-emerald-800'>Lägg till</button>
      </form>
      {
        form.title !== '' ? 
        <div className='flex flex-col gap-3 mt-5 font-semibold text-center'>
          <span className='border-b-2'>
            Titel
          </span>
          <span className='py-2 px-4 bg-slate-300 text-center rounded-lg w-full mt-2'>
          {form.title}
          </span>
          </div> :''
      }
      {
      formArray && formArray.length > 0 ? formArray.map((item,index) => (
          <div key={index}>
            <p className='py-2 px-4 font-semibold bg-amber-400 rounded-lg w-full mt-3 '>{item.work}</p>
          </div>
        )) :''
      }
        </div>
    </div>
  )
}

export default CreatePage