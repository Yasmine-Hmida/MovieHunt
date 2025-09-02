# MovieHunt

**MovieHunt** is a React-based movie app that helps you find movies (like Netflix) and mark them as favorite. Built with React in which I used the API "TMDB" for fetching the movies and their corresponding informations.

---

## 🚀 Features

- Search for Movies.
- Mark movies as favorites to access them later.
- Mark habits as complete for each day.
- Responsive and smooth UI.
- Built using:
  - `useState`
  - `react-router-dom`
  - `props`
  - `useEffect`
  - `useContext`
  - `TMDB API`

---

## 📸 Screenshots

<img width="1920" height="865" alt="Screenshot (427)" src="https://github.com/user-attachments/assets/1f0accfa-fd55-4c09-9802-9da5cfd6630e" />
<img width="1920" height="858" alt="Screenshot (428)" src="https://github.com/user-attachments/assets/97b0aabf-ff2b-43b7-95c6-2109255f426a" />
<img width="1920" height="862" alt="Screenshot (429)" src="https://github.com/user-attachments/assets/8867219d-854b-464d-bf5b-8f7f1af0e05f" />
  
---

## 🛠️ Installation

### API Key Setup

This project requires an API key to access the TMDB service. For security reasons, the API key is **not included** in this repository.

#### Steps to Run the Project

1. **Get your own API key:**

   - Register or sign up at TMDB to obtain your personal API key.

2. **Create a `.env` file:**

   - Create a `.env` file in the project root (you can use `touch` or create it manually):
     ```bash
     touch .env
     ```
   - Open `.env` and replace the placeholder values with your actual API key and base URL:
     ```
     VITE_API_KEY=your_actual_api_key_here
     VITE_BASE_URL=https://api.themoviedb.org/3
     ```

3. **Run the project:**

   - The application will automatically load the API key and base URL from your `.env` file.
   - Make sure to keep your `.env` file private and **do not push it** to any public repository.

#### Running the Code

To run the project locally:

```bash
git clone https://github.com/Yasmine-Hmida/MovieHunt.git
cd MovieHunt
npm install
npm run dev
