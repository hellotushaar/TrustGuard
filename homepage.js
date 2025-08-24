// Minimal homepage JS to handle modal toggles and redirect to main app without changing page content or styling.
(function(){
  function qs(id){ return document.getElementById(id); }
  var modal = qs('auth-modal');
  var loginForm = qs('login-form');
  var signupForm = qs('signup-form');
  var modalTitle = qs('modal-title');

  window.openModal = function(mode){
    if(!modal) return;
    if(mode === 'signup'){
      if(loginForm) loginForm.classList.add('hidden');
      if(signupForm) signupForm.classList.remove('hidden');
      if(modalTitle) modalTitle.textContent = 'Create your account';
    } else {
      if(loginForm) loginForm.classList.remove('hidden');
      if(signupForm) signupForm.classList.add('hidden');
      if(modalTitle) modalTitle.textContent = 'Welcome to TrustGuard';
    }
    modal.style.display = 'block';
  };

  window.closeModal = function(){ if(modal) modal.style.display = 'none'; };
  window.switchToSignup = function(){ openModal('signup'); };
  window.switchToLogin = function(){ openModal('login'); };

  window.tryDetection = function(){
    try {
      if (window.localStorage) {
        localStorage.setItem('redirectAfterLogin', 'deepfake-detection');
      }
    } catch(_) {}
    openModal('login');
  };

  // When user completes auth, set signed-in state and route to dashboard
  window.signIn = function(e){
    if(e) e.preventDefault();
    try {
      var u = (qs('login-username') && qs('login-username').value) || '';
      if (window.localStorage) {
        localStorage.setItem('isSignedIn', 'true');
        if (u) localStorage.setItem('currentUser', u);
        const redirectTarget = localStorage.getItem('redirectAfterLogin');
        if (redirectTarget) {
          localStorage.removeItem('redirectAfterLogin');
          window.location.href = `dashboard.html#${redirectTarget}`;
          return;
        }
      }
    } catch(_) {}
  window.location.href = 'dashboard.html#authed';
  };
  window.signUp = function(e){
    if(e) e.preventDefault();
    try {
      var u = (qs('signup-username') && qs('signup-username').value) || '';
      if (window.localStorage) {
        localStorage.setItem('isSignedIn', 'true');
        if (u) localStorage.setItem('currentUser', u);
        const redirectTarget = localStorage.getItem('redirectAfterLogin');
        if (redirectTarget) {
          localStorage.removeItem('redirectAfterLogin');
          window.location.href = `dashboard.html#${redirectTarget}`;
          return;
        }
      }
    } catch(_) {}
  window.location.href = 'dashboard.html#authed';
  };

  // Close modal when clicking outside
  window.addEventListener('click', function(ev){
    if(ev.target === modal){ closeModal(); }
  });

  // Placeholder contact form handler to avoid errors if present
window.submitContactForm = function (e) {
    if (e) e.preventDefault(); document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('subject').value = '';
    document.getElementById('message').value = ''; 
    alert('Thanks! We\'ll get back to you shortly.');
  };

  // Deep link support: if URL has #auth, open the login modal by default
  try {
    var hash = window.location.hash;
    if (hash === '#auth') openModal('login');
    if (hash === '#signup') openModal('signup');
  } catch(e) {}

  // Ensure forms call our handlers even if inline attributes are ignored
  try {
    document.addEventListener('DOMContentLoaded', function(){
      var loginFormEl = document.querySelector('#login-form form');
      var signupFormEl = document.querySelector('#signup-form form');
      if (loginFormEl) {
        loginFormEl.addEventListener('submit', function(ev){ window.signIn(ev); });
      }
      if (signupFormEl) {
        signupFormEl.addEventListener('submit', function(ev){ window.signUp(ev); });
      }
    });
  } catch(e) {}
})();
