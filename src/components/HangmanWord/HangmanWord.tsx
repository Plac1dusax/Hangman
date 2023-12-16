import React, { useState } from "react"
import styles from "./hangmanWord.module.scss"

type HangmanWordProps = {
  word: string[]
}

export default function HangmanWord({ word }: HangmanWordProps) {
  return (
    <div className={styles["letters-wrapper"]}>
      {word.map((letter) => {
        return <div className={styles["letter"]}></div>
      })}
    </div>
  )
}
