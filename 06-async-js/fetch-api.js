/**
 * FETCH API
 * ---------
 * Used to make HTTP requests
 * (Node 18+ supports fetch natively)
 */

const API_URL = "https://jsonplaceholder.typicode.com/posts/1";

async function getPost() {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log("Post title:", data.title);
  } catch (error) {
    console.error("Fetch error:", error.message);
  }
}

getPost();

/**
 * Fetch with POST request
 */
async function createPost() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: "New Post",
      body: "This is a post body",
      userId: 1
    })
  });

  const data = await response.json();
  console.log("Created post:", data);
}

createPost();
