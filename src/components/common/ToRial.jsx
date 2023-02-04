import { Typography } from '@mui/material'

const ToRial = (price) => {
  price = price.toString()
  JSON.stringify(price)
  price = price.replace(/\,/g, '')
  var objRegex = new RegExp('(-?[0-9]+)([0-9]{3})')

  while (objRegex.test(price)) {
    price = price.replace(objRegex, '$1,$2')
  }

  return (
    <Typography
      color="text.primary"
      variant="body1"
      textAlign="left"
      gutterBottom={gutterBottom}
    >
      {price}
    </Typography>
  )
}
export default ToRial
