export default function TextField(props: any)
{
    return (
        <input
            class="bg-slate-700 rounded-lg p-4"
            value={props.value}
            placeholder={props.placeholder}
            onChange={props.onChange}
        ></input>
    )
}