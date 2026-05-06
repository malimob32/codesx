export default function ArtistProfilePage({ params }: { params: { slug: string } }) {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <p className="text-sm uppercase tracking-[0.25em] text-neon-red">Artist Profile</p>
      <h1 className="mt-2 text-4xl font-black">{params.slug.replaceAll('-', ' ')}</h1>
      <p className="mt-4 text-white/70">Portfolio, reviews, and booking calendar will render here.</p>
    </main>
  );
}
