import { ITextOption } from "../../exercise.types"

export interface IDraggableWord {
  text: ITextOption
  onDragEnd: (el: Element | null, wordText: ITextOption) => { status: 'success' | 'error' | 'isBlank' }
}