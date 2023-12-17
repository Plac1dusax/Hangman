import React, { useEffect } from "react"
import styles from "./hangmanWord.module.scss"

type HangmanWordProps = {
  word: string[]
  selectedLetters: string[]
  remainingAttempts: number
  gameStatus: string
  setGameStatus: Function
}

export default function HangmanWord(props: HangmanWordProps) {
  const {
    word,
    selectedLetters,
    remainingAttempts,
    gameStatus,
    setGameStatus,
  } = props

  useEffect(() => {
    const isGameWin =
      remainingAttempts > 0 &&
      word.length > 0 &&
      word.every((letter) => selectedLetters.includes(letter))

    if (isGameWin) {
      setGameStatus("win")
    }
  }, [selectedLetters])

  return (
    <div className={styles["letters-wrapper"]}>
      {word.map((letter, index) => {
        return gameStatus === "lose" ? (
          selectedLetters.includes(letter) ? (
            <div key={index} className={`${styles["letter"]}`}>
              {letter}
            </div>
          ) : (
            <div
              key={index}
              className={`${styles["letter"]} ${styles["reveal"]}`}
            >
              {letter}
            </div>
          )
        ) : (
          <div key={index} className={styles["letter"]}>
            {selectedLetters.includes(letter) ? letter : null}
          </div>
        )
      })}
    </div>
  )
}
