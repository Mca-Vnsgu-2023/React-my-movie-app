import { configureStore } from '@reduxjs/toolkit'
import { TrendingApi } from '../components/Slider/store'
import { ShowsByIdApi } from '../components/WatchNowShow/store'
import { ScheduleApi } from '../components/ShowCard/store'
import { SearchApi } from '../components/SearchMovies/store'

const reducer = {
    [TrendingApi.reducerPath]: TrendingApi.reducer,
    [ShowsByIdApi.reducerPath]:ShowsByIdApi.reducer,
    [ScheduleApi.reducerPath]: ScheduleApi.reducer,
    [SearchApi.reducerPath]:SearchApi.reducer,
}

const reducermiddleware = [
    TrendingApi.middleware,
    ShowsByIdApi.middleware,
    ScheduleApi.middleware,
    SearchApi.middleware
]

export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
         ...reducermiddleware
    ]),
})


// Types
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch