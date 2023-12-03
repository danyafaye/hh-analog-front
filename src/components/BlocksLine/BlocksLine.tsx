import { FC, useMemo } from 'react';

import * as ST from './styled.ts';

type BlocksLineProps = {
  value: string;
  onClickHandler: (value: string) => void;
  valuesArray: string[];
};

const BlocksLine: FC<BlocksLineProps> = ({ value, onClickHandler, valuesArray }) => {
  const renderBlocks = useMemo(() => {
    return valuesArray.map((it) => (
      <ST.Block
        isActive={it === value}
        onClick={() => onClickHandler(it)}
      >
        {it}
      </ST.Block>
    ));
  }, [valuesArray]);

  return <ST.BlocksLineWrapper>{renderBlocks}</ST.BlocksLineWrapper>;
};

export { BlocksLine };
