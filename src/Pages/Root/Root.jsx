import React from 'react'
import { Navbar } from '../../Components/Header/Navbar'
import { Outlet } from 'react-router'
import { Footer } from '../Footer/Footer'

export const Root = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}
