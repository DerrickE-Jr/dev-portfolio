import Link from "next/link";

type ExperienceCardProps = {
  title: string;
  description: string;
  href: string;
};

export default function ExperienceCard({
  title,
  description,
  href,
}: ExperienceCardProps) {
  return (
    <Link href={href}>
        <div className="rounded-2x1 border p-8 transition hover:-translate-y-1 hover:shadow-lg">
          <h3 className="text-2x1 font-semibold">{title}</h3>

          <p className="text-gray-600">{description}</p>
          <div className="mt-6 font-medium">
            Enter →
          </div>
        </div>
    </Link>
  );
}