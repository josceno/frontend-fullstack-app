
import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

function PdfViewer() {
  const [numPages, setNumPages] = useState(1);  
    return (
      
              <embed src={process.env.PUBLIC_URL + './clientes.pdf'} width="100%" height="1336px" />
          
  );
}

export default PdfViewer;




