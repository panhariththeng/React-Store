// domain/.netlify/functions/hello
const items = [
  { id: 1, name: 'Rith' },
  { id: 2, name: 'Dane' },
]

exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: 'Hello World',
  }
}
