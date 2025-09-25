GroupAccountshelper
1.Theme
This project is built as part of the Backend Developer Intern Assignment.
The main objective was to design a secure, scalable REST API with authentication and role-based access, along with a basic frontend UI to demonstrate and interact with the APIs.

 2. what I have done ?
 Backend-first focus → Clean, modular REST APIs.
 Frontend UI → Built with React, including Context API + Protected Routes.
 Security → JWT-based authentication, password hashing, and role-based authorization.
 Scalability → Structured project design with errormiddlewares, validations, and extendability.

 3.TechStack
 Backend: Node.js, Express.js, MongoDB, Mongoose
 Authentication: JWT, bcrypt, httpOnly cookies
Frontend: React.js (with Context API & strict routes)
Error Handling: Express global error Middleware
Documentation: Postman Collection

 4.Authentication & Authorization

User Sign Up and Login APIs.
Passwords hashed with bcrypt.
JWT tokens stored in httpOnly cookies (secure handling).

Role-based access:
Admin can add, update, delete transactions.
Users can only view their transactions.

 Example :
Think of a friends group planning a trip.
The cashier (Admin) is the one who manages all expenses (add/edit/delete transactions).
The friends (Users) can only view the expenses and updates, but can’t directly modify them.
This ensures clear separation of responsibilities.

5.Admin Credentials
Email: admin@gmail.com
Password: admin
Role: admin

6.Future enhancements:
Redis caching for performance.
And also transactions according to user

7.How to run?
git clone <repo-url>

 Backend:-
 cd backend
npm install
npm run dev

Frontend:-
cd frontend
npm install
npm run dev

8.Conclusion

In this way i have developed all delivarables of the given assignment succesfully

 
