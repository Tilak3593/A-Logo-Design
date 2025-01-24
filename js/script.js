const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((button) => {
  button.addEventListener("click", function () {
    navLinks.forEach((link) => link.classList.remove("active"));
    this.classList.add("active");
  });
});


document.querySelectorAll('.tab-btn').forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));

    // Add active class to the clicked button
    button.classList.add('active');

    // Hide all tab panels
    document.querySelectorAll('.tab-panel').forEach(panel => {
      panel.style.display = 'none';
    });

    // Show the associated tab panel
    const tabPanelId = button.getAttribute('data-tab');
    document.getElementById(tabPanelId).style.display = 'flex';
  });
});

$(document).ready(function(){
  $('.testimonial-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});



function toggleFAQ(element) {
 
  const faqAnswer = element.nextElementSibling;
  const icon = element.querySelector(".icon");

  
  element.classList.toggle("active");


  if (faqAnswer.style.maxHeight) {
    faqAnswer.style.maxHeight = null;
    icon.textContent = "+";
  } else {
    
    const allAnswers = document.querySelectorAll(".faq-answer");
    const allIcons = document.querySelectorAll(".faq-question .icon");

    allAnswers.forEach((ans) => (ans.style.maxHeight = null));
    allIcons.forEach((ic) => (ic.textContent = "+"));


    faqAnswer.style.maxHeight = faqAnswer.scrollHeight + "px";
    icon.textContent = "-";
  }
}





  // Ensure tabs are functioning properly
  document.addEventListener('DOMContentLoaded', function () {
    var tabs = new bootstrap.Tab(document.querySelector('#section2-logo-design-tab'));
    var tabsAnimation = new bootstrap.Tab(document.querySelector('#section2-logo-animation-tab'));
    var tabsIllustration = new bootstrap.Tab(document.querySelector('#section2-illustration-tab'));
    var tabsBranding = new bootstrap.Tab(document.querySelector('#section2-branding-tab'));
    var tabsWebsite = new bootstrap.Tab(document.querySelector('#section2-website-design-tab'));

    // Adding event listeners to each button to toggle the correct tab
    document.querySelector('#section2-logo-design-tab').addEventListener('click', function () {
      tabs.show();
    });
    document.querySelector('#section2-logo-animation-tab').addEventListener('click', function () {
      tabsAnimation.show();
    });
    document.querySelector('#section2-illustration-tab').addEventListener('click', function () {
      tabsIllustration.show();
    });
    document.querySelector('#section2-branding-tab').addEventListener('click', function () {
      tabsBranding.show();
    });
    document.querySelector('#section2-website-design-tab').addEventListener('click', function () {
      tabsWebsite.show();
    });
  });


  $('#customFile').on('change', function() {
    let fileCount = $(this).get(0).files.length;
    if (fileCount > 0) {
      $(this).next('label').html(`${fileCount} file(s) selected`);
    } else {
      $(this).next('label').html(`<span>Add up to 5 files</span>`);
    }
  });

  $(document).ready(function() {
    // Hide the help button when the modal is shown
    $('#helpModal').on('show.bs.modal', function () {
      $('#helpButton').hide();
    });
  
    // Show the help button when the modal is hidden
    $('#helpModal').on('hidden.bs.modal', function () {
      $('#helpButton').show();
    });
  });
  

     