import { SignIn } from '@clerk/nextjs'
import { LogIn } from 'lucide-react'
import Link from 'next/link'

export default function Page() {
  return (
    <div>
        <>
        <div className='flex items-center gap-2 justify-center mb-5 text-white text-xl'>
          <p>Don’t have an account?</p>
        <Link className='' 
        href="/sign-up"><button className='flex items-center gap-2
        bg-emerald-700 py-2 px-4 rounded-lg hover:bg-emerald-600 cursor-pointer'> Sign up <LogIn /></button></Link>

        </div>
        <SignIn />
        </>
    </div>

  )
}