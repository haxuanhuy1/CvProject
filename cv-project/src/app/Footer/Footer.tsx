import clsx from "clsx";
import { Style } from "util";
import Styles from './Footer.module.scss'
import IconsTiktok from "../Icons/IconsFace";
import IconsFacebook from "../Icons/IconsFace";
import Icons15 from "../Icons/Icons15";
import Icons25 from "../Icons/IconsTiktok";
import Icons26 from "../Icons/IconsYou";
import Icons27 from "../Icons/IconsInsta";
import Icons29 from "../Icons/IconsYou";
const Footer = ()=>{
    const bocongthuong = '/img/Bocongthuong.webp'
    return (
        <div className={clsx(Styles.footer)}>
            <div style={{display: 'flex'}}>

        <h3>KẾT NỐI VỚI CHÚNG TÔI</h3>
        <div className={clsx(Styles.icons)}>
            <IconsFacebook />
           <Icons25 />
           <Icons26 />
         
           <Icons27 />
        </div>
        <div>
            <img src={bocongthuong}></img>
        </div>
            </div>
        </div>
    )
}
export default Footer;
