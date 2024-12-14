import TheaterCard from "./TheaterCard";
import { Response, Theater } from "./TheatreResponse";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const TheatreSelection = () => {
  const theaterResponse: Response = {
    status: "success",
    data: [
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
      {
        theater_id: "103",
        theater_name: "Cinema City",
        location: "123 Main St, Townsville",
        screens: [
          {
            screen_id: "B2",
            screen_name: "Screen 1",
            available_seats: 50,
            timings: [
              {
                time: "2024-12-11T18:00:00",
                price: 10.0,
                currency: "USD",
              },
            ],
          },
        ],
      },
    ],
    movie: {},
  };

  const theaters = theaterResponse.data;

  return (
    <div className="space-y-4 m-20">
      {theaters.map((theater) => (
        <TheaterCard key={theater.theater_id} theater={theater} />
      ))}
      {/* pagination  */}
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
    </div>
  );
};

export default TheatreSelection;
