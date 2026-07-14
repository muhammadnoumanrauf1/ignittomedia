"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"

export interface Frame {
  id: number
  video: string
  title?: string
  description?: string
  defaultPos: { x: number; y: number; w: number; h: number }
  corner?: string
  edgeHorizontal?: string
  edgeVertical?: string
  mediaSize: number
  borderThickness?: number
  borderSize?: number
  isHovered: boolean
}

interface FrameComponentProps {
  video: string
  title?: string
  description?: string
  width: number | string
  height: number | string
  className?: string
  corner?: string
  edgeHorizontal?: string
  edgeVertical?: string
  mediaSize: number
  borderThickness?: number
  borderSize?: number
  showFrame: boolean
  isHovered: boolean
}

function FrameComponent({
  video,
  title,
  description,
  width,
  height,
  className = "",
  corner = "",
  edgeHorizontal = "",
  edgeVertical = "",
  mediaSize,
  borderThickness = 0,
  borderSize = 100,
  showFrame,
  isHovered,
}: FrameComponentProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (isHovered) {
      videoRef.current?.play().catch(() => {})
    } else {
      videoRef.current?.pause()
    }
  }, [isHovered])

  return (
    <div
      className={`relative ${className}`}
      style={{
        width,
        height,
        transition: "width 0.3s ease-in-out, height 0.3s ease-in-out",
      }}
    >
      <div className="relative w-full h-full overflow-hidden">
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            zIndex: 1,
            transition: "all 0.3s ease-in-out",
            padding: showFrame ? `${borderThickness}px` : "0",
            width: showFrame ? `${borderSize}%` : "100%",
            height: showFrame ? `${borderSize}%` : "100%",
            left: showFrame ? `${(100 - borderSize) / 2}%` : "0",
            top: showFrame ? `${(100 - borderSize) / 2}%` : "0",
          }}
        >
          <div
            className="w-full h-full overflow-hidden"
            style={{
              transform: `scale(${mediaSize})`,
              transformOrigin: "center",
              transition: "transform 0.3s ease-in-out",
            }}
          >
            <video
              className="w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              src={video}
              loop
              muted
              playsInline
              ref={videoRef}
            />
          </div>
          
          {/* Text Overlay */}
          {(title || description) && (
            <div className={`absolute inset-0 p-6 flex flex-col items-center justify-center pointer-events-none transition-colors duration-500 ${isHovered ? 'bg-brand-bg/70' : 'bg-brand-bg-secondary'}`}>
              {title && (
                <h3 
                  className={`text-2xl md:text-3xl lg:text-4xl text-brand-text italic tracking-wide transition-all duration-500 ${isHovered ? '-translate-y-4 opacity-0 scale-95' : 'translate-y-0 opacity-100 scale-100'}`}
                  style={{ fontFamily: "ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif" }}
                >
                  {title}
                </h3>
              )}
              {description && (
                <p className={`absolute bottom-8 px-6 text-center text-sm md:text-base text-brand-text-secondary max-w-sm transition-all duration-500 delay-100 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                  {description}
                </p>
              )}
            </div>
          )}
        </div>

        {showFrame && corner && edgeHorizontal && edgeVertical && (
          <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 2 }}>
            <div
              className="absolute top-0 left-0 w-16 h-16 bg-contain bg-no-repeat"
              style={{ backgroundImage: `url(${corner})` }}
            />
            <div
              className="absolute top-0 right-0 w-16 h-16 bg-contain bg-no-repeat"
              style={{ backgroundImage: `url(${corner})`, transform: "scaleX(-1)" }}
            />
            <div
              className="absolute bottom-0 left-0 w-16 h-16 bg-contain bg-no-repeat"
              style={{ backgroundImage: `url(${corner})`, transform: "scaleY(-1)" }}
            />
            <div
              className="absolute bottom-0 right-0 w-16 h-16 bg-contain bg-no-repeat"
              style={{ backgroundImage: `url(${corner})`, transform: "scale(-1, -1)" }}
            />

            <div
              className="absolute top-0 left-16 right-16 h-16"
              style={{
                backgroundImage: `url(${edgeHorizontal})`,
                backgroundSize: "auto 64px",
                backgroundRepeat: "repeat-x",
              }}
            />
            <div
              className="absolute bottom-0 left-16 right-16 h-16"
              style={{
                backgroundImage: `url(${edgeHorizontal})`,
                backgroundSize: "auto 64px",
                backgroundRepeat: "repeat-x",
                transform: "rotate(180deg)",
              }}
            />
            <div
              className="absolute left-0 top-16 bottom-16 w-16"
              style={{
                backgroundImage: `url(${edgeVertical})`,
                backgroundSize: "64px auto",
                backgroundRepeat: "repeat-y",
              }}
            />
            <div
              className="absolute right-0 top-16 bottom-16 w-16"
              style={{
                backgroundImage: `url(${edgeVertical})`,
                backgroundSize: "64px auto",
                backgroundRepeat: "repeat-y",
                transform: "scaleX(-1)",
              }}
            />
          </div>
        )}
      </div>
    </div>
  )
}

interface DynamicFrameLayoutProps {
  frames: Frame[]
  className?: string
  showFrames?: boolean
  hoverSize?: number
  gapSize?: number
}

export function DynamicFrameLayout({ 
  frames: initialFrames, 
  className,
  showFrames = false,
  hoverSize = 6,
  gapSize = 4
}: DynamicFrameLayoutProps) {
  const [frames] = useState<Frame[]>(initialFrames)
  const [hovered, setHovered] = useState<{ row: number; col: number } | null>(null)

  // Calculate max rows and cols based on frames
  const maxRow = Math.max(...frames.map(f => Math.floor(f.defaultPos.y / 4)))
  const maxCol = Math.max(...frames.map(f => Math.floor(f.defaultPos.x / 4)))
  const numRows = maxRow + 1
  const numCols = maxCol + 1

  const getRowSizes = () => {
    const defaultRow = Array(numRows).fill("4fr").join(" ")
    if (hovered === null) return defaultRow
    const { row } = hovered
    const nonHoveredSize = (12 - hoverSize) / Math.max(1, (numRows - 1))
    return Array(numRows).fill(0).map((_, r) => (r === row ? `${hoverSize}fr` : `${nonHoveredSize}fr`)).join(" ")
  }

  const getColSizes = () => {
    const defaultCol = Array(numCols).fill("4fr").join(" ")
    if (hovered === null) return defaultCol
    const { col } = hovered
    const nonHoveredSize = (12 - hoverSize) / Math.max(1, (numCols - 1))
    return Array(numCols).fill(0).map((_, c) => (c === col ? `${hoverSize}fr` : `${nonHoveredSize}fr`)).join(" ")
  }

  const getTransformOrigin = (x: number, y: number) => {
    const vertical = y === 0 ? "top" : y === 4 ? "center" : "bottom"
    const horizontal = x === 0 ? "left" : x === 4 ? "center" : "right"
    return `${vertical} ${horizontal}`
  }

  return (
    <div
      className={`relative w-full h-full ${className}`}
      style={{
        display: "grid",
        gridTemplateRows: getRowSizes(),
        gridTemplateColumns: getColSizes(),
        gap: `${gapSize}px`,
        transition: "grid-template-rows 0.4s ease, grid-template-columns 0.4s ease",
      }}
    >
      {frames.map((frame) => {
        const row = Math.floor(frame.defaultPos.y / 4)
        const col = Math.floor(frame.defaultPos.x / 4)
        const transformOrigin = getTransformOrigin(frame.defaultPos.x, frame.defaultPos.y)

        return (
          <motion.div
            key={frame.id}
            className="relative group interactive"
            style={{
              transformOrigin,
              transition: "transform 0.4s ease",
            }}
            onMouseEnter={() => setHovered({ row, col })}
            onMouseLeave={() => setHovered(null)}
          >
            <FrameComponent
              video={frame.video}
              title={frame.title}
              description={frame.description}
              width="100%"
              height="100%"
              className="absolute inset-0 rounded-xl overflow-hidden"
              corner={frame.corner}
              edgeHorizontal={frame.edgeHorizontal}
              edgeVertical={frame.edgeVertical}
              mediaSize={frame.mediaSize}
              borderThickness={frame.borderThickness}
              borderSize={frame.borderSize}
              showFrame={showFrames}
              isHovered={hovered?.row === row && hovered?.col === col}
            />
          </motion.div>
        )
      })}
    </div>
  )
}
