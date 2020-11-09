import { RESTDataSource } from 'apollo-datasource-rest';

export default class PlanetAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.arcsecond.io/';
  }

  async getPlanets(page: number) {
    try {
      const response = this.get(`exoplanets/?page=${page}`);
      return response;
    } catch (error) {
      throw new Error('Could not possible to find api data.');
    }
  }
}
