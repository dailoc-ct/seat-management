export interface SeatMap {
  floor: number;
  seats: Seat[] | null;
}

export interface Seat {
  x: number;
  y: number;
  seatNumber: string;
  line: number;
  on?: boolean;
}
