api.onPageChange(() => {
    const signupButton = document.getElementById('signup-btn');
    if (signupButton) {
      console.log('signup button found');
      signupButton.addEventListener('click', () => {
        Discourse.User.current().showSignup();
      });
    }
  });