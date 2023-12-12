# Netflix GPT
- Create React app
- Configured TailwindCSS
- Header
- Routing of form
- LoginForm
- SignupForm
- Form Validations
- UseRef hook
- FireBase SetUp
- Deploying our App in Production
- Create SignUp User Account
- Implement Sign In user API
- Created Redux store with userSlice
- Implemented Sign out
- Update Profile API call
- BugFix: Sign up user display name and profile picture update
- BugFix: If the user is not signed in redirect /browse to login page and vice-versa
- Unsubscribe to onAuthStateChanged API after component unmounts

# Features
- Login/Sign Up
 - Sign in/ Sign up Form
 - redirect to Browse page
- Browse( after authentication)
 - Header
 - Main movie
  - Trailer in Background
  - Title & Description
  - Movie Suggestions
   - MovieLists * N
-Netflix GPT
 - Search Bar
 - Movie Suggestions

 # Set Uo in local
 - curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
 - close terminal and then run 
 - export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
 - nvm install 18
 - npm i
 - npm start