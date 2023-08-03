import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import RegisterForm from "./RegisterForm";

const AuthModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">Sign Up</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Register</DialogTitle>
          <DialogDescription className="flex flex-col">
            <span>Let&apos;s get you set up with an account.</span>
            <span>
              <span>Already have one?</span>
              <Button variant="link">Sign In</Button>
            </span>
          </DialogDescription>
        </DialogHeader>
        <RegisterForm />
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
