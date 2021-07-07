import React from 'react';
import styled from 'styled-components';

const BillingPageStyles = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-left: 15px;
  flex-direction: column;
  margin-top: 75px;
  z-index: 10;
  p {
    max-width: 400px;
    font-size: 3rem;
  }
`;

export default function BillingPage() {
  return (
    <BillingPageStyles>
      <p>Billing Page 🧾</p>
    </BillingPageStyles>
  );
}
