EazyWed: Where Elegance Meets Joy
EazyWed is a comprehensive wedding planning platform built with the MERN stack (MongoDB, Express.js, React.js, Node.js). It simplifies the wedding planning process by providing tools for vendor booking, budget management, digital invitations, and personalized recommendations, making it easier for users to plan their special day with elegance and joy.
Team Members

M. Hammad Ur Rehman (L1F21BSCS0021)
Amir Sohail (L1F21BSCS0999)
Rana M. Umar Nazir (L1F21BSCS0196)

Features

Vendor Booking and Management: Browse, compare, and book wedding vendors directly through the platform.
Personalized Recommendations: Receive tailored vendor suggestions based on preferences, location, and budget.
Real-Time Budget Tracking: Manage and monitor your wedding budget with dynamic updates.
Customizable Digital Invitations: Design and send personalized wedding invitations using a variety of templates.
User and Vendor Profiles: Manage wedding plans or showcase services with dedicated profiles.
Feedback and Review System: Rate and review vendors to help future users make informed decisions.

Technology Stack

MongoDB: NoSQL database for storing application data.
Express.js: Web framework for building the backend API.
React.js: JavaScript library for building the user interface.
Node.js: JavaScript runtime for the backend server.

File Structure
EazyWed/
├── backend/
│   ├── config/
│   │   ├── db.js
│   │   └── env.js
│   ├── controllers/
│   │   ├── adminController.js
│   │   ├── authController.js
│   │   ├── cardTemplateController.js
│   │   ├── dashboardController.js
│   │   ├── publicController.js
│   │   ├── userController.js
│   │   ├── vendorController.js
│   │   └── vendorServiceController.js
│   ├── middleware/
│   │   ├── auth.js
│   │   ├── cardNormalizer.js
│   │   ├── logger.js
│   │   ├── serviceNormalizer.js
│   │   └── vendorNormalizer.js
│   ├── models/
│   │   ├── Admin.js
│   │   ├── BlockedUsers.js
│   │   ├── Booking.js
│   │   ├── CardTemplate.js
│   │   ├── ContactMessage.js
│   │   ├── Estimation.js
│   │   ├── OTP.js
│   │   ├── Recommendation.js
│   │   ├── Review.js
│   │   ├── Service.js
│   │   └── User.js
│   ├── routes/
│   │   ├── admin.js
│   │   ├── auth.js
│   │   ├── dashboard.js
│   │   ├── public.js
│   │   ├── user.js
│   │   ├── vendor.js
│   │   └── vendorDashboard.js
│   ├── utils/
│   │   ├── cloudinary.js
│   │   ├── recommendationEngine.js
│   │   ├── twilio.js
│   │   └── whatsapp.js
│   ├── uploads/
│   ├── .env
│   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json
│   └── server.js
├── eazywed/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── AddService.jsx
│   │   │   ├── AdminDashboard.jsx
│   │   │   ├── AdminLogin.jsx
│   │   │   ├── AdminResetPassword.jsx
│   │   │   ├── AdminResetRequest.jsx
│   │   │   ├── CardEditor.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Loading.jsx
│   │   │   ├── NotFound.jsx
│   │   │   ├── OTPModal.jsx
│   │   │   ├── SignIn.jsx
│   │   │   ├── SignUp.jsx
│   │   │   ├── VendorCategoryType.jsx
│   │   │   ├── VendorDashboard.jsx
│   │   │   ├── VendorLogin.jsx
│   │   │   ├── VendorResetPassword.jsx
│   │   │   ├── VendorResetRequest.jsx
│   │   │   ├── VendorSignup.jsx
│   │   │   ├── VendorUnderReview.jsx
│   │   │   ├── WeddingCardForm.jsx
│   │   │   └── WeddingServicesForm.jsx
│   │   ├── context/
│   │   │   ├── AuthContext.jsx
│   │   │   ├── EstimateContext.jsx
│   │   ├── pages/
│   │   │   ├── common/
│   │   │   │   ├── EstimateSidebar.css
│   │   │   │   ├── EstimateSidebar.jsx
│   │   │   │   ├── Footer.css
│   │   │   │   ├── Footer.jsx
│   │   │   │   ├── Navbar.css
│   │   │   │   ├── Navbar.jsx
│   │   │   │   ├── SearchBar.css
│   │   │   │   ├── SearchBar.jsx
│   │   │   │   ├── ServiceCard.css
│   │   │   │   ├── ServiceCard.jsx
│   │   │   │   ├── Slider.css
│   │   │   │   ├── Slider.jsx
│   │   │   │   ├── VendorCard.css
│   │   │   │   ├── VendorCard.jsx
│   │   │   ├── AboutUs.css
│   │   │   ├── AboutUs.jsx
│   │   │   ├── Chatbot.css
│   │   │   ├── Chatbot.jsx
│   │   │   ├── Contact.css
│   │   │   ├── ContactUs.jsx
│   │   │   ├── Deals.css
│   │   │   ├── Deals.jsx
│   │   │   ├── details-page.css
│   │   │   ├── Home.css
│   │   │   ├── Home.jsx
│   │   │   ├── Listings.css
│   │   │   ├── Listings.jsx
│   │   │   ├── PublicEditor.jsx
│   │   │   ├── ServiceDetails.jsx
│   │   │   └── WeddingCardsDetails.jsx
│   │   ├── services/
│   │   │   ├── api.js
│   │   ├── styles/
│   │   │   ├── add-service.css
│   │   │   ├── admin-auth.css
│   │   │   ├── AdminReset.css
│   │   │   ├── card-editor.css
│   │   │   ├── card-form.css
│   │   │   ├── custom.css
│   │   │   ├── dashboard.css
│   │   │   ├── Loading.css
│   │   │   ├── responsive.css
│   │   │   ├── service-form.css
│   │   │   └── vendor-auth.css
│   │   ├── utils/
│   │   │   ├── api.js
│   │   │   ├── whatsapp.js
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   ├── main.jsx
│   │   └── routes.jsx
│   ├── public/
│   ├── .env
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   └── vite.config.js
Installation and Setup
To set up EazyWed locally, follow these steps:
Prerequisites

Node.js (version 14.x or higher recommended)
MongoDB (locally installed or a cloud instance like MongoDB Atlas)
Git (for cloning the repository)

Cloning the Repository
Clone the EazyWed repository from GitHub:
git clone https://github.com/web-codings123/EazyWed.git
cd EazyWed

Backend Setup

Navigate to the backend directory:cd backend


Install backend dependencies:npm install


Set up environment variables:
Create a .env file in the backend directory.
Add the following variables (replace with your own values):PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_PHONE_NUMBER=your_twilio_phone_number




Start the backend server:npm start

The backend server will run on http://localhost:5000 (or the port specified in .env).

Frontend Setup

Navigate to the frontend directory:cd ../eazywed


Install frontend dependencies:npm install


Set up environment variables:
Create a .env file in the eazywed directory.
Add the following variable:VITE_API_URL=http://localhost:5000




Start the frontend development server:npm run dev

The frontend will run on http://localhost:5173 (or the port assigned by Vite).

Importing the Project into Your IDE

Open your preferred IDE (e.g., VS Code).
Use the "Open Folder" option and select the EazyWed directory.
Ensure you have the necessary extensions installed (e.g., ESLint, Prettier for JavaScript/React development).

Running Both Servers
To run both the backend and frontend servers simultaneously:

Open two terminal windows.
In the first terminal, navigate to EazyWed/backend and run:npm start


In the second terminal, navigate to EazyWed/eazywed and run:npm run dev



Alternatively, you can use a tool like concurrently to run both servers with a single command:

Install concurrently globally (or add it to your project):npm install -g concurrently


From the root EazyWed directory, run:concurrently "cd backend && npm start" "cd eazywed && npm run dev"



Usage

Open your browser and navigate to http://localhost:5173 to access the EazyWed frontend.
Register as a user or vendor to explore features like booking vendors, creating digital invitations, or managing budgets.
Admin features are accessible via the admin dashboard (requires admin credentials).

Contributing
Contributions are welcome! To contribute:

Fork the repository:git fork https://github.com/web-codings123/EazyWed.git


Create a new branch:git checkout -b feature/your-feature-name


Make your changes and commit them:git commit -m "Add your feature description"


Push to your branch:git push origin feature/your-feature-name


Open a pull request on the GitHub repository.

If you encounter issues or have suggestions, please open an issue on the GitHub repository.
License
This project is licensed under the MIT License. See the LICENSE file for details.
