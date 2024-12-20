import Link from "next/link";
import React, { forwardRef } from "react";

const NextLink = forwardRef(({ href, as, prefetch, ...props }, ref) => {
  return (
    <Link href={href} as={as} prefetch={prefetch} passHref>
      <a className="text-white no-underline" ref={ref} {...props} />
    </Link>
  );
});

NextLink.displayName = "NextLink";

NextLink.defaultProps = {
  href: "#",
  prefetch: false,
};

export default NextLink;
