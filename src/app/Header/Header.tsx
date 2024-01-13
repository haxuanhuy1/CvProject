import clsx from "clsx";
import Styles from './Header.module.scss'
import Icon from "../Icons/Icons";
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import Icons2 from "../Icons/Icons2";
import Icons3 from "../Icons/Icons3";
import Icon4 from "../Icons/Icons4";
import Icon5 from "../Icons/Icons5";
import Icons6 from "../Icons/Icons6";
import Icons7 from "../Icons/Icons7";
import Icons8 from "../Icons/Icons8";
import Icons9 from "../Icons/Icons9";
import Icons10 from "../Icons/Icons10";
const Header = ()=>{
    const anh1 = '/img/anh1.webp'
    const LogoGeavn = '/img/Logo.jpg'
    return(
        <div className={clsx(Styles.header)}>
            <img src={anh1}></img>
            <div className={clsx(Styles.header1)}>
            {/* <img src={LogoGeavn}> </img> */}
            <img src={LogoGeavn}></img>
            <div className={clsx(Styles.header2)}>
                <div className={clsx(Styles.header3)}>
            <nav className="navbar navbar-light bg-light justify-content-between">
 
  <form className="form-inline">
    <input className="form-control mr-sm-2" type="search" placeholder="Bạn cần tìm gì?" aria-label="Search"/>
    {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
  </form>
</nav>
                </div>
                <div className={clsx(Styles.header4)}>
               <div style={{display: 'flex'}}>
                <div className={clsx(Styles.icons)}>
               <  Icons2 />
                </div>
               <a href="">Hotline</a>
               </div>
               <div style={{display: 'flex'}}>
                <div className={clsx(Styles.icons)}>
                <Icons3 />
                </div>
               <a href="">Hệ Thống Showroom</a>  
               </div>
               {/* <div style={{display: 'flex'}}>
                <div className={clsx(Styles.icons)}>
                    <Icon4 />
                </div>
                <a>Tra cứu đón hàng</a>
               </div> */}
               <div style={{display: 'flex'}}>
              <div className={clsx(Styles.icons)}>
              <Icon5 />
              </div>
                <a href="">Giỏ hàng</a>
               </div>
                </div>
            </div>
            </div>
            <div className={clsx(Styles.header5)}>
                <ul>
                    <li>
                        <div className={clsx(Styles.icons)}>
                        <Icons6 />
                    </div>
                        <a href="">Săn Vourcher GEARVN</a>
                    </li>
                    <li>
                        <div className={clsx(Styles.icons)}>
                        <Icons7 />
                    </div>
                        <a href="">Tin công nghệ</a>
                    </li>
                    <li>
                        <div className={clsx(Styles.icons)}>
                        <Icons8 />
                    </div>
                        <a href="">Video</a>
                    </li>
                    <li>
                        <div className={clsx(Styles.icons)}>
                        <Icons9 />
                    </div>
                        <a href="">Hướng dẫn thanh toán</a>
                    </li>
                    <li>
                        <div className={clsx(Styles.icons)}>
                        <Icons10 />
                    </div>
                        <a href="">Hướng dẫn trả góp</a>
                    </li>
                </ul>
            </div>
        
        </div>
    )
}
export default Header;
