import TextButton from "../components/TextButton"

export default function MainPage() {
    return (
        <>
            <div class="bg-slate-900 size-full text-gray-50">
                <br></br>
                <p class="text-3xl font-bold">Chat Server and Client</p>
                <br></br>
                <span class="flex flex-row gap-5 justify-center">
                    <TextButton href="join" text="Join"></TextButton>
                    <TextButton href="host" text="Host"></TextButton>
                </span>
            </div>
        </>
    )
}