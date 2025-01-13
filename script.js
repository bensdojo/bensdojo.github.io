// Sample data for dynamic loading
const posts = [
    {
        title: "Blog Post Title 4",
        content: "Curabitur auctor leo vitae nisl scelerisque, vel dictum augue cursus. Suspendisse potenti.",
    },
    {
        title: "Blog Post Title 5",
        content: "Vestibulum in augue et odio tristique luctus non eget lacus. Vivamus eget dui id nisi faucibus consequat.",
    },
    {
        title: "Blog Post Title 6",
        content: "Aliquam erat volutpat. Sed accumsan turpis a lorem sagittis fringilla.",
    },
];

const blogContainer = document.getElementById('blogContainer');
const loadMoreButton = document.getElementById('loadMore');

let postIndex = 0;

function loadPosts() {
    let newPosts = '';
    for (let i = 0; i < 2; i++) {
        if (postIndex >= posts.length) {
            loadMoreButton.style.display = 'none';
            break;
        }

        const post = posts[postIndex];
        newPosts += `
            <article class="post">
                <h2>${post.title}</h2>
                <p>${post.content}</p>
                <a href="#">Read more...</a>
            </article>
        `;
        postIndex++;
    }
    blogContainer.innerHTML += newPosts;
}

loadMoreButton.addEventListener('click', loadPosts);
