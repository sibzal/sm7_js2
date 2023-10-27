const list = document.querySelector('.list')

async function getPosts(){
    let res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
    let data = await res.json()
    for (let i = 0; i < data.length; i++){
        list.insertAdjacentHTML('beforeend', renderPost(data[i]))
    }
}

function renderPost(post){
    return `
        <div class="post">
            <p class="id">`+ post.id+`</p>
            <p class="title">`+ post.title+` </p>
            <p class="body">`+ post.body+` </p>
        </div>
    `
}
getPosts()