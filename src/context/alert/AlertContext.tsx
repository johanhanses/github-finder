import { createContext, ReactNode, useReducer } from 'react'
import { AlertStateProps } from '../../interface'
import { alertReducer } from './AlertReducer'

type AlertContextProps = {
  alert: AlertStateProps
  setAlert: (message: string, type: string) => void
}

export const AlertContext = createContext<AlertContextProps | null>(null)

type AlertProviderProps = {
  children: ReactNode | ReactNode[]
}
export const AlertProvider = ({ children }: AlertProviderProps) => {
  const initialState = null
  const [state, dispatch] = useReducer(alertReducer, initialState)

  const setAlert = (message: string, type: string) => {
    dispatch({
      type: 'SET_ALERT',
      payload: { message, type }
    })

    setTimeout(() => dispatch({ type: 'REMOVE_ALERT' }), 3000)
  }

  return (
    <AlertContext.Provider value={{ alert: state, setAlert }}>
      {children}
    </AlertContext.Provider>
  )
}
