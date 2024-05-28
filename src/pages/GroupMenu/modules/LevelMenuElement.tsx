import React from "react";
import Star from "../../../ui/Star/Star";
import ScoreBar from "../../../ui/ScoreBar/ScoreBar";
import style from './LevelMenuElement.module.css'
import { Link } from "react-router-dom";

interface LevelMenuElementProps {
  colorIndex: number;
  linkTo: string;
  isOn: boolean;
  index: number;
  recentLevel?: number;
  levelAmount?: number;
  isScoreBarIsOn?: boolean;
}

export const LevelMenuElement: React.FC<LevelMenuElementProps> = ({
  colorIndex,
  linkTo,
  isOn,
  index,
  recentLevel = 0,
  levelAmount = 10,
  isScoreBarIsOn = false }) => {

  

  return (
    <Link to={linkTo} className={style.levelElement}
      style={{
        pointerEvents: isOn ? 'auto' : 'none'
      }}
    >
      <h3 className={style.indexTitle}>{index}</h3>
      <Star color={colorIndex} isOn={isOn} />
      {isScoreBarIsOn && <ScoreBar recentLevel={recentLevel} levelAmount={levelAmount} />}
    </Link>
  )
}