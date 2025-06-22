import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  iconBgColor: string;
}

export function FeatureCard({
  icon,
  title,
  description,
  imageUrl,
  imageAlt,
  iconBgColor,
}: FeatureCardProps) {
  return (
    <Card className="bg-white rounded-lg overflow-hidden shadow-lg border">
      <CardHeader className="p-6 h-48 flex justify-center items-center bg-gray-50">
        <Image
          alt={imageAlt}
          className="max-h-full object-contain"
          height={150}
          src={imageUrl}
          width={250}
        />
      </CardHeader>
      <CardContent className="p-6">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center mb-4 ${iconBgColor}`}>
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </CardContent>
    </Card>
  );
}
