
const EmailTemplate = ({ firstName, secondName }) => {
  return (
    <div>
      <h1>Hello {firstName} {secondName},</h1>
      <p>This is your email content.</p>
    </div>
  );
};

export default EmailTemplate;
