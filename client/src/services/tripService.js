const API_BASE_URL = "http://localhost:4001";

export async function fetchTrips(keywords = "") {
  const params = new URLSearchParams({ keywords });
  const response = await fetch(`${API_BASE_URL}/trips?${params}`);

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || "ไม่สามารถดึงข้อมูลที่เที่ยวได้");
  }

  const result = await response.json();
  return result.data;
}
