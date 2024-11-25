import React from "react";
import Level1Svg from '@/assets/svg/level1Svg.svg?react'
import Level2Svg from '@/assets/svg/level2Svg.svg?react'
import styles from './levelCard.module.css'
import { Link } from "react-router-dom";

interface LevelCardProps {
  levelId: string
  defSetId: string
}

interface ICardData {
  levelCardTitle: React.JSX.Element
  levelCardSubtitle: string
  subtitleBackGroundColor: string
  LevelSvg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}

const cardData: Record<string, ICardData> = {
  first_level: {
    levelCardTitle: (
      <>СКЛАДЫВАЕМ<br />СЛОГИ В СЛОВА</>
    ),
    levelCardSubtitle: 'УРОВЕНЬ 1',
    subtitleBackGroundColor: '#C77E98',
    LevelSvg: Level1Svg
  },
  second_level: {
    levelCardTitle: (
      <>СКЛАДЫВАЕМ слова в предложения</>
    ),
    levelCardSubtitle: 'УРОВЕНЬ 2',
    subtitleBackGroundColor: '#87A1BB',
    LevelSvg: Level2Svg
  },
}

const LevelCard: React.FC<LevelCardProps> = ({ levelId, defSetId }) => {

  const LevelSvg = cardData[levelId].LevelSvg

  return (
    <Link to={`/level-menu/${levelId}/set-menu/${defSetId}/group-menu`} className={styles.levelCard}>
      <div className={styles.levelCard__subTitle} style={{ backgroundColor: cardData[levelId].subtitleBackGroundColor }}>
        <span className={styles.subTitle__text}>{cardData[levelId].levelCardSubtitle}</span>
      </div>
      <LevelSvg className={styles.levelCard__svg}/>
      <h3 className={styles.levelCard__title}>{cardData[levelId].levelCardTitle}</h3>
    </Link>
  )
}

export default LevelCard