const urlBase = "https://tool.recicletool.eco.br/api";

export async function login(username, password) {
    try {
      const response = await fetch(urlBase + '/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
      const statusCode = response.status;
  
      const authToken = response.headers.get('x-auth-token');
  
      return {statusCode: statusCode, authToken: authToken}; 
    } catch (error) {
      console.error(error);
    }
  }

export function register(user) {
    return sleep({
        username: "André Moraes",
        email: "andre@test.com"
    });
}

const sleep = (resData) => {
    return new Promise(resolve =>
        setTimeout(() => resolve(
            resData
        ),
        Math.random() * 1000
    )
)}