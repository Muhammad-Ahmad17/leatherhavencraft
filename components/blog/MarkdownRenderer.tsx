import React from "react";

interface MarkdownRendererProps {
  content: string;
}

function renderInline(text: string): React.ReactNode {
  // Simple parser for inline markdown: **bold**, *italic*, `code`, [link](url)
  const parts: React.ReactNode[] = [];
  let remaining = text;
  let keyIdx = 0;

  while (remaining.length > 0) {
    // Links: [text](url)
    const linkMatch = remaining.match(/^(.*?)\[(.*?)\]\((.*?)\)(.*)$/);
    // Bold: **text**
    const boldMatch = remaining.match(/^(.*?)\*\*(.*?)\*\*(.*)$/);
    // Italic: *text*
    const italicMatch = remaining.match(/^(.*?)\*(.*?)\*(.*)$/);
    // Code: `text`
    const codeMatch = remaining.match(/^(.*?)(`)(.*?)(`)(.*)$/);

    let matchType = null;
    let earliestIndex = remaining.length;
    let activeMatch: RegExpMatchArray | null = null;

    if (linkMatch && remaining.indexOf("[" + linkMatch[2] + "]") < earliestIndex) {
      earliestIndex = remaining.indexOf("[" + linkMatch[2] + "]");
      matchType = "link";
      activeMatch = linkMatch;
    }
    if (boldMatch && remaining.indexOf("**" + boldMatch[2] + "**") < earliestIndex) {
      earliestIndex = remaining.indexOf("**" + boldMatch[2] + "**");
      matchType = "bold";
      activeMatch = boldMatch;
    }
    if (codeMatch && remaining.indexOf("`" + codeMatch[3] + "`") < earliestIndex) {
      earliestIndex = remaining.indexOf("`" + codeMatch[3] + "`");
      matchType = "code";
      activeMatch = codeMatch;
    }
    if (italicMatch && !boldMatch && remaining.indexOf("*" + italicMatch[2] + "*") < earliestIndex) {
      earliestIndex = remaining.indexOf("*" + italicMatch[2] + "*");
      matchType = "italic";
      activeMatch = italicMatch;
    }

    if (!matchType || !activeMatch) {
      parts.push(remaining);
      break;
    }

    // Add prefix
    const prefix = remaining.slice(0, earliestIndex);
    if (prefix) parts.push(prefix);

    if (matchType === "link") {
      parts.push(
        <a
          key={keyIdx++}
          href={activeMatch[3]}
          target={activeMatch[3].startsWith("http") ? "_blank" : undefined}
          rel={activeMatch[3].startsWith("http") ? "noopener noreferrer" : undefined}
          className="text-[#8a4d2b] font-medium underline underline-offset-4 hover:text-[#221b16]"
        >
          {activeMatch[2]}
        </a>
      );
      remaining = remaining.slice(earliestIndex + activeMatch[2].length + activeMatch[3].length + 4);
    } else if (matchType === "bold") {
      parts.push(<strong key={keyIdx++} className="font-bold text-[#221b16]">{activeMatch[2]}</strong>);
      remaining = remaining.slice(earliestIndex + activeMatch[2].length + 4);
    } else if (matchType === "italic") {
      parts.push(<em key={keyIdx++} className="italic">{activeMatch[2]}</em>);
      remaining = remaining.slice(earliestIndex + activeMatch[2].length + 2);
    } else if (matchType === "code") {
      parts.push(
        <code key={keyIdx++} className="rounded bg-[#ede7de] px-1.5 py-0.5 font-mono text-xs text-[#8a4d2b]">
          {activeMatch[3]}
        </code>
      );
      remaining = remaining.slice(earliestIndex + activeMatch[3].length + 2);
    }
  }

  return <>{parts}</>;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  if (!content) return null;

  // Split into distinct markdown blocks
  const blocks = content.split(/\n\n+/);

  return (
    <div className="space-y-6">
      {blocks.map((block, idx) => {
        const trimmed = block.trim();
        if (!trimmed) return null;

        // Headings: #, ##, ###
        if (trimmed.startsWith("### ")) {
          const headingText = trimmed.replace(/^###\s+/, "");
          const id = headingText.toLowerCase().replace(/[^a-z0-9]+/g, "-");
          return (
            <h3 key={idx} id={id} className="scroll-mt-24 text-xl sm:text-2xl font-bold tracking-tight text-[#221b16] pt-2">
              {headingText}
            </h3>
          );
        }

        if (trimmed.startsWith("## ")) {
          const headingText = trimmed.replace(/^##\s+/, "");
          const id = headingText.toLowerCase().replace(/[^a-z0-9]+/g, "-");
          return (
            <h2 key={idx} id={id} className="scroll-mt-24 text-2xl sm:text-3xl font-bold tracking-tight text-[#221b16] border-b border-[#ded5c7]/60 pb-3 pt-4">
              {headingText}
            </h2>
          );
        }

        if (trimmed.startsWith("# ")) {
          const headingText = trimmed.replace(/^#\s+/, "");
          return (
            <h1 key={idx} className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#221b16] pt-4">
              {headingText}
            </h1>
          );
        }

        // Blockquotes / Callouts: > text
        if (trimmed.startsWith("> ")) {
          const lines = trimmed.split("\n").map((l) => l.replace(/^>\s*/, ""));
          return (
            <blockquote key={idx} className="rounded-xl border border-[#8a4d2b]/30 bg-[#f0ebe3] p-5 sm:p-6 text-sm text-[#221b16] leading-relaxed my-4 shadow-2xs">
              {lines.map((line, lIdx) => (
                <p key={lIdx} className={lIdx > 0 ? "mt-2" : ""}>
                  {renderInline(line)}
                </p>
              ))}
            </blockquote>
          );
        }

        // Tables: | col1 | col2 |
        if (trimmed.startsWith("|") && trimmed.includes("\n|")) {
          const rows = trimmed
            .split("\n")
            .map((r) => r.trim())
            .filter((r) => r.startsWith("|") && !r.includes("---"));
          const headerRow = rows[0];
          const dataRows = rows.slice(1);

          if (headerRow) {
            const headers = headerRow.split("|").map((c) => c.trim()).filter(Boolean);
            return (
              <div key={idx} className="overflow-x-auto rounded-xl border border-[#ded5c7] bg-white my-6 shadow-2xs">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-[#ede7de] text-[#221b16] uppercase tracking-wider text-[11px] font-bold border-b border-[#ded5c7]">
                    <tr>
                      {headers.map((h, hIdx) => (
                        <th key={hIdx} className="px-4 py-3 sm:px-6">
                          {renderInline(h)}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#ded5c7]">
                    {dataRows.map((rowStr, rIdx) => {
                      const cells = rowStr.split("|").map((c) => c.trim()).filter(Boolean);
                      return (
                        <tr key={rIdx} className={rIdx % 2 === 0 ? "bg-white" : "bg-[#fcfaf7]"}>
                          {cells.map((cell, cIdx) => (
                            <td key={cIdx} className="px-4 py-3 sm:px-6 font-medium text-[#443831]">
                              {renderInline(cell)}
                            </td>
                          ))}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            );
          }
        }

        // Unordered Lists: - item or * item
        if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
          const items = trimmed.split("\n").filter((l) => l.trim().startsWith("- ") || l.trim().startsWith("* "));
          return (
            <ul key={idx} className="rounded-xl border border-[#ded5c7] bg-white p-5 sm:p-6 space-y-3 my-4">
              {items.map((item, iIdx) => (
                <li key={iIdx} className="flex items-start gap-3 text-xs sm:text-sm text-[#443831]">
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#8a4d2b]/15 text-[#8a4d2b] font-bold text-[10px]">
                    ✓
                  </span>
                  <span>{renderInline(item.replace(/^[-*]\s+/, ""))}</span>
                </li>
              ))}
            </ul>
          );
        }

        // Ordered Lists: 1. item
        if (/^\d+\.\s/.test(trimmed)) {
          const items = trimmed.split("\n").filter((l) => /^\d+\.\s/.test(l.trim()));
          return (
            <ol key={idx} className="rounded-xl border border-[#ded5c7] bg-white p-5 sm:p-6 space-y-3 my-4">
              {items.map((item, iIdx) => (
                <li key={iIdx} className="flex items-start gap-3 text-xs sm:text-sm text-[#443831]">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ede7de] text-[#8a4d2b] font-bold text-xs">
                    {iIdx + 1}
                  </span>
                  <span>{renderInline(item.replace(/^\d+\.\s+/, ""))}</span>
                </li>
              ))}
            </ol>
          );
        }

        // Standard Paragraphs
        return (
          <p key={idx} className="text-sm sm:text-base leading-relaxed text-[#443831]">
            {renderInline(trimmed)}
          </p>
        );
      })}
    </div>
  );
}
