import { changeModalFlag } from './mainActions'

const mainState = {
  markers: [
    {
      title: 'teste1',
      description: 'description1',
      coordinate: {
        latitude: 37.78825,
        longitude: -122.4324
      }
    },
    {
      title: 'teste2',
      description: 'description2',
      coordinate: {
        latitude: 37.38825,
        longitude: -122.2324
      }
    }
  ],
  isModalOpen: false
}

export default (state = mainState, action) => {
  switch (action.type) {
    case 'CHANGE_MODAL_FLAG':
      return {
        ...state,
        isModalOpen: action.isOpen
      }
    default:
      return state
  }
};