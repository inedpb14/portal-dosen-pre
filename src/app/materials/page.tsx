"use client";

import { useState } from "react";
import {
  Search,
  ChevronRight,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Materials() {
  const [searchQuery, setSearchQuery] = useState("");

  const programs = [
    {
      id: "cs",
      name: "Computer Science",
      years: [
        {
          id: "year-1",
          name: "First Year",
          courses: [
            {
              id: "cs101",
              code: "CS101",
              name: "Introduction to Programming",
              description: "Fundamentals of programming using Python",
              materials: [
                {
                  id: "cs101-intro",
                  title: "Introduction to Python",
                  type: "lecture",
                  description: "Basic syntax and programming concepts",
                },
                {
                  id: "cs101-data-types",
                  title: "Data Types and Variables",
                  type: "lecture",
                  description: "Understanding Python data types",
                },
              ],
            },
            {
              id: "cs102",
              code: "CS102",
              name: "Data Structures",
              description: "Fundamental data structures and algorithms",
              materials: [
                {
                  id: "cs102-arrays",
                  title: "Arrays and Linked Lists",
                  type: "lecture",
                  description: "Basic data structures",
                },
              ],
            },
          ],
        },
        {
          id: "year-2",
          name: "Second Year",
          courses: [
            {
              id: "cs201",
              code: "CS201",
              name: "Advanced Programming",
              description: "Advanced programming concepts and patterns",
              materials: [
                {
                  id: "cs201-oop",
                  title: "Object-Oriented Programming",
                  type: "lecture",
                  description: "OOP principles and implementation",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ai",
      name: "Artificial Intelligence",
      years: [
        {
          id: "year-1",
          name: "First Year",
          courses: [
            {
              id: "ai101",
              code: "AI101",
              name: "Introduction to AI",
              description: "Basic concepts of artificial intelligence",
              materials: [
                {
                  id: "ai101-intro",
                  title: "What is AI?",
                  type: "lecture",
                  description: "Introduction to artificial intelligence",
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  const filteredPrograms = programs
    .map((program) => ({
      ...program,
      years: program.years
        .map((year) => ({
          ...year,
          courses: year.courses.filter(
            (course) =>
              course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              course.description
                .toLowerCase()
                .includes(searchQuery.toLowerCase()) ||
              course.code.toLowerCase().includes(searchQuery.toLowerCase())
          ),
        }))
        .filter((year) => year.courses.length > 0),
    }))
    .filter((program) => program.years.length > 0);

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <h1 className="text-2xl md:text-4xl font-bold mb-6">
        Learning Materials
      </h1>

      <div className="relative mb-8">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search courses..."
          className="pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="space-y-8">
        {filteredPrograms.map((program) => (
          <div key={program.id}>
            <h2 className="text-xl font-semibold mb-4">{program.name}</h2>
            <div className="space-y-6">
              {program.years.map((year) => (
                <div key={year.id}>
                  <h3 className="text-lg font-medium mb-3">{year.name}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {year.courses.map((course) => (
                      <Card key={course.id}>
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <Badge variant="secondary">{course.code}</Badge>
                          </div>
                          <CardTitle className="text-lg mt-2">
                            {course.name}
                          </CardTitle>
                          <CardDescription>
                            {course.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Button variant="link" asChild className="p-0">
                            <Link href={`/materials/${course.id}`}>
                              View Materials{" "}
                              <ChevronRight className="ml-1 w-4 h-4" />
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
