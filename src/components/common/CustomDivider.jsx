import { Typography, Divider, Box } from '@mui/material'
const CustomDivider = ({ label, color, ...props }) => {
  return (
    <Box
      sx={{
        width: 1,
        p: 1,
      }}
    >
      <Divider
        textAlign="center"
        sx={{
          width: 1,
          mb: 2,
        }}
        {...props}
      >
        <Typography
          variant="body1"
          sx={{
            color: color ? `${color}.light` : 'text.secondary',
            textAlign: 'center',
          }}
        >
          {label}
        </Typography>
      </Divider>
    </Box>
  )
}
export default CustomDivider
