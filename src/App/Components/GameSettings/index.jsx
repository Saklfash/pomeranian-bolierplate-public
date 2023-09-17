import './styles.css';

export const GameSettings = ({ children, label }) => {
  return (
    <div className="game-settings-container">
      <span className="game-label">{label}</span>
      {children}
    </div>
  );
};

export const GameSettingsOutput = ({ children }) => {
  return <div className="game-output">{children}</div>;
};
