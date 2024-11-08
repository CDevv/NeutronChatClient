import { createSignal } from "solid-js";
import TextButton from "../components/TextButton";
import TextField from "../components/TextField";

export default function HostPage() {
    const [address, setAddress] = createSignal("localhost");
    const [msg, setMsg] = createSignal("Message.");

    const onAddressChange = (e: any) => {
        setAddress(e.target.value);
    }

    const onSubmit = async (e: any) => {
        console.log(address())
        let result = await hostServer(address())
        
        if (result) {
            setMsg("Success")
        }
        else {
            setMsg("Error")
        }
    }

    return (
        <>
            <div class="bg-slate-900 size-full text-gray-50">
                <span class="flex flex-row">
                    <TextButton href="/" text="Go Back"></TextButton>
                </span>
                <span class="flex flex-col gap-[5px]">
                    <br></br>
                    <p class="text-3xl font-bold">Host a local server</p>
                    <br></br>
                    <span>
                        <TextField value="localhost" placeholder="Host address" onChange={onAddressChange} class="w-1/2"></TextField>
                    </span>
                    <br></br>
                    <p>{msg()}</p>
                    <TextButton href="#" text="Host" onClick={onSubmit}></TextButton>
                </span>
            </div>
        </>
    )
}