🌐 LIVE: https://infosys-cs.vercel.app/

# InfoSysCS: AI-Powered Qualitative Data Analysis Assistant 🤖

InfoSysCS is a modern web application designed to streamline qualitative data analysis for researchers, evaluators, and responders. Leveraging the power of OpenAI's Davinci model, InfoSysCS automates the extraction of themes and patterns from interview scripts and discussion transcripts, delivering comprehensive thematic reports in minutes instead of days.

---

## 🚀 Key Features

### For Researchers & Users
- **AI-Powered Thematic Analysis:** Instant generation of reports with key themes and supporting quotes.
- **Multi-Format Support:** Upload up to 5 files at once (PDF or DOCX).
- **Personal Dashboard:** Manage your analysis history, track report status, and update your profile.
- **Interactive Reports:** View detailed breakdowns of AI-generated insights.
- **Feedback Loop:** Provide feedback on AI accuracy to help improve the system.

### For Administrators
- **User Management:** Oversee all registered researchers and their activity.
- **Global Report Oversight:** Access and manage all generated reports across the platform.
- **Role-Based Security:** Secure access control for administrative functions.

---

## 🛠️ Technology Stack

- **Frontend:** [Next.js](https://nextjs.org/) (React 18)
- **UI & Styling:** [Material UI (MUI)](https://mui.com/) with custom theming
- **State Management:** [Redux Toolkit](https://redux-toolkit.js.org/) with `redux-persist` for session stability
- **AI Integration:** OpenAI API (Davinci Module)
- **API Communication:** Axios with a centralized service layer
- **Date Utilities:** Dayjs

---

## 📂 Project Structure

```text
src/
├── api/            # Centralized API service modules (Auth, Reports, etc.)
├── components/     # Modular UI components organized by feature
│   ├── Admin/      # Admin-specific dashboards and lists
│   ├── Auth/       # Authentication flow (Login, Register, Modals)
│   ├── Dashboard/  # User-facing home and report history
│   ├── FileUploader/ # Core logic for file processing
│   └── UI/         # Reusable design system components
├── pages/          # Next.js file-based routing and SSR logic
├── store/          # Redux store configuration and slices
├── styles/         # Global and module-specific CSS
├── theme/          # Custom MUI theme definitions
└── utils/          # Shared helper functions
public/             # Static assets (images, icons, global configs)
```

---

## ⚙️ Getting Started

### Prerequisites
- Node.js (Latest LTS recommended)
- A running backend service (Expected at `http://localhost:3050/api/v1`)

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development
Start the development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build & Production
To create an optimized production build:
```bash
npm run build
npm start
```

---

## 🧠 Architecture & Patterns

- **Server-Side Rendering (SSR):** Utilized for secure authentication checks and pre-fetching data to ensure a fast initial load.
- **Decoupled API Layer:** All backend interactions are abstracted into the `src/api` directory for easier maintenance and testing.
- **State Persistence:** User sessions and critical application state are maintained across reloads using Redux Persist.
- **Centralized Design System:** Consistent look and feel achieved through a global MUI theme provider.

---

## 🛡️ Security & Roles
InfoSysCS implements role-based access control (RBAC):
- **User Role:** Standard access to upload data and view personal reports.
- **Admin Role:** Elevated privileges to manage the platform's user base and all generated data.

---

Whether you are conducting academic research or evaluating development programs, InfoSysCS provides a professional, scalable solution for qualitative analysis.

**Happy Analyzing!**
