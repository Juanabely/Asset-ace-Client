import React,{useState} from 'react'
import './admin.css'
import NavAdmin from '../NavAdmin/NavAdmin'
import Content from '../Content/Content'

function Admin() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="admin">
        <NavAdmin setIsOpen={setIsOpen}/>
        <Content isOpen={isOpen}
        setIsOpen={setIsOpen}/>
    </section>
  )
}

export default Admin