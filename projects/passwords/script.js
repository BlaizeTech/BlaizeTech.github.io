const generatePassword = () => {
  const length = 12;
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
  let password = '';
  
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  
  document.getElementById('password').value = password;
};

const copyPassword = () => {
  const passwordInput = document.getElementById('password');
  passwordInput.select();
  passwordInput.setSelectionRange(0, 99999);
  document.execCommand('copy');
  alert('Password copied to clipboard!');
};

document.getElementById('generate-btn').addEventListener('click', generatePassword);
document.getElementById('copy-btn').addEventListener('click', copyPassword);
