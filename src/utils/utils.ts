export const resizeImage = (image: any, x: number, y: number) => {
  let canvas = document.createElement("canvas")
  let context = canvas.getContext("2d")
  context?.drawImage(image, 0, 0, x, y)

  return {
    canvas,
    dataUrl: canvas.toDataURL(image.type)
  }
}
