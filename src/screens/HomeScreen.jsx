import React,{useEffect} from 'react'

import {useDispatch,useSelector} from 'react-redux'
import {Container,Row,Col} from 'react-bootstrap'
import Pizza from '../components/Pizza';
import {getAllPizzas} from '../actions/PizzaAction';

const HomeScreen = () => {
    const dispatch = useDispatch();
    const pizzastate = useSelector(state => state.getAllPizzaReducer)
    const {loading,pizzas,error} = pizzastate;

    useEffect(()=>{dispatch(getAllPizzas())},[dispatch])


  return (
    <>
      <Container>
        {
        loading ?(<h1>loading...</h1>)
        :error?(<h1>error while ferching pizzas</h1>)
        : (<Row>
          { pizzas.map((pizza) =>(
              <Col ms={4} >
                  <Pizza pizza={pizza}/>
              </Col>
          )) }
      </Row>)
        
      }
        
      </Container>

    </>
  )
}

export default HomeScreen
