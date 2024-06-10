import React from "react";
import { TaskTypesProps } from "..";
import styles from './TaskTypeSixth.module.css'
import { ITask, ISimpleTask } from "../../../../utils/models";
import { DragDropContext, Draggable, DropResult } from "react-beautiful-dnd";
import { StrictModeDroppable } from "../../../../utils/StrictModeDroppable";
import rightAnswerSound from '../../../../../public/mp3/rightAnswer/1.mp3'
import wrongAnswerSound from '../../../../../public/mp3/wrongAnswer/1.mp3'

export const TaskTypeSixth: React.FC<TaskTypesProps> = ({task}) => {

  function isSimpleTask(task: ITask): task is ISimpleTask {
    return task.type === 0 || task.type === 1 || task.type === 2;
  }

  if (!isSimpleTask(task))
    return null

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [words, setWords] = React.useState(task.answerOptions.map(word => ({ id: word.id!, content: word.text })));
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [word, setWord] = React.useState<{ id: string, content: string, isRight: boolean }>();


  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const newWords = Array.from(words);
    const [movedWord] = newWords.splice(result.source.index, 1);

    const rightWord = task.answerOptions.find(ans => ans.rightAnswer)!

    if (result.destination.droppableId === 'image') {
      newWords.splice(result.destination.index, 0);
      setWords(newWords)
      setWord({ ...movedWord, isRight: movedWord.content === rightWord.text })
      // const correctAudioIndex = Math.floor(Math.random() * 14);
      // const incorrectAudioIndex = Math.floor(Math.random() * 9);
      new Audio(
        movedWord.content === rightWord.text ?
        rightAnswerSound
        : wrongAnswerSound
      ).play();
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className={styles.taskContent}>
        <StrictModeDroppable droppableId="image" direction="vertical">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className={styles.mainImg}
              style={{
                backgroundImage: `url(${encodeURI(task.images[0].file)})`,
              }}
            >
              {provided.placeholder}
              {word &&
                <Draggable key={word.id} draggableId={word.id} index={0} isDragDisabled={word !== undefined}>
                  {(provided) => (
                    <div
                      className={styles.taskWord}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={{
                        backgroundColor: word.isRight ? '#6AB27A' : '#E95B51',
                        color: '#EDEDEE'
                      }}
                    >
                      {word.content}
                    </div>
                  )}
                </Draggable>}
            </div>
          )}
        </StrictModeDroppable>
        <div
          style={{
            display: 'flex'
          }}
        >

          <StrictModeDroppable droppableId={"words"} direction="vertical"   >
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className={styles.taskList}
              >
                {words.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index} isDragDisabled={word !== undefined}>
                    {(provided) => (
                      <div
                        className={styles.taskWord}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {item.content}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </StrictModeDroppable>

        </div>
      </div>
    </DragDropContext>

  );
}