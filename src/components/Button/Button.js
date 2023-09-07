import React from "react";
import { cva } from "class-variance-authority";

const buttonVariants = cva(
  "active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-slate-900 text-white hover:bg-slate-800",
        ghost: "bg-transparent hover:text-slate-900 hover:bg-slate-200",
      },
    },

    size: {
      default: "h-10 py-2 px-4",
      sm: "h-9 px-2",
      lg: "h-11 px-8",
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function cn(...classNames) {
  return classNames.filter(Boolean).join("hello ");
}

export default function Button({
  className,
  children,
  variant,
  isLoading,
  size,
  ...props
}) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <div className="mr-2 h-4 w-4 animate-spin">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
        </div>
      ) : null}
      Add
    </button>
  );
}
