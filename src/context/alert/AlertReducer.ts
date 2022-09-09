import { AlertStateProps } from '../../interface'

export const alertReducer = (state: AlertStateProps, action) => {
  switch (action.type) {
    case 'SET_ALERT':
      return action.payload
    case 'REMOVE_ALERT':
      return null
    default:
      return state
  }
}
