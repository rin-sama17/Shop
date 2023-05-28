
import { createTheme } from '@mui/material';



export const theme = createTheme({
    direction: "rtl",
    typography: {
        fontFamily: "tanha ,wazin"
    },
    palette: {
        mode: "light",

        //p01
        // bgcolor: {
        //     main: "#E9E8EE",
        //     dark: "#343434"
        // },
        // buttons: {
        //     main: "#D2D2DC"
        // },
        // primary: {
        //     main: "#ED3D63",
        //     light: "#FFFFFF"
        // },
        // secondary: {
        //     main: "#ED3D63"
        // },
        // bgBlur: {
        //     main: "rgba(56,80,104, 0.5)"
        // },
        // title: {
        //     light: "#FFFFFF",
        //     main: '#4F598A'
        // }

        // p06
        bgcolor: {
            main: "#E9E8EE",
            dark: "#343434"
        },
        buttons: {
            main: "#D5FFF3"
        },
        primary: {
            main: "#D5FFF3",
            light: "#99AA38"
        },
        secondary: {
            main: "#FE5E41"
        },
        bgBlur: {
            main: "rgba(56,80,104, 0.5)"
        },
        title: {
            light: "#FFFFFF",
            main: '#6A7FD8'
        }
    }
});