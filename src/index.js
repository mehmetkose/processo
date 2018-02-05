export default function processo () {
  if (window.cordova) {
    return 'cordova'
  } else if (window.process && window.process.type) {
    return 'electron'
  } else {
    return 'web'
  }
}
