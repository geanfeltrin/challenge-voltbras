import { RESTDataSource } from 'apollo-datasource-rest'

export default class PlanetAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'https://api.arcsecond.io/'
  }

  async getPlanets(page: number) {
    return this.get(`exoplanets/?page=${page}`)
  }
}
