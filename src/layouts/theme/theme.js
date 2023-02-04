
import { createTheme } from '@mui/material';

import { useContext } from 'react';
import MainContext from '../../context';


export const themes = () => {
    const { secondaryColor } = useContext(MainContext);

    const lightTheme = createTheme({
        direction: "rtl",
        typography: {
            fontFamily: "vazir,wazin , roboto"
        },
        palette: {
            mode: "light",

            background: {
                main: "#fafafa",
            },
            secondary: {
                main: `${secondaryColor}`
            },
            bgBlur: {
                main: "rgba(225,225,225,0.9)"
            }
        },

    });



    const darkTheme = createTheme({
        direction: 'rtl',
        typography: {
            fontFamily: "vazir,wazin , roboto"
        },
        palette: {
            mode: "dark",

            background: {
                main: "#121212"
            },
            secondary: {
                main: secondaryColor ? `${secondaryColor}` : '#ce93d8'
            },
            bgBlur: {
                main: "rgba(0, 0, 0, 0.9)"
            }
        }


    });

    return [darkTheme, lightTheme];
};