import * as React from 'react';
import styled from 'styled-components';

const CodeBlockWrapper = styled.div`
  border: none;
  border-radius: 5px;
  background-color: #666;
  color: #fff;
  padding: 15px;
`;

const CodeBlock: React.SFC = (props) => {
  const { children } = props;
  return (
    <CodeBlockWrapper>
      {children}
    </CodeBlockWrapper>
  );
};

export default CodeBlock;
