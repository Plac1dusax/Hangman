import React, { useState, useEffect, use } from "react"
import styles from "./button.module.scss"

type ButtonKeyProps = {
  key: number
  word: string[]
  buttonKey: string
  selectedLetters: string[]
  setSelectedLetters: Function
  remainingAttempts: number
  setRemainingAttempts: Function
}

export default function Button(props: ButtonKeyProps) {
  const {
    buttonKey,
    word,
    selectedLetters,
    setSelectedLetters,
    remainingAttempts,
    setRemainingAttempts,
  } = props

  const [clickedButton, setClickedButton] = useState(false)

  function handleButtonClick(e: React.MouseEvent<HTMLElement>) {
    const selectedLetter = (e.target as HTMLButtonElement).textContent

    if (selectedLetter && selectedLetters.includes(selectedLetter)) return
    setSelectedLetters([...selectedLetters, selectedLetter])

    if (selectedLetter && !word.includes(selectedLetter)) {
      setRemainingAttempts(remainingAttempts - 1)
    }

    setClickedButton(true)
  }

  return (
    <div
      onClick={handleButtonClick}
      className={`${
        clickedButton
          ? `${styles["button"]} ${styles["button-clicked"]}`
          : styles["button"]
      }`}
    >
      {buttonKey}
    </div>
  )
}
