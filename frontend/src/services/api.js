const API_BASE_URL = "http://127.0.0.1:8000/api";

export async function fetchCars() {
  try {
    const response = await fetch(`${API_BASE_URL}/cars/`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching cars:", error);
    return [];
  }
}
