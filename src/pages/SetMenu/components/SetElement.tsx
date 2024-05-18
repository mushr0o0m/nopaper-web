import React from "react";
import { Link } from "react-router-dom";
import {ClockSvg, GlassesSvg, HandsSvg, HeartSvg } from './svg/index';

interface SetElementProps {
  rocketIndex: number;
  isOutlineActive?: boolean;
}

export const SetElement: React.FC<SetElementProps> = (rocketIndex, isOutlineActive) => {

  const indexedRocketFirstLevel = new Map([
    [1, ]
  ])
  return (
    <Link to={'/'}>

    </Link>
  )
}