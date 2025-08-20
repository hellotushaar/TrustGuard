# TrustGuard - Deepfake Detection and Education Platform

A comprehensive web application prototype designed to educate users about deepfakes and provide tools for detection and community engagement.

## Features

### 🏠 Landing Page

- Welcome section with app description
- Sign-in functionality with local storage
- Guest access to deepfake detection

### 📊 Dashboard (Signed-in Users)

- Recent notifications overview
- Knowledge Hub progress tracking
- CTF completion status and badges
- Community activity summary
- Personal progress statistics

### 📚 Knowledge Hub

- Searchable library of educational content
- Filter by categories: Deepfakes, AI, Security, Ethics
- Progress tracking and bookmarking
- Difficulty levels: Beginner, Intermediate, Advanced

### 🏆 Capture The Flag (CTF) Challenges

- Interactive cybersecurity challenges
- Multiple difficulty levels
- Real-time scoring system
- Leaderboards and achievements
- Practice deepfake detection skills

### 👥 Communities

- Join topic-specific communities
- View all communities or personal memberships
- Community activity tracking
- Member count and engagement metrics

### 🤖 Smart Suggest (AI Assistant)

- Intelligent recommendations for CTFs
- Personalized learning path suggestions
- Community recommendations
- Chat-based interface

### ⚙️ Admin Panel

- Profile management (username, email, password)
- Interest preferences customization
- Settings persistence with localStorage

### 🔍 Deepfake Detection (Guest Access)

- File upload for analysis (video/audio)
- Simulated AI-powered detection
- Confidence scoring with visual indicators
- Recommendations for further learning
- Suggestions to sign up for full access

## Technology Stack

- **Frontend**: Pure HTML5, CSS3, JavaScript (ES6+)
- **Storage**: Browser localStorage for data persistence
- **Icons**: Font Awesome 6.0
- **Styling**: Custom CSS with CSS Grid and Flexbox
- **No frameworks**: Vanilla JavaScript for maximum compatibility

## Color Scheme

Based on the provided theme:

- Primary Blue: #0077D4
- Dark Gray: #323232
- Light Gray: #f8f9fa
- White: #ffffff
- Accent Blue: #4A90E2

## File Structure

```
TrustGuard/
├── index.html          # Main HTML file with all page content
├── styles.css          # Complete CSS styling
├── script.js           # JavaScript functionality and data
├── assets/             # Additional resources folder
├── README.md           # Project documentation
├── agent_instructions.md # Development instructions
├── color_theme.png     # Color palette reference
└── UI_sample.png       # UI design reference
```

## Getting Started

1. Open `index.html` in any modern web browser
2. For guest access: Click "Try Detection (Guest)"
3. For full features: Click "Sign In" and enter any username/password
4. Navigate through different sections using the top navigation bar

## Demo Credentials

The app accepts any username and password combination for demonstration purposes.

## Key Features Implementation

### Authentication

- Simulated sign-in/sign-out with localStorage
- Persistent session management
- Role-based content access

### Data Management

- Mock data for all content (topics, CTFs, communities)
- localStorage for user preferences and progress
- Simulated search and filtering

### Interactive Elements

- Real-time search across all sections
- Dynamic content filtering
- Simulated file upload and analysis
- Interactive CTF challenges with scoring
- Community join/leave functionality

### Responsive Design

- Mobile-friendly responsive layout
- Touch-friendly interface elements
- Accessible navigation and controls

## Browser Compatibility

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## Development Notes

This is a frontend-only prototype built according to the specifications in `agent_instructions.md`. All functionality is simulated using JavaScript and localStorage, making it perfect for demonstrations and user testing without requiring backend infrastructure.

## Future Enhancements

- Real backend integration
- User registration system
- Advanced AI detection algorithms
- Real-time community features
- Progressive Web App (PWA) capabilities
- Multi-language support
