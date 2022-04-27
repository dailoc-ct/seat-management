import { defineStore } from "pinia";
import { SeatMap } from "../../public/interface/seatMap.state";

export const seatMap = defineStore({
  // arrow function recommended for full type inference
  id: "seatMapStore",
  state: () =>
    ({
      seats: null,
      floor: 0,
    } as SeatMap),
  getters: {
    getFloor: (state) => state.floor,
    getSeats: (state) => state.seats,
  },
  actions: {
    fetch() {
      this.seats = dataSeatMapReturn.seats;
      this.floor = dataSeatMapReturn.floor;
    },
  },
});

//mock data
const dataSeatMapReturn = {
  floor: 8,
  seats: [
    { line: 1, seatNumber: "1", x: 50, y: 50 },
    { line: 1, seatNumber: "2", x: 50, y: 100 },
    { line: 1, seatNumber: "3", x: 100, y: 50 },
    { line: 1, seatNumber: "4", x: 100, y: 100 },
    { line: 1, seatNumber: "5", x: 50, y: 150 },
    { line: 1, seatNumber: "6", x: 100, y: 150 },
    { line: 2, seatNumber: "7", x: 50, y: 200 },
    { line: 2, seatNumber: "8", x: 100, y: 200 },
    { line: 3, seatNumber: "9", x: 50, y: 250 },
    { line: 4, seatNumber: "10", x: 100, y: 250 },
    { line: 4, seatNumber: "11", x: 300, y: 100 },
    { line: 4, seatNumber: "12", x: 300, y: 50 },
    { line: 4, seatNumber: "13", x: 350, y: 50 },
    { line: 4, seatNumber: "14", x: 350, y: 100 },
    { line: 3, seatNumber: "15", x: 350, y: 250 },
    { line: 4, seatNumber: "16", x: 300, y: 250 },
    { line: 4, seatNumber: "17", x: 300, y: 150 },
    { line: 4, seatNumber: "18", x: 350, y: 150 },
    { line: 4, seatNumber: "19", x: 300, y: 200 },
    { line: 4, seatNumber: "20", x: 350, y: 200 },
    { line: 4, seatNumber: "21", x: 50, y: 500 },
    { line: 4, seatNumber: "22", x: 50, y: 550 },
  ],
};
