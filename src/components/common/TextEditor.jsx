import { useState } from 'react'
import { Box, Stack } from '@mui/material'
import ReactQuill from 'react-quill'
const TextEditor = ({ value, setValue }) => {
  const modules = {
    toolbar: [
      [{ font: [] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ color: [] }, { background: [] }],
      [{ script: 'sub' }, { script: 'super' }],
      ['blockquote', 'code-block'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ indent: '-1' }, { indent: '+1' }, { align: [] }],
      ['link', 'image', 'video'],
      ['clean'],
      [{ direction: 'rtl' }],
    ],
  }

  return (
    <Box
      sx={{
        width: 1,
        mb: 10,
        mt: 3,
        bgcolor: '#FFFF',
        direction: 'rtl',
      }}
    >
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        modules={modules}
      />
    </Box>
  )
}

export default TextEditor
