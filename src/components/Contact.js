import React from 'react';
import '../css/Contact.css';

function Contact() {
  return (
    <div>
      <div className='ui form'>
        <div className='inline fields'>
          <div className='ten wide field'>
            <input required='true' type='text' placeholder='* Name' />
          </div>
        </div>
        <div className='inline fields'>
          <div className='ten wide field'>
            <input required='true' type='email' placeholder='* Email' />
          </div>
        </div>
        <div className='inline fields'>
          <div className='ten wide field'>
            <input type='text' placeholder='Phone (Optional)' />
          </div>
        </div>
        <div className='inline fields'>
          <div className='ten wide field'>
            <textarea
              required='true'
              spellcheck='false'
              placeholder='* Message'
            ></textarea>
          </div>
        </div>
      </div>

      <button className='left floated ui button'>SEND</button>
    </div>
  );
}

export default Contact;
