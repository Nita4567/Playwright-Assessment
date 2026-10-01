import { test, expect } from '@playwright/test';

import { AuthApi } from '../api/Auth/auth.api.js';
import { CreateBookingApi } from '../api/Booking/createbooking.api.js';
import { UpdateBookingApi } from '../api/Booking/updatebooking.api.js';

test('Update booking', async ({ request }) => {

  const authApi = new AuthApi(request);
  const createBookingApi = new CreateBookingApi(request);
  const updateBookingApi = new UpdateBookingApi(request);

  // =========================
  // AUTHENTICATION
  // =========================

  const authResponse = await authApi.auth(
    'admin',
    'password123'
  );

  expect(authResponse.ok()).toBeTruthy();

  const authBody = await authResponse.json();

  const token = authBody.token;

  // =========================
  // CREATE BOOKING
  // =========================

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

  const createResponse =
    await createBookingApi.createBooking(bookingData);

  expect(createResponse.ok()).toBeTruthy();

  const createBody = await createResponse.json();

  const bookingId = createBody.bookingid;

  console.log('Booking ID:', bookingId);

  // =========================
  // UPDATE BOOKING
  // =========================

  const updateBookingData = {
    firstname: 'James',
    lastname: 'Brown',
    totalprice: 111,
    depositpaid: true,
    bookingdates: {
      checkin: '2018-01-01',
      checkout: '2019-01-01'
    },
    additionalneeds: 'Lunch'
  };

  const updateResponse =
    await updateBookingApi.updateBooking(
      bookingId,
      updateBookingData,
      token
    );

  expect(updateResponse.ok()).toBeTruthy();

  const updateBody = await updateResponse.json();

  console.log('Updated Booking:', updateBody);

  // =========================
  // ASSERTIONS
  // =========================

  expect(updateBody.firstname)
    .toBe(updateBookingData.firstname);

  expect(updateBody.lastname)
    .toBe(updateBookingData.lastname);

  expect(updateBody.totalprice)
    .toBe(updateBookingData.totalprice);

  expect(updateBody.depositpaid)
    .toBe(updateBookingData.depositpaid);

  expect(updateBody.bookingdates.checkin)
    .toBe(updateBookingData.bookingdates.checkin);

  expect(updateBody.bookingdates.checkout)
    .toBe(updateBookingData.bookingdates.checkout);

  expect(updateBody.additionalneeds)
    .toBe(updateBookingData.additionalneeds);
});