export class DeleteBookingApi {
  constructor(request) {
    this.request = request;
    this.baseUrl = 'https://restful-booker.herokuapp.com';
  }

  async deleteBooking(bookingId, token) {
    return await this.request.delete(
      `${this.baseUrl}/booking/${bookingId}`,
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Cookie': `token=${token}`
        }
      }
    );
  }
}