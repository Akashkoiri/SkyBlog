'use client'

import { useRouter } from "next/navigation";

const Post = ({params}) => {
    const post = params.post
    return (
        <div>{post}</div>
    )
}

export default Post