import { create } from "zustand";

type Locale = "vi" | "en";

const translations: Record<Locale, Record<string, string>> = {
  vi: {
    // Nav
    "nav.about": "Giới thiệu",
    "nav.skills": "Kỹ năng",
    "nav.projects": "Dự án",
    "nav.experience": "Kinh nghiệm",
    "nav.contact": "Liên hệ",
    "nav.theme.light": "Chuyển sang chế độ sáng",
    "nav.theme.dark": "Chuyển sang chế độ tối",
    "nav.menu.open": "Mở menu",
    "nav.menu.close": "Đóng menu",
    "nav.lang.tooltip": "Chuyển sang tiếng Anh",

    // Hero
    "hero.badge": "Có sẵn cho cơ hội mới",
    "hero.greeting": "Xin chào, mình là",
    "hero.role": "Full Stack Engineer",
    "hero.cta.projects": "Xem dự án",
    "hero.cta.contact": "Liên hệ",

    // About
    "about.label": "Giới thiệu",
    "about.title": "Về mình",
    "about.description":
      "Một chút về nền tảng và đam mê của mình trong thế giới công nghệ.",
    "about.p1":
      "Mình là một Full Stack Engineer với đam mê xây dựng các ứng dụng web hiện đại, hiệu quả và mang lại trải nghiệm tuyệt vời cho người dùng. Mình có kinh nghiệm làm việc với nhiều công nghệ khác nhau từ frontend đến backend.",
    "about.p2":
      "Mình luôn tìm kiếm cơ hội để học hỏi và phát triển, đồng thời đóng góp vào các dự án ý nghĩa. Hãy cùng nhau tạo nên những sản phẩm tuyệt vời!",
    "about.p3":
      "Ngoài lập trình, mình thích {/* thêm sở thích của bạn ở đây */}. Mình tin rằng sự cân bằng giữa công việc và cuộc sống giúp mình sáng tạo và hiệu quả hơn.",
    "about.years": "năm kinh nghiệm",
    "about.projects": "dự án hoàn thành",
    "about.certificates": "chứng chỉ",

    // Skills
    "skills.label": "Kỹ năng",
    "skills.title": "Tech Stack",
    "skills.description": "Các công nghệ và công cụ mình sử dụng hàng ngày.",
    "skills.frontend": "Frontend Development",
    "skills.backend": "Backend Development",
    "skills.database": "Database Design",
    "skills.devops": "DevOps & Cloud",

    // Projects
    "projects.label": "Dự án",
    "projects.title": "Các dự án nổi bật",
    "projects.description":
      "Một số dự án public trên GitHub.",
    "projects.engvocab.title": "EngVocab",
    "projects.engvocab.description":
      "Web học tiếng Anh song ngữ: ôn từ vựng, luyện TOEIC, dictation và theo dõi tiến độ. Next.js client + NestJS API, PostgreSQL.",
    "projects.ownlish.title": "Ownlish",
    "projects.ownlish.description":
      "Nền tảng học tiếng Anh thế hệ sau EngVocab: web Next.js, API NestJS/Prisma, kèm app desktop Tauri.",
    "projects.pharmacy.title": "Pharmacy Inventory",
    "projects.pharmacy.description":
      "Hệ thống kho và cấp phát nhà thuốc (Django): lô hàng, hạn dùng, đơn thuốc, nhập/xuất kho theo vai trò.",
    "projects.datathon.title": "VinUni Datathon 2026",
    "projects.datathon.description":
      "Bài dự thi Round 1 — phân tích doanh thu và dự báo bán hàng cho công ty thời trang e-commerce giả lập.",
    "projects.placeholder.title": "Dự án {{n}}",
    "projects.placeholder.description":
      "Mô tả dự án của bạn sẽ nằm ở đây. Hãy thêm chi tiết về chức năng, công nghệ sử dụng và vai trò của bạn.",
    "projects.image": "Hình ảnh dự án",
    "projects.live": "Xem live",
    "projects.code": "Xem source code",

    // Experience
    "experience.label": "Kinh nghiệm",
    "experience.title": "Hành trình của mình",
    "experience.description": "Những cột mốc quan trọng trong sự nghiệp.",
    "experience.work": "Kinh nghiệm làm việc",
    "experience.role": "Vị trí công việc",
    "experience.company": "Tên công ty",
    "experience.period": "20XX - Hiện tại",
    "experience.period.end": "20XX - 20XX",
    "experience.work.description":
      "Mô tả ngắn gọn về vai trò, trách nhiệm và những đóng góp chính của bạn tại đây.",
    "experience.education": "Học vấn",
    "experience.degree": "Kỹ sư Công nghệ Logistics",
    "experience.school": "Đại học Kinh tế TP. Hồ Chí Minh (UEH)",
    "experience.school.period": "20XX - 20XX",
    "experience.certificates": "Chứng chỉ",
    "experience.certificates.placeholder": "Thêm chứng chỉ của bạn ở đây",

    // Contact
    "contact.label": "Liên hệ",
    "contact.title": "Hãy kết nối với mình",
    "contact.description":
      "Bạn có dự án thú vị hoặc muốn cùng hợp tác? Hãy liên hệ với mình nhé!",
    "contact.intro":
      "Mình luôn sẵn sàng lắng nghe và trao đổi về các cơ hội hợp tác, dự án mới, hoặc đơn giản là kết nối với những người đồng nghiệp trong ngành.",
    "contact.find_me": "Tìm mình trên:",
    "contact.email.label": "Email",
    "contact.email.value": "thanminhnghia3@gmail.com",
    "contact.location.label": "Địa điểm",
    "contact.location.value": "Việt Nam",
    "contact.form.name": "Tên",
    "contact.form.name.placeholder": "Tên của bạn",
    "contact.form.email": "Email",
    "contact.form.email.placeholder": "email@example.com",
    "contact.form.subject": "Tiêu đề",
    "contact.form.subject.placeholder": "Chủ đề tin nhắn",
    "contact.form.message": "Tin nhắn",
    "contact.form.message.placeholder": "Nội dung tin nhắn của bạn...",
    "contact.form.submit": "Gửi tin nhắn",

    // Footer
    "footer.copyright": "Tất cả quyền được bảo lưu.",
  },
  en: {
    // Nav
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.contact": "Contact",
    "nav.theme.light": "Switch to light mode",
    "nav.theme.dark": "Switch to dark mode",
    "nav.menu.open": "Open menu",
    "nav.menu.close": "Close menu",
    "nav.lang.tooltip": "Switch to Vietnamese",

    // Hero
    "hero.badge": "Open to new opportunities",
    "hero.greeting": "Hi, I'm",
    "hero.role": "Full Stack Engineer",
    "hero.cta.projects": "View Projects",
    "hero.cta.contact": "Contact Me",

    // About
    "about.label": "About",
    "about.title": "About Me",
    "about.description":
      "A bit about my background and passion in the tech world.",
    "about.p1":
      "I'm a Full Stack Engineer passionate about building modern, efficient web applications that deliver great user experiences. I have experience working with various technologies across the frontend and backend.",
    "about.p2":
      "I'm always looking for opportunities to learn, grow, and contribute to meaningful projects. Let's build something amazing together!",
    "about.p3":
      "Besides coding, I enjoy {/* add your hobbies here */}. I believe that a good work-life balance makes me more creative and productive.",
    "about.years": "years of experience",
    "about.projects": "projects completed",
    "about.certificates": "certificates",

    // Skills
    "skills.label": "Skills",
    "skills.title": "Tech Stack",
    "skills.description": "Technologies and tools I use on a daily basis.",
    "skills.frontend": "Frontend Development",
    "skills.backend": "Backend Development",
    "skills.database": "Database Design",
    "skills.devops": "DevOps & Cloud",

    // Projects
    "projects.label": "Projects",
    "projects.title": "Featured Projects",
    "projects.description":
      "Selected public projects from GitHub.",
    "projects.engvocab.title": "EngVocab",
    "projects.engvocab.description":
      "Bilingual English-learning web app: vocabulary review, TOEIC practice, dictation, and progress tracking. Next.js client + NestJS API on PostgreSQL.",
    "projects.ownlish.title": "Ownlish",
    "projects.ownlish.description":
      "Next-generation English-learning platform after EngVocab: Next.js web, NestJS/Prisma API, plus a Tauri desktop app.",
    "projects.pharmacy.title": "Pharmacy Inventory",
    "projects.pharmacy.description":
      "Django pharmacy inventory and dispensing system: batches, expiry dates, prescriptions, and role-based stock workflows.",
    "projects.datathon.title": "VinUni Datathon 2026",
    "projects.datathon.description":
      "Round 1 submission — revenue analysis and sales forecasting for a simulated Vietnamese fashion e-commerce company.",
    "projects.placeholder.title": "Project {{n}}",
    "projects.placeholder.description":
      "Your project description goes here. Add details about features, tech stack used, and your role.",
    "projects.image": "Project image",
    "projects.live": "View live",
    "projects.code": "View source code",

    // Experience
    "experience.label": "Experience",
    "experience.title": "My Journey",
    "experience.description": "Key milestones in my career.",
    "experience.work": "Work Experience",
    "experience.role": "Job Title",
    "experience.company": "Company Name",
    "experience.period": "20XX - Present",
    "experience.period.end": "20XX - 20XX",
    "experience.work.description":
      "Brief description of your role, responsibilities, and key contributions.",
    "experience.education": "Education",
    "experience.degree": "Engineer in Logistics Technology",
    "experience.school": "University of Economics Ho Chi Minh City (UEH)",
    "experience.school.period": "20XX - 20XX",
    "experience.certificates": "Certificates",
    "experience.certificates.placeholder": "Add your certificates here",

    // Contact
    "contact.label": "Contact",
    "contact.title": "Get In Touch",
    "contact.description":
      "Have an exciting project or want to collaborate? Let's connect!",
    "contact.intro":
      "I'm always open to discussing collaborations, new projects, or simply connecting with fellow developers in the industry.",
    "contact.find_me": "Find me on:",
    "contact.email.label": "Email",
    "contact.email.value": "thanminhnghia3@gmail.com",
    "contact.location.label": "Location",
    "contact.location.value": "Vietnam",
    "contact.form.name": "Name",
    "contact.form.name.placeholder": "Your name",
    "contact.form.email": "Email",
    "contact.form.email.placeholder": "email@example.com",
    "contact.form.subject": "Subject",
    "contact.form.subject.placeholder": "Message subject",
    "contact.form.message": "Message",
    "contact.form.message.placeholder": "Your message...",
    "contact.form.submit": "Send Message",

    // Footer
    "footer.copyright": "All rights reserved.",
  },
};

interface I18nStore {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: (key: string) => string;
}

export const useI18n = create<I18nStore>((set, get) => ({
  locale: "vi",
  setLocale: (locale) => set({ locale }),
  toggleLocale: () =>
    set((state) => ({ locale: state.locale === "vi" ? "en" : "vi" })),
  t: (key: string) => {
    const { locale } = get();
    return translations[locale][key] ?? key;
  },
}));
