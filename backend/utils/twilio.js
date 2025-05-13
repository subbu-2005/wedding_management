// utils/twilio.js
import twilio from "twilio";
import { TWILIO_SID, TWILIO_AUTH_TOKEN, TWILIO_PHONE, NODE_ENV } from "../config/env.js";

const client = twilio(TWILIO_SID, TWILIO_AUTH_TOKEN);

/**
 * Send an OTP to the given phone number using Twilio SMS.
 * Falls back to console.log in development mode.
 */
export const sendOTP = async (phone, otp) => {
  try {
    const message = `Your EazyWed OTP is ${otp}`;

    if (NODE_ENV === "development") {
      console.log(`[DEV MODE] Mock SMS to ${phone}: ${message}`);
      return;
    }

    const response = await client.messages.create({
      body: message,
      from: TWILIO_PHONE,
      to: phone,
    });

    console.log(`✅ OTP sent to ${phone} (SID: ${response.sid})`);
  } catch (error) {
    console.error(`❌ Failed to send OTP to ${phone}:`, error.message);
    throw new Error("Failed to send OTP. Please try again.");
  }
};
