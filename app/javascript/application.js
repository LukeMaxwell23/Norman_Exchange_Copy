document.addEventListener('DOMContentLoaded', () => {
  // Buy button functionality
  document.querySelectorAll('.buy-button').forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      button.disabled = true;
      button.innerHTML = 'Processing...';
      button.closest('form').submit();
    });
  });

  // Profile picture preview
  const profilePictureInput = document.getElementById('profilePicture');
  const imagePreview = document.getElementById('imagePreview');
  if (profilePictureInput && imagePreview) {
    profilePictureInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      imagePreview.innerHTML = '';

      if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const img = document.createElement('img');
          img.src = e.target.result;
          img.style.width = '5rem';
          img.style.height = '5rem';
          img.style.borderRadius = '50%';
          img.style.objectFit = 'cover';
          img.alt = 'Profile picture preview';
          imagePreview.appendChild(img);
        };
        reader.readAsDataURL(file);
      } else if (file) {
        alert('Please upload an image file.');
        e.target.value = '';
      }
    });
  }
});