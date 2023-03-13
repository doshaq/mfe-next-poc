import {
  ImportRemoteOptions,
  importRemote,
} from "@module-federation/utilities";
import React, { useEffect, useId } from "react";
type MountingStrategy = {
  rootPathHref: string;
};
type Props = {
  system: ImportRemoteOptions;
  mountingStrategy: MountingStrategy;
};
type Bootstrap = {
  mount: (config: {
    mountPoint: HTMLElement;
    initialPathname: string;
    routingStrategy: string;
  }) => void;
};
export default function DynamicComponent({ system, mountingStrategy }: Props) {
  const id = useId();
  useEffect(() => {
    async function init() {
      const { mount } = await importRemote<Bootstrap>({ ...system });
      const localRoot = document.getElementById(id);
      if (localRoot)
        mount({
          mountPoint: localRoot,
          initialPathname: mountingStrategy.rootPathHref,
          routingStrategy: "browser",
        });
    }
    init();
  }, [mountingStrategy.rootPathHref]);
  return (
      <div id={id}></div>
  );
}
