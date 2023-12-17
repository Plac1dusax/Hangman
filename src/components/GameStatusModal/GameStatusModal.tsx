import React from "react"
import styles from "./gameStatusModal.module.scss"

type GameStatusModalProps = {
  setRemainingAttempts: Function
  gameStatus: string
  setGameStatus: Function
  setSelectedLetters: Function
}

export default function GameStatusModal(props: GameStatusModalProps) {
  const {
    gameStatus,
    setGameStatus,
    setRemainingAttempts,
    setSelectedLetters,
  } = props

  let modal

  function restartGame() {
    setGameStatus("")
    setRemainingAttempts(6)
    setSelectedLetters([])
  }

  switch (gameStatus) {
    case "win":
      modal = (
        <>
          <div className={styles["game-status-modal-container"]}>
            <div className={styles["game-status-message"]}>YOU WON!</div>
            <button onClick={restartGame} className={styles["restart-button"]}>
              RESTART
            </button>
          </div>
          <div className={styles["overlay"]}></div>
        </>
      )
      break
    case "lose":
      modal = (
        <>
          <div className={styles["game-status-modal-container"]}>
            <div className={styles["game-status-message"]}>YOU LOST!</div>
            <button onClick={restartGame} className={styles["restart-button"]}>
              RESTART
            </button>
          </div>
          <div className={styles["overlay"]}></div>
        </>
      )

      break
    default:
      modal = null
  }

  return modal
}
