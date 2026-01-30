"use client";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import React from "react";

type ArrowButtonProps = {
  href?: string;
  onClick?: () => void;
  size?: number;
  color?: string;
  circle?: boolean;
  className?: string;
  ariaLabel?: string;
};

export default function Arrowbutton({
  href,
  onClick,
  size,
  color = "#111111",
  circle = false,
  className,
  ariaLabel = "Open",
}: ArrowButtonProps) {
  const Wrapper: React.ElementType = href ? Link : "button";
  const wrapperProps: { href?: string } | { type: "button"; onClick?: () => void } = href ? { href } : { type: "button", onClick };

  return (
    <Wrapper
      {...wrapperProps}
      aria-label={ariaLabel}
      className={`${
        circle
          ? "inline-flex items-center justify-center rounded-full bg-white/80 hover:bg-white shadow-sm"
          : ""
      } ${className || ""}`}
    >
      <FaArrowRight
        {...(size ? { size } : {})}
        color={color}
        className="-rotate-45"
        aria-hidden="true"
      />
    </Wrapper>
  );
}
