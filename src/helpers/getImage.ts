const PORT = 8000

export const getImage = (label: string) => {
  return `http://${window.location.hostname}:${PORT}/image/${label}`
}
