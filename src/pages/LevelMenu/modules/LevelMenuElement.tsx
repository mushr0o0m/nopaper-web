import React from "react";
import Star from "../../../ui/Star/Star";
import { ColorType } from "../../../utils/models/colorTypeEnum/color-type.enum";
import ScoreBar from "../../../ui/ScoreBar/ScoreBar";
import style from './LevelMenuElement.module.css'

interface LevelMenuElementProps {
  color: ColorType;
  isOn: boolean;
  index: number;
  recentLevel: number;
  levelAmount?: number;
  isScoreBarIsOn?: boolean;
}

export const LevelMenuElement: React.FC<LevelMenuElementProps> = ({
  color,
  isOn,
  index,
  recentLevel,
  levelAmount = 10,
  isScoreBarIsOn = false }) => {


  return (
    <div className={style.levelElement}>
      <h3 className={style.indexTitle}>{index}</h3>
      <Star color={color} isOn={isOn} />
      {isScoreBarIsOn && <ScoreBar recentLevel={recentLevel} levelAmount={levelAmount} />}
    </div>
  )
}