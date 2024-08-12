export async function testFunction() {
  const response = await fetch("https://example.com/data");
  const data = await response.json();
  return data;
}
