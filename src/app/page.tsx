import Image from "next/image";

export default async function Home() {

  return (
    <main className="flex min-h-screen w-full flex-col items-center mt-32 justify-start bg-white/20">
       <div
           className="flex flex-row items-center justify-center w-11/12 rounded-lg shadow-xl"
           >
            <Image
                className={"rounded-lg"}
                width={200}
                height={200}
                src={"/hero.svg"}
                alt={"hero"} />
           <div
               className="flex flex-col items-center justify-center">
                <h1 className="mt-4 text-4xl font-bold">
                     Welcome Back!
                </h1>
           </div>
       </div>
    </main>
  );
}