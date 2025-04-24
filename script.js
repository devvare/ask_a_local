document.addEventListener('DOMContentLoaded', () => {

    // --- Configuration --- 
    const yourWhatsAppNumber = '+905458646613'; // IMPORTANT: Replace with your actual WhatsApp number in international format (e.g., +905xxxxxxxxx)

    // --- Smooth Scrolling for "Meet the Locals" button --- 
    const scrollLinks = document.querySelectorAll('.scroll-link');

    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); 
            const targetId = this.getAttribute('href'); // Get the target section ID (e.g., #experts-section)
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // --- WhatsApp Button Functionality for Experts --- 
    const whatsappButtons = document.querySelectorAll('.whatsapp-button');

    whatsappButtons.forEach(button => {
        button.addEventListener('click', function() {
            const expertName = this.getAttribute('data-expert');
            if (!expertName) {
                console.error('Expert name not found for this button.');
                return;
            }
            
            if (yourWhatsAppNumber === 'YOUR_PHONE_NUMBER' || yourWhatsAppNumber === '+905458646613') { 
                // Keep the check during development or remove the `|| yourWhatsAppNumber === '+905458646613'` part after confirmation
                // alert('Please ask the developer to configure the WhatsApp number in script.js');
                // return; // Temporarily disable alert/return for testing
            } else if (yourWhatsAppNumber === 'YOUR_PHONE_NUMBER') {
                alert('Please ask the developer to configure the WhatsApp number in script.js');
                return;
            }

            const message = `Hello, I have a question for ${expertName}: `;
            const whatsappUrl = `https://wa.me/${yourWhatsAppNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
            
            // Open WhatsApp link in a new tab
            window.open(whatsappUrl, '_blank');
        });
    });

    // --- WhatsApp Button Functionality for Mini Consultancy --- 
    const consultButton = document.querySelector('.whatsapp-consult-button');
    if (consultButton) {
         consultButton.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default link behavior if it's an <a> tag

             if (yourWhatsAppNumber === 'YOUR_PHONE_NUMBER' || yourWhatsAppNumber === '+905458646613') {
                 // Keep the check during development or remove the `|| yourWhatsAppNumber === '+905458646613'` part after confirmation
                // alert('Please ask the developer to configure the WhatsApp number in script.js');
                // return; // Temporarily disable alert/return for testing
             } else if (yourWhatsAppNumber === 'YOUR_PHONE_NUMBER') {
                alert('Please ask the developer to configure the WhatsApp number in script.js');
                return;
            }

            const message = `Hello, I'm interested in the 1-on-1 Mini Consultancy service.`;
            const whatsappUrl = `https://wa.me/${yourWhatsAppNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        });
    }

     // --- WhatsApp Button Functionality for Sticky Button --- 
    const stickyWhatsAppButton = document.querySelector('.sticky-whatsapp-button');
    if (stickyWhatsAppButton) {
         stickyWhatsAppButton.addEventListener('click', function(e) {
            e.preventDefault(); 

             if (yourWhatsAppNumber === 'YOUR_PHONE_NUMBER' || yourWhatsAppNumber === '+905458646613') {
                 // Keep the check during development or remove the `|| yourWhatsAppNumber === '+905458646613'` part after confirmation
                // alert('Please ask the developer to configure the WhatsApp number in script.js');
                // return; // Temporarily disable alert/return for testing
             } else if (yourWhatsAppNumber === 'YOUR_PHONE_NUMBER') {
                alert('Please ask the developer to configure the WhatsApp number in script.js');
                return;
            }

            // Generic message for the sticky button
            const message = `Hello, I need some help or have a question about Marmaris.`;
            const whatsappUrl = `https://wa.me/${yourWhatsAppNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        });
    }

    // --- Placeholder for eBook Download --- 
    const downloadButton = document.querySelector('.extra-help-section .cta-button:not(.whatsapp-consult-button)'); // Selects the Download PDF button
    if(downloadButton){
        downloadButton.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default link behavior
            alert('eBook download functionality is not yet implemented.');
            // Later, you would replace this with: window.location.href = 'path/to/your/ebook.pdf';
        });
    }

});
