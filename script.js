// Unsplash API
const count = 10;
const apiKey = "P_Wq0Xi2tyJzdZDuvxrN8k5VzfdZI8gj0bSL0mmlQ60";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photos from Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    alert("Oops, looks like something went wrong!", error);
  }
}

// On Load
getPhotos();
