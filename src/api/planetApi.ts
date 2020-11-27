import { RESTDataSource } from 'apollo-datasource-rest';

// Ficou massa!
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
      // show de bola! massa ter usado  flatmap
      // só não fez sentido usar async await, tira o sentido do promise.all ali em baixo
      const promises = arrayPage.flatMap((item: number) => {
        return this.getPlanets(item);
      });

      const response = Promise.all(promises);

      return response;
    } catch (error) {
      throw new Error('Could not possible to find api data');
    }
  }
}
