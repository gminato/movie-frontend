export interface Timing {
    time: string;
    price: number;
    currency: string;
  }
  
  export interface Screen {
    screen_id: string;
    screen_name: string;
    available_seats: number;
    timings: Timing[];
  }
  
  export interface Theater {
    theater_id: string;
    theater_name: string;
    location: string;
    screens: Screen[];
  }

  export interface Response {
    data: Theater[];
    status: string;
    movie: any;
  }