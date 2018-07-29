import API from '../config'
import axios from 'axios'

export class MainService {
  static addHalls (rows, hall, width, height) {
    axios.post(API.test + '/cinema/add_hall/', {
      rows: rows,
      hall: hall,
      width: width,
      height: height
    })
      .then((response) => {
        alert('DONE')
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  static getHall (rows, hall, width, height) {
    axios.get(API.local + '/cinema/v2/movie_session/4444')
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}
