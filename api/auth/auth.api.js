export class AuthApi {
  constructor(request) {
    this.request = request;
    this.baseUrl = 'https://restful-booker.herokuapp.com';
  }

  async auth(username, password) {
    return await this.request.post(`${this.baseUrl}/auth`, {
      data: {
        username,
        password
      }
    });
  }
}