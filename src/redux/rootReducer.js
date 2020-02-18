import {persistReducer} from "redux-persist"
import storage from "redux-persist/lib/storage"
import {combineReducers} from "redux"
import income_reducer from "redux/income/income_reducer"
import pensionStartAges_reducer from "./pensionStartAges/pensionStartAges_reducer"
import savings_reducer from "./savings/savings_reducer"
import user_reducer from "./user/user_reducer"
import assumptions_reducer from "./assumptions/assumptions_reducer"

const persistConfig = {
    key: "root",
    storage, 
    whitelist: [
        "income_reducer",
        "pensionStartAges_reducer",
        "savings_reducer",
        "user_reducer",
        "assumptions_reducer" , 
]
}



const rootReducer = combineReducers({
    income_reducer,
    pensionStartAges_reducer,
    savings_reducer,
    user_reducer,
    assumptions_reducer  
   })

export default persistReducer(persistConfig, rootReducer)
