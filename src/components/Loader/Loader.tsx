import React, { FC } from 'react';
import * as ST from './styled.ts';

interface ILoaderProps {
  count: number
}

const Loader: FC<ILoaderProps> = ({count}) => {
  return (
    <ST.LoaderWrapper>
      <ST.LoaderContent>
        {Array.from({length: count}, (_, i) => i + 1).map( i => <ST.LoaderElement index={i}/>)}
      </ST.LoaderContent>
    </ST.LoaderWrapper>
  );
};

export { Loader };
