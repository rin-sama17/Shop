import { useRef, useLayoutEffect } from 'react'
import { useDeleteProductMutation, useGetProductsQuery } from '../../../api'
import { toast } from 'react-toastify'
import { DataGrid } from '@mui/x-data-grid'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
const DeleteProduct = (props) => {
  const { hasFocus, value } = props
  const buttonElement = useRef(null)
  const rippleRef = useRef(null)
  const [deleteProduct] = useDeleteProductMutation()

  const handleProductDelete = async (productId) => {
    try {
      await deleteProduct(productId).unwrap()
    } catch (error) {
      toast.error('مشکلی پیش امده بعدا دوباره امتحان کنید')
      console.error('error: ', error)
    }
  }
  useLayoutEffect(() => {
    if (hasFocus) {
      const input = buttonElement.current?.querySelector('input')
      input?.focus()
      handleProductDelete(value)
    } else if (rippleRef.current) {
      rippleRef.current.stop({})
    }
  }, [hasFocus])

  return (
    <strong>
      <Button
        color="error"
        ref={buttonElement}
        touchRippleRef={rippleRef}
        style={{ marginLeft: 16 }}
        tabIndex={hasFocus ? 0 : -1}
        onKeyDown={(event) => {
          if (event.key === ' ') {
            event.stopPropagation()
          }
        }}
      >
        حذف
      </Button>
    </strong>
  )
}
const ProductManagement = () => {
  const { data: products = [] } = useGetProductsQuery()

  const columns = [
    { field: 'id', headerName: 'ای دی', width: 100 },
    { field: 'name', headerName: 'نام محصول', width: 100 },
    { field: 'price', headerName: 'قیمت', width: 150 },
    { field: 'discount', headerName: 'تخفیف(به درصد)', width: 150 },
    { field: 'stock', headerName: 'موجودی', width: 100 },
    { field: 'category', headerName: 'دسته بندی', width: 150 },
    {
      field: 'edit',
      headerName: 'ویرایش',
      sortable: false,
      width: 150,
      valueGetter: (params) => params.row.id,
      renderCell: ({ value }) => (
        <Button component={Link} to={`/editProduct/${value}`}>
          ویرایش
        </Button>
      ),
    },
    {
      field: 'delete',
      headerName: 'حذف',
      sortable: false,
      width: 150,
      valueGetter: (params) => params.row.id,
      renderCell: DeleteProduct,
    },
  ]

  return (
    <>
      <Button component={Link} to="/addProduct" sx={{ m: 2 }}>
        ساخت محصول جدید
      </Button>
      <div style={{ height: 600, width: '100%', direction: 'rtl' }}>
        <DataGrid rows={products} columns={columns} />
      </div>
    </>
  )
}

export default ProductManagement
