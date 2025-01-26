# Recipe Finder


## Overview

**Recipe Finder** is a modern web application built using **Vite + React**. It leverages the **Spoonacular API** to fetch recipes dynamically. The application offers users a seamless experience to explore recipes categorized under sections like:

- Popular
- Vegetarian
- Main Course
- Breakfast
- Drinks

With its user-friendly search functionality, users can search for recipes based on their preferences. Each recipe is displayed as an interactive card, and clicking on a card opens detailed information about the recipe. Additionally, users can explore recipes by selecting cuisine options such as:

- Indian
- Italian
- American
- Thai
- Japanese

Clicking on any cuisine option fetches and displays recipes specific to that cuisine.

---

## Live Preview

Check out the live preview of the application here: [Recipe Finder Live](https://recipe-finder-app-swart.vercel.app/)

---

## Features

- **Categorized Recipes**: Browse recipes by categories such as popular, vegetarian, main course, breakfast, and drinks.
- **Cuisine Options**: Explore recipes by selecting from cuisines like Indian, Italian, American, Thai, and Japanese.
- **Search Functionality**: Search for recipes using keywords.
- **Detailed Recipe View**: Each card opens a detailed page showing:
  - **Information**: Summary and detailed recipe instructions.
  - **Ingredients**: A list of ingredients needed for the recipe.
- **Interactive Design**: User-friendly interface with responsive cards and tabs.

---

## Tech Stack

- **Frontend**: Vite, React
- **API Integration**: Spoonacular API
- **Styling**: CSS, Styled-Components
- **Build Tool**: Vite
- **Animation**: Framer Motion
- **Routing**: React Router
- **UI Components**: SplideJS, React Icons

---

## Installation

Follow these steps to set up the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/Sushant2253/Recipe.git
   ```

2. Navigate to the project directory:
   ```bash
   cd recipe-finder
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Set up environment variables by creating a `.env` file:
   ```
   VITE_SPOONACULAR_API_KEY=your_api_key
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

---

## Usage

1. Open your browser and go to `http://localhost:3000`.
2. Use the navigation menu to explore different recipe categories.
3. Use the search bar on the home page to find recipes by keyword.
4. Select a cuisine option (e.g., Indian, Italian, etc.) to view recipes from that specific cuisine.
5. Click on any recipe card to view detailed information about the recipe and ingredients.

---

## Screenshots

1. Home Page
![Homepage Screenshot](https://github.com/Sushant2253/Recipe/blob/main/Recipe-Home.png)

2. Recipe Details
![Recipe Details Screenshot](https://github.com/Sushant2253/Recipe/blob/main/Recipe-Details.png)

3. Cuisine
![Cuisine Screenshot](https://github.com/Sushant2253/Recipe/blob/main/Recipe-Cuisine.png)


---


## Contact

For any inquiries, reach out at:

- Email: sushantumap1234@gmail.com

---

## Acknowledgements

- [Spoonacular API](https://spoonacular.com/food-api) - Used for fetching recipe data.
- [Framer Motion](https://www.framer.com/motion/) - Used for animations.
- [SplideJS](https://splidejs.com/) - Used for carousel components.
- [React Icons](https://react-icons.github.io/react-icons/) - Used for icons.
- Inspiration from various recipe platforms.
