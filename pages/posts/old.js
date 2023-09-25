import Link from 'next/link';

export default function OldPost() {
  return (
    <>
      <h1>Old Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}