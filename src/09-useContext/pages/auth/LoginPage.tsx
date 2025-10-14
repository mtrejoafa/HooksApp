import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserContext } from "@/09-useContext/context/UserContext";

export const LoginPage = () => {

  const {login} = useContext(UserContext)
  const [userId, setUserId] = useState("");

  const navigation = useNavigate();


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = login(+userId);
    if (!result) {
      console.error('User not found');
      return;
    }
    navigation('/profile')
  };


  return (
    <div className="flex flex-col items-center min-h-screen">
      <h1 className="text-4xl font-bold">Login</h1>
      <hr />
      <form className="flex flex-col gap-2 my-10" onSubmit={handleSubmit}>
        <Input
          type="number"
          placeholder="User ID"
          value={userId}
          onChange={(event) => setUserId(event.target.value)}
        />
        <Button type="submit">Login</Button>
      </form>
      <Link to={"/"}>
        <Button variant="ghost">Back</Button>
      </Link>
    </div>
  );
};
