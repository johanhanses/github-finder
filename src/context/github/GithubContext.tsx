import { createContext, Dispatch, ReactNode, useReducer } from 'react'
import { IUser, IRepository } from '../../interface'
import { GithubActionProps, githubReducer } from './GithubReducer'

export type GithubContextProps = {
  users: IUser[]
  user: IUser
  repos: IRepository[]
  loading: boolean
  dispatch: Dispatch<GithubActionProps>
}

export const GithubContext = createContext<GithubContextProps | null>(null)

type GithubProviderProps = {
  children: ReactNode | ReactNode[]
}

export const GithubProvider = ({ children }: GithubProviderProps) => {
  const [state, dispatch] = useReducer(githubReducer, {
    users: [],
    user: {},
    repos: [],
    loading: false
  })

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}
