import { ApiLogger } from "../helper/apiLogger.js";

export class ArticAPI {
  constructor(api, attach) {
    this.request = api;
       this.logger = new ApiLogger(attach);  
    this.baseUrl = "https://api.artic.edu/api/v1";
  }

  async getArtworks(page = 1, limit = 1) {
    const url = `${this.baseUrl}/artworks?page=${page}&limit=${limit}`;
    const start = Date.now();
    const response = await this.request.get(url);
    const timeMs = Date.now() - start;

    const body = await response.json();

    // Log structured API information in HTML report
    await this.logger.logAll({
      url,
      status: response.status(),
      timeMs,
      body
    });

    return { response, body };
  }
}
