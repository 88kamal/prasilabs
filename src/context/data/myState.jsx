import React, { useEffect } from 'react'
import { useState } from "react";
import MyContext from './myContext';

function MyState(props) {
    const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
    
    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = 'rgb(58 60 64)';
        }
        else {
            setMode('light');
            document.body.style.backgroundColor = 'white';
        }
    }



    return (
        <MyContext.Provider value={{toggleMode, mode}}>
            {props.children}
        </MyContext.Provider>
    )
}

export default MyState