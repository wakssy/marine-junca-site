
export default function GradientBg({ opacity = 1 }: { opacity?: number }) {
    return (
        <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg, #90D4A0 0%, #C5E8A0 40%, #4EC8C8 100%)",
            opacity,
            pointerEvents: "none",
            zIndex: 0,
        }} />
    )
}
