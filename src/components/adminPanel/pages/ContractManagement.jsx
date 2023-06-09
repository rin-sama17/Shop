import { useEffect, useMemo } from 'react'
import { toast } from 'react-toastify'
import { Delete } from '@mui/icons-material'
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid'

import { EditContract, AddContract } from '../components'
import { contractValidation } from '../../validations/contractValidation'
import { contractFieldsData } from '../../fieldsData'
import { useDispatch, useSelector } from 'react-redux'
import {
  deleteContract,
  fetchContracts,
  selectAllContracts,
} from '../../../reducers/contractSlice'

const ContractManagement = () => {
  const dispatch = useDispatch()
  const contracts = useSelector(selectAllContracts)

  useEffect(() => {
    dispatch(fetchContracts())
  }, [])

  const columns = useMemo(
    () => [
      { field: 'name', headerName: 'نام', width: 100 },
      { field: 'address', headerName: 'ادرس', width: 150 },
      { field: 'phone', headerName: 'شماره تلفن', width: 150 },
      { field: 'email', headerName: 'ایمیل', width: 200 },
      {
        field: 'actions',
        type: 'actions',
        width: 80,
        getActions: (params) => [
          <GridActionsCellItem
            icon={<Delete />}
            sx={{ color: 'tomato' }}
            label="حذف"
            onClick={() => dispatch(deleteContract(params.id))}
          />,
          <EditContract contract={params.row} />,
        ],
      },
    ],
    [contracts, EditContract],
  )
  return (
    <>
      <AddContract />
      <div style={{ height: 600, width: '100%', direction: 'rtl' }}>
        <DataGrid rows={contracts} columns={columns} />
      </div>
    </>
  )
}

export default ContractManagement
