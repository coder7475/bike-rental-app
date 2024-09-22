import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    id: 1,
    name: 'Sarah L.',
    avatar: '/placeholder.svg?height=40&width=40',
    role: 'Daily Commuter',
    quote:
      "BikeShare has transformed my daily commute. It's convenient, affordable, and eco-friendly!",
  },
  {
    id: 2,
    name: 'Mike R.',
    avatar: '/placeholder.svg?height=40&width=40',
    role: 'Weekend Explorer',
    quote:
      "I love using BikeShare to explore the city on weekends. It's so easy to grab a bike and go!",
  },
  {
    id: 3,
    name: 'Emily T.',
    avatar: '/placeholder.svg?height=40&width=40',
    role: 'Fitness Enthusiast',
    quote:
      'BikeShare is perfect for my fitness routine. The bikes are always in great condition.',
  },
  {
    id: 4,
    name: 'David K.',
    avatar: '/placeholder.svg?height=40&width=40',
    role: 'Tourist',
    quote:
      'As a visitor, BikeShare was the best way to see the city. Highly recommend!',
  },
];

export default function Testimonials() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
          What Our Riders Say
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Avatar>
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={testimonial.name}
                    />
                    <AvatarFallback>
                      {testimonial.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-semibold">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <blockquote className="text-gray-700 italic">
                  "{testimonial.quote}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
