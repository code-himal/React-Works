# **REACT COURSE PROJECT Assignment Guidelines & Requirements** 

## **1. Overview** 

This assignment gives you hands-on practice building a complete, functioning single-page application using React.js. You will apply core concepts covered in class — components, props, state, hooks, event handling, and conditional/list rendering — to design, build, and document a real project from start to finish. 

Choose ONE project idea from the six options in Section 4, or propose your own idea for instructor approval at least one week before the deadline. 

## **2. Learning Objectives** 

By completing this project, you will be able to: 

- Structure a React application into reusable, well-organized components. 

- Manage and update application state using the useState and useEffect hooks. 

- Pass data between components using props, including callback functions. 

- Render lists and conditional content correctly, using proper key usage. 

- Handle user input and form events. 

- Style a responsive, user-friendly interface. 

- Use Git and GitHub to track progress with meaningful commits. 

- Write clear technical documentation (README) for a software project. 

## **3. General Requirements** 

### **3.1  Technical Requirements** 

   - Built with React (functional components only — no class components). 

   - Use at least 4–5 meaningful, reusable components (not everything in one file). 

   - Correct use of props for parent → child data flow. 

   - At least one interactive feature using the useState hook. 

   - At least one use of the useEffect hook (e.g. data fetching, timers, syncing with local storage). 

   - Proper list rendering with .map() and unique key props. 

   - At least one form with controlled input handling (onChange / onSubmit). 

   - Conditional rendering used appropriately (e.g. loading states, empty states, toggles). 

   - Basic client-side routing (React Router) if the project has more than one page/view — optional otherwise. 

   - Responsive layout that works reasonably well on both desktop and mobile widths. 

- **3.2  Code Quality Requirements** 

   - Consistent, readable code with meaningful variable, function, and component names. 

- Logical folder/file structure (e.g. /src/components, /src/assets, /src/hooks). 

- No unused variables, imports, or commented-out dead code in the final submission. 

- No console errors or warnings when the app is running. 

### **3.3  Documentation Requirements (README.md)** 

Your submission must include a README.md file in the project root containing: 

- Project title and a short (2–3 sentence) description. 

- List of features implemented. 

- Technologies/libraries used. 

- Setup instructions (npm install, npm run dev / npm start). 

- At least 2–3 screenshots of the running application. 

- Known limitations or features you did not have time to complete (if any). 

## **4. Choose Your Project** 

Select ONE of the six project options below. Each option lists the core features you must implement and optional “stretch goals” you can add for bonus marks. You may adapt small details (e.g. theme, categories) as long as the core functionality and complexity are preserved. 

### **<mark>Option 1: Personal Task Manager (To-Do App)</mark>** 

_A task-management app where users can add, organize, and track their daily to-dos, going beyond a basic to-do list with categories and persistence._ 

**Core Features (required):** 

- Add, edit, delete, and mark tasks as complete. 

- Filter tasks by status (All / Active / Completed). 

- Organize tasks into categories or tags (e.g. Work, Personal, Urgent). 

- Persist tasks using localStorage so data survives a page refresh. 

- Show a live count of remaining/completed tasks. 

#### **Stretch Goals (optional, for bonus marks):** 

- Drag-and-drop reordering of tasks. 

- Due dates with visual indicators for overdue tasks. 

- Dark/light theme toggle. 

### **<mark>Option 2: Personal Expense Tracker</mark>** 

_An app for logging income and expenses, viewing a running balance, and understanding spending habits at a glance._ 

#### **Core Features (required):** 

- Add transactions with amount, category, and description. 

- Display a running balance (income − expenses). 

- List all transactions with the ability to delete individual entries. 

- Filter/sort transactions by category or date. 

- Persist data using localStorage. 

#### **Stretch Goals (optional, for bonus marks):** 

- Simple chart (bar or pie) showing spending by category. 

- Monthly summary view. 

- Budget limit with a warning when exceeded. 

### **<mark>Option 3: Weather Dashboard</mark>** 

_A weather-lookup app that fetches live data from a public weather API and displays current conditions for a searched city._ 

#### **Core Features (required):** 

- Search for a city and fetch live weather data from a public API (e.g. OpenWeatherMap). 

- Display temperature, condition, humidity, and an appropriate icon. 

- Handle loading and error states (e.g. city not found, network error). 

- Maintain a short search history the user can revisit. 

#### **Stretch Goals (optional, for bonus marks):** 

- 5-day forecast view. 

- Toggle between °C and °F. 

- Automatically detect the user's location using the Geolocation API. 

### **<mark>Option 4: Recipe Finder App</mark>** 

_A recipe discovery app where users search for dishes by name or ingredient using a public recipe API and save favorites._ 

**Core Features (required):** 

- Search recipes by name or ingredient using a public API (e.g. TheMealDB, Spoonacular). 

- Display results in a responsive card grid with image, title, and short details. 

- View full details (ingredients, instructions) for a selected recipe. 

- Mark/unmark recipes as favorites, persisted with localStorage. 

- Handle loading and “no results found” states. 

#### **Stretch Goals (optional, for bonus marks):** 

- Filter results by category or cuisine. 

- Dedicated “Favorites” page/view using React Router. 

- Basic pagination or “load more” functionality. 

### **<mark>Option 5: Mini E-Commerce Product Catalog & Cart</mark>** 

_A simplified storefront where users browse a product catalog, filter items, and manage a shopping cart — all handled with local/mock data (no real payments)._ 

#### **Core Features (required):** 

- Display a catalog of products (name, price, image, category) from local mock data or a public API. 

- Filter products by category and/or search by name. 

- Add items to a cart, update quantities, and remove items. 

- Show a running cart total and item count. 

- Use React Router for at least two views (e.g. Catalog and Cart). 

#### **Stretch Goals (optional, for bonus marks):** 

- Sort products by price or name. 

- Simple checkout summary screen (no real payment processing needed). 

- Persist cart contents using localStorage. 

### **<mark>Option 6: Movie / Book Library App</mark>** 

_A library-style app for searching movies or books via a public API, viewing details, and building a personal “watchlist” or “to-read” list._ 

**Core Features (required):** 

- Search movies or books using a public API (e.g. OMDb, Google Books). 

- Display results in a card/grid layout with poster/cover, title, and year. 

- View more details for a selected item. 

- Add/remove items from a personal list (Watchlist / To-Read), persisted with localStorage. 

- Handle empty, loading, and error states gracefully. 

#### **Stretch Goals (optional, for bonus marks):** 

- Rating or personal notes field for saved items. 

- Separate route/page for the saved list using React Router. 

- Sort saved items by title, year, or date added. 

### **4.7  Proposing a Custom Project** 

If none of the above options interest you, you may propose your own idea. It must match or exceed the complexity of the options above and be approved by the instructor in writing at least one week before the deadline. Unapproved custom projects may not be accepted for grading. 

## **5. Submission Guidelines** 

1. Push your complete project to a public GitHub repository. Commit history must show incremental progress (a minimum of 8–10 commits with clear messages) — do not submit a single “final commit.” 

2. Include the README.md described in Section 3.3 in the repository root. 

3. (Optional but recommended) Deploy your app using a free service such as Vercel, Netlify, or GitHub Pages, and include the live link in your README. 

4. Submit the GitHub repository link (and live link, if any) through the course submission portal / LMS before the deadline. 

5. Ensure the app runs locally with npm install followed by npm run dev (or npm start) with no build errors. 

## **6. Academic Integrity** 

You may use documentation, tutorials, and AI tools to learn concepts, but the submitted code must reflect your own understanding and implementation. You should be able to explain any part of your code if asked. Copying another student's project or submitting code you cannot explain will be treated as an academic integrity violation. 

**_Good luck — build something you're proud to show in your portfolio!_** 

