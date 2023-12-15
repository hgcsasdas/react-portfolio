// functions/sendEmail.js
const axios = require('axios');

exports.handler = async (event, context) => {
  try {
    const { name, email, message } = JSON.parse(event.body);

    // Configura la solicitud a la API de Resend
    const response = await axios.post('https://api.resend.io/v1/send', {
      apiKey: process.env.RESEND_API_KEY,
      to: 'destinatario@example.com', // Reemplaza con tu dirección de correo electrónico
      subject: 'Nuevo mensaje de contacto',
      text: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`,
    });

    // Maneja la respuesta de Resend, según la estructura de la respuesta
    const responseData = response.data;

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Correo electrónico enviado con éxito', responseData }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error al enviar el correo electrónico' }),
    };
  }
};
