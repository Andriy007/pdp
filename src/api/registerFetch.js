// const apiUrl = 'http://localhost:4000';
// export default function registerFetch(user) {
//   const requestOptions = {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(user)
//   };
//
//   return fetch(`${apiUrl}/users/register`, requestOptions).then(handleResponse);
// }
//
//
// function handleResponse(response) {
//   return response.text().then(text => {
//     const data = text && JSON.parse(text);
//     if (!response.ok) {
//
//       const error = (data && data.message) || response.statusText;
//       return Promise.reject(error);
//     }
//
//     return data;
//   });
// }
