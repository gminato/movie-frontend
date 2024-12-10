import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
    const dummyImageUrl = "https://dummyimage.com/450x300/000/fff";
  return (
    <Card className="w-full max-w-md shadow-md">
      <CardHeader>
        <img src={dummyImageUrl} alt={title} className="w-full h-48 object-cover rounded-md" />
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
        <Button rel="noopener noreferrer">
          Watch Trailer
        </Button>
        <Button variant="secondary">More Info</Button>
      </CardFooter>
    </Card>
  );
};

export default MovieCard;
