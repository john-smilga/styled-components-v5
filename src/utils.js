export const colors = {
  primary: '#645cff',
}

export const setupBorder = ({ width, type = 'solid', color }) => {
  return `${width}px ${type} ${color}`
}
