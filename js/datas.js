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

const layanan = [
    {
        logo : 'logo_layanan_company',
        title : 'Company Profile Website',
        content : 'Sebelum memulai pembuatan company profile, tim DEVSTUCK akan mengadakan konsultasi mendalam dengan Anda untuk memahami identitas brand perusahaan. Berbekal pemahaman tersebut, kami akan melakukan penelitian terhadap industri Anda, pesaing, dan target audiens untuk memastikan company profile yang dihasilkan menonjol dan relevan. Dengan kombinasi desain visual menarik dan konten yang persuasif, kami berupaya menciptakan representasi perusahaan Anda yang autentik. Selain itu, bagi company profile digital, integrasi media seperti video dan infografik, serta optimasi untuk user experience, menjadi perhatian khusus kami. Setelah draft pertama selesai, Anda akan diajak untuk memberikan feedback, memastikan hasil akhir sesuai ekspektasi. Tim DEVSTUCK memahami pentingnya adaptabilitas dan kekinian dalam dunia digital, sehingga kami menyediakan dukungan pasca-produksi dan, jika diperlukan, pelatihan untuk memastikan company profile Anda selalu relevan. Dengan pendekatan profesional dan berorientasi kualitas, DEVSTUCK berkomitmen menjadi partner Anda dalam komunikasi perusahaan yang efektif.'
    },
    {

    }
]

let logo = document.querySelector('#layanan_image'),
    title = document.querySelector('#layanan_title'),
    content = document.querySelector('#layanan_content');

const baseUrl = './assets/images/';

const servicesData = {
    'companyProfileWebsite': {            
        content: 'Sebelum memulai pembuatan company profile, tim DEVSTUCK akan mengadakan konsultasi mendalam dengan Anda untuk memahami identitas brand perusahaan. Berbekal pemahaman tersebut, kami akan melakukan penelitian terhadap industri Anda, pesaing, dan target audiens untuk memastikan company profile yang dihasilkan menonjol dan relevan. Dengan kombinasi desain visual menarik dan konten yang persuasif, kami berupaya menciptakan representasi perusahaan Anda yang autentik. Selain itu, bagi company profile digital, integrasi media seperti video dan infografik, serta optimasi untuk user experience, menjadi perhatian khusus kami. Setelah draft pertama selesai, Anda akan diajak untuk memberikan feedback, memastikan hasil akhir sesuai ekspektasi. Tim DEVSTUCK memahami pentingnya adaptabilitas dan kekinian dalam dunia digital, sehingga kami menyediakan dukungan pasca-produksi dan, jika diperlukan, pelatihan untuk memastikan company profile Anda selalu relevan. Dengan pendekatan profesional dan berorientasi kualitas, DEVSTUCK berkomitmen menjadi partner Anda dalam komunikasi perusahaan yang efektif.'
    },
    'aplikasiBerbasisMobile': {            
        content: 'Sebelum memulai pengembangan aplikasi mobile, tim DEVSTUCK akan mengadakan konsultasi mendalam dengan Anda untuk memahami kebutuhan dan tujuan bisnis Anda. Berbekal pemahaman tersebut, kami akan melakukan penelitian terhadap tren aplikasi di industri Anda, kompetitor, dan preferensi pengguna untuk memastikan aplikasi yang dihasilkan inovatif dan relevan. Dengan kombinasi desain antarmuka yang intuitif dan fungsionalitas yang kuat, kami berupaya menciptakan solusi mobile yang mencerminkan visi perusahaan Anda. Selain itu, bagi aplikasi yang berorientasi multimedia, integrasi fitur canggih seperti streaming video dan real-time notifications, serta optimasi untuk performa, menjadi perhatian khusus kami. Setelah prototype pertama selesai, Anda akan diajak untuk memberikan feedback, memastikan aplikasi yang dikembangkan sesuai dengan ekspektasi. Tim DEVSTUCK memahami pentingnya adaptabilitas dan inovasi dalam dunia teknologi mobile, sehingga kami menyediakan dukungan pasca-luncur dan, jika diperlukan, pelatihan untuk memastikan aplikasi Anda selalu up-to-date. Dengan pendekatan profesional dan berorientasi kualitas, DEVSTUCK berkomitmen menjadi partner Anda dalam pengembangan aplikasi mobile yang sukses.'
    },
    'aplikasiBerbasisDesktop': {            
        content: 'Sebelum memulai pengembangan aplikasi desktop, tim DEVSTUCK akan mengadakan konsultasi mendalam dengan Anda untuk memahami kebutuhan dan visi bisnis Anda. Berbekal pemahaman tersebut, kami akan melakukan penelitian terhadap tren aplikasi di industri Anda, pesaing, dan kebutuhan pengguna untuk memastikan aplikasi desktop yang dihasilkan responsif dan relevan. Dengan kombinasi desain antarmuka yang ergonomis dan fungsionalitas yang efisien, kami berupaya menciptakan solusi desktop yang mewakili esensi perusahaan Anda. Selain itu, bagi aplikasi yang membutuhkan kemampuan pemrosesan tinggi atau integrasi dengan perangkat keras tertentu, optimalisasi performa dan kompatibilitas menjadi perhatian utama kami. Setelah versi beta pertama selesai, Anda akan diajak untuk memberikan feedback, memastikan aplikasi yang dikembangkan sesuai dengan ekspektasi. Tim DEVSTUCK memahami pentingnya kestabilan dan adaptabilitas dalam dunia teknologi desktop, sehingga kami menyediakan dukungan pasca-luncur dan, jika diperlukan, pelatihan untuk memastikan aplikasi Anda selalu berfungsi dengan baik. Dengan pendekatan profesional dan berorientasi kualitas, DEVSTUCK berkomitmen menjadi partner Anda dalam pengembangan aplikasi desktop yang handal.'
    }
}


function companyProfileWebsite(){
    logo.src = `${baseUrl}logo_layanan_company.svg`;
    title.innerText = 'Company Profile Website';
    content.innerText = servicesData.companyProfileWebsite.content;
}

function aplikasiBerbasisMobile(){
    logo.src = `${baseUrl}logo_layanan_mobile.svg`;
    title.innerText = 'Aplikasi Berbasis Mobile';
    content.innerText = servicesData.aplikasiBerbasisMobile.content;
}

function aplikasiBerbasisDesktop(){
    logo.src = `${baseUrl}logo_layanan_desktop.svg`;
    title.innerText = 'Aplikasi Berbasis Desktop';
    content.innerText = servicesData.aplikasiBerbasisDesktop.content;
}

