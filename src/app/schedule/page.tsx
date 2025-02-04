"use client";

import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

export default function Schedule() {
  const [date] = useState<Date>(new Date());

  const weeklySchedule = [
    {
      day: "Monday",
      activities: [
        { time: "09:00 - 10:30", activity: "Machine Learning Lecture (CS401)" },
        { time: "11:00 - 12:30", activity: "Office Hours" },
        { time: "14:00 - 16:00", activity: "Research Group Meeting" },
      ],
    },
    {
      day: "Tuesday",
      activities: [
        { time: "10:00 - 11:30", activity: "Advanced Algorithms (CS501)" },
        { time: "13:00 - 15:00", activity: "PhD Student Supervision" },
      ],
    },
    {
      day: "Wednesday",
      activities: [
        { time: "09:00 - 10:30", activity: "Department Meeting" },
        { time: "11:00 - 12:30", activity: "Machine Learning Lab (CS401)" },
        { time: "14:00 - 16:00", activity: "Research Work" },
      ],
    },
    {
      day: "Thursday",
      activities: [
        { time: "10:00 - 11:30", activity: "Advanced Algorithms (CS501)" },
        { time: "13:00 - 15:00", activity: "Office Hours" },
      ],
    },
    {
      day: "Friday",
      activities: [
        { time: "09:00 - 10:30", activity: "Research Seminar" },
        { time: "11:00 - 12:30", activity: "Faculty Meeting" },
        { time: "14:00 - 16:00", activity: "Project Reviews" },
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <h1 className="text-2xl md:text-4xl font-bold mb-6 md:mb-8">
        Weekly Schedule
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        <div className="lg:col-span-2">
          <div className="space-y-4 md:space-y-6">
            {weeklySchedule.map((day, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg md:text-xl">
                    {day.day}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 md:space-y-4">
                    {day.activities.map((activity, actIndex) => (
                      <li
                        key={actIndex}
                        className="flex flex-col sm:flex-row sm:gap-4"
                      >
                        <span className="text-sm font-medium text-muted-foreground sm:w-32">
                          {activity.time}
                        </span>
                        <span className="text-sm md:text-base">
                          {activity.activity}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div className=" order-first lg:order-last">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg md:text-xl">Calendar</CardTitle>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={date}
                className="rounded-md border"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
