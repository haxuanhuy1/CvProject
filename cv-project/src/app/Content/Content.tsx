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
 const [isHover3 , setHover3] = useState(false)
 const [isHover4 , setHover4] = useState(false)
 const [isHover5 , setHover5] = useState(false)
 const [isHover6 , setHover6] = useState(false)
 const [isHover7 , setHover7] = useState(false)
 const [isHover8 ,setHover8] = useState(false)
 const [isHover9 , setHover9] = useState(false)
 const [isHover10 , setHover10] = useState(false)
 const [isHover11 , setHover11] = useState(false)
 const [isHover12 , setHover12] = useState(false)
 const [isHover13 , setHover13] = useState(false)
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
const handleMouseEnter3 = ()=>{
  setHover3(true)
}
const handleMouseLeave3 = ()=>{
  setHover3(false)
}
const handleMouseEnter4 = ()=>{
  setHover4(true)
}
const handleMouseLeave4 = ()=>{
  setHover4(false)
}
const handleMouseEnter5 = ()=>{
  setHover5(true)
}
const handleMouseLeave5 = ()=>{
  setHover5(false)
}
const handleMouseEnter6 = ()=>{
  setHover6(true)
}
const handleMouseLeave6 = ()=>{
  setHover6(false)
}
const handleMouseEnter7 = ()=>{
setHover7(true)
}
const handleMouseLeave7 = ()=>{
 setHover7(false)
}
const handleMouseEnter8 = ()=>{
  setHover8(true)
}
const handleMouseLeave8 = ()=>{
  setHover8(false)
}
const handleMouseEnter9  = ()=>{
  setHover9(true)
}
const handleMouseLeave9 = ()=>{
  setHover9(false)
}
const handleMouseEnter10 = ()=> {
setHover10(true)
}
const handleMouseLeave10 = ()=>{
  setHover10(false)
}
const handleMouseEnter11 = ()=>{
  setHover11(true)

}
const handleMouseLeave11 = ()=>{
  setHover11(false)
}
const handleMouseEnter12 = ()=>{
  setHover12(true)
}
const handleMouseLeave12 = ()=>{
  setHover12(false)
}
const handleMouseEnter13 = ()=>{
  setHover13(true)
}
const handleMouseLeave13 = ()=>{
  setHover13(false)
}
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
                  <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={clsx(Styles.overlay1)}>
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
                  <div onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2} className={clsx(Styles.overlay2)}>
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
      <li>PC I9(giá từ 40 triệu)</li>
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
    <div onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}  className={clsx(Styles.content2)}>
    <li >
              <div style={{ display: 'flex' }}>
                <a href="" >Case -Nguồn</a>
                <div className={clsx(Styles.icons)}>
                  <Icons11 />
                </div>
              </div>
              {isHover3 && (
                  <div onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3} className={clsx(Styles.overlay3)}>
                    <div className="row">
  <div className={clsx("col-sm" ,Styles.colsm1)}>
  <Link href="">
    <span>Nguồn - Theo hãng</span>
    <Link href="">
      <li>Case ASUS</li>
    </Link>
    <Link href="">
      <li>Case Corsair</li>
    </Link>
    <Link href="">
      <li>Case Lianli</li>
    </Link>
    <Link href="/about">
      <li>Case NZXT</li>
    </Link>
    <Link href="/about">
      <li>Xem tất cả</li>
    </Link>
    </Link>
    
  </div>
  <div className={clsx("col-sm", Styles.colsm1)}>
    <Link href="">
    <span>Case - Theo giá</span>
    <Link href="">
      <li>Dưới 1 triệu</li>
    </Link>
    <Link href="">
      <li>Từ 1 triệu đến 2 triệu</li>
    </Link>
    <Link href="">
      <li>Trên 2 triệu</li>
    </Link>
    <Link href="">
      <li>Xem tất cả</li>
    </Link>
   
    </Link>
  </div>
  <div className={clsx("col-sm", Styles.colsm1)}>
    <Link href="">
    <span>Nguồn - Theo hãng</span>
    <Link href="">
      <li>Nguồn ASUS</li>
    </Link>
    <Link href="">
      <li>Nguồn DeepCool</li>
    </Link>
    <Link href="">
      <li>Nguồn Corsair</li>
    </Link>
    <Link href="/about">
      <li>Nguồn NZXT</li>
    </Link>
    </Link>
  </div>
  <div className={clsx("col-sm", Styles.colsm1)}>
    <Link href="">
    <span>Nguồn - Theo công suất</span>
    <Link href="">
      <li>Từ 400w - 500w</li>
    </Link>
    <Link href="">
      <li>Từ 500w - 600w</li>
    </Link>
    <Link href="">
      <li>Từ 700w - 800w</li>
    </Link>
    <Link href="/about">
      <li>Trên 1000w</li>
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
    <div onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4}  className={clsx(Styles.content2)}>
    <li >
              <div style={{ display: 'flex' }}>
                <a href="" >Ổ cứng, RAM</a>
                <div className={clsx(Styles.icons)}>
                  <Icons11 />
                </div>
              </div>
              {isHover4 && (
                  <div onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4} className={clsx(Styles.overlay4)}>
                    <div className="row">
  <div className={clsx("col-sm" ,Styles.colsm1)}>
  <Link href="">
    <span>Dung lượng RAM</span>
    <Link href="">
      <li> 8GB</li>
    </Link>
    <Link href="">
      <li>16 GB</li>
    </Link>
    <Link href="">
      <li>32 GB</li>
    </Link>
    <Link href="/about">
      <li>Xem tất cả</li>
    </Link>

    </Link>
    
  </div>
  <div className={clsx("col-sm", Styles.colsm1)}>
    <Link href="">
    <span>Loại RAM</span>
    <Link href="">
      <li>DDR4</li>
    </Link>
    <Link href="">
      <li>DDR5</li>
    </Link>
    <Link href="">
      <li>Xem tất cả</li>
    </Link>
   
   
    </Link>
  </div>
  <div className={clsx("col-sm", Styles.colsm1)}>
    <Link href="">
    <span>Hãng RAM</span>
    <Link href="">
      <li>Coisair</li>
    </Link>
    <Link href="">
      <li>Kingston</li>
    </Link>
    <Link href="">
      <li>G.Skill</li>
    </Link>
    <Link href="/about">
      <li>PNY</li>
    </Link>
    <Link href="/about">
      <li>Xem tất cả</li>
    </Link>
    </Link>
  </div>
  <div className={clsx("col-sm", Styles.colsm1)}>
    <Link href="">
    <span>Dung lượng HDD</span>
    <Link href="">
      <li>HDD 1 TB</li>
    </Link>
    <Link href="">
      <li>HDD 2 TB</li>
    </Link>
    <Link href="">
      <li>HDD 4 TB-6 TB</li>
    </Link>
    <Link href="/about">
      <li>HDD trên 8 TB</li>
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
    
    <div onMouseEnter={handleMouseEnter5} onMouseLeave={handleMouseLeave5}  className={clsx(Styles.content2)}>
    <li >
              <div style={{ display: 'flex' }}>
                <a href="" >Main,CPU,VGA,Tản</a>
                <div className={clsx(Styles.icons)}>
                  <Icons11 />
                </div>
              </div>
              {isHover5 && (
                  <div onMouseEnter={handleMouseEnter5} onMouseLeave={handleMouseLeave5} className={clsx(Styles.overlay5)}>
                    <div className="row">
  <div className={clsx("col-sm" ,Styles.colsm1)}>
  <Link href="">
    <span>VGA - Card màn hình</span>
    <Link href="">
      <li> RTX 3050</li>
    </Link>
    <Link href="">
      <li>RTX 3060</li>
    </Link>
    <Link href="">
      <li>RTX 4060</li>
    </Link>
    <Link href="/about">
      <li>RTX 4060Ti</li>
    </Link>
    <Link href="/about">
      <li>RTX 4070</li>
    </Link> 
    <Link href="/about">
      <li>RTX 4070Ti</li>
    </Link>
    <Link href="/about">
      <li>RTX 4080</li>
    </Link>
    </Link>
    
  </div>
  <div className={clsx("col-sm", Styles.colsm1)}>
    <Link href="">
    <span>VGA - Card màn hình</span>
    <Link href="">
      <li>GTX 1660Super - RTX 2060</li>
    </Link>
    <Link href="">
      <li>GTX 1650</li>
    </Link>
    <Link href="">
      <li>GT710/GT1030</li>
    </Link>
   
   
    </Link>
  </div>
  <div className={clsx("col-sm", Styles.colsm1)}>
    <Link href="">
    <span>Bo mạch chủ Intel</span>
    <Link href="">
      <li>H510</li>
    </Link>
    <Link href="">
      <li>H610</li>
    </Link>
    <Link href="">
      <li>B660</li>
    </Link>
    <Link href="/about">
      <li>B760</li>
    </Link>
    <Link href="/about">
      <li>Z690</li>
    </Link>
    </Link>
  </div>
  <div className={clsx("col-sm", Styles.colsm1)}>
    <Link href="">
    <span>Bo mạch chủ AMD</span>
    <Link href="">
      <li>AMD X670(mới)</li>
    </Link>
    <Link href="">
      <li>AMD X570</li>
    </Link>
    <Link href="">
      <li>AMD B650(mới)</li>
    </Link>
    <Link href="/about">
      <li>AMD B550</li>
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
  
    <div onMouseEnter={handleMouseEnter6} onMouseLeave={handleMouseLeave6}  className={clsx(Styles.content2)}>
    <li >
              <div style={{ display: 'flex' }}>
                <a href="" >Màn Hình</a>
                <div className={clsx(Styles.icons)}>
                  <Icons11 />
                </div>
              </div>
              {isHover6 && (
                  <div onMouseEnter={handleMouseEnter6} onMouseLeave={handleMouseLeave6} className={clsx(Styles.overlay6)}>
                    <div className="row">
  <div className={clsx("col-sm" ,Styles.colsm1)}>
  <Link href="">
    <span>Hãng sản xuất</span>
    <Link href="">
      <li> LG</li>
    </Link>
    <Link href="">
      <li>Asus</li>
    </Link>
    <Link href="">
      <li>ViewSonic</li>
    </Link>
    <Link href="/about">
      <li>DELL</li>
    </Link>
    <Link href="/about">
      <li>Gigabyte</li>
    </Link> 
    <Link href="/about">
      <li>AOC</li>
    </Link>
    <Link href="/about">
      <li>Acer</li>
    </Link>
    </Link>
    
  </div>
  <div className={clsx("col-sm", Styles.colsm1)}>
    <Link href="">
    <span>Hãng sản xuất</span>
    <Link href="">
      <li>MSI</li>
    </Link>
    <Link href="">
      <li>Lenovo</li>
    </Link>
    <Link href="">
      <li>Samsung</li>
    </Link>
    <Link href="">
      <li>Cooler Master</li>
    </Link>
    <Link href="">
      <li>Philips</li>
    </Link>
    <Link href="">
      <li>LC-Power</li>
    </Link>
    <Link href="">
      <li>E-Dra</li>
    </Link>
   
   
    </Link>
  </div>
  <div className={clsx("col-sm", Styles.colsm1)}>
    <Link href="">
    <span>Giá tiền</span>
    <Link href="">
      <li>Dưới 5 triệu</li>
    </Link>
    <Link href="">
      <li>Từ 5 đến 10 triệu</li>
    </Link>
    <Link href="">
      <li>Từ 10 đến 20 triệu</li>
    </Link>
    <Link href="/about">
      <li>Từ 20 đến 30 triệu</li>
    </Link>
    <Link href="/about">
      <li>Trên 30 triệu</li>
    </Link>
    </Link>
  </div>
  <div className={clsx("col-sm", Styles.colsm1)}>
    <Link href="">
    <span>Độ phân giải</span>
    <Link href="">
      <li>Full HD 1080p</li>
    </Link>
    <Link href="">
      <li>2K 1440p</li>
    </Link>
    <Link href="">
      <li>Màn hình máy tính 4K</li>
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

    <div onMouseEnter={handleMouseEnter7} onMouseLeave={handleMouseLeave7}  className={clsx(Styles.content2)}>
    <li >
              <div style={{ display: 'flex' }}>
                <a href="" >Apple</a>
                <div className={clsx(Styles.icons)}>
                  <Icons11 />
                </div>
              </div>
              {isHover7 && (
                  <div onMouseEnter={handleMouseEnter7} onMouseLeave={handleMouseLeave7} className={clsx(Styles.overlay7)}>
                    <div className="row">
  <div className={clsx("col-sm" ,Styles.colsm1)}>
  <Link href="">
    <span>Macbook</span>
    <Link href="">
      <li>Macbook Air</li>
    </Link>
    <Link href="">
      <li>Macbook Pro</li>
    </Link>
    </Link>
    
  </div>
  <div className={clsx("col-sm", Styles.colsm1)}>
    <Link href="">
    <span>Macbook Air</span>
    <Link href="">
      <li>Macbook Air M1</li>
    </Link>
    <Link href="">
      <li>Macbook Air M2</li>
    </Link>
    </Link>
  </div>
  <div className={clsx("col-sm", Styles.colsm1)}>
    <Link href="">
    <span>Macbook Pro</span>
    <Link href="">
      <li>Macbook Pro 13</li>
    </Link>
    <Link href="">
      <li>Macbook Pro 14</li>
    </Link>
    <Link href="">
      <li>Macbook Pro 16</li>
    </Link>
    </Link>
  </div>
  <div className={clsx("col-sm", Styles.colsm1)}>
    <Link href="">
    <span>Macbook Pro 14</span>
    <Link href="">
      <li>Macbook 14 M2 Pro </li>
    </Link>
    <Link href="">
      <li>Macbook 14 M2 max</li>
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
   
 
    <div onMouseEnter={handleMouseEnter8} onMouseLeave={handleMouseLeave8}  className={clsx(Styles.content2)}>
    <li >
              <div style={{ display: 'flex' }}>
                <a href="" >Bàn phím</a>
                <div className={clsx(Styles.icons)}>
                  <Icons11 />
                </div>
              </div>
              {isHover8 && (
                  <div onMouseEnter={handleMouseEnter8} onMouseLeave={handleMouseLeave8} className={clsx(Styles.overlay8)}>
                    <div className="row">
  <div className={clsx("col-sm" ,Styles.colsm1)}>
  <Link href="">
    <span>Thương hiệu</span>
    <Link href="">
      <li>AKKO</li>
    </Link>
    <Link href="">
      <li>Dare-U</li>
    </Link>
    <Link href="">
      <li>Rapoo</li>
    </Link>
    <Link href="">
      <li>FL-Esports</li>
    </Link>
    <Link href="">
      <li>Corsair</li>
    </Link>
    <Link href="">
      <li>E-Dra</li>
    </Link>
    </Link>
    
  </div>
  <div className={clsx("col-sm", Styles.colsm1)}>
    <Link href="">
    <span>Thương hiệu</span>
    <Link href="">
      <li>ASUS</li>
    </Link>
    <Link href="">
      <li>Logitech</li> 
     </Link>
     <Link href="">
      <li>Razer</li> 
     </Link>
     <Link href="">
      <li>Leopold</li> 
     </Link>
     <Link href="">
      <li>Durgod</li> 
     </Link>
    </Link>
  </div>
  <div className={clsx("col-sm", Styles.colsm1)}>
    <Link href="">
    <span>Giá tiền</span>
    <Link href="">
      <li>Dưới 1 triệu</li>
    </Link>
    <Link href="">
      <li>1 triệu - 2 triệu</li>
    </Link>
    <Link href="">
      <li>2 triệu - 3 triệu</li>
    </Link>
    <Link href="">
      <li>3 triệu - 4 triệu</li>
    </Link>
    <Link href="">
      <li>Trên 4 triệu</li>
    </Link>
    </Link>
  </div>
  <div className={clsx("col-sm", Styles.colsm1)}>
    <Link href="">
    <span>Kết nối</span>
    <Link href="">
      <li>Bluetooth</li>
    </Link>
    <Link href="">
      <li>Wireless</li>
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


    <div onMouseEnter={handleMouseEnter9} onMouseLeave={handleMouseLeave9}  className={clsx(Styles.content2)}>
    <li >
              <div style={{ display: 'flex' }}>
                <a href="" >Chuột + Lót</a>
                <div className={clsx(Styles.icons)}>
                  <Icons11 />
                </div>
              </div>
              {isHover9 && (
                  <div onMouseEnter={handleMouseEnter9} onMouseLeave={handleMouseLeave9} className={clsx(Styles.overlay9)}>
                    <div className="row">
  <div className={clsx("col-sm" ,Styles.colsm1)}>
  <Link href="">
    <span>Thương hiệu chuột</span>
    <Link href="">
      <li>Logitech</li>
    </Link>
    <Link href="">
      <li>Razer</li>
    </Link>
    <Link href="">
      <li>Coisair</li>
    </Link>
    <Link href="">
      <li>Pulsar</li>
    </Link>
    <Link href="">
      <li>Microsoft</li>
    </Link>
   
    </Link>
    
  </div>
  <div className={clsx("col-sm", Styles.colsm1)}>
    <Link href="">
    <span>Thương hiệu chuột</span>
    <Link href="">
      <li>ASUS</li>
    </Link>
    <Link href="">
      <li>Steelseries</li> 
     </Link>
     <Link href="">
      <li>Glorious</li> 
     </Link>
     <Link href="">
      <li>Rapoo</li> 
     </Link>
   
    </Link>
  </div>
  <div className={clsx("col-sm", Styles.colsm1)}>
    <Link href="">
    <span>Chuột theo giá tiền</span>
    <Link href="">
      <li>Dưới 500 nghìn</li>
    </Link>
    <Link href="">
      <li>Từ 500 nghìn - 1 triệu</li>
    </Link>
    <Link href="">
      <li>Từ 1 triệu - 2 triệu</li>
    </Link>
    <Link href="">
      <li>2 triệu - 3 triệu</li>
    </Link>
    <Link href="">
      <li>Trên 3 triệu</li>
    </Link>
    </Link>
  </div>
  <div className={clsx("col-sm", Styles.colsm1)}>
    <Link href="">
    <span>Loại chuột</span>
    <Link href="">
      <li>Chuột chơi game</li>
    </Link>
    <Link href="">
      <li>Chuột văn phòng</li>
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


    <div onMouseEnter={handleMouseEnter10} onMouseLeave={handleMouseLeave10}  className={clsx(Styles.content2)}>
    <li >
              <div style={{ display: 'flex' }}>
                <a href="" >Tai nghe - Loa</a>
                <div className={clsx(Styles.icons)}>
                 
                </div>
              </div>
              {isHover10 && (
                  <div onMouseEnter={handleMouseEnter10} onMouseLeave={handleMouseLeave10} className={clsx(Styles.overlay10)}>
                    <div className="row">
  <div className={clsx("col-sm" ,Styles.colsm1)}>
  <Link href="">
    <span>Thương hiệu tai nghe</span>
    <Link href="">
      <li>ASUS</li>
    </Link>
    <Link href="">
      <li>HyperX</li>
    </Link>
    <Link href="">
      <li>Corsair</li>
    </Link>
    <Link href="">
      <li>Razer</li>
    </Link>
    <Link href="">
      <li>Steelseries</li>
    </Link>
     <Link href="">
      <li>Rapoo</li>
    </Link>
      <Link href="">
      <li>Logitech</li>
    </Link>
    </Link>
    
  </div>
  <div className={clsx("col-sm", Styles.colsm1)}>
    <Link href="">
    <span>Tai nghe theo giá</span>
    <Link href="">
      <li>Tai nghe dưới 1 triệu</li>
    </Link>
    <Link href="">
      <li>Tai nghe từ 1- 2 triệu</li> 
     </Link>
     <Link href="">
      <li>Tai nghe từ 2 - 3 triệu</li> 
     </Link>
     <Link href="">
      <li>Tai nghe từ 3 - 4 triệu</li> 
     </Link>
   
    </Link>
  </div>
  <div className={clsx("col-sm", Styles.colsm1)}>
    <Link href="">
    <span>Kiểu kết nối</span>
    <Link href="">
      <li>Tai nghe Wireless</li>
    </Link>
    <Link href="">
      <li>Tai nghe Bluetool</li>
    </Link>
  
    </Link>
  </div>
  <div className={clsx("col-sm", Styles.colsm1)}>
    <Link href="">
    <span>Kiểu tai nghe</span>
    <Link href="">
      <li>Tai nghe Over-ear</li>
    </Link>
    <Link href="">
      <li>Tai nghe Gaming</li>
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


    <div onMouseEnter={handleMouseEnter11} onMouseLeave={handleMouseLeave11}  className={clsx(Styles.content2)}>
    <li >
              <div style={{ display: 'flex' }}>
                <a href="" >Ghế - Bàn</a>
                <div className={clsx(Styles.icons)}>
                  <Icons11 />
                </div>
              </div>
              {isHover11 && (
                  <div onMouseEnter={handleMouseEnter11} onMouseLeave={handleMouseLeave11} className={clsx(Styles.overlay11)}>
                    <div className="row">
  <div className={clsx("col-sm" ,Styles.colsm1)}>
  <Link href="">
    <span>Thương hiệu ghế Gaming</span>
    <Link href="">
      <li>Corsair</li>
    </Link>
    <Link href="">
      <li>Warrior</li>
    </Link>
    <Link href="">
      <li>E-DRA</li>
    </Link>
    <Link href="">
      <li>DXRacer</li>
    </Link>
    <Link href="">
      <li>Cougar</li>
    </Link>
     <Link href="">
      <li>AKRaing</li>
    </Link>
      
    </Link>
    
  </div>
  <div className={clsx("col-sm", Styles.colsm1)}>
    <Link href="">
    <span>Thương hiệu ghế CTH</span>
    <Link href="">
      <li>Warrior</li>
    </Link>
    <Link href="">
      <li>Sihoo</li> 
     </Link>
     <Link href="">
      <li>E-Dra</li> 
     </Link>
  
    </Link>
  </div>
  <div className={clsx("col-sm", Styles.colsm1)}>
    <Link href="">
    <span>Kiểu ghế</span>
    <Link href="">
      <li>Ghế công thái học</li>
    </Link>
    <Link href="">
      <li>Ghế Gaming</li>
    </Link>
  
    </Link>
  </div>
  <div className={clsx("col-sm", Styles.colsm1)}>
    <Link href="">
    <span>Bàn Gaming</span>
    <Link href="">
      <li>Bàn Gaming DXRacer</li>
    </Link>
    <Link href="">
      <li>Bàn Gaming E-Dra</li>
    </Link>
    <Link href="">
      <li>Bàn Gaming Warrior</li>
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


    <div onMouseEnter={handleMouseEnter12} onMouseLeave={handleMouseLeave12}  className={clsx(Styles.content2)}>
    <li >
              <div style={{ display: 'flex' }}>
                <a href="" >Phụ kiện</a>
                <div className={clsx(Styles.icons)}>
                  <Icons11 />
                </div>
              </div>
              {isHover12 && (
                  <div onMouseEnter={handleMouseEnter12} onMouseLeave={handleMouseLeave12} className={clsx(Styles.overlay12)}>
                    <div className="row">
  <div className={clsx("col-sm" ,Styles.colsm1)}>
  <Link href="">
    <span>Thiết bị Streaming</span>
    <Link href="">
      <li>AverMedia</li>
    </Link>
    <Link href="">
      <li>Razer</li>
    </Link>
    
    </Link>
    
  </div>
  <div className={clsx("col-sm", Styles.colsm1)}>
    <Link href="">
    <span>Asus ROG</span>
    <Link href="">
      <li>ROG Phone</li>
    </Link>
    <Link href="">
      <li>Máy chơi game cầm tay Asus</li> 
     </Link>
   
  
    </Link>
  </div>
  <div className={clsx("col-sm", Styles.colsm1)}>
    <Link href="">
    <span>Microphone</span>
    <Link href="">
      <li>Razer</li>
    </Link>
    <Link href="">
      <li>HyperX</li>
    </Link>
    <Link href="">
      <li>Thronmax</li>
    </Link>
    </Link>
  </div>
  <div className={clsx("col-sm", Styles.colsm1)}>
    <Link href="">
    <span>Webcam</span>
    <Link href="">
      <li>720p</li>
    </Link>
    <Link href="">
      <li>1080p</li>
    </Link>
    <Link href="">
      <li>4k</li>
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

    <div onMouseEnter={handleMouseEnter13} onMouseLeave={handleMouseLeave13}  className={clsx(Styles.content2)}>
    <li >
              <div style={{ display: 'flex' }}>
                <a href="" >Giải đáp</a>
                <div className={clsx(Styles.icons)}>
                  <Icons11 />
                </div>
              </div>
              {isHover13 && (
                  <div onMouseEnter={handleMouseEnter13} onMouseLeave={handleMouseLeave13} className={clsx(Styles.overlay13)}>
                    <div className="row">
  <div className={clsx("col-sm" ,Styles.colsm1)}>
  <Link href="">
    <span>Review sản phẩm</span>
    <Link href="">
      <li>Đánh giá sản phẩm Acer Nitro 5</li>
    </Link>
    <Link href="">
      <li>Đánh giá laptop Asus TUF</li>
    </Link>
    <Link href="">
      <li>Top PC 2024</li>
    </Link>
    <Link href="">
      <li>Top tai nghe 2024</li>
    </Link>
    <Link href="">
      <li>Top màn hình máy tính 2024</li>
    </Link>
    <Link href="">
      <li>Top chuột chơi game 2024</li>
    </Link>
    <Link href="">
      <li>Top bàn phím 2024</li>
    </Link>
    <Link href="">
      <li>Top card đồ họa 2024</li>
    </Link>
    </Link>
    
  </div>
  <div className={clsx("col-sm", Styles.colsm1)}>
    <Link href="">
    <span>Thủ thuật - Hỏi đáp</span>
    <Link href="">
      <li>Hướng dẫn cách bấm đầu dây mạng LAN</li>
    </Link>
    <Link href="">
      <li>Hướng dẫn chọn mua laptop gaming</li> 
     </Link>
     <Link href="">
      <li>Hướng dẫn chọn mua PC</li> 
     </Link>
   
     <Link href="">
      <li>Cách cài lại Windows</li> 
     </Link>
   
     <Link href="">
      <li>Cách lưu ảnh trên máy tính</li> 
     </Link>
   
     <Link href="">
      <li>Cách giảm giật lag khi chơi game</li> 
     </Link>
     <Link href="">
      <li>Cách đổi IP máy tính</li> 
     </Link>
   
     <Link href="">
      <li>Cách sử lý màn hình sọc</li> 
     </Link>
   
   
   
  
    </Link>
  </div>
  <div className={clsx("col-sm", Styles.colsm1)}>
    <Link href="">
    <span>Tin tức công nghệ mới</span>
    <Link href="">
      <li>Gợi ý tặng quà 8/3</li>
    </Link>
    <Link href="">
      <li>Windows 12 sắp ra mắt</li>
    </Link>
    <Link href="">
      <li>Tin tức về chat GPT</li>
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

   </ul>
    </div>
  <div className={clsx("col-6", Styles.col6)}>
    <Example />
    <div className="row" >
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
    <Link href="">
    <img src={Qc1}></img>
    </Link>
  </div>
  <div className="col-sm">
    <Link href="">
    <img src={Qc2}></img>
    </Link>
  </div>
  <div className="col-sm">
    <Link href="">
    <img src={Qc3}></img>
    </Link>
  </div>
  <div className="col-sm">
    <Link href="">
    <img src={Qc4}></img>
    </Link>
  </div>
</div>
  
    </div>
  )
}
export default Content;