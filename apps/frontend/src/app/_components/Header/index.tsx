import ConsultationButton from "./ConsultationButton";
import Logo from "./Logo";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="mt-[48px] container text-white w-full flex items-center justify-between">
      <Logo />
      <Navigation />
      <ConsultationButton />
    </header>
  );
};

export default Header;
