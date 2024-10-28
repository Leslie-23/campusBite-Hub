### Backend Directory and Route Structure

1. **Backend Root Structure**:

   ```plaintext
   backend/
   ├── api-gateway/
   │   ├── config/
   │   ├── controllers/
   │   ├── middlewares/
   │   ├── routes/
   │   ├── utils/
   │   └── index.js
   ├── services/
   │   ├── auth-service/
   │   ├── recipe-service/
   │   ├── user-service/
   │   ├── social-service/
   │   ├── planner-service/
   │   └── notif-service/
   ├── external-services/
   └── data-layer/
   ```

2. **API Gateway Routes**:
   - **Auth Routes (`/auth`)**:
     - `POST /auth/signup`: Register a new user
     - `POST /auth/login`: User login
     - `POST /auth/logout`: User logout
   - **User Routes (`/user`)**:
     - `GET /user/profile`: Get user profile details
     - `PUT /user/profile`: Update user profile
   - **Recipe Routes (`/recipe`)**:
     - `GET /recipe/search`: Search for recipes
     - `GET /recipe/:id`: Get recipe details
     - `POST /recipe/favorites`: Add recipe to favorites
   - **Planner Routes (`/planner`)**:
     - `GET /planner/meal`: Get meal plan
     - `POST /planner/meal`: Create or update meal plan
     - `GET /planner/grocery-list`: Get grocery list for planned meals
   - **Social Routes (`/social`)**:
     - `GET /social/feed`: Fetch social feed
     - `POST /social/post`: Create new post
     - `GET /social/challenges`: View active challenges
   - **Notification Routes (`/notifications`)**:
     - `GET /notifications`: Fetch notifications
     - `POST /notifications`: Create notifications (admin)
3. **Service Layer**:
   - Each service will contain a `routes.js` file to handle specific routing logic and data validation per service:
     - **Auth Service** (`auth-service/routes.js`):
       - Handles `/signup`, `/login`, `/logout`, and user management with Firebase Auth.
     - **Recipe Service** (`recipe-service/routes.js`):
       - Manages recipe details, interactions with Spoonacular API, and Redis caching.
     - **User Service** (`user-service/routes.js`):
       - Manages user profile, settings, and retrieval from MongoDB.
     - **Social Service** (`social-service/routes.js`):
       - Handles social posts, interactions with Firebase Storage, and user activity.
     - **Planner Service** (`planner-service/routes.js`):
       - Manages meal planning, grocery lists, and budgeting.
     - **Notification Service** (`notif-service/routes.js`):
       - Integrates with Push Notification Service for user notifications.

### Frontend Directory and Route Structure

1. **Frontend Root Structure**:

   ```plaintext
   frontend/
   ├── mobile-app/
   │   ├── src/
   │   │   ├── assets/
   │   │   ├── components/
   │   │   ├── navigation/
   │   │   ├── screens/
   │   │   ├── services/
   │   └── index.js
   └── web-app/
       ├── public/
       ├── src/
       │   ├── assets/
       │   ├── components/
       │   ├── pages/
       │   ├── routes/
       │   ├── services/
       └── index.js
   ```

2. **Mobile App Route Structure**:

   - `navigation/`: Set up navigation flows:
     - **Main Tab Navigation**: `Home`, `Planner`, `Recipe`, `Social`, `Profile`
   - **Screen Components**:
     - **Home**: `HomePage.js` (Entry for recipes, quick actions, and featured items)
     - **Recipe**:
       - `RecipeSearch.js`: Search and filter for recipes
       - `RecipeDetail.js`: Display selected recipe details
       - `SavedRecipes.js`: Display saved/favorite recipes
     - **Planner**:
       - `MealPlanner.js`: Display meal planning and calendar
       - `GroceryList.js`: Shows grocery list items with cost estimates
       - `BudgetTracker.js`: Tracks spending and meal costs
     - **Social**:
       - `Feed.js`: Community feed with posts from other users
       - `CreatePost.js`: Form to share new recipes or photos
       - `Challenges.js`: Current challenges and leaderboard
     - **Profile**:
       - `UserProfile.js`: Display user profile settings and history
       - `NutritionDash.js`: Track nutritional intake and goals
       - `Preferences.js`: Set dietary and notification preferences

3. **Web App Route Structure**:
   - **Public Pages**:
     - **Home Page**: `/home`
     - **Authentication**: `/login`, `/signup`
   - **User Pages**:
     - **Recipe**:
       - `/recipe/search`: Recipe search with filters
       - `/recipe/:id`: Display details for a selected recipe
     - **Planner**:
       - `/planner/meal`: Manage meal planning calendar
       - `/planner/grocery-list`: Display grocery list by category
       - `/planner/budget-tracker`: Track meal planning budget
     - **Social**:
       - `/social/feed`: Community feed
       - `/social/create`: Create new post
       - `/social/challenges`: View and join challenges
     - **Profile**:
       - `/profile`: User profile page
       - `/profile/nutrition-dashboard`: Track nutrition metrics
