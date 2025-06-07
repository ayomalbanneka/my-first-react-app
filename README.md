# My First React App

A simple React application that allows users to search for movies and tracks trending searches using a MySQL database. Trending movies are displayed based on the number of searches.

## Features

- Search for movies
- Store search counts in a MySQL database
- Display trending movies by search count
- Modern React frontend
- Node.js/Express backend API

## Project Structure

```
my-first-react-app/
├── src/
│   ├── components/
│   │   └── TrendingMovies.jsx
│   ├── App.jsx
│   └── appWrite.js
├── server/
│   └── index.js
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- MySQL server

### 1. Clone the Repository

```sh
git clone https://github.com/yourusername/my-first-react-app.git
cd my-first-react-app
```

### 2. Install Frontend Dependencies

```sh
npm install
```

### 3. Set Up the Backend

1. Go to the `server` folder:
    ```sh
    cd server
    ```
2. Create a `.env` file or update `index.js` with your MySQL credentials.

3. Create the database table in MySQL:
    ```sql
    CREATE TABLE search_counts (
      id INT AUTO_INCREMENT PRIMARY KEY,
      searchTerm VARCHAR(255) NOT NULL,
      count INT DEFAULT 1,
      movie_id INT,
      poster_url VARCHAR(255)
    );
    ```

4. Start the backend server:
    ```sh
    node index.js
    ```

### 4. Start the Frontend

From the project root:

```sh
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173) (or as indicated by Vite).

## Usage

- Search for movies using the search bar.
- The backend records each search in the MySQL database.
- Trending movies are displayed based on the most searched terms.

## Configuration

- Update MySQL connection settings in `server/index.js`.
- The backend runs on port `3001` by default.

## Troubleshooting

- Ensure MySQL is running and accessible.
- Check backend logs for database connection errors.

## License

MIT
