var POSTS = {
  "1": { post: "This is first blog post" },
  "2": { post: "This is second blog post" },
  "3": { post: "This is third blog post" }
};

window.handler && window.handler(JSON.stringify(POSTS));
