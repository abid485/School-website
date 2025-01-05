// Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const delay = entry.target.getAttribute('data-delay') || 0; // প্রতিটি ট্যাগের delay পাওয়া
        setTimeout(() => {
          entry.target.classList.add('show');
        }, delay * 100); // সেকেন্ড থেকে মিলিসেকেন্ডে রূপান্তর
      }
    });
  }, {
    threshold: 0.2, // ২০% দৃশ্যমান হলে কার্যকর হবে
  });

  // সব reveal ক্লাস পর্যবেক্ষণ করা
  const revealElements = document.querySelectorAll('.reveal');
  revealElements.forEach((el) => observer.observe(el));
