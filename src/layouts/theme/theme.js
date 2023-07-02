
import { createTheme, responsiveFontSizes } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectLang } from '../../reducers/langSlice';


export const useTheme = () => {
    const lang = useSelector(selectLang);

    let theme = createTheme({
        direction: lang === "en" ? "ltr" : "rtl",
        typography: {
            fontFamily: "tanha ,wazin"
        },
        palette: {
            mode: "light",


            btnSidebar: {
                main: "#ffffff",
                light: "#fffc41"
            },
            bgSidebar: {
                main: "#09BFB0",
                dark: "#373B72"
            },
            btnNav: {
                main: "#343434",
                dark: "#fffc41"
            },
            btnSubmit: {
                main: "#d04d05",
                light: "#E9E8eE",
                dark: "#a32798"
            },
            bgcolor: {
                main: "#d8e6e6",
                dark: "#068ad2"
            },
            textBox: {
                light: "#BB4430",
                main: "#212E50",
                dark: "#F6B537"
            },
            primary: {
                main: "#ffbe22",
                light: "#ffbe22"
            },
            secondary: {
                main: "#BB4430"
            },
            title: {
                light: "#BB4430",
                dark: "#000"
            },
            bgBlur: {
                main: "rgba(56,80,104, 0.7)"
            },
        }
    });
    return responsiveFontSizes(theme);
};