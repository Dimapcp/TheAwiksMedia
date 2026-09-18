(function () {
    const translations = {
        en: {
            main: "Main Page",
            news: "News",
            projects: "Projects on Media",
            other: "About Us & Other things",
            group: "Local Group Media",
            welcome: "Welcome to The Awiks Media, here you can see all news and projects from 18.09.2026.",
            noNews: "Oh nooo, no news available ):",
            enterGroup: "Or enter your local group's media",
            newsEmpty: "Any news (site was just created)",
            groupTitle: "Local Group Media",
            groupPrompt: "Enter your group code",
            groupSubmit: "Enter group",
            groupHint: "Use the code shared by your local group administrator.",
            groupNotFound: "Group not found. Check the code and try again.",
            groupWelcome: "Welcome to the local group media",
            groupEmpty: "There are no posts in this group yet.",
            back: "Back to group entry",
            projectTitle: "Book project: What is it like in Europe?",
            projectIntro: "The author and friends who live in the European Union will tell people who cannot leave Ukraine what life abroad is like, including useful technologies and everyday experiences.",
            projectRules: "How to join the project",
            projectJoin: "To join, live or have lived in an EU country, provide proof, submit your application, and wait for approval. After approval, write a short essay about your experience. The project will be published on 30 September 2026.",
            projectView: "View project"
        },
        uk: {
            main: "Головна",
            news: "Новини",
            projects: "Медіапроєкти",
            other: "Про нас та інше",
            group: "Медіа локальної групи",
            welcome: "Вітаємо у The Awiks Media. Тут ви можете побачити всі новини та проєкти від 18.09.2026.",
            noNews: "Ой, новин поки немає ):",
            enterGroup: "Або увійдіть до медіа локальної групи",
            newsEmpty: "Новин поки немає (сайт щойно створено)",
            groupTitle: "Медіа локальної групи",
            groupPrompt: "Введіть код групи",
            groupSubmit: "Увійти до групи",
            groupHint: "Використайте код, який надав адміністратор локальної групи.",
            groupNotFound: "Групу не знайдено. Перевірте код і спробуйте ще раз.",
            groupWelcome: "Вітаємо в медіа локальної групи",
            groupEmpty: "У цій групі ще немає публікацій.",
            back: "Повернутися до входу в групу",
            projectTitle: "Книжковий проєкт: А як там у Європі?",
            projectIntro: "Автор і друзі, які живуть у країнах Європейського Союзу, розкажуть тим, хто не може виїхати з України, про життя за кордоном, корисні технології та повсякденний досвід.",
            projectRules: "Як долучитися до проєкту",
            projectJoin: "Для участі потрібно жити або жити раніше в країні ЄС, надати підтвердження, подати заявку та дочекатися погодження. Після погодження напишіть коротке есе про свій досвід. Проєкт буде опубліковано 30 вересня 2026 року.",
            projectView: "Переглянути проєкт"
        },
        ru: {
            main: "Главная",
            news: "Новости",
            projects: "Медиапроекты",
            other: "О нас и другое",
            group: "Медиа локальной группы",
            welcome: "Добро пожаловать в The Awiks Media. Здесь вы можете увидеть все новости и проекты от 18.09.2026.",
            noNews: "Ой, новостей пока нет ):",
            enterGroup: "Или войдите в медиа локальной группы",
            newsEmpty: "Новостей пока нет (сайт только создан)",
            groupTitle: "Медиа локальной группы",
            groupPrompt: "Введите код группы",
            groupSubmit: "Войти в группу",
            groupHint: "Используйте код, который предоставил администратор локальной группы.",
            groupNotFound: "Группа не найдена. Проверьте код и попробуйте снова.",
            groupWelcome: "Добро пожаловать в медиа локальной группы",
            groupEmpty: "В этой группе пока нет публикаций.",
            back: "Вернуться ко входу в группу",
            projectTitle: "Книжный проект: Как там в Европе?",
            projectIntro: "Автор и друзья, живущие в странах Европейского союза, расскажут тем, кто не может уехать из Украины, о жизни за границей, полезных технологиях и повседневном опыте.",
            projectRules: "Как присоединиться к проекту",
            projectJoin: "Для участия нужно жить или жить раньше в стране ЕС, предоставить подтверждение, подать заявку и дождаться одобрения. После одобрения напишите небольшое эссе о своем опыте. Проект будет опубликован 30 сентября 2026 года.",
            projectView: "Посмотреть проект"
        }
    };

    const pageLanguage = document.documentElement.lang === "uk" ? "uk" : (localStorage.getItem("awiks-language") || "en");
    const language = translations[pageLanguage] ? pageLanguage : "en";

    function translatePage(nextLanguage) {
        const dictionary = translations[nextLanguage];
        document.querySelectorAll("[data-i18n]").forEach((element) => {
            const key = element.dataset.i18n;
            if (dictionary[key]) element.textContent = dictionary[key];
        });
        document.documentElement.lang = nextLanguage === "uk" ? "uk" : nextLanguage;
        localStorage.setItem("awiks-language", nextLanguage);
        document.querySelectorAll("[data-language]").forEach((button) => {
            button.classList.toggle("is-active", button.dataset.language === nextLanguage);
        });
    }

    document.addEventListener("DOMContentLoaded", () => {
        document.querySelectorAll("[data-language]").forEach((button) => {
            button.addEventListener("click", () => translatePage(button.dataset.language));
        });
        document.querySelectorAll(".Load-Local-Group-News").forEach((button) => {
            button.addEventListener("click", () => { window.location.href = "localgroupenterance.html"; });
        });
        translatePage(language);
    });
})();
