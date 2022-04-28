import { defineStore } from "pinia";
import { SeatMap } from "../../public/interface/seatMap.state";
import { result } from "@/test-convert/convert-svg";

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
    uploadFile(file: any) {
      console.log(file.get("image").name);

      switch (file.get("image").name) {
        case "floor.svg":
          console.log(translateFloorSVGToObject().filter((ele: any) => ele));

          this.seats = translateFloorSVGToObject().filter((ele: any) => ele);
      }

      this.floor = dataSeatMapReturn.floor;
    },
  },
});

//mock data
const dataSeatMapReturn = {
  floor: 8,
  seats: [
    { line: 1, seatNumber: "tdloc", x: 17, y: 125, on: true },
    { line: 1, seatNumber: "nqtrieu", x: 77, y: 125, on: true },
    { line: 1, seatNumber: "ppsang", x: 137, y: 125, on: true },
    { line: 1, seatNumber: "ttkhanh", x: 197, y: 125, on: true },
    { line: 1, seatNumber: "tqcuong", x: 257, y: 125, on: true },
    { line: 1, seatNumber: "vtan", x: 317, y: 125, on: true },
    { line: 2, seatNumber: "nttoan", x: 17, y: 170, on: true },
    { line: 2, seatNumber: "tqhuy", x: 77, y: 170, on: true },
    { line: 3, seatNumber: "tthuy", x: 137, y: 170, on: true },
    { line: 4, seatNumber: "lnhuy", x: 197, y: 170, on: true },
    { line: 4, seatNumber: "hqhai", x: 257, y: 170, on: true },
    { line: 4, seatNumber: "nhtngan", x: 317, y: 170, on: true },
    { line: 4, seatNumber: "nqdao", x: 510, y: 125, on: true },
    { line: 4, seatNumber: "pdtien", x: 570, y: 125, on: true },
    { line: 3, seatNumber: "vttoan", x: 630, y: 125, on: true },
    { line: 4, seatNumber: "htnhoa", x: 690, y: 125, on: true },
    { line: 4, seatNumber: "thvang", x: 510, y: 170, on: true },
    { line: 4, seatNumber: "ttphuoc", x: 570, y: 170, on: true },
    { line: 4, seatNumber: "hhphuc", x: 630, y: 170, on: true },
    { line: 4, seatNumber: "hhau", x: 690, y: 170, on: true },
    { line: 4, seatNumber: "xxx", x: 17, y: 275 },
    { line: 4, seatNumber: "yyy", x: 17, y: 320 },
  ],
};

const translateFloorSVGToObject = () => {
  const seats = result.svg[0].g[0].rect;
  let countNumber = 0;
  return seats.map((seat: any) => {
    const object = seat._attributes;
    if (object.height === 80 && object.width === 80) {
      ++countNumber;
      return {
        x: object.x,
        y: object.y,
        line: countNumber % 3,
        seatNumber: countNumber % 4 !== 0 ? countNumber + "" : "",
        on: countNumber % 4 !== 0,
      };
    }
  });
};
