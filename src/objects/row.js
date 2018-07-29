import {Seat} from './seat'
import _ from 'lodash'

export class Row {
  constructor (width, name) {
    this.width = width
    this.name = name
    this.list = []
    this.uploadList = []
    for (let col = 0; col < width; col++) {
      this.list.push(new Seat(this, col, col + 1))
    }
  }

  toJSONHard () {
    let list = this.convertList()
    let firstObj = _.filter(list, (col) => {
      return col.isActive
    })
    if (firstObj.length > 0) {
      firstObj[0].len = this.list.length
    }
    return {
      name: this.name,
      list: list,
      width: this.width
    }
  }

  convertList () {
    let data = []
    _.filter(this.list, (item, index) => {
      if (item.isActive) {
        data.push({
          row: item.row.name,
          x: item.x,
          column: item.column,
          sticky: item.sticky,
          len: item.len,
          isActive: item.isActive
        })
      }
    })
    console.log(data)
    return data
  }
  appendSeat (seat) {
    this.list.push(seat)
  }
  removeLast () {
    this.list.splice(-1, 1)
    this.list[this.list.length - 1].sticky = false
  }
  disableSeat (seat) {
    _.filter(this.list, (item, index) => {
      if (item.row === seat.row && item.x > seat.x) {
        item.column -= 1
      }
    })
  }
  activateSeat (seat) {
    _.filter(this.list, (item, index) => {
      if (item.row === seat.row && item.x > seat.x) {
        item.column += 1
      }
    })
  }

  activeLength () {
    return _.filter(this.list, (item, index) => {
      return item.isActive === true
    }).length
  }
}
