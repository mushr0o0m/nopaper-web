import React, { useEffect, useState } from 'react'
import style from './loader.module.css'

const Loader: React.FC = () => {
  const [value, setValue] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prevValue) => (prevValue + 1) % 3)
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={style.loader}>
      <p className={style.loader__word}>
        <span className={style.word_start + ' ' + (value === 0 ? style.word_first : style.word_init)}>за</span>
        <span>-</span>
        <span className={style.word_start + ' ' + (value === 1 ? style.word_second : style.word_init)}>груз</span>
        <span>-</span>
        <span className={style.word_start + ' ' + (value === 2 ? style.word_third : style.word_init)}>ка</span>
        <span>...</span>
      </p>
    </div>
  )
}

export default Loader
