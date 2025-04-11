import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import 'highlight.js/styles/github-dark.css'; 

import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import java from 'highlight.js/lib/languages/java';
import python from 'highlight.js/lib/languages/python';
import cpp from 'highlight.js/lib/languages/cpp';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('java', java);
hljs.registerLanguage('python', python);
hljs.registerLanguage('cpp', cpp);

const SampleCode = ({ Java, Python, JS, CPlusPlus }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const getCodeContent = () => {
    switch (selectedLanguage) {
      case "Python":
        return Python;
      case "Java":
        return Java;
      case "JavaScript":
        return JS;
      case "C++":
        return CPlusPlus;
      default:
        return Python;
    }
  };

  const getLanguageClass = () => {
    switch (selectedLanguage) {
      case "Python":
        return "language-python";
      case "Java":
        return "language-java";
      case "JavaScript":
        return "language-javascript";
      case "C++":
        return "language-cpp";
      default:
        return "language-python";
    }
  };

  return (
      <div className="w-1/2 rounded-xl overflow-hidden shadow-lg bg-[#1e1e1e] ">
        {/* Top bar */}
            <div className="flex items-center justify-between p-2 bg-[#2d2d2d] text-gray-400">
            {/* Left controls */}
            <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500" />
                <span className="h-3 w-3 rounded-full bg-yellow-500" />
                <span className="h-3 w-3 rounded-full bg-green-500" />
                Sample Code
            </div>

            {/* Right select */}
            <Select onValueChange={setSelectedLanguage}>
                <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Python" />
                </SelectTrigger>
                <SelectContent>
                <SelectItem value="Python">Python</SelectItem>
                <SelectItem value="Java">Java</SelectItem>
                <SelectItem value="JavaScript">JavaScript</SelectItem>
                <SelectItem value="C++">C++</SelectItem>
                </SelectContent>
            </Select>
            </div>
        {/* Code area */}
        <pre className="flex p-4 pl-10 text-md text-white leading-relaxed">
          <code
            className={`${getLanguageClass()} font-mono`}
            dangerouslySetInnerHTML={{
              __html: hljs.highlightAuto(getCodeContent()).value,
            }}
          />
        </pre>
      </div>
  );
};

export default SampleCode;
