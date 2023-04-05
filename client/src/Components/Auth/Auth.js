import { Avatar, Button, Container, Grid, Paper, Typography } from "@material-ui/core";
import useStyles from "./styles.js";
import LockOutlineIcon from "@material-ui/icons/LockOutlined";
import Input from "./Input.js";
import { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import Icon from "./Icon.js";

export default function Auth() {

    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignup] = useState(false);

    function handleSubmit() {

    }

    function handleChange() {

    }

    function switchMode() {
        setIsSignup(!isSignup);
    }

    function handleShowPassword() {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    }

    function GoogleFailure() {
        console.error("Google Sign In was unsuccessfull. Try Again Later");
    }

    function GoogleSuccess(res) {
        console.log(res);
    }

    // const login = useGoogleLogin({
    //     onSuccess: tokenResponse => console.log(tokenResponse),
    //     onError: errorResponse =>console.log(errorResponse)
    // });

    return (
        <Container component="Main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlineIcon />
                </Avatar>
                <Typography variant="h5">{isSignup ? "SignUp" : "SignIn"}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignup && (
                                <>

                                    <Input
                                        name="firstname"
                                        label="First Name"
                                        onChange={handleChange}
                                        autoFocus
                                        half
                                    />
                                    <Input
                                        name="lastname"
                                        label="Last Name"
                                        onChange={handleChange}
                                        autoFocus
                                        half
                                    />
                                </>
                            )
                        }
                        <Input
                            name="email"
                            label="Email Address"
                            onChange={handleChange}
                            type="email"
                        />
                        <Input
                            name="password"
                            label="Password"
                            onChange={handleChange}
                            type={showPassword ? "text" : "password"}
                            handleShowPassword={handleShowPassword}
                        />
                        {
                            isSignup && (
                                <Input
                                    name="confirmPassword"
                                    label="Repeat Password"
                                    onChange={handleChange}
                                />
                            )
                        }
                    </Grid>
                    {/* <Button
                        className={classes.googlebutton}
                        color="primary"
                        fullWidth
                        onClick={login()}
                        startIcon={<Icon />}
                        variant="contained"
                    >
                        Google Sign In
                    </Button> */}
                    <GoogleLogin
                        className={classes.googlebutton}
                        onSuccess={GoogleSuccess}
                        onError={GoogleFailure}
                        theme="filled_blue"
                        size="large"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        {isSignup ? "Sign Up" : "Sign In"}
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>
                                {isSignup ? "Already have an Account? Sign In" : "Don't have an Account? Sign Up"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
}