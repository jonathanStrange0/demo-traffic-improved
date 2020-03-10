import {combineReducers} from 'redux'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import clientReducer from './client/client.reducer'
// import accountReducer from './account/account.reducer'

const persistConfig = {
 key:'root',
 storage,
 whitelist: ['account']
}

const rootReducer = combineReducers({
  client:clientReducer,
//   account: accountReducer,
})

export default persistReducer(persistConfig, rootReducer)