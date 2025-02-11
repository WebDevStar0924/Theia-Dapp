import React from 'react'
import { TransitionGroup } from 'react-transition-group'
import styled from 'styled-components'
import Toast from './Toast'
import { ToastContainerProps } from './types'

const ZINDEX = 2000
const BOTTOM_POSITION = 80 // Initial position from the top

const StyledToastContainer = styled.div`
  .enter,
  .appear {
    opacity: 0.01;
  }

  .enter.enter-active,
  .appear.appear-active {
    opacity: 1;
    transition: opacity 250ms ease-in;
  }

  .exit {
    opacity: 1;
  }

  .exit.exit-active {
    opacity: 0.01;
    transition: opacity 250ms ease-out;
  }
`

const ToastContainer: React.FC<ToastContainerProps> = ({
  toasts,
  onRemove,
  ttl = 6000,
  stackSpacing = 98,
}) => {
  return (
    <StyledToastContainer>
      <TransitionGroup>
        {toasts.map((toast, index) => {
          const zIndex = (ZINDEX - index).toString()
          const bottom = BOTTOM_POSITION + index * stackSpacing

          return (
            <Toast
              key={toast.id}
              toast={toast}
              onRemove={onRemove}
              ttl={ttl}
              style={{ bottom: `${bottom}px`, zIndex }}
            />
          )
        })}
      </TransitionGroup>
    </StyledToastContainer>
  )
}

export default ToastContainer
