import { test, expect } from '@playwright/test';
import { AuthApi } from '../api/Auth/auth.api.js';

test('Authenticate user', async ({ request }) => {

  const authApi = new AuthApi(request);

  const response = await authApi.auth(
    'admin',
    'password123'
  );

  console.log(await response.json());

  expect(response.ok()).toBeTruthy();
});