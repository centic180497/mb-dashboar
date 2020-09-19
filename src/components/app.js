import React from 'react'
import { Provider } from 'react-redux'
import { SnackbarProvider } from 'notistack'
import { ThemeProvider } from '@material-ui/core/styles'
import { CssBaseline, IconButton } from '@material-ui/core'
import { Close as CloseIcon } from '@material-ui/icons'

import store from 'stores/redux_store'
import theme from 'theme'
import { browserHistory } from 'utils/browser_history'
import Root from 'components/root'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SnackbarProvider
          maxSnack={6}
          autoHideDuration={3000}
          action={[
            <IconButton key={Math.random()} aria-label="Close" color="inherit">
              <CloseIcon />
            </IconButton>,
          ]}
        >
          <Root />
        </SnackbarProvider>
      </ThemeProvider>
    </Provider>
  )
}

export default App
