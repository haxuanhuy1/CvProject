"use client"
import clsx from "clsx"
import Styles from './Chat.module.scss'
import Icons12 from "../Icons/Icons12"
import {useState} from 'react'
import Icons13 from "../Icons/Icons13"
const Chat = ()=> {
    const [hover , setHover] = useState(true)
    const handclick = ()=>{
       setHover(false)
    }
    return(
        <div className= {clsx(Styles.chat)}>
        { hover ?<div onClick={handclick} className={clsx(Styles.chat2)}>
           
           <Icons12  />
               </div>  : null
           
        }
        <div className={clsx(Styles.chat3)}>
          <div className={clsx(Styles.chat4)}>
            <div className={clsx(Styles.chat5)}>
          <span>GearVN</span>
          <span>Chát với chúng tôi</span>
            </div>
            <Icons13 />
            <Icons12 />
          </div>
         <Icons12 />
        </div>
        
     
      
        </div>
    )
}
export default Chat;
