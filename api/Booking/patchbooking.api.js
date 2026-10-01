export class PatchBookingApi {
  constructor(request) {
    this.request = request;
    this.baseUrl = 'https://restful-booker.herokuapp.com';
  }

  async patchBooking(bookingId, bookingData, token) {
    return await this.request.patch(
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