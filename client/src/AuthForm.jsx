import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function AuthForm() {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    const users = JSON.parse(localStorage.getItem("users")) || {};
    
    if (isRegister) {
      if (users[email]) {
        setMessage("User already exists");
      } else {
        users[email] = password;
        localStorage.setItem("users", JSON.stringify(users));
        setMessage("Registration successful! You can now log in.");
        setIsRegister(false);
      }
    } else {
      if (users[email] === password) {
        setMessage("Login successful!");
      } else {
        setMessage("Invalid email or password");
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-96 p-6 shadow-lg">
        <CardContent>
          <h2 className="text-xl font-bold mb-4">{isRegister ? "Register" : "Login"}</h2>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-2"
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-2"
          />
          <Button onClick={handleSubmit} className="w-full mb-2">
            {isRegister ? "Register" : "Login"}
          </Button>
          <p className="text-sm cursor-pointer text-blue-500" onClick={() => setIsRegister(!isRegister)}>
            {isRegister ? "Already have an account? Login" : "Don't have an account? Register"}
          </p>
          {message && <p className="mt-2 text-sm text-red-500">{message}</p>}
        </CardContent>
      </Card>
    </div>
  );
}