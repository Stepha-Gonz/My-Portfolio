// Modal functionality - Works independently of Flowbite
(function() {
  'use strict';
  
  // Wait for DOM to be ready
  function initModals() {
    // Get all modal toggle buttons
    const modalToggles = document.querySelectorAll('[data-modal-target]');
    const modalHides = document.querySelectorAll('[data-modal-hide]');
    
    // Function to show modal
    function showModal(modalId) {
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.remove('hidden');
        modal.setAttribute('aria-hidden', 'false');
        // Focus on modal for accessibility
        modal.focus();
        // Prevent body scroll
        document.body.style.overflow = 'hidden';
      }
    }
    
    // Function to hide modal
    function hideModal(modalId) {
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.add('hidden');
        modal.setAttribute('aria-hidden', 'true');
        // Restore body scroll
        document.body.style.overflow = '';
      }
    }
    
    // Add click event to all toggle buttons
    modalToggles.forEach(button => {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        const modalId = this.getAttribute('data-modal-target');
        if (modalId) {
          // Remove # if present
          const cleanModalId = modalId.replace('#', '');
          showModal(cleanModalId);
        }
      });
    });
    
    // Add click event to all hide buttons
    modalHides.forEach(button => {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        const modalId = this.getAttribute('data-modal-hide');
        if (modalId) {
          hideModal(modalId);
        }
      });
    });
    
    // Close modal when clicking on backdrop or outside modal content
    const modals = document.querySelectorAll('[id^="extralarge-modal"]');
    modals.forEach(modal => {
      // Add click listener to the modal container itself
      modal.addEventListener('click', function(e) {
        // If clicking directly on the modal container (not on child elements), close it
        if (e.target === modal) {
          hideModal(modal.id);
        }
      });
      
      // Prevent modal content clicks from closing modal
      const modalContent = modal.querySelector('.career__modal--bg');
      if (modalContent) {
        modalContent.addEventListener('click', function(e) {
          e.stopPropagation();
        });
      }
      
      // Also handle backdrop clicks
      const backdrop = modal.querySelector('[data-modal-backdrop]');
      if (backdrop) {
        backdrop.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation();
          hideModal(modal.id);
        });
      }
    });
    
    // Close modal on Escape key (only when modal is open)
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' || e.keyCode === 27) {
        const openModals = document.querySelectorAll('[id^="extralarge-modal"]:not(.hidden)');
        openModals.forEach(modal => {
          hideModal(modal.id);
        });
      }
    });
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initModals);
  } else {
    // DOM is already ready
    initModals();
  }
})();
