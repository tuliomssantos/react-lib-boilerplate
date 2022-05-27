import React, { forwardRef } from 'react'

import clsx from 'clsx'
import styles from './styles.module.scss'

export interface InputProps extends React.ComponentProps<'input'> {
  backgroundColor?: string
  variant?: 'outlined' | 'filled' | 'standard'
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ backgroundColor = '', className, variant = 'standard', ...rest }, ref) => {
    return (
      <input
        {...rest}
        ref={ref}
        className={clsx([styles.input, styles[`input__${variant}`], className])}
        style={{
          ...rest.style,
          backgroundColor,
        }}
      />
    )
  }
)

Input.displayName = 'Input'

export default Input
