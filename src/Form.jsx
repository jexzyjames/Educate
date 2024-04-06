import React, { useState } from "react";
import Link from "@mui/material/Link";
import {
  Button,
  CssBaseline,
  Box,
  ButtonGroup,
  Card,
  FormControlLabel,
  Checkbox,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import img from './Food App/image.jpg'
const Form = () => {
  //  const  SignIn =()=> {
  //     const handleSubmit = (event) => {
  //       event.preventDefault();
  //       const data = new FormData(event.currentTarget);
  //       console.log({
  //         email: data.get('email'),
  //         password: data.get('password'),
  //       });
  //     };
  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="lg">
        <CssBaseline />
        <Typography variant="h3">Testimonials</Typography>
        <Typography variant="p">
          See what our customers love about our products. Discover how we excel
          in efficiency, durability, and satisfaction. Join us for quality,
          innovation, and reliable support.
        </Typography>

        <Grid container margin='10px 0' maxWidth='lg' justifyContent={'center'}  spacing={5}>
          <Grid item xs={12} sm={6}  md={4}>
            <Card>
              <CardContent>
                <Typography variant="p">
                  I absolutely love how versatile this product is! Whether I'm
                  tackling work projects or indulging in my favorite hobbies, it
                  seamlessly adapts to my changing needs. Its intuitive design
                  has truly enhanced my daily routine, making tasks more
                  efficient and enjoyable.
                </Typography>
                <CardMedia>
                    <Stack  direction='row' spacing={6}>
                    <img style={{width:'10%',borderRadius:'50%'}} src={img} alt="" />
                    <Typography>images</Typography>

                    </Stack>
                </CardMedia>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}  md={4}>
            <Card>
              <CardContent>
                <Typography variant="p">
                  I absolutely love how versatile this product is! Whether I'm
                  tackling work projects or indulging in my favorite hobbies, it
                  seamlessly adapts to my changing needs. Its intuitive design
                  has truly enhanced my daily routine, making tasks more
                  efficient and enjoyable.
                </Typography>
                <CardMedia>
                    <Stack  direction='row' spacing={6}>
                    <img style={{width:'10%',borderRadius:'50%'}} src={img} alt="" />
                    <Typography>images</Typography>

                    </Stack>
                </CardMedia>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}  md={4}>
            <Card>
              <CardContent>
                <Typography variant="p">
                  I absolutely love how versatile this product is! Whether I'm
                  tackling work projects or indulging in my favorite hobbies, it
                  seamlessly adapts to my changing needs. Its intuitive design
                  has truly enhanced my daily routine, making tasks more
                  efficient and enjoyable.
                </Typography>
                <CardMedia>
                    <Stack  direction='row' spacing={6}>
                    <img style={{width:'10%',borderRadius:'50%'}} src={img} alt="" />
                    <Typography>images</Typography>

                    </Stack>
                </CardMedia>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}  md={4}>
            <Card>
              <CardContent>
                <Typography variant="p">
                  I absolutely love how versatile this product is! Whether I'm
                  tackling work projects or indulging in my favorite hobbies, it
                  seamlessly adapts to my changing needs. Its intuitive design
                  has truly enhanced my daily routine, making tasks more
                  efficient and enjoyable.
                </Typography>
                <CardMedia>
                    <Stack  direction='row' spacing={6}>
                    <img style={{width:'10%',borderRadius:'50%'}} src={img} alt="" />
                    <Typography>images</Typography>

                    </Stack>
                </CardMedia>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}  md={4}>
            <Card>
              <CardContent>
                <Typography variant="p">
                  I absolutely love how versatile this product is! Whether I'm
                  tackling work projects or indulging in my favorite hobbies, it
                  seamlessly adapts to my changing needs. Its intuitive design
                  has truly enhanced my daily routine, making tasks more
                  efficient and enjoyable.
                </Typography>
                <CardMedia>
                    <Stack  direction='row' spacing={6}>
                    <img style={{width:'10%',borderRadius:'50%'}} src={img} alt="" />
                    <Typography>images</Typography>

                    </Stack>
                </CardMedia>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}  md={4}>
            <Card>
              <CardContent>
                <Typography variant="p">
                  I absolutely love how versatile this product is! Whether I'm
                  tackling work projects or indulging in my favorite hobbies, it
                  seamlessly adapts to my changing needs. Its intuitive design
                  has truly enhanced my daily routine, making tasks more
                  efficient and enjoyable.
                </Typography>
                <CardMedia>
                    <Stack  direction='row' spacing={6}>
                    <img style={{width:'10%',borderRadius:'50%'}} src={img} alt="" />
                    <Typography>images</Typography>

                    </Stack>
                </CardMedia>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}  md={4}>
            <Card>
              <CardContent>
                <Typography variant="p">
                  I absolutely love how versatile this product is! Whether I'm
                  tackling work projects or indulging in my favorite hobbies, it
                  seamlessly adapts to my changing needs. Its intuitive design
                  has truly enhanced my daily routine, making tasks more
                  efficient and enjoyable.
                </Typography>
                <CardMedia>
                    <Stack  direction='row' spacing={6}>
                    <img style={{width:'10%',borderRadius:'50%'}} src={img} alt="" />
                    <Typography>images</Typography>

                    </Stack>
                </CardMedia>
              </CardContent>
            </Card>
          </Grid>
       
        </Grid>
        <Box
          component="Form"
          onSubmit={e => {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            console.log({
              name: data.get("email"),
              email: data.get("password"),
            });
          }}
          sx={{
            // backgroundColor: "#eaeaea",
            padding: "1rem",
            marginTop: 8,
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
          flex
        >
          <Avatar sx={{ margin: "auto", bgcolor: "secondary.main" }}></Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Stack>
            <Grid container spacing={2} row>
              <Grid item xs={12} sm={6}>
                <TextField label="First Name" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Last Name" />
              </Grid>
            </Grid>

            <TextField
              margin="normal"
              fullWidth
              sx={{
                margin: "10px 0",
                width: "100% !important",
              }}
              label="Your Name"
            />
            <TextField
              fullWidth
              sx={{
                margin: "10px 0",
              }}
              id="email"
              color="secondary"
              name="email"
              label="Email Address"
            />
            <TextField
              sx={{
                margin: "10px 0",
              }}
              id="password"
              name="password"
              label="password"
              type="password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
          </Stack>
          <Button
            type="submit"
            sx={{
              display: "flex",
              width: "100%",
              margin: "auto",
              alignItems: "center",
            }}
            color="secondary"
            variant="contained"
          >
            Login
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Form;
