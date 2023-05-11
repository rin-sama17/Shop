
import { createTheme } from '@mui/material';
import { useSelector } from 'react-redux';
import { getFont, getSecondary } from '../../reducers/themeSlice';



export const theme = () => {
    const secondary = useSelector(getSecondary);
    const font = useSelector(getFont);
    const lightTheme = createTheme({
        direction: "rtl",
        typography: {
            fontFamily: "vazir"
        },
        palette: {
            mode: "light",

            //p01
            background: {
                main: "#E9E8EE",
            },
            buttons: {
                main: "#D2D2DC"
            },
            primary: {
                main: "#F97F12"
            },
            secondary: {
                main: "#F97F12"

            },
            divider: {
                main: "#FFFFFF"
            },
            navbarbg: {
                main: "#1E1E5C"
            },

            //p02
            // background: {
            //     main: "#FFFF",
            // },
            // buttons: {
            //     main: "#D22D17"
            // },
            // primary: {
            //     main: "#FFE672"
            // },
            // secondary: {
            //     main: "#EB6C29"

            // },
            // divider: {
            //     main: "#36A1D5"
            // },
            // navbarbg: {
            //     main: "#77C0E3"
            // },
            //     bgBlur: {
            //         main: "rgba(0, 0, 0, 0.4)"
            //     },

            //p03
            // background: {
            //     main: "#FFFFFF",
            // },
            // buttons: {
            //     main: "#437FC7"
            // },
            // primary: {
            //     main: "#B9732E"
            // },
            // secondary: {
            //     main: "#EB6C29"

            // },
            // divider: {
            //     main: "#437FC7"
            // },
            // navbarbg: {
            //     main: "#EDF6FF"
            // },
            // bgBlur: {
            //     main: "rgba(0, 0, 0, 0.4)"
            // },

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
