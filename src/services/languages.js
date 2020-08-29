import axios from 'axios'

const baseUrl  = 'https://morning-ocean-73257.herokuapp.com'

const defaultSomethings = [{ id: 'en', description: '{"nothing":"nothing personal here","something":"something personal here"}' }]

const getAll = async () => {
  try {
    const res = await axios.get(`${baseUrl}/v1/something`, { timeout: 5000 })
    return res.data.somethings
  } catch(err) {
    console.error(err)
    return defaultSomethings
  }
}

export default { getAll }
