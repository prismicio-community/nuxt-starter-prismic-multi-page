export default function (doc) {
  if (doc.isBroken) {
    return '/not-found'
  }
  if (doc.type === 'page') {
    return `/${doc.uid}`
  }
  else {
    return null
  }
}