import clsx from "clsx"
import Styles from './LaptopSale.module.scss'
import Example2 from "../Carousel2/Carousel2"
import Link from "next/link"
const LaptopSale = ()=>{
    const AnhnenSaleLap = '/img/AnhnenSaleLap.webp'
    return(
        <div className={clsx(Styles.LaptopSale)}>
            <div className={clsx("container-fluid" , Styles.row)}>
  <div className="row">
    <div className={clsx("col-sm-4 bg-success", Styles.row1)}>
      <Link href="">
      <img src={AnhnenSaleLap}></img>
      </Link>
    </div>
    <div className={clsx("col-sm-8 bg-warning", Styles.row2)}>
   <Example2 />
    </div>
  </div>
</div>
        </div>
    )
}
export default LaptopSale