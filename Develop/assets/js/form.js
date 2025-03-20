const formElement = document.querySelector('form');

function handleFormSubmit(event) {
  event.preventDefault();

  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;
  const username = document.getElementById('username').value;

  if (!title || !content || !username) {
    errorMessage('Please fill out all fields');
    return;
  }

  const newPost = {
    title,
    content,
    username,
  };

  storeLocalStorage(newPost);   
    redirectPage('blog.html');
}   

formElement.addEventListener('submit', handleFormSubmit);
