import React from "react"
import Button from "../Button/Button"
import styles from "./keyboardGrid.module.scss"

export default function ButtonsGrid() {
  const buttons: string[] = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ]

  return (
    <div className={styles["keyboard-grid"]}>
      {buttons.map((button: string, index: number) => {
        return <Button key={index} buttonKey={button} />
      })}
    </div>
  )
}
