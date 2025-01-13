'use client'

import Image from 'next/image'
import { useState } from 'react'
import { PortableText } from '@portabletext/react'

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import Employee from '@/types/Employee'

interface EmployeeCardProps {
  employee: Employee
}

export default function EmployeeCard({ employee }: EmployeeCardProps) {
  const [open, setOpen] = useState(false)

  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <CardContent className="p-0 flex-grow flex flex-col">
        <div className="relative pt-[100%] w-full">
          {employee.imageUrl ? (
            <Image
              src={employee.imageUrl}
              alt={employee.name}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
              <span className="text-gray-400">No image available</span>
            </div>
          )}
        </div>
        <div className="p-4 flex-grow flex flex-col">
          <h3 className="font-semibold text-lg">{employee.name}</h3>
          <p className="text-sm text-gray-500 mb-2">{employee.role}</p>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button className="mt-12 w-full">Se detaljer</Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>{employee.name}</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="relative pt-[100%] w-full">
                  {employee.imageUrl ? (
                    <Image
                      src={employee.imageUrl}
                      alt={employee.name}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                      <span className="text-gray-400">No image available</span>
                    </div>
                  )}
                </div>
                <p className="text-md font-bold">{employee.role}</p>
                <div className="text-sm max-h-48 overflow-y-auto">
                  <PortableText value={employee.bio} />
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  )
}

