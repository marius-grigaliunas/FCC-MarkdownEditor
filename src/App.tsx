import { useState } from "react";
import Markdown from "marked-react";

const defaultMarkdown = `# Heading 1\n\n## Subheading\n\n[Link](https://example.com)\n\nInline code: \`console.log('Hello, world!')\`\n\n\`\`\`javascript\nfunction greet() {\n  return "Hello, world!";\n}\n\`\`\`\n\n- List item\n\n> Blockquote\n\n**Bold text**\n\n![Image](https://via.placeholder.com/150)\n`;

export default function MarkdownPreviewer() {
  const [markdown, setMarkdown] = useState(defaultMarkdown);

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4">
      <textarea
        id="editor"
        className="w-full md:w-1/2 h-80 p-2 border rounded"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      />
      <div
        id="preview"
        className="w-full md:w-1/2 h-80 p-2 border rounded overflow-auto bg-white"
      />
      <div>
        <Markdown>
            {markdown}
        </Markdown>
      </div>
    </div>
  );
}
