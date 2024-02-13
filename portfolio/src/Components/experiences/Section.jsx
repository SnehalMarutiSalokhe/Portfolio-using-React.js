import React from "react";

export default function Section({children, ...props}) {
  return (
    <section {...props}>
     
      {children}
    </section>
  );
}
