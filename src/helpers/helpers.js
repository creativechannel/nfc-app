export const cmsImageEncoder = (path) => {
  const imagePath = path.split("/")
  const promotionFileName = encodeURI(imagePath.pop())
  imagePath.push(promotionFileName)
  return imagePath.join("/")
}

export const formatPhoneNumber = (phoneNumberString) => {
  const cleaned = ("" + phoneNumberString).replace(/\D/g, "")
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    return "(" + match[1] + ") " + match[2] + "-" + match[3]
  }
  return null
}

export const ConditionalWrapper = ({ condition, wrapper, children }) => (condition ? wrapper(children) : children);

