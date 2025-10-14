import { use } from 'react'
import { Button } from '@/components/ui/button';
import { UserContext } from '@/09-useContext/context/UserContext';
import { Link } from 'react-router';

export const ProfilePage = () => {

  const { user, logout } = use(UserContext)
  
  return (
      <div className='flex flex-col items-center justify-center min-h-screen'>
          <h1 className='text-4xl'>User profile</h1>
          <hr />
          <pre className='my-4 w-[80%]'>
              {JSON.stringify({user},null,2)}
          </pre>
      <Link to={"/"}>
        <Button onClick={logout} variant={'destructive'}>Logout</Button>
      </Link>
    </div>
  )
}
