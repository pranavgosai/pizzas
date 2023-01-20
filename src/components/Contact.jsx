import React from 'react'
import {Container,Row,Col,Table,Image} from 'react-bootstrap'
import {FiPhoneCall} from 'react-icons/fi';
import {GoDeviceMobile} from 'react-icons/go';
import {MdEmail} from 'react-icons/md';
const Contact = () => {
  return (
    <>
      <Container style={{marginTop:'50px'}}>
        <Row>
            <Col md={6}>
                <h1>Techinfo YT Pizza Shop</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nesciunt ab incidunt nisi doloremque sed, ex cupiditate amet minus commodi obcaecati harum. Quidem, adipisci hic blanditiis temporibus corporis explicabo ullam fugiat praesentium consequuntur sed error reiciendis officiis odit voluptates quas. Voluptate et possimus itaque fugit nam, quam ipsam officia placeat? Tempora repellendus rem est error placeat dignissimos id nobis recusandae cum! Unde reprehenderit fugiat dolor atque libero voluptas voluptate numquam voluptatibus officiis minus nulla maxime consectetur soluta consequatur, iusto ipsam minima placeat eius incidunt asperiores ex error nobis quo neque? Iste quas harum quo architecto, repellendus rem et quasi blanditiis quam animi explicabo quae, doloribus corrupti ratione optio exercitationem officia mollitia corporis distinctio dolor reiciendis veritatis ut? Necessitatibus blanditiis culpa sapiente assumenda libero veniam. Qui optio quia voluptas, soluta at dolores, sunt, sint doloribus blanditiis ut nostrum nesciunt cumque impedit modi enim dicta natus eligendi possimus! Vitae ipsa voluptatibus impedit sunt perferendis ducimus saepe? Est a eveniet, laborum veniam repellendus suscipit nisi adipisci accusantium ea rem tenetur dicta amet officiis, error aliquid non sapiente voluptate ullam quam deleniti facilis? Velit nesciunt aliquam harum reprehenderit quis accusamus ipsam illum architecto, sit corrupti maxime, dignissimos blanditiis explicabo expedita asperiores dolorum est quia.</p>
                <Table striped bordered hover className='text-center' >
      <thead>
        <tr>
          <th className='bg-warning text-center' colSpan={3} >--Contact Details--</th>

         
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><FiPhoneCall/></td>
          <td>Phone</td>
          <td>0123-456789</td>
    
        </tr>
        <tr>
          <td><GoDeviceMobile/></td>
          <td>call</td>
          <td>133456789</td>
    
        </tr>
        <tr>
          <td><MdEmail/></td>
          <td>Email</td>
          <td>help@urdomin.com</td>
    
        </tr>
     
     
      </tbody>
    </Table>
            </Col>
            <Col md={6} >
                <Image src='images/farmhouse.jpg' style={{width:'100%',height:'70%'}} />               
            </Col>
        </Row>

      </Container>
    </>
  )
}

export default Contact
