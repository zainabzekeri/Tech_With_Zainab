import type { Handler } from "@netlify/functions";

export const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: "Method not allowed",
      }),
    };
  }

  try {
    const body = JSON.parse(event.body || "{}");
    const email = body.email?.trim();

    if (!email || !email.includes("@")) {
      return {
        statusCode: 400,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: "Please provide a valid email.",
        }),
      };
    }

    const apiKey = process.env.BREVO_API_KEY;

    if (!apiKey) {
      console.error("BREVO_API_KEY is missing.");

      return {
        statusCode: 500,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: "Newsletter service is not configured.",
        }),
      };
    }

    console.log("Calling Brevo API...");

    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        email,
        listIds: [3],
        updateEnabled: true,
      }),
    });

    const responseText = await response.text();

    console.log("Brevo status:", response.status);
    console.log("Brevo response:", responseText);

    let data: any = {};

    try {
      data = responseText ? JSON.parse(responseText) : {};
    } catch {
      data = {
        message: responseText || "Brevo returned an unexpected response.",
      };
    }

    if (!response.ok) {
      return {
        statusCode: response.status,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message:
            data.message ||
            data.code ||
            "Unable to subscribe to the newsletter.",
        }),
      };
    }

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: "Successfully subscribed!",
      }),
    };
  } catch (error) {
    console.error("Newsletter subscription error:", error);

    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: "Something went wrong. Please try again.",
      }),
    };
  }
};