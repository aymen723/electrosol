import { Inbox, LayoutDashboard, Settings } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t } = useTranslation();

  const items = [
    {
      title: t("dashboard"),
      url: "/Dashboard",
      icon: LayoutDashboard,
    },
    {
      title: t("clients"),
      url: "/Clients",
      icon: Inbox,
    },
    {
      title: t("projects"),
      url: "/Projects",
      icon: Inbox,
    },
    {
      title: t("calculations"),
      url: "/Calculations",
      icon: Inbox,
    },
    {
      title: t("settings"),
      url: "/Settings",
      icon: Settings,
    },
  ];
  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-white shadow-sm dark:bg-gray-950/90">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-14 items-center">
          <a href="#" className="flex items-center">
            <MountainIcon className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </a>
          <nav className="hidden md:flex gap-4">
            {items.map((item, index) => (
              <a
                key={index}
                href={item.url}
                className="font-medium flex items-center text-sm transition-colors hover:underline"
              >
                <span>{item.title}</span>
              </a>
            ))}
            {/* <a
              href="#"
              className="font-medium flex items-center text-sm transition-colors hover:underline"
            >
              Home
            </a>
            <a
              href="#"
              className="font-medium flex items-center text-sm transition-colors hover:underline"
            >
              About
            </a>
            <a
              href="#"
              className="font-medium flex items-center text-sm transition-colors hover:underline"
            >
              Services
            </a>
            <a
              href="#"
              className="font-medium flex items-center text-sm transition-colors hover:underline"
            >
              Contact
            </a> */}
          </nav>
          <div className="flex items-center gap-4">
            {/* <Button variant="outline" size="sm">
              Sign in
            </Button>
            <Button size="sm">Sign up</Button> */}
          </div>
        </div>
      </div>
    </nav>
  );
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
