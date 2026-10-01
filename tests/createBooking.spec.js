import { test, expect } from '@playwright/test';
import { CreateBookingApi } from '../api/Booking/createbooking.api.js';

test('Create booking', async ({ request }) => {

  const createBookingApi = new CreateBookingApi(request);

  const bookingData = {
    firstname: 'Jim',
    lastname: 'Brown',
    totalprice: 111,
    depositpaid: true,
    bookingdates: {
      checkin: '2026-09-01',
      checkout: '2026-10-01'
    },
    additionalneeds: 'Breakfast'
  };

  const response = await createBookingApi.createBooking(bookingData);

  expect(response.ok()).toBeTruthy();

  const responseBody = await response.json();

  console.log(responseBody);
});