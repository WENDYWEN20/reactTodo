import React  from "react";
export default function useDisclosure(
    OldComponent, // The component to be wrapped
  initialState, // The initial boolean state for `opened`
  callback = { onOpen: () => {}, onClose: () => {} }
) {
  return class NewComp extends React.Component {
    state = {
      opened: initialState,
    };
    //NewComp is a class-based component that holds its own internal state.
    //The opened state determines whether the disclosure is currently visible/active.
    handlers = {
      open: () => {
        this.setState({ opened: true }, callback.onOpen);
      },
      close: () => {
        this.setState({ opened: false }, callback.onClose);
      },
      toggle: () => {
        this.setState((prev) => ({ opened: !prev.opened }));
      },
      //open() sets opened to true, after the state is updated, it calls callback.onOpen if provided,
      //toggle(): Toggles the state. If it’s currently open, toggle will close it; if it’s closed, toggle will open it.
      //Unlike open() and close(), toggle() doesn’t call any callback directly.};
    };

    render() {
        const { opened } = this.state;
      return (
        <OldComponent {...this.props} opened={opened} handlers={this.handlers} />
      );
    }
  };
}
