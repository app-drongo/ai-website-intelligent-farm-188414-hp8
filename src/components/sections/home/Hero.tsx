'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Play, Shield, TrendingUp, Users } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_HERO = {
  title: 'Transform Your Farm with Intelligent Agriculture',
  subtitle:
    'Maximize yields, reduce costs, and optimize resources with our AI-powered smart farming platform. Monitor crops, automate irrigation, and make data-driven decisions from anywhere.',
  ctaText: 'Start Free Trial',
  ctaHref: '/signup',
  secondaryCtaText: 'Watch Demo',
  secondaryCtaHref: '/demo',
  heroImageUrl:
    'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop&crop=center',
  heroImageAlt: 'Smart farming technology in action with AI monitoring systems',
  trustIndicators: [
    { icon: 'Users', text: 'Trusted by 500+ farms' },
    { icon: 'TrendingUp', text: '30% average yield increase' },
    { icon: 'Shield', text: 'ISO 27001 certified' },
  ],
  statsLabel: 'Join thousands of smart farmers',
  videoThumbnail:
    'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=300&fit=crop&crop=center',
  videoThumbnailAlt: 'Smart farming demo video thumbnail',
} as const;

type HeroProps = Partial<typeof DEFAULT_HERO>;

export default function Hero(props: HeroProps) {
  const config = { ...DEFAULT_HERO, ...props };
  const navigate = useSmartNavigation();
  const [isVideoHovered, setIsVideoHovered] = useState(false);

  const handlePrimaryClick = () => {
    navigate(config.ctaHref);
  };

  const handleSecondaryClick = () => {
    navigate(config.secondaryCtaHref);
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users':
        return <Users className="h-4 w-4" />;
      case 'TrendingUp':
        return <TrendingUp className="h-4 w-4" />;
      case 'Shield':
        return <Shield className="h-4 w-4" />;
      default:
        return <Users className="h-4 w-4" />;
    }
  };

  return (
    <section id="hero" className="bg-background text-foreground py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content Column */}
          <div className="space-y-8">
            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4">
              {config.trustIndicators.map((indicator, idx) => (
                <Badge
                  key={idx}
                  variant="secondary"
                  className="bg-muted text-muted-foreground px-3 py-1.5 text-sm font-medium"
                >
                  <span className="mr-2">{getIcon(indicator.icon)}</span>
                  <span data-editable={`trustIndicators[${idx}].text`}>{indicator.text}</span>
                </Badge>
              ))}
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                <span data-editable="title">{config.title}</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                <span data-editable="subtitle">{config.subtitle}</span>
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={handlePrimaryClick}
                data-editable-href="ctaHref"
                data-href={config.ctaHref}
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg font-semibold"
              >
                <span data-editable="ctaText">{config.ctaText}</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={handleSecondaryClick}
                data-editable-href="secondaryCtaHref"
                data-href={config.secondaryCtaHref}
                className="border-border text-foreground hover:bg-accent hover:text-accent-foreground px-8 py-3 text-lg font-semibold"
              >
                <Play className="mr-2 h-5 w-5" />
                <span data-editable="secondaryCtaText">{config.secondaryCtaText}</span>
              </Button>
            </div>

            {/* Stats Label */}
            <p className="text-sm text-muted-foreground">
              <span data-editable="statsLabel">{config.statsLabel}</span>
            </p>
          </div>

          {/* Visual Column */}
          <div className="space-y-6">
            {/* Main Hero Image */}
            <Card className="bg-card border-border overflow-hidden">
              <CardContent className="p-0">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={config.heroImageUrl}
                    alt={config.heroImageAlt}
                    data-editable-src="heroImageUrl"
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </CardContent>
            </Card>

            {/* Video Demo Card */}
            <Card
              className="bg-card border-border overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg"
              onMouseEnter={() => setIsVideoHovered(true)}
              onMouseLeave={() => setIsVideoHovered(false)}
              onClick={handleSecondaryClick}
            >
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className="relative w-20 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={config.videoThumbnail}
                      alt={config.videoThumbnailAlt}
                      data-editable-src="videoThumbnail"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <Play
                        className={`h-6 w-6 text-white transition-transform duration-200 ${
                          isVideoHovered ? 'scale-110' : 'scale-100'
                        }`}
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground">
                      <span data-editable="secondaryCtaText">{config.secondaryCtaText}</span>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      See how smart farming works in action
                    </p>
                  </div>
                  <ArrowRight
                    className={`h-5 w-5 text-muted-foreground transition-transform duration-200 ${
                      isVideoHovered ? 'translate-x-1' : 'translate-x-0'
                    }`}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
