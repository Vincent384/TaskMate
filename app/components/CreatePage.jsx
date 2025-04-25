import React, { useState } from 'react'
import { Input } from './input'
import { Plus } from 'lucide-react'
import { Category } from './Category'
import { Calendar } from '@/components/ui/calendar'


const CreatePage = () => {

  const [form, setForm] = useState({
    title:'',
    work:[]
  })

  const [taskInput, setTaskInput] = useState('')

  const [date, setDate] = useState(new Date())
  
  const [chooseCategory, setChooseCategory] = useState({
    category:''
  })
  
  const [formArray, setFormArray] = useState([])

  function onChangeHandler(e){
    const {name,value} = e.target
    

    if (name === 'title') {
      setForm((prev) => ({
        ...prev,
        [name]: value
      }));
    } else if (name === 'work') {
      setTaskInput(value); // vi uppdaterar bara inputen, inte arrayen direkt
    }
  }

  console.log(formArray)

  function onSubmitHandler(e){
    e.preventDefault()
    
    if(taskInput.trim() === '') return

    setForm((prev) => {
      return {
        ...prev,
        work:[...prev.work,taskInput]
      }
    })
  }

  console.log(formArray)
  console.log(form)

  return (
    <div className='flex justify-center items-center'>
      <div className='bg-amber-50 p-10 my-10 rounded-lg'>

      <form onSubmit={e => onSubmitHandler(e)} className=''>
        <Input
         placeholderText={'My title...'} 
         labelText={'Title'} 
         inputType={'text'}
         valueInput={form.title}
         onChangeHandler={onChangeHandler}
         nameInput={'title'} 
         textArea={false} />
        <Input
         placeholderText={'My task is...'} 
         labelText={'Tasks'} 
         inputType={'text'}
         valueInput={taskInput}
         onChangeHandler={onChangeHandler}
         nameInput={'work'} 
         textArea={true} />
         <button className='w-full flex items-center justify-center gap-2 py-2 bg-emerald-600 cursor-pointer text-white font-semibold mt-5 rounded-lg
        transision-all hover:bg-emerald-800'>Add<Plus className='border-white border-2 rounded-full ' /></button>
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
      form.work && form.work.length > 0 ? form.work.map((item,index) => (
          <div key={index}>
            <p className='py-2 px-4 font-semibold bg-amber-400 rounded-lg w-full mt-3 '>{item}</p>
          </div>
        )) :''
      }

      <div className=''>
        <Category chooseCategory={chooseCategory} setChooseCategory={setChooseCategory}/>
      </div>
      <div className='mt-5'>
        <Calendar
          mode="single"
          selected={date}
          onSelect={(selectedDate) => {
            setFormArray((prev) => [
              ...prev,
              { 
                date:date.toLocaleDateString()
              }
            ])
            setDate(selectedDate)
          }}
        />
      </div>
        </div>
    </div>
  )
}

export default CreatePage