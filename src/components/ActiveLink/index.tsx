'use client'
 
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ReactNode } from 'react';

const ActiveLink = ({ href, children, ...props }: { href: string, children: ReactNode, target: "_blank" | "_self" }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} className={isActive ? "active" : ''} {...props} >
      {children}
    </Link>
  );
};

export default ActiveLink;