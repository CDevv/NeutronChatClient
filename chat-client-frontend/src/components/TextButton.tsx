export default function TextButton(props: any)
{
    return (
        <>
            <a href={props.href}>
                <button class="bg-slate-700 rounded-lg p-4 text-lg" onClick={props.onClick}>{props.text}</button>
            </a>
        </>
    )
}