import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

interface Props {
    url: string,
}

export function AvatarDemo(props: Props) {
    return (
        <Avatar>
            <picture className="aspect-square h-full w-full">
                <img src={props.url} alt="" />
            </picture>
            <AvatarFallback>LUIS</AvatarFallback>
        </Avatar>
    )
}
