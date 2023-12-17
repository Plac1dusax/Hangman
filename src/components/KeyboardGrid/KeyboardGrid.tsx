import React from "react"
import Button from "../Button/Button"
import styles from "./keyboardGrid.module.scss"

type ButtonsGridProps = {
  word: string[]
  selectedLetters: string[]
  setSelectedLetters: Function
  remainingAttempts: number
  setRemainingAttempts: Function
  gameStatus: string
}

export default function ButtonsGrid(props: ButtonsGridProps) {
  const {
    word,
    selectedLetters,
    setSelectedLetters,
    remainingAttempts,
    setRemainingAttempts,
    gameStatus,
  } = props

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
        return (
          <Button
            key={index}
            word={word}
            buttonKey={button}
            selectedLetters={selectedLetters}
            setSelectedLetters={setSelectedLetters}
            remainingAttempts={remainingAttempts}
            setRemainingAttempts={setRemainingAttempts}
            gameStatus={gameStatus}
          />
        )
      })}
    </div>
  )
}
