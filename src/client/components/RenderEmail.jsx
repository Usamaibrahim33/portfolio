
import ReactDOMServer from 'react-dom/server';
import EmailTemplate from './EmailTemplate';
import fs from 'fs';


const renderEmail = (firstName, secondName) => {
  const htmlContent = ReactDOMServer.renderToString(
    <EmailTemplate firstName={firstName} secondName={secondName} />
  );

  fs.writeFileSync('emailTemplate.html', htmlContent);
};



export default renderEmail;