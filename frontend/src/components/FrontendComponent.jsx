// FrontendComponent.jsx 

import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const FrontendComponent = () => {
  const [data, setData] = useState(null);
  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await getAccessTokenSilently();
        const response = await fetch('http://localhost:3001', { // Change this to your API URL
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        });
        const responseData = await response.text();
        setData(responseData);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Secured Data</h1>
      <p>{data || 'Loading...'}</p>
    </div>
  );
};

export default FrontendComponent;