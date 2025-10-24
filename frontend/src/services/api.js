const API_BASE_URL = "http://127.0.0.1:8000/api";


export const fetchCars = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/cars/`);
    if (!response.ok) throw new Error("Failed to fetch cars");

    const data = await response.json();
    console.log("✅ Cars API Response:", data);

    // Normalize image URLs for each car
    const normalizedData = (Array.isArray(data) ? data : data.results || []).map(car => ({
      ...car,
      images: (car.images || []).map(img =>
        img.image.startsWith("http") ? img.image : `http://127.0.0.1:8000${img.image}`
      )
    }));

    return normalizedData;
  } catch (error) {
    console.error("❌ Error fetching cars:", error);
    return [];
  }
};

export async function submitEnquiry(formData) {
  try {
    const response = await fetch(`${API_BASE_URL}/enquiries/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || "Failed to submit enquiry");
    }

    return await response.json();
  } catch (error) {
    console.error("❌ Error submitting enquiry:", error);
    throw error;
  }
}


export async function submitCarEnquiry(formData) {
  try {
    const response = await fetch(`${API_BASE_URL}/car-enquiries/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || "Failed to submit car enquiry");
    }

    return await response.json();
  } catch (error) {
    console.error("❌ Error submitting car enquiry:", error);
    throw error;
  }
}