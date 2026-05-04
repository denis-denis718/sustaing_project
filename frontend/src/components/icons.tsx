import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const baseProps: IconProps = {
  width: '1em',
  height: '1em',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: false,
}

function Icon({ children, ...rest }: IconProps) {
  return (
    <svg {...baseProps} {...rest}>
      {children}
    </svg>
  )
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </Icon>
  )
}

export function ShieldCheckIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 3 4.5 6v6c0 4.5 3.2 7.7 7.5 9 4.3-1.3 7.5-4.5 7.5-9V6L12 3Z" />
      <path d="m9 12 2 2 4-4" />
    </Icon>
  )
}

export function LeafIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M5 19c0-7 5-13 14-14-1 9-7 14-14 14Z" />
      <path d="M5 19c4-4 7-7 12-12" />
    </Icon>
  )
}

export function CheckCircleIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12.2 2.5 2.5L16 9.7" />
    </Icon>
  )
}

export function ContractIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M7 3h7l4 4v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
      <path d="M14 3v4h4" />
      <path d="M8.5 12h7M8.5 15.5h5" />
      <path d="m15.5 17.5 1 1 2-2.2" />
    </Icon>
  )
}

export function CoinsIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M3 13c0 2.5 3.6 4.5 8 4.5s8-2 8-4.5" />
      <path d="M3 9.5c0 2.5 3.6 4.5 8 4.5s8-2 8-4.5S15.4 5 11 5 3 7 3 9.5Z" />
      <path d="M3 9.5v7" />
      <path d="M19 9.5v7" />
      <path d="m16.5 18.5 1 .9 2.5-2.7" />
    </Icon>
  )
}

export function ChairIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M6 4h12l-1 9H7L6 4Z" />
      <path d="M5 13h14" />
      <path d="M8 13v7M16 13v7" />
      <path d="M8 17h8" />
    </Icon>
  )
}

export function PinIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2.6" />
    </Icon>
  )
}

export function CalendarCheckIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="3.5" y="5" width="17" height="15" rx="2.2" />
      <path d="M3.5 9.5h17" />
      <path d="M8 3v4M16 3v4" />
      <path d="m9 14 2 2 4.5-4.5" />
    </Icon>
  )
}

export function LaptopUserIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="6" r="2.4" />
      <path d="M8.5 11.5a3.5 3.5 0 0 1 7 0v.7" />
      <rect x="5.5" y="13" width="13" height="5.6" rx="1.2" />
      <path d="M4 21h16" />
    </Icon>
  )
}

export function PenRulerIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="m4 20 4-1 9.5-9.5-3-3L5 16l-1 4Z" />
      <path d="m13.5 6.5 3 3" />
      <path d="m16 4 4 4-2 2-4-4 2-2Z" />
    </Icon>
  )
}

export function RocketIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M14.5 3c3.5 0 6.5 3 6.5 6.5L13 17.5l-3-3L17.5 7c0-2.5-1-3.5-3-3.5l1-.5Z" />
      <path d="m10 14.5-3-3-3.5 1L6 15l-2 4 4-2 2.5 2.5 1-3.5Z" />
      <circle cx="15.5" cy="8.5" r="1.4" />
    </Icon>
  )
}

export function HouseIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 11.5 12 4l8 7.5V20a1 1 0 0 1-1 1h-4v-6h-6v6H5a1 1 0 0 1-1-1v-8.5Z" />
    </Icon>
  )
}

export function UsersIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19c0-3 2.4-5.5 5.5-5.5s5.5 2.5 5.5 5.5" />
      <circle cx="17" cy="9" r="2.4" />
      <path d="M15 13.5c2.6.3 4.5 2.4 4.5 5" />
    </Icon>
  )
}

export function SparkleIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 3 13.6 9 19.5 11 13.6 13 12 19 10.4 13 4.5 11 10.4 9 12 3Z" />
    </Icon>
  )
}

export function BoltIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M13 3 5 13h6l-1 8 8-10h-6l1-8Z" />
    </Icon>
  )
}

export function GaugeIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 17a8 8 0 1 1 16 0" />
      <path d="m15 9-3 5" />
      <circle cx="12" cy="14.5" r="1.5" />
    </Icon>
  )
}

export function RecycleIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="m7 9 2-3.5 2.5 4M14 6.5h4l-2 4" />
      <path d="m4 16 1.5 4 4-1M18 19l3-3.5-3.5-2.5" />
      <path d="M9.5 5.5 5 13.5h4M19 11l-3 5.5h-4" />
    </Icon>
  )
}

export function LinkedInIcon(props: IconProps) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      focusable="false"
      {...props}
    >
      <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5ZM3 9.5h4V21H3V9.5Zm6.5 0h3.8v1.6h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.74V21h-4v-5.4c0-1.3-.02-2.97-1.86-2.97-1.86 0-2.14 1.4-2.14 2.86V21h-4V9.5Z" />
    </svg>
  )
}

export function InstagramIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="0.8" fill="currentColor" />
    </Icon>
  )
}

export function MailIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <path d="m3.5 7 8.5 6.5L20.5 7" />
    </Icon>
  )
}

export function MenuIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </Icon>
  )
}

export function CloseIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </Icon>
  )
}

export function HeroIllustration(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 600 460"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Illustration of a flexible workspace with two chairs, plant, and hanging lamp"
      {...props}
    >
      <circle cx="245" cy="135" r="92" fill="#e3e0d4" opacity="0.9" />

      {/* Frame */}
      <path
        d="M180 70 L520 70 L520 360 L460 360"
        stroke="#1f4d2b"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Hanging lamp cord */}
      <path
        d="M420 70 L420 175"
        stroke="#1f4d2b"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      {/* Lamp shade */}
      <path
        d="M395 175 L445 175 L432 215 L408 215 Z"
        fill="#1f4d2b"
        stroke="#1f4d2b"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      {/* Plant pot */}
      <path
        d="M195 320 L255 320 L246 360 L204 360 Z"
        fill="#1f4d2b"
        stroke="#1f4d2b"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* Plant leaves */}
      <g stroke="#3e7a4d" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" fill="#6fa67f">
        <path d="M225 320 C 225 280 215 245 200 230 C 195 255 200 295 225 320 Z" />
        <path d="M225 320 C 225 275 240 240 260 225 C 265 255 255 295 225 320 Z" />
        <path d="M225 320 C 225 290 210 270 188 270 C 188 290 200 315 225 320 Z" />
        <path d="M225 320 C 225 290 245 275 268 280 C 265 305 250 318 225 320 Z" />
        <path d="M225 320 L225 250" stroke="#3e7a4d" strokeWidth="2.4" />
      </g>

      {/* Chair 1 (left) */}
      <g stroke="#1f4d2b" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d="M310 240 L360 240 L355 320 L315 320 Z" />
        <path d="M308 320 L362 320" />
        <path d="M320 320 L320 360" />
        <path d="M352 320 L352 360" />
        <path d="M310 280 L360 280" />
      </g>

      {/* Chair 2 (right) */}
      <g stroke="#1f4d2b" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d="M380 240 L430 240 L425 320 L385 320 Z" />
        <path d="M378 320 L432 320" />
        <path d="M390 320 L390 360" />
        <path d="M422 320 L422 360" />
        <path d="M380 280 L430 280" />
      </g>

      {/* Side table / stool */}
      <g stroke="#1f4d2b" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M450 305 L490 305" />
        <path d="M455 305 L455 360" />
        <path d="M485 305 L485 360" />
      </g>

      {/* Ground line */}
      <path
        d="M170 360 L520 360"
        stroke="#1f4d2b"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function SmartIllustration(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 480 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Smart workspace illustration with sensor"
      {...props}
    >
      {/* Frame */}
      <path
        d="M70 50 L420 50 L420 270 L380 270"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Hanging lamp */}
      <path d="M340 50 L340 130" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path
        d="M322 130 L358 130 L350 158 L330 158 Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Smart sensor / pulse */}
      <circle cx="225" cy="155" r="38" fill="#3e7a4d" opacity="0.55" />
      <circle cx="225" cy="155" r="22" fill="#7fc093" />
      <circle cx="225" cy="155" r="8" fill="#143020" />

      {/* Plant */}
      <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d="M105 235 L145 235 L139 270 L111 270 Z" />
        <path d="M125 235 C 125 200 115 175 100 165" />
        <path d="M125 235 C 125 200 140 175 158 165" />
        <path d="M125 235 L125 195" />
      </g>

      {/* Two chairs */}
      <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d="M180 195 L225 195 L222 250 L185 250 Z" />
        <path d="M178 250 L227 250" />
        <path d="M188 250 L188 270" />
        <path d="M218 250 L218 270" />

        <path d="M250 195 L295 195 L292 250 L255 250 Z" />
        <path d="M248 250 L297 250" />
        <path d="M258 250 L258 270" />
        <path d="M288 250 L288 270" />
      </g>

      {/* Side table */}
      <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M320 240 L360 240" />
        <path d="M325 240 L325 270" />
        <path d="M355 240 L355 270" />
      </g>

      <path d="M60 270 L420 270" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}
