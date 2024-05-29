import Button from "../../ui/Button/Button"
import ButtonDotted from "../../ui/ButtonDotted/ButtonDotted"
import Curtains from "../../ui/Curtains/Curtains"
import {LevelType} from "../../ui/Dot/Dot"
import Pointer from "../../ui/Pointer/Pointer"
import ProgressBar from "../../ui/ProgressBar/ProgressBar"
import Rocket from "../../ui/Rocket/Rocket"
import ScoreBar from "../../ui/ScoreBar/ScoreBar"
import SmallButton from "../../ui/SmallButton/SmallButton"
import Sound from "../../ui/Sound/Sound"
import SoundReplay from "../../ui/SoundReplay/SoundReplay"
import Star from "../../ui/Star/Star"
import Word from "../../ui/Word/Word"
import {ColorType} from "../../utils/models"
import {RocketType} from "../../utils/models/colorTypeEnum/rocket-type.enum"
import Book from "../../ui/Book/Book.tsx";
import {BookType} from "../../utils/models/colorTypeEnum/book-type.enum.ts";
import BookTab from "../../ui/BookTab/BookTab.tsx";


function TestUi() {

  return (
    <>
        <Button linkTo="..">НАЧАТЬ</Button>
        <SmallButton isColored={true}>НАЧАТЬ</SmallButton>
        <SmallButton isColored={false}>НАЧАТЬ</SmallButton>
        <br />
        <Pointer color={ColorType.Default} linkTo={"."}></Pointer>
        <Star color={ColorType.Level1} isOn={true}></Star>
        <Star color={ColorType.Level2} isOn={true}></Star>
        <Star color={ColorType.Level3} isOn={false}></Star>

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
        <Rocket type={RocketType.Rocket3} outlined={false} active={false} linkTo={""} />
        <Rocket type={RocketType.Rocket3} outlined={true} active={true} linkTo={""} />
        <Rocket type={RocketType.Rocket3} outlined={true} active={false} linkTo={""} />
        <Book type={BookType.BookTravel} active={true} linkTo={''} />
        <BookTab type={BookType.BookTravel} active={true} chosen={false} linkTo={''} />
        <Curtains />
    </>
  )
}

export default TestUi
