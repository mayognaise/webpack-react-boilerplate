import '../../scss/Admin/_index.scss'

console.log('Admin')

try {
  if (module.hot) {
    module.hot.accept()
    module.hot.dispose(() => {})
  }
} catch (err) {}