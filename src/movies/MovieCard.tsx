import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface MovieCardProps {
  id: number;
  title: string;
  description: string;
  genres: string[];
  duration: number;
  rating: string;
  releaseDate: string;
  posterUrl: string;
  trailerUrl: string;
}

const MovieCard: React.FC<MovieCardProps> = ({
  title,
  description,
  genres,
  duration,
  rating,
  releaseDate,
  posterUrl,
  trailerUrl,
}) => {
  const navigate = useNavigate();

  const handleBookTicketClick = () => {
    navigate(`${title}`);
  };

  return (
    <Card className="w-full max-w-md shadow-md">
      <CardHeader>
        <img src={posterUrl} alt={title} className="w-full h-68 object-cover rounded-md" />
      </CardHeader>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <div className="mt-4 text-sm">
          <p><strong>Genres:</strong> {genres.join(", ")}</p>
          <p><strong>Duration:</strong> {duration} mins</p>
          <p><strong>Rating:</strong> {rating}</p>
          <p><strong>Release Date:</strong> {new Date(releaseDate).toLocaleDateString()}</p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between mt-4">
        <Button onClick={handleBookTicketClick} className="w-full">Book Ticket</Button>
      </CardFooter>
    </Card>
  );
};

export default MovieCard;
