import React, { useState } from "react"
import styles from "./hangmanWord.module.scss"

type HangmanWordProps = {
  word: string[]
  selectedLetters: string[]
}

export default function HangmanWord({
  word,
  selectedLetters,
}: HangmanWordProps) {
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
