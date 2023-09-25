import Link from 'next/link';

export default function NewPost() {
  return (
    <>
      <h1>New Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}