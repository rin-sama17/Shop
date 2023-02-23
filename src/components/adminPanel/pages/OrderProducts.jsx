import { useRef, useLayoutEffect, useState } from 'react'
import { Button, Card, Modal, Typography, Stack } from '@mui/material'
import { CustomDivider } from '../../common'
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
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backdropFilter: 'blur(3px)',
        }}
      >
        <Card sx={{ width: '90%', p: 1 }}>
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
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ mr: 1 }}
                >
                  تعداد:
                </Typography>
                {item.count} عدد
              </Typography>
              <Button component={Link} to={`/product/${item.id}`}>
                مشاهده
              </Button>
            </Stack>
          ))}
        </Card>
      </Modal>
    </>
  )
}

export default OrderProducts
