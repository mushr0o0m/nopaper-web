import React from "react";
import Level1Svg from '@/assets/svg/level1Svg.svg?react'
import Level2Svg from '@/assets/svg/level2Svg.svg?react'
import styles from './levelCard.module.css'
import { Link } from "react-router-dom";

type Level = 'level_1' | 'level_2'

interface LevelCardProps {
  level: Level
  levelId:string
  defSetId: string
}

const LevelCard: React.FC<LevelCardProps> = ({ level, levelId, defSetId }) => {
  const cardData = {
    level_1: {
      levelCardTitle: (
        <>СКЛАДЫВАЕМ<br />СЛОГИ В СЛОВА</>
      ),
      levelCardSubtitle: 'УРОВЕНЬ 1',
      subtitleBackGroundColor: '#C77E98',
      levelSvg: (props?: React.SVGProps<SVGSVGElement>) => <Level1Svg {...props} />
    },
    level_2: {
      levelCardTitle:(
        <>СКЛАДЫВАЕМ слова в предложения</>
      ),
      levelCardSubtitle: 'УРОВЕНЬ 2',
      subtitleBackGroundColor: '#87A1BB',
      levelSvg: (props?: React.SVGProps<SVGSVGElement>) => <Level2Svg {...props} />
    },
  }

  

  return (
    <Link to={`/level-menu/${levelId}/set-menu/${defSetId}/group-menu`} className={styles.levelCard}>
      <div className={styles.levelCard__subTitle} style={{ backgroundColor: cardData[level].subtitleBackGroundColor }}>
        <span className={styles.subTitle__text}>{cardData[level].levelCardSubtitle}</span>
      </div>
      {cardData[level].levelSvg({ className: styles.levelCard__svg })}
      <h3 className={styles.levelCard__title}>{cardData[level].levelCardTitle}</h3>
    </Link>
  )
}

export default LevelCard