export class GetBookingApi {
  constructor(request) {
    this.request = request;
    this.baseUrl = 'https://restful-booker.herokuapp.com';
  }

  async getBooking(bookingId) {
    return await this.request.get(`${this.baseUrl}/booking/${bookingId}`);
  }
}