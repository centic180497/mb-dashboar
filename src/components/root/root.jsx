import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import LoggedInRoute from 'components/logged_in_route'
import Loading from 'components/loading_1'
import Dashboard from 'components/dashboard'
import LoginPage from 'components/login_page'

class Root extends React.Component {
  state = {
    userLoaded: false,
  }

  componentDidMount() {
    this.props.loadMe()
    this.setState({ userLoaded: true })
  }

  render() {
    if (!this.state.userLoaded) {
      return <div />
    }
    if (this.props.isLoadMe) {
      return <Loading />
    }

    return (
      <BrowserRouter>
        <Switch>
          <LoggedInRoute path="/dashboard" component={Dashboard} />
          
          <Route path="/" exact component={LoginPage} />
          {/* <Route path="/dashboard" component={Dashboard} /> */}
        </Switch>
      </BrowserRouter>
    )
  }
}

Root.display = 'Root'

export default Root
