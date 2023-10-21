import React from 'react'

function Form() {
  return (
    <div>
           <form>
                            <div className='form-floating'>
                                <input className='form-control' id='name' type='text' placeholder='enter username' required></input>
                                <label htmlFor='name'>Name</label>
                            </div>
                            <div className='form-floating'>
                                <input className='form-control' id='gmail' type='text' placeholder='enter E-mail' required></input>
                                <label htmlFor='gmail'>E-mail</label>
                            </div>
                            <div className='form-floating'>
                                <input className='form-control' id='subject' type='text' placeholder='enter password' required></input>
                                <label htmlFor='subject'>Subject</label>
                            </div>
                            <div className='form-floating'>
                                <textarea className='form-control' id='message' type='textarea' placeholder='Message' required></textarea>
                                <label htmlFor='message'>Message</label>
                            </div>

                            <button className='button1' type='submit'>Submit</button>
                        </form>
    </div>
  )
}

export default Form
