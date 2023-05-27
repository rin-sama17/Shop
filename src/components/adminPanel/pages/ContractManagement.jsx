import { useMemo } from 'react'
import { toast } from 'react-toastify'
import { Delete } from '@mui/icons-material'
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid'

import { EditContract, AddContract } from '../components'
import { contractValidation } from '../../validations/contractValidation'
import { contractFieldsData } from '../../fieldsData'
import { useDeleteContractMutation, useGetContractsQuery } from '../../../api'

const ContractManagement = () => {
  const { data: contracts = [] } = useGetContractsQuery()

  const [deleteContract] = useDeleteContractMutation()
  const handleContractDelete = async (contractId) => {
    try {
      await deleteContract(contractId).unwrap()
    } catch (error) {
      toast.error('مشکلی پیش امده بعدا دوباره امتحان کنید')
      console.log(error)
    }
  }

  const columns = useMemo(
    () => [
      { field: 'name', headerName: 'نام', width: 100 },
      { field: 'address', headerName: 'ادرس', width: 150 },
      { field: 'phone', headerName: 'شماره تلفن', width: 150 },
      { field: 'discription', headerName: 'توضیحات', width: 200 },
      {
        field: 'actions',
        type: 'actions',
        width: 80,
        getActions: (params) => [
          <GridActionsCellItem
            icon={<Delete />}
            sx={{ color: 'tomato' }}
            label="حذف"
            onClick={() => handleContractDelete(params.id)}
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
