import { IUser, IRepository } from '../../interface'

export type GithubStateProps = {
  users: IUser[]
  user: IUser
  repos: IRepository[]
  loading: boolean
}

export type GithubActionProps =
  | { type: 'GET_USERS'; payload: IUser[] }
  | {
      type: 'GET_USER_AND_REPOS'
      payload: { user: IUser; repos: IRepository[] }
    }
  | { type: 'SET_LOADING' }
  | { type: 'CLEAR_USERS' }

export const githubReducer = (state: GithubStateProps, action: any) => {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload,
        loading: false
      }
    case 'GET_USER_AND_REPOS':
      return {
        ...state,
        user: action.payload.user,
        repos: action.payload.repos,
        loading: false
      }
    case 'SET_LOADING':
      return {
        ...state,
        loading: true
      }
    case 'CLEAR_USERS':
      return {
        ...state,
        users: []
      }
    default:
      return state
  }
}
