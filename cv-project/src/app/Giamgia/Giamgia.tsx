import clsx from 'clsx'
import  Styles  from './Giamgia.module.scss'
import Icons14 from '../Icons/Icons14';
import Icons15 from '../Icons/Icons15';
const Giamgia = ()=>{
    const AnhLaptop = '/img/AnhnenLaptop.webp'
    return(
        <div className={clsx(Styles.giamgia)}>
            <div className={clsx(Styles.giamgia2)}>
      <div style={{paddingBottom: '10px',}} className={clsx(Styles.Icons)}>
      <Icons14  />

      </div>
      <p>GIảm ĐẾN 40% GIÁ CHỈ TỪ 8.490K</p>
            </div>
      
        </div>
    )
}
export default Giamgia;
