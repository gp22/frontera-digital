require("dotenv").config()
const fetch = require("node-fetch")
const { EMAIL_API_KEY, TO_EMAIL, TO_NAME } = process.env

exports.handler = async event => {
  const { name, email, message } = JSON.parse(event.body).payload.data
  const url = "https://api.sendinblue.com/v3/smtp/email"
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "api-key": EMAIL_API_KEY,
    },
    body: JSON.stringify({
      sender: { name, email },
      to: [{ email: TO_EMAIL, name: TO_NAME }],
      subject: "New Contact Form Submission",
      htmlContent: `<html><head></head><body><p>${message}</p></body></html>`,
    }),
  }

  let data

  try {
    data = await fetch(url, options).then(res => res.json())
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
  }
  return { statusCode: 200, body: JSON.stringify(data) }
}
