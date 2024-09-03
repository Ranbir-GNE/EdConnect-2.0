import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Image from "next/image";

const cardData = [
  {
    title: "John Doe",
    description: "Student",
    imageSrc: "/images/person.jpg",
    content: [{ label: "URN" }, { label: "Email" }, { label: "Contact" }],
  },
  {
    title: "Student Details",
    content: [
      { label: "CRN" },
      { label: "Batch" },
      { label: "Section" },
      { label: "Programme" },
      { label: "Class" },
      { label: "Semester" },
    ],
  },
  {
    title: "Academic Details",
    content: [
      { label: "Attendance" },
      { label: "Current SGPA" },
      { label: "Last SGPA" },
      { label: "Mentoring Group" },
      { label: "Mentor Contact" },
    ],
  },
  {
    title: "Personal Details",
    content: [
      { label: "Father's Name" },
      { label: "Father's Contact" },
      { label: "Mother's Name" },
      { label: "Mother's Contact" },
      { label: "Blood Group" },
      { label: "Medical Condition" },
      { label: "Address" },
    ],
  },
];

const ProfileView = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center p-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {cardData.map((card, index) => (
          <Card key={index} className="w-full max-w-[350px]">
            <CardHeader>
              {card.imageSrc && (
                <Image
                  src={card.imageSrc}
                  className="m-auto h-[100px] w-[100px] flex-shrink-0 rounded-full object-cover"
                  width={100}
                  height={100}
                  alt="Avatar"
                />
              )}
              <CardTitle className="m-auto">{card.title}</CardTitle>
              {card.description && (
                <CardDescription className="m-auto">
                  {card.description}
                </CardDescription>
              )}
            </CardHeader>
            <CardContent>
              <ul>
                {card.content.map((item, i) => (
                  <li key={i}>
                    <Label>{item.label}</Label>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="flex justify-between"></CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProfileView;
