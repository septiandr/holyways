import { Redirect, Route } from 'react-router-dom'

// create component here
function PrivateRoute({ component: Component, ...rest }) {
    // assume that user is not login
    const isLogin  = JSON.parse(sessionStorage.getItem('isLogin'))

    return (
        <>
            <Route
                {...rest}
                render={(props) =>
                    isLogin ? <Component {...props} /> : <Redirect to="/" />
                }
            />
        </>
    )
}

export default PrivateRoute