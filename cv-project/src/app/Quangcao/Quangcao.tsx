import clsx from "clsx";
import Styles from './Quangcao.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from "next/link";
import IconsCar from "../Icons/IconsCar";
import Example3 from "../Caroulsel3/Carousel3";
import Example4 from "../Carousel4/Carousel4";
const Quangcao = ()=>{
 const Quangcao1 = '/img/quangcao1.webp'
 const Quangcao2 = '/img/quangcao2.webp'
 const danhmucSp1 = '/img/danhmucsanpham1.webp'
 const danhmucSp2 = '/img/danhmucsanpham2.webp'
 const danhmucSp3 = '/img/danhmucsanpham3.webp'
 const danhmucSp4 = '/img/danhmucsanpham4.webp'
 const danhmucSp5 = '/img/danhmucsanpham5.webp'
 const danhmucSp6 = '/img/danhmucsanpham6.webp'
 const danhmucSp7 = '/img/danhmucsanpham7.webp'
 const danhmucSp8 = '/img/danhmucsanpham8.webp'
 const danhmucSp9 = '/img/danhmucsanpham9.webp'
 const danhmucSp10 = '/img/danhmucsanpham10.webp'
 const danhmucSp11  = '/img/danhmucsanpham11.webp'
 const danhmucSp12  = '/img/danhmucsanpham12.webp'
 const khuyenmai1 = '/img/khuyenmai1.webp'
 const khuyenmai2 = '/img/khuyenmai2.webp'
 const khuyenmai3 = '/img/khuyenmai3.webp'
 const khuyenmai4 = '/img/khuyenmai4.webp'
 const khuyenmai5 = '/img/khuyenmai5.webp'
 const khuyenmai6 = '/img/khuyenmai6.webp'
 const khuyenmai7 = '/img/khuyenmai7.webp'
 const khuyenmai8 = '/img/khuyenmai8.webp'
    return (
        <div className={clsx(Styles.pcgaming)} >
<div style={{}} className="row">
  <div className={clsx("col-sm" , Styles.row1)}>
    <Link href="">
   <img src={Quangcao1}></img>
    </Link>
  </div>
  <div className={clsx("col-sm" , Styles.row1)}>
    <Link href="">
    <img src={Quangcao2}></img>
    </Link>
  </div>
</div>
  <div className={clsx(Styles.pcgaming1)}>
   <div className={clsx(Styles.headerPc)}>
    <div className={clsx(Styles.pcbanchay)}>
   <h3>PC bán chạy</h3>
   
    </div>
    <div className={clsx(Styles.tragop)}>
        <IconsCar />
    <h3>Trả góp 0%</h3>
    </div>
   </div>
   <div className={clsx(Styles.contentPC)}>
    <Example3 />
   </div>
  </div>
  <div className={clsx(Styles.pcgaming2)}>
   <div className={clsx(Styles.headerPc)}>
    <div className={clsx(Styles.pcbanchay)}>
   <h3>Laptop gaming bán chạy</h3>
   
    </div>
    <div className={clsx(Styles.tragop2)}>
        <IconsCar />
    <h3>Miễn phí giao hàng</h3>
    </div>
   </div>
   <div className={clsx(Styles.contentPC)}>
    <Example4 />
   </div>
  </div>
  <div className={clsx(Styles.danhmucsanpham)}>
    <div style={{paddingLeft: '30px', paddingTop: '10px', borderBottom: '1px solid #ccc'}}>
   <h3>Danh mục sản phẩm</h3>
    </div>
    <div className={clsx("row" , Styles.sanpham)}>
  <div className="col">
    <Link href="">
    <img src={danhmucSp1}></img>
    </Link>
    <p style={{paddingLeft: '15px' , fontWeight: '500'}}>Laptop</p>
  </div>
  <div className="col">
    <Link href="">
    <img src={danhmucSp2}></img>
    </Link>
    <p style={{paddingLeft: '15px' , fontWeight: '500'}}>PC</p>
  </div>
  <div className="col">
    <Link href="">
    <img src={danhmucSp3}></img>
    </Link>
    <p style={{paddingLeft: '10px' , fontWeight: '500'}}>Màn hình</p>
  </div>
  <div className="col">
    <Link href="">
    <img src={danhmucSp4}></img>
    </Link>
    <p style={{paddingLeft: '10px' , fontWeight: '500'}}>Mainboad</p>
    </div>  
  <div className="col">
    <Link href="">
    <img src={danhmucSp5}></img>
    </Link>
    <p style={{paddingLeft: '15px' , fontWeight: '500'}}>CPU</p>
  </div>
  <div className="col">
    <Link href="">
    <img src={danhmucSp6}></img>
    </Link>
    <p style={{paddingLeft: '15px' , fontWeight: '500'}}>VGA</p>
  </div>
</div>
<div className={clsx("row" , Styles.sanpham)}>
  <div className="col">
    <Link href="">
    <img src={danhmucSp7}></img>
    </Link>
    <p style={{paddingLeft: '15px' , fontWeight: '500'}}>RAM</p>
  </div>
  <div className="col">
    <Link href="">
    <img src={danhmucSp8}></img>
    </Link>
    <p style={{paddingLeft: '10px' , fontWeight: '500'}}>Ổ cứng</p>
  </div>
  <div className="col">
    <Link href="">
    <img src={danhmucSp9}></img>
    </Link>
    <p style={{paddingLeft: '15px' , fontWeight: '500'}}>Case</p>
  </div>
  
  <div className="col">
    <Link href="/about">
    <img src={danhmucSp10}></img>
    </Link>
    <p style={{paddingLeft: '10px' , fontWeight: '500'}}>Tản nhiệt</p>
    </div>  
  
  <div className="col">
    <Link href="">
    <img src={danhmucSp11}></img>
    </Link>
    <p style={{paddingLeft: '15px' , fontWeight: '500'}}>Nguồn</p>
  </div>
  <div className="col">
    <Link href="">
    <img src={danhmucSp12}></img>
    </Link>
    <p style={{paddingLeft: '10px' , fontWeight: '500'}}>Bàn phím</p>
  </div>
</div>
  </div>
  <div className={clsx(Styles.tintuc)}>
   <div className={clsx(Styles.tintuc1)}>
   <h3>Chuyên trang khuyến mãi</h3>
   <div className={clsx("row" , Styles.tintucrow)}>
  <div className="col">
    <Link href=""> 
    <img src={khuyenmai1}></img>
    </Link>
  </div>
  <div className="col">
    <Link href="">
    <img src={khuyenmai2}></img>
    </Link>
  </div>
  <div className="col">
    <Link href="">
      <img src={khuyenmai3}></img>
    </Link>
  </div>
  <div className="col">
    <Link href="">
      <img src={khuyenmai4}></img>
    </Link>
  </div>
</div>
   </div>
   <div className={clsx(Styles.tintuc2)}>
   <h3>Tin tức công nghệ</h3>
   <div className={clsx("row" , Styles.tintucrow)}>
  <div className="col">
    <Link href=""> 
    <img src={khuyenmai5}></img>
    </Link>
    <p>Đánh giá chi tiết Laptop gaming MSI Titan 18 HX.....</p>
  </div>
  <div className="col">
    <Link href="">
    <img src={khuyenmai6}></img>
    </Link>
    <p>Mua laptop trả góp cần lưu ý những gì ?</p>
  </div>
  <div className="col">
    <Link href="">
      <img src={khuyenmai7}></img>
    </Link>
    <p>5 website giúp bạn cập nhật nhanh CV Online của mình</p>
  </div>
  <div className="col">
    <Link href="">
      <img src={khuyenmai8}></img>
    </Link>
    <p>Game NFT là gì , cách kiếm tiền từ game NFT - xu hướng game 2024 </p>
  </div>
</div>
   </div>
  </div>
        </div>
    )
}
export default Quangcao;
