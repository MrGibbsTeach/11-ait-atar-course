export const modules = {
  1: {
    id: 1,
    unit: 1,
    title: 'Design Concepts',
    shortDescription: 'Principles of visual design, typography, and effective digital communication',
    lesson: [
      {
        type: 'intro',
        text: 'Design concepts form the foundation of effective digital media. Understanding how to apply design principles ensures your work communicates clearly and professionally.',
      },
      {
        type: 'section',
        title: 'The CRAP Principles',
        paragraphs: [
          'The four core design principles — Contrast, Repetition, Alignment, and Proximity — are used to evaluate and improve any visual composition.',
          'Contrast refers to the difference between elements such as colour, size, shape, or typeface. Strong contrast draws attention and creates visual hierarchy.',
          'Repetition involves reusing visual elements (colours, fonts, shapes) throughout a design to create consistency and unity.',
          'Alignment means every element should have a visual connection to something else on the page. Nothing should be placed arbitrarily.',
          'Proximity groups related items together and separates unrelated items to reduce clutter and improve readability.',
        ],
      },
      {
        type: 'section',
        title: 'Typography',
        paragraphs: [
          'Typography is the art of arranging type. Key concepts include: typeface (the font family), font weight (bold, regular, light), font size, and line spacing (leading).',
          'Serif fonts (e.g. Times New Roman) have small strokes at the ends of letterforms. They are traditionally used for body text in print.',
          'Sans-serif fonts (e.g. Arial, Inter) have clean letterforms without serifs. They are generally preferred for screen-based designs.',
          'Limit designs to two or three font families. Use size and weight to create hierarchy rather than introducing additional typefaces.',
        ],
      },
      {
        type: 'section',
        title: 'Colour Theory',
        paragraphs: [
          'Colour communicates mood and brand identity. The colour wheel organises hues into primary (red, yellow, blue), secondary, and tertiary colours.',
          'Complementary colours sit opposite each other on the colour wheel and create high contrast. Analogous colours sit adjacent and create harmony.',
          'Colour has three properties: hue (the colour itself), saturation (intensity), and value (lightness/darkness).',
          'In digital design, colours are specified in hexadecimal (#RRGGBB) or RGB/RGBA values. In print, CMYK values are used.',
        ],
      },
      {
        type: 'keyTerms',
        items: [
          { term: 'Visual hierarchy', definition: 'The arrangement of elements to show their order of importance.' },
          { term: 'White space', definition: 'Empty space around elements that improves readability and focus.' },
          { term: 'Resolution', definition: 'The number of pixels per inch (PPI) in a digital image. Higher resolution = more detail.' },
          { term: 'Typeface', definition: 'A set of fonts sharing common design features (e.g. Arial is a typeface).' },
          { term: 'Colour palette', definition: 'A selected set of colours used consistently throughout a design.' },
        ],
      },
    ],
    quiz: [
      {
        id: 1,
        question: 'Which design principle involves grouping related elements together to reduce visual clutter?',
        options: ['Contrast', 'Repetition', 'Alignment', 'Proximity'],
        correct: 3,
      },
      {
        id: 2,
        question: 'A student uses the same font and colour scheme on every page of their website. Which design principle are they applying?',
        options: ['Contrast', 'Repetition', 'Alignment', 'Proximity'],
        correct: 1,
      },
      {
        id: 3,
        question: 'Which type of font is generally recommended for screen-based designs?',
        options: ['Serif', 'Sans-serif', 'Decorative', 'Monospace'],
        correct: 1,
      },
    ],
    practiceQuestions: [
      {
        id: 1,
        question: 'Identify and explain two design principles that should be applied when creating a digital flyer for a school event. (4 marks)',
        marks: 4,
        modelAnswer: 'Any two of the following, with explanation:\n\n• Contrast — Use high contrast between background and text colours (e.g. dark text on a light background) so key information is easy to read and important details stand out. (2 marks)\n\n• Proximity — Group related information together (e.g. event time and venue in one block) so readers can quickly find what they need. Separate unrelated elements with white space. (2 marks)\n\n• Repetition — Repeat visual elements such as a school logo colour or a consistent heading style throughout the flyer to create a cohesive, professional appearance. (2 marks)\n\n• Alignment — Align all text and images to a common edge or grid so the design looks intentional and organised rather than random. (2 marks)',
      },
      {
        id: 2,
        question: 'Explain the difference between a serif and a sans-serif font and give one situation where each would be appropriate. (4 marks)',
        marks: 4,
        modelAnswer: 'Serif fonts have small decorative strokes at the ends of letterforms (e.g. Times New Roman). They are traditionally used for long-form body text in printed documents because the serifs help guide the eye. (2 marks)\n\nSans-serif fonts do not have these strokes (e.g. Arial, Inter). They are preferred for screen-based content such as websites and apps because they render more cleanly at small sizes on digital displays. (2 marks)',
      },
    ],
    examPractice: [
      {
        id: 1,
        question: 'A student is designing an infographic to explain climate change for a Year 10 audience. Describe how they could apply the principles of contrast and alignment to improve the effectiveness of their design. (6 marks)',
        marks: 6,
        modelAnswer: 'Contrast (3 marks): The student could use contrasting colours between the background and key statistics (e.g. white text on a dark blue background) to make important data stand out. They could also vary font sizes — large bold text for headings and smaller text for body content — creating a clear visual hierarchy. Contrasting shapes (circles vs rectangles) could differentiate different categories of information.\n\nAlignment (3 marks): All elements should align to a consistent grid or baseline so the infographic looks organised and professional. Text should align left or be centred consistently — mixing alignments appears unprofessional. Images and charts should align with adjacent text blocks so visual connections between information are clear. A consistent margin should be maintained around the edge of the infographic.',
      },
    ],
  },

  2: {
    id: 2,
    unit: 1,
    title: 'Hardware',
    shortDescription: 'Hardware components and their roles in digital media production systems',
    lesson: [
      {
        type: 'intro',
        text: 'Understanding hardware is essential for selecting the right tools for digital media tasks. Different components affect performance, storage, and input/output capabilities.',
      },
      {
        type: 'section',
        title: 'The CPU (Central Processing Unit)',
        paragraphs: [
          'The CPU is the "brain" of the computer. It executes program instructions and performs calculations. CPU performance is measured in gigahertz (GHz) — higher GHz generally means faster processing.',
          'Modern CPUs have multiple cores, allowing them to execute multiple tasks simultaneously. A quad-core CPU can handle four threads at once.',
          'For video editing and 3D rendering, a high-performance multi-core CPU is essential.',
        ],
      },
      {
        type: 'section',
        title: 'Memory (RAM)',
        paragraphs: [
          'Random Access Memory (RAM) is temporary storage that holds data the CPU is currently using. More RAM allows more applications to run simultaneously.',
          'RAM is measured in gigabytes (GB). For digital media work, 16 GB is a minimum recommendation; video editing benefits from 32 GB or more.',
          'RAM is volatile — its contents are lost when the computer is switched off.',
        ],
      },
      {
        type: 'section',
        title: 'Storage Devices',
        paragraphs: [
          'Hard Disk Drives (HDD) use magnetic spinning platters. They are slower but offer large capacity at low cost.',
          'Solid State Drives (SSD) use flash memory with no moving parts. They are significantly faster, more durable, and more expensive per gigabyte than HDDs.',
          'Storage capacity is measured in gigabytes (GB) or terabytes (TB). Video files are particularly large — one hour of 4K footage can exceed 100 GB.',
        ],
      },
      {
        type: 'section',
        title: 'Input and Output Devices',
        paragraphs: [
          'Input devices collect data from the user or environment: keyboard, mouse, graphics tablet, microphone, scanner, webcam, MIDI controller.',
          'Output devices present processed data: monitor (display), speakers, headphones, printer.',
          'For digital media production, a high-resolution monitor with accurate colour reproduction (colour gamut) is important.',
        ],
      },
      {
        type: 'section',
        title: 'GPU (Graphics Processing Unit)',
        paragraphs: [
          'The GPU handles rendering of images, video, and 3D graphics. A dedicated GPU significantly speeds up video editing, image processing, and game development.',
          'Modern GPUs also accelerate machine learning tasks.',
        ],
      },
      {
        type: 'keyTerms',
        items: [
          { term: 'CPU', definition: 'Central Processing Unit — the main processor of a computer.' },
          { term: 'RAM', definition: 'Random Access Memory — fast, temporary storage for active data.' },
          { term: 'SSD', definition: 'Solid State Drive — fast storage using flash memory with no moving parts.' },
          { term: 'GPU', definition: 'Graphics Processing Unit — specialised processor for graphics rendering.' },
          { term: 'Peripheral', definition: 'Any device connected externally to a computer (keyboard, mouse, printer, etc.).' },
        ],
      },
    ],
    quiz: [
      {
        id: 1,
        question: 'Which component is referred to as the "brain" of the computer?',
        options: ['RAM', 'GPU', 'CPU', 'SSD'],
        correct: 2,
      },
      {
        id: 2,
        question: 'A student needs fast storage for video editing files. Which storage type is most appropriate?',
        options: ['HDD (Hard Disk Drive)', 'SSD (Solid State Drive)', 'USB flash drive', 'CD-ROM'],
        correct: 1,
      },
      {
        id: 3,
        question: 'Which of the following is an INPUT device?',
        options: ['Monitor', 'Speaker', 'Graphics tablet', 'Printer'],
        correct: 2,
      },
    ],
    practiceQuestions: [
      {
        id: 1,
        question: 'A student wants to build a computer for video editing. Explain why they should prioritise having a large amount of RAM. (3 marks)',
        marks: 3,
        modelAnswer: 'Video editing software loads large video files and preview data into RAM while the project is being edited. (1 mark) If there is insufficient RAM, the computer must use virtual memory on the hard drive, which is significantly slower, causing lag and reduced performance. (1 mark) More RAM (e.g. 32 GB) allows the editor to work with multiple high-resolution video tracks simultaneously without performance degradation. (1 mark)',
      },
      {
        id: 2,
        question: 'Compare HDD and SSD storage. Give one advantage and one disadvantage of each. (4 marks)',
        marks: 4,
        modelAnswer: 'HDD advantage: Much larger storage capacity available at a lower cost per gigabyte, making HDDs suitable for archiving large amounts of data. (1 mark)\nHDD disadvantage: Slower read/write speeds due to mechanical moving parts, which slows down loading times and file transfers. (1 mark)\n\nSSD advantage: Significantly faster read/write speeds with no moving parts, resulting in quicker boot times and faster application loading. (1 mark)\nSSD disadvantage: More expensive per gigabyte compared to HDDs, making high-capacity SSDs costly. (1 mark)',
      },
    ],
    examPractice: [
      {
        id: 1,
        question: 'A school is upgrading its computer lab for digital media production. The lab manager must choose between purchasing computers with HDDs or SSDs. Discuss the factors the lab manager should consider when making this decision. (6 marks)',
        marks: 6,
        modelAnswer: 'Performance needs (2 marks): SSDs are significantly faster, which is important for media production tasks such as video editing, rendering, and working with large image files. Students will experience less waiting time when loading projects and exporting files.\n\nCost considerations (2 marks): SSDs cost more per gigabyte than HDDs. The lab manager must consider budget constraints. A compromise could be using SSDs for the operating system and applications, with HDDs for bulk file storage.\n\nDurability and maintenance (2 marks): SSDs have no moving parts, making them more resistant to physical damage from vibration or drops. This is beneficial in a school environment. HDDs are more susceptible to failure if knocked while operating. Over time, SSD reliability may reduce total maintenance costs.',
      },
    ],
  },

  3: {
    id: 3,
    unit: 1,
    title: 'Impacts of Technology',
    shortDescription: 'Social, ethical, legal, and environmental implications of digital technologies',
    lesson: [
      {
        type: 'intro',
        text: 'Digital technologies have profound effects on individuals, communities, and the environment. Understanding these impacts enables responsible use and informed decision-making.',
      },
      {
        type: 'section',
        title: 'Social Impacts',
        paragraphs: [
          'The digital divide refers to the gap between those who have access to technology and the internet and those who do not. This gap can be due to geography, income, age, or disability.',
          'Social media has changed how people communicate, but also raises concerns about mental health, cyberbullying, misinformation, and the spread of harmful content.',
          'Remote work and online learning have increased as a result of digital technologies, changing traditional social structures.',
        ],
      },
      {
        type: 'section',
        title: 'Ethical Issues',
        paragraphs: [
          'Privacy refers to an individual\'s right to control information about themselves. Data collection by apps and websites raises ethical questions about how personal data is used.',
          'Surveillance technologies (CCTV, facial recognition, tracking apps) raise debates between security and privacy rights.',
          'Artificial intelligence can embed bias if trained on unrepresentative data, leading to unfair outcomes in areas like employment or law enforcement.',
        ],
      },
      {
        type: 'section',
        title: 'Legal Issues',
        paragraphs: [
          'Copyright law protects creators\' rights over their original works. Using copyrighted images, music, or software without permission is illegal.',
          'Creative Commons licences allow creators to specify how their work may be used — some allow free use with attribution, others restrict commercial use.',
          'The Privacy Act 1988 (Australia) regulates how organisations handle personal information.',
          'Cybercrime laws criminalise hacking, identity theft, and distributing malware.',
        ],
      },
      {
        type: 'section',
        title: 'Environmental Impacts',
        paragraphs: [
          'Electronic waste (e-waste) is one of the fastest-growing waste streams globally. Discarded devices contain toxic materials that can leach into soil and water.',
          'Data centres that power cloud computing consume enormous amounts of electricity. Some companies are investing in renewable energy to reduce this footprint.',
          'Manufacturing devices requires mining of rare earth metals, which can cause environmental damage.',
        ],
      },
      {
        type: 'keyTerms',
        items: [
          { term: 'Digital divide', definition: 'The gap between those with and without access to digital technologies.' },
          { term: 'Privacy', definition: 'An individual\'s right to control personal information about themselves.' },
          { term: 'Copyright', definition: 'Legal protection of a creator\'s rights over their original work.' },
          { term: 'Creative Commons', definition: 'A set of licences allowing creators to share work with specified permissions.' },
          { term: 'E-waste', definition: 'Discarded electrical and electronic devices.' },
        ],
      },
    ],
    quiz: [
      {
        id: 1,
        question: 'A student downloads a music track from the internet without permission and uses it in a school video. Which legal issue does this raise?',
        options: ['Privacy', 'Copyright infringement', 'Cyberbullying', 'The digital divide'],
        correct: 1,
      },
      {
        id: 2,
        question: 'The "digital divide" refers to:',
        options: [
          'The difference between digital and analogue signals',
          'The gap between those with and without technology access',
          'The split between hardware and software',
          'The difference between public and private networks',
        ],
        correct: 1,
      },
      {
        id: 3,
        question: 'Which of the following best describes e-waste?',
        options: [
          'Spam emails and junk mail',
          'Digital files that take up storage space',
          'Discarded electrical and electronic equipment',
          'Outdated software applications',
        ],
        correct: 2,
      },
    ],
    practiceQuestions: [
      {
        id: 1,
        question: 'Explain one positive and one negative social impact of social media technology. (4 marks)',
        marks: 4,
        modelAnswer: 'Positive social impact: Social media allows people to maintain connections with friends and family regardless of distance, and enables individuals to connect with communities who share similar interests or experiences, reducing social isolation. (2 marks)\n\nNegative social impact: Social media can contribute to cyberbullying, where individuals are harassed or targeted online. This can have serious mental health consequences for victims, including anxiety, depression, and withdrawal from school or social activities. (2 marks)',
      },
      {
        id: 2,
        question: 'A business collects customer data including names, email addresses, and purchase history. Describe two ethical responsibilities the business has regarding this data. (4 marks)',
        marks: 4,
        modelAnswer: 'The business should only collect data that is necessary for its stated purpose (data minimisation) and must be transparent with customers about what data is collected and how it will be used. (2 marks)\n\nThe business must store the data securely to prevent unauthorised access or data breaches, and must not sell or share the data with third parties without the customer\'s consent. (2 marks)',
      },
    ],
    examPractice: [
      {
        id: 1,
        question: 'A school is considering installing facial recognition software at its entrances for security purposes. Discuss the potential benefits and ethical concerns of implementing this technology. (8 marks)',
        marks: 8,
        modelAnswer: 'Benefits (4 marks): Facial recognition could improve school security by automatically identifying and logging who enters the building, making it easier to detect and respond to unauthorised visitors. It can reduce the workload of staff who would otherwise need to manually check identification. In an emergency, it could help verify who is on the premises. The technology could also be used to automate student attendance tracking, saving administrative time.\n\nEthical concerns (4 marks): Collecting and storing biometric data (facial recognition data) raises significant privacy concerns, particularly for minors who cannot meaningfully consent. There is a risk that this data could be misused, hacked, or accessed by unauthorised parties. Facial recognition systems have been shown to have higher error rates for certain ethnic groups, raising concerns about bias and fairness. Students and staff may feel their privacy is being invaded and experience discomfort from constant surveillance, affecting the school environment.',
      },
    ],
  },

  4: {
    id: 4,
    unit: 1,
    title: 'Application Skills',
    shortDescription: 'Practical skills using digital media applications for image, audio, and video',
    lesson: [
      {
        type: 'intro',
        text: 'Application skills involve using digital tools to create, edit, and produce media content. Understanding file formats, tools, and workflows is essential for effective digital media production.',
      },
      {
        type: 'section',
        title: 'Image Editing',
        paragraphs: [
          'Raster images are made up of pixels. Common formats include JPEG (compressed, suitable for photographs), PNG (lossless, supports transparency), and GIF (animated, limited colours).',
          'Vector images are made from mathematical paths and can be scaled without quality loss. SVG and AI (Adobe Illustrator) are common vector formats.',
          'Key image editing tools include: crop, resize, colour adjustment (brightness, contrast, saturation), layers, masks, and selection tools.',
          'Image resolution is measured in PPI (pixels per inch). 72 PPI is standard for screens; 300 PPI is recommended for print.',
        ],
      },
      {
        type: 'section',
        title: 'Audio Editing',
        paragraphs: [
          'Audio file formats include MP3 (compressed, widely compatible), WAV (uncompressed, high quality), and AAC (compressed, good quality at small file sizes).',
          'Key audio editing tasks: trimming, cutting, fading in/out, normalising volume, noise reduction, and mixing multiple tracks.',
          'Sample rate (measured in Hz) determines audio quality. 44,100 Hz (44.1 kHz) is CD quality; 48,000 Hz is standard for video production.',
        ],
      },
      {
        type: 'section',
        title: 'Video Editing',
        paragraphs: [
          'Common video file formats: MP4 (H.264 codec, widely compatible), MOV (Apple ProRes, high quality), AVI (older format), and MKV.',
          'Frame rate (FPS — frames per second) determines how smooth video appears. Common rates are 24 FPS (cinematic), 30 FPS (broadcast), and 60 FPS (smooth motion).',
          'Key video editing tasks: cutting, trimming, transitions, colour grading, adding titles/graphics, audio syncing, and exporting.',
          'Resolution refers to the dimensions of the video frame: 1920×1080 (Full HD), 2560×1440 (2K), 3840×2160 (4K).',
        ],
      },
      {
        type: 'section',
        title: 'File Management',
        paragraphs: [
          'Organising files into clearly named folders (e.g. by project name, date, and asset type) is essential for efficient production workflows.',
          'Version control involves saving incremental versions of a file (e.g. logo_v1.ai, logo_v2.ai) so earlier versions can be recovered.',
          'Compression reduces file size for storage or transmission but may reduce quality. Lossless compression preserves all data; lossy compression discards some data.',
        ],
      },
      {
        type: 'keyTerms',
        items: [
          { term: 'Raster image', definition: 'An image made up of pixels; quality degrades when enlarged.' },
          { term: 'Vector image', definition: 'An image made from mathematical paths; scales without quality loss.' },
          { term: 'Codec', definition: 'Software that compresses and decompresses video or audio data.' },
          { term: 'Frame rate', definition: 'The number of frames displayed per second in a video.' },
          { term: 'Lossless compression', definition: 'Compression that reduces file size without losing any data.' },
        ],
      },
    ],
    quiz: [
      {
        id: 1,
        question: 'Which image format supports transparent backgrounds?',
        options: ['JPEG', 'PNG', 'GIF', 'Both PNG and GIF'],
        correct: 3,
      },
      {
        id: 2,
        question: 'What does "frame rate" refer to in video production?',
        options: [
          'The physical size of the video frame in pixels',
          'The number of frames displayed per second',
          'The compression ratio of the video file',
          'The colour depth of the video',
        ],
        correct: 1,
      },
      {
        id: 3,
        question: 'A student exports a logo for use on a website. Which format is most appropriate if the logo needs a transparent background?',
        options: ['JPEG', 'MP4', 'PNG', 'MP3'],
        correct: 2,
      },
    ],
    practiceQuestions: [
      {
        id: 1,
        question: 'Explain the difference between raster and vector images and state one situation where each would be most appropriate. (4 marks)',
        marks: 4,
        modelAnswer: 'Raster images are composed of individual pixels and can display complex, photographic detail. However, they lose quality when enlarged. A raster image is most appropriate for photographs (e.g. JPEG for a portrait photograph). (2 marks)\n\nVector images are composed of mathematical paths and can be scaled to any size without losing quality. A vector image is most appropriate for logos and icons that must appear at multiple sizes without distortion (e.g. SVG or AI format). (2 marks)',
      },
      {
        id: 2,
        question: 'A student is producing a video for YouTube. State and justify the resolution, frame rate, and file format they should choose for their final export. (6 marks)',
        marks: 6,
        modelAnswer: 'Resolution: 1920×1080 (Full HD) — this is the standard HD resolution recommended by YouTube, providing good visual quality while keeping file sizes manageable. (2 marks)\n\nFrame rate: 30 FPS (frames per second) — this is the standard broadcast frame rate that gives smooth motion for general content and is widely supported by YouTube\'s platform. (2 marks)\n\nFile format: MP4 with H.264 codec — this is YouTube\'s recommended format as it provides good quality at relatively small file sizes, ensuring fast upload and smooth playback for viewers. (2 marks)',
      },
    ],
    examPractice: [
      {
        id: 1,
        question: 'A student is creating a promotional package for a local business that includes: a logo, a brochure, and a promotional video. For each deliverable, identify the most appropriate file format and justify your choice. (9 marks)',
        marks: 9,
        modelAnswer: 'Logo (3 marks): SVG (Scalable Vector Graphics) — the logo needs to be used at multiple sizes (on websites, business cards, signage) without any loss of quality. Vector format ensures crisp, clean edges at any scale. It can also be exported as PNG for web use when transparency is needed.\n\nBrochure (3 marks): PDF (Portable Document Format) — PDFs preserve the layout, fonts, and images regardless of what device or operating system is used to view it. It is the industry standard for distributing designed documents for print and digital distribution, ensuring the design appears exactly as intended.\n\nPromotional video (3 marks): MP4 with H.264 codec — this format provides a good balance between video quality and file size, is universally compatible with web platforms, social media, and most devices, and can be easily shared or uploaded to platforms like YouTube or Vimeo.',
      },
    ],
  },

  5: {
    id: 5,
    unit: 1,
    title: 'Project Management',
    shortDescription: 'Planning, managing, and evaluating digital media projects',
    lesson: [
      {
        type: 'intro',
        text: 'Project management ensures digital projects are completed on time, meet requirements, and achieve the intended outcome. Structured planning and evaluation are key skills in AIT.',
      },
      {
        type: 'section',
        title: 'The Design Brief',
        paragraphs: [
          'A design brief is a document that establishes the purpose, audience, constraints, and requirements of a project.',
          'Key elements of a design brief: purpose (what the product must do), target audience (who it is for), constraints (time, budget, technical limitations), and deliverables (what must be produced).',
          'Understanding the client\'s needs and asking clarifying questions before starting work prevents costly changes later.',
        ],
      },
      {
        type: 'section',
        title: 'Planning Tools',
        paragraphs: [
          'A Gantt chart is a horizontal bar chart that shows project tasks, their duration, and their sequence over a timeline. It helps visualise the project schedule.',
          'A task list breaks a project into discrete, actionable steps that can be assigned to team members and tracked.',
          'Milestones are significant checkpoints within a project (e.g. "design mockup approved by client").',
        ],
      },
      {
        type: 'section',
        title: 'The Production Process',
        paragraphs: [
          'Pre-production: Research, planning, design brief, storyboarding, wireframing, and gathering assets.',
          'Production: Creating the actual product — designing, coding, recording, editing.',
          'Post-production: Testing, reviewing against the design brief, gathering feedback, and refining.',
          'Delivery: Final export, handover to client, and documentation.',
        ],
      },
      {
        type: 'section',
        title: 'Evaluation',
        paragraphs: [
          'Evaluation assesses whether the finished product meets the original design brief criteria.',
          'A good evaluation is evidence-based: reference specific features of the product and explain how they meet or fall short of each criterion.',
          'Evaluation should include feedback from the target audience (e.g. survey results, user testing observations).',
          'Suggested improvements based on evaluation demonstrate critical thinking skills.',
        ],
      },
      {
        type: 'keyTerms',
        items: [
          { term: 'Design brief', definition: 'A document outlining the purpose, audience, and requirements of a project.' },
          { term: 'Gantt chart', definition: 'A bar chart showing project tasks, durations, and schedule over time.' },
          { term: 'Milestone', definition: 'A significant checkpoint in a project timeline.' },
          { term: 'Evaluation', definition: 'An assessment of whether a product meets the design brief criteria.' },
          { term: 'Storyboard', definition: 'A sequence of sketches showing the planned flow of a video or animation.' },
        ],
      },
    ],
    quiz: [
      {
        id: 1,
        question: 'What is the primary purpose of a design brief?',
        options: [
          'To create the final product',
          'To evaluate the finished product',
          'To establish the purpose, audience, and requirements of a project',
          'To track project milestones',
        ],
        correct: 2,
      },
      {
        id: 2,
        question: 'Which planning tool uses horizontal bars on a timeline to show task durations and sequences?',
        options: ['Flow chart', 'Gantt chart', 'Mind map', 'Storyboard'],
        correct: 1,
      },
      {
        id: 3,
        question: 'During which stage of production would a designer create wireframes?',
        options: ['Production', 'Post-production', 'Pre-production', 'Delivery'],
        correct: 2,
      },
    ],
    practiceQuestions: [
      {
        id: 1,
        question: 'Explain why evaluation should be evidence-based when assessing a digital media product. (3 marks)',
        marks: 3,
        modelAnswer: 'Evidence-based evaluation is necessary because it ensures judgements are grounded in observable, specific features of the product rather than subjective opinion. (1 mark) By referencing specific design decisions (e.g. "the heading uses 24pt Inter Bold which creates clear hierarchy as required by the brief"), the evaluation demonstrates a clear link between the product and the design criteria. (1 mark) Evidence-based evaluation also provides actionable information — if a criterion is not met, specific evidence points to what needs to be improved. (1 mark)',
      },
      {
        id: 2,
        question: 'A student is creating a promotional video for a local café. Identify four elements that should be included in the design brief. (4 marks)',
        marks: 4,
        modelAnswer: 'Any four of: Purpose (what the video needs to communicate/achieve, e.g. promote the café\'s new menu), target audience (who the video is aimed at, e.g. local residents aged 18–40), constraints (time, budget, technical requirements, e.g. must be under 90 seconds, must run on social media), deliverables (what must be produced, e.g. one 90-second MP4 video), visual style requirements (e.g. must match the café\'s existing branding), deadline (when the product must be completed). (1 mark each)',
      },
    ],
    examPractice: [
      {
        id: 1,
        question: 'A student has completed a digital media project. Write a detailed evaluation of a hypothetical digital poster, assessing it against two design criteria. Include evidence and suggest one improvement. (8 marks)',
        marks: 8,
        modelAnswer: 'Criterion 1 — The poster must be legible and easy to read for the target audience (2 marks): The main heading uses 36pt bold sans-serif type in white against a dark background, providing strong contrast that meets the legibility criterion. Body text is set at 12pt, which is the minimum recommended size for print, meaning this criterion is met.\n\nCriterion 2 — The poster must include the event details (date, time, venue) prominently (2 marks): The event date and time are displayed in a large call-out box in the centre of the poster, making them immediately visible. The venue address appears in smaller text at the bottom, which is less prominent and partially obscures the requirement to display it prominently.\n\nEvidence reference (2 marks): Feedback from three test viewers confirmed they could read the heading from 2 metres away, supporting the legibility assessment. Two of three viewers needed to look carefully to find the venue address.\n\nSuggested improvement (2 marks): The venue information should be repositioned to a more prominent location and increased in font size to at least 16pt so it is as easily visible as the date and time. A distinct colour or border could also be used to separate it from other elements.',
      },
    ],
  },

  6: {
    id: 6,
    unit: 2,
    title: 'Managing Data',
    shortDescription: 'Data storage, database design, and information management for business',
    lesson: [
      {
        type: 'intro',
        text: 'Businesses rely on well-structured data management systems. Understanding databases, spreadsheets, and data integrity principles is essential for Unit 2.',
      },
      {
        type: 'section',
        title: 'Data vs Information',
        paragraphs: [
          'Data refers to raw facts and figures without context (e.g. "27", "Perth", "Blue").',
          'Information is data that has been processed or organised to give it meaning (e.g. "27 customers in Perth prefer Blue packaging").',
          'The value of information depends on its accuracy, timeliness, relevance, and completeness.',
        ],
      },
      {
        type: 'section',
        title: 'Relational Databases',
        paragraphs: [
          'A relational database organises data into tables (also called relations). Each table has rows (records) and columns (fields/attributes).',
          'A primary key is a unique identifier for each record in a table (e.g. CustomerID).',
          'A foreign key is a field in one table that references the primary key of another table, creating a relationship between tables.',
          'Database Management Systems (DBMS) such as Microsoft Access, MySQL, and PostgreSQL are used to create and manage databases.',
        ],
      },
      {
        type: 'section',
        title: 'Database Objects',
        paragraphs: [
          'Tables store the raw data in rows and columns.',
          'Queries retrieve, filter, and sort data from one or more tables using criteria. SQL (Structured Query Language) is used to write queries.',
          'Forms provide a user-friendly interface for entering and editing data in tables.',
          'Reports present data in a formatted, printable layout, often summarising information from queries.',
        ],
      },
      {
        type: 'section',
        title: 'Data Integrity and Validation',
        paragraphs: [
          'Data integrity ensures data is accurate, consistent, and reliable.',
          'Validation rules check that data entered meets defined criteria: presence check (field must not be empty), range check (value within acceptable bounds), format check (e.g. date must be DD/MM/YYYY).',
          'Data redundancy occurs when the same data is stored in multiple places, leading to inconsistency. Normalisation reduces redundancy.',
        ],
      },
      {
        type: 'keyTerms',
        items: [
          { term: 'Primary key', definition: 'A unique identifier for each record in a database table.' },
          { term: 'Foreign key', definition: 'A field that references the primary key of another table.' },
          { term: 'Query', definition: 'A request to retrieve, filter, or sort data from a database.' },
          { term: 'Validation', definition: 'Checks that ensure data entered meets defined criteria.' },
          { term: 'Data redundancy', definition: 'The unnecessary duplication of data across a database.' },
        ],
      },
    ],
    quiz: [
      {
        id: 1,
        question: 'What is a primary key in a database?',
        options: [
          'The most important field in a table',
          'A unique identifier for each record in a table',
          'A field that links two tables together',
          'A query that retrieves all records',
        ],
        correct: 1,
      },
      {
        id: 2,
        question: 'A database table has a "CustomerID" field that references the CustomerID in the Customers table. This "CustomerID" in the Orders table is an example of a:',
        options: ['Primary key', 'Foreign key', 'Validation rule', 'Query parameter'],
        correct: 1,
      },
      {
        id: 3,
        question: 'Which database object provides a user-friendly interface for entering data?',
        options: ['Table', 'Query', 'Form', 'Report'],
        correct: 2,
      },
    ],
    practiceQuestions: [
      {
        id: 1,
        question: 'Explain the difference between data and information, using an example related to a business context. (4 marks)',
        marks: 4,
        modelAnswer: 'Data refers to raw, unprocessed facts or figures that on their own have no meaning. For example, the number "47" is data — it could refer to anything. (2 marks)\n\nInformation is data that has been processed or placed in context so it becomes meaningful. For example, "47 customer complaints were received in March 2025" is information — it has context (what was measured, when) that allows a business to draw conclusions and make decisions. (2 marks)',
      },
      {
        id: 2,
        question: 'A business stores customer orders in a database. Describe two validation rules that could be applied to an "Order Date" field to maintain data integrity. (4 marks)',
        marks: 4,
        modelAnswer: 'Presence check: A validation rule should ensure the Order Date field cannot be left empty. Every order record must have a date for the database to be useful and accurate. (2 marks)\n\nFormat check: The date must be entered in the correct format (e.g. DD/MM/YYYY). This ensures consistency in how dates are stored and prevents errors when sorting records by date or running date-based queries. (2 marks)',
      },
    ],
    examPractice: [
      {
        id: 1,
        question: 'A small business currently stores all customer and order information in a single spreadsheet. The owner is considering switching to a relational database. Discuss two advantages and one disadvantage of making this change. (6 marks)',
        marks: 6,
        modelAnswer: 'Advantage 1 — Reduced data redundancy (2 marks): In a spreadsheet, customer details (name, address, phone) are repeated in every row for every order. A relational database separates customers and orders into two linked tables, so customer data is stored once and linked by a CustomerID. This reduces storage requirements and the risk of inconsistent data.\n\nAdvantage 2 — Improved data querying (2 marks): A relational database allows complex queries across multiple tables, enabling the owner to quickly extract meaningful information such as "all orders over $500 placed this month" or "customers who have not placed an order in 6 months." Spreadsheets can do some of this with formulas but are less powerful and harder to maintain as data grows.\n\nDisadvantage — Cost and complexity of setup (2 marks): Setting up a relational database requires technical knowledge or hiring someone with database skills. The owner must design the table structure, relationships, and forms correctly before entering data. There is also a cost for DBMS software and time required for staff training, which may not be justified for a small business with limited data.',
      },
    ],
  },

  7: {
    id: 7,
    unit: 2,
    title: 'Networks',
    shortDescription: 'Network types, components, configuration, and communication protocols',
    lesson: [
      {
        type: 'intro',
        text: 'Networks enable computers and devices to communicate and share resources. Understanding network types, hardware, and protocols is essential for IT in a business context.',
      },
      {
        type: 'section',
        title: 'Network Types',
        paragraphs: [
          'LAN (Local Area Network): Connects devices within a small geographic area such as a home, office, or school. Typically owned and managed by one organisation.',
          'WAN (Wide Area Network): Connects devices across large geographic areas (cities, countries). The internet is the largest WAN.',
          'WLAN (Wireless Local Area Network): A LAN that uses wireless communication (Wi-Fi) instead of cables.',
          'MAN (Metropolitan Area Network): Covers a city or campus — larger than a LAN but smaller than a WAN.',
        ],
      },
      {
        type: 'section',
        title: 'Network Hardware',
        paragraphs: [
          'Router: Connects different networks together and directs (routes) data packets between them. Home routers connect a LAN to the internet (WAN).',
          'Switch: Connects devices within the same LAN and forwards data only to the intended device using MAC addresses.',
          'Hub: An older, less efficient device that broadcasts data to all devices on a network segment. Largely replaced by switches.',
          'NIC (Network Interface Card): Hardware in a device that enables it to connect to a network, either via cable (Ethernet) or wirelessly (Wi-Fi).',
          'Access Point (AP): A wireless device that extends a wired network, allowing wireless devices to connect.',
          'Modem: Modulates/demodulates signals between digital data and the format used by a communication line (e.g. phone line, cable).',
        ],
      },
      {
        type: 'section',
        title: 'Network Topologies',
        paragraphs: [
          'Bus topology: All devices connect to a single central cable. Simple but a failure in the cable affects all devices.',
          'Star topology: All devices connect to a central switch or hub. The most common topology. A device failure does not affect others, but the switch is a single point of failure.',
          'Ring topology: Devices connect in a closed loop. Data travels in one direction. A break in the ring can affect the entire network.',
        ],
      },
      {
        type: 'section',
        title: 'Protocols',
        paragraphs: [
          'A protocol is a set of rules that governs how devices communicate on a network.',
          'TCP/IP (Transmission Control Protocol/Internet Protocol): The fundamental suite of protocols that enables communication across the internet.',
          'HTTP/HTTPS: Protocols for transferring web pages. HTTPS encrypts the connection for security.',
          'FTP (File Transfer Protocol): Used for transferring files between computers on a network.',
          'IP Address: A unique address that identifies a device on a network (e.g. 192.168.1.1 for IPv4).',
        ],
      },
      {
        type: 'keyTerms',
        items: [
          { term: 'LAN', definition: 'Local Area Network — a network connecting devices within a small geographic area.' },
          { term: 'Router', definition: 'A device that connects different networks and routes data between them.' },
          { term: 'Switch', definition: 'A device that connects devices within a LAN and forwards data to the intended device.' },
          { term: 'Protocol', definition: 'A set of rules governing how devices communicate on a network.' },
          { term: 'IP address', definition: 'A unique numerical identifier assigned to each device on a network.' },
        ],
      },
    ],
    quiz: [
      {
        id: 1,
        question: 'Which network device connects different networks together and routes data between them?',
        options: ['Switch', 'Hub', 'Router', 'NIC'],
        correct: 2,
      },
      {
        id: 2,
        question: 'A school has all computers connected to a central switch. This is an example of which network topology?',
        options: ['Bus', 'Ring', 'Mesh', 'Star'],
        correct: 3,
      },
      {
        id: 3,
        question: 'Which protocol is used to securely transfer web pages over the internet?',
        options: ['FTP', 'HTTP', 'HTTPS', 'TCP'],
        correct: 2,
      },
    ],
    practiceQuestions: [
      {
        id: 1,
        question: 'Explain the difference between a router and a switch in a business network. (4 marks)',
        marks: 4,
        modelAnswer: 'A router connects different networks together and is responsible for directing (routing) data packets between networks. In a business context, the router connects the internal LAN to the external internet (WAN) and assigns IP addresses to devices via DHCP. (2 marks)\n\nA switch operates within a single LAN and connects multiple devices (computers, printers, servers). It uses MAC addresses to forward data only to the specific device it is intended for, making it more efficient than a hub. A switch does not connect to external networks. (2 marks)',
      },
      {
        id: 2,
        question: 'A small business is setting up a new office network. Compare a star topology with a bus topology and recommend which one the business should use. (6 marks)',
        marks: 6,
        modelAnswer: 'Star topology: All devices connect to a central switch. If one device fails, the rest of the network is unaffected. Troubleshooting is easier as you can isolate individual connections. Adding new devices is straightforward. The main weakness is that if the central switch fails, the entire network is affected. (2 marks)\n\nBus topology: All devices share a single cable (backbone). It is simple and inexpensive to set up with few devices. However, if the backbone cable fails, the entire network fails. Network performance decreases as more devices are added because all data travels on the same cable. (2 marks)\n\nRecommendation: The business should use a star topology. (1 mark) For a business environment, reliability and ease of management are critical. Star topology\'s fault tolerance (a single device failure does not bring down the network) and scalability (easy to add devices) make it far more suitable than a bus topology for a commercial setting. (1 mark)',
      },
    ],
    examPractice: [
      {
        id: 1,
        question: 'A business is moving to a new office building and needs to design a network for 20 employees. They require internet access, shared file storage, and a wireless network for mobile devices. Describe a suitable network design, identifying the hardware required and justifying your choices. (8 marks)',
        marks: 8,
        modelAnswer: 'Network design overview (2 marks): A star topology LAN would be used for the 20 wired desktop computers, connecting to a central managed switch. A router would connect the LAN to the internet via the building\'s ISP connection. Wireless access points would be installed throughout the office to provide Wi-Fi for laptops, tablets, and smartphones.\n\nHardware identification and justification (6 marks):\n\nRouter (1 mark): Required to connect the office LAN to the internet (WAN). It will also act as a DHCP server, assigning IP addresses to devices automatically.\n\nManaged switch with sufficient ports (e.g. 24-port) (1 mark): Connects all 20 wired computers and servers within the LAN. A managed switch allows network administrators to configure VLANs and monitor traffic, improving security and performance.\n\nWireless access points (2 marks): Multiple APs distributed throughout the office ensure full wireless coverage. Using a centralised wireless controller allows all APs to be managed from one interface and provides seamless roaming for mobile users. Wi-Fi 6 (802.11ax) standard recommended for speed and capacity.\n\nFile server or NAS device (2 marks): A dedicated file server or Network Attached Storage (NAS) device provides centralised file storage accessible to all employees. This allows files to be backed up automatically, shared across the organisation, and secured with access permissions.',
      },
    ],
  },

  8: {
    id: 8,
    unit: 2,
    title: 'Impacts of Technology',
    shortDescription: 'Business impacts, cybersecurity, legal obligations, and digital compliance',
    lesson: [
      {
        type: 'intro',
        text: 'In a business context, digital technologies create both opportunities and obligations. Understanding cybersecurity, privacy law, and workplace impacts is essential.',
      },
      {
        type: 'section',
        title: 'Cybersecurity Threats',
        paragraphs: [
          'Malware is malicious software designed to damage, disrupt, or gain unauthorised access to computer systems. Types include viruses, worms, trojans, ransomware, and spyware.',
          'Phishing attacks use deceptive emails or websites to trick users into revealing sensitive information (passwords, credit card numbers).',
          'Ransomware encrypts a victim\'s files and demands payment to restore access. It can be devastating for businesses.',
          'Social engineering exploits human psychology rather than technical vulnerabilities to gain access to systems.',
        ],
      },
      {
        type: 'section',
        title: 'Cybersecurity Measures',
        paragraphs: [
          'Firewalls monitor and control incoming and outgoing network traffic based on security rules.',
          'Antivirus software detects and removes malware.',
          'Encryption converts data into an unreadable format that can only be decoded with the correct key.',
          'Multi-factor authentication (MFA) requires two or more forms of verification before granting access (e.g. password + SMS code).',
          'Regular software updates patch security vulnerabilities before they can be exploited.',
          'Staff training reduces the risk of social engineering and phishing attacks.',
        ],
      },
      {
        type: 'section',
        title: 'Legal and Ethical Obligations',
        paragraphs: [
          'The Privacy Act 1988 and the Australian Privacy Principles (APPs) require organisations that handle personal information to collect, store, and use it responsibly.',
          'The Notifiable Data Breaches (NDB) scheme requires organisations to notify affected individuals and the Office of the Australian Information Commissioner (OAIC) when a data breach is likely to cause serious harm.',
          'Workplace surveillance laws regulate whether employers can monitor employee communications and computer use.',
          'Software licensing agreements specify the terms under which software may be used. Using software without a valid licence is illegal.',
        ],
      },
      {
        type: 'section',
        title: 'Ergonomics and Workplace Health',
        paragraphs: [
          'Ergonomics is the design of workplaces and tools to fit the capabilities and limitations of workers.',
          'Poor ergonomics in computer workstations can cause repetitive strain injuries (RSI), eye strain, and back problems.',
          'Safe Work Australia provides guidelines for safe workstation setup: monitor at eye level, chair supporting lower back, keyboard allowing elbows at 90°, regular breaks.',
        ],
      },
      {
        type: 'keyTerms',
        items: [
          { term: 'Malware', definition: 'Malicious software designed to damage or gain unauthorised access to systems.' },
          { term: 'Phishing', definition: 'A deceptive attempt to obtain sensitive information by impersonating a trusted entity.' },
          { term: 'Encryption', definition: 'Converting data into an unreadable format that requires a key to decode.' },
          { term: 'MFA', definition: 'Multi-factor authentication — requiring two or more forms of identity verification.' },
          { term: 'NDB scheme', definition: 'Notifiable Data Breaches scheme — requires organisations to report serious data breaches.' },
        ],
      },
    ],
    quiz: [
      {
        id: 1,
        question: 'Ransomware is best described as:',
        options: [
          'Software that displays unwanted advertisements',
          'Malware that encrypts files and demands payment for their release',
          'A type of phishing email',
          'A network firewall bypass technique',
        ],
        correct: 1,
      },
      {
        id: 2,
        question: 'Multi-factor authentication (MFA) improves security by:',
        options: [
          'Encrypting all data stored on a computer',
          'Requiring two or more forms of verification before granting access',
          'Blocking all incoming network traffic',
          'Automatically updating software',
        ],
        correct: 1,
      },
      {
        id: 3,
        question: 'Under Australia\'s Notifiable Data Breaches scheme, an organisation must notify:',
        options: [
          'Only the affected customers',
          'Only the Australian Federal Police',
          'Affected individuals and the OAIC when a breach may cause serious harm',
          'The OAIC only if the breach affects more than 1000 people',
        ],
        correct: 2,
      },
    ],
    practiceQuestions: [
      {
        id: 1,
        question: 'Explain what phishing is and describe two measures a business could take to protect its employees from phishing attacks. (6 marks)',
        marks: 6,
        modelAnswer: 'Phishing is a type of cyber attack where criminals send deceptive emails, text messages, or create fake websites that impersonate legitimate organisations (e.g. banks, government agencies, or well-known companies) to trick users into revealing sensitive information such as passwords, credit card numbers, or login credentials. (2 marks)\n\nMeasure 1 — Staff training (2 marks): Conduct regular cybersecurity awareness training that teaches employees how to identify suspicious emails (unexpected sender, urgent language, suspicious links, requests for personal information). Run simulated phishing exercises to test and reinforce this knowledge.\n\nMeasure 2 — Email filtering (2 marks): Implement an email security gateway that automatically scans incoming emails for known phishing indicators, suspicious links, and malicious attachments before they reach employees\' inboxes. This reduces the volume of phishing emails that employees are exposed to.',
      },
      {
        id: 2,
        question: 'A business stores customers\' personal information including names, addresses, and payment details. Outline two obligations the business has under the Australian Privacy Principles. (4 marks)',
        marks: 4,
        modelAnswer: 'The business must only collect personal information that is reasonably necessary for its functions, must tell customers why their data is being collected, and must not use or disclose that information for purposes other than those stated (APP 3 and APP 6). (2 marks)\n\nThe business must take reasonable steps to protect personal information from misuse, interference, loss, and unauthorised access or modification (APP 11). This includes implementing appropriate security measures such as encryption, access controls, and secure storage. (2 marks)',
      },
    ],
    examPractice: [
      {
        id: 1,
        question: 'A retail business has experienced a ransomware attack. All customer and financial data has been encrypted. Describe the immediate steps the business should take and discuss the legal obligations that arise from this incident. (10 marks)',
        marks: 10,
        modelAnswer: 'Immediate steps (5 marks):\n1. Isolate affected systems immediately — disconnect infected computers from the network to prevent the ransomware spreading to other devices and servers.\n2. Assess the scope — identify which systems and data have been affected to understand the extent of the breach.\n3. Do not pay the ransom — paying does not guarantee data recovery and may fund further criminal activity.\n4. Restore from backups — if current, clean backups exist, use these to restore encrypted data.\n5. Engage cybersecurity specialists — contact IT security professionals and, where necessary, law enforcement (Australian Cyber Security Centre — ACSC).\n\nLegal obligations (5 marks):\nUnder the Notifiable Data Breaches (NDB) scheme (Privacy Act 1988), the business must assess whether the breach is likely to result in serious harm to affected individuals. (1 mark) If serious harm is likely (e.g. customer payment details may have been accessed), the business must notify the Office of the Australian Information Commissioner (OAIC) and all affected customers as soon as practicable. (2 marks) The notification must include details of the breach, the type of information involved, and recommendations for steps individuals can take to protect themselves. (1 mark) Failure to notify when required can result in significant fines from the OAIC. (1 mark)',
      },
    ],
  },

  9: {
    id: 9,
    unit: 2,
    title: 'Application Skills',
    shortDescription: 'Business document creation, spreadsheets, and professional digital communications',
    lesson: [
      {
        type: 'intro',
        text: 'Business application skills involve using software to create professional documents, analyse data with spreadsheets, and communicate effectively in a digital workplace.',
      },
      {
        type: 'section',
        title: 'Word Processing for Business',
        paragraphs: [
          'Professional business documents include letters, reports, memos, and proposals. Consistent formatting is essential.',
          'Styles in word processors apply consistent formatting across headings and body text. Using styles also enables automatic tables of contents.',
          'Business letters follow a standard structure: sender\'s address, date, recipient\'s address, salutation, body, closing, signature.',
          'Mail merge allows a single document template to be personalised for multiple recipients using data from a spreadsheet or database.',
        ],
      },
      {
        type: 'section',
        title: 'Spreadsheets',
        paragraphs: [
          'Spreadsheets organise data in rows and columns of cells. Each cell has an address (e.g. B3).',
          'Formulas begin with "=" and perform calculations using cell references (e.g. =SUM(A1:A10), =AVERAGE(B2:B20)).',
          'Absolute cell references (e.g. $A$1) do not change when a formula is copied; relative references (e.g. A1) adjust automatically.',
          'Charts and graphs can be created from spreadsheet data to visualise trends and comparisons.',
          'Data validation in spreadsheets restricts what can be entered into a cell (e.g. only numbers between 1 and 100).',
        ],
      },
      {
        type: 'section',
        title: 'Presentation Software',
        paragraphs: [
          'Effective presentations follow the "6×6 rule": no more than 6 bullet points per slide, no more than 6 words per bullet.',
          'Consistent use of a slide master ensures uniform fonts, colours, and layouts across all slides.',
          'Presenter notes provide additional detail for the speaker without cluttering the slides.',
          'Avoid reading directly from slides — slides should support, not replace, the speaker\'s content.',
        ],
      },
      {
        type: 'section',
        title: 'Professional Email Communication',
        paragraphs: [
          'Professional emails should have a clear, specific subject line; a formal salutation; clear paragraphs; and an appropriate closing.',
          'Tone should be professional — avoid abbreviations, slang, and excessive use of emojis.',
          'Reply All should be used carefully — only when all recipients need to see the response.',
          'Attachments should be named descriptively (e.g. "Invoice_March2025_ABC_Company.pdf") and mentioned in the email body.',
        ],
      },
      {
        type: 'keyTerms',
        items: [
          { term: 'Mail merge', definition: 'A feature that personalises a document template for multiple recipients using a data source.' },
          { term: 'Absolute reference', definition: 'A cell reference that does not change when a formula is copied (e.g. $A$1).' },
          { term: 'Relative reference', definition: 'A cell reference that adjusts when a formula is copied (e.g. A1).' },
          { term: 'Slide master', definition: 'A template slide that controls the design of all slides in a presentation.' },
          { term: 'Data validation', definition: 'Rules that restrict what data can be entered into a spreadsheet cell.' },
        ],
      },
    ],
    quiz: [
      {
        id: 1,
        question: 'A student writes the formula =SUM($A$1:$A$10) and copies it to another cell. The cell reference $A$1:$A$10 will:',
        options: [
          'Adjust relative to the new cell position',
          'Remain unchanged (fixed)',
          'Return an error',
          'Convert to a relative reference automatically',
        ],
        correct: 1,
      },
      {
        id: 2,
        question: 'Which feature allows a business to send personalised letters to hundreds of customers from a single template?',
        options: ['Styles', 'Mail merge', 'Slide master', 'Data validation'],
        correct: 1,
      },
      {
        id: 3,
        question: 'The "6×6 rule" in presentations recommends:',
        options: [
          'Six slides per presentation, six minutes each',
          'Six fonts and six colours per slide',
          'No more than six bullet points per slide and six words per bullet',
          'Six images and six headings per slide',
        ],
        correct: 2,
      },
    ],
    practiceQuestions: [
      {
        id: 1,
        question: 'Explain the difference between an absolute and a relative cell reference in a spreadsheet, and give an example of when you would use an absolute reference. (4 marks)',
        marks: 4,
        modelAnswer: 'A relative cell reference (e.g. A1) adjusts automatically when a formula is copied to another cell, shifting the reference to maintain the same relative position. For example, if =A1*B1 in row 1 is copied to row 2, it becomes =A2*B2. (2 marks)\n\nAn absolute cell reference (e.g. $A$1) is fixed and does not change when copied. An example of when to use an absolute reference: if a tax rate is stored in cell A1 and you want to multiply every sales value in column B by that rate, you would write =$A$1*B1 and copy down — the A1 reference stays fixed while the B reference adjusts for each row. (2 marks)',
      },
      {
        id: 2,
        question: 'A business needs to send a personalised letter to 500 customers informing them of a new product. Describe how the business would use mail merge to produce these letters efficiently. (4 marks)',
        marks: 4,
        modelAnswer: 'Step 1: Create a data source (spreadsheet or database) containing each customer\'s details in separate columns — e.g. FirstName, LastName, Address, City. Each row represents one customer. (1 mark)\n\nStep 2: Create a letter template document in the word processor with merge fields inserted where personalised data should appear (e.g. "Dear <<FirstName>> <<LastName>>"). (1 mark)\n\nStep 3: Connect the template to the data source using the mail merge function and preview the merged letters. (1 mark)\n\nStep 4: Complete the merge to produce 500 individual letters, each containing the personalised details for one customer. The letters can be printed or saved as individual files. (1 mark)',
      },
    ],
    examPractice: [
      {
        id: 1,
        question: 'A small business owner uses a spreadsheet to track monthly sales. The spreadsheet records the product name, units sold, and unit price for each transaction. Describe how the owner could use spreadsheet features to analyse this data and present a summary to stakeholders. (8 marks)',
        marks: 8,
        modelAnswer: 'Formulas and calculations (2 marks): The owner could add a "Total Revenue" column using a formula (=Units_Sold * Unit_Price) for each row. A SUM formula at the bottom could calculate total monthly revenue. AVERAGE, MAX, and MIN functions could identify the average sale value, best-performing product, and slowest-selling item.\n\nSorting and filtering (2 marks): Sort the data by "Total Revenue" (descending) to identify the top-selling products at a glance. Apply filters to isolate specific products or date ranges for more focused analysis.\n\nPivot table or summary table (2 marks): Use a PivotTable to automatically summarise total units sold and total revenue by product category, allowing the owner to quickly see which categories are performing best without manually writing formulas.\n\nChart for stakeholder presentation (2 marks): Create a column chart or pie chart showing the revenue contribution of each product category. Charts communicate trends and comparisons more effectively than raw numbers for non-technical stakeholders. Include a clear title, labelled axes, and a legend. Export or embed the chart in a presentation for the stakeholder meeting.',
      },
    ],
  },

  10: {
    id: 10,
    unit: 2,
    title: 'Project Management',
    shortDescription: 'Systems development, requirements analysis, and digital solution design',
    lesson: [
      {
        type: 'intro',
        text: 'Project management in Unit 2 focuses on designing digital solutions for business clients. This involves systems analysis, structured development processes, and rigorous testing.',
      },
      {
        type: 'section',
        title: 'Systems Development Life Cycle (SDLC)',
        paragraphs: [
          'The SDLC is a structured process for planning, creating, testing, and deploying information systems.',
          'Phases: (1) Planning — define scope and feasibility; (2) Analysis — gather and document requirements; (3) Design — create technical specifications; (4) Implementation — build the solution; (5) Testing — verify correctness; (6) Deployment — release to users; (7) Maintenance — ongoing support and updates.',
          'Methodologies include Waterfall (sequential phases) and Agile (iterative sprints with continuous feedback).',
        ],
      },
      {
        type: 'section',
        title: 'Requirements Analysis',
        paragraphs: [
          'Functional requirements describe what a system must do (e.g. "The system must allow users to log in with a username and password").',
          'Non-functional requirements describe how the system should perform (e.g. "The system must load within 3 seconds", "The system must be available 99.9% of the time").',
          'Requirements are gathered through interviews with stakeholders, surveys, observation of existing systems, and analysis of current documentation.',
        ],
      },
      {
        type: 'section',
        title: 'Design Documentation',
        paragraphs: [
          'A system flowchart shows the flow of data through a system including processes, inputs, outputs, and storage.',
          'Data flow diagrams (DFDs) show how data moves between processes, data stores, and external entities.',
          'Entity-relationship diagrams (ERDs) show the relationships between data entities in a database design.',
          'Wireframes show the layout and structure of user interfaces before development begins.',
        ],
      },
      {
        type: 'section',
        title: 'Testing',
        paragraphs: [
          'Unit testing tests individual components in isolation.',
          'Integration testing checks that components work together correctly.',
          'User acceptance testing (UAT) has the client or end users verify the system meets requirements.',
          'A test plan documents: what will be tested, test data to be used, expected results, and actual results.',
          'Black box testing tests functionality without knowledge of the internal code; white box testing tests with knowledge of the code structure.',
        ],
      },
      {
        type: 'keyTerms',
        items: [
          { term: 'SDLC', definition: 'Systems Development Life Cycle — a structured process for building IT systems.' },
          { term: 'Functional requirement', definition: 'A specific capability or behaviour the system must provide.' },
          { term: 'Non-functional requirement', definition: 'A quality attribute such as performance, security, or reliability.' },
          { term: 'UAT', definition: 'User Acceptance Testing — testing by end users to verify the system meets requirements.' },
          { term: 'Wireframe', definition: 'A low-fidelity visual layout showing the structure of a user interface.' },
        ],
      },
    ],
    quiz: [
      {
        id: 1,
        question: '"The system must allow customers to reset their password via email" is an example of a:',
        options: [
          'Non-functional requirement',
          'Functional requirement',
          'Design constraint',
          'Test case',
        ],
        correct: 1,
      },
      {
        id: 2,
        question: 'User Acceptance Testing (UAT) is primarily carried out by:',
        options: [
          'The development team',
          'The project manager',
          'The end users or client',
          'An external auditor',
        ],
        correct: 2,
      },
      {
        id: 3,
        question: 'Which SDLC phase involves gathering and documenting what the system must do?',
        options: ['Planning', 'Analysis', 'Design', 'Testing'],
        correct: 1,
      },
    ],
    practiceQuestions: [
      {
        id: 1,
        question: 'Distinguish between functional and non-functional requirements. Provide one example of each for a business ordering system. (4 marks)',
        marks: 4,
        modelAnswer: 'Functional requirements define specific behaviours or functions the system must perform — what it must do. Example: "The ordering system must allow customers to add items to a shopping cart and proceed to checkout." (2 marks)\n\nNon-functional requirements define how the system should perform or the quality attributes it must have. Example: "The ordering system must process payment confirmation within 5 seconds" (performance) or "The system must be available 24/7 with 99.9% uptime" (reliability). (2 marks)',
      },
      {
        id: 2,
        question: 'A business is developing a new inventory management system. Describe how a test plan would be used during the testing phase of the SDLC. (4 marks)',
        marks: 4,
        modelAnswer: 'A test plan is a document that outlines the testing approach for the system. (1 mark) For the inventory system, it would list each function to be tested (e.g. adding stock, removing stock, generating low-stock alerts), along with specific test data to use for each test (e.g. adding -5 units to test validation). (1 mark) For each test, the expected result and the actual result are recorded. (1 mark) If the actual result differs from the expected result, the discrepancy is logged as a defect for the development team to fix before the system can be approved for deployment. The test plan provides a systematic record proving the system has been thoroughly verified. (1 mark)',
      },
    ],
    examPractice: [
      {
        id: 1,
        question: 'A small business wants to replace its paper-based booking system with a digital solution. You have been asked to manage this project. Describe how you would approach the Analysis and Design phases of the SDLC for this project. (10 marks)',
        marks: 10,
        modelAnswer: 'Analysis phase (5 marks):\nRequirements gathering: Interview the business owner and staff to understand how the current paper system works, what its limitations are, and what they need the digital system to do. Observe the current booking process in action to identify all steps involved.\n\nFunctional requirements examples: The system must allow staff to create, view, modify, and cancel bookings; the system must send automated email reminders to customers 24 hours before their appointment; the system must prevent double-booking the same time slot.\n\nNon-functional requirements examples: The system must be accessible from any device via a web browser; the system must load booking pages within 2 seconds; staff must be able to learn the system with less than 2 hours of training.\n\nDocumentation: Produce a requirements specification document that the business owner signs off on before design begins, to confirm shared understanding of scope.\n\nDesign phase (5 marks):\nUser interface design: Create wireframes for the main screens — the booking calendar view, the new booking form, and the customer details page. Present these to the business owner for feedback before development begins.\n\nDatabase design: Create an entity-relationship diagram (ERD) showing the main entities (Customer, Booking, Service, Staff) and their relationships. Define the table structure with appropriate fields and primary/foreign keys.\n\nSystem flowchart: Document the flow of data through the system — from customer making a booking, to data being stored, to reminder email being sent.\n\nTechnology selection: Recommend appropriate platforms, programming languages, and hosting solutions that meet budget and technical constraints.',
      },
    ],
  },
}

export const moduleList = Object.values(modules)

export const unit1Modules = moduleList.filter(m => m.unit === 1)
export const unit2Modules = moduleList.filter(m => m.unit === 2)
