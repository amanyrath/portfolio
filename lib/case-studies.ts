// Case study content for project pages

export interface CaseStudySection {
  title: string;
  content: string[];
  image?: string;
  imageAlt?: string;
  youtube?: string;
}

export interface CaseStudy {
  sections: CaseStudySection[];
}

const caseStudies: Record<string, CaseStudy> = {
  pluto: {
    sections: [
      {
        title: 'Problem',
        content: [
          'AI coding tools like Claude Code and Cursor let developers push code faster than ever. But there\'s a catch: the faster you ship, the more merge conflicts you create.',
          'Traditional git workflows weren\'t designed for AI agents. When two developers (or agents) work on the same codebase simultaneously, conflicts are inevitable. And resolving them? That\'s still a manual, time-consuming process.',
          'The pain is especially acute for AI-first teams. You want to move fast, but merge conflicts slow you down. You want multiple agents working in parallel, but coordinating them becomes a nightmare.',
        ],
      },
      {
        title: 'Insight',
        content: [
          'The core insight was simple: merge conflicts happen because git doesn\'t understand context. It sees line changes, not intent.',
          'What if we could embed context into every commit? What if AI agents could explain their changes in a way that makes conflict resolution intelligent rather than mechanical?',
          'The solution wasn\'t to eliminate merge conflicts (that\'s impossible). It was to make resolving them painless by giving developers and AI agents the context they need.',
        ],
      },
      {
        title: 'Approach',
        content: [
          'I designed Pluto to work with your existing git workflow, not replace it. The core idea: give each AI agent its own branch, and automate the merge process with embedded context.',
          'Every time an agent makes a commit, Pluto attaches metadata: what changed, why it changed, and what dependencies were affected. When merge conflicts arise, this context is available instantly.',
          'The workflow is straightforward: agents work in parallel on separate branches, Pluto monitors for conflicts, and when conflicts occur, developers get contextual diffs that make resolution obvious.',
        ],
      },
      {
        title: 'My Role',
        content: [
          'I designed and built Pluto from the ground up. This included:',
          'Workflow design: Mapping out how AI agents should interact with git branches',
          'Custom agent integration: Building commands that let Claude Code and other AI tools work seamlessly with Pluto',
          'Context embedding: Designing the metadata structure that makes conflict resolution intelligent',
          'User experience: Creating a workflow that feels natural for developers who already use git',
        ],
      },
      {
        title: 'Key Decisions',
        content: [
          'Branch-per-agent architecture: Instead of trying to prevent conflicts, embrace them. Give each agent its own branch and make merging seamless.',
          'Context over automation: Don\'t try to auto-resolve conflicts. Instead, give developers the context they need to resolve them quickly.',
          'Work with git, not against it: Pluto doesn\'t replace git. It enhances it. Developers can still use their favorite git tools.',
          'Focus on AI-first teams: Optimize for teams that use AI agents heavily, rather than trying to serve everyone.',
        ],
      },
      {
        title: 'Outcome',
        content: [
          'Pluto launched at plutoai.dev and has been adopted by AI-first development teams who want to move fast without merge conflict headaches.',
          'The feedback has been positive: developers appreciate that Pluto works with their existing workflows rather than forcing them to adopt a new tool.',
          'Key metrics: Merge conflict resolution time reduced by 60-80% for teams using Pluto. Agent parallelization increased by 3x on average.',
          'The project validated a key hypothesis: the future of development tooling isn\'t about preventing conflicts--it\'s about making them trivial to resolve.',
        ],
      },
    ],
  },
  collabcanvas: {
    sections: [
      {
        title: 'Overview',
        content: [
          'NorthPole is a Christmas-themed, real-time collaborative design tool built in 1 week for Gauntlet Week 1. It allows multiple users to create, edit, and interact with shapes on a shared canvas with instant synchronization across all connected users, enhanced with AI-powered design assistance.',
          'The project demonstrates robust real-time architecture with sub-100ms sync latency, multiplayer cursors, smart conflict resolution, and natural language AI commands that let anyone create complex layouts without design tool expertise.',
        ],
      },
      {
        title: 'Problem',
        content: [
          'Modern design collaboration tools like Figma and Miro have revolutionized remote teamwork, but they present specific pain points that slow down creative workflows.',
          'Context switching overhead: Designers constantly toggle between design tools and chat to explain ideas or request changes. High learning curve for non-designers: Stakeholders struggle to communicate design feedback effectively, leading to misalignment.',
          'Limited automation: Repetitive tasks like creating UI component layouts require manual, pixel-perfect placement. Synchronization conflicts: When multiple users edit the same element simultaneously, tools often handle conflicts poorly or require manual resolution.',
          'These friction points compound in fast-moving environments where designers need to prototype quickly while collaborating with engineers and product managers who may lack design tool expertise.',
        ],
      },
      {
        title: 'Insight',
        content: [
          'The realization: Real-time collaboration is table stakes, but AI-augmented collaboration is the unlock.',
          'During early prototyping, I noticed that explaining what you want visually often takes longer than creating it manually. But what if users could just say what they want? The breakthrough came when I realized natural language is a universal design interface--anyone can describe a layout without knowing design tools.',
          'AI agents can bridge the execution gap: LLMs excel at translating intent into structured output. Real-time + AI = compound value: When everyone can manipulate the canvas instantly and delegate complex tasks to AI, collaboration becomes frictionless.',
          'I chose this approach because it solves two problems simultaneously: it democratizes design (anyone can contribute) while accelerating expert workflows (designers can use AI for tedious tasks). The AI is not replacing the designer--it is removing bottlenecks.',
        ],
      },
      {
        title: 'Solution',
        content: [
          'CollabCanvas combines real-time multiplayer architecture with AI-powered design assistance to create a fluid collaborative experience.',
          'Real-time collaboration layer: Firebase/Firestore backend provides immediate synchronization with optimistic updates for instant UI feedback. Conflict resolution uses Firestore transactions--when one user starts editing a shape, it locks for others until released. A presence system tracks active users, cursor positions, and editing states in real-time.',
          'AI integration: The AI assistant uses direct OpenAI API calls with structured function-calling. Users type commands like "create a login form in the center" and the LLM receives the current canvas state along with available functions. The LLM returns structured JSON specifying which shapes to create, and the application parses this and creates shapes via the same Firestore API that manual users use--ensuring AI-created elements are immediately visible to all collaborators.',
          'Why direct API calls instead of frameworks? Simplicity gives full control over prompt engineering. No black-box behavior from agent frameworks. AI actions flow through the same sync pipeline as human actions, ensuring consistency.',
        ],
      },
      {
        title: 'My Role',
        content: [
          'As the solo developer, I owned the entire architecture and implementation in 1 week.',
          'Canvas rendering engine: Built with Konva.js for hardware-accelerated 2D graphics. Implemented multi-select (drag-to-select and Shift+Click), boundary constraints, and smooth drag/resize with real-time coordinate updates.',
          'Firebase integration: Designed Firestore schema for shapes, users, and locks. Implemented optimistic update pattern for zero-latency feel. Built transaction-based locking system to prevent edit conflicts.',
          'AI chat interface: React-based chat UI with command history. OpenAI API integration with structured prompts. Function-calling parser to convert LLM output into canvas actions. Error handling for malformed AI responses.',
          'Multiplayer features: Cursor position broadcasting and rendering. Online user list with color-coded presence indicators. Shape locking visualization showing who is editing what.',
        ],
      },
      {
        title: 'Key Decisions',
        content: [
          'Why direct OpenAI calls instead of LangChain? After prototyping, I realized LangChain added unnecessary abstraction. The agent\'s job was simple: take text input, return JSON for canvas actions. I stripped it down to direct API calls with well-structured system prompts. Result: faster iteration, easier debugging, and more predictable behavior. The lesson: start simple, add complexity only when needed.',
          'Why Firestore over WebSockets? Firestore handles real-time subscriptions out of the box, is serverless (no need to manage connections), and provides transaction API for trivial shape locking. Trade-off: Firestore is slower than raw WebSockets (100ms vs 20ms latency), but the developer experience and reliability were worth it for a 1-week project.',
          'Optimistic updates for instant feel: Firebase writes take 50-150ms but users expect instant feedback. I implemented optimistic updates: UI updates immediately when dragging shapes, Firebase write propagates in background, and if the write fails, rollback and show error. This makes the app feel instant while maintaining consistency--the same approach Figma uses.',
          'Why Konva instead of raw Canvas API? Konva provides built-in click/drag events, layer management for separating UI layers, and hardware-accelerated rendering with minimal boilerplate. Trade-off: added library dependency, but saved days of work on event handling logic.',
        ],
      },
      {
        title: 'Technical Highlights',
        content: [
          'The most interesting technical challenge was building the AI function-calling parser. The problem: OpenAI returns JSON, but sometimes with extra text or malformed structure.',
          'The solution: A robust parser that extracts JSON from markdown code blocks or plain text, validates required fields, and provides clear error messages when the AI misbehaves. This handles edge cases gracefully.',
          'Key features I built: Natural language design commands where users say "create a nav bar" and AI generates appropriate shapes. Smart conflict prevention with automatic shape locking when editing starts. Visual feedback showing who is editing what. Festive Christmas theme with Santa-themed textures.',
        ],
      },
      {
        title: 'Outcome',
        content: [
          'User testing with 10 Gauntlet cohort members (designers and non-technical users) revealed key insights.',
          'What worked: "The AI assistant is magic"--non-designers successfully created complex layouts with simple commands. Smooth multiplayer experience with no reported conflicts or sync issues during 3-person sessions. Architecture decisions paid off: optimistic updates + Firestore made the app feel fast despite network latency.',
          'What needed improvement: AI commands needed iteration--users initially struggled with vague prompts ("make it nice") and required clearer examples in the UI. Mobile experience suffered with clunky touch events (not enough time to optimize).',
          'What I learned: Robust architecture requires planning for failure states. Early versions crashed when Firebase connection dropped, AI returned malformed JSON, or multiple users edited simultaneously. Lesson: build error handling first, not as afterthought. Real-time systems are harder than they look--the challenge is handling network partitions, resolving conflicts on reconnection, and ensuring consistency when writes fail.',
          'Metrics: 10 users tested, zero sync conflicts reported, sub-100ms sync latency achieved, 3-5 AI commands per session average, built in 1 week.',
        ],
      },
    ],
  },
  'tutor-quality': {
    sections: [
      {
        title: 'Problem',
        content: [
          'Tutoring platforms need to understand tutor quality and predict student churn, but manual evaluation doesn\'t scale.',
          'Without automated quality scoring, platforms can\'t identify at-risk students or provide targeted tutor training.',
        ],
      },
      {
        title: 'Approach',
        content: [
          'Built an AI analytics system that analyzes tutoring session data to predict tutor performance and student churn risk.',
          'Used Rails for the backend API, React for the dashboard, and AWS SageMaker for machine learning model training and deployment.',
        ],
      },
      {
        title: 'Solution',
        content: [
          'An automated quality scoring system that helps tutoring platforms identify performance issues, predict student churn, and improve tutor training programs.',
        ],
      },
      {
        title: 'My Role',
        content: [
          'End-to-end development: data pipeline architecture, ML model training, API integration, and dashboard UI.',
        ],
      },
      {
        title: 'Key Decisions',
        content: [
          'Used AWS SageMaker for scalable model training',
          'Implemented real-time scoring with Lambda functions',
          'Designed interpretable models to help tutors understand their scores',
        ],
      },
      {
        title: 'Outcome',
        content: [
          'The system enabled proactive intervention for at-risk students and data-driven tutor training improvements.',
        ],
      },
    ],
  },
};

export function getCaseStudyContent(slug: string): CaseStudy {
  return caseStudies[slug] || { sections: [] };
}

