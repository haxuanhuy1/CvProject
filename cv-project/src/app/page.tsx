"use client"
import Image from 'next/image'
import styles from './page.module.css'
import Header from './Header/Header'
import Content from './Content/Content'
import Chat from './Chat/Chat'
import Giamgia from './Giamgia/Giamgia'
import { useState } from 'react'
import { Modal } from 'reactstrap'
import Model from './Modal/Modal'
import { Provider } from 'react-redux'
import Modelcha from './Modalcha/Modalcha'
import {configureStore} from '@reduxjs/toolkit'
import rootReducer from './Redux/Store'
import LaptopSale from './LaptopSale/LatopSale'
import Quangcao from './Quangcao/Quangcao'
import Footer from './Footer/Footer'
export default function Home() {
  const store = configureStore({
    reducer : rootReducer
  })
  return (
   <div>
    <Provider store={store}>

    <Header />
    <Content />
    

    <Giamgia />
    <LaptopSale />
    <Quangcao />
    <Footer />
       <Modelcha />
    </Provider>
  
  
   </div>
  )
}
