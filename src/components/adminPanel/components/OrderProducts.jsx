import { useRef, useLayoutEffect, useState } from 'react'
import { Button, Typography, Stack } from '@mui/material'
import { CustomDivider, CustomModal } from '../../common'
import { toRial } from '../../../helpers'
import { Link } from 'react-router-dom'
const OrderProducts = (props) => {
  const [open, setOpen] = useState(false)

  const { hasFocus, value } = props
  const buttonElement = useRef(null)
  const rippleRef = useRef(null)

  useLayoutEffect(() => {
    if (hasFocus) {
      const input = buttonElement.current?.querySelector('input')
      input?.focus()
    } else if (rippleRef.current) {
      rippleRef.current.stop({})
    }
  }, [hasFocus])

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        component="button"
        color="secondary"
        ref={buttonElement}
        touchRippleRef={rippleRef}
        tabIndex={hasFocus ? 0 : -1}
        onKeyDown={(event) => {
          if (event.key === ' ') {
            event.stopPropagation()
          }
        }}
      >
        مشاهده
      </Button>
      <CustomModal open={open} setOpen={setOpen}>
        <CustomDivider label="محصولات کاربر" />
        {value.map((item, index) => (
          <Stack
            key={index}
            direction="row"
            align-items="center"
            justifyContent="space-between"
          >
            <Typography variant="body1" color="text.primary" sx={{ ml: 2 }}>
              {`${toRial(item.price)} تومان`}
            </Typography>
            <Typography
              variant="body1"
              color="text.primary"
              sx={{ ml: 2, display: 'flex' }}
            >
              <Typography variant="body1" color="text.secondary" sx={{ mr: 1 }}>
                تعداد:
              </Typography>
              {item.count} عدد
            </Typography>
            <Button component={Link} to={`/product/${item.id}`}>
              مشاهده
            </Button>
          </Stack>
        ))}
      </CustomModal>
    </>
  )
}

export default OrderProducts
