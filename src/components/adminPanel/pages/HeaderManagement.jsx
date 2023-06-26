import React, { useState } from 'react'
import { CustomForm, CustomModal } from '../../common'
import { AddBtn, AddHeader, EditHeader } from '../components'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { selectHeaderPhoto } from '../../../reducers/sliderSlice'

const HeaderManagement = () => {
  const header = useSelector(selectHeaderPhoto)

  return <>{header ? <EditHeader header={header} /> : <AddHeader />}</>
}

export default HeaderManagement
