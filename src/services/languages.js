import axios from 'axios'

const baseUrl  = 'https://morning-ocean-73257.herokuapp.com'

const getAll = async () => {
  const res = await axios.get(`${baseUrl}/v1/something`)
  return res.data.somethings
}

export default { getAll }
