import * as Avatar from "@radix-ui/react-avatar"

type AvatarProps = {
   src: string
}

export function Avatars({ src }: AvatarProps) {
   return (
      <>
         <Avatar.Root className="inline-flex size-[100px] select-none items-center justify-center overflow-hidden rounded-full">
            <Avatar.Image className="size-full rounded-[inherit] object-cover" src={src} />
            <Avatar.Fallback className="leading-1 flex size-full items-center justify-center bg-gray-600 text-[32px] font-medium">JD</Avatar.Fallback>
         </Avatar.Root>
      </>
   )
}