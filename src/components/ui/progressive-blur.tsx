"use client";

import React from "react";

type ProgressiveBlurProps = {
  className?: string;
  backgroundColor?: string;
  position?: "top" | "bottom" | "fixed-top" | "fixed-bottom";
  height?: string;
  blurAmount?: string;
};

const ProgressiveBlur = ({
  className = "",
  backgroundColor = "transparent",
  position = "top",
  height = "140px",
  blurAmount = "24px",
}: ProgressiveBlurProps) => {
  const isFixed = position.startsWith("fixed");
  const isTop = position.endsWith("top") || position === "top";

  return (
    <div
      className={`pointer-events-none ${
        isFixed ? "fixed" : "absolute"
      } left-0 w-full select-none z-50 overflow-hidden ${className}`}
      style={{
        [isTop ? "top" : "bottom"]: 0,
        height,
        WebkitUserSelect: "none",
        userSelect: "none",
      }}
    >
      {/* Primary Backdrop Blur Layer with Progressive Alpha Mask */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          WebkitBackdropFilter: `blur(${blurAmount})`,
          backdropFilter: `blur(${blurAmount})`,
          WebkitMaskImage: isTop
            ? "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 35%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
            : "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 35%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
          maskImage: isTop
            ? "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 35%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
            : "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 35%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* Secondary Soft Color Edge Tint */}
      {backgroundColor !== "transparent" && (
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background: isTop
              ? `linear-gradient(to bottom, ${backgroundColor} 0%, ${backgroundColor}B3 40%, transparent 100%)`
              : `linear-gradient(to top, ${backgroundColor} 0%, ${backgroundColor}B3 40%, transparent 100%)`,
          }}
        />
      )}
    </div>
  );
};

const Skiper41 = () => {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center bg-[#031e41] text-white/40">
      <ProgressiveBlur position="top" backgroundColor="#031e41" />
      <ProgressiveBlur position="bottom" backgroundColor="#031e41" />

      <div className="flex h-[calc(100vh-1rem)] w-full flex-col items-center overflow-scroll">
        <div className="mt-42 grid content-start justify-items-center gap-6 text-center text-white">
          <span className="relative max-w-[12ch] text-xs uppercase leading-tight opacity-40 after:absolute after:left-1/2 after:top-full after:h-16 after:w-px after:bg-gradient-to-b after:from-white after:to-black after:content-['']">
            Scroll down to see the effect
          </span>
        </div>

        <div className="mt-24 w-full max-w-lg space-y-20 px-5 text-justify">
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, reiciendis eum vitae nostrum, temporibus repudiandae
              voluptatibus, natus iure ipsa velit odit quibusdam illum. Quaerat
              cumque laudantium libero reprehenderit perferendis quo nulla
              voluptate? Repellat tenetur labore exercitationem dicta libero
              voluptate suscipit, iusto ea assumenda.
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { ProgressiveBlur, Skiper41 };
