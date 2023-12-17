import React from "react"
import styles from "./gameStatusModal.module.scss"

type GameStatusModalProps = {
  remainingAttempts: number
}

export default function GameStatusModal(props: GameStatusModalProps) {
  const { remainingAttempts } = props

  return remainingAttempts === 0 ? (
    <div className={styles["game-status-modal-container"]}>
      <div>YOU LOST!</div>
    </div>
  ) : null
}
