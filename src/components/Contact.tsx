"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Link from "next/link";
import { ComicText } from "./magicui/comic-text";

const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center py-10 w-full gap-5">
      <ComicText>Contact</ComicText>
      <Card className="w-[400px] lg:w-[570px] ">
        <CardHeader>
          <h1 className="text-3xl lg:text-5xl font-bold text-center">
            let&apos;s Work Together
          </h1>
        </CardHeader>

        <CardContent className="flex flex-col gap-2">
          <Label>Name</Label>
          <Input placeholder="Enter your name" type="text" className="mb-4" />
          <Label>Email</Label>
          <Input placeholder="Enter your email" type="email" />
        </CardContent>
        <CardFooter className="w-full flex justify-end">
          <Button>
            <Link href={"mailto:chandiommudasir084@gmail.com"}>Submit</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Contact;
