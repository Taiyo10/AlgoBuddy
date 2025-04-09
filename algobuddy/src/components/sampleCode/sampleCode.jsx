import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SampleCode = ({ Java, Python, JS, CPlusPlus }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const renderCode = () => {
    switch (selectedLanguage) {
      case "Python":
        return <pre><code>{Python}</code></pre>;
      case "Java":
        return <pre><code>{Java}</code></pre>;
      case "JavaScript":
        return <pre><code>{JS}</code></pre>;
      case "C++":
        return <pre><code>{CPlusPlus}</code></pre>;
      default:
        return<pre><code>{Python}</code></pre>;
    }
  };

  return (
    <div className="flex flex-col items-start gap-6">
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

      {renderCode()}
    </div>
  );
};

export default SampleCode;
