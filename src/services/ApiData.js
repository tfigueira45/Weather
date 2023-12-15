export async function getApiData(url) {
  try {
    let request = await fetch(url);
    if (!request.ok) {
      throw new Error(`HTTP error! status: ${request.status}`);
    }
    let data = await request.json();
    return data;
  } catch (error) {
    console.error(`Fetch Error =\n`, error);
    throw error;
  }
}