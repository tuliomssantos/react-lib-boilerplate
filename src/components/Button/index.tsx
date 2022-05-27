import clsx from 'clsx'
import { forwardRef } from 'react'

import styles from './styles.module.scss'

export interface ButtonProps extends React.ComponentProps<'button'> {
  backgroundColor?: string
  children: React.ReactNode
  size?: 'small' | 'medium' | 'large'
  variant?: 'primary' | 'secondary'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      backgroundColor = '',
      children,
      className,
      size = 'medium',
      variant = 'primary',
      ...rest
    },
    ref
  ) => {
    return (
      <button
        {...rest}
        ref={ref}
        type="button"
        className={clsx([
          styles.btn,
          styles[`btn__${variant}`],
          styles[`btn__${size}`],
          className,
        ])}
        style={{ backgroundColor }}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
