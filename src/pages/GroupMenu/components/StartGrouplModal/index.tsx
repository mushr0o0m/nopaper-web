import Modal, { ModalProps } from "@/shared/Modal"
import React from "react"
import WelcomeSvgElem from "@/assets/svg/welcomeTaskGroup.svg?react"
import Button from "@/shared/Button"
import styles from './styles/index.module.css'

interface StartGrouplModalProps extends Omit<ModalProps, 'children'> {
  linkTo: string
  children?: undefined
}

const StartGrouplModal: React.FC<StartGrouplModalProps> = ({...props}) => {

  return (
    <Modal outsideModalHandler={props.outsideModalHandler} isOpen={props.isOpen} >
      <div className={styles.modalText}>
        <div className={styles.modalText__title}>ВЫПОЛНИ ПРАВИЛЬНО</div>
        <WelcomeSvgElem />
        <div className={styles.modalText__descr}>
          ЗАДАНИЙ<br />
          НА ЭТОМ УРОВНЕ<br />
          И МЫ ОТКРОЕМ ТЕБЕ<br />
          СЛЕДУЮЩУЮ ЗВЕЗДОЧКУ!
        </div>
      </div>
      <Button linkTo={props.linkTo}>начИНАЕМ!</Button>
    </Modal>
  )

}

export default StartGrouplModal