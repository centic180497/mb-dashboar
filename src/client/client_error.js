export default class ClientError extends Error {
  constructor(baseUrl, data) {
    super(data.messages)
    this.url = data.url
    this.statusCode = data.statusCode
    this.serverErrorId = data.serverErrorId
  }
}
