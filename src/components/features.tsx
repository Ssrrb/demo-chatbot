import { FeatureCard } from "@/components/feature-card";
import { MessageSquare, GitBranch, Lock } from "lucide-react";

const featuresData = [
  {
    icon: <MessageSquare className="text-blue-600" />,
    title: "Personalizable",
    description:
      "Personaliza tu chatbot para adaptarlo a las necesidades de tu empresa o incluso a tu proyecto personal",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAhTN0q_6QOaK1JZ6-ENYiUFu1Sjoc4vxfHKgYGI1_3kxvKSkgZZi6efBHr0jWkrvcD_Agazv5fNRMa8ZwyEjzhoNgQxOGb4FmjfoXgkDUy4JuLKCLOP2zHWW83D0Caz6_KAcFGefPvokaCtuOHqz7ydAqJFKuNcnVlNNTfz5wBeRC5m-bgICj0cPCg1S8GGz4WehM0MEA9qPdIjfOtPxfUDuxs8EHB-Vxc4R6m6qFaFRzMb-Si6OrCrBqp8AG-eLvx2OKLDM1IObrX",
    imageAlt: "Customizable chat interface mockup",
    iconBgColor: "bg-blue-100",
  },
  {
    icon: <GitBranch className="text-green-600" />,
    title: "Actualizado",
    description:
      "Mantente actualizado con las innovaciones de la IA en la experiencia del usuario y las capacidades como los artefactos y la razonamiento.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCTzHMsjrvlQeKzgA85kL100sszBTXgTZ5WdfbhMYIWYohTh6QfuTFpskC7G8EHrsiuL9SgLSayitFhkT_ALFehCg-zdGLdzpj6ARPvDfn7azaS_yxuku99JOTa75mCHltAqx-a7O1v1UjcsaUqO-mN_-DdUvx65jBJrQHo076I47_MHUqceFmOQFDRJeTluXscc5YCJ0MWCKbQbKjMCjMKpxlnEj-jMPixGnK0l1t5-ZF9HEXkqdyfxA8fbvKjgec2jcekCUL5ZauS",
    imageAlt: "Branching model providers mockup",
    iconBgColor: "bg-green-100",
  },
  {
    icon: <Lock className="text-purple-600" />,
    title: "Seguridad",
    description:
      "Tu asistente respeta la privacidad de tus datos y solo podrá acceder a los documentos que le hayas proporcionado. Tus datos no seran utilizados para reentrar a los modelos.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDJahVjWTEPz8wG12iUG99MrcByfSZu3N4pahvzPMC7Kqj6e_FaIEgk4ZXYrZBKomNqCLgPsNiEeEurzVes7ImBgLeN5Xp3HukNouiNl47t5LbQNN8N6EoLqzCPiMd1A9BxulXvzrmjRqj8OeHe3VpMLTo0r8Eyj_AYXK_-lGBSgQzCsTdtHIzd3QR2IvPGh-ujN8mGD4eEsKhf_4WSE1aivTxc7oIbhDcaQUZrxIlyapPFO2lVVk1RpX-xjTFrtKWaRWeqVnbdnRjZ",
    imageAlt: "Chat and user best practices mockup",
    iconBgColor: "bg-purple-100",
  },
];

export function Features() {
  return (
    <section className="py-16 md:py-24">
      <div className="grid md:grid-cols-3 gap-8">
        {featuresData.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
}
