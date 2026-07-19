// ================================================================
// FAQ.JS — sirf FAQ page ko chahiye. data/faq.json se sawal-jawab
// load karke accordion banata hai, phir click pe open/close karta hai.
// ================================================================

const faqList = document.getElementById('faqList');

fetch('/data/faq.json')
    .then(res => res.json())
    .then(data => {
        faqList.innerHTML = '';

        data.forEach((item, index) => {
            const faqItem = document.createElement('div');
            faqItem.classList.add('accordion-item');

            faqItem.innerHTML = `
                <div class="accordion-question">
                    ${index + 1}. ${item.question} <span>+</span>
                </div>
                <div class="accordion-answer">
                    <p>${item.answer}</p>
                </div>
            `;

            faqList.appendChild(faqItem);
        });

        // Sab accordion items ban jaane ke baad click listeners lagao
        document.querySelectorAll('.accordion-item').forEach(item => {
            const question = item.querySelector('.accordion-question');
            question.addEventListener('click', () => {
                item.classList.toggle('active');
            });
        });
    })
    .catch(err => console.error('Error loading FAQs:', err));
