import { changeModalFlag } from './mainActions'

const mainState = {
  events: [
    {
      title: "Munchkin",
      date: "23/02/2018 - 16:00",
      local: "Laboratório Bridge",
      price: "R$ 4,00",
      marker: {
        title: 'teste1',
        description: 'description1',
        coordinate: {
          latitude: 37.78825,
          longitude: -122.4324
        }
      }
    },
    {
      title: "Volei",
      date: "10/02/2018 - 16:00",
      local: "Paula Ramos",
      price: "R$ 8,00",
      marker: {
        title: 'teste2',
        description: 'description2',
        coordinate: {
          latitude: 37.38825,
          longitude: -122.2324
        }
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