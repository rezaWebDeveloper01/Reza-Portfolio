// ----------####################----------
// ----------##### Language #####----------
// ----------####################----------

const translations = {
    fa: {
        // navbar
        contactLink: 'تماس',
        projectsLink: 'پروژه ها',
        skillsLink: 'مهارت ها',
        aboutMe: 'درباره من',
        learningWayLink: 'مسیر یادگیری',
        hello: 'درود! من',
        nameH1: 'رضا',
        lastNameH1: 'نیازکار',
        headerItemTwo: 'علاقه‌مند به توسعه Front-End',
        headerItemThree: 'و ساختن وب‌سایت های مدرن و تعاملی هستم',
        contactMe: 'تماس با من',
        aboutMeParagraph:
            'من دانشجوی مهندسی کامپیوتر هستم و از سال 1403 برنامه نویسی رو شروع کردم. بعد از یاد گیری زبان های Html و CSS به طراحی سایت علاقه‌مند شدم و پروژه های ساده و پیش پا افتاده درست میکردم. بعد از تمرین های متعدد و مسلط شدن بر Html و CSS تصمیم به یاد گیری JavaScript کردم و اکنون درحال یادگیری React هستم.',
        birthDate: 'تاریخ تولد',
        birthDay: '1386/11/07',
        location: 'موقعیت',
        located: 'ایران - شیراز',
        studies: 'تحصیلات',
        studying: 'درحال تحصیل',
        favoritesTitle: 'علاقه‌مندی ها',
        favoritesItems: 'برنامه نویسی، طراحی، ورزش',
        skills: 'مهارت ها',
        myLearningWay: 'مسیر یادگیری من',
        dateItemOne: '1403',
        titleItemOne: 'شروع برنامه نویسی',
        paragraphItemOne:
            'با یادگیری پایتون به برنامه نویسی علاقه مند شدم و حوضه طراحی سایت رو انتخاب کردم و شروع به دیدن آموزش کد نویسی سایت های ساده کردم.',
        dateItemTwo: '1404',
        titleItemTwo: 'ورود به دنیای جاوااسکریپت',
        paragraphItemTwo:
            'جاوااسکریپت رو یاد گرفتم و همچنین کارم رو توی توسعه سایت ها ارتقا دادم - سطح زبانم رو هم ارتقا دادم.',
        dateItemThree: '1405',
        titleItemThree: 'تمرکز روی توسعه مهارت های فرانت اند',
        paragraphItemThree:
            'درحال یادگیری React و همچنین سعی در آموختن ترفند های جدید، حرفه‌ای و مدرن در توسعه وبسایت هستم.',
        projectOneTitle: 'رابط کاربری احراز هویت متحرک - نسخه دمو',
        projectOneParagraph:
            'یک رابط کاربری تایید هویت واکنش‌گرا با انتقالات ورود/ثبت‌نام، اعتبارسنجی فرم، رابط کاربری CAPTCHA، قابلیت نمایش رمز عبور، طراحی واکنش‌گرای موبایل.',
        goals: 'هدف ها',
        goalOne: 'یادگیری استفاده از جاوااسکریپت در وبسایت',
        goalTwo: 'یادگیری React',
        goalThree: 'تسلط کامل بر مفاهیم پیشرفته',
        goalFour: 'تسلط کامل بر زبان انگلیسی',
        goalFive: 'کار در یک تیم حرفه ای',
        goalSix: 'درآمد دلاری از طریق فریلنسری',
    },

    en: {
        contactLink: 'Contact',
        projectsLink: 'Projects',
        skillsLink: 'Skills',
        aboutMe: 'About Me',
        learningWayLink: 'Learning Way',
        hello: "Hello! I'm",
        nameH1: 'Reza',
        lastNameH1: 'Niazkar',
        headerItemTwo: 'Interested in Front-End development',
        headerItemThree: 'and I build modern and interactive websites',
        contactMe: 'Contact me',
        aboutMeParagraph:
            "I am a computer engineering student and I started programming in 2024. After learning HTML and CSS, I became interested in web design and used to make simple and basic projects. After a lot of practice and getting good at HTML and CSS, I decided to learn JavaScript, and now I'm learning React.",
        birthDate: 'Birth date',
        birthDay: '2008/01/27',
        location: 'Location',
        located: 'Iran - Shiraz',
        studies: 'Studies',
        studying: 'Studying',
        favoritesTitle: 'Favorites',
        favoritesItems: 'Coding, Designing, Exercise',
        skills: 'Skills',
        myLearningWay: 'My learning way',
        dateItemOne: '2024',
        titleItemOne: 'Starting programming',
        paragraphItemOne:
            'By learning Python, I became interested in programming, chose the field of web design, and started watching tutorials on coding simple websites',
        dateItemTwo: '2025',
        titleItemTwo: 'Entering the world of JavaScript',
        paragraphItemTwo:
            'I learned JavaScript and also improved my work in website development – I also improved my language level',
        dateItemThree: '2026',
        titleItemThree: 'Focus on developing front-end skills',
        paragraphItemThree:
            'I am learning how to use JavaScript in web development and also trying to learn new, professional, and modern tricks in website development',
        projectOneTitle: 'Dynamic authentication user interface - Demo version',
        projectOneParagraph:
            'A responsive authentication UI with login/signup transitions, form validation, CAPTCHA interface, password visibility option, and mobile-responsive design.',
        goals: 'Goals',
        goalOne: 'Learning of using JavaScript on a website',
        goalTwo: 'Learning React',
        goalThree: 'Complete mastery of advanced concepts',
        goalFour: 'Complete command of the English language',
        goalFive: 'Working in a professional team',
        goalSix: 'Earning dollars through freelancing',
    },
};

const languageBtn = document.getElementById('language-btn');

function changeLanguage(language) {
    document.querySelectorAll('[data-i18n]').forEach((element) => {
        const key = element.dataset.i18n;
        element.textContent = translations[language][key];
    });

    localStorage.setItem('language', language);
}

languageBtn.addEventListener('click', () => {
    const currentLanguage = localStorage.getItem('language') || 'fa';

    const newLanguage = currentLanguage === 'fa' ? 'en' : 'fa';

    changeLanguage(newLanguage);

    document.documentElement.lang = newLanguage;
});

const savedLanguage = localStorage.getItem('language') || 'fa';

changeLanguage(savedLanguage);

// ========================
// === TYPING ANIMATION ===
// ========================

const text = 'Front-End Developer & Computer Student';
const typingText = document.getElementById('typing-text');

let index = 0;

function typeText() {
    if (index < text.length) {
        typingText.textContent += text[index];
        index++;

        setTimeout(typeText, 50);
    }
}

typeText();

// ===============================
// === SHOW + SKILLS ANIMATION ===
// ===============================

const hiddenElements = document.querySelectorAll('.hidden');

function animateSkillCard(card) {
    const counter = card.querySelector('.counter');
    const progress = card.querySelector('.skill-progress');

    if (!counter || !progress) return;

    const target = Number(counter.dataset.target);

    let current = 0;

    const duration = 1500;
    const fps = 60;
    const totalFrames = duration / (1000 / fps);
    const increment = target / totalFrames;

    function update() {
        current += increment;

        if (current >= target) {
            current = target;
        }

        const value = Math.floor(current);

        counter.textContent = `${value}%`;
        progress.style.width = `${value}%`;

        if (current < target) {
            requestAnimationFrame(update);
        }
    }

    update();
}

const observer = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            entry.target.classList.add('show');

            // اگر این المنت یک کارت مهارت بود
            if (entry.target.classList.contains('skill-card')) {
                setTimeout(() => {
                    animateSkillCard(entry.target);
                }, 600);
            }

            observer.unobserve(entry.target);
        });
    },
    {
        threshold: 0.2,
    },
);

hiddenElements.forEach((element) => {
    observer.observe(element);
});

// ==============
// === TOGGLE ===
// ==============

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

// ===========================
// === MODAL FUNCTIONALITY ===
// ===========================

function setupModal(openBtnId, modalId, closeBtnId) {
    const openBtn = document.getElementById(openBtnId);
    const modal = document.getElementById(modalId);
    const closeBtn = document.getElementById(closeBtnId);

    openBtn.addEventListener('click', () => {
        modal.classList.add('active');
    });

    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.classList.remove('active');
        }
    });
}

// === CONTACT MODAL
setupModal('contact-btn', 'modal-contact', 'close-contact-btn');

// === ABOUT MODAL
setupModal('about-btn', 'modal-about', 'close-about-btn');

// === PROJECT ONE
setupModal('project-one-btn', 'modal-project-one', 'close-project-one-btn');

// ===================
// === COPY BUTTON ===
// ===================

const copyButtons = document.querySelectorAll('.copy-btn');

copyButtons.forEach((button) => {
    button.addEventListener('click', async () => {
        await navigator.clipboard.writeText(button.dataset.copy);

        button.innerHTML = `
            <i class="fa-solid fa-check"></i>
        `;

        setTimeout(() => {
            button.innerHTML = `
                <i class="fa-regular fa-copy"></i>
            `;
        }, 2500);
    });
});
