import { useDisclosure } from '@mantine/hooks';
import React, { useEffect, useState } from "react";
import useFetch from "..classComponentHOC/useFetch";
function Demo() {
  const [opened, handlers] = useDisclosure(false);

  // Sets opened to true
  handlers.open();

  // Sets opened to false
  handlers.close();

  // Sets opened to true if it was false and vice versa
  handlers.toggle();
}

return (
    <div>
      <button>Open</button>
      <button>Close</button>
      <button>Toggle</button>
    </div>
)