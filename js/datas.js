const faqs = [
    {
        question: "Apa itu Devstuck ?",
        answer: "Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.",
    },
    {
        question: "Layanan apa saja yang ditawarkan oleh DevStuck ?",
        answer: "Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.",
    },
    {
        question: "Bagaimana proses kerja DevStuck dalam proyek ?",
        answer: "Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.",
    },
    {
        question: "Bagaimana cara saya memulai proyek dengan DevStuck ?",
        answer: "Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.",
    },
    {
        question: "Bagaimana cara saya membayar layanan DevStuck ?",
        answer: "Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.",
    },
    {
        question: "Kenapa saya harus bergabung dengan DevStuck ?",
        answer: "Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.",
    }
    
];

const FAQContainer = document.querySelector('#questions_wrapper');


faqs.forEach(faq => {
    const detailsElement = document.createElement('details');
    const summaryElement = document.createElement('summary');
    const pElement = document.createElement('p'); 

    detailsElement.style.cursor = 'pointer';

    summaryElement.textContent = faq.question; 
    pElement.textContent = faq.answer; 
    
    detailsElement.appendChild(summaryElement);
    detailsElement.appendChild(pElement); 
    FAQContainer.appendChild(detailsElement); 
});