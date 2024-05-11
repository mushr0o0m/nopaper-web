import Button from "./components/UI/Button/Button.tsx";
import SmallButton from "./components/UI/SmallButton/SmallButton.tsx";
import Pointer from "./components/UI/Pointer/Pointer.tsx";
import {ColorType} from "./components/Types/color-type.enum.ts";
import Star from "./components/UI/Star/Star.tsx";
import Word from "./components/UI/Word/Word.tsx";
import {LevelType} from "./components/UI/Dot/Dot.tsx";
import ProgressBar from "./components/UI/ProgressBar/ProgressBar.tsx";
import ScoreBar from "./components/UI/ScoreBar/ScoreBar.tsx";
import SoundReplay from "./components/UI/SoundReplay/SoundReplay.tsx";
import Sound from "./components/UI/Sound/Sound.tsx";
import ButtonDotted from "./components/UI/ButtonDotted/ButtonDotted.tsx";
import Rocket from "./components/UI/Rocket/Rocket.tsx";
import {RocketType} from "./components/Types/rocket-type.enum.ts";
import Curtains from "./components/UI/Curtains/Curtains.tsx";

function App() {

  return (
    <>
        <Button>НАЧАТЬ</Button>
        <SmallButton isColored={true}>НАЧАТЬ</SmallButton>
        <SmallButton isColored={false}>НАЧАТЬ</SmallButton>
        <br />
        <Pointer color={ColorType.Default}></Pointer>
        <Star color={ColorType.Level1} isOn={true}></Star>
        <Star color={ColorType.Level2} isOn={true}></Star>
        <Star color={ColorType.Level3} isOn={false}></Star>
        <Star color={ColorType.Level4} isOn={true}></Star>
        <Star color={ColorType.Level5} isOn={false}></Star>
        <Star color={ColorType.Level6} isOn={false}></Star>
        <Star color={ColorType.Level7} isOn={true}></Star>
        <Star color={ColorType.Level8} isOn={true}></Star>
        <Star color={ColorType.Level9} isOn={true}></Star>
        <Star color={ColorType.Level10} isOn={false}></Star>

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
        <ButtonDotted>кнопка</ButtonDotted>
        <Rocket type={RocketType.Rocket3} outlined={true} active={true} />
        <Curtains />
    </>
  )
}

export default App
