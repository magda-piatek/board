import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './reducers/index'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const initialState = {}

const middleware = [thunk]

const persistConfig = {
  key: 'root',
  storage,
}

export type AppState = ReturnType<typeof rootReducer>

export const store = createStore(
  persistReducer(persistConfig, rootReducer),
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export const persistor = persistStore(store)
