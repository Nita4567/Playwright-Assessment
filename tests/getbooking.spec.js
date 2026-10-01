import { test, expect } from '@playwright/test';

import { CreateBookingApi } from '../api/Booking/createbooking.api.js';
import { GetBookingApi } from '../api/Booking/getbooking.api.js';

test('Get newly created booking', async ({ request }) => {

  const createBookingApi = new CreateBookingApi(request);
  const getBookingApi = new GetBookingApi(request);

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

  // Create booking
  const createResponse =
    await createBookingApi.createBooking(bookingData);

  expect(createResponse.ok()).toBeTruthy();

  const createBody = await createResponse.json();

  // Get booking ID from Create response
  const bookingId = createBody.bookingid;

  console.log('Created Booking ID:', bookingId);

  // Get the newly created booking
  const getResponse =
    await getBookingApi.getBooking(bookingId);

  expect(getResponse.ok()).toBeTruthy();

  const getBody = await getResponse.json();

  console.log('Get Booking Response:', getBody);

  // Verify booking
  expect(getBody.firstname).toBe(bookingData.firstname);
  expect(getBody.lastname).toBe(bookingData.lastname);
  expect(getBody.totalprice).toBe(bookingData.totalprice);
  expect(getBody.depositpaid).toBe(bookingData.depositpaid);

});