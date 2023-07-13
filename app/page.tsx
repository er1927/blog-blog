import Posts from "./components/Posts"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <p className="mt-6 mb-12 text-3xl text-center dark:text-white">This is a <span className="font-bold">blog</span> blog</p>
    <Posts />
    </main>
  )
}
