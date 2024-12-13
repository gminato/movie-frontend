// Import necessary components from Shadcn UI
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogTitle, DialogContent } from "@/components/ui/dialog";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useState } from "react";

type Showtime = {
  time: string;
  price: number;
  currency: string;
};

type Screen = {
  screen_id: string;
  screen_name: string;
  available_seats: number;
  timings: Showtime[];
};

type Theater = {
  theater_id: string;
  theater_name: string;
  location: string;
  screens: Screen[];
};

type Movie = {
  id: string;
  title: string;
  description: string;
  genre: string[];
  duration: number;
  rating: string;
  release_date: string;
  poster_url: string;
  trailer_url: string;
  language: string;
  showtimes: Theater[];
};

const MovieList: React.FC<{ movies: Movie[] }> = ({ movies }) => {
  const [selectedShowtime, setSelectedShowtime] = useState<Showtime | null>(
    null
  );

  const handleBooking = (showtime: Showtime) => {
    setSelectedShowtime(showtime);
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {movies.map((movie) => (
          <Card key={movie.id} className="shadow-lg">
            <img
              src={movie.poster_url}
              alt={movie.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">{movie.title}</h3>
              <p className="text-sm text-gray-600">{movie.description}</p>
              <div className="flex items-center mt-2 space-x-2">
                {movie.genre.map((g) => (
                  <span
                    key={g}
                    className="px-2 py-1 text-xs text-white bg-gray-800 rounded-full"
                  >
                    {g}
                  </span>
                ))}
              </div>
              <p className="mt-2 text-sm">Duration: {movie.duration} mins</p>
              <p className="text-sm">Rating: {movie.rating}</p>
              <p className="text-sm">Language: {movie.language}</p>
              <Button
                className="mt-4"
                onClick={() =>
                  handleBooking(movie.showtimes[0].screens[0].timings[0])
                }
              >
                Book Now
              </Button>
            </div>
          </Card>
        ))}

        {selectedShowtime && (
          <Dialog
            open={!!selectedShowtime}
            onOpenChange={() => setSelectedShowtime(null)}
          >
            <DialogTitle>Book Your Seat</DialogTitle>
            <DialogContent>
              <div>
                <h4 className="text-lg font-semibold">
                  Showtime: {new Date(selectedShowtime.time).toLocaleString()}
                </h4>
                <p>
                  Price: {selectedShowtime.price} {selectedShowtime.currency}
                </p>
                <Button
                  className="mt-4"
                  onClick={() => alert("Booking confirmed!")}
                >
                  Confirm Booking
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
};

const TheatreSelection: React.FC = () => {
  const movies: Movie[] = [
    {
      id: "1",
      title: "The Grand Adventure",
      description: "A thrilling journey through uncharted territories.",
      genre: ["Adventure", "Action"],
      duration: 120,
      rating: "PG-13",
      release_date: "2024-12-01",
      poster_url: "https://example.com/images/the-grand-adventure.jpg",
      trailer_url: "https://example.com/trailers/the-grand-adventure.mp4",
      language: "English",
      showtimes: [
        {
          theater_id: "101",
          theater_name: "Cineplex Downtown",
          location: "123 Main St, Cityville",
          screens: [
            {
              screen_id: "A1",
              screen_name: "Screen 1",
              available_seats: 50,
              timings: [
                {
                  time: "2024-12-10T14:30:00",
                  price: 10.0,
                  currency: "USD",
                },
                {
                  time: "2024-12-10T17:30:00",
                  price: 12.0,
                  currency: "USD",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "2",
      title: "Comedy Night",
      description: "An ensemble of hilarious stories intertwined.",
      genre: ["Comedy"],
      duration: 90,
      rating: "PG",
      release_date: "2024-11-25",
      poster_url: "https://example.com/images/comedy-night.jpg",
      trailer_url: "https://example.com/trailers/comedy-night.mp4",
      language: "English",
      showtimes: [
        {
          theater_id: "102",
          theater_name: "MegaCinema Mall",
          location: "456 Market Blvd, Cityville",
          screens: [
            {
              screen_id: "B1",
              screen_name: "Screen 5",
              available_seats: 30,
              timings: [
                {
                  time: "2024-12-10T15:00:00",
                  price: 8.0,
                  currency: "USD",
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  return <MovieList movies={movies} />;
};

export default TheatreSelection;
