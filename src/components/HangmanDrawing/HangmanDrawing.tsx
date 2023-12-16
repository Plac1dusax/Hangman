import React from "react"
import styles from "./hangmanDrawing.module.scss"

export default function HangmanDrawing() {
  return (
    <div className={styles["hangman-drawing-wrapper"]}>
      <div className={styles["pole-floor"]}></div>
      <div className={styles["pole"]}></div>
      <div className={styles["pole-ceiling"]}></div>
      <div className={styles["rope"]}>
        <div className={styles["hangman-head"]}></div>
        <div className={styles["hangman-body"]}></div>
        <div
          className={`${styles["hangman-arm"]}  ${styles["hangman-left-arm"]}`}
        ></div>
        <div
          className={`${styles["hangman-arm"]}  ${styles["hangman-right-arm"]}`}
        ></div>
        <div
          className={`${styles["hangman-leg"]}  ${styles["hangman-left-leg"]}`}
        ></div>
        <div
          className={`${styles["hangman-leg"]}  ${styles["hangman-right-leg"]}`}
        ></div>
      </div>
    </div>
  )
}
