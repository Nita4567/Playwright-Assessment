import { test, expect } from '@playwright/test';

import { AuthApi } from '../api/Auth/auth.api.js';
import { CreateBookingApi } from '../api/Booking/createbooking.api.js';
import { PatchBookingApi } from '../api/Booking/patchbooking.api.js';

test('Patch booking', async ({ request }) => {

  const authApi = new AuthApi(request);
  const createBookingApi = new CreateBookingApi(request);
  const patchBookingApi = new PatchBookingApi(request);

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

  console.log('Token:', token);

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
  // PATCH BOOKING
  // =========================

  const patchData = {
    firstname: 'Peter',
    lastname: 'Brown'
  };

  const patchResponse =
    await patchBookingApi.patchBooking(
      bookingId,
      patchData,
      token
    );

  expect(patchResponse.ok()).toBeTruthy();

  const patchBody = await patchResponse.json();

  console.log('Patched Booking:', patchBody);

  // =========================
  // ASSERTIONS
  // =========================

  expect(patchBody.firstname)
    .toBe(patchData.firstname);

  expect(patchBody.lastname)
    .toBe(patchData.lastname);
});