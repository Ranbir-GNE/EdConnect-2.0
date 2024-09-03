"use client";

import React, { useState, useTransition } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { updateAction } from "@/actions/users";
import { LuLoader } from "react-icons/lu";
import { toast } from "sonner"
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
}

const ProfileEdit = () => {
  const [isPending, startTransition] = useTransition();
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
  });

  const [isEditable, setIsEditable] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    startTransition(async () => {
      const { errorMessage } = await updateAction(formData);
      if (!errorMessage) {
        toast.success("User Details Updated");
        setIsEditable(false); // Disable edit mode after saving
      } else {
        toast.error(errorMessage);
      }
    });
  };

  const handleEditClick = () => {
    setIsEditable(true);
  };

  const handleCancelClick = () => {
    setIsEditable(false);
  };

  return (
    <main className="flex h-screen items-center justify-center">
      <div className="relative flex flex-col items-center rounded-lg border bg-popover p-4">
        <h1 className="mb-8 text-2xl font-semibold">Update</h1>

        <form onSubmit={handleSubmit} className="w-full">
          {[
            { label: "First Name", name: "firstName", type: "text" },
            { label: "Last Name", name: "lastName", type: "text" },
            { label: "Email", name: "email", type: "email" },
            { label: "Phone Number", name: "phoneNumber", type: "tel" },
            { label: "Address", name: "address", type: "text" },
          ].map(({ label, name, type }) => (
            <div key={name} className="mb-4">
              <Label>
                {label}:
                <Input
                  className="w-full lg:w-96"
                  type={type}
                  name={name}
                  value={formData[name as keyof FormData]}
                  onChange={handleChange}
                  disabled={!isEditable} // Input fields are disabled by default
                />
              </Label>
            </div>
          ))}

          <div className="flex space-x-4">
            {!isEditable ? (
              <Button type="button" onClick={handleEditClick}>
                Edit
              </Button>
            ) : (
              <>
                <Button
                  type="button"
                  variant="destructive"
                  onClick={handleCancelClick}
                >
                  Cancel
                </Button>
                <Button type="submit" disabled={isPending}>
                  {isPending ? (
                    <div className="flex items-center">
                      <LuLoader className="mr-2 animate-spin" />
                      Saving...
                    </div>
                  ) : (
                    "Save"
                  )}
                </Button>
              </>
            )}
          </div>
        </form>
      </div>
    </main>
  );
};

export default ProfileEdit;
