"use client"
import clsx from "clsx";
import Styles from './Content.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Icons11 from "../Icons/Icons11";
import { Caramel } from "next/font/google";
import Example from "../Carousel/Carousel";
import Link from "next/link";
import {useState} from 'react'
import { faL } from "@fortawesome/free-solid-svg-icons";
const Content = ()=>{
  const Carousel8 = '/img/Carousel8.webp'
  const Carousel9 = '/img/Carousel9.webp'
  const Carousel10 = '/img/Caroudel10.webp'
  const Carousel11 = '/img/Carousel11.webp'
  const Carousel12 = '/img/Carousel12.webp'
  const Qc1 = '/img/Qc1.webp'
  const Qc2 = '/img/Qc2.webp'
  const Qc3 = '/img/Qc3.webp'
  const Qc4 = '/img/Qc4.webp'
 const [isHover , setHover ] = useState(false)
 const [isHover2 , setHover2] = useState(false) 
 const handleMouseEnter = () => {
  setHover(true);
  console.log(isHover)
};

const handleMouseLeave = () => {
  setHover(false);
  console.log(isHover)
};
const handleMouseEnter2 = () => {
  setHover2(true);
  console.log(isHover)
};

const handleMouseLeave2 = () => {
  setHover2(false);
  console.log(isHover)
};
  return(
    <div className={clsx(Styles.Content)}>
<div className="row">
<div className={clsx("col-3", Styles.col3)}>
        <ul>
          <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}  className={clsx(Styles.content2)}>
            <li >
              <div style={{ display: 'flex' }}>
                <a href="" >Laptop</a>
                <div className={clsx(Styles.icons)}>
                  <Icons11 />
                </div>
              </div>
              {isHover && (
                  <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={clsx(Styles.overlay)}>
                    <div className="row">
  <div className={clsx("col-sm" ,Styles.colsm1)}>
  <Link href="">
    <span>Thương hiệu</span>
    <Link href="">
      <li>ASUS</li>
    </Link>
    <Link href="">
      <li>ACER</li>
    </Link>
    <Link href="">
      <li>MSI</li>
    </Link>
    <Link href="/about">
      <li>LENOVO</li>
    </Link>
    <Link href="/about">
      <li>HP</li>
    </Link>
    </Link>
    
  </div>
  <div className={clsx("col-sm", Styles.colsm1)}>
    <Link href="">
    <span>Giá bán</span>
    <Link href="">
      <li>Dưới 15 triệu</li>
    </Link>
    <Link href="">
      <li>Từ 15 đến 20 triệu</li>
    </Link>
    <Link href="">
      <li>Trên 20 triệu</li>
    </Link>
    </Link>
  </div>
  <div className={clsx("col-sm", Styles.colsm1)}>
    <Link href="">
    <span>Cpu Intel-AMD</span>
    <Link href="">
      <li>Core i3</li>
    </Link>
    <Link href="">
      <li>Core i5</li>
    </Link>
    <Link href="">
      <li>Core i7</li>
    </Link>
    <Link href="/about">
      <li>AMD Ryzen</li>
    </Link>
    </Link>
  </div>
  <div className={clsx("col-sm", Styles.colsm1)}>
    <Link href="">
    <span>Nhu cầu sử dụng</span>
    <Link href="">
      <li>Đồ họa - Studio</li>
    </Link>
    <Link href="">
      <li>Học sinh - Sinh viên</li>
    </Link>
    <Link href="">
      <li>Mỏng nhẹ cap cấp</li>
    </Link>
    <Link href="/about">
      <li>Studio RX 40 series</li>
    </Link>
    </Link>
  </div>
</div>
                  </div>
                )}
        </li>
        <div className={clsx(Styles.icons)}>
      
        </div>
    </div>
    
    <div onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}  className={clsx(Styles.content2)}>
    <li >
              <div style={{ display: 'flex' }}>
                <a href="" >PC GVN</a>
                <div className={clsx(Styles.icons)}>
                  <Icons11 />
                </div>
              </div>
              {isHover2 && (
                  <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={clsx(Styles.overlay2)}>
                    <div className="row">
  <div className={clsx("col-sm" ,Styles.colsm1)}>
  <Link href="">
    <span>PC theo cấu hình</span>
    <Link href="">
      <li>PC I3(giá từ 7 triệu)</li>
    </Link>
    <Link href="">
      <li>PC I5(giá từ 12 triệu)</li>
    </Link>
    <Link href="">
      <li>PC I7(giá từ 27 triệu)</li>
    </Link>
    <Link href="/about">
      <li>PC I9(giá từ 40 triệu)</li>
    </Link>
    <Link href="/about">
      <li>Xem tất cả PC</li>
    </Link>
    </Link>
    
  </div>
  <div className={clsx("col-sm", Styles.colsm1)}>
    <Link href="">
    <span>PC theo cấu hình(AMD)</span>
    <Link href="">
      <li>PC Athlon(Giá từ 3 triệu)</li>
    </Link>
    <Link href="">
      <li>PC R3(giá từ 5 triệu)</li>
    </Link>
    <Link href="">
      <li>PC R5(giá từ 7 triệu)</li>
    </Link>
    <Link href="">
      <li>PC R7(giá từ 35 triệu)</li>
    </Link>
    <Link href="">
      <li>PC R9(giá từ 40 triệu)</li>
    </Link>
    </Link>
  </div>
  <div className={clsx("col-sm", Styles.colsm1)}>
    <Link href="">
    <span>PC văn phòng</span>
    <Link href="">
      <li>PC GVN Homework Athlon</li>
    </Link>
    <Link href="">
      <li>PC GVN Homework R3</li>
    </Link>
    <Link href="">
      <li>PC GVN Homework R5</li>
    </Link>
    <Link href="/about">
      <li>PC GVN Homework R7</li>
    </Link>
    </Link>
  </div>
  <div className={clsx("col-sm", Styles.colsm1)}>
    <Link href="">
    <span>PC khuyến mãi</span>
    <Link href="">
      <li>PC GVN Intel i5-12400k</li>
    </Link>
    <Link href="">
      <li>PC GVN-MSI</li>
    </Link>
    <Link href="">
      <li>PC GVN-MSI I7</li>
    </Link>
    <Link href="/about">
      <li>PC GVN-ASUS Pro</li>
    </Link>
    </Link>
  </div>
</div>
                  </div>
                )}
        </li>
        <div className={clsx(Styles.icons)}>
      
        </div>
    </div>
    <div className={clsx(Styles.content2)}>
    <li>
        <a href="">
        Case-Nguồn-Phụ kiện
        </a>
        </li>
        <div className={clsx(Styles.icons)}>
      
        </div>
    </div>
    <div className={clsx(Styles.content2)}>
    <li>
        <a href="">
        Ổ cứng-RAM-Thẻ
        </a>
        </li>
        <div className={clsx(Styles.icons)}>
      
        </div>
    </div>
    <div className={clsx(Styles.content2)}>
    <li>
        <a href="">
        Main,CPU,VGA,Tản
        </a>
        </li>
        <div className={clsx(Styles.icons)}>
      
        </div>
    </div>
    <div className={clsx(Styles.content2)}>
  
        <div className={clsx(Styles.icons)}>
     
        </div>
    </div>
    <div className={clsx(Styles.content2)}>
    <li>
        <a href="">
        Màn hình
        </a>
        </li>
        <div className={clsx(Styles.icons)}>
      
        </div>
    </div>
    <div className={clsx(Styles.content2)}>
    <li>
        <a href="">
        Bàn phím
        </a>
        </li>
        <div className={clsx(Styles.icons)}>
      
        </div>
    </div>
    <div className={clsx(Styles.content2)}>
    <li>
        <a href="">
        Chuột + Lót chuột
        </a>
        </li>
        <div className={clsx(Styles.icons)}>
       
        </div>
    </div>
    <div className={clsx(Styles.content2)}>
    <li>
        <a href="">
        Tai Nghe-Loa
        </a>
        </li>
        <div className={clsx(Styles.icons)}>
    
        </div>
    </div>
    <div className={clsx(Styles.content2)}>
    <li>
        <a href="">
       Ghế-Bàn
        </a>
        </li>
        <div className={clsx(Styles.icons)}>
     
        </div>
    </div>
    <div className={clsx(Styles.content2)}>
  
        <div className={clsx(Styles.icons)}>
      
        </div>
    </div>
    <div className={clsx(Styles.content2)}>
    <li>
        <a href="">
        Phụ kiện
        </a>
        </li>
        <div className={clsx(Styles.icons)}>
       
        </div>
    </div>
   </ul>
    </div>
  <div className={clsx("col-6", Styles.col6)}>
    <Example />
    <div className="row">
  <div className="col">
      <Link href="/about">
    <img style={{height: '150px', width: '250px'}} src={Carousel8}></img>
    
      </Link>
  </div>
  <div className="col">
      <Link href="">
    <img style={{height: '150px', width: '250px'}} src={Carousel9}></img>
      </Link>
  </div>
</div>
  </div>
  <div className={clsx("col-3", Styles.col33)}>
  <div className="row">
    <div className="col">
      <img src={Carousel10}></img> 
    </div>
  </div>
  <div className="row">
    <div className="col">
      <img src={Carousel11}></img>  
    </div>
  </div>
  <div className="row">
    <div className="col">
      <img src={Carousel12}></img> 
    </div>
  </div>
  </div>
</div>
<div className={clsx("row", Styles.row33)}>
  <div className="col-sm">
    <img src={Qc1}></img>
  </div>
  <div className="col-sm">
    <img src={Qc2}></img>
  </div>
  <div className="col-sm">
    <img src={Qc3}></img>
  </div>
  <div className="col-sm">
    <img src={Qc4}></img>
  </div>
</div>
    </div>
  )
}
export default Content;