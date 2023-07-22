export async function fetchData(url) {
  const promise = await fetch(url)
    .then(res => res.json())
    .finally(data => data)
  return promise.productos
}