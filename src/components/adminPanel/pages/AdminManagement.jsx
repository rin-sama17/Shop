import { toast } from 'react-toastify'
import { Delete } from '@mui/icons-material'
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid'

import { useDeleteAdminMutation, useGetAdminsQuery } from '../../../api'
import { AddAdmin, EditAdmin } from '../components'
import { useMemo } from 'react'
import { Box, FormGroup, FormControlLabel, Checkbox } from '@mui/material'

import { useFormik } from 'formik'
import { adminFieldsData } from '../../fieldsData/adminFieldsData'
import { adminValidation } from '../../validations/adminValidation'
import { CustomForm } from '../../common'
const AdminManagement = () => {
  const formik = useFormik({
    initialValues: {
      title: '',
      details: '',
      addPost: false,
      editPost: false,
    },
    validationSchema: adminValidation,
    onSubmit: (values) => {
      console.log(values)
    },
  })
  const fieldsData = adminFieldsData(formik)
  return <CustomForm formik={formik} fields={fieldsData} label="مدیریت نقش" />
}

export default AdminManagement

// import { toast } from 'react-toastify'
// import { Delete } from '@mui/icons-material'
// import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid'

// import { useDeleteAdminMutation, useGetAdminsQuery } from '../../../api'
// import { AddAdmin, EditAdmin } from '../components'
// import { useMemo } from 'react'
// import { Box } from '@mui/material'

// const AdminManagement = () => {
//   const { data: admins = [] } = useGetAdminsQuery()
//   const [deleteAdmin] = useDeleteAdminMutation()

//   const handleAdminDelete = async (adminId) => {
//     try {
//       await deleteAdmin(adminId).unwrap()
//     } catch (error) {
//       toast.error('مشکلی پیش امده بعدا دوباره امتحان کنید')
//       console.log(error)
//     }
//   }

//   const columns = useMemo(
//     () => [
//       { field: 'id', headerName: 'ای دی', width: 100 },
//       { field: 'fullName', headerName: 'نام ادمین', width: 100 },
//       { field: 'phone', headerName: 'شماره موبایل', width: 150 },
//       {
//         field: 'actions',
//         type: 'actions',
//         width: 80,
//         getActions: (params) => [
//           <GridActionsCellItem
//             icon={<Delete />}
//             sx={{ color: 'tomato' }}
//             label="حذف"
//             onClick={() => handleAdminDelete(params.id)}
//           />,
//           <EditAdmin admin={params.row} />,
//         ],
//       },
//     ],
//     [handleAdminDelete, admins],
//   )
//   return (
//     <>
//       <AddAdmin />
//       <Box
//         sx={{
//           height: 600,
//           width: '100%',
//           direction: 'ltr',
//           mt: '8px',
//           overFlowX: 'auto',
//           '& .phone': {
//             direction: 'rtl',
//           },
//         }}
//       >
//         <DataGrid
//           columns={columns}
//           rows={admins}
//           getCellClassName={(params) => {
//             if (params.field === 'phone') {
//               return 'phone'
//             }
//           }}
//         />
//       </Box>
//     </>
//   )
// }

// export default AdminManagement
