import {
  Container as MuiContainer,
  ContainerProps as MuiContainerProps,
} from '@material-ui/core';

type ContainerProps = MuiContainerProps & {
  sx?: Record<string, any>;
};

function Container(props: ContainerProps) {
  return <MuiContainer {...props} />;
}

export default Container;
