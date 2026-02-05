"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import type { Dictionary } from "@/types";
import Button from "@/components/ui/Button";

interface HeroCarouselProps {
  dict: Dictionary;
}

export default function HeroCarousel({ dict }: HeroCarouselProps) {
  const { hero } = dict;
  const slides = hero.slides || [];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [slides.length, isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [slides.length, isTransitioning]);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [currentSlide, isTransitioning]);

  // Auto-advance carousel every 6 seconds
  useEffect(() => {
    if (isPaused || slides.length <= 1) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused, nextSlide, slides.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  if (!slides || slides.length === 0) {
    return null;
  }

  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden bg-black"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Hero Carousel"
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-500 ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          aria-hidden={index !== currentSlide}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0"
            style={
              slide.id === "chat-with-factory"
                ? { transform: "scale(0.7) translateX(38%)" }
                : slide.id === "sentient-factory"
                  ? { transform: "translateY(15%)" }
                  : undefined
            }
          >
            <Image
              src={slide.image}
              alt=""
              fill
              className="object-cover"
              priority={index === 0}
              quality={90}
            />
            {/* Gradient Overlay - Extended darker area for better text readability */}
            <div
              className={`absolute inset-0 ${slide.id === "chat-with-factory"
                ? "bg-gradient-to-r from-black/95 from-0% via-black/70 via-35% to-transparent to-50%"
                : "bg-gradient-to-r from-black/95 from-0% via-black/80 via-40% via-black/50 via-60% to-transparent"
                }`}
            />
          </div>

          {/* Content */}
          <div className="relative z-20 mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              {/* Headline */}
              <h1 className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                {slide.headline}
              </h1>

              {/* Subheadline */}
              {slide.subheadline && (
                <p className="mt-4 text-2xl font-semibold text-accent sm:text-3xl whitespace-pre-line">
                  {slide.subheadline}
                </p>
              )}

              {/* Description */}
              {slide.description && (
                <p className="mt-6 text-lg leading-relaxed text-neutral-200 sm:text-xl whitespace-pre-line">
                  {slide.description}
                </p>
              )}
            </div>
          </div>

          {/* CTAs - Fixed position in lower half of screen */}
          <div className="absolute top-[65%] left-0 right-0 z-30">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl flex flex-col gap-4 sm:flex-row">
                <Button href="#contact" variant="primary" size="lg">
                  {slide.ctaPrimary}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                {slide.ctaSecondary && (
                  <Button
                    href="#contact"
                    variant="ghost"
                    size="lg"
                    className="border-2 border-white text-white hover:bg-white hover:text-primary"
                  >
                    {slide.ctaSecondary}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      {slides.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            disabled={isTransitioning}
            className="absolute left-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-all hover:bg-white/20 disabled:opacity-50 lg:left-8"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            disabled={isTransitioning}
            className="absolute right-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-all hover:bg-white/20 disabled:opacity-50 lg:right-8"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}


      {/* Pause indicator (optional, subtle) */}
      {isPaused && slides.length > 1 && (
        <div className="absolute right-8 top-8 z-30 rounded-full bg-white/10 px-3 py-1 text-sm text-white backdrop-blur-sm">
          Paused
        </div>
      )}
    </section>
  );
}
