import React from "react"
import styles from "./hangmanDrawing.module.scss"

type HangmanDrawingProps = {
  remainingAttempts: number
}

export default function HangmanDrawing({
  remainingAttempts,
}: HangmanDrawingProps) {
  return (
    <div className={styles["hangman-drawing-wrapper"]}>
      <div className={styles["pole-floor"]}></div>
      <div className={styles["pole"]}></div>
      <div className={styles["pole-ceiling"]}></div>
      <div className={styles["rope"]}>
        {remainingAttempts < 6 ? (
          <div className={styles["hangman-head"]} />
        ) : null}
        {remainingAttempts < 5 ? (
          <div className={styles["hangman-body"]} />
        ) : null}
        {remainingAttempts < 4 ? (
          <div
            className={`${styles["hangman-arm"]}  ${styles["hangman-left-arm"]}`}
          />
        ) : null}
        {remainingAttempts < 3 ? (
          <div
            className={`${styles["hangman-arm"]}  ${styles["hangman-right-arm"]}`}
          />
        ) : null}
        {remainingAttempts < 2 ? (
          <div
            className={`${styles["hangman-leg"]}  ${styles["hangman-left-leg"]}`}
          />
        ) : null}
        {remainingAttempts < 1 ? (
          <div
            className={`${styles["hangman-leg"]}  ${styles["hangman-right-leg"]}`}
          />
        ) : null}
      </div>
    </div>
  )
}
