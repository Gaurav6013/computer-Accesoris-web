import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { rootreducer } from './rootreducer'
import { rootsaga } from './saga/rootsaga'


const persistConfig = {
  key: 'root',
  storage,
  whitelist:['auth']
}

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
const middleware = [thunk,sagaMiddleware]
const persistedReducer = persistReducer(persistConfig,rootreducer)
// mount it on the Store
export const store = createStore(
  persistedReducer,
  applyMiddleware(...middleware)
  )
export let persistor = persistStore(store)

// then run the saga
sagaMiddleware.run(rootsaga)

// render the application