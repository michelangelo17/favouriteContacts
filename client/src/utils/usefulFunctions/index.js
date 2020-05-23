export const setStyle = (elementId, propertyObject) => {
  const element = document.getElementById(elementId)
  for (let property in propertyObject)
    element.style[property] = propertyObject[property]
}

export const removeStyle = (elementId, styleAarray) => {
  const element = document.getElementById(elementId)
  styleAarray.forEach(style => {
    element.style.removeProperty(style)
  })
}
