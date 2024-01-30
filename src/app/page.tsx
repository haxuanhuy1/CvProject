import Image from 'next/image'
import styles from './page.module.css'
import Header from './Header/Header'
import Content from './Content/Content'
export default function Home() {
  return (
   <div>
    <Header />
    <Content />
  <i className="fa-brands fa-facebook"></i>
   </div>
  )
}
