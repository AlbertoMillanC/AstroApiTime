const getProducts = async () => {
  const headers = new Headers();
  headers.set("origin", "http://localhost:3000/");
  const response = await fetch("https://cors-anywhere.herokuapp.com/https://www.timeapi.io/api/Time/current/zone?timeZone=America/Lima", {
    method: "GET",
    headers
  });
  const resp = await response.text();
  console.log(resp);
  const json = JSON.parse(resp);
  console.log(JSON.stringify(json));
  return json.year;
};
export default getProducts;
