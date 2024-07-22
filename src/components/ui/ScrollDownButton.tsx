import { JSX, SVGProps } from "react"

export default function ScrollDownButton(props: any) {
  return (
    <div className="relative">
      <button className="bottom-4 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <ChevronDownIcon className="h-8 w-8 text-primary" />
      </button>
    </div>
  )
}

function ChevronDownIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

