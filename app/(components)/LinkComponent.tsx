import Link from "next/link";

type LinkComponentProps = {
    href: string;
    text: string;
};

export default function LinkComponent({ href, text }: LinkComponentProps) {
    return (
        <Link
            href={href}
            target="_blank"
            className="bg-white text-black font-light px-4 py-2 rounded-md shadow-lg/15 shadow-white transition  hover:scale-105 hover:shadow-lg/30">
            {text}
        </Link>
    );
}
