import React from 'react';
import '../css/Contact.css';

function Contact() {
  return (
    <div className='Contact-Page__Wrapper'>
      <div className='ui form'>
        <h2>If you would like us to work together, contact me.</h2>
        <div className='inline fields'>
          <div className='five wide field'>
            <input required='true' type='text' placeholder='* Name' />
          </div>
        </div>
        <div className='inline fields'>
          <div className='five wide field'>
            <input required='true' type='email' placeholder='* Email' />
          </div>
        </div>
        <div className='inline fields'>
          <div className='five wide field'>
            <input type='text' placeholder='Phone (Optional)' />
          </div>
        </div>
        <div className='inline fields'>
          <div className='five wide field'>
            <textarea
              required='true'
              spellcheck='false'
              placeholder='* Message'
            ></textarea>
          </div>
        </div>
        <div>
          <button className='left floated ui button'>
            SEND <i class='paper plane icon'></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
