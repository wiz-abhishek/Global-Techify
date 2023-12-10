import React from 'react'
import { Form,Button } from 'react-bootstrap'
function ContactUs() {
    return (
        <div>
            <div className='text-5xl font-bold bg-black flex h-[50vh] w-[100%] justify-center items-center'>
                <span className=' text-white'> Contact </span>
                <span className=' text-[#006eff]'> Us </span>
            </div>
            <div className='flex justify-center items-center h-[fit-content] text-white bg-black gap-3 flex-col p-10 '>
                <div className='text-xl font-semibold'>Have any queries?</div>
                <div className='text-4xl font-bold'>
                    We're Here To Help
                </div>
            </div>
            <div className='bg-black text-white ' >
            <Form>
      <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" />
      </Form.Group>

      <Form.Group className="mb-3">
  <Form.Label>Email</Form.Label>
  <Form.Control type="email" placeholder="Email" />
</Form.Group>
<Form.Group className="mb-3">
  <Form.Label>Mobile Number</Form.Label>
  <Form.Control type="number" placeholder="Mobile Number" />
</Form.Group>
<Form.Group className="mb-3">
  <Form.Label>Message</Form.Label>
  <Form.Control as="textarea" placeholder="Message" />
</Form.Group>

      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
            </div>
        </div>
    )
}

export default ContactUs
