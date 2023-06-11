import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AdminPanel } from '.'
import { selectAuth } from '../reducers/authSlice'

const RouteProtection = () => {
  const { token, success } = useSelector(selectAuth)
  useEffect(() => {
    if (!token)
      toast.error('شما به این صفحه دسترسی ندارید', { position: 'bottom-left' })
  }, [])
  if (!token) {
    return <Navigate to="/" />
  }

  return <AdminPanel />
}

export default RouteProtection
