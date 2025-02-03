import { useState } from "react";
import Markdown from "marked-react";

const defaultMarkdown = `# Heading 1\n\n## Subheading\n\n[Link](https://example.com)\n\nInline code: \`console.log('Hello, world!')\`\n\n\`\`\`javascript\nfunction greet() {\n  return "Hello, world!";\n}\n\`\`\`\n\n- List item\n\n> Blockquote\n\n**Bold text**\n\n![Image](https://via.placeholder.com/150)\n`;

export default function MarkdownPreviewer() {
  const [markdown, setMarkdown] = useState(defaultMarkdown);

  return (
    <div className="flex flex-col items-center gap-10 p-10 align-middle bg-bg-dark">
      <div 
        className="w-3/4 max-w-3xl h-80 border flex bg-gray-green rounded-2xl"
        >
        <textarea
          id="editor"
          className="w-full h-full resize-none p-5 text-black scrollbar-thin"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        />
      </div>
      <div
        id="preview"
        className="w-200 h-auto p-2 border rounded overflow-auto bg-swampy-green text-text-green"
      >
        <Markdown
          breaks={true}
          gfm={true}
        >
            {markdown}
        </Markdown>
      </div>
    </div>
  );
}
