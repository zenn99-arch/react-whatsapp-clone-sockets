import React, { useState } from 'react'
import { Nav, Tab } from 'react-bootstrap'
import Conversations from './Conversations'
import Contact from './Contact'

const CONVERSATION_KEY = 'Conversation'
const CONTACT_KEY = 'Contact'

const Sidebar = ({id}) => {

    const [activeKey, setActiveKey] = useState(CONVERSATION_KEY)

  return (
    <div style={{width: '250px'}} className='d-flex flex-column '  >
    <Tab.Container activeKey={activeKey} onSelect={setActiveKey} >
    <Nav variant='tabs' className='justify-content-center' >
        <Nav.Item>
            <Nav.Link eventKey={CONVERSATION_KEY} >Conversation</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey={CONTACT_KEY} >Contact</Nav.Link>
        </Nav.Item>
    </Nav>
    <Tab.Content>
        <Tab.Pane eventKey={CONVERSATION_KEY} >
            <Conversations />
        </Tab.Pane>
        <Tab.Pane eventKey={CONTACT_KEY} >
            <Contact />
        </Tab.Pane>
    </Tab.Content>
    </Tab.Container>
    </div>
  )
}

export default Sidebar