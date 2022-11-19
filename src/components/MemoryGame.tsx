import { useState } from 'react'

const MemoryGame = () => {

  const [grid, setGrid] = useState([
    [1, 2, 2, 4],
    [1, 3, 4, 3],
    [5, 6, 5, 6]
  ])

  return (
    <div>
      {grid.map((item, index) =>
        <div key={index}>
          {item.map((item, index) =>
            <>
              {item}
            </>)}
        </div>)
      }
    </div>
  )
}

export default MemoryGame