import { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import '../App.css';
import refreshIcon from '../images/refresh-icon.webp';
import staticContent from './Constants';

function UserDetails() {
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ initiateRefresh, setInitiateRefresh ] = useState(1);


  // useEffect(() => {
  //   try {
  //     axios.get('https://randomuser.me/api').then((response) => {
  //       const apiResponse = response?.data?.results;
  //       localStorage.setItem('data', JSON.stringify(response?.data?.results) || '');
  //       const [{name = '', email = ''}]  = JSON.parse(localStorage.getItem('data')) || apiResponse;
  //       const {first = '', last = ''} = name;
  //       setName(`${first.concat(' ', last) || ''}`);
  //       setEmail(email || '');
  //     })
  //     // apiResponse.current = JSON.parse(localStorage.getItem('data'));
  //     // console.log('11', apiResponse);
  //     // const [{name = '', email = ''}]  = apiResponse || JSON.parse(localStorage.getItem('data'));
  //     // const {first = '', last = ''} = name;
  //     // setName(`${first.concat(' ', last) || ''}`);
  //     // setEmail(email || '');
  //   }
  //   catch(error) {
  //     console.error(error);
  //   }
  // }, []);

  useEffect(() => {
    try {
      axios.get('https://randomuser.me/api').then((response) => {
        const apiResponse = response?.data?.results;
        localStorage.setItem('data', JSON.stringify(response?.data?.results) || '');
        const [{name = '', email = ''}]  = JSON.parse(localStorage.getItem('data')) || apiResponse;
        const {first = '', last = ''} = name;
        setName(`${first.concat(' ', last) || ''}`);
        setEmail(email || '');
      })
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