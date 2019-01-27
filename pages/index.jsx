import Link from 'next/link'

export default () => (
    <div>
        <Link href='/chat'>
            <a>Chat</a>
        </Link>
        <br />
        <Link href='/docs-and-forms'>
            <a>Docs and Forms</a>
        </Link>
        <br />
        <Link href='/news'>
            <a>News feed</a>
        </Link>
        <br />
    </div>
)
