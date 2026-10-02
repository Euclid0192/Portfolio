import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { HiOutlineTerminal } from 'react-icons/hi'
import { navigation } from '../../navigation'
import { projects } from '../../data/projects'
import { experiences } from '../../data/experiences'
import { focusClasses } from '../ui'

const bio = "I'm Nam, a CS major from MSU and a fullstack software engineer. When not coding, you can find me diving into classical music pieces on my piano, singing with my guitar in hand, or doing some crazy tricks with cards."
const helpCommands = [
  ['ls', 'list sections'],
  ['ls Projects', 'list project names'],
  ['ls Experiences', 'list companies and roles'],
  ['cd <section>', 'open a section'],
  ['whoami', 'a little about me'],
  ['clear', 'clear the terminal'],
]

export default function Terminal() {
  const navigate = useNavigate()
  const [input, setInput] = useState('')
  const [entries, setEntries] = useState([])
  const [history, setHistory] = useState([])
  const [historyIndex, setHistoryIndex] = useState(null)
  const output = useRef(null)

  useEffect(() => {
    output.current.scrollTop = output.current.scrollHeight
  }, [entries])

  const runCommand = (event) => {
    event.preventDefault()
    const command = input.trim()
    if (!command) return
    setInput('')
    setHistory((previous) => [...previous, command])
    setHistoryIndex(null)
    const [name, ...args] = command.split(/\s+/)
    const verb = name.toLowerCase()
    let result
    if (verb === 'ls' && args.length === 0) {
      result = { type: 'sections' }
    } else if (verb === 'ls') {
      const folder = args.join(' ').replace(/^\//, '').replace(/\/$/, '').toLowerCase()
      if (folder === 'projects') {
        result = { text: `${projects.map(({ name }) => name).join('\n')}\n\ncd Projects for more details :)` }
      } else if (folder === 'experiences' || folder === 'experience') {
        result = { text: `${experiences.map(({ terminalLabel }) => terminalLabel).join('\n')}\n\ncd Experiences for more details :)` }
      } else {
        result = { text: `ls: folder not found: ${args.join(' ')}. Try ls Projects or ls Experiences.`, error: true }
      }
    } else if (verb === 'whoami' && args.length === 0) {
      result = { text: bio }
    } else if (verb === 'cd') {
      const folder = args.join(' ').replace(/^\//, '').replace(/\/$/, '').toLowerCase()
      const destination = folder === 'experiences' ? 'experience' : folder
      const section = navigation.find(({ label, to }) => label.toLowerCase() === destination || to.slice(1) === destination)
      if (section) {
        navigate(section.to)
        result = { text: `Opened ${section.label}.` }
      } else {
        result = { text: `cd: section not found: ${args.join(' ')}. Type ls to see the available sections.`, error: true }
      }
    } else if (verb === 'clear' && args.length === 0) {
      setEntries([])
      return
    } else if (verb === 'help' && args.length === 0) {
      result = { type: 'help' }
    } else {
      result = { text: `Command not found: ${command}. Try ls, cd <section>, whoami, or help.`, error: true }
    }
    setEntries((previous) => [...previous, { command, ...result }].slice(-50))
  }

  const recallCommand = (event) => {
    if (!['ArrowUp', 'ArrowDown'].includes(event.key) || history.length === 0) return
    event.preventDefault()
    const current = historyIndex ?? history.length
    const next = event.key === 'ArrowUp' ? Math.max(0, current - 1) : Math.min(history.length, current + 1)
    setHistoryIndex(next)
    setInput(history[next] ?? '')
  }

  return (
    <section aria-label="Interactive portfolio terminal" className="w-full min-w-0 overflow-hidden rounded-2xl border border-white/20 bg-background/65 text-left shadow-[0_20px_60px_rgba(0,0,0,0.3)] backdrop-blur-md">
      <div className="flex items-center gap-3 border-b border-white/15 bg-white/5 px-4 py-3 sm:px-5">
        <div aria-hidden="true" className="flex gap-1.5"><span className="size-2.5 rounded-full bg-accent" /><span className="size-2.5 rounded-full bg-amber-300/80" /><span className="size-2.5 rounded-full bg-emerald-300/80" /></div>
        <span className="flex-1 text-center text-sm text-white/65">nam@portfolio: ~</span>
        <HiOutlineTerminal aria-hidden="true" className="size-5 text-accent" />
      </div>
      <div ref={output} role="log" aria-label="Terminal output" aria-live="polite" aria-relevant="additions" tabIndex={0} className={`h-80 space-y-5 overflow-y-auto overscroll-contain p-5 sm:h-96 sm:p-6 ${focusClasses}`}>
        <div className="text-sm leading-relaxed text-white/65"><p className="text-base text-white">Welcome to my little corner of the internet.</p><p className="mt-2">Explore with <span className="text-accent">ls</span>, <span className="text-accent">cd</span>, and <span className="text-accent">whoami</span>. Type <span className="text-accent">help</span> for more.</p></div>
        {entries.map((entry, index) => (
          <div key={index}>
            <p className="break-words font-mono text-sm"><span className="text-accent">~ $ </span>{entry.command}</p>
            {entry.type === 'sections' ? <div className="mt-3 flex flex-wrap gap-2">{navigation.map(({ label, to }) => <Link key={to} to={to} className={`rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-sm text-accent transition-colors hover:border-accent hover:bg-accent/20 motion-reduce:transition-none ${focusClasses}`}>{label}</Link>)}</div> : entry.type === 'help' ? <div className="mt-2 space-y-1 text-base leading-relaxed text-white/85">{helpCommands.map(([command, instruction]) => <p key={command}><span className="text-accent">{command}</span> &mdash; {instruction}</p>)}<p className="pt-2 text-sm text-white/65">Use &uarr; and &darr; to recall commands.</p></div> : <p className={`mt-2 whitespace-pre-line break-words text-base leading-relaxed ${entry.error ? 'text-orange-200' : 'text-white/85'}`}>{entry.text}</p>}
          </div>
        ))}
      </div>
      <form onSubmit={runCommand} className="flex items-center gap-3 border-t border-white/15 px-4 py-4 sm:px-5">
        <span aria-hidden="true" className="shrink-0 font-mono text-accent">~ $</span>
        <label htmlFor="terminal-command" className="sr-only">Terminal command</label>
        <input id="terminal-command" value={input} onChange={(event) => { setInput(event.target.value); setHistoryIndex(null) }} onKeyDown={recallCommand} placeholder="Type a command…" autoComplete="off" autoCapitalize="none" spellCheck={false} className={`min-w-0 flex-1 rounded-sm bg-transparent py-1 font-mono text-sm text-white placeholder:text-white/40 ${focusClasses}`} />
        <button type="submit" aria-label="Run command" className={`rounded-md border border-white/15 px-3 py-1 text-accent hover:border-accent hover:bg-accent/10 ${focusClasses}`}>↵</button>
      </form>
    </section>
  )
}
