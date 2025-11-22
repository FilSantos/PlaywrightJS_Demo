export class ArticAPI {
  constructor(api) {
    this.request = api;  // OK
    this.baseUrl = "https://api.artic.edu/api/v1";
  }

  async getArtworks(page = 1, limit = 1) {
    const url = `${this.baseUrl}/artworks?page=${page}&limit=${limit}`;
    console.log("Requesting URL:", url);
    const response = await this.request.get(url);
    const body = await response.json();
    return { response, body };
  }
}
