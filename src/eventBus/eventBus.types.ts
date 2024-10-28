import {ITask} from "@/contextes/ExerciseContext/exercise.types";

type EventKey = string | symbol | number
type EventHandler<T = any> = (payload: T) => void
export type EventMap<T extends EventKey> = Record<T, EventHandler>
export type Bus<E extends EventMap<any>, K extends keyof E> = Record<K, E[K][]>

export interface EventBusEventsMap {
    'tasks.created': ITask
    'tasks.updated': { id: ITask['id'], updates: Partial<ITask>}
}

export interface EventBus<Key extends keyof EventBusEventsMap, T extends EventMap<Key> > {
    on(key: Key, handler: T[Key]): () => void
    off(key: Key, handler: T[Key]): void
    emit(key: Key, payload: EventBusEventsMap[Key]): void
}

