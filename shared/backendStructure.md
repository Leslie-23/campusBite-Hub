/backend
├── api-gateway # API Gateway Layer (Express.js)
│ ├── config # Environment configurations
│ ├── routes # API routes
│ │ ├── index.js # Route initializer, combines all service routes
│ │ ├── authRoutes.js # Auth service routes
│ │ ├── recipeRoutes.js # Recipe service routes
│ │ ├── userRoutes.js # User service routes
│ │ ├── socialRoutes.js # Social service routes
│ │ ├── plannerRoutes.js # Planner service routes
│ │ └── notifRoutes.js # Notification service routes
│ ├── middlewares # Middlewares for validation, authentication, error handling
│ ├── controllers # Controllers to handle route logic
│ │ ├── authController.js
│ │ ├── recipeController.js
│ │ ├── userController.js
│ │ ├── socialController.js
│ │ ├── plannerController.js
│ │ └── notifController.js
│ ├── utils # Utilities and helpers
│ ├── server.js # API Gateway main entry file
│ └── package.json # Dependencies and scripts

├── services # Service Layer
│ ├── auth-service # Authentication Service (Firebase Auth)
│ │ ├── config # Firebase Auth configurations
│ │ ├── controllers # Auth service-specific controllers
│ │ ├── models # User and Auth data models
│ │ ├── routes # Microservice routes
│ │ └── index.js # Auth service entry
│ │
│ ├── recipe-service # Recipe Service
│ │ ├── config # Configuration for external services like Spoonacular API
│ │ ├── controllers # Recipe-related controllers
│ │ ├── models # Recipe data models
│ │ ├── routes # Recipe service routes
│ │ └── index.js # Recipe service entry
│ │
│ ├── user-service # User Service
│ │ ├── controllers # User profile management
│ │ ├── models # User data schema
│ │ ├── routes # User service routes
│ │ └── index.js # User service entry
│ │
│ ├── social-service # Social Service
│ │ ├── controllers # Social interactions (posts, challenges)
│ │ ├── models # Social data schema
│ │ ├── routes # Social service routes
│ │ └── index.js # Social service entry
│ │
│ ├── planner-service # Meal Planner Service
│ │ ├── controllers # Meal planning and calendar
│ │ ├── models # Planner data schema
│ │ ├── routes # Planner service routes
│ │ └── index.js # Planner service entry
│ │
│ └── notif-service # Notification Service
│ ├── controllers # Push notifications logic
│ ├── routes # Notification service routes
│ ├── services # Integration with Push Notification Service
│ └── index.js # Notification service entry
│
├── external-services # Wrappers for external services
│ ├── spoonacular.js # Interface to Spoonacular API
│ ├── pushNotification.js # Interface to push notification provider
│ └── firebaseStorage.js # Interface to Firebase Storage
│
├── data-layer # Data Layer connections
│ ├── mongo # MongoDB setup, schemas
│ ├── redis # Redis setup for caching
│ └── firebase # Firebase setup for file storage
│
└── package.json # Project dependencies
