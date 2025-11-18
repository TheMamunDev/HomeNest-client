# HomeNest: Your Modern Real Estate Platform

**HomeNest** is a dynamic, user-friendly real estate listing platform designed
to simplify the process of finding, renting, or selling property. It offers
property owners seamless management tools and provides users with powerful
search and filtering capabilities.

## Live Site URL

[https://homenest-mt.netlify.app/]

## Key Features

HomeNest is built using modern React principles and a powerful design stack,
ensuring a fast, aesthetic, and functional experience:

- **Custom Dynamic Theme:** Implemented dynamic **Light and Dark Mode** toggling
  using DaisyUI.

- **Secure Property Management:** Features **Protected Routes** requiring
  authentication for owners to access and use the complete **CRUD
  functionality** (Create, Read, Update, Delete) for their property listings via
  intuitive forms and confirmation modals.

- **Advanced Property Browsing:** Users can efficiently browse all properties
  and utilize an integrated **Search and Filter** component to query listings by
  Property Name, Price Range, and Property Category, ensuring highly targeted
  results. Users can filter the property by price low to high , price high to
  low and the latest property using **Sort**

- **User Engagement & Trust:** Includes a dedicated **Ratings & Reviews System**
  integrated into the property details pages, allowing authenticated users to
  submit, view, and manage their valuable feedback.

- **Fully Responsive Design (Mobile-First):** Built with **Tailwind
  CSS**,**DaisyUi**, **Shadcn UI**,guaranteeing a visually stunning and
  perfectly aligned layout on all devices (mobile, tablet, and desktop).

- **Optimized Owner Workflow:** The dedicated **Add Property** and **My
  Properties** pages streamline the listing process, giving owners full control
  over their portfolio on the platform.

---

## User Experience & Design

We focused on creating an interface that feels both **professional and
intuitive**. All interactive elements, from the navigation bar to the listing
cards, adhere to a strict set of design rules to prevent visual clutter and
guarantee a smooth user journey. Crucially, the site is designed to be **fully
accessible and functional** on any screen size, whether you're listing a
property on a desktop or browsing rentals on a smartphone.

---

## Technology Stack

HomeNest relies on a robust and modern stack to deliver a high-quality
single-page application:

- **Frontend Framework:** **React**—Used for building component-based,
  high-performance user interfaces.

- **Backend:** **Node JS, Express ,MongoDB**—Used for building api server with
  Mongodb and express JS .

- **Authentication :** **Custom Context/Hooks**—Designed with a decoupled
  mock-authentication system, ready for seamless integration with backends using
  **Firebase Authentication**.

- **Styling:** **Tailwind CSS + DaisyUI + Shadcn**—Utilized for utility-first
  rapid styling, providing built-in components and managing the dynamic theme
  switching logic.

- **Routing:** **React Router**—Handles client-side navigation and securely
  manages private/protected routes (`/add-property`,
  `/my-ratings`,`/my-properties`,`/propertie-details`).

- **Animations:** **AOS (Animate On Scroll)**—Adds engaging scroll animations to
  improve visual flow and modern aesthetic.

- **Notifications:** **React-Toastify & SweetAlert**—Provides non-intrusive
  feedback (Toastify) and crucial confirmation dialogs (SweetAlert) for a
  superior user experience.

---

### Dependencies

```bash
  "dependencies": {
    "@fortawesome/fontawesome-svg-core": "^7.0.1",
    "@fortawesome/free-brands-svg-icons": "^7.0.1",
    "@fortawesome/free-regular-svg-icons": "^7.0.1",
    "@fortawesome/free-solid-svg-icons": "^7.0.1",
    "@fortawesome/react-fontawesome": "^3.0.2",
    "@radix-ui/react-dropdown-menu": "^2.1.16",
    "@radix-ui/react-slot": "^1.2.4",
    "@radix-ui/react-toggle": "^1.1.10",
    "@tailwindcss/vite": "^4.1.13",
    "@tanstack/react-query": "^5.90.7",
    "aos": "^2.3.4",
    "axios": "^1.13.2",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "firebase": "^12.5.0",
    "lucide-react": "^0.553.0",
    "react": "^19.1.1",
    "react-dom": "^19.1.1",
    "react-icons": "^5.5.0",
    "react-rating": "^2.0.5",
    "react-router": "^7.9.3",
    "react-router-dom": "^7.9.5",
    "react-spinners": "^0.17.0",
    "react-toastify": "^11.0.5",
    "sweetalert2": "^11.26.3",
    "tailwind-merge": "^3.4.0",
    "tailwindcss": "^4.1.13"
  },
```

### 🚀 Getting Started (Local Setup)

To view and run this project locally, follow these simple steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/TheMamunDev/HomeNest-client.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd HomeNest-client
    ```
3. **Change The Firebase Config**
    Change firebase config in firebase.init.js
   
5. **Run**
   ```bash
   npm install
   npm run dev
   ```
### 👨‍💻 Author

This project was developed by **Mahmud Hasan Mamun**.

* **GitHub:** [@TheMamunDev](https://github.com/TheMamunDev)




    
