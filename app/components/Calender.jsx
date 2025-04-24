import { ArrowLeft, ArrowRight } from 'lucide-react'
import React, { useEffect, useState } from 'react'

export const Calender = () => {

const [yearInput, setYearInput] = useState('')
const [getMonth, setGetMonth] = useState('')
const [getDay, setGetDay] = useState('')

function getDayInMonth(year, month){
  const days = []

  const date = new Date(year,)

}

function CalculateDays(){
    const date = new Date()
    const day = date.getDay()
    const month = date.getMonth()
    const year = date.getFullYear()
    const something = date.setMonth(month - 1,day)

    console.log('Månad',something)
    const monthIndex = ['Januari', 'Febuari','Mars','April','Maj',
      'Juni','Juli','Augusti','September','November','December'
    ]

    const dateFormatted = `${year}-${monthIndex[month]}-${day}`
    

    setYearInput(dateFormatted)
}

useEffect(() => {
  CalculateDays()
}, [])


  return (
    <div className='flex justify-center items-center'>
        <div className='w-[250px] h-[200px] bg-gray-300'>
          <div>
            <div className='flex justify-between items-center text-center py-2 bg-white/80 text-lg border'>
              <ArrowLeft className='ml-2 cursor-pointer transition-opacity hover:opacity-50' />
              <h1 className=''>{yearInput}</h1>
              <ArrowRight className='mr-2 cursor-pointer transition-opacity hover:opacity-50' />
            </div>

          </div>
        </div>
    </div>
  )
}
