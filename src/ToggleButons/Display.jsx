import React, {useState} from 'react'
import {Button, ButtonGroup, Card, CardActions, CardContent, CardMedia, Container, Grid, Stack, Typography} from '@mui/material'
import './container.css'
import { useContext} from 'react'
import Store from './Context'
import { Link } from 'react-router-dom'
function Display() {
  const maps = [
    {
      id:0,
      text:'Loeem qw'
    },
    {
      id:1,
      text:'HJjqakbwkjq qw'
    },
    {
      id:2,
      text:'ansansnalks qw'
    },
  ]
  const [selected, setselected] = useState(null)
  const [value, setValue] = useState('')
  const {data, setData} = useContext(Store)
  const handle = (e)=>{
    if(selected === e ){
      setselected(null)
    }
    else{
      setselected(e)
    setData(e)

    }

  }
  const clicks =(e)=>{
    setData(e)
  }
  return (
      <div>
      <Container  maxWidth='sm'>
       <Stack>
        <div className='buttons'  orientation='vertical'>
         {maps.map((item,index)=>{
          return(
            <ButtonGroup className={`btns ${selected === index ? 'btn' : null}`} key={index}>
        <button onClick={()=> handle(index)} className='btns' variant='outlined'>Click</button>
               <p  onClick={clicks}>butonsasa</p>
               <input
               value={data}
               onChange={(e)=> 
                {
                 setData(e.target.value)
                }
                }
                  placeholder='no'
                type="text" />
                <Link to='/check'>

                <button>Navigate</button>
                </Link>
                <Dis/>
            </ButtonGroup>
          )
         })}
       
        </div>
       </Stack>
      </Container>
    </div>
  )
}

function Dis ({content}){
  <>

  <p>{content}</p>
  <p>nahsihaihsihaihsioh</p>
  </>

}

export default Display

