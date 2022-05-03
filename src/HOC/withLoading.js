import React from "react";

const withLoading = (WrappedCompoent, defaultLoading = false) => {
  return class NewComponent extends React.Component {
    state = {
      isLoading: defaultLoading
    };

    hanldeSetLoading = (isLoading) => {
      this.setState({
        isLoading: isLoading
      });
    };

    renderLoadingComponent = (loadingType) => {
      switch (loadingType) {
        case "normal":
          return <h1>Loading...</h1>;
        case "spinner":
          return <h1>SpinerLoading...</h1>;
        default:
          return <h1>Loading...</h1>;
      }
    };

    render() {
      return (
        <WrappedCompoent
          {...this.props}
          isLoading={this.state.isLoading}
          hanldeSetLoading={this.hanldeSetLoading}
          renderLoadingComponent={this.renderLoadingComponent}
        />
      );
    }
  };
};

export default withLoading;
