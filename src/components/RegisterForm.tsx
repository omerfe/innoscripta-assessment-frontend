import { register } from "@/app/_actions/register";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const RegisterForm = () => {
  return (
    <form action={register} className="flex flex-col gap-3">
      <fieldset className="flex items-center">
        <Label htmlFor="name" className="w-1/4">
          Name
        </Label>
        <Input
          required
          id="name"
          name="name"
          type="text"
          placeholder="Your name"
          className="w-3/4"
        />
      </fieldset>
      <fieldset className="flex items-center">
        <Label htmlFor="email" className="w-1/4">
          Email
        </Label>
        <Input
          required
          id="email"
          name="email"
          type="email"
          placeholder="john.doe@example.com"
          className="w-3/4"
        />
      </fieldset>
      <fieldset className="flex items-center">
        <Label htmlFor="password" className="w-1/4">
          Password
        </Label>
        <Input
          required
          id="password"
          name="password"
          type="password"
          placeholder="Your password"
          className="w-3/4"
        />
      </fieldset>
      <Button className="mt-1.5" type="submit">
        Register
      </Button>
    </form>
  );
};

export default RegisterForm;
