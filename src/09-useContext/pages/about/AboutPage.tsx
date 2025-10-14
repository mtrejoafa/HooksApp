import { UserContext } from '@/09-useContext/context/UserContext';
import { Link } from 'react-router'
import { use } from 'react';
import { Button } from '@/components/ui/button';

export const AboutPage = () => {

  const { user, isAuthenticated, logout } = use(UserContext);

  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <h1 className='text-4xl text-white font-bold'>About me</h1>
      <hr />
      <div className='flex flex-col gap-2'>
        {
          isAuthenticated && (
            <Link className='hover:text-blue-400 underline text-2xl' to={"/profile"}>Profile</Link>
          )
        }
        {
          isAuthenticated ? (
            <Button onClick={logout} variant={'destructive'} className='mt-4'>
              Logout
            </Button>
          ) : (
              <Link className='hover:text-blue-400 underline text-2xl' to={"/login"}>Login</Link>
          )
        }
      </div>
    </div>
  )
}
