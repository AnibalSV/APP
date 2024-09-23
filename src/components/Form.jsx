import React from 'react';
import { Login } from './Login/Login';

export const Form = () => {
    const mensaje = 'Esto va desde el componente padre';
    return (
            <Login msj={mensaje} />
    )
}