import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

interface Props {
  disabled?: boolean;
}

export function SearchInput({ disabled }: Props) {
  return (
    <div className="flex items-center gap-2 w-full">
      <div className="relative w-full">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
        <Input disabled={disabled} placeholder="Search Products" className="pl-8" />
      </div>
      {/* TODO: Add categories view all button */}
      {/* TODO: Add library button */}
    </div>
  );
}
