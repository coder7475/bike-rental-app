import {
  Bike,
  DollarSign,
  Leaf,
  Clock,
  MapPin,
  Headphones,
} from 'lucide-react';

const benefits = [
  {
    icon: <Bike className="size-10 text-card-foreground" />,
    title: 'Wide Selection',
    description:
      'Choose from our extensive fleet of well-maintained bikes for any purpose.',
  },
  {
    icon: <DollarSign className="size-10 text-card-foreground" />,
    title: 'Best Prices',
    description:
      'Enjoy competitive rates and flexible pricing plans to suit your needs.',
  },
  {
    icon: <Leaf className="size-10 text-card-foreground" />,
    title: 'Eco-Friendly',
    description:
      'Reduce your carbon footprint and contribute to a cleaner environment.',
  },
  {
    icon: <Clock className="size-10 text-card-foreground" />,
    title: '24/7 Availability',
    description:
      'Access our bikes anytime, day or night, for ultimate convenience.',
  },
  {
    icon: <MapPin className="size-10 text-card-foreground" />,
    title: 'Convenient Locations',
    description: 'Find our bikes at numerous stations throughout the city.',
  },
  {
    icon: <Headphones className="size-10 text-card-foreground" />,
    title: 'Excellent Support',
    description:
      'Our dedicated team is always ready to assist you with any queries.',
  },
];

export default benefits;
