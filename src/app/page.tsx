"use client"

import React, { useState, useEffect } from "react"
import HangmanDrawing from "@/components/HangmanDrawing/HangmanDrawing"
import HangmanWord from "@/components/HangmanWord/HangmanWord"
import KeyboardGrid from "@/components/KeyboardGrid/KeyboardGrid"
import GameStatusModal from "@/components/GameStatusModal/GameStatusModal"
import words from "../../public/words.json"
import styles from "../styles/homepage.module.scss"

export default function Home() {
  const [remainingAttempts, setRemainingAttempts] = useState(6)
  const [word, setWord] = useState<string[]>([])
  const [selectedLetters, setSelectedLetters] = useState([])

  useEffect(() => {
    setWord(pickRandomWord())
  }, [])

  function pickRandomWord() {
    const index = Math.floor(Math.random() * words.commonWords.length)
    const selectedWord = words.commonWords[index]
    const selectedWordArray = selectedWord.split("")

    return selectedWordArray
  }

  return (
    <div className={styles["homepage-container"]}>
      <HangmanDrawing remainingAttempts={remainingAttempts} />
      <HangmanWord word={word} selectedLetters={selectedLetters} />
      <KeyboardGrid
        word={word}
        selectedLetters={selectedLetters}
        setSelectedLetters={setSelectedLetters}
        remainingAttempts={remainingAttempts}
        setRemainingAttempts={setRemainingAttempts}
      />
      <GameStatusModal remainingAttempts={remainingAttempts} />
    </div>
  )
}
