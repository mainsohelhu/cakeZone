     // --- 1. WhatsApp Configuration ---
        // As requested, the number is stored in a const and is not an input field.
        const PHONE_NUMBER = "917999545499"; 

        // --- 2. Mobile Menu Logic ---
        const hamburger = document.getElementById('hamburger');
        const mobileMenu = document.getElementById('mobileMenu');
        const overlay = document.getElementById('overlay');
        const menuLinks = document.querySelectorAll('.menu-link');

        function toggleMenu() {
            mobileMenu.classList.toggle('active');
            overlay.classList.toggle('active');
        }

        // Open/Close on Hamburger Click
        hamburger.addEventListener('click', toggleMenu);

        // Close when clicking outside (on overlay)
        overlay.addEventListener('click', () => {
            if (mobileMenu.classList.contains('active')) {
                toggleMenu();
            }
        });

        // Close when clicking a link inside the menu
        menuLinks.forEach(link => {
            link.addEventListener('click', toggleMenu);
        });


        // --- 3. WhatsApp Order Logic ---
        const orderButtons = document.querySelectorAll('.whatsapp-trigger');

        orderButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                // Determine the message based on context or use a generic one
                const message = "Hello Cake Zone, I would like to place an order.";
                const url = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
                
                // Open in new tab
                window.open(url, '_blank');
            });
        });