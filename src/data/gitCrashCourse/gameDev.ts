export const gameDevCompleteSeries = {
  pageName: "Game Development – Complete Beginner Programmer Series",
  cards: [
    /* =========================
       INTRO & FOUNDATIONS
    ========================== */

    {
      title: "Game Development",
      kind: "default",
      desc: "A complete introduction to game development for beginner programmers",
      icon: "./assets/controller.png",
      style: "bg-candy-blue-sky",
    },

    {
      title: "What Is Game Development?",
      kind: "reaction",
      desc: `
Game development is the process of building **interactive real-time systems**.

From a programmer’s perspective:
- Continuous execution (loop)
- Constant state mutation
- Input-driven logic
- Visual and audio output

Games are software, but they behave very differently.
      `,
      icon: "./assets/controller.png",
      style: "bg-[#04BFA4]",
    },

    {
      title: "Games vs Traditional Software",
      kind: "reaction",
      desc: `
Traditional software:
- Event-based
- User waits for response
- Often linear

Games:
- Always running
- Time-dependent
- Frame-based
- Reactive every millisecond
      `,
      icon: "./assets/controller.png",
      style: "bg-[#FFE87E]",
    },

    {
      title: "The Game Loop",
      kind: "reaction",
      desc: `
Every game is built around a loop:

while (running) {
  handleInput()
  updateGameState()
  renderFrame()
}

Master this concept and everything else becomes easier.
      `,
      icon: "./assets/controller.png",
      style: "bg-[#C5C6FF]",
    },

    {
      title: "Game State",
      kind: "reaction",
      desc: `
State represents the current snapshot of the game.

Examples:
- Player position
- Health
- Enemies alive
- Current level

Gameplay is simply state changing over time.
      `,
      icon: "./assets/controller.png",
      style: "bg-[#7B9D7C]",
    },

    {
      title: "Core Building Blocks of Games",
      kind: "reaction",
      desc: `
Most games include:
- Player entities
- World or map
- Rules
- Win / lose conditions
- Feedback (visual & sound)

These are logical systems before they are art.
      `,
      icon: "./assets/controller.png",
      style: "bg-[#FFA9E8]",
    },

    /* =========================
       HISTORY & INDUSTRY
    ========================== */

    {
      title: "Short History of Games",
      kind: "reaction",
      desc: `
- 1970s: Arcade & Pong
- 1980s: Home consoles
- 1990s: 3D revolution
- 2000s: PC & online games
- 2010s: Indie explosion
- Today: AAA, VR, AI, Web games
      `,
      icon: "./assets/controller.png",
      style: "bg-[#F7BD1D]",
    },

    {
      title: "Game Development Scales",
      kind: "reaction",
      desc: `
- Solo developer
- Indie teams
- AAA studios

Each scale requires different skills and expectations.
      `,
      icon: "./assets/controller.png",
      style: "bg-[#04BFA4]",
    },

    {
      title: "Solo Developers",
      kind: "reaction",
      desc: `
Solo devs handle everything:
- Code
- Design
- Art
- Testing

Clean architecture and scope control are critical.
      `,
      icon: "./assets/controller.png",
      style: "bg-[#FFE87E]",
    },

    {
      title: "Indie Teams",
      kind: "reaction",
      desc: `
Small teams (2–10 people):
- Strong creative vision
- Fast iteration
- Limited resources

Gameplay quality beats visual fidelity.
      `,
      icon: "./assets/controller.png",
      style: "bg-[#C5C6FF]",
    },

    {
      title: "AAA Studios",
      kind: "reaction",
      desc: `
Large studios with specialization:
- Gameplay programmers
- Engine programmers
- AI, physics, networking teams

Highly structured development.
      `,
      icon: "./assets/controller.png",
      style: "bg-[#7B9D7C]",
    },

    /* =========================
       ENGINE VS FRAMEWORK
    ========================== */

    {
      title: "Game Engine vs Framework",
      kind: "reaction",
      desc: `
Game Engine:
- Full editor
- Visual tools
- High abstraction

Game Framework:
- Code-first
- Minimal tooling
- Full architectural control

Frameworks are ideal for learning fundamentals.
      `,
      icon: "./assets/controller.png",
      style: "bg-[#FFA9E8]",
    },

    {
      title: "Why Beginner Programmers Should Use Frameworks",
      kind: "reaction",
      desc: `
Frameworks force you to understand:
- Loops
- State
- Architecture
- Data flow

You learn how games actually work.
      `,
      icon: "./assets/controller.png",
      style: "bg-[#07AF57]",
    },

    /* =========================
       LOVE2D (DEEP DIVE)
    ========================== */

    {
      title: "LÖVE (LOVE2D)",
      kind: "reaction",
      desc: `
LÖVE is a lightweight 2D game framework using Lua.

Characteristics:
- No editor
- Minimal abstraction
- High performance
- Cross-platform

It is programmer-focused by design.
      `,
      icon: "./assets/controller.png",
      style: "bg-[#04BFA4]",
    },

    {
      title: "Why LOVE2D Is Ideal for Beginners",
      kind: "reaction",
      desc: `
LOVE2D teaches:
- Real game loops
- Manual state handling
- Clean separation of logic and rendering

No hidden magic.
      `,
      icon: "./assets/controller.png",
      style: "bg-[#FFE87E]",
    },

    {
      title: "LOVE2D Core Callbacks",
      kind: "reaction",
      desc: `
Core lifecycle functions:
- love.load()
- love.update(dt)
- love.draw()
- love.keypressed(key)

These map directly to game theory concepts.
      `,
      icon: "./assets/controller.png",
      style: "bg-[#C5C6FF]",
    },

    {
      title: "LOVE2D Game Loop Explained",
      kind: "reaction",
      desc: `
LOVE2D runs an internal loop and calls your code.

You control:
- What updates each frame
- How state changes
- What gets drawn

Time-based logic is explicit via dt.
      `,
      icon: "./assets/controller.png",
      style: "bg-[#7B9D7C]",
    },

    {
      title: "State Management in LOVE2D",
      kind: "reaction",
      desc: `
You store state manually:
- Tables for entities
- Numbers for stats
- Flags for modes

This builds strong architectural intuition.
      `,
      icon: "./assets/controller.png",
      style: "bg-[#FFA9E8]",
    },

    {
      title: "Common LOVE2D Architecture Patterns",
      kind: "reaction",
      desc: `
Typical patterns:
- Scene / State machines
- Entity lists
- Component-like tables
- Update / draw separation

These transfer directly to Godot & Unity.
      `,
      icon: "./assets/controller.png",
      style: "bg-[#07AF57]",
    },

    /* =========================
       OTHER FRAMEWORKS
    ========================== */

    {
      title: "pygame",
      kind: "reaction",
      desc: `
Python-based game library.

Pros:
- Very explicit logic
- Familiar syntax
- Educational

Cons:
- Manual systems
- Lower performance
      `,
      icon: "./assets/controller.png",
      style: "bg-[#04BFA4]",
    },

    {
      title: "TIC-80",
      kind: "reaction",
      desc: `
Fantasy console with constraints:
- Fixed resolution
- Limited colors
- Lua scripting

Constraints improve design thinking.
      `,
      icon: "./assets/controller.png",
      style: "bg-[#F7BD1D]",
    },

    {
      title: "PICO-8",
      kind: "reaction",
      desc: `
Highly opinionated fantasy console.

Best for:
- Tiny games
- Game jams
- Gameplay experimentation
      `,
      icon: "./assets/controller.png",
      style: "bg-[#FFE87E]",
    },

    {
      title: "Kaplay (JavaScript)",
      kind: "reaction",
      desc: `
JavaScript game framework.

Good for:
- Web developers
- Rapid prototyping
- Component-style design
      `,
      icon: "./assets/controller.png",
      style: "bg-[#C5C6FF]",
    },

    {
      title: "Framework Comparison",
      kind: "reaction",
      desc: `
Best by goal:
- Fundamentals → LOVE2D / pygame
- Creativity → PICO-8 / TIC-80
- Web → Kaplay
      `,
      icon: "./assets/controller.png",
      style: "bg-[#7B9D7C]",
    },

    /* =========================
       COMMON TRAPS & ROADMAP
    ========================== */

    {
      title: "Common Beginner Traps",
      kind: "reaction",
      desc: `
- Building engines instead of games
- Overengineering
- Premature optimization
- Ignoring game feel

Finish small games first.
      `,
      icon: "./assets/controller.png",
      style: "bg-[#FF6B6B]",
    },

    {
      title: "Suggested Learning Path",
      kind: "reaction",
      desc: `
1. Learn game loop
2. Manage state
3. Handle input
4. Build 2–3 small games
5. Move to Godot or Unity
      `,
      icon: "./assets/controller.png",
      style: "bg-[#04BFA4]",
    },

    {
      title: "Final Advice",
      kind: "reaction",
      desc: `
Games are systems, not graphics.

If you can:
- Control time
- Control state
- Control rules

You can build games.
      `,
      icon: "./assets/controller.png",
      style: "bg-[#7B9D7C]",
      animate: true,
    },
  ],
};
