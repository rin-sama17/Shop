
import { createTheme } from '@mui/material';



export const theme = createTheme({
    direction: "rtl",
    typography: {
        fontFamily: "tanha ,wazin"
    },
    palette: {
        mode: "light",

        //p01
        bgcolor: {
            main: "#E9E8EE",
            dark: "#1E1E5C"
        },
        buttons: {
            main: "#D2D2DC"
        },
        primary: {
            main: "#ff8400",
            light: "#FFFFFF"
        },
        secondary: {
            main: "#F97F12"
        },
        bgBlur: {
            main: "rgba(0, 0, 0, 0.4)"
        },
        title: {
            main: '#437FC7'
        }

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