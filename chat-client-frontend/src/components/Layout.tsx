export default function Layout(props: any)
{
    return (
        <div class="m-0 w-screen h-screen min-h-full min-w-full top-0 left-0 fixed">
            {props.children}
        </div>
    )
}