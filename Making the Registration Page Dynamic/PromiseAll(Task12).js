let posts = [{ title: "POST1", lastactivityTime: "1683045820", body: 'This is Post 1' },

{ title: "POST2", lastactivityTime: "1683045444278", body: 'This is Post 2' }];

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false;
      if (!error) {
        posts.push(post);
        resolve(posts)
      }
      else {
        reject('Something went to wrong');
      }
    }, 1000);
  })
}

function updateLastUserActivityTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts[posts.length - 1]["lastactivityTime"] = new Date().getTime();
      resolve(posts);
    }, 1000)
  })
}

function deletePost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.pop();
      resolve(posts);
    }, 1000)
  })
}

Promise.all([createPost({ title: 'Post Five', body: 'This is Post Five' }), updateLastUserActivityTime(), deletePost()])

  .then((res) => console.log(res));