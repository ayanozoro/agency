export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-black text-white font-[family-name:var(--font-readex)]">
      {children}
    </div>
  );
}
