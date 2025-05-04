
interface MarketingLayoutProps {
  children: React.ReactNode
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <main className="flex-1">{children}</main>
    </div>
  )
}
