import Image from "next/image";
import LinkComponent from './(components)/LinkComponent'
import MadeByMe from './(components)/MadeByMe';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-t from-black to-black/90 text-white">

      <div className="fixed bottom-1 left-1/2 transform -translate-x-1/2">
        <MadeByMe />
      </div>

      <div className="text-white font-extralight flex flex-col gap-5">

        <div className="flex flex-col gap-2 justify-center items-center">
          <Image
            src={"/DiscordBotLogo2.png"}
            width={150}
            height={150}
            className="rounded-full"
            alt="prince-kun-discord-logo"
          />
          <div className="text-3xl tracking-widest">Prince-kun</div>
        </div>

        <div className="grid grid-cols-2 max-[480px]:grid-cols-1 gap-5 justify-center items-center text-center">
          <LinkComponent
            href="https://github.com/itsmeprinceyt/prince-kun-discord-bot"
            text="Prince-kun Discord Bot"
          />
          <LinkComponent
            href="https://github.com/itsmeprinceyt/prince-kun-website"
            text="Prince-kun Website"
          />
          <LinkComponent
            href="https://github.com/itsmeprinceyt/prince-kun-website-backend"
            text="Prince-kun Website Backend"
          />
          <LinkComponent
            href="https://github.com/itsmeprinceyt/prince-kun"
            text="Prince-kun Showcase Website"
          />
        </div>

      </div>

    </div>
  )
}