import { useState, useEffect, useRef, Fragment } from 'react';
import axios from 'axios';
import '../App.css';
import refreshIcon from '../images/refresh-icon.webp';
import staticContent from './Constants';

function UserDetails() {
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ initiateRefresh, setInitiateRefresh ] = useState(1);

  let apiResponse = useRef({});
  useEffect(() => {
    try {
      axios.get('https://randomuser.me/api').then((response) => {
        apiResponse.current = response?.data?.results;
        localStorage.setItem('data', JSON.stringify(response?.data?.results) || '');
      })
      // apiResponse.current = JSON.parse(localStorage.getItem('data'));
      const [{name = '', email = ''}]  = JSON.parse(localStorage.getItem('data')) || apiResponse.current;
      const {first = '', last = ''} = name;
      setName(`${first.concat(' ', last) || ''}`);
      setEmail(email || '');
    }
    catch(error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    try {
      axios.get('https://randomuser.me/api').then((response) => {
        apiResponse.current = response?.data?.results;
        localStorage.setItem('data', JSON.stringify(response?.data?.results) || '');
      })
      // apiResponse.current = JSON.parse(localStorage.getItem('data'));
      const [{name = '', email = ''}]  = JSON.parse(localStorage.getItem('data')) || apiResponse.current;
      const {first = '', last = ''} = name;
      setName(`${first.concat(' ', last) || ''}`);
      setEmail(email || '');
    }
    catch(error) {
      console.error(error);
    }
  }, [initiateRefresh]);

  return ( 
    <>
        <section style= {{backgroundColor: '#d0d6d6', width: '100%', height: '60vh'}}>
        <div aria-label={staticContent?.centerDisplayAriaLabel} className='CenterDisplay'>
          <div className='Row'>
            <div className='ColumnLeft'>
              <span>{staticContent?.staticNameText}</span>
            </div>
            <div className='ColumnRight'>
              <span>{name}</span>
            </div>
          </div>
          <div className='Row'>
            <div className='ColumnLeft'>
              <span>{staticContent?.staticEmailText}</span>
            </div>
            <div className='ColumnRight'>
              <span>{email}</span>
            </div>
          </div>
          <div className='ButtonContainer'>
            <button aria-label={staticContent?.buttonAriaLabel} title='Refresh' className='Button' onClick={() => {setInitiateRefresh(initiateRefresh + 1)}}>
              <img className='App-logo' alt={staticContent?.staticButtonText} src={refreshIcon}/>
            </button>
          </div>
        </div>
      </section>
    </>
  ); 
}

export default UserDetails