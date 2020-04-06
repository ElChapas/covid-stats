import Route from '@ember/routing/route';

export default class CountryRoute extends Route {
  async model(params) {
    let response = await fetch(`https://corona.lmao.ninja/countries/${params.country_id}`);
    let data = await response.json();
    return data;
  }
}