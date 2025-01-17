import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";

export const LegalHeader = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-secondary/50 backdrop-blur-md">
      <Link to="/">
        <Button variant="ghost" className="text-white hover:text-primary">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Zurück zur Startseite
        </Button>
      </Link>
    </div>
  );
};