'use client'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import HomeWork from './components/HomeWork'
import { WorkPage } from './components/WorkPage'
import CreatePage from './components/CreatePage'
import { SignOutButton, useAuth, useUser } from '@clerk/nextjs'
import Image from 'next/image'
import { CalenderPage } from './components/CalenderPage'
import { LinkToPages } from './components/LinkToPages'


const Home = () => {

  const searchParams = useSearchParams()
  const [toggle, setToggle] = useState(false)

  const { isLoaded, isSignedIn, userId, sessionId, getToken } = useAuth()

  const {user, isLoaded: isUserLoaded} = useUser()


  


  const tab = searchParams.get('tab') || 'home'
 
  return (
    <div className='p-5 bg-slate-700'>
      <nav className='flex justify-between items-center text-center text-white font-semibold text-lg'>
          <div className='flex max-sm:grid max-sm:grid-cols-5'>
            <LinkToPages/>
          </div>
      
        <div className=''>
     { isUserLoaded && user.imageUrl &&
    
    <div className='relative w-[12] h-[12] rounded-full'>
                <Image
                onClick={() => setToggle(prev => !prev)}
                className='w-full h-full object-contain rounded-full cursor-pointer'
                src={user.imageUrl}
                width={1200}
                height={1200}
                alt='Profil bild'/>
                          { toggle &&
          <div className='absolute px-2 top-[11vh] right-0 bg-white border-2 rounded-lg max-sm:top-15'>
              <SignOutButton>
                <button className='text-black cursor-pointer hover:bg-black/40'>Log&nbsp;out</button>
              </SignOutButton>
          </div>
          }
            </div>
      }
    

        </div>

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
        {
          tab === 'calender' && (
            <CalenderPage/>
          )
        }
      </div>


    </div>
  )
}

export default Home