import React from 'react'
import { useForm } from 'react-hook-form'
import { makeStyles } from '@material-ui/core/styles'
import _ from 'lodash'
import {
  Grid,
  TextField,
  Button,
  IconButton,
  Paper,
  Typography,
  CircularProgress,
} from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'
import { Redirect } from 'react-router-dom'

import backgroundImage from 'assets/images/background.png'
import bannerImg from 'assets/images/banner.png'
import logoCentic from 'assets/images/centic_logo.png'
import logoVanLang from 'assets/images/logo_vanlang.jpg'

function LoginPage(props) {
  const classes = useStyles()
  const [values, setValues] = React.useState({ showPassword: false })
  const { handleSubmit, register, errors } = useForm()

  const onSubmit = (values) => {
    const { username, password } = values
    props.login(username, password)
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  if (!_.isEmpty(props.accountUser)) {
    return <Redirect to="/dashboard/sitemap" />
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={0} className={classes.background}>
        <Grid item md={9} />
        <Grid item md={3}>
          <Paper className={classes.paper}>
            <div className={classes.banner}>
              <img
                src={bannerImg}
                className={classes.bannerImg}
                alt="CA Quảng Name"
              />
            </div>
            <div className={classes.content}>
              <Typography align="center" className={classes.text}>
                HỆ THỐNG CAMERA GIÁM SÁT
              </Typography>
              <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
                <div className={classes.formGroup}>
                  <TextField
                    fullWidth
                    name="username"
                    label="Tên đăng nhập"
                    variant="outlined"
                    inputRef={register({
                      required: 'Tên đăng nhập không được để trống',
                    })}
                    type="text"
                    error={Boolean(errors.username)}
                    helperText={errors.username && errors.username.message}
                  />
                </div>
                <div className={classes.formGroup}>
                  <TextField
                    fullWidth
                    name="password"
                    label="Mật khẩu"
                    variant="outlined"
                    inputRef={register({
                      required: 'Mật khẩu không được để trống',
                    })}
                    type={values.showPassword ? 'text' : 'password'}
                    InputProps={{
                      endAdornment: (
                        <IconButton
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {values.showPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      ),
                    }}
                    error={Boolean(errors.password)}
                    helperText={errors.password && errors.password.message}
                  />
                </div>
                <div className={classes.submit}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={props.isLogining}
                    className={classes.button}
                  >
                    {props.isLogining ? (
                      <CircularProgress size={24} />
                    ) : (
                      'Đăng nhập'
                    )}
                  </Button>
                </div>
              </form>
            </div>
            <div className={classes.logo}>
              Xây dựng bởi
              <img
                src={logoCentic}
                className={classes.logoImg}
                alt="Centic logo"
              />{' '}
              &
              <img
                src={logoVanLang}
                className={classes.logoImg}
                alt="Vanlang logo"
              />
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default LoginPage

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundColor: '#172b4d',
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: '100% 100%',
  },
  background: {
    height: '100vh',
    flexGrow: 1,
  },
  paper: {
    borderRadius: 0,
    height: '100%',
    paddingTop: 0,
    display: 'flex',
    flexDirection: 'column',
  },
  banner: {
    paddingBottom: 100,
  },
  bannerImg: {
    width: '100%',
  },
  form: {
    flex: '1 1 auto',
    padding: '1.25rem',
  },
  formGroup: {
    marginBottom: '1rem',
  },
  content: {
    flexGrow: 1,
    paddingLeft: '1rem',
    paddingRight: '1rem',
  },
  text: {
    fontSize: 24,
    fontWeight: 400,
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImg: {
    height: 30,
    padding: 4,
  },
  submit: {
    textAlign: 'center',
  },
  button: {
    width: 115,
  },
}))
