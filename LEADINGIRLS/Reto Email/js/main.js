// Initialize application
const emailService = new EmailService(emails);
const ui = new UI(emailService);

// Initial render
ui.handleResize();
ui.renderEmails();