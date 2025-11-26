import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-4 px-4">
      <h1>Hello World</h1>
      <Button className="w-fit" variant="elevated">
        Click me
      </Button>

      <Input placeholder="Enter your name" />

      <Progress value={50} />

      <Textarea placeholder="Enter your message" />
    </div>
  );
}
