class UI {
    constructor(emailService) {
        this.emailService = emailService;
        this.initializeElements();
        this.attachEventListeners();
    }

    initializeElements() {
        this.emailList = document.getElementById('email-list');
        this.modal = document.getElementById('email-modal');
        this.closeBtn = document.getElementsByClassName('close')[0];
        this.menuToggle = document.getElementById('menu-toggle');
        this.sidebar = document.getElementById('sidebar');
        this.mainContent = document.getElementById('main-content');
        this.composeBtn = document.getElementById('compose-btn');
        this.composeModal = document.getElementById('compose-modal');
        this.closeComposeBtn = document.getElementById('close-compose');
        this.deleteButton = document.getElementById('delete-button');
    }

    attachEventListeners() {
        this.closeBtn.onclick = () => this.closeModal();
        window.onclick = (event) => {
            if (event.target == this.modal) this.closeModal();
        };
        this.menuToggle.onclick = () => this.toggleSidebar();
        this.composeBtn.onclick = () => this.openComposeModal();
        this.closeComposeBtn.onclick = () => this.closeComposeModal();
        
        // Delete button event listener
        this.deleteButton.addEventListener('click', () => {
            if(this.emailService.selectedEmails.size > 0) {
                console.log('Delete button clicked');
                console.log('Selected emails:', this.emailService.selectedEmails);
                this.emailService.deleteSelectedEmails();
                this.renderEmails();
            }
        });

        window.addEventListener('resize', () => this.handleResize());
    }

    renderEmails() {
        this.emailList.innerHTML = '';
        this.emailService.emails.forEach(email => {
            const emailItem = this.createEmailItem(email);
            this.emailList.appendChild(emailItem);
        });
    }

    createEmailItem(email) {
        const emailItem = document.createElement('div');
        emailItem.className = `flex items-center py-4 px-6 hover:bg-gray-100 cursor-pointer ${email.read ? 'opacity-70' : 'font-bold'}`;
        
        // Create checkbox container and checkbox
        const checkboxContainer = document.createElement('div');
        checkboxContainer.className = 'flex items-center mr-4';
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'w-5 h-5 cursor-pointer';
        checkbox.checked = this.emailService.selectedEmails.has(email.id);
        
        // Add checkbox event listener
        checkbox.addEventListener('change', (e) => {
            e.stopPropagation();
            if(e.target.checked) {
                this.emailService.selectedEmails.add(email.id);
            } else {
                this.emailService.selectedEmails.delete(email.id);
            }
            console.log('Selected emails after toggle:', this.emailService.selectedEmails);
        });
        
        checkboxContainer.appendChild(checkbox);
        emailItem.appendChild(checkboxContainer);
        
        // Add the rest of the email content
        const contentDiv = document.createElement('div');
        contentDiv.className = 'flex-1';
        contentDiv.innerHTML = `
            <button class="mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
            </button>
            <div class="flex-1">
                <div class="flex justify-between items-baseline">
                    <span class="font-medium">${email.sender}</span>
                    <span class="text-sm text-gray-500">${email.time}</span>
                </div>
                <div class="text-sm">
                    <span class="mr-2">${email.subject}</span>
                    <span class="text-gray-500 email-preview">${email.preview}</span>
                </div>
            </div>
        `;

        contentDiv.addEventListener('click', (e) => {
            e.stopPropagation();
            this.openModal(email);
        });

        emailItem.appendChild(contentDiv);
        return emailItem;
    }

    openModal(email) {
        document.getElementById('email-subject').textContent = email.subject;
        document.getElementById('email-sender').textContent = email.sender;
        document.getElementById('sender-avatar').textContent = email.sender[0];
        document.getElementById('email-content').innerHTML = email.content;
        this.modal.style.display = 'block';
        this.emailService.markAsRead(email.id);
        this.renderEmails();
    }

    closeModal() {
        this.modal.style.display = 'none';
    }

    toggleSidebar() {
        this.sidebar.classList.toggle('hidden');
        this.mainContent.classList.toggle('ml-0');
        this.mainContent.classList.toggle('ml-64');
    }

    handleResize() {
        if (window.innerWidth <= 640) {
            this.sidebar.classList.add('hidden');
            this.mainContent.classList.remove('ml-64');
            this.mainContent.classList.add('ml-0');
        } else {
            this.sidebar.classList.remove('hidden');
            this.mainContent.classList.remove('ml-0');
            this.mainContent.classList.add('ml-64');
        }
    }

    openComposeModal() {
        this.composeModal.style.display = 'block';
    }

    closeComposeModal() {
        this.composeModal.style.display = 'none';
    }
}