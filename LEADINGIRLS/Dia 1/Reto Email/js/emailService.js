class EmailService {
    constructor(emails) {
        this.emails = emails;
        this.selectedEmails = new Set();
        this.PHISHING_EMAIL_ID = 3; // ID del email de Laura
    }

    toggleEmailSelection(emailId) {
        if (this.selectedEmails.has(emailId)) {
            this.selectedEmails.delete(emailId);
        } else {
            this.selectedEmails.add(emailId);
        }
    }

    deleteSelectedEmails() {
        const emailsToDelete = Array.from(this.selectedEmails);
        
        // Comprobar si el email de phishing está entre los seleccionados
        if (emailsToDelete.includes(this.PHISHING_EMAIL_ID)) {
            this.emails = this.emails.filter(email => !emailsToDelete.includes(email.id));
            this.selectedEmails.clear();
            window.location.href = 'validation.html';
            return;
        }

        // Si no está el email de phishing, simplemente eliminar los seleccionados
        this.emails = this.emails.filter(email => !emailsToDelete.includes(email.id));
        this.selectedEmails.clear();
    }

    getEmailById(emailId) {
        return this.emails.find(email => email.id === emailId);
    }

    markAsRead(emailId) {
        const email = this.getEmailById(emailId);
        if (email) {
            email.read = true;
        }
    }
}