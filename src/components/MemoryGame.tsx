import React from 'react'
import Card from './Card'
import styles from '../styles/Cards.module.css'
import { OPTIONS } from '../utils/utils'
import useGrid from '../hooks/useGrid'
import Buttons from './Buttons'



const MemoryGame = () => {

  const { grid, revealedGrid, handleClick, isGameEnd, option, setOption } = useGrid()

  return (
    <main className={styles.grid}>
      <Buttons
        option={option}
        setOption={setOption}
      />
      {isGameEnd ? (
        revealedGrid && grid ?
          <div className={styles.container}>
            {grid.map((colItem, colIndex) =>
              <div
                className={styles.col}
                key={colIndex}
              >
                {colItem.map((rowItem, rowIndex) =>
                  <React.Fragment key={rowIndex}>
                    <Card
                      rowItem={rowItem}
                      handleClick={handleClick}
                      rowIndex={rowIndex}
                      colIndex={colIndex}
                      revealedGrid={revealedGrid}
                    />
                  </React.Fragment>)}
              </div>)}
          </div> : null
      ) : (
        <div>
          <h1>Game End</h1>
          <button
            onClick={() => setOption({ opt: OPTIONS[43] })}
          >
            Click Here To play again
          </button>
        </div>
      )}
    </main >
  )
}

export default MemoryGame