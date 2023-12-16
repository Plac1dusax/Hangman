import React from "react"
import styles from "./button.module.scss"

type ButtonKeyProps = {
  key: number
  buttonKey: string
}

export default function Button({ buttonKey }: ButtonKeyProps) {
  return <div className={styles['button']}>{buttonKey}</div>
}
