import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UserRound } from "lucide-react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="min-h-screen bg-bookstore-cream flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-2 text-center">
          <div className="flex justify-center mb-4">
            <UserRound className="h-12 w-12 text-bookstore-purple" />
          </div>
          <CardTitle className="text-2xl font-serif">Welcome back to BookNest</CardTitle>
          <CardDescription>Enter your credentials to access your account</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Enter your password" />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button className="w-full bg-bookstore-purple hover:bg-bookstore-purple-dark">
            Sign In
          </Button>
          <p className="text-sm text-muted-foreground text-center">
            Don't have an account?{" "}
            <Link to="/" className="text-bookstore-purple hover:underline">
              Sign up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignIn;
