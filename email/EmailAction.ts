"use server"
import { Resend } from "resend";

const resend = new Resend(process.env.EMAILSEND_API_KEY);

// message error handling
const errorFeedback = (error: unknown): string => {
    let message: string;

    if (error instanceof Error) {
        message = error.message;
      } else if (error && typeof error === "object" && "message" in error) {
        message = String(error.message);
      } else if (typeof error === "string") {
        message = error;
      } else {
        message = "Something went wrong";
      }
      return message;
}

export const sendEmail = async (formData: FormData) => {
    const message = formData.get('message');
    const senderEmail = formData.get('senderEmail');

    // message validation
    if(!message || typeof message !== 'string' || message.length > 5000) {
        return {
            error: 'Invalid message'
        }
    };
    // email validation
    if(!senderEmail || typeof senderEmail !== 'string' || senderEmail.length > 500) {
        return {
            error: 'Invalid sender email'
        }
    };

    let data;
    try{
    await resend.emails.send({
        from: 'Dev Portfolio Contact<onboarding@resend.dev>',
        to: 'yailene.alvarez@gmail.com',
        reply_to: senderEmail,
        subject: 'New message from your portfolio site.',
        text: message,
    });
    } catch (error: unknown) {
        return {
            error: errorFeedback(error)
        }
    }
    return { data };
}

