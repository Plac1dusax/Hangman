import React, { useEffect } from "react"
import styles from "./hangmanWord.module.scss"

type HangmanWordProps = {
  word: string[]
  selectedLetters: string[]
  remainingAttempts: number
  setGameStatus: Function
}

export default function HangmanWord(props: HangmanWordProps) {
  const { word, selectedLetters, remainingAttempts, setGameStatus } = props

  useEffect(() => {
    const isGameWin =
      remainingAttempts > 0 &&
      word.length > 0 &&
      word.every((letter) => selectedLetters.includes(letter))

    console.log(isGameWin)
    if (isGameWin) {
      setGameStatus("win")
    }
  }, [selectedLetters])

  return (
    <div className={styles["letters-wrapper"]}>
      {word.map((letter, index) => {
        return (
          <div key={index} className={styles["letter"]}>
            {selectedLetters.includes(letter) ? letter : null}
          </div>
        )
      })}
    </div>
  )
}
