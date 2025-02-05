import { HTMLProps, ReactNode } from "react";
import styles from './Button.module.css'

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  /**
   * Any elements or text or both. Usually children will handle icon and text
   * combination.
   */
  children: ReactNode
  /**
   * The type of the button.
   * Default is button type.
   */
  type?: 'button' | 'submit' | 'reset' | undefined
  /**
   * Different button styles primarly on colors.
   */
  variant?: 'primary' | 'secondary' | 'tertiary' | ''
}

function Button({
  children,
  variant = '',
  type = 'button',
  ...remainingProps
}: ButtonProps) {
  const styleResults = `${styles.Button} ${styles[variant]}`.trim();
  
  return (
    <button className={styleResults} type={type} {...remainingProps}>
      {children}
    </button>
  )
}

export default Button;