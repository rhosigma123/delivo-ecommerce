import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

interface BreadcrumbDropdownItem {
  label: string;
  href: string;
}

interface BreadcrumbLink {
  label: string;
  href?: string; // If `href` is undefined, it's treated as the current page.
  dropdownItems?: BreadcrumbDropdownItem[]; // For dropdown menus
}

interface DynamicBreadcrumbProps {
  links: BreadcrumbLink[];
}

const DynamicBreadcrumb: React.FC<DynamicBreadcrumbProps> = ({ links }) => {
  return (
    <Breadcrumb className="pb-5">
      <BreadcrumbList>
        {links.map((link, index) => {
          const isCurrentPage = index === links.length - 1;

          return (
            <React.Fragment key={index}>
              <BreadcrumbItem className="items-center">
                {link.dropdownItems ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger
                      className={`flex items-center gap-1 ${
                        isCurrentPage
                          ? "text-fontPrimary font-medium"
                          : "text-gray-400 font-medium"
                      }`}
                    >
                      <span>{link.label}</span>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      {link.dropdownItems.map((item, i) => (
                        <DropdownMenuItem key={i}>
                          <a href={item.href}>{item.label}</a>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : link.href ? (
                  <Link
                    className={`md:text-base ${
                      isCurrentPage
                        ? "text-fontPrimary font-medium"
                        : "text-gray-400 font-medium"
                    }`}
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <BreadcrumbPage
                    className={`md:text-base ${
                      isCurrentPage
                        ? "text-fontPrimary font-medium"
                        : "text-gray-400 font-medium"
                    }`}
                  >
                    {link.label}
                  </BreadcrumbPage>
                )}
              </BreadcrumbItem>
              {/* Add separator if it's not the last item */}
              {index < links.length - 1 && <BreadcrumbSeparator />}
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default DynamicBreadcrumb;
