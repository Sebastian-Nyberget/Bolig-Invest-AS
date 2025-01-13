'use client'

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

import Employee from "@/types/Employee"
import EmployeeCard from "./EmployeeCard"

interface EmployeeCarouselProps {
  employees: Employee[]
}

export default function EmployeeCarousel({ employees }: EmployeeCarouselProps) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-5xl mx-auto my-36"
    >
      <CarouselContent>
        {employees.map((employee, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <EmployeeCard employee={employee} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

