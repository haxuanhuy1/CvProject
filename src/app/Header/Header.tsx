import clsx from "clsx";
import Styles from './Header.module.scss'
const Header = ()=>{
    const anh1 = '/img/anh1.webp'
    const LogoGeavn = '/img/Logo.jpg'
    return(
        <div className={clsx(Styles.header)}>
            <img src={anh1}></img>
            <div className={clsx(Styles.header1)}>
            {/* <img src={LogoGeavn}> </img> */}
            <img src={LogoGeavn}></img>
            </div>
        <p>Phần Header</p>
        <p>Phần Content</p>
        </div>
    )
}
export default Header;
