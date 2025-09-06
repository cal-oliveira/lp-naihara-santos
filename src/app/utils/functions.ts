export function CallOnWhatsApp() {
  const phoneNumber = "5548988090481";
  const message =
    "Olá, vim através do seu site e tenho interesse em agendar uma consulta.";

  window.open(
    `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
    "_blank"
  );
}
