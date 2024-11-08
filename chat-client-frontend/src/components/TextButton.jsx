export default function TextButton(props)
{
    return (
        <>
            <a href={props.href}>
                <button class="bg-slate-700 rounded-lg p-4 text-lg">{props.text}</button>
            </a>
        </>
    )
}