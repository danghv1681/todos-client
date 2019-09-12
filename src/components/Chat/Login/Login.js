import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Grid, TextField, Button } from '@material-ui/core'

import { PasswordWrapper } from './style'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  formLogin: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 400,
  },
  textAlignLeft: {
    textAlign: 'left',
    width: 400,
  },
  forgotPassword: {
    color: 'blue',
    textAlign: 'center',
  }
}))

const Login = ({ loginAction }) => {
  const classes = useStyles()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    (
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <form className={classes.formLogin} onSubmit={loginAction}>
            <p className={classes.textAlignLeft}>Enter your <strong>email address</strong> and <strong>password</strong>.</p>
            <TextField
              id="standard-with-placeholder"
              label="User Name"
              placeholder="Enter your username"
              className={classes.textField}
              margin="normal"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              id="standard-password-input"
              label="Password"
              className={classes.textField}
              type="password"
              autoComplete="current-password"
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              onClick={(e) => {
                e.preventDefault()
                loginAction({ username, password })
              }}
              >
              Login
            </Button>
          </form>
          <p className={classes.forgotPassword}>
            <PasswordWrapper>Forgot password?</PasswordWrapper>
          </p>
        </Grid>
      </Grid>
    )
  )
}

export default Login