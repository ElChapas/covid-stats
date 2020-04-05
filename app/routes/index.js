import Route from '@ember/routing/route';
import RSVP from 'rsvp';
// RSVP to have multiple fetched data
export default class IndexRoute extends Route {
  async model() {
    // Fetching global records
    let response = await fetch('http://api.coronastatistics.live/all');
    let globalData = await response.json();
    console.log(globalData);
    // Fetching countries records
    response = await fetch('http://api.coronastatistics.live/countries');
        let countriesData = await response.json();
        /// Sorting countries by cases
        countriesData.sort((a,b) => {
            if (a.cases > b.cases) {
                return -1
            } else {
                return 1
            }
        })
        // return fetched data to use with "@model. --"
    return RSVP.hash({
      globalData: globalData,
      countriesData: countriesData
    });


  }
}