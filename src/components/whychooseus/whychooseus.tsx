import { nanoid } from 'nanoid';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import benefits from './benefits';
const WhyChooseUs = () => {
  return (
    <section className="w-full bg-secondary py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Why Choose Cyclone?
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <Card
              key={nanoid()}
              className="border-2 border-card bg-card transition-colors duration-300 hover:border-card-foreground"
            >
              <CardHeader className="flex flex-col items-center">
                {benefit.icon}
                <CardTitle className="mt-4 text-xl">{benefit.title}</CardTitle>
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
