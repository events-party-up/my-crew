import { changeModalFlag } from './mainActions'

const mainState = {
  events: []
}

export default (state = mainState, action) => {
  switch (action.type) {
    case 'SAVE_EVENT':
      return {
        ...state,
        events: state.events.concat(action.event)
      }
    case 'SET_EVENTS':
      return {
        ...state,
        events: action.events
      }
    default:
      return state
  }
};