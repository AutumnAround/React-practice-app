interface FooterProps {
    year: number; // Год передаётся как число
  }
  
  const Footer = ({ year }: FooterProps) => {
    return (
      <footer>
        <p>© {year} Мой сайт. Все права защищены.</p>
      </footer>
    );
  };
  
  export default Footer;
  