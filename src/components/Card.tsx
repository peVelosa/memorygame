import React from 'react'
import styles from '../styles/Cards.module.css'

type ICard = {
  rowItem: number,
  handleClick: (colIndex: number, rowIndex: number, item: any) => void,
  rowIndex: number,
  colIndex: number,
  revealedGrid: Array<any>
}

const Card = ({ rowItem, handleClick, rowIndex, colIndex, revealedGrid }: ICard): JSX.Element => {
  return (
    <button
      className={styles.row}
      onClick={() => handleClick(colIndex, rowIndex, rowItem)}
      disabled={revealedGrid[colIndex][rowIndex]}
    >
      {revealedGrid[colIndex][rowIndex] ?
        rowItem
        :
        ''
      }
    </button>
  )
}

export default Card