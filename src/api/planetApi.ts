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
  async getPlanetsManyPages(arrayPage: Array<number>) {
    try {
      const promises = arrayPage.flatMap(async (item: number) => {
        const dataWithoutPage = await this.getPlanets(item);
        return dataWithoutPage;
      });

      const response = await Promise.all(promises);

      return response;
    } catch (error) {
      throw new Error('Could not possible to find api data');
    }
  }
}
