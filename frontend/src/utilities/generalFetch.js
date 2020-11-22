const fetchDataGeneral = async (endpoint, method, data = undefined) => {
    const options = {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };
  
    if (endpoint !== '/login' && endpoint !== '/register') {
      const token = localStorage.getItem('token');
      options.headers.Authorization = `Bearer ${token}`;
    }
  
    if (data !== undefined) {
      options.body = JSON.stringify(data);
    }
  
    const fetchedData = await fetch(`http://localhost:3005/api${endpoint}`, options);
  
    if (fetchedData.status === 401) {
      window.location.href = `${process.env.REACT_APP_FRONTEND}/login/`;
      return null;
    }
  
    const jsonData = await fetchedData.json();
    if (fetchedData.status !== 200) {
      throw new Error(jsonData.message);
    }
  
    return jsonData;
  };
  
  export default fetchDataGeneral;
  