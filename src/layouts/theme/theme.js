
import { createTheme } from '@mui/material';




export const lightTheme = createTheme({
    direction: "rtl",
    typography: {
        fontFamily: "vazir,wazin , roboto"
    },
    palette: {
        mode: "light",

        background: {
            main: "#fafafa",
        },
        // secondary: {
        // main: `${secondaryColor}`

        // },
        bgBlur: {
            main: "rgba(225,225,225,0.9)"
        }
    },

});



export const darkTheme = createTheme({
    direction: 'rtl',
    typography: {
        fontFamily: "vazir,wazin , roboto"
    },
    palette: {
        mode: "dark",

        background: {
            main: "#212121"
        },
        // secondary: {
        //     main: secondaryColor ? `${secondaryColor}` : '#ce93d8'
        // },
        bgBlur: {
            main: "rgba(0, 0, 0, 0.8)"
        }
    }


});
