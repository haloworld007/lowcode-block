import React, { forwardRef, ForwardRefRenderFunction } from 'react';

interface IBlockProps {
  children?: React.ReactNode;
}

const Block = (props: IBlockProps, ref: any) => {
  return <div ref={ref}>{props.children}</div>;
};

const RefBlock = forwardRef(Block as ForwardRefRenderFunction<any, IBlockProps>);
RefBlock.displayName = 'Block';

export default RefBlock;
