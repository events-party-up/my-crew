import { changeModalFlag } from './mainActions'

const mainState = {
  events: [],
  isModalOpen: false
}

export default (state = mainState, action) => {
  switch (action.type) {
    case 'CHANGE_MODAL_FLAG':
      return {
        ...state,
        isModalOpen: action.isOpen
      }
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