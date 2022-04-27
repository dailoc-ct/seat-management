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
    { line: 1, seatNumber: "2", x: 150, y: 150 },
    { line: 1, seatNumber: "3", x: 250, y: 250 },
    { line: 1, seatNumber: "4", x: 350, y: 350 },
    { line: 1, seatNumber: "5", x: 350, y: 350 },
    { line: 1, seatNumber: "6", x: 450, y: 450 },
    { line: 2, seatNumber: "7", x: 550, y: 550 },
    { line: 2, seatNumber: "8", x: 650, y: 650 },
    { line: 3, seatNumber: "9", x: 750, y: 750 },
    { line: 4, seatNumber: "11", x: 850, y: 850 },
    { line: 4, seatNumber: "12", x: 950, y: 950 },
    { line: 4, seatNumber: "13", x: 1050, y: 1050 },
  ],
};
