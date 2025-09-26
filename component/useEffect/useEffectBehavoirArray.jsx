import React, { useState, useEffect } from "react";

function EffectComparison() {
  const [count, setCount] = useState(0);

  // Case 1: No dependency array
  useEffect(() => {
    console.log("🔥 Effect with NO array → runs after every render");
    return () => console.log("🧹 Cleanup before next render (NO array)");
  });

  // Case 2: Empty dependency array
  useEffect(() => {
    console.log("✅ Effect with [] → runs only once (on mount)");
    return () => console.log("🧹 Cleanup (only on unmount) for []");
  }, []);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default EffectComparison;
