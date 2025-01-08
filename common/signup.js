api.onPageChange(() => {
    const signupButton = document.getElementById('signup-btn');
    if (signupButton) {
      signupButton.addEventListener('click', () => {
        Discourse.User.current().showSignup();
      });
    }
  });