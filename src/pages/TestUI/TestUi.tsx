
import ButtonDotted from '../../shared/ButtonDotted/ButtonDotted'
import Curtains from '../../shared/Curtains/Curtains'
import { LevelType } from '../../shared/Dot'
import Pointer from '../../shared/Pointer/Pointer'
import ProgressBar from '../../shared/ProgressBar/ProgressBar'
import Rocket from '../../shared/Rocket/Rocket'
import ScoreBar from '../../shared/ScoreBar/ScoreBar'
import SmallButton from '../../shared/SmallButton/SmallButton'
import Sound from '../../shared/Sound/Sound'
import SoundReplay from '../../shared/SoundReplay/SoundReplay'
import Star from '../../shared/Star/Star'
import Word from '../../shared/Word/Word'
import { RocketType } from '../../models/colorTypeEnum/rocket-type.enum'
import { ColorType } from '../../models/colorTypeEnum/color-type.enum'
import Button from '../../shared/Button'

function TestUi() {
  return (
    <>
      <Button linkTo="..">НАЧАТЬ</Button>
      <SmallButton isColored={true}>НАЧАТЬ</SmallButton>
      <SmallButton isColored={false}>НАЧАТЬ</SmallButton>
      <br />
      <Pointer color={ColorType.Default} linkTo={'.'}></Pointer>
      <Star color={ColorType.Level1} isOn={true}></Star>
      <Star color={ColorType.Level2} isOn={true}></Star>
      <Star color={ColorType.Level3} isOn={false}></Star>

      <Word children={'ДВЕРЬ'}></Word>
      <ProgressBar
        levels={[
          { level: 1, status: LevelType.Correct },
          { level: 2, status: LevelType.Correct },
          { level: 3, status: LevelType.Correct },
          { level: 4, status: LevelType.Correct },
          { level: 5, status: LevelType.Wrong },
          { level: 6, status: LevelType.Correct },
          { level: 7, status: LevelType.Current },
          { level: 8, status: LevelType.Default },
          { level: 9, status: LevelType.Default },
          { level: 10, status: LevelType.Default },
        ]}
      />
      <ProgressBar
        levels={[
          { level: 1, status: LevelType.Correct },
          { level: 2, status: LevelType.Correct },
          { level: 3, status: LevelType.Correct },
          { level: 4, status: LevelType.Wrong },
          { level: 5, status: LevelType.Current },
          { level: 6, status: LevelType.Default },
          { level: 7, status: LevelType.Default },
          { level: 8, status: LevelType.Default },
          { level: 9, status: LevelType.Default },
          { level: 10, status: LevelType.Default },
        ]}
      />
      <ScoreBar recentLevel={4} levelAmount={10} />
      <SoundReplay color={ColorType.Level9} />
      <Sound color={ColorType.Level9} />
      <ButtonDotted>кнопка</ButtonDotted>
      <Rocket type={RocketType.Rocket3} outlined={false} active={false} linkTo={''} />
      <Rocket type={RocketType.Rocket3} outlined={true} active={true} linkTo={''} />
      <Rocket type={RocketType.Rocket3} outlined={true} active={false} linkTo={''} />
      <Curtains />
    </>
  )
}

export default TestUi
