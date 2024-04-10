import React from "react";
import Button from "../../ui/Button/Button";
import { SadManSvg } from "./SadManSvg";

export const NotFound: React.FC = () => {

  return(
    <main>
      <SadManSvg/>
      <h1>Ошибка 404</h1>
      <p>К сожалению, страница не найдена</p>
      <Button>Вернуться домой</Button>
    </main>
  )
}