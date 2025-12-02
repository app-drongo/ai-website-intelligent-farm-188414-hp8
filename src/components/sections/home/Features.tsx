'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Cpu, Droplets, Thermometer, BarChart3, Smartphone, Leaf } from 'lucide-react';

const DEFAULT_FEATURES = {
  sectionTitle: 'Smart Farming Features That Drive Results',
  sectionSubtitle: 'Everything you need to modernize your agricultural operations',
  features: [
    {
      icon: 'Cpu',
      title: 'AI-Powered Crop Analysis',
      description:
        'Advanced machine learning algorithms analyze crop health, predict yields, and detect diseases before they spread.',
      badge: 'AI Technology',
    },
    {
      icon: 'Droplets',
      title: 'Smart Irrigation System',
      description:
        'Automated water management based on soil moisture, weather data, and crop requirements to optimize water usage.',
      badge: 'Water Efficiency',
    },
    {
      icon: 'Thermometer',
      title: 'Climate Monitoring',
      description:
        'Real-time environmental sensors track temperature, humidity, and soil conditions across your entire farm.',
      badge: 'IoT Sensors',
    },
    {
      icon: 'BarChart3',
      title: 'Yield Prediction Analytics',
      description:
        'Data-driven insights help you forecast harvests, plan resources, and maximize profitability season after season.',
      badge: 'Predictive Analytics',
    },
    {
      icon: 'Smartphone',
      title: 'Mobile Farm Management',
      description:
        'Control and monitor your entire operation from anywhere with our intuitive mobile app and dashboard.',
      badge: 'Remote Access',
    },
    {
      icon: 'Leaf',
      title: 'Sustainable Practices',
      description:
        'Reduce chemical usage and environmental impact while maintaining high crop quality and yields.',
      badge: 'Eco-Friendly',
    },
  ],
} as const;

type FeaturesProps = Partial<typeof DEFAULT_FEATURES>;

export default function Features(props: FeaturesProps) {
  const config = { ...DEFAULT_FEATURES, ...props };

  const getIcon = (iconName: string) => {
    const iconMap = {
      Cpu,
      Droplets,
      Thermometer,
      BarChart3,
      Smartphone,
      Leaf,
    };
    const IconComponent = iconMap[iconName as keyof typeof iconMap] || Cpu;
    return <IconComponent className="h-8 w-8 text-primary" />;
  };

  return (
    <section id="features" className="bg-background text-foreground py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span data-editable="sectionTitle">{config.sectionTitle}</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            <span data-editable="sectionSubtitle">{config.sectionSubtitle}</span>
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {config.features.map((feature, idx) => (
            <Card
              key={idx}
              className="bg-card text-card-foreground border-border hover:bg-accent/5 transition-colors duration-300 group"
            >
              <CardContent className="p-8">
                {/* Icon and Badge */}
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                    {getIcon(feature.icon)}
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-secondary text-secondary-foreground text-xs font-medium"
                  >
                    <span data-editable={`features[${idx}].badge`}>{feature.badge}</span>
                  </Badge>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">
                    <span data-editable={`features[${idx}].title`}>{feature.title}</span>
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    <span data-editable={`features[${idx}].description`}>
                      {feature.description}
                    </span>
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-primary/5 border border-border rounded-2xl p-8 sm:p-12">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">
              Ready to Transform Your Farm?
            </h3>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of farmers who have already revolutionized their operations with our
              intelligent farming solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>30-day free trial</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>No setup fees</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>24/7 support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
