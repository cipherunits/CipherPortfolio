import Button from "@/components/shared/Button";
import Link from "next/link";

function notfound() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-[80vh] pb-10">
      <h1 className="font-bold text-[200px] text-white">404</h1>
      <p className="text-(--color-stroke) text-center">
        The page you are looking for doesn’t exist or has been moved.
      </p>
      <Link href="/" className="mt-6">
        <Button>Back to Landing page</Button>
      </Link>
    </div>
  );
}

export default notfound;
