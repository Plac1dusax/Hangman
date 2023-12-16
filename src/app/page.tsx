import React, { useState } from "react"
import HangmanDrawing from "@/components/HangmanDrawing/HangmanDrawing"
import HangmanWord from "@/components/HangmanWord/HangmanWord"
import KeyboardGrid from "@/components/KeyboardGrid/KeyboardGrid"
import words from "../../public/words.json"
import styles from "../styles/homepage.module.scss"

export default function Home() {
  const index = Math.floor(Math.random() * words.commonWords.length)
  const selectedWord = words.commonWords[index]
  const selectedWordArray = selectedWord.split("")

  return (
    <div className={styles["homepage-container"]}>
      <HangmanDrawing />
      <HangmanWord word={selectedWordArray} />
      <KeyboardGrid />
    </div>
  )
}
