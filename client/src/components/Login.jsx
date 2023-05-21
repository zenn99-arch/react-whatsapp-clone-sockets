import React, { useRef } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { v4 as uuidv4, v4 } from 'uuid'

const Login = ({onIdSubmit}) => {

  const idRef = useRef()

  function HandleLogin(e) {
    e.preventDefault()
    onIdSubmit(idRef.current.value)
  }

  function createNewId(){
    onIdSubmit(uuidv4())
  }

  return (
    <Container className='align-items-center d-flex' style={{height: '100vh'}} >
      <Form className='w-100' onSubmit={HandleLogin} >
        <Form.Group>
          <Form.Label>Enter your Id</Form.Label>
          <Form.Control type='text' ref={idRef} required />
        </Form.Group>
        <Button type='submit' className='m-2' >Login</Button>
        <Button onClick={createNewId} variant='secondary' >Create A New Id</Button>
      </Form>
    </Container>
  )
}

export default Login