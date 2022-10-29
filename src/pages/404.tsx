import { useRouter } from "next/router"
import { Container } from "@/components/Base"
import { Btn, BtnLink } from "@/components/Buttons"

export default function PageNotFound() {
  const router = useRouter()
  const goBack = () => router.back()

  return (
    <Container
      title="404 Not Found"
      description=""
      style={{ height: "calc(100vh - 15rem)" }}
    >
			<div className="fixed top-0 left-0 right-0 h-[69%] bg-gradient-to-b from-sona-borahae-800 opacity-75"></div>
      <div className="fixed inset-0 grid place-items-center z-2">
        <div className="text-center px-10 flex flex-col gap-y-6">
          <h1 className="text-9xl bg-gradient-to-bl from-sona-royalblue-500 to-pink-500 bg-clip-text text-transparent">
            404
          </h1>
          <span className="max-w-[800px] text-lg">
            Oof looks like you've stumbled on a typical 404 page - this website
            is still under construction, so most of the links will redirect you
            to this page. Either I'm working on it or I'm just lazy and couldn't
            be bothered to work on it... mostly lol
          </span>
          <div className="flex justify-center gap-5">
            <BtnLink name="Main page" link="/" emojiFix />
            <Btn name="Go back to your mom and cry" onClick={goBack} />
          </div>
        </div>
      </div>
    </Container>
  )
}
