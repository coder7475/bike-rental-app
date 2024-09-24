import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const bikes = [
  {
    id: 1,
    brand: 'CityRider',
    model: 'Commuter Pro',
    image: '/placeholder.svg?height=200&width=300',
  },
  {
    id: 2,
    brand: 'MountainMaster',
    model: 'Trail Blazer',
    image: '/placeholder.svg?height=200&width=300',
  },
  {
    id: 3,
    brand: 'SpeedDemon',
    model: 'Road Warrior',
    image: '/placeholder.svg?height=200&width=300',
  },
  {
    id: 4,
    brand: 'EcoWheel',
    model: 'Green Cruiser',
    image: '/placeholder.svg?height=200&width=300',
  },
];
const FeaturedBikes = () => {
  return (
    <section className="w-full bg-gray-100 py-12 md:py-24 lg:py-32" id="rent">
      <div className="container px-4 md:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Featured Bikes
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {bikes.map((bike) => (
            <Card key={bike.id} className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl">{bike.brand}</CardTitle>
              </CardHeader>
              <CardContent className="grow">
                <img
                  src={bike.image}
                  alt={`${bike.brand} ${bike.model}`}
                  className="mb-4 h-48 w-full rounded-md object-cover"
                />
                <p className="text-gray-600">{bike.model}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">View Details</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBikes;
