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
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
          Featured Bikes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bikes.map((bike) => (
            <Card key={bike.id} className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl">{bike.brand}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <img
                  src={bike.image}
                  alt={`${bike.brand} ${bike.model}`}
                  className="w-full h-48 object-cover rounded-md mb-4"
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
