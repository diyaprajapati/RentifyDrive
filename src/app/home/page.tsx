"use client";

import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { getSessionToken } from "@/lib/utils";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";

interface Car {
  _id: string;
  make: string;
  model: string;
  year: number;
  color: string;
  licensePlate: string;
  seats: number;
  fuelType: string;
  transmission: string;
  pricePerDay: number;
  features: string[];
  images: string[];
}

export default function CarsPage() {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCars = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:3001/api/cars");
        const data = await response.json();
        setCars(data.cars);
        console.log("Data", data);
      } catch (error) {
        console.error("Error fetching cars:", error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">Our Fleet</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <Card key={index} className="overflow-hidden">
              <Skeleton className="h-48 w-full" />
              <CardHeader>
                <Skeleton className="h-6 w-2/3" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4" />
              </CardContent>
              <CardFooter>
                <Skeleton className="h-10 w-full" />
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Our Fleet</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.length > 0 &&
          cars?.map((car) => (
            <Card key={car._id} className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={`${car.images[0]}`}
                  alt={`${car.make} ${car.model}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{`${car.make} ${car.model} (${car.year})`}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">{car.transmission}</Badge>
                  <Badge variant="secondary">{car.fuelType}</Badge>
                  <Badge variant="secondary">{`${car.seats} seats`}</Badge>
                </div>
                <p className="text-muted-foreground mb-2">{car.color}</p>
                <p className="font-semibold text-lg">
                  ₹{car.pricePerDay} / day
                </p>
              </CardContent>
              <Separator />
              <CardFooter className="pt-4">
                <Button className="w-full">Book Now</Button>
              </CardFooter>
            </Card>
          ))}
      </div>
    </div>
  );
}
