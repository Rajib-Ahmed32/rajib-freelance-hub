import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../components/ui/tooltip";

const UserAvatar = ({ user, handleLogout }) => {
  if (!user) return null;

  return (
    <div className="flex items-center gap-5">
      <TooltipProvider>
        <Tooltip delayDuration={0} skipDelayDuration={true}>
          <TooltipTrigger asChild>
            <Avatar className="w-8 h-8 cursor-default ring-2 ring-indigo-600">
              <AvatarImage src={user.photoURL} alt={user.displayName} />
              <AvatarFallback className="bg-indigo-100 text-indigo-600 font-bold">
                {user.displayName?.charAt(0) ?? "U"}
              </AvatarFallback>
            </Avatar>
          </TooltipTrigger>
          <TooltipContent className="transition-none">
            <p className="text-sm text-slate-700">
              {user.displayName || "User"}
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <Button
        size="sm"
        className="hidden px-4 py-2 font-bold lg:block bg-rose-600 hover:bg-rose-700 text-white"
        onClick={handleLogout}
      >
        Log out
      </Button>
    </div>
  );
};

export default UserAvatar;
