import { createContext, useContext, useEffect, useReducer } from 'react'

const ToastContext = createContext({
  toast: null,
  showToast: () => {}
})

const reducer = (state, action) => {
  switch (action.type) {
    case 'SHOW_TOAST':
      return { ...state, toast: action.message }
    case 'HIDE_TOAST':
      return { ...state, toast: null }
    default:
      throw new Error()
  }
}

const initialState = {
  toast: null
}

const ToastProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const showToast = (message) => dispatch({ type: 'SHOW_TOAST', message })

  useEffect(() => {
    if (!state.toast) return

    const timer = setTimeout(() => dispatch({ type: 'HIDE_TOAST' }), 3000)

    return () => clearTimeout(timer)
  }, [state.toast])

  return <ToastContext.Provider value={{ ...state, showToast }}>{children}</ToastContext.Provider>
}

export const useToast = () => useContext(ToastContext)

export default ToastProvider
