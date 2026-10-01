export class UpdateBookingApi {
  constructor(request) {
    this.request = request;
    this.baseUrl = 'https://restful-booker.herokuapp.com';
  }

  async updateBooking(bookingId, bookingData, token) {
    return await this.request.put(
      `${this.baseUrl}/booking/${bookingId}`,
      {
        data: bookingData,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Cookie': `token=${token}`
        }
      }
    );
  }
}