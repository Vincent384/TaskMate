import { SignIn } from '@clerk/nextjs'
import Link from 'next/link'

export default function Page() {
  return (
    <div>

        <SignIn />
        <Link className='text-center mt-5 text-white text-xl' href="/sign-up">Don’t have an account? Sign up</Link>

    </div>

  )
}