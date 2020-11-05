export const fetchCafes = async () => {
  try {
    const response = await fetch(
      "https://localhost:8080/cafes", 
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    const cafeResponse = await response.json();
    return cafeResponse
  } catch (error) {
    console.error(error);
  }
}