"use client";

import { Button } from "@/components/ui/button";
import { javascript } from "@codemirror/lang-javascript";
import CodeMirror from "@uiw/react-codemirror";
import React from "react";

function CodePage() {
  const [value, setValue] = React.useState("");
  const [logs, setLogs] = React.useState<string[]>([]);

  const onChange = React.useCallback((val: string, viewUpdate: any) => {
    console.log("val:", val);
    setValue(val);
  }, []);

  const runCode = React.useCallback(() => {
    setLogs([]); // Clear previous logs

    // Capture console.log outputs
    const originalLog = console.log;
    console.log = (...args) => {
      setLogs((prevLogs) => [...prevLogs, args.join(" ")]);
      originalLog(...args);
    };

    try {
      // Use eval to execute the code
      eval(value);
    } catch (e: any) {
      setLogs((prevLogs) => [...prevLogs, `Error: ${e.message}`]);
    } finally {
      // Restore the original console.log function
      console.log = originalLog;
    }
  }, [value]);

  return (
    <>
      <div >
        <div className="w-full m-2">
          <CodeMirror
            value={value}
            theme={"dark"}
            className="w-full m-2"
            extensions={[javascript({ jsx: true })]}
            onChange={onChange}
          />
          <Button onClick={runCode} style={{ marginTop: "20px" }}>
            Run Code
          </Button>
        </div>
        <div style={{ marginTop: "20px" }}>
          <h3>Output:</h3>
          <pre>{logs.join("\n")}</pre>
        </div>
      </div>
    </>
  );
}

export default CodePage;
