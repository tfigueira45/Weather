async function getApiData(url) {
    let request = await fetch(url);
    let data = await request.json();
    
    return data;
}
  
  export default getApiData;