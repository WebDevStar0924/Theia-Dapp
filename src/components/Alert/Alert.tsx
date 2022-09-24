import React from 'react'
import styled, { DefaultTheme } from 'styled-components'
import CheckmarkCircleIcon from '../Svg/Icons/CheckmarkCircle'
import ErrorIcon from '../Svg/Icons/Error'
import BlockIcon from '../Svg/Icons/Block'
import InfoIcon from '../Svg/Icons/Info'
import { Text } from '../Text'
import { IconButton } from '../Button'
import { CloseIcon } from '../Svg'
import { Flex } from '../Flex'
import { AlertProps, variants } from './types'

interface ThemedIconLabel {
  variant: AlertProps['variant']
  theme: DefaultTheme
  hasDescription: boolean
}

const getThemeColor = ({ theme, variant = variants.INFO }: ThemedIconLabel) => {
  switch (variant) {
    case variants.DANGER:
      return theme.colors.failure
    case variants.WARNING:
      return theme.colors.warning
    case variants.SUCCESS:
      return theme.colors.success
    case variants.INFO:
    default:
      return theme.colors.secondary
  }
}

const getIcon = (variant: AlertProps['variant'] = variants.INFO) => {
  switch (variant) {
    case variants.DANGER:
      return BlockIcon
    case variants.WARNING:
      return ErrorIcon
    case variants.SUCCESS:
      return CheckmarkCircleIcon
    case variants.INFO:
    default:
      return InfoIcon
  }
}

const IconLabel = styled.div<ThemedIconLabel>`
  border-radius: 16px 0 0 16px;
  color: ${({ theme }) => theme.alert.background};
  padding: 12px;
  .icon {
    padding: 8px;
    border-radius: 100%;
    width: 40px;
    height: 40px;
    background-color: ${getThemeColor};
  }
`

const withHandlerSpacing = 32 + 12 + 8 // button size + inner spacing + handler position
const Details = styled.div<{ hasHandler: boolean }>`
  flex: 1;
  padding-bottom: 12px;
  padding-left: 12px;
  padding-right: ${({ hasHandler }) =>
    hasHandler ? `${withHandlerSpacing}px` : '12px'};
  padding-top: 12px;
`

const CloseHandler = styled.div`
  border-radius: 0 16px 16px 0;
  right: 8px;
  position: absolute;
  top: 8px;
`

const StyledAlert = styled(Flex)`
  position: relative;
  background-color: ${({ theme }) => theme.alert.background};
  border-radius: 16px;
  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1),
    0px 1px 1px rgba(0, 0, 0, 0.05);

  .title {
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #101828;
  }
  .description {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #98a2b3;
  }
`

const Alert: React.FC<AlertProps> = ({ title, children, variant, onClick }) => {
  const Icon = getIcon(variant)

  return (
    <StyledAlert>
      <IconLabel variant={variant} hasDescription={!!children}>
        <div className={'icon'}>
          <Icon fill="#fff" width="24px" />
        </div>
      </IconLabel>
      <Details hasHandler={!!onClick}>
        <Text bold className={'title'}>
          {title}
        </Text>
        {typeof children === 'string' ? (
          <Text as="p" className={'description'}>
            {children}
          </Text>
        ) : (
          children
        )}
      </Details>
      {onClick && (
        <CloseHandler>
          <IconButton size="sm" variant="text" onClick={onClick}>
            <CloseIcon width="24px" color="currentColor" />
          </IconButton>
        </CloseHandler>
      )}
    </StyledAlert>
  )
}

export default Alert
