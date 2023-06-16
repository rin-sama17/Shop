import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AdminPanel } from '.'
import { selectAuth } from '../reducers/authSlice'

const RouteProtection = () => {
  const { token } = useSelector(selectAuth)
  const { t } = useTranslation()
  useEffect(() => {
    if (!token)
      toast.error(t('شما به این صفحه دسترسی ندارید'), {
        position: 'bottom-left',
      })
  }, [])
  if (!token) {
    return <Navigate to="/" />
  }

  return <AdminPanel />
}

export default RouteProtection
