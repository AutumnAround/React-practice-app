interface HeaderProps {
    title: string; // Описываем, что `title` — это строка
  }
  
  const Header = ({ title }: HeaderProps) => {
    return (
      <header>
        <h1>{title}</h1> {/* Используем переданный заголовок */}
      </header>
    );
  };
  
  export default Header;
  