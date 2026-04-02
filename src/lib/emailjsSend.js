import emailjs from '@emailjs/browser';

const DEFAULT_TO_EMAIL = 'sarvjeetkaur9729@gmail.com';

function getEnvOrThrow() {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error(
      'Missing EmailJS environment variables. Set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY.'
    );
  }

  return { serviceId, templateId, publicKey };
}

export async function sendContactEmail({ name, email, message }) {
  const { serviceId, templateId, publicKey } = getEnvOrThrow();

  const templateParams = {
    name,
    email,
    message,
    to_email: DEFAULT_TO_EMAIL
  };

  return emailjs.send(serviceId, templateId, templateParams, publicKey);
}

