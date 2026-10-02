export const focusClasses = 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent'

export const buttonClasses = `inline-flex items-center justify-center rounded-lg border border-accent bg-accent px-5 py-3 text-center font-bold text-background transition-colors hover:border-white hover:bg-white disabled:cursor-wait disabled:opacity-60 motion-reduce:transition-none ${focusClasses}`

export const cardClasses = 'rounded-2xl border border-white/10 bg-surface/95 p-6 transition-colors hover:border-accent/50 hover:bg-background/95 motion-reduce:transition-none'

export function Container({ children, className = '' }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>
}

export function PageHeading({ children, className = '' }) {
  return <h1 id="page-heading" tabIndex={-1} className={`text-3xl leading-tight font-normal text-white drop-shadow-lg focus:outline-none sm:text-4xl ${className}`}>{children}</h1>
}

export function Page({ title, children, hideTitle = false, className = 'py-12 sm:py-16' }) {
  return (
    <section className={className}>
      <Container>
        <PageHeading className={hideTitle ? 'sr-only' : 'mb-10 text-center sm:mb-14'}>{title}</PageHeading>
        {children}
      </Container>
    </section>
  )
}
