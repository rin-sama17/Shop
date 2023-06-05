import { Box } from '@mui/material'

const Page = (props) => {
  const { children, pageNumber, index, name, ...others } = props
  return (
    <div
      role={name}
      hidden={pageNumber !== index}
      id={`${name}-${index}`}
      aria-labelledby={`sidebar-tab-${index}`}
      {...others}
    >
      {pageNumber == index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
}

export default Page
