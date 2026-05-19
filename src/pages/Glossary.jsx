import { useState, useMemo } from 'react'
import Navbar from '../components/Navbar'
import UsernameModal from '../components/UsernameModal'

const glossaryTerms = [
  // A
  { term: 'Accessibility', definition: 'The design of digital products so they can be used by people with a range of disabilities, including visual, auditory, motor, and cognitive impairments.', topic: 'Design Concepts' },
  { term: 'Alignment', definition: 'A design principle where every element has a visual connection to something else on the page. Creates order and organisation.', topic: 'Design Concepts' },
  { term: 'Analogue signal', definition: 'A continuous signal that varies in amplitude or frequency. Contrasts with digital signals which use discrete binary values.', topic: 'Networks' },
  { term: 'Animation', definition: 'A sequence of images or frames displayed in rapid succession to create the illusion of movement.', topic: 'Application Skills' },
  { term: 'Antivirus software', definition: 'Software that detects, prevents, and removes malware from a computer system.', topic: 'Impacts of Technology' },
  { term: 'Archive', definition: 'The process of moving data that is no longer actively used to a separate storage location for long-term retention.', topic: 'Managing Data' },
  { term: 'Asymmetric balance', definition: 'A type of visual balance where elements of different sizes or weights are arranged so that the overall design still feels balanced.', topic: 'Design Concepts' },

  // B
  { term: 'Backup', definition: 'A copy of data made and stored separately so it can be restored if the original is lost or damaged. Backups are regular and intended for recovery.', topic: 'Managing Data' },
  { term: 'Bandwidth', definition: 'The maximum amount of data that can be transmitted over a network connection in a given time, measured in bits per second (bps).', topic: 'Networks' },
  { term: 'Binary', definition: 'A number system using only two digits (0 and 1) that forms the basis of all digital data.', topic: 'Hardware' },
  { term: 'Bitmap (.bmp)', definition: 'A raster image format that stores pixel data without compression. Produces large file sizes.', topic: 'Application Skills' },
  { term: 'Browser', definition: 'Software used to access and display web pages (e.g. Chrome, Firefox, Edge).', topic: 'Networks' },

  // C
  { term: 'Checksum', definition: 'A value calculated from data and used to detect errors during transmission or storage.', topic: 'Networks' },
  { term: 'Client-server network', definition: 'A network model where a central server provides resources and services to client devices. Common in business environments.', topic: 'Networks' },
  { term: 'Cloud computing', definition: 'The delivery of computing services (storage, software, processing) over the internet rather than on local hardware.', topic: 'Managing Data' },
  { term: 'CMYK', definition: 'A colour model used in print: Cyan, Magenta, Yellow, and Key (Black). Used when preparing designs for physical printing.', topic: 'Design Concepts' },
  { term: 'Codec', definition: 'Software that compresses and decompresses audio or video data. Common video codecs include H.264 and H.265.', topic: 'Application Skills' },
  { term: 'Colour palette', definition: 'A selected set of colours used consistently throughout a design to create visual cohesion.', topic: 'Design Concepts' },
  { term: 'Complementary colours', definition: 'Colours that sit opposite each other on the colour wheel. When used together they create high contrast.', topic: 'Design Concepts' },
  { term: 'Compositional rules', definition: 'Rules that guide the arrangement of elements in a design to direct the viewer\'s eye and create visual interest. Includes: Focal point/Centre of interest – the central point of attention within a design; Framing – presenting an image so it immediately captures the viewer\'s attention; Leading lines – drawing the viewer into an image so it is seen in a prescribed sequence; Reading gravity – the tendency of Western audiences to read left to right and top to bottom; Rule of thirds – dividing an image into nine equal parts with the eye naturally drawn to the intersection points; Underlying geometric framework/Eye-flow – planning a design so the viewer\'s eye moves around the page intentionally.', topic: 'Design Concepts' },
  { term: 'Compression', definition: 'Reducing the file size of data. Lossless compression preserves all data; lossy compression discards some data to achieve smaller file sizes.', topic: 'Managing Data' },
  { term: 'Contrast', definition: 'A design principle that uses differences in colour, size, shape, or type to create visual interest and direct attention.', topic: 'Design Concepts' },
  { term: 'Copyright Act 1968', definition: 'Australian legislation that protects the rights of creators over their original works. Makes it illegal to copy, distribute, or modify copyrighted material without permission.', topic: 'Impacts of Technology' },
  { term: 'CPU (Central Processing Unit)', definition: 'The primary component of a computer that executes program instructions. Measured in GHz; more cores allow simultaneous task processing.', topic: 'Hardware' },
  { term: 'Creative Commons', definition: 'A set of licences that allow creators to specify how their work may be used by others, ranging from free use with attribution to restricted commercial use.', topic: 'Impacts of Technology' },
  { term: 'Cyberbullying', definition: 'The use of digital technology to harass, threaten, or humiliate an individual. A form of online harm addressed through digital citizenship education.', topic: 'Impacts of Technology' },
  { term: 'Cybercrime', definition: 'Criminal activity carried out using computers or the internet, including hacking, identity theft, phishing, and distributing malware.', topic: 'Impacts of Technology' },

  // D
  { term: 'Data', definition: 'Raw facts and figures without context. Data becomes information when it is processed or organised to give it meaning.', topic: 'Managing Data' },
  { term: 'Data integrity', definition: 'The accuracy, consistency, and reliability of data stored in a system. Maintained through validation rules and good database design.', topic: 'Managing Data' },
  { term: 'Data redundancy', definition: 'The unnecessary duplication of data within a database or storage system. Can lead to inconsistencies and wastes storage space. Good database design minimises redundancy through normalisation.', topic: 'Managing Data' },
  { term: 'Digital citizenship', definition: 'The manner in which a user accesses and interacts using digital technologies. Responsible digital citizenship includes: Digital access – the ability to access electronic technologies; Digital commerce – the electronic sale and/or purchase of goods; Digital communication – the exchange of information via electronic devices; Digital etiquette – acceptable codes of conduct when communicating online; Digital health and wellness – the physical and mental well-being of those in the digital world, including ergonomics and internet addiction; Digital law – laws governing acceptable online behaviours including copyright and spam; Digital literacy – teaching and learning about technology and how it can be used; Digital rights and responsibilities – the rights and responsibilities of anyone operating within the digital world; Digital security – ensuring the electronic safety of digital content from external threat.', topic: 'Impacts of Technology' },

  // E
  { term: 'Elements of design', definition: 'The parts or components within a design that can be individually defined. Together they construct the principles of design, provide the basic structure for the product, and communicate the design intentions. The placement of elements can alter the message communicated.', topic: 'Design Concepts' },
  { term: 'Evaluation criteria', definition: 'The criteria employed to provide a consistent, standardised evaluation of a product\'s performance against an established benchmark or set of standards.', topic: 'Design Concepts' },

  // L
  { term: 'Layout', definition: 'The process of planning and arranging, in detail, how the design will be reproduced. The arrangement of the various elements of design enables the production of an aesthetically pleasing and harmonious product.', topic: 'Design Concepts' },

  // P
  { term: 'Principles of design', definition: 'Specific concepts utilised to organise or arrange the structural aspects of a design. Designers choose principles to ensure that the intention of their message is clear to the target audience.', topic: 'Design Concepts' },
  { term: 'Production process', definition: 'The stages required to complete a product, from the initial idea to the completion of the final product.', topic: 'Project Management' },
  { term: 'Project', definition: 'A process or enterprise that is planned, designed and developed to achieve an aim. In the AIT ATAR course, students research IT-based ideas and processes that require project management approaches to create quality digital solutions.', topic: 'Project Management' },
  { term: 'Project management', definition: 'The discipline of planning, organising, securing and managing resources to bring about the successful completion of a project efficiently and effectively.', topic: 'Project Management' },

  // R
  { term: 'Responsive design', definition: 'A web design approach aimed at producing sites that provide an optimal viewing experience across a wide range of devices — including smartphones, tablets, laptops and desktop monitors — requiring minimal resizing, panning, and scrolling.', topic: 'Application Skills' },

  // S
  { term: 'Style guide', definition: 'The set of rules, conventions, procedures or standards used for the designing and development of documents for publication, either electronic or print.', topic: 'Design Concepts' },
]

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

const TOPIC_STYLES = {
  'Design Concepts':      'bg-violet-100 text-violet-700',
  'Networks':             'bg-blue-100 text-blue-700',
  'Application Skills':   'bg-emerald-100 text-emerald-700',
  'Impacts of Technology':'bg-amber-100 text-amber-700',
  'Managing Data':        'bg-cyan-100 text-cyan-700',
  'Hardware':             'bg-rose-100 text-rose-700',
  'Project Management':   'bg-indigo-100 text-indigo-700',
}

export default function Glossary() {
  const [search, setSearch] = useState('')
  const [activeLetter, setActiveLetter] = useState(null)

  const availableLetters = useMemo(
    () => new Set(glossaryTerms.map(t => t.term[0].toUpperCase())),
    []
  )

  const filtered = useMemo(() => {
    let terms = glossaryTerms
    if (search.trim()) {
      const q = search.toLowerCase()
      terms = terms.filter(
        t => t.term.toLowerCase().includes(q) || t.definition.toLowerCase().includes(q)
      )
    }
    if (activeLetter) {
      terms = terms.filter(t => t.term[0].toUpperCase() === activeLetter)
    }
    return terms
  }, [search, activeLetter])

  const grouped = useMemo(() => {
    const groups = {}
    for (const t of filtered) {
      const letter = t.term[0].toUpperCase()
      if (!groups[letter]) groups[letter] = []
      groups[letter].push(t)
    }
    for (const letter in groups) {
      groups[letter].sort((a, b) => a.term.localeCompare(b.term))
    }
    return Object.entries(groups).sort(([a], [b]) => a.localeCompare(b))
  }, [filtered])

  return (
    <>
      <UsernameModal />
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <div className="mb-6">
          <div className="flex items-baseline gap-3 mb-1">
            <h1 className="text-2xl sm:text-3xl font-bold text-neutral-900">AIT Glossary</h1>
            <span className="text-sm text-neutral-400 font-medium">{filtered.length} term{filtered.length !== 1 ? 's' : ''}</span>
          </div>
          <p className="text-sm text-neutral-500">Key terms and definitions for Year 11 AIT ATAR.</p>
        </div>

        {/* Search */}
        <input
          type="text"
          placeholder="Search terms or definitions…"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 bg-white text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4"
        />

        {/* A–Z filter */}
        <div className="flex flex-wrap gap-1 mb-8">
          {ALPHABET.map(letter => {
            const has = availableLetters.has(letter)
            const active = activeLetter === letter
            return (
              <button
                key={letter}
                onClick={() => setActiveLetter(active ? null : letter)}
                disabled={!has}
                className={`w-8 h-8 rounded-lg text-xs font-semibold transition-colors
                  ${active
                    ? 'bg-indigo-600 text-white'
                    : has
                      ? 'bg-neutral-100 text-neutral-700 hover:bg-indigo-50 hover:text-indigo-600'
                      : 'bg-neutral-50 text-neutral-300 cursor-not-allowed'
                  }`}
              >
                {letter}
              </button>
            )
          })}
          {activeLetter && (
            <button
              onClick={() => setActiveLetter(null)}
              className="px-3 h-8 rounded-lg text-xs font-medium bg-neutral-100 text-neutral-500 hover:bg-neutral-200 ml-1"
            >
              Clear
            </button>
          )}
        </div>

        {/* Results */}
        {grouped.length === 0 ? (
          <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-8 text-center">
            <p className="text-sm text-neutral-500">
              {search ? `No terms found for "${search}".` : 'No terms found.'}
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            {grouped.map(([letter, terms]) => (
              <section key={letter}>
                <h2 className="text-base font-bold text-indigo-600 mb-3 pb-2 border-b border-neutral-200">
                  {letter}
                </h2>
                <div className="space-y-3">
                  {terms.map(({ term, definition, topic }) => (
                    <div key={term} className="bg-neutral-50 border border-neutral-200 rounded-xl p-4">
                      <div className="flex items-start justify-between gap-3 mb-1.5">
                        <span className="font-semibold text-neutral-900 text-sm leading-snug">{term}</span>
                        <span className={`shrink-0 text-xs font-medium px-2 py-0.5 rounded-full ${TOPIC_STYLES[topic] ?? 'bg-neutral-100 text-neutral-600'}`}>
                          {topic}
                        </span>
                      </div>
                      <p className="text-sm text-neutral-600 leading-relaxed">{definition}</p>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}
      </main>
    </>
  )
}
