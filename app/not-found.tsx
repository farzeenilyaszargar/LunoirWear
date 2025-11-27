import Link from "next/link";

export default function NotFound()
{
    return(
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="font-black text-9xl">404</h1>
            <h1 className="font-medium text-2xl mb-2">Page Not Found Or Constructed Yet</h1>

            <Link href={'/'} className="w-auto h-auto"><button className="border w-full h-full border-black rounded-3xl hover:bg-black hover:text-white px-3 mt-3">Return Back</button></Link>
        </div>
    );
}