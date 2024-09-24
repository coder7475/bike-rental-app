import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import {
  Bike,
  DollarSign,
  Leaf,
  Clock,
  MapPin,
  Headphones,
} from 'lucide-react';
import { nanoid } from 'nanoid';

const benefits = [
  {
    icon: <Bike className="h-10 w-10 text-green-500" />,
    title: 'Wide Selection',
    description:
      'Choose from our extensive fleet of well-maintained bikes for any purpose.',
  },
  {
    icon: <DollarSign className="h-10 w-10 text-green-500" />,
    title: 'Best Prices',
    description:
      'Enjoy competitive rates and flexible pricing plans to suit your needs.',
  },
  {
    icon: <Leaf className="h-10 w-10 text-green-500" />,
    title: 'Eco-Friendly',
    description:
      'Reduce your carbon footprint and contribute to a cleaner environment.',
  },
  {
    icon: <Clock className="h-10 w-10 text-green-500" />,
    title: '24/7 Availability',
    description:
      'Access our bikes anytime, day or night, for ultimate convenience.',
  },
  {
    icon: <MapPin className="h-10 w-10 text-green-500" />,
    title: 'Convenient Locations',
    description: 'Find our bikes at numerous stations throughout the city.',
  },
  {
    icon: <Headphones className="h-10 w-10 text-green-500" />,
    title: 'Excellent Support',
    description:
      'Our dedicated team is always ready to assist you with any queries.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="w-full bg-white py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Why Choose Cyclone?
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <Card
              key={nanoid()}
              className="border-2 border-green-100 transition-colors duration-300 hover:border-green-300"
            >
              <CardHeader className="flex flex-col items-center">
                {benefit.icon}
                <CardTitle className="text-xl mt-4">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
