import { Modal, Card } from '@mui/material'

const CustomModal = ({ open, setOpen, children }) => {
  return (
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
      <Card sx={{ width: '90%', p: 3 }}>{children}</Card>
    </Modal>
  )
}

export default CustomModal
