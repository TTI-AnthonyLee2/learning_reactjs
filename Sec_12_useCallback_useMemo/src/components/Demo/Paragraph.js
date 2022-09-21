const Paragraph = ({ children }) => {
  console.log('[Paragraph] executing!');

  return (
    <p>{children}</p>
  );
}

export default Paragraph;