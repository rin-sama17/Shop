import { Typography, Divider, Box } from '@mui/material'
const CustomDivider = ({ label, color }) => {
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
      >
        <Typography
          variant="caption"
          sx={{
            color: color ? `${color}.main` : 'text.secondary',
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
