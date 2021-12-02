declare class Component {
  public render: (props) => void;
}

declare namespace avm {
  function render(Component, dom);
}

