export interface User {
    id: number;
    name: string;
    location: string;
    role: string;
}

export const getUser = async (id: number) => {
    console.log('Función llamada');
    await new Promise((res) => setTimeout(res, 2000));
    console.log('Función resolvió');
    return {
        id: id,
        name: 'Mark',
        location: 'Otawa, Canada',
        role: 'user role'
    }
}