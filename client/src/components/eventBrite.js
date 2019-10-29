const eventBrite = (id, name) => {
  return window.EBWidgets.createWidget({
    widgetType: 'checkout',
    eventId: `${id}`,
    modal: true,
    modalTriggerElementId: `${name}`,
    onOrderComplete: console.log('Order Done')
  })
}

export default eventBrite
