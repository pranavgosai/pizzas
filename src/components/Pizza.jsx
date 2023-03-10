import React,{useState} from 'react'
import {Card,Button,Row,Col,Modal} from 'react-bootstrap'

const Pizza = ({Pizza}) => {
    const [varient,setVarient] = useState('small')
    const [quantity,setQuantity] = useState(1);
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
       <Card style={{ width: '18rem' , marginTop:'30px'}}>
      <Card.Img variant="top" src={Pizza.image} style={{height:"220px",cursor:'pointer'}} onClick={handleShow} />
      <Card.Body>
        <Card.Title>{Pizza.name}</Card.Title>
        <hr/>
        <Card.Text>
          <Row>
            <Col md={6} >
             <h6>varients</h6>
             <select value={varient} onChange={(e) => setVarient(e.target.value)} >
                {Pizza.varients.map((varient)=>(
                     <option >{varient}</option>
                ))}
               
             </select>
            </Col>
            <Col md={6} >
                <h6>Quantity</h6>
                <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
              {[...Array(10).keys()].map((v,i)=> (
                <option value={i+1}  >{i+1}</option>
              ))}
             </select>
            </Col>
          </Row>
        </Card.Text>
        <Row>
            <Col md={6}>price :{Pizza.prices[0][varient]*quantity}/-RS
            </Col>
            <Col md={6}>
                <Button className='bg-warning text-dark'>add to cart</Button>
            </Col>
        </Row>
      </Card.Body>
    </Card>
    {/* {models} */}
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{Pizza.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>
            
      <Card.Img variant="top" src={Pizza.image} style={{height:"220px"}}  />
            </div>
            <div>
                <h5>Description:</h5>
                <h6>{Pizza.description}</h6>
            </div>
        </Modal.Body>
        
      </Modal>
    </>
  )
}

export default Pizza
