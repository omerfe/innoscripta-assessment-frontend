"use server";

import { getBaseAPIUrl } from "@/lib/utils";
import { RegisterCredentials, RegisterValidator } from "@/lib/validators";
import { cookies } from "next/headers";

export async function register(data: FormData) {
  const baseAPIUrl = getBaseAPIUrl();
  const csrfToken = cookies().get("csrf_access_token");
  if (!csrfToken) {
    return { error: "CSRF token not found" };
  }

  try {
    const formData = Object.fromEntries(data.entries());
    const parsedData = RegisterValidator.parse(formData) as RegisterCredentials;
    const response = await fetch(`${baseAPIUrl}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-XSRF-TOKEN": csrfToken.value,
      },
      body: JSON.stringify(parsedData),
    });
    const responseData = await response.json();
    const { accessToken } = responseData;
    return accessToken;
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message };
    }
    return { error: "Unknown error" };
  }
}
