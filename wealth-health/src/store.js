import { configureStore } from '@reduxjs/toolkit'
import userProfileReducer from './features/userProfile'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// temp-log-middleware
const actionLoggerMiddleware = store => next => action => {
    console.log('Dispatching action:', action)
    const result = next(action)
    console.log('New state:', store.getState())
    return result
}

// using redux-persist to secure 'localStorage'
const persistConfig = {
    key: 'root',
    storage
  }

const persistedReducer = persistReducer(persistConfig, userProfileReducer)

const store = configureStore ({
    reducer: {
        userProfile: persistedReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
      actionLoggerMiddleware 
    )
})

const persistor = persistStore(store)

export {store, persistor}