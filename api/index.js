//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const { default: axios } = require('axios');
const server = require('./src/app.js');
const { conn, Country, Activity } = require('./src/db.js');
const {activitiesBulk} = require("./activitiesBulk");

// Syncing all the models at once.
conn.sync({ force: true }).then(async () => {
  try {
    let res = await Country.findAll()
    if(res.length === 0){
      try {
        let response = await axios.get("http://restcountries.com/v3.1/all")
        let api = response.data
        api && api.map(async country => 
        await Country.findOrCreate({
          where: {
            id: country.cca3,
            name: country.name.common,
            flag: country.flags.png,
            continent: country.continents ? country.continents[0] : "No Continent on Record",
            capital: country.capital ? country.capital[0] : "No Capital on Record",
            subregion: country.subregion ? country.subregion : "No Subregion on Record",
            area: country.area,
            population: country.population || 0,
            timezone: country.timezones,
            coatOfArms: country.coatOfArms.png || "No Coat of Arms on Record",
            borders: country.borders ? country.borders : ["No Borders"],
            landLocked: country.landlocked ? "No" : "Yes"
          }
        }))
      } catch (err) {
        console.error(err)
      }
    }
  } catch (err) {
    console.error(err)
  }
  try {
    activitiesBulk.map(async (el) => {
      let newActivity = await Activity.create({
        name: el.name,
        duration: el.duration,
        difficulty: el.difficulty,
        season: el.season,
      })
      await newActivity.addCountry(el.countryId)
    })
  } catch (err) {
    console.error(err)
  }
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
