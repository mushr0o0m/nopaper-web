import Button from "../../ui/Button/Button.tsx";
import SmallButton from "../../ui/SmallButton/SmallButton.tsx";
import Pointer from "../../ui/Pointer/Pointer.tsx";
import {ColorType} from "../../utils/models/colorTypeEnum/color-type.enum.ts";
import Star from "../../ui/Star/Star.tsx";
import Word from "../../ui/Word/Word.tsx";
import {LevelType} from "../../ui/Dot/Dot.tsx";
import ProgressBar from "../../ui/ProgressBar/ProgressBar.tsx";
import ScoreBar from "../../ui/ScoreBar/ScoreBar.tsx";
import SoundReplay from "../../ui/SoundReplay/SoundReplay.tsx";
import Sound from "../../ui/Sound/Sound.tsx";

function TestUi() {

  return (
    <>
        <Button>НАЧАТЬ</Button>
        <SmallButton isColored={true}>НАЧАТЬ</SmallButton>
        <SmallButton isColored={false}>НАЧАТЬ</SmallButton>
        <Pointer color={ColorType.Default}></Pointer>
        <Star color={ColorType.Level10} isOn={false}></Star>
        <Star color={ColorType.Level2} isOn={true}></Star>
        <Word children={'ДВЕРЬ'}></Word>
        <ProgressBar levels={[
            {level: 1, status: LevelType.Correct},
            {level: 2, status: LevelType.Correct},
            {level: 3, status: LevelType.Correct},
            {level: 4, status: LevelType.Correct},
            {level: 5, status: LevelType.Wrong},
            {level: 6, status: LevelType.Correct},
            {level: 7, status: LevelType.Current},
            {level: 8, status: LevelType.Default},
            {level: 9, status: LevelType.Default},
            {level: 10, status: LevelType.Default},
        ]} />
        <ProgressBar levels={[
            {level: 1, status: LevelType.Correct},
            {level: 2, status: LevelType.Correct},
            {level: 3, status: LevelType.Correct},
            {level: 4, status: LevelType.Wrong},
            {level: 5, status: LevelType.Current},
            {level: 6, status: LevelType.Default},
            {level: 7, status: LevelType.Default},
            {level: 8, status: LevelType.Default},
            {level: 9, status: LevelType.Default},
            {level: 10, status: LevelType.Default},
        ]} />
        <ScoreBar recentLevel={4} levelAmount={10} />
        <SoundReplay color={ColorType.Level9} />
        <Sound color={ColorType.Level9} />
    </>
  )
}

export default TestUi
