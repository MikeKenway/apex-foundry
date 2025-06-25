# Apex Foundry

A fan-built Apex Legends companion app built with Next.js. 

## Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/docs/app)
- **Styling**: Tailwind CSS
- **Email**: Resend + React Email

## Getting Started

### Prerequisites

This project uses Bun as its package manager. 

```bash
curl -fsSL https://bun.sh/install | bash
```

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/apex-foundry.git
cd apex-foundry
```

2. Install dependencies:

```bash
bun install
```

3. Start the development server:

```bash
bun run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000)

## Development

### Available Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run start` - Start production server
- `bun run lint` - Run ESLint

## Project Structure

```
/app             → Next.js routes + pages
/components      → Reusable UI components
/data            → Static JSON data for legends
/types           → Shared TypeScript types
/public/images   → Assets for social cards + legend portraits
/utils           → Pure utility functions (e.g. getRandomLegend)
```

## Environment Variables

No `.env` file is required for basic usage.

To enable email support via Resend, add the following to your `.env` file:

```env
RESEND_API_KEY=your-resend-key
```

## Contributing

Pull requests are welcome! Please follow the existing code style and structure. If you're proposing a large feature or refactor, open an issue first.

### How to Contribute

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is fan-made and not affiliated with Respawn or EA. Use it for learning or inspiration.

MIT License.

## Credits

Built and maintained by Ekkolyth. Contributions and feedback welcome.

Find me on:

- [X (Twitter)](https://twitter.com/ekkolyth) - @ekkolyth
- [Bluesky](https://bsky.app/profile/ekkolyth.bsky.social) - @ekkolyth.bsky.social
