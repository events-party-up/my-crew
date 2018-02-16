const BASE_URL = 'http://localhost:3000'

export const userIdKey = 'USER_ID_KEY'

export async function postLogin(username, password) {
  try {
    const url = `${BASE_URL}/api/v1/account/login`

    let response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: username.toLowerCase(),
        password: password
      })
    })

    let responseJSON = await response.json()
    return responseJSON

  } catch (error) {
    return {
      error: error
    }
  }
}

export async function postSignup(name, username, password) {
  try {
    const url = `${BASE_URL}/api/v1/account/signup`

    let response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: username.toLowerCase(),
        password: password
      })
    })

    let responseJSON = await response.json()
    return responseJSON
  } catch(error) {
    return {
      error: error
    }
  }
}
