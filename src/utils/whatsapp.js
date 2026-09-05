import { siteConfig } from '../config/siteConfig';

/**
 * Creates a valid WhatsApp web/app URL with an encoded message.
 */
export const createWhatsAppUrl = (messageText) => {
  const number = siteConfig.business.whatsappRaw.replace(/[^0-9]/g, '');
  const encodedText = encodeURIComponent(messageText);
  return `https://wa.me/${number}?text=${encodedText}`;
};

/**
 * General Enquiry link
 */
export const getGeneralWhatsAppUrl = () => {
  const message = `Hello ${siteConfig.business.name}, I am interested in your event decoration services. Please share more details.`;
  return createWhatsAppUrl(message);
};

/**
 * Service-specific Enquiry link
 */
export const getServiceWhatsAppUrl = (serviceTitle) => {
  const message = `Hello ${siteConfig.business.name}, I would like to enquire about your "${serviceTitle}" services. Could you please share options and availability?`;
  return createWhatsAppUrl(message);
};

/**
 * Package-specific Enquiry link
 */
export const getPackageWhatsAppUrl = (packageName) => {
  const message = `Hello ${siteConfig.business.name}, I am looking for a quote for the "${packageName}" package. Please let me know the details and booking procedure.`;
  return createWhatsAppUrl(message);
};

/**
 * Gallery item enquiry link
 */
export const getGalleryItemWhatsAppUrl = (itemTitle) => {
  const message = `Hello ${siteConfig.business.name}, I saw the "${itemTitle}" decoration in your gallery and loved it! Can you provide a quote for a similar setup?`;
  return createWhatsAppUrl(message);
};

/**
 * Quote Form submission -> Formatted WhatsApp message
 */
export const getFormWhatsAppUrl = ({ name, phone, eventType, eventDate, message }) => {
  const lines = [
    `✨ *New Event Decoration Enquiry* ✨`,
    `--------------------------------`,
    `👤 *Name:* ${name || 'Not provided'}`,
    `📞 *Phone:* ${phone || 'Not provided'}`,
    `🎉 *Event Type:* ${eventType || 'General Celebration'}`,
    `📅 *Event Date:* ${eventDate || 'To be decided'}`,
    message ? `💬 *Requirement:* ${message}` : null,
    `--------------------------------`,
    `Sent from ${siteConfig.business.name} website.`,
  ].filter(Boolean);

  return createWhatsAppUrl(lines.join('\n'));
};

/**
 * Direct phone call URL
 */
export const getPhoneUrl = () => {
  return `tel:${siteConfig.business.phoneRaw}`;
};
