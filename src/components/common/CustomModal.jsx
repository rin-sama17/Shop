import { Modal, Card, IconButton } from '@mui/material'
import { Close } from '@mui/icons-material'

const CustomModal = ({ open, setOpen, width, children, lock }) => {
  return (
    <Modal
      open={open}
      onClose={() => setOpen(lock)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backdropFilter: 'blur(3px)',
      }}
    >
      <Card
        sx={{
          position: 'relative',
          width: width ? width : '90%',
          p: 2,
          bgcolor: 'bgcolor.main',
          maxHeight: '90vh',
          overflowY: 'auto',
        }}
      >
        <Close
          onClick={() => setOpen(false)}
          sx={{
            display: { xs: 'block', md: 'none' },
            position: 'absolute',
            top: 6,
            left: 6,
            color: '#000',
          }}
        />

        {children}
      </Card>
    </Modal>
  )
}

export default CustomModal
