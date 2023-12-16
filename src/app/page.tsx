import React, { useState } from "react"
import HangmanDrawing from "@/components/HangmanDrawing/HangmanDrawing"
import KeyboardGrid from "@/components/KeyboardGrid/KeyboardGrid"
import styles from "../styles/homepage.module.scss"

export default function Home() {
  return (
    <div className={styles["homepage-container"]}>
      <div className={styles["hangman-wrapper"]}>
        <HangmanDrawing />
      </div>
      <div className={styles["buttons-wrapper"]}>
        <KeyboardGrid />
      </div>
    </div>
  )
}
