
import { createTheme } from '@mui/material';
import { useSelector } from 'react-redux';
import { getSecondary } from '../../reducers/themeSlice';



export const theme = () => {
    const secondary = useSelector(getSecondary);
    console.log(secondary);
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
                main: `${secondary}`

            },
            bgBlur: {
                main: "rgba(225,225,225,0.9)"
            }
        }
    });
    const darkTheme = createTheme({
        direction: 'rtl',
        typography: {
            fontFamily: "vazir,wazin , roboto"
        },
        palette: {
            mode: "dark",

            background: {
                main: "#212121"
            },
            secondary: {
                main: `${secondary}`
            },
            bgBlur: {
                main: "rgba(0, 0, 0, 0.8)"
            }
        }


    });

    return { darkTheme, lightTheme };
};
