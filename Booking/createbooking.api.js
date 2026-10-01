export class CreateBookingApi {
  constructor(request) {
    this.request = request;
    this.baseUrl = 'https://restful-booker.herokuapp.com';
  }

  async createBooking(bookingData) {
    return await this.request.post(`${this.baseUrl}/booking`, {
      data: bookingData
    });
  }
}

