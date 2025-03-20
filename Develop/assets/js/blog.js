const mainElement = document.querySelector('main');
const backButton = document.getElementById('back');

function createElement(tag, text, parent) {
    const element = document.createElement(tag);
    element.textContent = text;
    parent.appendChild(element);
}

function displayNoPostsMessage() {
    mainElement.innerHTML = '';
    createElement('p', 'No blog posts available.', mainElement);
}

function renderBlogList() {
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    mainElement.innerHTML = '';

    if (blogPosts.length === 0) {
        displayNoPostsMessage();
    } else {
        blogPosts.forEach(post => {
            const article = document.createElement('article');
            createElement('h2', post.title, article);
            createElement('h3', `By: ${post.username}`, article);
            createElement('p', post.content, article);
            mainElement.appendChild(article);
        });
    }
}

renderBlogList();

backButton.addEventListener('click', () => {
    if (typeof redirectPage === 'function') {
        redirectPage('index.html');
    } else {
        console.error('redirectPage function is not defined');
    }
});
