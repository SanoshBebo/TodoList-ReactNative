import axios from 'axios';

const apiTest = async () => {
  try {
    const response = await axios.get(`https://catfact.ninja/fact`).then(res => {
      const data = res.data;
      return data;
    });
    // const data = await response.json();
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default apiTest;
