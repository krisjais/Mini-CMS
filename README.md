# 📝 Mini CMS Frontend

![Mini CMS Banner](https://placehold.co/800x200/png?text=Mini+CMS+Frontend) <!-- Optional Banner Placeholder -->

A modern, fast, and responsive frontend application for a Content Management System (CMS). This project interacts with a robust backend API to seamlessly manage and display articles.

---

## ✨ Features

- **Create Articles**: Easily compose and publish new articles.
- **View All Articles**: A clean, organized feed of all published content.
- **Read Single Article**: Dedicated, dynamically routed pages (`/article/[id]`) for reading individual articles.
- **Update Articles**: Edit existing articles to keep content fresh.
- **Delete Articles**: Remove outdated or unwanted content.
- **Responsive UI**: Beautiful, mobile-friendly design that looks great on all devices.

---

## 🛠️ Tech Stack

This project is built using modern web development technologies:

- **Framework:** [Next.js (App Router)](https://nextjs.org/)
- **Library:** [React](https://react.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Data Fetching:** Fetch API

---

## 📸 Screenshots

### Home Page
![Home Page Placeholder](Screenshot From 2026-03-27 10-16-14.png)

### Article Page
![Article Page Placeholder](https://placehold.co/600x400/png?text=Article+Page+Screenshot)

### Create Form
![Create Form Placeholder](https://placehold.co/600x400/png?text=Create+Form+Screenshot)

---

## 🚀 Installation & Setup

Follow these steps to run the application locally.

### 1. Clone the repository
```bash
git clone https://github.com/your-username/mini-cms-frontend.git
cd mini-cms-frontend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env.local` file in the root of your project and add the required environment variables (see below).

### 4. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 🔑 Environment Variables

To run this project, you will need to add the following environment variables to your `.env.local` file:

`NEXT_PUBLIC_API_URL`
- **Description:** The base URL of your backend API.
- **Example:** `http://localhost:5000/api`

---

## 🔌 API Connection

This frontend is designed to work with a dedicated backend API. Requests (GET, POST, PUT, DELETE) are made to the backend using the Native Fetch API. The base URL is determined by the `NEXT_PUBLIC_API_URL` environment variable.

---

## 📁 Folder Structure

A brief overview of the project's structure:

```text
cms-fronted/
├── public/             # Static assets (images, icons, etc.)
├── src/
│   ├── app/            # Next.js App Router directory
│   │   ├── page.js     # Home page displaying all articles
│   │   ├── layout.js   # Global layout and structural components
│   │   ├── globals.css # Global Tailwind CSS styles
│   │   └── ARTICLES/   
│   │       └── [id]/   # Dynamic routing for single articles
│   │           └── page.js
│   └── components/     # Reusable UI components
├── package.json        # Project metadata and dependencies
└── README.md           # Project documentation
```

---

## 🔗 Backend Repository

The backend for this project is built with Node.js, Express, and MongoDB.

👉 **[Link to Backend Repository](https://github.com/krisjais/Mini-CMS-backend)** _(Update with actual backend repository link)_

---

## 🔮 Future Improvements

Here are some features planned for future releases:

- [ ] **Authentication & Admin Panel**: Secure the CMS to restrict access to authorized users only.
- [ ] **Rich Text Editor**: Integrate tools like Quill or TipTap for advanced formatting capabilities.
- [ ] **Deployment Improvements**: Optimize the build process and add CI/CD pipelines.

---

## 👤 Author

**Vishesh Jaiswar**

---

*If you found this project helpful, please consider giving it a ⭐ on GitHub!*
