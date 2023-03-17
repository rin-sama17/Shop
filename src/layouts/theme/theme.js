
import { createTheme } from '@mui/material';
import { useSelector } from 'react-redux';
import { getFont, getSecondary } from '../../reducers/themeSlice';



export const theme = () => {
    const secondary = useSelector(getSecondary);
    const font = useSelector(getFont);
    const lightTheme = createTheme({
        direction: "rtl",
        typography: {
            fontFamily: `${font}`
        },
        palette: {
            mode: "light",

            background: {
                main: "#eceff1",
                paper: "#bdbdbd",
            },
            secondary: {
                main: `${secondary}`

            },
            bgBlur: {
                main: "rgba(227, 242, 253,0.7)"
            }
        }
    });
    const darkTheme = createTheme({
        direction: 'rtl',
        typography: {
            fontFamily: `${font}`
        },
        palette: {
            mode: "dark",

            background: {
                main: "#212121",
                paper: "#424242",
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
