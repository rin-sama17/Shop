
import { makeStyles } from '@mui/styles';
export const useStyles = makeStyles((theme) => ({
    sliderDot: {
        [theme.breakpoints.down('md')]: {
            display: 'grid !important',
            gap: '1rem',
            gridAutoFlow: 'column',
            gridAutoColumns: '18vh',
            padding: '0 1rem 1rem',
            overflowX: 'auto',
        },
    },

}));