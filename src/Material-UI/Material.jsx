import React, {useState, useEffect} from 'react'
import {Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Stack, Typography} from '@mui/material'
import image from '../Food App/image.jpg'
import  Skeleton from "react-loading-skeleton";

const Material = () => {
    const grids = [1, 2,3,4,5,6,7,8,9]

    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        setTimeout(()=>{

            setLoading(true)
        }, 3000)

    },[loading])
  return (
    <div>
        {loading ? 
        
      <Grid container padding={10} bgcolor={'coral'} margin='10px 0' maxWidth='lg' justifyContent={'center'}  spacing={5}>
      
        {grids.map((item,index)=>{
            return(
                <>
                <Grid item key={index}>
            <Card>
                <CardContent className='card' >
                    <img 
                    height={100}
                    width={100}
                    src={image}
                     alt=""
                   />
                    <Typography color='success' variant='h4'  >
                        Some Text
                    </Typography>
                    <Typography color='success' variant='h5'  >
                        Some Text
                    </Typography>
                    <Typography color='success' variant='h6'  >
                        Some Text
                    </Typography>
                    <CardActions>
                        <Button size='small'  color='success' variant='contained' >Learn </Button>
                        <Button size='small'  color='error' variant='contained'>Learn</Button>
                        <Button size='small' color='warning'  variant='contained'>Learn</Button>
                    </CardActions>
                </CardContent>
            </Card>
        </Grid>
                </>
            )
        })}
      </Grid>
      : 
      <>
      <Skeleton  height={100} width={400} baseColor='#3aaf9f' count={1}/>
      <Skeleton width={100}  count={1}/>
      <Skeleton width={90} count={1}/>
      <Skeleton width={80} count={1}/>
      </>
    }
    </div>
  )
}

export default Material
