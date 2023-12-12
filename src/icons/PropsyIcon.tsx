export default function PropsyIcon(props: React.SVGAttributes<SVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      clipRule="evenodd"
      viewBox="0 0 800 400"
      {...props}
    >
      <path
        fill="currentColor"
        d="M680 200a25 25 0 0 0 25 25h70a25 25 0 0 0 0-50h-70a25 25 0 0 0-25 25ZM0 200a25 25 0 0 0 25 25h70a25 25 0 0 0 0-50H25a25 25 0 0 0-25 25Zm425 0a25 25 0 1 0-50 0 25 25 0 0 0 50 0Zm125-100a100 100 0 1 1 0 200 100 100 0 0 1 0-200Zm0 50a50 50 0 1 0 0 100 50 50 0 0 0 0-100Zm-300-50a100 100 0 1 1 0 200 100 100 0 0 1 0-200Zm0 50a50 50 0 1 0 0 100 50 50 0 0 0 0-100ZM273.1 45.4A199.1 199.1 0 0 1 400 0c51.2 0 97.9 19.3 133.3 51A149 149 0 0 0 475 70a149.2 149.2 0 0 0-144.5-3A149 149 0 0 0 273 45.5Zm46.4 281.2a149.2 149.2 0 0 0 155.5 3.3 149 149 0 0 0 58.3 19.2A199.2 199.2 0 0 1 400 400a199.3 199.3 0 0 1-139.5-56.7 149 149 0 0 0 59-16.7Z"
      />
    </svg>
  );
}
