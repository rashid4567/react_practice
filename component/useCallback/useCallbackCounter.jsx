import React, { useMemo } from "react";

const Child = React.memo(({onClick})=>{
   return<button onClick={onClick}>Increment(child)</button>
})

export default Child;