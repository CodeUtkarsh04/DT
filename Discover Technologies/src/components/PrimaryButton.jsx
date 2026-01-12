const PrimaryButton = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className="primary-btn">
      <span>{text}</span>
      <span className="arrow">→</span>
    </button>
  );
};

export default PrimaryButton;
