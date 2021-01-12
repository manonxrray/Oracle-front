import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

export default ({ href, children }) => {
  const router = useRouter();

  let className = children.props.className || "";
  if (router.pathname.includes("galerie")) {
    className = `${className}selected`;
  }

  return <Link href={href}>{React.cloneElement(children, { className })}</Link>;
};
