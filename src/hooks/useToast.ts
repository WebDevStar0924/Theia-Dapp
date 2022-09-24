import { useDispatch } from 'react-redux'
import { useMemo } from 'react'
import { Toast, toastTypes } from '../widgets/Toast'
import { kebabCase } from 'lodash'
import {
  clear as clearToast,
  push as pushToast,
  remove as removeToast,
} from '../state/toasts'

export const useToast = () => {
  const dispatch = useDispatch()
  return useMemo(() => {
    const push = (toast: Toast) => dispatch(pushToast(toast))

    return {
      toastError: (title: string, description) => {
        return push({
          id: kebabCase(title),
          type: toastTypes.DANGER,
          title,
          description,
        })
      },
      toastInfo: (title: string, description) => {
        return push({
          id: kebabCase(title),
          type: toastTypes.INFO,
          title,
          description,
        })
      },
      toastSuccess: (title: string, description) => {
        return push({
          id: kebabCase(title),
          type: toastTypes.SUCCESS,
          title,
          description,
        })
      },
      toastWarning: (title: string, description) => {
        return push({
          id: kebabCase(title),
          type: toastTypes.WARNING,
          title,
          description,
        })
      },
      push,
      remove: (id: string) => dispatch(removeToast(id)),
      clear: () => dispatch(clearToast()),
    }
  }, [dispatch])
}
