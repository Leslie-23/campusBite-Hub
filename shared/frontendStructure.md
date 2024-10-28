/frontend
├── mobile-app # Mobile App (React Native)
│ ├── src
│ │ ├── assets # Images, icons, fonts, etc.
│ │ ├── components # Reusable components
│ │ │ ├── Auth # Authentication screens (Login, Signup)
│ │ │ ├── Recipe # Recipe components (List, Detail, etc.)
│ │ │ ├── Planner # Planner components (Calendar, Lists)
│ │ │ └── Social # Social components (Feed, Post creation)
│ │ ├── navigation # App navigation setup (React Navigation)
│ │ ├── screens # App screens
│ │ │ ├── Home # Home screen layout and components
│ │ │ ├── Onboarding # Onboarding screens for new users
│ │ │ ├── RecipeScreens # Screens for recipe section
│ │ │ ├── PlannerScreens # Screens for meal planning
│ │ │ ├── SocialScreens # Social interaction screens
│ │ │ ├── ProfileScreens # User profile, preferences
│ │ └── App.js # Main app entry point
│ └── package.json # Dependencies and scripts

├── web-app # Web App (React)
│ ├── public # Public assets for web
│ ├── src
│ │ ├── assets # Images, icons, fonts, etc.
│ │ ├── components # Shared components
│ │ │ ├── Header # Header component
│ │ │ ├── Footer # Footer component
│ │ │ ├── UI # Shared UI components (buttons, inputs)
│ │ ├── pages # Main pages
│ │ │ ├── Home # Home page
│ │ │ ├── Auth # Authentication pages
│ │ │ ├── Recipe # Recipe pages (List, Detail)
│ │ │ ├── Planner # Planner pages (Meal Planner, Grocery List)
│ │ │ ├── Social # Social interaction pages
│ │ │ ├── Profile # Profile and user settings pages
│ │ ├── routes # Route configurations
│ │ ├── services # API services to interact with server
│ │ └── App.js # Main app entry
│ └── package.json # Dependencies and scripts

├── shared # Shared code and configurations
│ ├── utils # Utility functions (formatting, validation)
│ ├── hooks # Custom hooks for reusable logic
│ ├── contexts # Context for state management
│ ├── api # API interfaces shared by both apps
│ ├── constants.js # Constant variables for configuration
│ └── theme.js # Styling theme shared between mobile and web
