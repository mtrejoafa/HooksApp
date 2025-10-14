import { createContext, PropsWithChildren, useEffect, useState } from 'react'
import { User, users } from '../data/user-mock.data';

type AuthStatus = 'checking' | 'authenticated' | 'not-authenticated';

interface UserContextProps {
    authStatus: AuthStatus;
    isAuthenticated: boolean;
    user: User | null;

    login: (userId: number) => boolean;
    logout: () => void;
}

export const UserContext = createContext({} as UserContextProps)


export const UserContextProvider = ({children}:PropsWithChildren) => {
    
    const [authStatus, setauthStatus] = useState<AuthStatus>('checking')
    const [user, setuser] = useState<User|null>(null);

    const handleLogin = (userId: number) => {
        const user = users.find(user => user.id === userId);
        if (!user) {
            console.log('User not found')
            setuser(null);
            setauthStatus('not-authenticated');
            return false;
        }
        setuser(user);
        setauthStatus('authenticated');
        localStorage.setItem('userId', userId.toString());
        return true;
    }

    const handleLogout = () => {
        console.log('Handle Logout');
        setauthStatus('not-authenticated');
        setuser(null);
        localStorage.removeItem('userId');
    }

    useEffect(() => {
        const userStorage = localStorage.getItem('userId');
        if (userStorage) {
            handleLogin(+userStorage);
            return;
        }
        handleLogout();
    }, []);

    return <UserContext value={{
        authStatus: authStatus,
        isAuthenticated: authStatus === 'authenticated',
        user: user,
        login: handleLogin,
        logout: handleLogout
    }}>{children}</UserContext>
}
