import React, { useState, useEffect } from 'react'
import { createGrid, OPTIONS } from '../utils/utils'

type TypeTurn = {
  col: number,
  row: number,
  value: number
}

const useGrid = () => {

  const [grid, setGrid] = useState<number[][] | undefined>()

  const [revealedGrid, setRevealedGrid] = useState<boolean[][] | undefined>()

  const [option, setOption] = useState({ opt: OPTIONS[43] })

  const [turn, setTurn] = useState<Array<TypeTurn> | []>([])


  const handleClick = (colIndex: number, rowIndex: number, item: number) => {
    if (!revealedGrid) return
    if (turn.length >= 2) return
    const newReveleadGrid = [...revealedGrid]
    newReveleadGrid[colIndex][rowIndex] = true
    setRevealedGrid(newReveleadGrid)
    setTurn([...turn, {
      col: colIndex,
      row: rowIndex,
      value: item
    }])
  }

  const handleValidate = () => {
    if (!revealedGrid) return
    const newReveleadGrid = [...revealedGrid]
    if (turn.length >= 2) {
      setTimeout(() => {
        if (turn[0].value === turn[1].value) {
          newReveleadGrid[turn[0].col][turn[0].row] = true
          newReveleadGrid[turn[1].col][turn[1].row] = true
        } else {
          newReveleadGrid[turn[0].col][turn[0].row] = false
          newReveleadGrid[turn[1].col][turn[1].row] = false
        }
        setTurn([])
      }, 0.8 * 1000)
    }
    setRevealedGrid(newReveleadGrid)
  }

  const initGame = () =>{
    const gridSetter = createGrid(option.opt)
    setGrid(gridSetter);
    setRevealedGrid(
      new Array(gridSetter.length)
        .fill('')
        .map(() => (
          new Array(gridSetter[0].length)
            .fill(false)
        ))
    )
  }

  useEffect(() => {
    initGame()
  }, [])

  useEffect(() => {
    handleValidate()
  }, [turn])

  useEffect(() => {
    initGame()
    setTurn([])
  }, [option])

  const isGameEnd = revealedGrid?.some(arr => arr.some(value => !value))

  return { grid, revealedGrid, setOption, handleClick, isGameEnd, option }
}

export default useGrid