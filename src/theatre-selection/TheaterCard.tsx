import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

// Define the types based on the JSON structure
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

export interface TheaterCardProps {
  theater: Theater;
}

const TheaterCard: React.FC<TheaterCardProps> = ({ theater }) => {
  return (
    <Card className="flex flex-row p-4 space-x-4">
      {/* Left Side: Theater Info */}
      <div className="w-1/3 border-r pr-4">
        <h2 className="text-lg font-bold">{theater.theater_name}</h2>
        <p className="text-sm text-gray-500">{theater.location}</p>
      </div>

      {/* Right Side: Screens Info */}
      <div className="w-2/3 flex flex-wrap gap-2">
        {theater.screens.map((screen) => (
          <button
            key={screen.screen_id}
            className="h-26 w-40 border p-2  text-left flex flex-col justify-between bg-gray-100 hover:bg-gray-200"
          >
            <span className="font-semibold ">{screen.screen_name}</span>
            {screen.timings.map((timing, index) => (
              <span key={index} className="text-gray-600">
                {new Date(timing.time).toLocaleString()} - {timing.currency} {timing.price.toFixed(2)}
              </span>
            ))}
          </button>
        ))}
      </div>
    </Card>
  );
};

export default TheaterCard;

// Example Usage
// const theaterData = {
//   theater_id: "102",
//   theater_name: "MegaCinema Mall",
//   location: "456 Market Blvd, Cityville",
//   screens: [
//     {
//       screen_id: "B1",
//       screen_name: "Screen 5",
//       available_seats: 30,
//       timings: [
//         {
//           time: "2024-12-10T15:00:00",
//           price: 8.0,
//           currency: "USD",
//         },
//       ],
//     },
//   ],
// };

// <TheaterCard theater={theaterData} />
