'use client'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'
import HomeWork from './components/HomeWork'
import { WorkPage } from './components/WorkPage'
import CreatePage from './components/CreatePage'

const Home = () => {

  const searchParams = useSearchParams()

  const tab = searchParams.get('tab') || 'home'
  console.log(tab)
  return (
    <div className='grid grid-cols-1 p-5 bg-slate-700'>
      <nav className='grid grid-cols-3 text-center text-white font-semibold text-lg max-w-[350px]'>
          <Link href={'/?tab=home'}>
        <div className='p-5 bg-green-500 cursor-pointer rounded-l-lg transition-all hover:bg-green-600'>
          <span>Hem</span>
        </div>
          </Link>
          <Link className='' href={'/?tab=work'}>
        <div className='p-5 bg-blue-500 cursor-pointer transition-all hover:bg-blue-600'>
          <span>Arbete</span>
        </div>
          </Link>
          <Link href={'/?tab=create'}>
        <div className='p-5 bg-yellow-500 cursor-pointer rounded-r-lg transition-all hover:bg-yellow-600'>
          <span>Skapa</span>
        </div>
          </Link>
      </nav>
      <div className='flex-10'>
        {
          tab === 'home' &&(
            <HomeWork/>
          )
        }
        {
          tab === 'work' &&(
            <WorkPage/>
          )
        }
        {
          tab === 'create' && (
            <CreatePage/>
          )
        }
      </div>


    </div>
  )
}

export default Home