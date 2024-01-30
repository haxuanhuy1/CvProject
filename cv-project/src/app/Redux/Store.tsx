const initState = {
    name: "ptit",
    number : true,
}
interface Actions {
    type : string
}
export default function rootReducer(state = initState , actions:Actions){
  switch(actions.type){
    case "DECREMENT": 
    return {
        ...state ,
        number : false
    }
    case "RECREMENT":
        return {
            ...state,
            number : true
        }
  }
}