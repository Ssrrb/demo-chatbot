import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Sparkles, ArrowUp } from "lucide-react";

export function ChatWidget() {
  return (
    <Card className="bg-white p-6 rounded-lg shadow-lg border-gray-200">
      <CardContent className="p-0">
        <div className="flex items-start space-x-3 mb-6">
          <Avatar>
            <AvatarFallback className="bg-blue-100 text-blue-600">
              <Sparkles className="h-5 w-5" />
            </AvatarFallback>
          </Avatar>
          <div className="bg-gray-50 p-3 rounded-lg">
            <p className="text-gray-700 text-sm">¿En qué puedo ayudarte?</p>
          </div>
        </div>
        <div className="relative">
          <Input
            className="w-full pr-12 text-sm"
            placeholder="Enviar mensaje..."
            type="text"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 rounded-lg hover:bg-gray-200"
          >
            <ArrowUp className="h-4 w-4 text-gray-600" />
            <span className="sr-only">Enviar mensaje</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
