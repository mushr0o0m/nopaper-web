import {Bus, EventBus, EventBusEventsMap, EventMap} from "@/eventBus/eventBus.types";


interface EventBusConfig {
  onError: (...params: any[]) => void
}

function eventBusGenerator<Key extends keyof EventBusEventsMap, E extends EventMap<Key> >(
  config?: EventBusConfig
): EventBus<Key, E> {
  const bus: Partial<Bus<E, keyof E>> = {}

  const on: EventBus<Key, E>['on'] = (key, handler) => {
    if (!Array.isArray(bus[key])) {
      bus[key] = []
    }

    bus[key].push(handler)

    return () => {
      off(key, handler)
    }
  }

  const off: EventBus<Key, E>['off'] = (key, handler) => {
    if (!Array.isArray(bus[key])) return

    const index = bus[key].indexOf(handler)
    if (index !== -1) {
      bus[key].splice(index, 1)
    }
  }

  const emit: EventBus<Key, E>['emit'] = (key, payload) => {
    bus[key]?.forEach((fn) => {
      try {
        fn(payload)
      } catch (e) {
        config?.onError(e)
      }
    })
  }

  return { on, off, emit }
}


const eventBus =  eventBusGenerator()
export default eventBus