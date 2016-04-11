import '../../scss/Main/_index.scss'
import './routes'



if (module.hot) {
  module.hot.accept()
  /**
   * Error with React-router
   * https://github.com/reactjs/react-router/issues/2704
   * https://github.com/capaj/systemjs-hot-reloader/issues/51
   */
  module.hot.decline('./routes')
}