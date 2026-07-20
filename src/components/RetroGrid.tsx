// Animated grid component with customizable perspective and movement
import React, { useRef, useEffect, type CSSProperties } from "react"

interface RetroGridProps {
    angle: number
    cellSize: number
    opacity: number
    lineColor: string
    backgroundColor: string
    animationSpeed: number
    perspective: number
    fadeHeight: number
    fadeColor: string
    animationDirection: "horizontal" | "vertical" | "both"
    gridType?: "standard" | "diamond" | "diagonal" | "hexagonal"
    style?: CSSProperties
}

/**
 * @framerSupportedLayoutWidth any-prefer-fixed
 * @framerSupportedLayoutHeight any-prefer-fixed
 */
export default function RetroGrid(props: RetroGridProps) {
    const {
        angle = 65,
        cellSize = 60,
        opacity = 0.5,
        lineColor = "#6d6e71",
        backgroundColor = "#FFFFFF",
        animationSpeed = 5,
        perspective = 200,
        fadeHeight = 90,
        fadeColor = "#FFFFFF",
        animationDirection = "both",
        gridType = "standard",
    } = props

    const gridRef = useRef<HTMLDivElement>(null)
    const isStatic = false // était useIsStaticRenderer() de Framer, non applicable hors Framer

    // Standard grid animation effect
    useEffect(() => {
        if (isStatic) return

        const animationName = `gridMove-${Date.now()}`

        let keyframes = ""

        if (animationDirection === "horizontal") {
            keyframes = `
                @keyframes ${animationName} {
                    from { background-position: 0 0, 0 0; }
                    to { background-position: ${cellSize + 1}px 0, ${cellSize + 1}px 0; }
                }
            `
        } else if (animationDirection === "vertical") {
            keyframes = `
                @keyframes ${animationName} {
                    from { background-position: 0 0, 0 0; }
                    to { background-position: 0 ${cellSize + 1}px, 0 ${cellSize + 1}px; }
                }
            `
        } else {
            keyframes = `
                @keyframes ${animationName} {
                    from { background-position: 0 0, 0 0; }
                    to { background-position: ${cellSize + 1}px ${cellSize + 1}px, ${cellSize + 1}px ${cellSize + 1}px; }
                }
            `
        }

        const styleSheet = document.createElement("style")
        styleSheet.innerHTML = keyframes
        document.head.appendChild(styleSheet)

        if (gridRef.current) {
            gridRef.current.style.animation = `${animationName} ${animationSpeed}s linear infinite`
        }

        return () => {
            try {
                document.head.removeChild(styleSheet)
            } catch (e) {
                // Style sheet already removed
            }
        }
    }, [cellSize, animationSpeed, animationDirection, isStatic])

    // Responsive: update grid on resize
    React.useEffect(() => {
        const handleResize = () => {
            if (gridRef.current) {
                gridRef.current.style.width = "100%"
                gridRef.current.style.height = "100%"
            }
        }
        window.addEventListener("resize", handleResize)
        handleResize()
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const containerStyle: CSSProperties = {
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        pointerEvents: "none",
        perspective: `${perspective}px`,
        opacity: opacity,
        backgroundColor: backgroundColor,
        minWidth: 0,
        minHeight: 0,
        boxSizing: "border-box",
        display: "block",
    }

    const gridWrapperStyle: CSSProperties = {
        position: "absolute",
        inset: 0,
        transform: `rotateX(${angle}deg)`,
        width: "100%",
        height: "100%",
        minWidth: 0,
        minHeight: 0,
        boxSizing: "border-box",
        display: "block",
    }

    const getGridBackgroundImage = () => {
        if (gridType === "diamond") {
            // Diamond tiling (rotated square)
            const size = cellSize
            const svg = encodeURIComponent(`
        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"${size}\" height=\"${size}\">\n          <polygon points=\"${size / 2},0 ${size},${size / 2} ${size / 2},${size} 0,${size / 2}\" \n            fill=\"none\" stroke=\"${lineColor}\" stroke-width=\"1\"/>\n        </svg>\n    `)
            return `url('data:image/svg+xml,${svg}')`
        } else if (gridType === "hexagonal") {
            // Hexagon tiling (honeycomb grid)
            const size = cellSize
            const hexHeight = Math.sqrt(3) * size
            const svg = encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" width="${size * 1.5}" height="${hexHeight}">
        <polygon 
          points="
            ${size * 0.5},0
            ${size * 1.5},0
            ${size * 2},${hexHeight / 2}
            ${size * 1.5},${hexHeight}
            ${size * 0.5},${hexHeight}
            0,${hexHeight / 2}
          "
          fill="none"
          stroke="${lineColor}"
          stroke-width="1"
        />
      </svg>
    `)
            return `url('data:image/svg+xml,${svg}')`
        } else if (gridType === "diagonal") {
            // 45° diagonal lines
            return `\n        repeating-linear-gradient(45deg, ${lineColor}, ${lineColor} 1px, transparent 1px, transparent ${cellSize}px)\n    `
        } else {
            // Standard square grid
            return `\n                linear-gradient(to right, ${lineColor} 1px, transparent 1px),\n                linear-gradient(to bottom, ${lineColor} 1px, transparent 1px)\n            `
        }
    }

    const gridStyle: CSSProperties = {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        minWidth: 0,
        minHeight: 0,
        boxSizing: "border-box",
        backgroundImage: getGridBackgroundImage(),
        backgroundRepeat: "repeat",
        backgroundSize:
            gridType === "diagonal"
                ? `${cellSize}px ${cellSize}px`
                : gridType === "diamond"
                  ? `${cellSize}px ${cellSize}px`
                  : `${cellSize}px ${cellSize}px`,
        pointerEvents: "auto",
        cursor: "default",
        display: "block",
    }

    // Add interactive cell overlay
    const handleCellHover = (e: React.MouseEvent<HTMLDivElement>) => {
        // Only allow hover for standard grid
        if (gridType !== "standard") return
        const rect = e.currentTarget.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const col = Math.floor(x / cellSize)
        const row = Math.floor(y / cellSize)
        setHoveredCell({ col, row })
    }
    const handleCellLeave = () => setHoveredCell(null)
    const handleCellClick = (e: React.MouseEvent<HTMLDivElement>) => {
        // Only allow click for standard grid
        if (gridType !== "standard") return
        const rect = e.currentTarget.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const col = Math.floor(x / cellSize)
        const row = Math.floor(y / cellSize)
        setClickedCell({ col, row })
        setTimeout(() => setClickedCell(null), 300)
    }
    const [hoveredCell, setHoveredCell] = React.useState<{
        col: number
        row: number
    } | null>(null)
    const [clickedCell, setClickedCell] = React.useState<{
        col: number
        row: number
    } | null>(null)

    // Render cell overlays for hover/click
    const renderCellOverlay = () => {
        if (gridType !== "standard") return null
        if (!hoveredCell && !clickedCell) return null
        const cell = clickedCell || hoveredCell
        if (!cell) return null
        const left = cell.col * cellSize
        const top = cell.row * cellSize
        return (
            <div
                style={{
                    position: "absolute",
                    left,
                    top,
                    width: cellSize,
                    height: cellSize,
                    background: clickedCell
                        ? "rgba(0,0,0,0.15)"
                        : "rgba(0,0,0,0.08)",
                    borderRadius: 6,
                    pointerEvents: "none",
                    transition: "background 0.2s",
                    zIndex: 2,
                }}
            />
        )
    }

    const overlayStyle: CSSProperties = {
        position: "absolute",
        inset: 0,
        background: `linear-gradient(to top, ${fadeColor}, transparent ${fadeHeight}%)`,
        pointerEvents: "none",
    }

    return (
        <div style={containerStyle}>
            <div style={gridWrapperStyle}>
                <div
                    style={gridStyle}
                    ref={gridRef}
                    onMouseMove={handleCellHover}
                    onMouseLeave={handleCellLeave}
                    onClick={handleCellClick}
                />
                {renderCellOverlay()}
            </div>
            <div style={overlayStyle} />
        </div>
    )
}
