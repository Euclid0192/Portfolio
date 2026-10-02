import bg from '../../assets/onepiece.mp4'

export default function Background() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-linear-to-br from-[#d16ba5] to-[#41dfff]">
      <video autoPlay loop muted playsInline tabIndex={-1} className="h-full w-full object-cover motion-reduce:hidden">
        <source src={bg} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-background/35" />
    </div>
  )
}
