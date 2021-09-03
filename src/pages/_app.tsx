import "../app/styles/globals.css"

import PropTypes from "prop-types"
import { Provider } from "react-redux"

import { store } from "../app/redux/store"

function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
}

MyApp.propTypes = {
    Component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
    pageProps: PropTypes.shape({}),
}

export default MyApp
