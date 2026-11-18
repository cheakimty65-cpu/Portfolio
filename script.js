document.addEventListener("DOMContentLoaded", () => {
  const translations = {
    en: {
      mainNavigation: "Main navigation",
      switchToKhmer: "Switch to Khmer",
      switchToEnglish: "Switch to English",
      settingsLabel: "Theme and accent settings",
      blueAccent: "Blue accent",
      indigoAccent: "Indigo accent",
      githubProject: "GitHub project",
      closeEditor: "Close editor",
      navMenuOpen: "Open navigation",
      navMenuClose: "Close navigation",
      navAbout: "About",
      navProjects: "Projects",
      navSkills: "Technical Skills",
      navContact: "Contact",
      editInfo: "Edit Info",
      appearance: "Appearance",
      lightTheme: "Light theme",
      darkTheme: "Dark theme",
      accentColor: "Accent color",
      availability: "Open for Full-Stack Internship & Freelance",
      greeting: "Hello! My name is",
      role: "Full-Stack Web Developer & Software Engineer",
      viewProjects: "View My Projects",
      contactMe: "Contact Me",
      coreStack: "CORE TECH STACK",
      completedProjects: "Completed Projects",
      fullStack: "Full-Stack",
      coreFocus: "Core Focus",
      commitment: "Commitment",
      aboutLabel: "ABOUT",
      aboutTitle: "Building useful things, with care.",
      aboutLead: "A computer science student focused on reliable full-stack products and thoughtful user experiences.",
      aboutCardTitle: "A little about me",
      aboutParagraphOne: "I am a Year 3 Computer Science student at Build Bright University in Phnom Penh, Cambodia. I enjoy turning real-world needs into clear, dependable software.",
      aboutParagraphTwo: "From shaping a database and building secure APIs to polishing an interface, I like working across the stack and learning from a collaborative engineering team.",
      locationLabel: "Location",
      availabilityLabel: "Availability",
      internshipAvailable: "Internship & Freelance",
      educationLabel: "EDUCATION",
      degree: "Bachelor of Computer Science",
      yearThree: "Year 3 · Phnom Penh, Cambodia",
      coursework: "Coursework includes web application development, databases, object-oriented programming, and data structures.",
      skillsLabel: "SKILLS",
      skillsTitle: "Technical Skills",
      skillsLead: "Tools and technologies I use to design, build, and ship full-stack applications.",
      frontend: "Frontend",
      backend: "Backend",
      database: "Database",
      databaseDesign: "Database Design",
      tools: "Tools & DevOps",
      projectsLabel: "SELECTED WORK",
      projectsTitle: "Featured Projects",
      projectsLead: "A selection of applications and systems I have designed and built.",
      contactLabel: "WHAT'S NEXT?",
      contactTitle: "Let's build something together.",
      contactLead: "I am open to a Full-Stack internship or freelance projects. Have an opportunity or idea? Send me a message.",
      formName: "Your name / company",
      formEmail: "Email address",
      formMessage: "Message",
      namePlaceholder: "Your name",
      messagePlaceholder: "Tell me about your opportunity...",
      sendMessage: "Send Message",
      footer: "Designed & built by",
      editLabel: "PERSONALIZE YOUR PORTFOLIO",
      editTitle: "Edit Info",
      yourName: "Your name",
      yourBio: "Hero bio",
      projectDetails: "Project details",
      projectOne: "Project 1 title",
      projectTwo: "Project 2 title",
      projectThree: "Project 3 title",
      projectDescription: "Project 1 description",
      projectDescriptionTwo: "Project 2 description",
      projectDescriptionThree: "Project 3 description",
      cancel: "Cancel",
      saveChanges: "Save Changes",
      formSuccess: "Your message is ready in your email app.",
      formStorageError: "Your changes could not be saved. Check browser storage settings.",
    },
    km: {
      mainNavigation: "ម៉ឺនុយចម្បង",
      switchToKhmer: "ប្តូរទៅភាសាខ្មែរ",
      switchToEnglish: "ប្តូរទៅភាសាអង់គ្លេស",
      settingsLabel: "ការកំណត់រូបរាង និងពណ៌",
      blueAccent: "ពណ៌ខៀវ",
      indigoAccent: "ពណ៌ស្វាយ",
      githubProject: "គម្រោង GitHub",
      closeEditor: "បិទការកែសម្រួល",
      navMenuOpen: "បើកម៉ឺនុយ",
      navMenuClose: "បិទម៉ឺនុយ",
      navAbout: "អំពីខ្ញុំ",
      navProjects: "គម្រោង",
      navSkills: "ជំនាញបច្ចេកទេស",
      navContact: "ទំនាក់ទំនង",
      editInfo: "កែប្រែព័ត៌មាន",
      appearance: "រូបរាង",
      lightTheme: "រូបរាងភ្លឺ",
      darkTheme: "រូបរាងងងឹត",
      accentColor: "ពណ៌សង្កត់",
      availability: "បើកទទួលការងារ និងគម្រោង Freelance",
      greeting: "សួស្តី! ខ្ញុំឈ្មោះ",
      role: "អ្នកអភិវឌ្ឍន៍វេប Full-Stack និងវិស្វករកម្មវិធី",
      viewProjects: "មើលគម្រោងរបស់ខ្ញុំ",
      contactMe: "ទាក់ទងខ្ញុំ",
      coreStack: "បច្ចេកវិទ្យាស្នូល",
      completedProjects: "គម្រោងដែលបានបញ្ចប់",
      fullStack: "Full-Stack",
      coreFocus: "ជំនាញស្នូល",
      commitment: "ការប្តេជ្ញាចិត្ត",
      aboutLabel: "អំពីខ្ញុំ",
      aboutTitle: "បង្កើតអ្វីដែលមានប្រយោជន៍ ដោយយកចិត្តទុកដាក់។",
      aboutLead: "និស្សិតវិទ្យាសាស្ត្រកុំព្យូទ័រ ដែលផ្តោតលើផលិតផល Full-Stack ដែលអាចទុកចិត្តបាន និងបទពិសោធន៍ប្រើប្រាស់ល្អ។",
      aboutCardTitle: "បន្តិចអំពីខ្ញុំ",
      aboutParagraphOne: "ខ្ញុំជានិស្សិតឆ្នាំទី៣ ផ្នែកវិទ្យាសាស្ត្រកុំព្យូទ័រ នៅសាកលវិទ្យាល័យបៀលប្រាយ ក្នុងរាជធានីភ្នំពេញ ប្រទេសកម្ពុជា។ ខ្ញុំចូលចិត្តបម្លែងតម្រូវការជាក់ស្តែងទៅជាកម្មវិធីដែលងាយយល់ និងអាចទុកចិត្តបាន។",
      aboutParagraphTwo: "ចាប់ពីការរចនាមូលដ្ឋានទិន្នន័យ និងបង្កើត API ដែលមានសុវត្ថិភាព រហូតដល់ការកែលម្អចំណុចប្រទាក់ ខ្ញុំចូលចិត្តធ្វើការលើគ្រប់ផ្នែក និងរៀនជាមួយក្រុមវិស្វករ។",
      locationLabel: "ទីតាំង",
      availabilityLabel: "ភាពអាចរកបាន",
      internshipAvailable: "កម្មសិក្សា និងការងារ Freelance",
      educationLabel: "ការអប់រំ",
      degree: "បរិញ្ញាបត្រវិទ្យាសាស្ត្រកុំព្យូទ័រ",
      yearThree: "ឆ្នាំទី៣ · រាជធានីភ្នំពេញ ប្រទេសកម្ពុជា",
      coursework: "មុខវិជ្ជាសិក្សារួមមាន ការអភិវឌ្ឍកម្មវិធីវេប មូលដ្ឋានទិន្នន័យ កម្មវិធីតម្រង់ទិសវត្ថុ និងរចនាសម្ព័ន្ធទិន្នន័យ។",
      skillsLabel: "ជំនាញ",
      skillsTitle: "ជំនាញបច្ចេកទេស",
      skillsLead: "ឧបករណ៍ និងបច្ចេកវិទ្យាដែលខ្ញុំប្រើក្នុងការរចនា បង្កើត និងដាក់ឱ្យដំណើរការកម្មវិធី Full-Stack។",
      frontend: "ផ្នែក Frontend",
      backend: "ផ្នែក Backend",
      database: "មូលដ្ឋានទិន្នន័យ",
      databaseDesign: "ការរចនាមូលដ្ឋានទិន្នន័យ",
      tools: "ឧបករណ៍ និង DevOps",
      projectsLabel: "ស្នាដៃជ្រើសរើស",
      projectsTitle: "គម្រោងពិសេស",
      projectsLead: "ជម្រើសកម្មវិធី និងប្រព័ន្ធដែលខ្ញុំបានរចនា និងបង្កើត។",
      contactLabel: "ជំហានបន្ទាប់",
      contactTitle: "តោះបង្កើតអ្វីមួយជាមួយគ្នា។",
      contactLead: "ខ្ញុំកំពុងស្វែងរកឱកាសកម្មសិក្សា Full-Stack ឬគម្រោង Freelance។ មានឱកាស ឬគំនិតមែនទេ? សូមផ្ញើសារមកខ្ញុំ។",
      formName: "ឈ្មោះអ្នក / ក្រុមហ៊ុន",
      formEmail: "អាសយដ្ឋានអ៊ីមែល",
      formMessage: "សារ",
      namePlaceholder: "ឈ្មោះរបស់អ្នក",
      messagePlaceholder: "ប្រាប់ខ្ញុំអំពីឱកាសការងាររបស់អ្នក...",
      sendMessage: "ផ្ញើសារ",
      footer: "រចនា និងបង្កើតដោយ",
      editLabel: "កែសម្រួលផលប័ត្ររបស់អ្នក",
      editTitle: "កែប្រែព័ត៌មាន",
      yourName: "ឈ្មោះរបស់អ្នក",
      yourBio: "ជីវប្រវត្តិផ្នែកដើម",
      projectDetails: "ព័ត៌មានគម្រោង",
      projectOne: "ចំណងជើងគម្រោងទី១",
      projectTwo: "ចំណងជើងគម្រោងទី២",
      projectThree: "ចំណងជើងគម្រោងទី៣",
      projectDescription: "ការពិពណ៌នាគម្រោងទី១",
      projectDescriptionTwo: "ការពិពណ៌នាគម្រោងទី២",
      projectDescriptionThree: "ការពិពណ៌នាគម្រោងទី៣",
      cancel: "បោះបង់",
      saveChanges: "រក្សាទុកការផ្លាស់ប្តូរ",
      formSuccess: "សាររបស់អ្នករួចរាល់ក្នុងកម្មវិធីអ៊ីមែល។",
      formStorageError: "មិនអាចរក្សាទុកការផ្លាស់ប្តូរបានទេ។ សូមពិនិត្យការកំណត់ផ្ទុកទិន្នន័យរបស់កម្មវិធីរុករក។",
    },
  };

  const defaultProfile = {
    name: "Chea Kimty",
    bio: "Year 3 Computer Science student at Build Bright University. I build scalable web applications and APIs focused on speed, security, and clean UI.",
    project1Title: "Loan Management System",
    project1Description: "A full-stack application for managing borrowers, loan types, payment schedules, and interest calculations with role-based views.",
    project2Title: "Enterprise REST API & Dashboard",
    project2Description: "A full-stack CRUD solution with JWT authentication, data transfer objects, and a responsive React TypeScript frontend.",
    project3Title: "Inventory & POS Database System",
    project3Description: "A normalized relational system for products, suppliers, purchase orders, sales, and real-time stock movements.",
  };

  const profileStorageKey = "devPortfolioProfile";
  const preferencesStorageKey = "devPortfolioPreferences";
  let language = "en";
  let profile = { ...defaultProfile };
  let preferences = { theme: "dark", accent: "blue" };

  const readStoredObject = (key, fallback, allowedKeys) => {
    try {
      const saved = localStorage.getItem(key);
      if (!saved) return { ...fallback };
      const parsed = JSON.parse(saved);
      if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
        throw new TypeError(`Invalid data stored for ${key}`);
      }
      const result = { ...fallback };
      allowedKeys.forEach((field) => {
        if (typeof parsed[field] === "string") result[field] = parsed[field];
      });
      return result;
    } catch (error) {
      console.error(`Unable to read ${key} from localStorage.`, error);
      return { ...fallback };
    }
  };

  profile = readStoredObject(profileStorageKey, defaultProfile, Object.keys(defaultProfile));
  preferences = readStoredObject(
    preferencesStorageKey,
    preferences,
    ["theme", "accent"],
  );
  if (!["dark", "light"].includes(preferences.theme)) preferences.theme = "dark";
  if (!["blue", "indigo"].includes(preferences.accent)) preferences.accent = "blue";

  const applyTranslations = () => {
    const dictionary = translations[language];
    document.documentElement.lang = language;
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const value = dictionary[element.dataset.i18n];
      if (value !== undefined) element.textContent = value;
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      const value = dictionary[element.dataset.i18nPlaceholder];
      if (value !== undefined) element.placeholder = value;
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
      const value = dictionary[element.dataset.i18nAria];
      if (value !== undefined) element.setAttribute("aria-label", value);
    });
    document.getElementById("languageLabel").textContent = language === "en" ? "KM" : "EN";
    document.getElementById("languageToggle").setAttribute(
      "aria-label",
      language === "en" ? dictionary.switchToKhmer : dictionary.switchToEnglish,
    );
    document.getElementById("themeToggle").querySelector("span").textContent =
      preferences.theme === "dark" ? dictionary.lightTheme : dictionary.darkTheme;
    document.getElementById("themeToggle").querySelector("i").className =
      preferences.theme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon";
    const alert = document.getElementById("formAlert");
    if (!alert.hidden) alert.textContent = dictionary.formSuccess;
  };

  const renderProfile = () => {
    const nameParts = profile.name.trim().split(/\s+/).filter(Boolean);
    const first = nameParts.shift() || "";
    document.getElementById("heroName").replaceChildren(
      Object.assign(document.createElement("span"), {
        className: "name-first",
        textContent: first,
      }),
      document.createTextNode(" "),
      Object.assign(document.createElement("span"), {
        className: "name-last",
        textContent: nameParts.join(" "),
      }),
    );
    document.getElementById("heroName").setAttribute("aria-label", profile.name);
    document.getElementById("heroBio").textContent = profile.bio;
    document.getElementById("codeName").textContent = JSON.stringify(profile.name);
    document.querySelectorAll("[data-project-field]").forEach((element) => {
      const value = profile[element.dataset.projectField];
      if (value !== undefined) element.textContent = value;
    });
  };

  const applyPreferences = () => {
    document.documentElement.dataset.theme = preferences.theme;
    document.documentElement.dataset.accent = preferences.accent;
    document.querySelectorAll("[data-accent-choice]").forEach((button) => {
      button.setAttribute(
        "aria-pressed",
        String(button.dataset.accentChoice === preferences.accent),
      );
    });
    applyTranslations();
  };

  const savePreferences = () => {
    try {
      localStorage.setItem(preferencesStorageKey, JSON.stringify(preferences));
    } catch (error) {
      console.error("Unable to save appearance settings to localStorage.", error);
    }
  };

  const editorModal = document.getElementById("editorModal");
  const editorForm = document.getElementById("editorForm");
  const editorStatus = document.getElementById("editorStatus");
  const openEditorButton = document.getElementById("openEditor");
  const editorFields = [...editorForm.querySelectorAll("[name]")];
  let lastFocusedElement = null;

  const fillEditor = () => {
    editorFields.forEach((field) => {
      field.value = profile[field.name] || "";
    });
    editorStatus.hidden = true;
    editorStatus.textContent = "";
  };

  const setEditorPreview = () => {
    const updatedProfile = { ...profile };
    editorFields.forEach((field) => {
      updatedProfile[field.name] = field.value;
    });
    const previousProfile = profile;
    profile = updatedProfile;
    renderProfile();
    profile = previousProfile;
  };

  const closeEditor = (restorePreview) => {
    if (restorePreview) renderProfile();
    editorModal.hidden = true;
    document.body.classList.remove("modal-open");
    if (lastFocusedElement) lastFocusedElement.focus();
  };

  openEditorButton.addEventListener("click", () => {
    lastFocusedElement = document.activeElement;
    fillEditor();
    editorModal.hidden = false;
    document.body.classList.add("modal-open");
    editorFields[0].focus();
  });

  document.getElementById("closeEditor").addEventListener("click", () => closeEditor(true));
  document.getElementById("cancelEditor").addEventListener("click", () => closeEditor(true));
  editorModal.addEventListener("click", (event) => {
    if (event.target === editorModal) closeEditor(true);
  });

  editorForm.addEventListener("input", setEditorPreview);
  editorForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!editorForm.reportValidity()) return;
    const updatedProfile = {};
    editorFields.forEach((field) => {
      updatedProfile[field.name] = field.value.trim();
    });
    try {
      localStorage.setItem(profileStorageKey, JSON.stringify(updatedProfile));
      profile = updatedProfile;
      renderProfile();
      closeEditor(false);
    } catch (error) {
      console.error("Unable to save profile changes to localStorage.", error);
      editorStatus.textContent = translations[language].formStorageError;
      editorStatus.hidden = false;
    }
  });

  document.getElementById("languageToggle").addEventListener("click", () => {
    language = language === "en" ? "km" : "en";
    applyTranslations();
  });

  const settingsToggle = document.getElementById("settingsToggle");
  const settingsPanel = document.getElementById("settingsPanel");
  settingsToggle.addEventListener("click", () => {
    const isOpen = settingsPanel.hidden;
    settingsPanel.hidden = !isOpen;
    settingsToggle.setAttribute("aria-expanded", String(isOpen));
  });

  document.getElementById("themeToggle").addEventListener("click", () => {
    preferences.theme = preferences.theme === "dark" ? "light" : "dark";
    applyPreferences();
    savePreferences();
  });

  document.querySelectorAll("[data-accent-choice]").forEach((button) => {
    button.addEventListener("click", () => {
      preferences.accent = button.dataset.accentChoice;
      applyPreferences();
      savePreferences();
    });
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".settings-wrap") && !settingsPanel.hidden) {
      settingsPanel.hidden = true;
      settingsToggle.setAttribute("aria-expanded", "false");
    }
  });

  const menuToggle = document.getElementById("menuToggle");
  const primaryNav = document.getElementById("primaryNav");
  menuToggle.addEventListener("click", () => {
    const isOpen = primaryNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      translations[language][isOpen ? "navMenuClose" : "navMenuOpen"],
    );
    menuToggle.querySelector("i").className = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
  });
  primaryNav.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      primaryNav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", translations[language].navMenuOpen);
      menuToggle.querySelector("i").className = "fa-solid fa-bars";
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      if (!editorModal.hidden) closeEditor(true);
      if (!settingsPanel.hidden) {
        settingsPanel.hidden = true;
        settingsToggle.setAttribute("aria-expanded", "false");
      }
    }
  });

  document.getElementById("contactForm").addEventListener("submit", (event) => {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name")).trim();
    const email = String(formData.get("email")).trim();
    const message = String(formData.get("message")).trim();
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`Sender: ${name} (${email})\n\nMessage:\n${message}`);
    const alert = document.getElementById("formAlert");
    alert.textContent = translations[language].formSuccess;
    alert.hidden = false;
    window.location.href = `mailto:cheakimty65@gmail.com?subject=${subject}&body=${body}`;
  });

  renderProfile();
  applyPreferences();
});
