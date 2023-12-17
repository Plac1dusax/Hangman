import React from "react"
import styles from "./gameStatusModal.module.scss"

type GameStatusModalProps = {
  gameStatus: string
}

export default function GameStatusModal(props: GameStatusModalProps) {
  const { gameStatus } = props

  let modal

  switch (gameStatus) {
    case "win":
      modal = (
        <div className={styles["game-status-modal-container"]}>
          <div>YOU WIN!</div>
        </div>
      )
      break
    case "lose":
      modal = (
        <div className={styles["game-status-modal-container"]}>
          <div>YOU LOST!</div>
        </div>
      )

      break
    default:
      modal = null
  }

  return modal
}
