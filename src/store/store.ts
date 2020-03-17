import {createStore} from "redux"
import {rootReducer} from "../reducers/reducers"

let initialState: any = {
    isLogin: false,
    user: [{...JSON.parse(localStorage.getItem('user')as any)} || {}],
    projects: [...JSON.parse(localStorage.getItem('projects')as any) || []],
    allThreadMessages: [...JSON.parse(localStorage.getItem('allThreadMessages')as any) || []]
}

const store = createStore(
    rootReducer,
    initialState
)

export default store