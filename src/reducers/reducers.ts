enum ActionsApiService {
    Login = 'IS_LOGIN',
    User = 'UPDATE_USER',
    Projects = 'UPDATE_PROJECTS',
    Messages = 'UPDATE_MESSAGES'
}

export const rootReducer = (state: any, action: any) => {
    switch (action.type) {
        case  ActionsApiService.Login:
            return {
                ...state,
                isLogin: action.payload
            }
        case ActionsApiService.User:
            return {}
        case ActionsApiService.Projects:
            return {
                ...state,
                projects: [...state.projects, action.payload]
            }
        case ActionsApiService.Messages:
            return {
                ...state,
                allThreadMessages: [...state.allThreadMessages, action.payload]
            }
        default:
            return state
    }
}

export const isLogin = (isLogin: boolean) => ({
    type: ActionsApiService.Login,
    payload: isLogin
})

export const updateProjects = (project: any) => ({
    type: ActionsApiService.Projects,
    payload: project
})

export const updateMessages = (message: any) => ({
    type: ActionsApiService.Messages,
    payload: message
})



