// Application State
let appState = {
    isSignedIn: false,
    currentPage: 'landing-page',
    currentUser: null,
    joinedCommunities: [],
    userPreferences: [],
    searchResults: {},
    activeTab: 'all'
};

// Mock Data
const mockData = {
    knowledgeTopics: [
        {
            id: 1,
            title: "Introduction to Deepfakes",
            category: "deepfakes",
            difficulty: "Beginner",
            description: "Learn the basics of deepfake technology, how it works, and why it's important to understand.",
            readTime: "15 min",
            popularity: 95
        },
        {
            id: 2,
            title: "AI Ethics and Responsibility",
            category: "ethics",
            difficulty: "Intermediate",
            description: "Explore the ethical implications of AI technology and how to use it responsibly.",
            readTime: "25 min",
            popularity: 88
        },
        {
            id: 3,
            title: "Detection Techniques and Tools",
            category: "security",
            difficulty: "Advanced",
            description: "Advanced methods for detecting deepfakes using various technical approaches.",
            readTime: "35 min",
            popularity: 92
        },
        {
            id: 4,
            title: "Machine Learning Fundamentals",
            category: "ai",
            difficulty: "Beginner",
            description: "Understanding the basics of machine learning that power deepfake technology.",
            readTime: "20 min",
            popularity: 85
        },
        {
            id: 5,
            title: "Cybersecurity Best Practices",
            category: "security",
            difficulty: "Intermediate",
            description: "Essential security practices to protect yourself in the digital age.",
            readTime: "30 min",
            popularity: 90
        },
        {
            id: 6,
            title: "Legal Implications of Deepfakes",
            category: "ethics",
            difficulty: "Advanced",
            description: "Understanding the legal landscape around deepfake technology and its misuse.",
            readTime: "40 min",
            popularity: 78
        }
    ],
    
    ctfChallenges: [
        {
            id: 1,
            title: "Deepfake Detection Challenge",
            category: "beginner",
            difficulty: "Beginner",
            description: "Practice identifying deepfakes with this guided challenge for beginners.",
            participants: 1247,
            maxScore: 1000,
            estimatedTime: "30 min"
        },
        {
            id: 2,
            title: "Advanced Audio Analysis",
            category: "advanced",
            difficulty: "Advanced",
            description: "Analyze audio files to detect AI-generated speech and voice cloning.",
            participants: 342,
            maxScore: 1500,
            estimatedTime: "2 hours"
        },
        {
            id: 3,
            title: "Video Forensics CTF",
            category: "expert",
            difficulty: "Expert",
            description: "Expert-level challenge involving complex video analysis and forensics.",
            participants: 89,
            maxScore: 2000,
            estimatedTime: "4 hours"
        },
        {
            id: 4,
            title: "Social Media Investigation",
            category: "intermediate",
            difficulty: "Intermediate",
            description: "Investigate social media posts to identify potentially harmful deepfake content.",
            participants: 567,
            maxScore: 1200,
            estimatedTime: "1 hour"
        },
        {
            id: 5,
            title: "Real-time Detection",
            category: "advanced",
            difficulty: "Advanced",
            description: "Build and test real-time deepfake detection systems.",
            participants: 234,
            maxScore: 1800,
            estimatedTime: "3 hours"
        },
        {
            id: 6,
            title: "Ethics and Impact Assessment",
            category: "beginner",
            difficulty: "Beginner",
            description: "Understand the ethical implications and societal impact of deepfake technology.",
            participants: 892,
            maxScore: 800,
            estimatedTime: "45 min"
        }
    ],
    
    communities: [
        {
            id: 1,
            name: "Deepfake Fighters",
            description: "A community dedicated to detecting and combating malicious deepfakes.",
            members: 15420,
            category: "detection",
            activity: "Very Active",
            recentPosts: 23
        },
        {
            id: 2,
            name: "CTF Professionals",
            description: "Share strategies, solutions, and compete in cybersecurity challenges.",
            members: 8930,
            category: "ctf",
            activity: "Active",
            recentPosts: 15
        },
        {
            id: 3,
            name: "AI Ethics Hub",
            description: "Discuss the ethical implications of AI and deepfake technology.",
            members: 6750,
            category: "ethics",
            activity: "Moderate",
            recentPosts: 8
        },
        {
            id: 4,
            name: "Security Researchers",
            description: "Advanced discussions on cybersecurity research and methodologies.",
            members: 4320,
            category: "research",
            activity: "Active",
            recentPosts: 12
        },
        {
            id: 5,
            name: "Beginner's Corner",
            description: "A welcoming space for those new to cybersecurity and deepfake detection.",
            members: 12680,
            category: "beginner",
            activity: "Very Active",
            recentPosts: 31
        },
        {
            id: 6,
            name: "Industry Professionals",
            description: "Connect with cybersecurity professionals working in the industry.",
            members: 3950,
            category: "professional",
            activity: "Moderate",
            recentPosts: 7
        },
        {
            id: 7,
            name: "Academic Research",
            description: "Share and discuss academic research in AI, ML, and security.",
            members: 2840,
            category: "academic",
            activity: "Moderate",
            recentPosts: 5
        },
        {
            id: 8,
            name: "Tool Developers",
            description: "Collaborate on developing tools for deepfake detection and analysis.",
            members: 1960,
            category: "development",
            activity: "Active",
            recentPosts: 9
        }
    ]
};

// Initialization
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Check if user is signed in
    const isSignedIn = localStorage.getItem('isSignedIn') === 'true';
    const joinedCommunities = JSON.parse(localStorage.getItem('joinedCommunities') || '[]');
    const userPreferences = JSON.parse(localStorage.getItem('userPreferences') || '[]');
    
    appState.isSignedIn = isSignedIn;
    appState.joinedCommunities = joinedCommunities;
    appState.userPreferences = userPreferences;
    
    if (isSignedIn) {
        showPage('dashboard');
        document.getElementById('navbar').style.display = 'block';
    } else {
        showPage('landing-page');
        document.getElementById('navbar').style.display = 'none';
    }
    
    // Initialize content
    populateKnowledgeHub();
    populateCTFs();
    populateCommunities();
}

// Navigation Functions
function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
        page.style.display = 'none';
    });
    
    // Show selected page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
        targetPage.style.display = 'block';
        appState.currentPage = pageId;
    }
    
    // Handle special cases
    if (pageId === 'landing-page' || pageId === 'deepfake-detection') {
        document.getElementById('navbar').style.display = 'none';
    } else if (appState.isSignedIn) {
        document.getElementById('navbar').style.display = 'block';
    }
    
    // Show/hide back to dashboard button for deepfake detection page
    const backButton = document.getElementById('back-to-dashboard');
    if (backButton) {
        if (pageId === 'deepfake-detection' && appState.isSignedIn) {
            backButton.style.display = 'block';
        } else {
            backButton.style.display = 'none';
        }
    }
    
    // Show/hide appropriate suggestions for deepfake detection page
    if (pageId === 'deepfake-detection') {
        const guestSuggestions = document.querySelectorAll('.guest-suggestion');
        const userSuggestions = document.querySelectorAll('.user-suggestion');
        
        if (appState.isSignedIn) {
            guestSuggestions.forEach(el => el.style.display = 'none');
            userSuggestions.forEach(el => el.style.display = 'block');
        } else {
            guestSuggestions.forEach(el => el.style.display = 'block');
            userSuggestions.forEach(el => el.style.display = 'none');
        }
    }
}

// Authentication Functions
function showSignIn() {
    document.getElementById('signin-form').style.display = 'block';
}

function hideSignIn() {
    document.getElementById('signin-form').style.display = 'none';
}

function signIn(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username && password) {
        // Simulate authentication
        localStorage.setItem('isSignedIn', 'true');
        localStorage.setItem('currentUser', username);
        appState.isSignedIn = true;
        appState.currentUser = username;
        
        hideSignIn();
        showPage('dashboard');
        document.getElementById('navbar').style.display = 'block';
        
        // Show success message
        alert('Welcome to TrustGuard! You have successfully signed in.');
    }
}

function signOut() {
    localStorage.removeItem('isSignedIn');
    localStorage.removeItem('currentUser');
    appState.isSignedIn = false;
    appState.currentUser = null;
    
    showPage('landing-page');
    document.getElementById('navbar').style.display = 'none';
    
    alert('You have been signed out successfully.');
}

// Notification Functions
function toggleNotifications() {
    const dropdown = document.getElementById('notificationDropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

// Knowledge Hub Functions
function populateKnowledgeHub() {
    const container = document.getElementById('knowledge-results');
    container.innerHTML = '';
    
    const topics = mockData.knowledgeTopics.sort((a, b) => b.popularity - a.popularity);
    
    topics.forEach(topic => {
        const card = createKnowledgeCard(topic);
        container.appendChild(card);
    });
}

function createKnowledgeCard(topic) {
    const card = document.createElement('div');
    card.className = 'content-card';
    card.innerHTML = `
        <div class="card-header">
            <h3>${topic.title}</h3>
            <span class="card-difficulty">${topic.difficulty}</span>
        </div>
        <div class="card-body">
            <p>${topic.description}</p>
            <div class="card-meta">
                <span><i class="fas fa-clock"></i> ${topic.readTime}</span>
                <span><i class="fas fa-users"></i> ${topic.popularity}% liked</span>
            </div>
            <div class="card-actions">
                <button class="btn btn-primary btn-small" onclick="readTopic(${topic.id})">
                    <i class="fas fa-book-open"></i> Read
                </button>
                <button class="btn btn-secondary btn-small" onclick="bookmarkTopic(${topic.id})">
                    <i class="fas fa-bookmark"></i> Save
                </button>
            </div>
        </div>
    `;
    return card;
}

function searchKnowledge() {
    const query = document.getElementById('knowledge-search').value.toLowerCase();
    const container = document.getElementById('knowledge-results');
    container.innerHTML = '';
    
    const filteredTopics = mockData.knowledgeTopics.filter(topic => 
        topic.title.toLowerCase().includes(query) || 
        topic.description.toLowerCase().includes(query) ||
        topic.category.toLowerCase().includes(query)
    );
    
    if (filteredTopics.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #666; padding: 2rem;">No topics found matching your search.</p>';
        return;
    }
    
    filteredTopics.forEach(topic => {
        const card = createKnowledgeCard(topic);
        container.appendChild(card);
    });
}

function filterKnowledge(category) {
    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    const container = document.getElementById('knowledge-results');
    container.innerHTML = '';
    
    const filteredTopics = category === 'all' 
        ? mockData.knowledgeTopics 
        : mockData.knowledgeTopics.filter(topic => topic.category === category);
    
    filteredTopics.sort((a, b) => b.popularity - a.popularity).forEach(topic => {
        const card = createKnowledgeCard(topic);
        container.appendChild(card);
    });
}

function readTopic(topicId) {
    const topic = mockData.knowledgeTopics.find(t => t.id === topicId);
    if (topic) {
        alert(`Reading "${topic.title}"...\n\nThis would open the full article content. In a real application, this would navigate to a detailed article page with comprehensive content about ${topic.title.toLowerCase()}.`);
    }
}

function bookmarkTopic(topicId) {
    const topic = mockData.knowledgeTopics.find(t => t.id === topicId);
    if (topic) {
        alert(`"${topic.title}" has been saved to your bookmarks!`);
    }
}

// CTF Functions
function populateCTFs() {
    const container = document.getElementById('ctf-results');
    container.innerHTML = '';
    
    const ctfs = mockData.ctfChallenges.sort((a, b) => b.participants - a.participants);
    
    ctfs.forEach(ctf => {
        const card = createCTFCard(ctf);
        container.appendChild(card);
    });
}

function createCTFCard(ctf) {
    const card = document.createElement('div');
    card.className = 'content-card';
    card.innerHTML = `
        <div class="card-header">
            <h3>${ctf.title}</h3>
            <span class="card-difficulty">${ctf.difficulty}</span>
        </div>
        <div class="card-body">
            <p>${ctf.description}</p>
            <div class="card-meta">
                <span><i class="fas fa-users"></i> ${ctf.participants} participants</span>
                <span><i class="fas fa-clock"></i> ~${ctf.estimatedTime}</span>
            </div>
            <div class="card-meta">
                <span><i class="fas fa-trophy"></i> Max Score: ${ctf.maxScore}</span>
            </div>
            <div class="card-actions">
                <button class="btn btn-primary btn-small" onclick="playCTF(${ctf.id})">
                    <i class="fas fa-play"></i> Play
                </button>
                <button class="btn btn-secondary btn-small" onclick="viewLeaderboard(${ctf.id})">
                    <i class="fas fa-list"></i> Leaderboard
                </button>
            </div>
        </div>
    `;
    return card;
}

function searchCTFs() {
    const query = document.getElementById('ctf-search').value.toLowerCase();
    const container = document.getElementById('ctf-results');
    container.innerHTML = '';
    
    const filteredCTFs = mockData.ctfChallenges.filter(ctf => 
        ctf.title.toLowerCase().includes(query) || 
        ctf.description.toLowerCase().includes(query) ||
        ctf.category.toLowerCase().includes(query)
    );
    
    if (filteredCTFs.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #666; padding: 2rem;">No CTF challenges found matching your search.</p>';
        return;
    }
    
    filteredCTFs.forEach(ctf => {
        const card = createCTFCard(ctf);
        container.appendChild(card);
    });
}

function filterCTFs(category) {
    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    const container = document.getElementById('ctf-results');
    container.innerHTML = '';
    
    const filteredCTFs = category === 'all' 
        ? mockData.ctfChallenges 
        : mockData.ctfChallenges.filter(ctf => ctf.category === category);
    
    filteredCTFs.sort((a, b) => b.participants - a.participants).forEach(ctf => {
        const card = createCTFCard(ctf);
        container.appendChild(card);
    });
}

function playCTF(ctfId) {
    const ctf = mockData.ctfChallenges.find(c => c.id === ctfId);
    if (!ctf) return;
    
    // Simple CTF simulation
    const questions = [
        {
            question: "What is the most common technique used to detect deepfakes?",
            options: ["Audio analysis", "Facial landmark detection", "Metadata analysis", "Color histogram"],
            correct: 1
        },
        {
            question: "Which of the following is a sign of a deepfake video?",
            options: ["Consistent lighting", "Natural blinking patterns", "Inconsistent facial expressions", "Stable audio quality"],
            correct: 2
        },
        {
            question: "What does GAN stand for in the context of deepfakes?",
            options: ["General Adversarial Network", "Generative Adversarial Network", "Graphic Analysis Network", "Generated AI Network"],
            correct: 1
        }
    ];
    
    let score = 0;
    let currentQuestion = 0;
    
    function askQuestion() {
        if (currentQuestion >= questions.length) {
            const finalScore = Math.round((score / questions.length) * ctf.maxScore);
            alert(`CTF Complete!\n\nYour Score: ${finalScore}/${ctf.maxScore}\nQuestions Correct: ${score}/${questions.length}\n\nGreat job! Your score has been recorded.`);
            return;
        }
        
        const q = questions[currentQuestion];
        const answer = prompt(
            `${ctf.title} - Question ${currentQuestion + 1}/${questions.length}\n\n${q.question}\n\n` +
            q.options.map((opt, idx) => `${idx + 1}. ${opt}`).join('\n') +
            '\n\nEnter your answer (1-4):'
        );
        
        if (answer === null) return; // User cancelled
        
        const answerIndex = parseInt(answer) - 1;
        if (answerIndex === q.correct) {
            score++;
            alert('Correct! Well done.');
        } else {
            alert(`Incorrect. The correct answer was: ${q.options[q.correct]}`);
        }
        
        currentQuestion++;
        askQuestion();
    }
    
    if (confirm(`Start "${ctf.title}"?\n\nThis CTF contains ${questions.length} questions and will test your knowledge about deepfake detection.`)) {
        askQuestion();
    }
}

function viewLeaderboard(ctfId) {
    const ctf = mockData.ctfChallenges.find(c => c.id === ctfId);
    if (ctf) {
        alert(`${ctf.title} - Leaderboard\n\n1. Alice Johnson - ${ctf.maxScore}\n2. Bob Smith - ${Math.round(ctf.maxScore * 0.95)}\n3. Carol Davis - ${Math.round(ctf.maxScore * 0.92)}\n4. David Wilson - ${Math.round(ctf.maxScore * 0.88)}\n5. Emma Brown - ${Math.round(ctf.maxScore * 0.85)}\n\nYour best score: Not yet played`);
    }
}

// Community Functions
function populateCommunities() {
    showCommunityTab('all');
}

function showCommunityTab(tab) {
    // Update active tab
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    appState.activeTab = tab;
    const container = document.getElementById('community-results');
    container.innerHTML = '';
    
    let communitiesToShow = mockData.communities;
    
    if (tab === 'joined') {
        communitiesToShow = mockData.communities.filter(community => 
            appState.joinedCommunities.includes(community.id)
        );
        
        if (communitiesToShow.length === 0) {
            container.innerHTML = '<p style="text-align: center; color: #666; padding: 2rem;">You haven\'t joined any communities yet. Check out the "All Communities" tab to find communities to join!</p>';
            return;
        }
    }
    
    communitiesToShow.sort((a, b) => b.members - a.members).forEach(community => {
        const card = createCommunityCard(community);
        container.appendChild(card);
    });
}

function createCommunityCard(community) {
    const card = document.createElement('div');
    card.className = 'content-card';
    const isJoined = appState.joinedCommunities.includes(community.id);
    
    card.innerHTML = `
        <div class="card-header">
            <h3>${community.name}</h3>
            <span class="card-difficulty">${community.activity}</span>
        </div>
        <div class="card-body">
            <p>${community.description}</p>
            <div class="card-meta">
                <span><i class="fas fa-users"></i> ${community.members.toLocaleString()} members</span>
                <span><i class="fas fa-comments"></i> ${community.recentPosts} recent posts</span>
            </div>
            <div class="card-actions">
                ${isJoined 
                    ? `<button class="btn btn-secondary btn-small" onclick="leaveCommunity(${community.id})">
                         <i class="fas fa-user-minus"></i> Leave
                       </button>
                       <button class="btn btn-primary btn-small" onclick="viewCommunity(${community.id})">
                         <i class="fas fa-eye"></i> View
                       </button>`
                    : `<button class="btn btn-primary btn-small" onclick="joinCommunity(${community.id})">
                         <i class="fas fa-user-plus"></i> Join
                       </button>
                       <button class="btn btn-secondary btn-small" onclick="viewCommunity(${community.id})">
                         <i class="fas fa-eye"></i> Preview
                       </button>`
                }
            </div>
        </div>
    `;
    return card;
}

function joinCommunity(communityId) {
    const community = mockData.communities.find(c => c.id === communityId);
    if (!community) return;
    
    if (!appState.joinedCommunities.includes(communityId)) {
        appState.joinedCommunities.push(communityId);
        localStorage.setItem('joinedCommunities', JSON.stringify(appState.joinedCommunities));
        
        alert(`Successfully joined "${community.name}"!\n\nYou can now participate in discussions and access exclusive content.`);
        
        // Refresh the current view
        populateCommunities();
    }
}

function leaveCommunity(communityId) {
    const community = mockData.communities.find(c => c.id === communityId);
    if (!community) return;
    
    if (confirm(`Are you sure you want to leave "${community.name}"?`)) {
        appState.joinedCommunities = appState.joinedCommunities.filter(id => id !== communityId);
        localStorage.setItem('joinedCommunities', JSON.stringify(appState.joinedCommunities));
        
        alert(`You have left "${community.name}".`);
        
        // Refresh the current view
        populateCommunities();
    }
}

function viewCommunity(communityId) {
    const community = mockData.communities.find(c => c.id === communityId);
    if (community) {
        const isJoined = appState.joinedCommunities.includes(communityId);
        alert(`${community.name}\n\n${community.description}\n\nMembers: ${community.members.toLocaleString()}\nActivity Level: ${community.activity}\nRecent Posts: ${community.recentPosts}\n\n${isJoined ? 'You are a member of this community.' : 'Join this community to participate in discussions!'}`);
    }
}

// Smart Suggest Functions
function sendMessage() {
    const input = document.getElementById('chat-input');
    const message = input.value.trim();
    
    if (!message) return;
    
    // Add user message
    addMessage(message, 'user');
    
    // Clear input
    input.value = '';
    
    // Simulate AI response
    setTimeout(() => {
        const response = generateAIResponse(message);
        addMessage(response, 'ai');
    }, 1000);
}

function addMessage(content, type) {
    const messagesContainer = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}-message`;
    
    const icon = type === 'ai' ? 'fas fa-robot' : 'fas fa-user';
    
    messageDiv.innerHTML = `
        <div class="message-content">
            <i class="${icon}"></i>
            <span>${content}</span>
        </div>
    `;
    
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function generateAIResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('ctf') || lowerMessage.includes('challenge')) {
        return "Based on your interests, I recommend starting with our 'Deepfake Detection Challenge' for beginners. It's a great way to learn the basics! You can also try 'Social Media Investigation' if you want something more practical.";
    }
    
    if (lowerMessage.includes('community') || lowerMessage.includes('join')) {
        return "Great question! For beginners, I suggest joining 'Beginner's Corner' - it's very welcoming. If you're interested in detection techniques, 'Deepfake Fighters' is very active. For ethical discussions, check out 'AI Ethics Hub'.";
    }
    
    if (lowerMessage.includes('learn') || lowerMessage.includes('topic')) {
        return "Perfect! I recommend starting with 'Introduction to Deepfakes' to get the basics down. Then move on to 'Detection Techniques and Tools' for more advanced knowledge. Don't forget to explore 'AI Ethics and Responsibility' to understand the broader implications.";
    }
    
    if (lowerMessage.includes('beginner') || lowerMessage.includes('start')) {
        return "Welcome! For beginners, I suggest this learning path:\n1. Read 'Introduction to Deepfakes'\n2. Try the 'Deepfake Detection Challenge' CTF\n3. Join the 'Beginner's Corner' community\n4. Explore 'Cybersecurity Best Practices'\n\nThis will give you a solid foundation!";
    }
    
    if (lowerMessage.includes('advanced') || lowerMessage.includes('expert')) {
        return "For advanced users, I recommend:\n1. 'Advanced Audio Analysis' CTF\n2. 'Video Forensics CTF' for expert-level challenges\n3. Join 'Security Researchers' community\n4. Study 'Detection Techniques and Tools'\n\nThese will push your skills to the next level!";
    }
    
    if (lowerMessage.includes('detection') || lowerMessage.includes('identify')) {
        return "Great focus area! For detection skills:\n1. Study 'Detection Techniques and Tools'\n2. Practice with 'Deepfake Detection Challenge'\n3. Join 'Deepfake Fighters' community\n4. Try 'Real-time Detection' CTF when ready\n\nConsistent practice is key to becoming skilled at detection!";
    }
    
    // Default response
    return "I can help you find CTFs, suggest learning topics, recommend communities, and answer questions about deepfakes and cybersecurity. Try asking me about:\n- Beginner-friendly resources\n- Specific CTF challenges\n- Communities to join\n- Learning paths\n- Detection techniques\n\nWhat would you like to know more about?";
}

// Handle Enter key in chat input
document.addEventListener('DOMContentLoaded', function() {
    const chatInput = document.getElementById('chat-input');
    if (chatInput) {
        chatInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                sendMessage();
            }
        });
    }
});

// Admin Functions
function saveProfile(event) {
    event.preventDefault();
    
    const username = document.getElementById('profile-username').value;
    const email = document.getElementById('profile-email').value;
    const password = document.getElementById('profile-password').value;
    
    // Simulate saving to localStorage
    if (username) localStorage.setItem('currentUser', username);
    if (email) localStorage.setItem('userEmail', email);
    if (password) {
        // In a real app, this would be hashed and sent to a server
        localStorage.setItem('userPasswordUpdated', 'true');
    }
    
    alert('Profile updated successfully!');
}

function savePreferences() {
    const checkboxes = document.querySelectorAll('.preferences-grid input[type="checkbox"]');
    const preferences = [];
    
    checkboxes.forEach((checkbox, index) => {
        if (checkbox.checked) {
            preferences.push(checkbox.parentNode.textContent.trim());
        }
    });
    
    appState.userPreferences = preferences;
    localStorage.setItem('userPreferences', JSON.stringify(preferences));
    
    alert('Preferences saved successfully!');
}

// Deepfake Detection Functions
function analyzeFile() {
    const fileInput = document.getElementById('file-input');
    const file = fileInput.files[0];
    
    if (!file) return;
    
    // Simulate file analysis
    const resultSection = document.getElementById('analysis-result');
    const suggestionsSection = document.getElementById('suggestions-section');
    const resultDetails = document.getElementById('result-details');
    
    // Show loading state
    resultDetails.innerHTML = '<p><i class="fas fa-spinner fa-spin"></i> Analyzing file...</p>';
    resultSection.style.display = 'block';
    
    // Simulate analysis delay
    setTimeout(() => {
        // Generate random analysis result
        const confidence = Math.random() * 100;
        const isDeepfake = confidence > 60;
        
        let confidenceClass = 'low';
        let status = 'Likely Authentic';
        let statusColor = 'var(--success-green)';
        
        if (confidence > 80) {
            confidenceClass = 'high';
            status = 'Likely Deepfake';
            statusColor = 'var(--danger-red)';
        } else if (confidence > 40) {
            confidenceClass = 'medium';
            status = 'Uncertain';
            statusColor = 'var(--warning-orange)';
        }
        
        resultDetails.innerHTML = `
            <div style="text-align: center; margin-bottom: 1rem;">
                <h4 style="color: ${statusColor}; margin-bottom: 0.5rem;">${status}</h4>
                <p style="color: #666;">Analysis completed for: ${file.name}</p>
            </div>
            
            <div class="confidence-meter">
                <p><strong>Confidence Level: ${Math.round(confidence)}%</strong></p>
                <div class="confidence-bar">
                    <div class="confidence-fill ${confidenceClass}" style="width: ${confidence}%"></div>
                </div>
                <p style="font-size: 0.9rem; color: #666; margin-top: 0.5rem;">
                    ${confidence > 80 ? 'High confidence in detection result' : 
                      confidence > 40 ? 'Moderate confidence - manual review recommended' : 
                      'Low confidence - likely authentic content'}
                </p>
            </div>
            
            <div style="margin-top: 1.5rem;">
                <h5>Analysis Details:</h5>
                <ul style="margin-top: 0.5rem; color: #666;">
                    <li>File size: ${(file.size / 1024 / 1024).toFixed(2)} MB</li>
                    <li>File type: ${file.type || 'Unknown'}</li>
                    <li>Processing time: ${(Math.random() * 5 + 1).toFixed(1)} seconds</li>
                    <li>Detection method: Multi-modal analysis</li>
                </ul>
            </div>
        `;
        
        // Show suggestions
        suggestionsSection.style.display = 'block';
        
    }, 2000);
}

// Dashboard Deepfake Detection Function
function dashboardAnalyzeFile() {
    const fileInput = document.getElementById('dashboard-file-input');
    const file = fileInput.files[0];
    
    if (!file) return;
    
    // Simulate file analysis for dashboard
    const resultSection = document.getElementById('dashboard-analysis-result');
    const resultContent = document.getElementById('dashboard-result-content');
    
    // Show loading state
    resultContent.innerHTML = '<p style="text-align: center;"><i class="fas fa-spinner fa-spin"></i> Analyzing...</p>';
    resultSection.style.display = 'block';
    
    // Simulate analysis delay
    setTimeout(() => {
        // Generate random analysis result
        const confidence = Math.random() * 100;
        
        let status = 'Authentic';
        let statusClass = 'authentic';
        
        if (confidence > 75) {
            status = 'Deepfake';
            statusClass = 'deepfake';
        } else if (confidence > 45) {
            status = 'Suspicious';
            statusClass = 'suspicious';
        }
        
        resultContent.innerHTML = `
            <div class="result-summary">
                <div>
                    <div style="font-size: 0.9rem; color: #666; margin-bottom: 0.3rem;">${file.name}</div>
                    <div class="confidence-mini">${Math.round(confidence)}% confidence</div>
                </div>
                <div class="status-mini ${statusClass}">${status}</div>
            </div>
        `;
        
        // Auto-hide after 10 seconds
        setTimeout(() => {
            resultSection.style.display = 'none';
            fileInput.value = ''; // Reset file input
        }, 10000);
        
    }, 1500);
}

// Utility Functions
function formatNumber(num) {
    return num.toLocaleString();
}

function truncateText(text, maxLength) {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
}

// Close notifications when clicking outside
document.addEventListener('click', function(event) {
    const notificationDropdown = document.getElementById('notificationDropdown');
    const notificationIcon = document.querySelector('.notifications i');
    
    if (notificationDropdown && !notificationIcon.contains(event.target)) {
        notificationDropdown.style.display = 'none';
    }
});

// Close modal when clicking outside
document.addEventListener('click', function(event) {
    const modal = document.getElementById('signin-form');
    if (event.target === modal) {
        hideSignIn();
    }
});

console.log('TrustGuard application loaded successfully!');
