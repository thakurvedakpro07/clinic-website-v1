const appointmentForm = document.querySelector(".appointment-form");
const whatsappNumber = "917972569072";

// WhatsApp appointment booking
appointmentForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = appointmentForm.querySelector("#name").value.trim();
  const phone = appointmentForm.querySelector("#phone").value.trim();
  const appointmentDate = appointmentForm.querySelector("#appointment-date").value;
  const appointmentTime = appointmentForm.querySelector("#appointment-time").value;
  const message = appointmentForm.querySelector("#message").value.trim();

  const whatsappMessage = `Hello Doctor, I want to book an appointment.

Name: ${name}
Phone: ${phone}
Appointment Date: ${appointmentDate}
Appointment Time: ${appointmentTime}
Problem: ${message}
`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  window.open(whatsappUrl, "_blank", "noopener");
});
