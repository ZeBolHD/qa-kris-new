const Navigation = () => {
  return (
    <nav className="w-fit h-full">
      <ul className="flex gap-[24px] h-full text-[20px] font-semibold">
        <li>
          <a href="#main" className="text-primary-pink">
            Главная
          </a>
        </li>
        <li>
          <a href="#about">Об авторе</a>
        </li>
        <li>
          <a href="#q&a">Вопрос-ответ</a>
        </li>
        <li>
          <a href="#reviews">Отзывы</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
