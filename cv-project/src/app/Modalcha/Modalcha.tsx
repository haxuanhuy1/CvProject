import Model from "../Modal/Modal"
import { useSelector } from "react-redux"
import { useState , useEffect } from "react"
const Modelcha = ()=>{
  const dataModel = true
  interface stateStore {
    name : string,
    number : boolean
  }
  const [stateModel  , setStateModel] = useState(Boolean)

  const state = useSelector((state: stateStore) => state && state.number);
 console.log(state)
  useEffect(()=>{
    if(state !== undefined){
      setStateModel(false)
    }else {
      const timeoutId = setTimeout(() => {
        setStateModel(true);
      }, 3000);
      return ()=> clearTimeout(timeoutId)
    }
   
  },state)
    return(
        <div>
          {
            stateModel  ? <Model /> : null
          }
         
        </div>
    )
}
export default Modelcha