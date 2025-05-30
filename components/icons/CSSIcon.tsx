import { ComponentProps } from "react";

export function CSSIcon(props: ComponentProps<"svg">) {
  return (
    <svg
      width="51"
      height="50"
      viewBox="0 0 51 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.38574 44.9219L3.28418 0H47.3271L43.3232 44.9219L25.3545 50"
        fill="#778295"
      />
      <path
        d="M25.3545 3.61328V46.0938L39.9053 42.0898L43.3232 3.61328"
        fill="#778295"
      />
      <path
        d="M11.4873 9.17969H25.3545V14.6484H11.9756M12.4639 20.3125H25.3545V25.8789H12.9521M13.2451 28.6133H18.7139L19.1045 33.0078L25.3545 34.668V40.4297L13.9287 37.3047"
        fill="white"
      />
      <path
        d="M25.3545 20.3125V25.8789H32.0928L31.4092 33.0078L25.3545 34.668V40.4297L36.585 37.3047L39.124 9.17969H25.3545V14.6484H33.167L32.6299 20.3125H25.3545Z"
        fill="white"
      />
    </svg>
  );
}
