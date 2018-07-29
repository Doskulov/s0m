export class Seat {
  constructor (row, x, column) {
    this.row = row
    this.x = x
    this.column = column
    this.isActive = true
    this.sticky = false
    this.len = null
  }
  setLen (x) {
    this.len = x
    alert(x)
  }
  toggleSeat () {
    if (this.isActive) {
      this.isActive = false
      this.sticky = false
      this.row.disableSeat(this)
    } else {
      this.isActive = true
      this.sticky = false
      this.row.activateSeat(this)
    }
  }
}
