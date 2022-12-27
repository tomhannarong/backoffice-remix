export interface IDogRandomResponse {
  message: string;
  status: string;
}

export async function getDogRandom(): Promise<IDogRandomResponse> {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");

  if (!response.ok) throw new Error("Image not found");
  return response.json();
}
