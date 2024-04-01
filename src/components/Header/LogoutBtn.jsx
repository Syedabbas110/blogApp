import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
// both imported to logout user when clicked on button
import { logout } from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    //function for loging out
    const logoutHandler = () => {
        authService.logout()
        .then(()=> {
            dispatch(logout())
        }) 
    }
  return (
    <button
    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn