import React from 'react'
import styles from '../styles/Cards.module.css'
import { OPTIONS } from '../utils/utils'

type TypeButtons = {
  option: Record<string, string>,
  setOption: ({ opt }: { opt: string }) => void
}

const Buttons = ({ option, setOption }: TypeButtons) => {

  return (
    <div className={styles.buttons}>
      {Object.entries(OPTIONS).map(([key, value]): JSX.Element =>
        < button
          className={styles.button}
          onClick={() => setOption({ opt: OPTIONS[key] })}
          key={key}
          style={option.opt === OPTIONS[key] ? { backgroundColor: '#b0b0b0' } : {}}
        >
          {value}
        </button>
      )}
    </div>
  )
}

export default Buttons