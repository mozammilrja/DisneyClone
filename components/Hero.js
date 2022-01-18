import Head from "next/head";
import Image from "next/image";

function Hero() {
  return (
    <section className="relative">
      <Head>
        <title>Log in | Disney+</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative min-h-[calc(100vh-72px)]">
        <Image
          src="/images/hero-background.jpg"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex justify-center items-center">
        <div className="absolute flex flex-col space-y-3 top-1/4 w-full justify-center items-center max-w-screen-sm mx-auto p-8 -mt-16">
          <Image
            src="/images/cta-logo-one.svg"
            width="600"
            height="150"
            objectFit="contain"
          />
          <h1 className="text-white text-[20px] font-bold ">Get endless entertainment, live sports, and the shows and <br/> 
           <h1 className="text-white text-center">movies you love.</h1> </h1>
          <button className="bg-blue-600 uppercase text-xl tracking-wide font-extrabold py-4 px-6 w-full rounded hover:bg-[#0485ee]">
            Get the disney bundle
          </button>
          <p className="text-xs text-center ">
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. price of Disney+
            and The Disney Bundle will increase by $
          </p>
          <Image
            src="/images/cta-logo-two.png"
            width="600"
            height="70"
            objectFit="contain"
          />
        <div className="flex justify-center items-center underline ">
          <button className="font-lg" >Sign up for disney only</button>
        </div>
        </div>
        <div className=" bg-[#222222]  z-[1000] flex flex-col justify-center items-center   w-[100%] pb-10 ">
        <Image className="object-contain items-center "
        src="/images/logo.svg"
        alt=""
        width={180}
        height={80}
      />
      <div className=" flex justify-evenly ">
      <h1 className="text-blue-500 text-[14px] font-bold "> Terms and Privacy NoticeSend us feedbackHelp   </h1>  <br/> <h1 className="text-gray-700 text-[14px] font-bold ">  ©1996-2022, Amazon.com, Inc. or its affiliates </h1>
      </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;