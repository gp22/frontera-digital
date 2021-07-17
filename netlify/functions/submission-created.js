require("dotenv").config()
const fetch = require("node-fetch")
const { EMAIL_API_KEY, TO_EMAIL } = process.env

exports.handler = async event => {
  const email = JSON.parse(event.body).payload.email
  console.log(`Recieved a submission: ${email}`)
  console.log(`To email: ${TO_EMAIL}`)
  return fetch("https://api.sendinblue.com/v3/smtp/email", {
    method: "POST",
    headers: {
      accept: "application/json",
      "api-key": `${EMAIL_API_KEY}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({ email }),
  })
    .then(response => response.json())
    .then(data => {
      console.log(`Submitted to Sendinblue:\n ${data}`)
    })
    .catch(error => ({ statusCode: 422, body: String(error) }))
}
