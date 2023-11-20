# MIT - Test Backend Dev

## Question 1 (printPattern)

```
1 2 3 4 5
2 4 6 8 10
3 6 9 12 15
4 8 12 16 20
5 10 15 20 25
```

The `printPattern` function is a JavaScript function that prints a pattern of numbers. The pattern printed is a multiplication table where rows and columns start from 1 to 5.

### How to use

1. Make sure you have Node.js installed on your system.

2. Run this command:

   ```
   node pattern/pattern.js
   ```

3. The function will print the following number pattern to the console:
   ```
   1 2 3 4 5
   2 4 6 8 10
   3 6 9 12 15
   4 8 12 16 20
   5 10 15 20 25
   ```

## Question 2 (Wedding Guestbook Application)

This Wedding Guest Book application is a backend system that allows guests to add themselves to the guest list and provide notes. The app also provides an administrative interface to manage such data.

### Features

- **Guest Form**: Allows guests to add their name, address, phone number, and notes.
- **Note Gallery**: Displays all notes from the guest filtered only the name & notes attributes for guests.
- **Authentication**: Register, Login, and logout process for admin using JWT.
- **Admin Interface**: Allows admin to manage all guest data.

### Technology Used

- Node.js
- Express.js
- SQLite
- JWT for authentication
- Bcrypt for password hash
- ENV as environment variable (secret code store)

### Environment Preparation

Before running the application, make sure you have Node.js and npm installed on your system. In addition, you will need SQLite for database management.

### Installation

To install the app, follow these steps:

1. Clone repository:
   ```
   git clone https://github.com/fatah-illah/MIT---Test-Backend-Dev.git
   ```
2. Create a .env file and customize its contents with the example in the .env.example file
3. Install the NPM dependencies:
   ```
   npm install
   ```
4. Set up a database:
   ```
   node database/init-db.js
   ```

### Usage

To run the server:

```
npm start
```

The server will run on http://localhost:3000.

### API Endpoints

#### Guest

- **Add New Guests Data**: `POST /guest/add`
- **Show Note Gallery**: `GET /guest/notes`

#### Admin

- **Register**: `POST /admin/register`
- **Login**: `POST /admin/login`
- **Logout**: `POST /admin/logout`
- **Get Guests Data**: `GET /admin/manage`
- **Get Guests Data by id**: `GET /admin/manage/:id`
- **Update Guests Data by id**: `PUT /admin/manage/:id`
- **Delete Guests Data by id**: `DELETE /admin/manage/:id`
