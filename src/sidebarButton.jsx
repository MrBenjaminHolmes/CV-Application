function SidebarButton({ icon, alt, onClick }) {
  return (
    <button onClick={onClick}>
      <img src={icon} alt={alt} />
    </button>
  );
}

export default SidebarButton;
