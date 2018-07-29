<template>
  <div class="row-list">
    <div style="display: flex; flex-direction: row; color: black;">
      <button class="button" v-on:click="addRow">
        Add row
      </button>
      <button class="button" v-on:click="removeRow">
        Delete row
      </button>
    </div>
    <div class="row-item" v-bind:key="index + 'row_key'" v-for="(row,index) in currentRowList">
      <p class="has-text-info" style="width: 25px; display: flex; justify-content: center; align-items: center;">{{row.name}} </p>
      <button class="seat-item seat-methods" v-on:click="removeColumn(row)">
        -
      </button>
      <div v-bind:key="index + 'seat_key'" v-for="(seat,index) in row.list">
        <button class="seat-item" v-bind:class="{ disable: !seat.isActive, steacker: seat.sticky, nextsteaker: index !== 0 && row.list[index - 1].sticky}" v-on:click.middle="sticky(row.list, index)" v-on:click="toggleSeat(seat)" >
          <span v-if="seat.isActive">{{ seat.column }}</span>
        </button>
      </div>
      <button class="seat-item seat-methods" v-on:click="addColumn(row)">
        +
      </button>
      </div>
    <button class="button" v-on:click="upload">
      Upload
    </button>
    </div>
</template>

<script>
import {Row} from '../objects/row'
import {Seat} from '../objects/seat'
import {MainService} from '../services/service'

export default {
  data: function () {
    return {
      rowLength: 10,
      colLength: 24,
      currentRowList: []
    }
  },
  name: 'CinemaHall',
  created: function () {
    for (let row = this.rowLength; row > 0; row--) {
      let rowObj = new Row(this.colLength, row)
      this.currentRowList.push(rowObj)
    }
  },
  methods: {
    addRow: function () {
      this.rowLength += 1
      let rowObj = new Row(this.colLength, this.rowLength)
      this.currentRowList.push(rowObj)
    },
    removeRow: function () {
      this.currentRowList.splice(-1, 1)
    },
    addColumn: function (row) {
      let seat = new Seat(row, row.list.length, row.activeLength() + 1)
      row.width += 1
      row.appendSeat(seat)
    },
    removeColumn: function (row) {
      row.width -= 1
      row.removeLast()
    },
    toggleSeat: function (seat) {
      seat.toggleSeat()
    },
    sticky: function (list, index) {
      if (typeof list[index + 1] === 'undefined') {
        this.$alertify.warning('Sorry neighbours index is undefined', 2)
      } else {
        if (index === 0) {
          list[index].sticky = !list[index].sticky
          return
        }
        if ((list[index + 1].sticky || list[index - 1].sticky) && !list[index].sticky) {
          this.$alertify.warning('Wrong logic', 2)
        } else {
          list[index].sticky = !list[index].sticky
        }
      }
    },
    upload: function () {
      let data = []
      for (let i = 0; i < this.currentRowList.length; i++) {
        data.push(this.currentRowList[i].toJSONHard())
      }
      MainService.addHalls(data, 10, this.colLength, this.rowLength)
      // MainService.getHall()
    }
  }
}
</script>

<style scoped>
  .row-list{
    width: 100%;
    padding: 30px;
    background-color: white;
    display: flex;
    flex-direction: column;
  }
  .row-item{
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .seat-item{
    width: 35px !important;
    height: 35px !important;
    /*border-radius: 35px;*/
    font-size: 15px;
    background-color: #28a4cd;
    color: #ffffed;
    border: 1px solid #ffffed;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: 1px;
    outline: none;
  }
  .seat-item:hover{
    border: 1px solid #28a4cd;
    background-color: #ffffed;
    color: #28a4cd;
  }
  .seat-methods{
    border: 1px solid #28a4cd;
    background-color: #ffffed;
    color: #28a4cd;
    margin: 1px 30px;
    font-weight: bolder;
  }
  .disable{
    background-color: rgba(0,0,0,0.1)
  }
  .steacker{
    margin-left: 3px;
    border: 1px solid black;
    border-bottom-left-radius: 20px;
    border-top-left-radius: 20px;
    margin-right: -3px;
    border-right: 0;
    background-color: yellow;
    color: black;
  }
  .nextsteaker{
    margin-right: 3px;
    border: 1px solid black;
    background-color: yellow;
    border-left: 0;
    border-bottom-right-radius: 20px;
    border-top-right-radius: 20px;
    color: black;
  }
</style>
