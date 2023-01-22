import { Skeleton, Box } from '@mui/material'
const CustomLoading = ({ animation, children, loading, ...props }) => {
  return (
    <>
      {loading ? (
        <Skeleton animation={animation ? animation : 'wave'} {...props} />
      ) : (
        <Box>{children}</Box>
      )}
    </>
  )
}
export default CustomLoading
