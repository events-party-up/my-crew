export const changeModalFlag = (isOpen) => ({
  type: 'CHANGE_MODAL_FLAG',
  isOpen
});

export const saveEvent = (event = {}) => ({
  type: 'SAVE_EVENT',
  event
})

export const setEvents = (events = {}) => ({
  type: 'SET_EVENTS',
  events
})