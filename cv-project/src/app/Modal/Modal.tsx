import clsx from 'clsx'
import Styles from './Modal.module.scss'
import Icons15 from '../Icons/Icons15'
import Icons14 from '../Icons/Icons14'
import Icons13 from '../Icons/Icons13'
import { useDispatch } from 'react-redux'
import { decrement } from '../Redux/Dispatch'
const Model = ()=>{
    const Modalimg = '/img/anhhienthi.webp'
    const dispatch = useDispatch()
    const handButton = ()=>{
        dispatch(decrement())
    }
    const handleOutsideClick = (e) => {
      // Kiểm tra xem sự kiện click có xảy ra bên ngoài Modal không
      if (!e.target.closest(`.${Styles.modal1}`)) {
        // Nếu có, đóng Modal
        handButton();
      }
    };
    return (
        <div className={clsx(Styles.modal1)}>
     
      <button onClick={handButton}>Đóng</button>
      <img src={Modalimg} alt="Modal Image" />
      
        </div>
    )
}
export default Model;
