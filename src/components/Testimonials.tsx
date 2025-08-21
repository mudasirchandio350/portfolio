"use client";
import React from "react";
import { Lora } from "next/font/google";
import { ComicText } from "./magicui/comic-text";
import ScrollStack, { ScrollStackItem } from "./ui/ScrollStack";
import {
  testimonials,
  getFeaturedTestimonials,
  Testimonial,
} from "@/data/testimonials";
import Image from "next/image";
import { Star, Quote, MapPin, Calendar } from "lucide-react";

const lora = Lora({ subsets: ["latin"], weight: ["500"] });

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          className={`${
            i < rating
              ? "fill-yellow-400 text-yellow-400"
              : "text-gray-300 dark:text-gray-600"
          }`}
        />
      ))}
    </div>
  );
};

const TestimonialCard = ({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) => {
  const isEven = index % 2 === 0;
  const bgGradient = isEven
    ? "bg-gradient-to-br from-green-900 to-green-800"
    : "bg-gradient-to-br from-indigo-900 to-indigo-800";

  return (
    <div
      className={`relative overflow-hidden rounded-2xl ${bgGradient} shadow-2xl border border-white/10`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
        <div className="absolute top-0 right-0 w-32 h-32  rounded-full -translate-y-16 translate-x-16" />
        <div className="absolute bottom-0 left-0 w-24 h-24  rounded-full translate-y-12 -translate-x-12" />
      </div>

      <div className="relative z-10 p-8 lg:p-10">
        {/* Quote Icon */}
        <div className="mb-6">
          <Quote size={32} className="text-white/60" />
        </div>

        {/* Content */}
        <blockquote
          className={`text-white text-lg lg:text-xl leading-relaxed mb-8 ${lora.className}`}
        >
          "{testimonial.content}"
        </blockquote>

        {/* Rating */}
        <div className="mb-6">
          <StarRating rating={testimonial.rating} />
        </div>

        {/* Author Info */}
        <div className="flex items-start gap-4">
          {/* Avatar */}
          <div className="relative">
            {testimonial.image ? (
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/20">
                <Image
                  src={testimonial.image}
                  alt={`${testimonial.name} profile`}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className="w-16 h-16 rounded-full bg-white/20 border-2 border-white/20 flex items-center justify-center">
                <span className="text-white font-bold text-xl">
                  {testimonial.name.charAt(0)}
                </span>
              </div>
            )}
            {testimonial.featured && (
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                <Star size={12} className="fill-yellow-800 text-yellow-800" />
              </div>
            )}
          </div>

          {/* Author Details */}
          <div className="flex-1 min-w-0">
            <h4 className="text-white font-bold text-lg truncate">
              {testimonial.name}
            </h4>
            <p className="text-white/80 text-sm font-medium truncate">
              {testimonial.role}
            </p>
            <div className="flex items-center gap-1 mt-1">
              <MapPin size={12} className="text-white/60" />
              <p className="text-white/60 text-sm truncate">
                {testimonial.company}
              </p>
            </div>
            <div className="flex items-center gap-1 mt-2">
              <Calendar size={12} className="text-white/60" />
              <p className="text-white/60 text-xs">
                {testimonial.createdAt.toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>

        {/* Featured Badge */}
        {testimonial.featured && (
          <div className="absolute top-4 right-4">
            <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold shadow-lg">
              ⭐ Featured
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

const Testimonials = () => {
  const featuredTestimonials = getFeaturedTestimonials();
  const allTestimonials = testimonials;

  return (
    <section className="py-16 md:py-20 lg:py-24 w-full min-h-screen transition-colors duration-300">
      <div className="container mx-auto px-4 mb-12">
        {/* Header */}
        <div className="text-center mb-8">
          <ComicText fontSize={2} className="max-sm:text-xl text-center">
            Client Testimonials
          </ComicText>
          <p
            className={`text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mt-6 max-w-3xl mx-auto ${lora.className}`}
          >
            Don't just take my word for it. Here's what clients say about
            working with me and the impact of the solutions I've delivered.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
              {allTestimonials.length}+
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Happy Clients
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
              {featuredTestimonials.length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Featured Reviews
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
              5.0
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Average Rating
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
              100%
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Satisfaction
            </div>
          </div>
        </div>
      </div>

      {/* Desktop ScrollStack */}
      <div className="hidden lg:block h-full">
        <ScrollStack
          className="w-full"
          itemDistance={120}
          itemScale={0.05}
          itemStackDistance={40}
          stackPosition="25%"
          scaleEndPosition="15%"
          baseScale={0.9}
          rotationAmount={2}
          blurAmount={1}
        >
          {allTestimonials.map((testimonial, index) => (
            <ScrollStackItem
              key={testimonial.id}
              itemClassName="max-w-4xl mx-auto px-4"
            >
              <TestimonialCard testimonial={testimonial} index={index} />
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>

      {/* Mobile/Tablet Grid */}
      <div className="lg:hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {featuredTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </div>

          {/* Show All Button for Mobile */}
          {allTestimonials.length > featuredTestimonials.length && (
            <div className="text-center mt-12">
              <button className="bg-gradient-to-r from-green-900 to-indigo-900 hover:from-green-800 hover:to-indigo-800 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg">
                View All Testimonials
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
